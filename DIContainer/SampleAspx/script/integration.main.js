window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
    samqode.main.ready(function (internalApi) {
        internalApi.on("myBoxClicked", function (eventArg) {
            // console.log( );
            console.log("event fired ...");
            console.log(eventArg);
            console.log(internalApi);
            console.log($);
            DIContainer.Interface().DOM.changeWidthOfMyBox("1102px");
        });
    });
});