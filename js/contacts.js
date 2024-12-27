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