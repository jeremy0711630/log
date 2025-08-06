document.getElementById("Registerform").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    let user = localStorage.getItem(username);

    if (user) {
        let parsedUser = JSON.parse(user);

        if(parsedUser.password === password && parsedUser.role==role) {
          

            if (parsedUser.role === "admin") {
                alert("Admin login successful!");
                window.location.href = "admin.html";

            }else if (parsedUser.role === "guest") {
                alert("Guest login successful!");
                window.location.href = "guest.html"
            }
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("No data found.");
    }
});
