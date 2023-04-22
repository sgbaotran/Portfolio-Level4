pipeline{
    agent{
        docker {image 'node:16-alpine'}
    }

    stages('test'){
        steps{
            sh 'docker version '
        }
    }
}