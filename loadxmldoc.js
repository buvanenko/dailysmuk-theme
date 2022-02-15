
var theme = 'https://raw.githubusercontent.com/buvanenko/dailysmuk-theme/main/xml/theme.xml'

function loadXMLDoc(fragment=null)
{
xhttp=new XMLHttpRequest();
if (fragment==null) {
    fragment = theme
}
xhttp.open("GET", fragment, false);
xhttp.send();
return xhttp.response;
}

function loadXMLFragment(fragment)
{
xhttp=new XMLHttpRequest(); 
xhttp.open("GET", fragment, false);
xhttp.send();
return xhttp.responseXML;
}


