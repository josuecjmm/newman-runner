pipeline {
    agent none
    stages {
        stage ('Node'){
            agent {
                docker {
                image 'node' 
                args '-p 3000:3000' 
                }   
            }
            steps {
                echo 'test'
            }
        }
    }
}
