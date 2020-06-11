var restart = document.querySelector("#b");
var squares = document.querySelectorAll("td");

function clearboard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}
restart.addEventListener("click", clearboard);

function changemarker() {
    if (this.textContent === "") {
        this.textContent = "X"
    } else if (squares.textContent === 'X') {
        this.textContent = '';
    } else {
        this.textContent = "O";
    }
}
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changemarker);
}