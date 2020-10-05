pipeline {
  agent any
    
  tools {nodejs "NodeJs"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/connorturok27/newman-runner'
      }
    }
     
    stage('Build') {
      steps {
        sh 'Install dependencies'
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
