<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="DIContainer.SampleAspx.Default" %>

<%@ Register Src="~/TemplateProject/TemplateProject.ascx" TagPrefix="uc1" TagName="TemplateProject" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <uc1:TemplateProject runat="server" id="TemplateProject" />
            <script src="script/config.main.js"></script>
        </div>
    </form>
</body>
</html>