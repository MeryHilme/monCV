
function afficherMasquer(sonId){
    var a;
    var b;
    a = document.getElementById(sonId) ;

    if (a.style.display == "block")
    	a.style.display = "none";
     else 

    	a.style.display = "block";
        b = document.getElementsByClassName("Element")
    for (var i = 0; i < b.length; i++) {
        b[i].style.display = "none" ;
    }
       
   
    if (a.style.display == "none") {
            a.style.display = "" ;
    }

}
