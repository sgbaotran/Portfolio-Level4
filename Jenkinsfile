pipeline{
    agent any
    stages{
        stage('Test'){
            steps{ 
                sh 'docker version'           
            }
        }
        stage("Build"){
            steps{
                sh 'docker build --name pinance_frontend .'
            }
        }
        stage("Push"){
            steps{
                sh 'docker tag pinance_frontend tephens03/pinance-frontend .'
                sh 'docker push tephens03/pinance-frontend'
            }
        }
        stage("Clean up"){
            steps{
                sh 'docker stop pinance_frontend'
                sh 'docker rm pinance_frontend'
            }
        }

        stage("Run"){
            steps{
                sh 'docker run -p 3000:3000 pinance_frontend'
            }
        }




            
    }
}