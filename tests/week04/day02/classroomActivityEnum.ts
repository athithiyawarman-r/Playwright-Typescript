enum Environment {
  LOCAL="LOCAL",
  DEVELOPMENT="DEVELOPMENT",
  STAGING="STAGING",
  PRODUCTION="PRODUCTION"
}

function runTests(env: Environment): void{
  console.log(`Executing test on "${env}" environment.`);
}

runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);