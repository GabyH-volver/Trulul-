let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        document.getElementById('restartButton').style.display = 'block';
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'El número es más bajo.';
    } else {
        document.getElementById('feedback').textContent = 'El número es más alto.';
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
});
