pipeline {
  
  agent {
    dockerfile true
  }
  
  tools{
    nodejs "helloNode"
  }
  
  stages {
    stage('Set up') {
      steps {
        sh 'npm install' // Run the script
      }
    }
    
    stage('Create Image') {
      steps {
        sh 'docker build -t portfolio .' // Run the script
      }
    }

    stage('Push') {
      steps {
        sh 'docker login -u tephens03 -p 213052Bao' // Run the script
        sh 'docker push portfolio'
      }
    }
    
    
  }
}