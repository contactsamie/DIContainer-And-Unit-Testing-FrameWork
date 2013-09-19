window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
       DOM = {
        fadeInMyBox: function () {
            $(".hello").fadeIn(); 

        },
        fadeOutMyBox: function () {
            $(".hello").fadeOut();
        },
        changeWidthOfMyBox: function (o) {
            DIContainer.TEST({

                description: "JHJKHFHFJHFJ ",
                method: function () {
                    return (typeof o==="string"? true : false);
                },
                msg: "KGKJGJKJKG "
            });
            console.log("box width changing .....");
            $(".hello").css("width", o);
        }
    };

    DIContainer.inject("DOM", DOM, "Not Implemented");
});