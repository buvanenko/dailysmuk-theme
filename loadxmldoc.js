

var main_url = 'https://raw.githubusercontent.com/buvanenko/dailysmuk-theme/main/'
var theme = main_url+'xml/theme.xml'

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


