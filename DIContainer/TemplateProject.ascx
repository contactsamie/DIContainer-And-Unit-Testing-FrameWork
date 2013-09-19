<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="TemplateProject.ascx.cs" Inherits="RosterWare.Web.TemplateProject.TemplateProject" %>

<link href="../../TemplateProject/core/css/main.css" rel="stylesheet" />
<link href="../../TemplateProject/lib/bootstrap/css/bootstrap.workoptics.css" rel="stylesheet" />
<link href="../../TemplateProject/lib/jquery-ui-1.9.2/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />


<script  src="../../TemplateProject/lib/jquery/jquery-1.9.1.js"></script>
<script src="../../TemplateProject/core/js/DIContainer.js"></script>
<script src="../../TemplateProject/core/js/InterfaceFactory.js"></script>
<script>
    window.jQuery_1_9_2 = jQuery.noConflict();
    window.pad00 = function (n) {
        return ("0" + n).slice(-2);
    };
    jQuery_1_9_2.ajaxSetup({
        cache: true
    });
    window.samqode = {};
    window.samqode.project = "TemplateProject";
    window.samqode[window.samqode.project] = {};
    window.samqode.main = window.samqode[window.samqode.project];
    window.samqode.version="1." + (((new Date()).getTime() * 10000) + 621355968000000000);
    window.samqode.main.DIContainer = new window._DIContainer(window.samqode.version, jQuery_1_9_2);
</script>

<script  src="../../TemplateProject/lib/jquery-ui-1.9.2/external/jquery.cookie.js"></script>
<script  src="../../TemplateProject/lib/jquery-ui-1.9.2/ui/minified/jquery-ui.min.js"></script>

<div class="hello"> hello world </div>
