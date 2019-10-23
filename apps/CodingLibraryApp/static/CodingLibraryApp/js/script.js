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




// // Toggle edit form for subnote
// var toggle;
// function ToggleEditForm(id) {
//     var saved_content = $(`#comment${id}`).html();
//     console.log(id);
//     var content = $(`#comment${id}`).text();
//     $(`#comment${id}`).replaceWith($("#formTemplate"));
//     $("#formTemplate").attr('action', `edit/comment/${id}`);
//     $("#formTemplate").children("textarea").text(content).focusin();
//     console.log($("#formTemplate").attr('value', "dog beds" ));

//     $(document).on('keypress',function(e) {
//         if(e.which == 13) {
//             $("#updateButton").click();
//         }
//     });

//     if($("#formTemplate").focusout(function(){
//         console.log("Lost focus");
//         $("#updateButton").click();
//     }));

//     // if($("#formTemplate").focusout(function(){
//     //     $("#formTemplate").replaceWith(saved_content);
//     // }));

//     if(toggle){
//         // $(`.editForm${id}`).css({"display" : "none"});
//         toggle = false;
//     } else {
//         // $(`.editForm${id}`).css({"display" : "block"});
//         // $(this).html("<p>Replaced by this</p>");
//         console.log($(this));
//         toggle = true;
//     }
//     console.log("Toggle: " + toggle + " editForm" + id);
// }

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

// Ajax New Note Submission
// Disable native form submission
$('.noteForm').submit(function(e) {
    e.preventDefault();
    console.log("NoteFormAjax");
    console.log("The function is: " + $(this).attr("action"));
    $.ajax({
        // url: $(this).attr("action"),
        url: '/new',
        method: 'post',
        data: $(this).serialize(),
        success: function(serverResponse){
          console.log("Received this from server: ", serverResponse)
          $('#replaceNote').html(serverResponse)
        }
      })
});

// $('.commentForm').submit(function(e) {
//     e.preventDefault();
//     console.log("running comment function");
//     var noteId = $(this).attr('note-id');
//     console.log($(this).attr("action"));
//     $.ajax({
//         // url: $(this).attr("action"),
//         url: '/new/comment/' + noteId,
//         method: 'post',
//         data: $(this).serialize(),
//         success: function(serverResponse){
//           console.log("Received this from server: ", serverResponse)
//           $('.replaceComment').html(serverResponse)
//         }
//       })
// });








// $(".panel").focusin(function(){
//     $(this).css({"background-color" : "orange"});
// });
// $(".panel").focusout(function(){
//     $(this).css({"background-color" : "white"});
// });

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
