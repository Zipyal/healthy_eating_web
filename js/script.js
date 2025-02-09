document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const adviceBtn = document.getElementById("advice-btn");
    const adviceText = document.getElementById("advice-text");

    const advices = [
        "Пейте больше воды.",
        "Добавьте в рацион больше клетчатки.",
        "Ешьте медленно, чтобы лучше контролировать аппетит.",
        "Не пропускайте завтрак — это важный приём пищи.",
        "Старайтесь уменьшить количество сахара в рационе.",
        "Ешьте больше свежих овощей и фруктов.",
        "Питайтесь разнообразно, чтобы получать все нужные витамины.",
        "Избегайте перекусов на ночь.",
        "Планируйте питание заранее, чтобы избежать вредной еды.",
        "Включите в рацион полезные жиры, например, орехи и авокадо."
    ];

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    adviceBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * advices.length);
        adviceText.textContent = advices[randomIndex];
    });
});
