// unit test can be put is same or different files
window.samqode.main.DIContainer.ready(function (win, $, DIContainer) {
    //sinple test - passing
    DIContainer.log("");
    DIContainer.log("");
    DIContainer.log("********************************* START - TESTING INTERFACES ******************************************************");
    DIContainer.log("*");
    DIContainer.log("*");
    DIContainer.log("*");
    DIContainer.TESTING({
        description: "(DIContainer.Interface()).eventFactory ",
        method: function () { return (DIContainer.Interface()).eventFactory ? true : false; },
        msg: "(DIContainer.Interface()).eventFactory "
    });
    DIContainer.TESTING({
        description: "(DIContainer.Interface()).DOM ",
        method: function () { return (DIContainer.Interface()).DOM ? true : false; },
        msg: "(DIContainer.Interface()).DOM "
    });
    DIContainer.log("*");
    DIContainer.log("*");
    DIContainer.log("********************************* END - TESTING INTERFACES ******************************************************");
    DIContainer.log("");
    DIContainer.log("");
});