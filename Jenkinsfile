pipeline {
    agent any
    environment {
        MONGODB_URI='mongodb+srv://ebenezarbukosia1:ChXTnWKUOjQml3rL@cluster0.aa1xofc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    }
    tools {
        nodejs 'nodejs'
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Ebenezr/gallery.git'
            }
            post {
                success {
                    slackSend (channel: '#week-2-ip1',color: '#00FF00', message: "SUCCESS: Checkout Stage of Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (https://gallery-b4yh.onrender.com)")
                }
                failure {
                    slackSend (channel: '#week-2-ip1', color: '#FF0000', message: "FAILURE: Checkout Stage of Job'${env.JOB_NAME} [${env.BUILD_NUMBER}]' (https://gallery-b4yh.onrender.com)")
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
            post {
                  success {
                    slackSend (channel: '#week-2-ip1', color: '#00FF00', message: "SUCCESS: Build Stage of Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (https://gallery-b4yh.onrender.com)")
                }
                failure {
                    slackSend (channel: '#week-2-ip1', color: '#FF0000', message: "FAILURE: Build Stage of Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (https://gallery-b4yh.onrender.com)")
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                success {
                    slackSend (channel: '#week-2-ip1', color: '#00FF00', message: "SUCCESS: Test Stage of Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (https://gallery-b4yh.onrender.com)")
                }
                failure {
                    slackSend (channel: '#week-2-ip1', color: '#FF0000', message: "FAILURE: Test Stage of Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (https://gallery-b4yh.onrender.com)")
                    emailext body: 'Pipeline Failed', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Pipeline Failed', to: 'ebenezarbukosia@gmail.com'
                }

            }
        }
    }
}

