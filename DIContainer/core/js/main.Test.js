// unit test can be put is same or different files
window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
    //sinple test - passing

    DIContainer.TESTING({
        description: "Simple hello method test A",
        method: function () {
            var result = (DIContainer.inject("hello"))("sam"); return result === "sam patches *****";
        },
        msg: "A Simple hello methoed patched should return sam patched *****"
    });

    DIContainer.TESTING({
        description: "Simple hello method test B",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result === "sam patches *****";
        },
        msg: "B Simple hello methoed patched should return sam patched *****"
    });

    DIContainer.TESTING({
        description: "Simple hello method test C",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result === "sam patches *****";
        },
        msg: "C Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: true,
        operator: function (actual, expected) { return actual === expected ? true : false; },
        resultMethod: function (condition, testDescription, message) { }
    });

    DIContainer.TESTING({
        description: "Simple hello method test D",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result;
        },
        msg: "D Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: "sam patches *****",
        operator: function (actual, expected) { return actual === expected ? true : false; },
        resultMethod: function (condition, testDescription, message) { }
    });

    DIContainer.TESTING({
        description: "Simple hello method test E",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result;
        },
        msg: "E Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: "sam patches *****",
        operator: function (actual, expected) {
            return actual;
        },
        resultMethod: function (condition, testDescription, message) { }
    });

    DIContainer.TESTING({
        description: "Simple hello method test F",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result;
        },
        msg: "F Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: true,
        operator: function (actual, expected) {// doesnt care about expected
            return (actual === "sam patches *****");
        },
        resultMethod: function (condition, testDescription, message) { }
    });

    DIContainer.TESTING({
        description: "Simple hello method test G",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result;
        },
        msg: "G Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: true,
        operator: function (actual, expected) {// doesnt care about expected
            return (actual !== "sam patches *****");
        },
        resultMethod: function (condition, testDescription, message) { }
    });

    DIContainer.TESTING({
        description: "Simple hello method test H",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result;
        },
        msg: "H Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: false,
        operator: function (actual, expected) {// doesnt care about expected
            return (actual !== "sam patches *****");
        },
        resultMethod: function (condition, testDescription, message) { }
    });

    DIContainer.TESTING({
        description: "Simple hello method test I",
        method: function () {
            var requiredMethod = DIContainer.inject("hello");
            var result = requiredMethod("sam");
            return result;
        },
        msg: "I Simple hello methoed patched should return sam patched *****",
        args: [],
        expected: "SAM",
        operator: function (actual, expected) {// ONLY WAY IT CARES about expected
            return expected === "SAM";
        },
        resultMethod: function (condition, testDescription, message) { }
    });
});