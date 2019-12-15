// Handling Animation Window
// Removing Intro Screen

function remBeg() {
    document.getElementById('beg-animation').style.display = 'none';
    document.getElementById('container').style.display = 'block';
}

// setTimeout(remBeg(),8000);

setTimeout(remBeg, 8000);


// Scroll Animations
function scrollNav() {
    if (document.body.clientWidth > 992 || document.documentElement.clientWidth > 992) {
        document.getElementById('side-nav').style.transform="translateX(10em)";

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById('side-nav').style.transform = "translateX(0)";
        }
        else
            document.getElementById('side-nav').style.transform = "translateX(10em)";
    }
    else {
        document.getElementById('side-nav').style.transform="translateX(0)";
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById('side-nav').style.transform = "translateX(0)";
        }
        else
            document.getElementById('side-nav').style.transform = "translateX(0)";
    }
}


window.onscroll = function () {
    scrollNav();
};



// Toggling Navigation Panel
function showNavPanel(e) {
    document.getElementById(e).style.display="block";
    document.getElementById('container').style.display="none";
}


function hideNavPanel(e) {
    document.getElementById(e).style.display="none";
    document.getElementById('container').style.display="block";
}



// Toggling Sub-panels

function showPanel(e1,e2) {
    document.getElementById(e1).style.display="block";
    document.getElementById('side-nav').style.transform="translateX(10em)";
    document.getElementById(e2).style.visibility='hidden';
}

function hidePanel(e1,e2) {

    document.getElementById(e1).style.display="none";
    document.getElementById('side-nav').style.transform="translateX(0)";
    document.getElementById(e2).style.visibility='visible';
}

