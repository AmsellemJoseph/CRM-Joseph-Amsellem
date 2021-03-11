var main = document.getElementById("main");
function login() {
    main.innerHTML = `<div class="container">
    <div id="num1" class="num" data-value="1">1</div>
    <div id="num2" class="num" data-value="2">2</div>
    <div id="num3" class="num" data-value="3">3</div>
    <div id="num4" class="num" data-value="4">4</div>
    <div id="num5" class="num" data-value="5">5</div>
    <div id="num6" class="num" data-value="6">6</div>
    <div id="num7" class="num" data-value="7">7</div>
    <div id="num8" class="num" data-value="8">8</div>
    <div id="num9" class="num" data-value="9">9</div>
    <div id="num0" class="num" data-value="0">0</div>
    </div>`
}

function init() {
    main.innerHTML = `<div class="containerUserName">
    <h1>Please enter your username</h1>
    <input type="text" id="userName" placeholder="username">
<button id="btnUsername">Enter</button>
    </div>`
}

function champion() {
    main.innerHTML = `<h1>CHAMPION</h1>`
}

function police() {
    main.innerHTML = `<h1>C'est pas beau!!</h1>`
}

export { init, login, champion, police }
