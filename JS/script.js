$(document).ready(function (){
    // console.log("online!");
    
    let $pokeCont = $(".poke-cont");
    // console.log($pokeCont);
    
    $pokeCont.isotope({
        itemSelector: ".card",
        layoutMode: "fitRows"
    });

    $(".btns-cont button").on("click",function () {

        let filterVal = $(this).data("filter");
        
        $pokeCont.isotope({
            filter: filterVal
        })
    });






});