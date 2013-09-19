/// <reference path="" />
//called one time main script
samqode.main.DIContainer.loadScripts([
    "../core/js/dependency/inject.dom.js",
    "../core/js/dependency/inject.hello.js",//this would load the core dependencies
    "../core/js/dependency/inject.eventFactory.js",
    //....load other dependencies
     "../core/js/dependency/patch/patch_sample.js",
     "../core/js/main.Test.js",
    "../core/js/start.js",// will load the patches at this point, one time
    "../core/js/Interface.Test.js",
    "../core/js/DIContainer.selfTest.js"
   
]);