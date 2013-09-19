; (function (w) {
    var $ = {};
    var log = function (o) {
        console.log(o);
    };
    var warn = function (o) {
        console.warn(o);
    };
    var error = function (o) {
        console.error(o);
    };
    var info = function (o) {
        console.info(o);
    };
    var dir = function (o) {
        console.dir(o);
    };
    w._DIContainer = function (version, jQuery) {
        log("creating instance of di");
        $ = jQuery;
        _DIContainer.prototype.versionControl = version || "";
        this.dependencies = (this.container || {});
        _DIContainer.prototype.mainMethod = [];
    };

    _DIContainer.prototype.log = log;
    _DIContainer.prototype.warn = warn;
    _DIContainer.prototype.error = error;
   
    _DIContainer.prototype.testContext = {};

    var _testDeside = function (condition, testDescription, message, resultMethod) {
        // console.log(condition);
        if (condition) {
            warn(testDescription + " - passed!");
        } else {
            error(testDescription + " - failed! " + (message || ""));
        }

        typeof resultMethod === "function" && resultMethod(condition, testDescription, message);
    };

    var _defaultTestOperator = function (actual, expected) {
        return actual === expected ? true : false;
    };
    _DIContainer.prototype.Interface = function (o) {
        if (o) {
            if (this.Interface.isSet) {
                error("Attemptng to reset API denied ...");
            } else {
                this.Interface.isSet = true;
                this.Interface.API = o;
            }
        } else {
            this.Interface.API || warn("retrieveing API : appears not to be set ...");
            return this.Interface.API;
        }
    };

    _DIContainer.prototype.TESTING = function (o) {
        if (typeof o.operator !== "function") {
            o.operator = _defaultTestOperator;
        }
        var ret = o.method.apply(this.testContext, o.args || []);
        // console.log(o.expected);
        o.expected = o.hasOwnProperty("expected") ? o.expected : true;
        _testDeside(o.operator(ret, o.expected), o.description, o.msg, o.resultMethod);
    };
    _DIContainer.prototype.methodsUnderTest = [];
    _DIContainer.prototype.TEST = function (o) {
        this.methodsUnderTest.push({
            description: o.description,
            method: o.method,
            args: o.args,
            expected: o.hasOwnProperty("expected") ? o.expected : true,
            msg: o.msg,
            operator: o.operator,
            resultMethod: o.resultMethod
        });
    };

    _DIContainer.prototype.speedPerformanceTest = function (description, f, arg) {
        var tmpContext = {};
        console.time((description || "speedPerformanceTest") + " speed");

        if (typeof f === "function") {
            f.apply(tmpContext, arg || []);
        } else {
            error((description || "speedPerformanceTest") + " method provided is not a function!")
        }

        console.timeEnd((description || "speedPerformanceTest") + " speed");
    };

    _DIContainer.prototype.runTest = function () {
        console.clear();
        console.time("Unit Tests Duration");
        console.group("Loading Unit Test Results... Please wait");
        for (var i = 0; i < this.methodsUnderTest.length; i++) {
            this.TESTING(this.methodsUnderTest[i]);
            this.speedPerformanceTest(this.methodsUnderTest[i].description,
               this.methodsUnderTest[i].method,
                this.methodsUnderTest[i].args);
        }
        console.groupEnd();
        console.timeEnd("Unit Tests Duration");
    };
    _DIContainer.prototype.ready = function (f) {
        log("registering a ready method:");
        log(f.name);
        f(window, $, this);
    };

    _DIContainer.prototype.addonMethod = [];
    _DIContainer.prototype.addon = function (f) {
        log("adding on  methods:");
        log(f.name);
        typeof f === "function" && this.addonMethod.push(f);
    };

    _DIContainer.prototype.executeAddonMethods = function () {
        log("executing addon methods:");
        for (var i = 0; i < this.addonMethod.length; i++) {
            log("executing : " + this.addonMethod[i].name);
            (this.addonMethod[i])(window, $, this);
        }
    };

    _DIContainer.prototype.mainMethod = [];
    _DIContainer.prototype.executeMain = function () {
        log("executing mainmethods:");
        for (var i = 0; i < this.mainMethod.length; i++) {
            log("executing : " + this.mainMethod[i].name);
            log( this.mainMethod);
            (this.mainMethod[i])(window, $, this);
        }
    };
    _DIContainer.prototype.Main = function (f) {
        log("registering a main method:");
        log(f.name);
        // executeSub();// must be synchronous
        this.mainMethod.push(f);
    };
    _DIContainer.prototype.versionControl = "1.0";
    _DIContainer.prototype.container = {};
    _DIContainer.prototype.facade = function () { dir(_DIContainer) };
    _DIContainer.prototype.info = {};
    _DIContainer.prototype.inject = function (name, dependency, info) {
        if (dependency) { //set
            if (name && (this.container[name] && name !== "__$INFO__" ? false : true)) {
                log("adding '" + name + "' dependency into di container");

                this.container[name] = dependency;
                if (info) {
                    this.container[name].__$INFO__ = this.container[name].__$INFO__ || {};
                    this.container[name].__$INFO__.info = info || false;
                }
            }
        } else {//get
            if (name && this.container[name]) {
                log("extracting " + name + " dependency from di container");
                return this.container[name];
            } else {
                warn("an attempt to extract '" + name + "' dependency from di container fails coz it cannot be found");
            }
            return false;
        }
    };
    _DIContainer.prototype.getDependencyInformation = function (name) {
        name === "__$INFO__" && warn("you cannot inject info __$INFO__");
        return this.container[name] && this.container[name].__$INFO__;
    }
    _DIContainer.prototype.isInjected = function (name) {
        name === "__$INFO__" && warn("you cannot inject info __$INFO__");
        log("request is put forward to check if  '" + name + "' dependency exists in di");
        console.log(this.container[name]);
        var res = this.container[name] ? true : false;
        console.log(res);
        return res;
    }
    _DIContainer.prototype.reject = function (name) {//pop
        if (name && this.container[name] && name !== "__$INFO__") {
            log("rejection of '" + name + "' dependency will be made");
            this.container[name] = undefined;
        }
    };
    _DIContainer.prototype.aGetScript = function (a, f, fail) {
        $.getScript(a, f).fail(fail);
    };
    var _callback = function ($) { };
    _DIContainer.prototype.wcalendarPatchLoader_get = function (p, i, t) {
        log("now loading " + p[i] + "?v" + _DIContainer.prototype.versionControl);
        p && p[i] && _DIContainer.prototype.aGetScript(p[i] + "?v" + _DIContainer.prototype.versionControl, function () {
            log("Loaded " + p[i] + "?v" + _DIContainer.prototype.versionControl + " now loading next file");
            recursiveHandler(p, i, t, _DIContainer.prototype.wcalendarPatchLoader_get);
        }, function (jqxhr, settings, exception) {
            log("attempt to load  failed! now trying evaluation ..." + p[i] + "?v" + _DIContainer.prototype.versionControl);
            log(settings);
            log(exception);

            //debuging loaded scripts
            log(eval(jqxhr.responseText));
            log("eval completed");
            recursiveHandler(p, i, t, _DIContainer.prototype.wcalendarPatchLoader_get);
        });
    };
    var recursiveHandler = function (p, i, t, wcalendarPatchLoader_get) {
        i++;

        if (i !== t) {
            wcalendarPatchLoader_get(p, i, t);
        } else {
            _callback($);
            _callback = function ($) { };//overide closure behaviour
        }
    };

    _DIContainer.prototype.loadScripts = function (arr, callback) {
        log("request is made to load these scripts:");
        log(arr);
        _callback = typeof callback === "function" ? callback : function ($) { };
        arr && (arr.length !== 0) && this.wcalendarPatchLoader_get(arr, 0, arr.length);
    };
})(window, jQuery, $);