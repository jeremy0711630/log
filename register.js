document.getElementById("Registerform").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (localStorage.getItem(username)) {
        alert("Username already exists. Try another one.");
        return;
    }

    
    let user = {
        username: username,
        password: password,
        role: role
    };

   
    localStorage.setItem(username, JSON.stringify(user));

    alert("REGISTRATION SUCCESSFUL!");
});
