window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
    var example = function () {
        return o + " world";
    };

    DIContainer.inject("hello", example, "Not Implemented");
});