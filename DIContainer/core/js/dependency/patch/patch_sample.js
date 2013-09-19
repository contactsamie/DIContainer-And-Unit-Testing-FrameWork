window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
    var I = DIContainer.Interface();

    var example = function (o) {
        console.log(" console.log(I);");
        console.log(I);
        I.DOM.changeWidthOfMyBox("200px");
        return o + " patches *****";
    };

    DIContainer.reject("hello");
    DIContainer.inject("hello", example, "Not Implemented");
});