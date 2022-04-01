const calculatePrice = (distance) => {
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

const buildDeliveryArray = () => {
    let deliveryArray = [];
    for (let i = 1; i < 6; i++) {
        const location = document.getElementById(`location${i}`).value;
        const distance = document.getElementById(`distance${i}`).value;
        if(location != "" && distance != ""){
            const price = calculatePrice(distance);
            deliveryArray.push({
                location,
                distance,
                price
            });
        };
    };
    return deliveryArray;
}

const parseDeliveryData = (data) => {
    let totalPrice = 0
    for (let i = 0; i < data.length; i++) {
        totalPrice = totalPrice + data[i].price;        
    }
    return `<h3>El precio total de los envíos es de $${totalPrice}</h3>`;
}


const calculateButton = document.getElementById('calculate-button');
const result = document.getElementById('result');
calculateButton.addEventListener('click', () => {
    const deliveryArray = buildDeliveryArray();
    result.innerHTML = parseDeliveryData(deliveryArray);
})