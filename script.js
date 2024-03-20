function rollDice() {
    const diceElements = document.querySelectorAll('.dice');

    // Simulate dice rolling for 3 seconds
    let rollTime = 0;
    const rollInterval = setInterval(() => {
        diceElements.forEach(die => {
            const number = Math.floor(Math.random() * 6) + 1;
            die.textContent = number;
        });

        rollTime += 100;
        if (rollTime >= 3000) {
            clearInterval(rollInterval);
        }
    }, 100);
}
