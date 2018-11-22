function header() {
    return `
        <header>
            <h1>Welcome TO Intent Manifesto</h1>
        </header>
    `;
}
function login_registerButton() {
    return `
    <div>
        <a href="/login">Login</a>
        |
        <a href="/register">Register</a>
    </div>
    `;
}

function logoutButton() {
    return `
    <div>
        <form action="/logout" method="POST">
        <input type="submit" value="logout">
        </form>
    </div>
    `;    
}

function footer() {
    return `
        <footer>
            <p>
              &copy; 2018 Locksley Logic Lauren Wilkerson and April Copes
            </p>
        </footer>
    `;
}

module.exports = {
    header,
    footer,
    logoutButton,
    login_registerButton
};