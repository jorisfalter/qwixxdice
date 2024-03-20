function rollDice() {
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(die => {
        const number = Math.floor(Math.random() * 6) + 1;
        die.textContent = number;
    });
}
