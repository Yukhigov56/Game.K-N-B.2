
const buttons = document.querySelectorAll("button")

// Создал div с классом result
const resultDiv = document.getElementById("result")

// 1 Функция 
function getComputerChoice() {
    const arr = ["Камень", "Ножница", "Бумага"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// 2 Функция
function playRound(userChoise, computerChoise) {
    if (userChoise === computerChoise) {
        return "Ничья!";
    }

    if (
        (userChoise === "Ножница" && computerChoise === "Бумага") ||
        (userChoise === "Камень" && computerChoise === "Ножница") ||
        (userChoise === "Бумага" && computerChoise === "Камень")
    ) {
        return "Вы выиграли!";
    }else {
        return "Вы проиграли!";
    }
}

// 3 Функция
function outputResult (userChoise, computerChoise, result) {
    resultDiv.innerHTML = `Вы выбрали: ${userChoise}<br/> Компьютер выбирает: ${computerChoise}<br/> ${result}`;
}

// Привязываем обработчик события
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoise = button.id;
        const computerChoise = getComputerChoice();
        const result = playRound(userChoise, computerChoise);
        outputResult(userChoise, computerChoise, result);
    });
});
