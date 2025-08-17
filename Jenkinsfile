pipeline {
    agent any

    environment {
        // Set GitHub repo URL (replace with yours)
        GIT_REPO = 'https://github.com/EslamSaloka/bugaia-website.git'

        // SonarQube (configured in Jenkins -> Manage Jenkins -> Configure System)
        SONARQUBE_ENV = 'SonarQubeServer'

        // Docker image name (used for Trivy scan)
        IMAGE_NAME = "nextjs-app:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: "${GIT_REPO}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    sh '''
                        npx sonar-scanner \
                          -Dsonar.projectKey=nextjs-app \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=$SONAR_HOST_URL \
                          -Dsonar.login=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t ${IMAGE_NAME} .
                '''
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                  trivy image --exit-code 0 --severity HIGH,CRITICAL ${IMAGE_NAME}
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
