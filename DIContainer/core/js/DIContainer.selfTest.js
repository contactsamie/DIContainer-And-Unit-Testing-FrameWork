(function () {
    var DIContainerProperty = ["info", "container", "versionControl", "methodsUnderTest"];
    var DIContainerMethods = ["loadScripts", "reject", "log", "warn", "error", "Main", "isInjected", "inject", "executeMain", "ready", "runTest", "speedPerformanceTest", "TEST","TESTING"];
    DIContainerProperty.join(DIContainerMethods);// methods are first class objects
    var di = new _DIContainer();
    di.TESTING({
        description: "Instance of _DIContainer creation test",
        method: function () { return di instanceof _DIContainer; },
        msg: "When a new DIContainer is created, the result should be an instance od _DIContainer"
    });

    for (var y = 0; y < DIContainerProperty.length; y++) {
        di.TESTING({
            description: "DI Container instance has a property " + DIContainerProperty[y],
            method: function () { return (DIContainerMethods[y] && (di[DIContainerProperty[y]] || di[DIContainerProperty[y]] === "") ? true : false) || false; },
            msg: "DIContainer must have a(n) " + DIContainerProperty[y] + " property"
        });
    }
    for (var y = 0; y < DIContainerMethods.length; y++) {
        di.TESTING({
            description: "DI Container instance has a method " + DIContainerMethods[y],
            method: function () { return (DIContainerMethods[y]&&(typeof di[DIContainerMethods[y]] === "function"))||false; },
            msg: "DIContainer must have a(n) " + DIContainerMethods[y] + " method"
        });
    }

    var prCy_Main = 0;
    di.TESTING({
        description: "Test that  DIContainer.executeMain fires methods in  DIContainer.Main",
        method: function () { di.Main(function () { prCy_Main++; }); di.executeMain(); return prCy_Main === 1; },
        msg: "When a method is passed to  DIContainer.Main, the method must be called when DIContainer.executeMain is called"
    });

    var prCy_ready = 0;
    di.TESTING({
        description: "Test that  DIContainer.ready fires methods passed to it immediately",
        method: function () { di.ready(function () { prCy_ready++; }); return prCy_ready === 1; },
        msg: "DIContainer.ready fires methods passed to it immediately"
    });
    di.TESTING({
        description: "Test the inject method - when name and method is passed to inject store it in di container",
        method: function () { di.inject("testName1", function () { return 100; }); return di.isInjected("testName1"); },
        msg: " when name and method is passed to inject, a it should be stored in di container"
    });

    di.TESTING({
        description: "Test the inject method - when only name  is passed to inject retrieve it from di container",
        method: function () { di.inject("testName2", function () { return 100; }); return (di.inject("testName2")() === 100); },
        msg: " when only name  is passed to inject retrieve it from di container"
    });

    di.TESTING({
        description: "Test the inject method - when info is provided, inject store dependency along with info in di container",
        method: function () { di.inject("testName3", function () { return 100; }, "some Info"); return (di.getDependencyInformation("testName3")).info === "some Info"; },
        msg: "Test the inject method - when info is provided, inject store dependency along with info in di container"
    });

    di.TESTING({
        description: "Test the reject method - when dependency is rejected, it should be removed and not injected",
        method: function () { di.inject("testName4", function () { return 100; }, "some Info"); di.reject("testName4"); return di.isInjected("testName4") },
        expected: false,
        msg: "Test the reject method - when dependency is rejected, it should be removed and not injected"
    });
})();