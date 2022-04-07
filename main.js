let inizio;
let game;
const onClickInizio = function() {
    inizio = this.id;
    game = this.id;
}
const onClick = function() {
    if (inizio == "x") {
        this.textContent = "X";
    } else if (inizio == "o") {
        this.textContent = "O";
    }
}
document.getElementById('x').onclick = onClickInizio;
document.getElementById('o').onclick = onClickInizio;
document.getElementById('uno').onclick = onClick;
document.getElementById('due').onclick = onClick;
document.getElementById('tre').onclick = onClick;
document.getElementById('quattro').onclick = onClick;
document.getElementById('cinque').onclick = onClick;
document.getElementById('sei').onclick = onClick;
document.getElementById('sette').onclick = onClick;
document.getElementById('otto').onclick = onClick;
document.getElementById('nove').onclick = onClick;