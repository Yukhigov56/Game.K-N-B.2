






const buttons = document.querySelectorAll("button")

// Создал div с id result
const resultDiv = document.getElementById("result")

// 1 Функция 
function getComputerChoice() {
    const arr = ["Камень", "Ножница", "Бумага"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


let userAccount = 0;
let computerAccount = 0;
let generalAccount = 0;

// 2 Функция
function playRound(userChoise, computerChoise) {
    if (userChoise === computerChoise) {
        computerAccount++
        userAccount++
        return "Ничья!";
    }

    if (
        (userChoise === "Ножница" && computerChoise === "Бумага") ||
        (userChoise === "Камень" && computerChoise === "Ножница") ||
        (userChoise === "Бумага" && computerChoise === "Камень")
    ) {
        userAccount++
        return "Вы выиграли!";
    }
   
    else {
        computerAccount++
        return "Компьютер побеждает!";
    }
}

// 3 Функция
function outputResult (userChoise, computerChoise, result) {
    resultDiv.innerHTML = `Вы выбрали: ${userChoise}<br/> Компьютер выбрал: ${computerChoise}<br/> ${result}<br/> Раунд: ${++generalAccount}<br/> Счет:<br/> Игрок ${userAccount}<br/> Компьютер: ${computerAccount}`;
    
    if (generalAccount === 5) {
        generalAccount = 0
        userAccount = 0
        computerAccount = 0
    }
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
