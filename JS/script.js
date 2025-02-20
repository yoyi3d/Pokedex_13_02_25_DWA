$(document).ready(function (){
    // console.log("online!");
    
    let $pokeCont = $(".poke-cont");
    // console.log($pokeCont);
    
    $pokeCont.isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        getSortData: {
            name:".name",
            number:".number parseInt"
        }
    });

    $(".btns-cont .filter").on("click",function () {

        let filterVal = $(this).data("filter");
        
        $pokeCont.isotope({
            filter: filterVal
        })
    });

    $(".btns-cont .sort").on("click",function(){
        let sortByValue = $(this).data("sortby");
        $pokeCont.isotope({
            sortBy:sortByValue
        })
    })






});