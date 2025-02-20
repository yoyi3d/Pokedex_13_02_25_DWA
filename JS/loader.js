$(document).ready(function (){
    let percentage = 0;
    let deltaTime = 10;

    // Función que simula la carga de la web

    function simulateLoad(){
        
        if (percentage < 100){
            percentage++;
            $(".loader-text .percentage").text(percentage + "%");
            setTimeout(simulateLoad, deltaTime);
        } else {
            $("#loader").fadeOut(500, function () {
                $("#content").fadeIn(350);
            });
        }
    }

    // Llamamos a la función de la carga de la web
    simulateLoad();
    
});