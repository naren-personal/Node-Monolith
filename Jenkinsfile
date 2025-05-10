pipeline{

    agent any

    stages{
        stage('build Docker'){
            steps{
                script{
                    sh 'docker build . -t node_monolith:latest'
                }
                
            }
        }

        stage ('run server'){
            steps{
                script{
                    sh 'docker run --name node_monolith -itd -p 3002:3000 node_monolith:latest'
                }
            }
        }

    }
}