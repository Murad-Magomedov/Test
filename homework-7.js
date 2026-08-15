function weather(city, temp) {
    console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
}
weather('Дубаи', '45' );


// const SPEED_OF_LIGHT = 299792458;
// const speed = SPEED_OF_LIGHT;
// function classifySpeedRelativeToLight (speed) {
//     if (SPEED_OF_LIGHT < speed) {
//         console.log('Сверхсветовая скорость')
//     } else if (SPEED_OF_LIGHT > speed) {
//         console.log('Субсветовая скорость')
//     } else {
//         console.log('Скорость света')
//     }
// };

// classifySpeedRelativeToLight (SPEED_OF_LIGHT);


const SPEED_OF_LIGHT = 299792458;
function classifySpeedRelativeToLight (speed) {
    if (speed > SPEED_OF_LIGHT) return 'Сверхсветовая скорость';
    if (speed < SPEED_OF_LIGHT) return 'Субсветовая скорость';

    return 'Скорость света';
}

console.log(classifySpeedRelativeToLight (SPEED_OF_LIGHT));

let product = 'Молоко';
let price = 100;
function buyProduct(budget) {
    if (budget >= price) return `${product} приобретёно. Спасибо за покупку!`;
    if (budget < price) return `Вам не хватает ${price - budget} руб., пополните баланс`;
}

console.log(buyProduct(20));