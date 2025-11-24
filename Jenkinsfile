pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo "Pulling code from GitHub..."
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Running build step..."
                sh 'echo "Build step completed!"'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'echo "Tests completed!"'
            }
        }

        stage('Package') {
            steps {
                echo "Packaging application..."
                sh 'echo "Package step completed!"'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application..."
                sh 'echo "Deployment step completed!"'
            }
        }
    }
}
