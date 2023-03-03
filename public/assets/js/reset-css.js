function addcss(css) {
    var d = new Date();
    var n = d.getTime();
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("link");
    s.setAttribute("rel", "stylesheet");
    s.setAttribute("href", css + "?v=" + n);
    head.appendChild(s);
}

addcss("/assets/css/style.css");
