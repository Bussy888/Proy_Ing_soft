   agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Ejecutar pruebas unitarias') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }

        stage('Ejecutar pruebas end-to-end') {
            steps {
                script {
                    sh 'npm run e2e'
                }
            }
        }

        stage('Construir la aplicación') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        // Opcional: Etapa para desplegar en Vercel
        
stage('Desplegar en Vercel') {
    steps {
        script {
            // Instalar Vercel CLI globalmente si aún no está instalado
            sh 'npm install -g vercel'

            // Iniciar sesión en Vercel con tus credenciales
            sh 'vercel login' // Esto te pedirá iniciar sesión y autenticarte con tu cuenta de Vercel

            // Desplegar la aplicación en Vercel
            sh 'vercel deploy --prod' // Puedes personalizar esta línea según tus necesidades
        }
    }
}
    }
