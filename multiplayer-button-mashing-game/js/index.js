$(document).ready(function () {
    $(document).keyup(function (key) {
        if (cond == true) {
            switch (parseInt(key.which, 10)) {
                case 65://keypress 97
                    $('#blue').animate({
                        width: '+=10'                        
                    }, 50);
                    $('#red').animate({
                        width: '-=10',
                        left: '+=10'
                    }, 50);
                    count1 ++;
                    break;
                case 76://keypress 108
                    $('#red').animate({
                        width: '+=10',
                        left: '-=10'
                    }, 10);
                    $('#blue').animate({
                        width: '-=10'
                    }, 10);
                    count2 ++;
                    break;
                case 81: //keypress 113
                    if (cond3) {
                        $('#blue').animate({
                        width: '+=30'              
                        }, 50);
                        $('#red').animate({
                            width: '-=30',
                            left: '+=30'
                        }, 50);
                        count1 ++;
                        $("#result").text("");
                        cond3 = false;
                    }
                    else if (cond3 == false) {
                        $('#blue').animate({
                            width: '-=10'                        
                        }, 50);
                        $('#red').animate({
                            width: '+=10',
                            left: '-=10'
                        }, 50);
                        count1 ++;
                    }
                    break;
                case 80: //keypress 112
                    if (cond3) {
                        $('#red').animate({
                            width: '+=30',
                            left: '-=30'
                        }, 10);
                        $('#blue').animate({
                            width: '-=30'
                        }, 10);
                        count2 ++;
                        $("#result").text("");
                        cond3 = false;
                    }
                    else if (cond3 == false) {
                        $('#red').animate({
                            width: '-=10',
                            left: '+=10'
                        }, 10);
                        $('#blue').animate({
                            width: '+=10'
                        }, 10);
                        count2 ++;
                    }
                    break;
                default:
                    break;
            }
        }
    })
})
var cond = true, cond2 = true, cond3 = false;
var count1 = 0, count2 = 0, win1 = 0, win2 = 0;
setInterval(function () {
    var higher;
    if(count1 >= count2)
        higher = count1;
    if(count1 < count2)
        higher = count2;
    
    if ($('#blue').width() == 0) {
        if(cond2)
            win2 ++;
        cond = false, cond2 = false;
        $("#result").text("Red wins in " + higher + " clicks!");
        $("button").show();
    }
    else if ($('#red').width() == 0) {
        if(cond2)
            win1++;
        cond = false, cond2 = false;
        $("#result").text("Blue wins in " + higher + " clicks!");
        $("button").show();
    }
    else {
        if(cond2 == false){            
            $("#result").text("");
        }
        $("button").hide();
        cond2 = true;
    }
    $("#bwins").text(win1);
    $("#rwins").text(win2);
}, .01);

$("button").click(function() {
    count = 4;
    counter=setInterval(timer, 1000);
    count1 = 0;
    count2 = 0;
    $('#blue').animate({
        width: '150px'
    }, 50);
    $('#red').animate({
        width: '150',
        left: '175'
    }, 50);
}); 

var count = 4, counter;
function timer()
{
    count -= 1;
    if (count <= 0)
    {
        document.getElementById("result").innerHTML="GO!";
        clearInterval(counter);
        cond = true;
        return
    }
    document.getElementById("result").innerHTML=count;
}

if(cond)
    (function loop() {
        var rand = Math.round(Math.random() * 30000) + 500;
        setTimeout(function() {
            cond3 = true;
            $("#result").text("PRESS YOUR BOOST BUTTON");
            loop();
        }, rand);
    }());