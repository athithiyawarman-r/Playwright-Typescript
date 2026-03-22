var Environment;
(function (Environment) {
    Environment["LOCAL"] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEVELOPMENT";
    Environment["STAGING"] = "STAGING";
    Environment["PRODUCTION"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("Executing test on \"".concat(env, "\" environment."));
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
