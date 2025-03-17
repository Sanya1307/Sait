
const textElement = document.getElementById('animatedText');

// Функция для смены текста и перезапуска анимации
function changeText() {
    textElement.textContent = "Выгодно, низкие цены"; // Меняем текст
    textElement.style.animation = 'none'; // Отключаем анимацию

    // Ждем немного перед повторным запуском анимации
    setTimeout(() => {
        textElement.style.animation = 'moveText 4s linear forwards'; // Запускаем анимацию снова
        textElement.style.transform = 'translateX(-100%)'; // Возвращаем текст за пределы экрана слева
    }, 100); // Задержка перед повторным запуском
}

        // Запускаем смену текста через 4 секунды (время анимации)
setTimeout(changeText, 4000);
