window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
    var eventFactory = function () {
        return function () {
           
           var retVal= {
                //raise is called when that event occures - so placed in method that has the operation going on
                //event Arg is passed at that point about what ever notification the listener wishes to know
                raise: function (sender) {
                    //method to make some cleanup update so that other variables not passed as an argument at the point of raise will be ready or injected
                    (function (sender, that, f) {
                        //some init b4 calling event subscribers
                        //that is the given event in context still persisted, that is a connection back to the subscribers
                        f(that);// f broadcasts the notification to all listeners
                    })(sender,//sender is the sender reference it the this of the point of raising the event
                    this,// this is a reference to the given event in context
                    function (that) {//find all subscribers and call them
                        for (var i = 0; i < retVal.subscribe.length; i++) {
                            that.subscribe[i]({ //now pass all json parameters you want to be availale to all event handlers
                                sender: sender
                            });
                        }
                    });
                },
                subscribe: []// every event maintains a list of subscribers
           };
           return retVal;
        };
    };
  //  console.log(eventFactory);
    DIContainer.inject("eventFactory", eventFactory, "Not Implemented");
});