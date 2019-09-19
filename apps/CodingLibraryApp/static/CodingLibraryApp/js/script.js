// Side Navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var toggle;

// Toggle edit form
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

$(document).ready(function(){
console.log("Webpage Loaded");

var toggle;

$(".edit").click(function(){
  

    // console.log($(this).parent().parent().children(".editForm").css({"display" : "none"}));
    // if(toggle){
    //     $(this).parent().html();
    //     console.log($(this).parent().parent().children(".editForm").css({"display" : "block"}));
    //     toggle = false;
    // } else {
    //     console.log($(this).parent().parent().children(".editForm").css({"display" : "none"}));
    //     toggle = true;
    // }
    // console.log(this);
    // console.log($(this).parent().parent().children(".editForm").css({"display" : "none"}));
    // console.log($(this).parent().parent().children("form").first().css({"display" : "none"}));
    // children("form").css({"display" : "hidden"}));
})

// accordion javascript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log("Triggering");
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}   

})
