pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Ebenezr/gallery.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    emailext body: 'Pipeline Failed', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failed', to: 'ebenezarbukosia@gmail.com'
                }

            }
        }
    }
}
