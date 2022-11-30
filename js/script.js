
const ticket_price = document.getElementById('ticket_price');
ticket_price.addEventListener('click', function(){
    
    // - 0.9 chiedere il nome
    
    let name = document.getElementById("name").value;
    console.log(name)
    
    // - 1 chiedere numero di KM
    
    let km = document.getElementById("km").value;
    console.log(km)
    
    // - 2 chiedere numero di KM
    
    let age = document.getElementById("age").value;
    console.log(age)
    
    let price = km * 0.21
    
    //- 3 variare i costi in base all'età e ai km
    
    if (age == 'minor'){
        console.log(finalprice = (price - (price * 0.2)))
    
    }
    else if (age == 'major'){
        console.log(finalprice = (price - (price * 0.4)))
    
    }
    
    else{
        console.log(finalprice = price)
    
    }
    
    //- 4 Risultato a schermo
    
    


})
