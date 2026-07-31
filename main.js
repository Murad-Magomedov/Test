const productCard = document.querySelector('.products__item');
const productCards = document.querySelectorAll('.products__item');
const greenColorHash = '#a5ea5694';
const purpleColorHash = '#9997d347';
const defaultColorHash = '#F7F7FA';
const googleLink = ('https://google.com');

// Покраска первой карточки.

const changeColorFirstCard = document.querySelector('#change-color-card-first-btn');
    changeColorFirstCard.addEventListener('click', () => {
    productCard.style.backgroundColor = greenColorHash;
})

// Покраска всех карточек.

const changeColorAllCards = document.querySelector('#change-color-all-cards-btn');
    changeColorAllCards.addEventListener('click', () => {
        productCards.forEach((card) => card.style.backgroundColor = purpleColorHash)
    })

// Цвет по умолчанию

const colorDefault = document.querySelector('#colors-default-btn');
    colorDefault.addEventListener('click', () => {
        productCards.forEach((card) => card.style.backgroundColor = defaultColorHash)
    })

// Переход на страницу Google.

const openGoogleButton = document.querySelector('#open-google-btn');
    openGoogleButton.addEventListener('click', openGoogle);

    function openGoogle() {
        const question = confirm('Ты делаешь Уцыхарчик?');

        if (question === true) {
            window.open(googleLink);
        } else {
            return;
        }
    }

// Вывод заголовок в консоль лог

const outputLog = document.querySelector('#output-console-log-btn');
    outputLog.addEventListener('click', () => outputConsoleLog('Не сдавайся Ахи'))

    function outputConsoleLog(message) {
        alert('До конца')
        console.log(message)
    }

// Сменить цвет самой кнопки.

const changeColorButton = document.querySelector('#change-color-button-btn');
    changeColorButton.addEventListener('click', colorButton )

    function colorButton() {
        changeColorButton.classList.toggle('btn-active');
    }

// Вывод заголовка в консоль лог

const outputTitleBtn = document.querySelector('.title');
    outputTitleBtn.addEventListener('mouseenter', () => {
        console.log(outputTitleBtn.textContent);
    })


