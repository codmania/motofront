"use strict";

function openProfile(evt, selected) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(selected).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("profileTab").click();

function openSideNav() {
    document.getElementById("mt_sidenav").style.width = "150px";
    document.getElementById("home").style.marginLeft = "150px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSideNav() {
    document.getElementById("mt_sidenav").style.width = "0";
    document.getElementById("home").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
}
