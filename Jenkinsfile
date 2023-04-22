pipeline{
    agent{
        docker {image 'node:16-alpine'}
    }

    stages('tet'){
        steps{ 
            sh 'docker version'
        }
    }
}