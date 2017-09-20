/*  ////////////
    Customizable 
*/  ////////////

var websites = [
    'parsa1.com',
    'parsamivehchi.com',
    'mivehchi.net',
    'codepen.io/parsamivehchi',
    'login.one.com/cp/',
    'mail.one.com',
    'reddit.com',
    'twitter.com',
    'google.com',
    'netflix.com',
    'inbox.google.com',
    'calendar.google.com/calendar/render#main_7',
    'youtube.com/feed/subscriptions',
    'drive.google.com',
    'docs.google.com',
    'slides.google.com',
    'sheets.google.com',
    'photos.google.com',
    'translate.google.com',
    'github.com',
    'htmlformatter.com/'
];
var colors = [
    '#00ffff',
    '#1047c6',
    '#00b9ff',
    '#00bc4b',
    '#ffce00',
    '#ffb300',
    '#ff8300',
    '#a6f9ce',
    '#cfff04',
    "#00fcff"
    
];




/*  ////////////////////
    Execute on page load
*/  ////////////////////



websites.sort();

var name;
var website;

window.onload = load;
function load() {
    c = 0;
    k = -1;
    e = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("clock").style.color = e,
    document.getElementById("search").style.background = e,
    document.getElementById("top-slider").style.background = e;

    clock();
}

// Clock

function clock() {
    var e = new Date,
        h = e.getHours(),
        m = e.getMinutes();

    10 > h && (h = "0" + h), 10 > m && (m = "0" + m);

    document.getElementById("clock").textContent = h + ":" + m,
    setTimeout("clock()", 1000)
}



/*  //////
    Events
*/  //////



// Check for Input

function search(event) {
    var i = document.getElementById("input").value.toLowerCase();
    classCount = document.getElementsByClassName("prediction").length - 1;
    13 == event.keyCode && goToUrl();
    if (event.keyCode == 40) {
        if (k < classCount)
            k++;
        else
            return;
        document.getElementById("input").value = document.getElementsByClassName("prediction")[k].textContent;
        return;
    }
    if (38 == event.keyCode) {
        if (k != 0)
           k--;
        else 
            return;
        document.getElementById("input").value = document.getElementsByClassName("prediction")[k].textContent;
        return;
    }
    function startsWith() {
        for (var a = 0; a < websites.length; a++)
            if (websites[a].indexOf(i) == 0) {
                var b = "<a class='prediction' href='http://",
                    m = "' onclick='sliderAnimation()'>",
                    e = "</a>";
                    name = websites[a].slice(0, websites[a].indexOf(".")),
                    website = websites[a],
                    document.getElementById("predictions").innerHTML += b + website + m + name + e
            }
    }
    document.getElementById("predictions").innerHTML = "", "" != i && startsWith()
}

// Input Processor

function goToUrl() {
    var i = document.getElementById("input");
    var t = i.value.toLowerCase();

    if ("" == t) {
        i.placeholder = 'Type here';
        i.focus();
        return;
    }
    else if (name == t)
        window.location.assign("http://" + website)
    else if (t.indexOf(" ") >= 0)
        window.location.assign("https://www.google.ca/webhp?gws_rd=cr&ei=vzLHWMrZDoucjwOQsq6oCw#newwindow=1&q=" + t)
    else if (-1 != t.indexOf("."))
        window.location.assign(-1 != t.indexOf("http") ? t : "http://" + t)
    else if (-1 != t.indexOf("/r/"))
        window.location.assign("https://reddit.com" + t)
    else 
        window.location.assign("https://www.google.ca/webhp?gws_rd=cr&ei=vzLHWMrZDoucjwOQsq6oCw#newwindow=1&q=" + t)
    sliderAnimation();
}

function sliderAnimation() {
    document.getElementById("top-slider").style.height = "100vh";
}
