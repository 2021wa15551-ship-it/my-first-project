pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo "Pulling code from GitHub..."
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat 'docker build -t node-docker-app .'
            }
        }

        stage('Tag Docker Image') {
            steps {
                bat 'docker tag node-docker-app pruthvi20/node-docker-app:latest'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Pushing image to Docker Hub..."
                bat 'docker push pruthviraj438/node-docker-app:latest'
            }
        }
    }
}
