$(document).ready(function() {

    $(".masthead").hide();
    $(".boxes").hide();
    $("#footer").hide();
    
    $("#startBtn").on("click", function() {
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

});
