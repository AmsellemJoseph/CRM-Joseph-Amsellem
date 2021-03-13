export function init() {
    main.innerHTML = `<div id="containerBase">
    <div id="welcome">
    <h1>Welcome to Jo Ams's CRM!
    </div>
    <div class="containerUserName">
    <h2>Please enter your username</h2>
    <div id="user">
    <i class="fas fa-user-circle" id="userCircle"></i>
    <input type="text" id="userName" placeholder="username">
    </div>
<button id="btnUsername">Enter</button>
    </div></div>`
}