pipeline {
    agent { label 'dev' }

 stages {
        stage('Build') {
            steps {
                sh 'pwd'
                sh 'npm install'
                sh 'npm run build --if-present'
            }
        }
        stage('Deploy') {
            steps {
                 script {
                    try {
                        sh 'docker volume inspect vol_agent'
                        sh 'cp -rf $(pwd)/dist/* /var/lib/docker/volumes/vol_agent/_data/'
                    }
                    catch (Exception e) {
                        sh 'echo "+ creating volum becaus it doesn exist"'
                        sh 'docker volume create vol_agent'
                        sh 'docker build -t front-agent .'
                        sh 'docker run -v vol_agent:/usr/share/nginx/html --name front-agent --restart always -d -p 3000:80 front-agent'
                    }
                }
            }
        }
    }
}
