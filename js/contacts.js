const acc = document.getElementsByClassName("contacts__btn__wrap");

for (const item of acc) {
    item.onclick = function() {
        // Закриваємо всі інші елементи
        for (const otherItem of acc) {
            if (otherItem !== this) { // Перевіряємо, чи це не той самий елемент
                otherItem.classList.remove("active");
                if (otherItem.nextElementSibling) {
                    otherItem.nextElementSibling.classList.remove("show");
                }
            }
        }

        // Відкриваємо/закриваємо поточний елемент
        this.classList.toggle("active");
        if (this.nextElementSibling) {
            this.nextElementSibling.classList.toggle("show");
        }
    };
}

//Form
const form = document.getElementById("contacts__form");
const fullName = document.getElementById('contactsName');
const phoneNumber = document.getElementById('contactsTel');
const email = document.getElementById('contactEmail');

form.addEventListener('submit', (event) => {
    let isValid = true;

    if (fullName.value.trim() === '') {
        isValid = false;
    }

    if (phoneNumber.value.trim() === '' || !/^[0-9]{10}$/.test(phoneNumber.value)) {
        isValid = false;
    }

    if (email.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Зупиняємо відправку, якщо є помилки
    } // console.log() прибрано
});
