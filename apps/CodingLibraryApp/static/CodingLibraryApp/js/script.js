// Side Navbar
var toggle_nav = true;
function toggleNav() {

    var element = document.getElementById("toggleNavbar");
    
    if(toggle_nav){
        element.classList.add("fa-caret-square-left");
        element.classList.remove("fa-caret-square-right");
        
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        toggle_nav = false;
    } else {
        element.classList.add("fa-caret-square-right");
        element.classList.remove("fa-caret-square-left");

        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        toggle_nav = true;
    }
}

// Toggle edit form for subnote
var toggle;
function ToggleEditForm(id) {
    if(toggle){
        $(`.editForm${id}`).css({"display" : "none"});
        toggle = false;
    } else {
        $(`.editForm${id}`).css({"display" : "block"});
        toggle = true;
    }
    console.log("Toggle: " + toggle + " editForm" + id);
}

// Toggle edit form for note
var toggle;
function ToggleEditFormNote(id) {
    if(toggle){
        $(`.editFormNote${id}`).css({"display" : "none"});
        toggle = false;
    } else {
        $(`.editFormNote${id}`).css({"display" : "block"});
        toggle = true;
    }
    console.log("Toggle: " + toggle + " editFormNote" + id);
}

$(document).ready(function(){
console.log("Webpage Loaded");

$(".panel").focusin(function(){
    $(this).css({"background-color" : "orange"});
});
$(".panel").focusout(function(){
    $(this).css({"background-color" : "white"});
});

// accordion javascript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log("Triggering");
        this.classList.toggle("active");
        var panel = this.nextElementSibling.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}   

// accordion javascript on sideNav
var acc = document.getElementsByClassName("nav_accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log("Triggering");
        this.classList.toggle("active");
        var panel = this.nextElementSibling.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}   

})
