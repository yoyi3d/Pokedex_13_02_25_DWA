$(document).ready(function(){
    let percentage = 0;
    let deltaTime = 10;

    function simulatedLoad(){
        if (percentage < 100){
            percentage ++;
            $(".loader-text .percentage").text(percentage + "%")
            setTimeout(simulatedLoad, deltaTime);
        }
        else{
            $("#loader").fadeOut(500, function(){
                $("#content").fadeIn(100);
            });
        }
    }

    simulatedLoad();
})