pipeline {
    agent any

    environment {
        DOCKERHUB_CREDS = credentials('dockerhub')
        IMAGE_NAME = "node-docker-app"
        DOCKER_USER = "pruthviraj438"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t node-docker-app .'
            }
        }

        stage('Docker Login') {
            steps {
                bat """
                docker login -u %DOCKERHUB_CREDS_USR% -p %DOCKERHUB_CREDS_PSW%
                """
            }
        }

        stage('Tag Docker Image') {
            steps {
                bat """
                docker tag node-docker-app %DOCKER_USER%/%IMAGE_NAME%:latest
                """
            }
        }

        stage('Push to Docker Hub') {
            steps {
                bat """
                docker push %DOCKER_USER%/%IMAGE_NAME%:latest
                """
            }
        }
    }
}
