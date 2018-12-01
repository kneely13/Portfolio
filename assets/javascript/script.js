function touchCheck (){

    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }
    
    if (hasTouch()) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;
    
                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;
    
                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
}

myFunction= function() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function() {
    touchCheck();
    myFunction(); 
  
    // $(".masthead").hide();
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





function touchCheck (){

    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }
    
    if (hasTouch()) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;
    
                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;
    
                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
}

myFunction= function() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}