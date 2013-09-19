window.samqode.main.DIContainer.ready(function (window, $, DIContainer) {


    var readyMethods = [];

    samqode.main.ready = function (f) {
        if (f && typeof f === "function") {
            DIContainer.log("main ready method is injecting " + f.name);
            readyMethods.push(f);
        }
    };
  var Interfaces =  DIContainer.InterfaceFactory();//create interface so all can have access even though not ready
   //pass it to every one to use FOR THEIR METHOD DEFINATION
  DIContainer.Interface(new Interfaces());
    console.log(" DIContainer.Interface(interfaces);");
   
    samqode.main.DIContainer.loadScripts(["../core/js/core.loadScript.js"]);

  
    var entryPoint = function (window, $, DIContainer) {
        console.log("now inject all the concrete ");
        Interfaces.prototype.eventFactory = (DIContainer.inject("eventFactory"))() || Interfaces.prototype.eventFactory;
        Interfaces.prototype.DOM = DIContainer.inject("DOM") || Interfaces.prototype.DOM;
        Interfaces.prototype.injFakeHello = DIContainer.inject("hello") || Interfaces.prototype.injFakeHello;

        console.log("NOW THAT WE HAVE CONCRETE INJECTED, WE CAN INVOKE AND BE SURE EVERYONE WILL ALREADY HAVE CONCRETE");


        //configure internal api and events
        DIContainer.log("Loading api ...");

        var internalApi = (function (api) {
            var _api = (function (api) {
                api || (console && console.warn("No config file provided!"));
                return api;
            })(api) || {
                url: "../../AjaxServiceLayerAccess/AjaxServices.ashx"
            };
            _api.DOM = Interfaces.prototype.DOM;
            return _api;
        })(samqode.main.API || false);

        DIContainer.log("got event factory");
      

        DIContainer.log("creating concrete events");
        internalApi.events = {
            //create events
            myBoxClicked: Interfaces.prototype.eventFactory()
            //contextMenuItemClicked: eventFactory(),
            //contextMenuShow: eventFactory()
        };

        DIContainer.log("creating event on methods");
        internalApi.on = function (f, callBack) {
            (typeof f === "string") &&
                internalApi.events[f] &&
                (typeof callBack === "function") &&
                internalApi.events[f].subscribe.push(callBack); //push subscription
        };

        DIContainer.log("running the ready methods ");

        for (var q = 0; q < readyMethods.length; q++) {
            DIContainer.log("running :" + readyMethods[q].name);
            readyMethods[q]( internalApi);//passed the correct jquery
        }

        DIContainer.log("preparing sample click handler");
        $(".hello").on("click", function () {
           
            internalApi.events.myBoxClicked.raise(this); //moooooo
        });
    };
    DIContainer.log("entry point defined, now definig main function");
    samqode.main.DIContainer.Main(function (window, $, DIContainer) {
        entryPoint(window, $, DIContainer);
    });
});