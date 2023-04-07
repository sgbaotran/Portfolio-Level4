pipeline {
  agent any
  
  tools{
    nodejs "helloNode"
  }
  
  stages {
    stage('Set up') {
      steps {
        sh 'npm install' // Run the script
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm start' // Run the script
      }
    }
    
    
  }
