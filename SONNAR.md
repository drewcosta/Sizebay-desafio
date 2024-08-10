Sonar: 
Analyze "front_test": sqp_56ae74d62c085c36f40435a7ca608d00fb858971

sonar-scanner.bat -D"sonar.projectKey=front_test" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_56ae74d62c085c36f40435a7ca608d00fb858971" 

sonar-scanner.bat -D"sonar.projectKey=front_test" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_56ae74d62c085c36f40435a7ca608d00fb858971" -D"sonar.sonar.javascript.lcov.reportPaths=./coverage/lcov.info"

Test:

https://www.npmjs.com/package/jest-sonar-reporter

npm test -- --coverage --watchAll

"jest": {
    "collectCoverageFrom": [
      "src/components/**/*.ts",
      "!**/node_modules/**"
    ],
    "coverageReporters": [
      "text-summary",
      "lcov",
      "cobertura"
    ],
    "testMatch": [
      "**/*.test.ts"
    ]
  },

  "jestSonar": {
    "reportPath": "coverage",
    "reportFile": "test-reporter.xml",
    "indent": 4
  }

Config Report Sonar:

Criar na Raiz: sonar-project.properties

# Must be unique in a given SonarQube instance
sonar.projectKey=front_test

# This is the name and version displayed in the SonarQube UI.
# Was mandatory prior to SonarQube 6.1.
sonar.projectName=My project
sonar.projectVersion=1.0
 
# Path is relative to the sonar-project.properties file.
# Replace "\" by "/" on Windows.
# This property is optional if sonar.modules is set. 
sonar.sources=src
 
# Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8

sonar.coverage.exclusions=src/assets/**/*, src/contexts/**/*, src/hooks/**/*, src/styles/**/*, src/types/**/*, src/utils/**/*, src/*

sonar.javascript.lcov.reportPaths=coverage/lcov.info 