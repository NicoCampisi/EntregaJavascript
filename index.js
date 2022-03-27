const calculatePrice = (distance) => {
    // <10 = gratis
    // >=10 && <40 = 100$
    // >=40 && <70 = 200$
    // >=70 && <100 = 300$
    // >=100 = 500$
    switch (true) {
        case distance < 10:
            return 0;
        case distance >= 10 && distance < 40:
            return 100
        case distance >= 40 && distance < 70:
            return 200
        case distance >= 70 && distance < 100:
            return 300
        default:
            return 500
    };
}

function calculateOne() {
    const distance = prompt('¿A qué distancia se encuentra usted de morón?');
    const price = calculatePrice(distance);
    alert(`El precio de un envío a ${distance}km es de $${price}`);
    console.log(`El precio de un envío a ${distance}km es de $${price}`);
};

function calculateMany(){
    let distancesArray = [];
    let pricesArray = [];
    let totalPrice = 0;
    const distancesNumber = prompt('¿Cuántas distancias va a ingresar?');
    for (let i = 1; i <= distancesNumber; i++) {
        const distance = prompt(`¿Cuál es la distancia N° ${i}?`);
        const price = calculatePrice(distance);
        pricesArray.push(price);
        distancesArray.push(distance);
    };
    for (let j = 0; j < pricesArray.length; j++) {
        totalPrice = totalPrice + pricesArray[j];
    };
    for (let k = 0; k < distancesArray.length; k++) {
        console.log(`El precio para un envío de ${distancesArray[k]}km es de $${pricesArray[k]}`);
    };
    console.log(`El array de distancias es: ${distancesArray}`);
    console.log(`El array de precios es: ${pricesArray}`);
    console.log(`El precio total de los envíos es: $${totalPrice}`);
    alert(`El precio total de los envíos es de $${totalPrice}`);
};
