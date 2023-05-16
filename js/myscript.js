const OKay = document.getElementById('button');

OKay.addEventListener('click', function() {
    
    const userAge = document.getElementById("Age")

    const userKm = document.getElementById("distance")

    

    let Price = (userKm.value * 0.2333 );

    let result;

    document.getElementById("distance").innerHTML += userKm.value + " Km";
    document.getElementById("Age").innerHTML += userAge + " anni";

    if(userAge.value <= 17 ){
        result = parseFloat(Price - [(Price * 19.4) /100]).toFixed(2) ;
    } else if (userAge.value > 65) {
        result = parseFloat(Price - [(Price * 37.7) /100]).toFixed(2) ;
    } else {
        result = parseFloat(Price).toFixed(2) ;
    };
    
    
    
    document.getElementById("price").innerHTML = "Price = " + result + "£";

    let FirstSpan = document.querySelector("span");
    FirstSpan.classList.add("red")

    
});