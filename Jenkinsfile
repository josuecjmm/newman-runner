pipeline {
    agent none 
    stages {
        stage('Build') { 
            steps {
                Build()
            }
        }
    }
}
def Build() {
    withDockerContainer("node:14")
    { 
        sh "npm install"
        sh "npm test"
    }
}
