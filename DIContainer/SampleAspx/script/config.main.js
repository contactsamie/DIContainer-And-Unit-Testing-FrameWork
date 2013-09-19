//first i configure hte calendar
samqode.main.API =  {
    url: "../../wcalendar_service/wcalendar.ashx"
};

samqode.main.DIContainer.loadScripts([ 
    
    "../../TemplateProject/core/js/main.js",// load application
  "script/integration.main.js"// then i integrate 
]);

