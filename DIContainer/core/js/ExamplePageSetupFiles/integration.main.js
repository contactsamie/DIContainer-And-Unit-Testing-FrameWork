samqode.main.ready(function (SAMPLE, $) {
    SAMPLE.on("myBoxClicked", function (eventArg) {
        console.log("event fired ...");
        console.log(eventArg);
    });
});