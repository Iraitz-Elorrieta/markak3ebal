

function kalkulatu(){
    let frutak = document.getElementsByName("frutak");
    let prezioa = 0;
    let Q = document.getElementById("kant").value;
    let ordMet = document.getElementById("ordainketa").value;
    let garraio = document.getElementById("garraio");
    let aukeratua = false;

    //Egiaztatu behar da frutarik hautatu den
    for (let i=0;i<frutak.length && aukeratua == false; i++){
        if (frutak[i].checked){
            aukeratua = true;
            prezioa = frutak[i].value;
        }
    }
    if (!aukeratua){
        window.alert("Aukeratu frutaren bat");
        return false;
    }
    //Egiaztatu "Kantitatea" zenbaki hamartar positiboa dela. 
    if (Q < 1 || Q == null || Q != parseInt(Q)){
        window.alert("Kantitatea ez da zuzena");
        return false;
    }
    // Biderkatu kantitatea hautatutako produktuaren prezioarekin. 
    prezioa = prezioa * Q;
    //Ordaintzeko modua "dirua" bada: %10-eko deskontua aplikatuko zaio. "Hile bat" bada: %5-eko  deskontua aplikatu. 
    if (ordMet == "dirua"){
        prezioa = prezioa * 0.9;
    } else if (ordMet == "hile1"){
        prezioa = prezioa * 0.95;
    }
    //Garraioa hautatu bada, gehitu 10 prezioari. 
    if (garraio.checked){
        prezioa = prezioa + 10;
    }
    window.alert("Kostea: " + prezioa.toFixed(2));
}