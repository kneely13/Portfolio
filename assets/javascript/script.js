


$(document).ready(function() {
myFunction= function() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    
}
    $(".masthead").hide();
    $(".boxes").hide();
    $("#footer").hide();
    
    $("#startBtn").on("click", function() {
        $(".intro").hide();
        $(".masthead").hide();
        $(".boxes").show();
    })

    $("#homeBtn").on("click", function() {
        $(".intro").hide();
        $(".masthead").hide();
        $(".boxes").show();
    })

    $("#about").on("click", function() {
        $(".intro").hide();
        $(".masthead").show();
        $(".boxes").hide();
    })

    $("#contact").on("click", function() {
        $(".intro").hide();
        $(".masthead").show();
        $(".boxes").hide();
    })

    $("#projects").on("click", function() {
        $(".intro").hide();
        $(".masthead").show();
        $(".boxes").hide();
    })

    $('#topnav').on("click", function() {
        console.log("this worked");
        
    })
});
