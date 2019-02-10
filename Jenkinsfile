

pipeline {
    agent none

    triggers {
        upstream(upstreamProjects: 'kurlytail/gen-lib/master', threshold: hudson.model.Result.SUCCESS)
    }

    parameters {
        string(defaultValue: "0.0", description: 'Build version prefix', name: 'BUILD_VERSION_PREFIX')
        string(defaultValue: "", description: 'Build number offset', name: 'BUILDS_OFFSET')
    }

    stages {
        stage('Prepare env') {
            agent {
                label 'master'
            }

            steps {
                script {
                    loadLibrary()
                    env['NPM_VERSION_NUMBER'] = getNpmVersion 'kurlytail/gen-cmake/master', params.BUILD_VERSION_PREFIX, params.BUILDS_OFFSET
                    currentBuild.displayName = env['NPM_VERSION_NUMBER']
                }
            }
        }

        stage ('NPM Build') {
            agent {
                label 'node-build'
            }

            tools {
                hudson.plugins.cmake.CmakeTool "cmake"
            }

            steps {
                sh 'rm -rf *'
                checkout scm
                nodejs(nodeJSInstallationName: 'Node') {
                    sh 'echo $PATH'
                    sh 'ls -l /var/lib/jenkins/tools/hudson.plugins.cmake.CmakeTool/3.13.4/bin'
                    sh '/var/lib/jenkins/tools/hudson.plugins.cmake.CmakeTool/3.13.4/bin/cmake'
                    sh 'npm install --no-save'
                    sh 'npm version $NPM_VERSION_NUMBER'
                    sh 'npm run lint'
                    sh 'npm run test'
                    junit 'test-report.xml'
                    sh 'npm publish'
                }
            }
        }
    }
}