const OKay = document.getElementById('button');

OKay.addEventListener('click', function() {
    
    const userAge = document.getElementById("Age")

    const userKm = document.getElementById("distance")

    

    let Price = (userKm.value * 0.21 );

    let result;

    document.getElementById("distance").innerHTML += userKm.value + " Km";
    document.getElementById("Age").innerHTML += userAge + " anni";

    if(userAge.value <= 17 ){
        result = parseFloat(Price - [(Price * 20) /100]).toFixed(2) ;
    } else if (userAge.value > 65) {
        result = parseFloat(Price - [(Price * 40) /100]).toFixed(2) ;
    } else {
        result = parseFloat(Price).toFixed(2) ;
    };
    
    document.getElementById("price").innerHTML = result + "£";

});