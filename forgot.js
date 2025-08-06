function resetPassword() {
    let username = document.getElementById("forgotUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value;

    if (!username || !newPassword) {
        alert("Please enter both username and new password.");
        return;
    }

    let user = localStorage.getItem(username);

    if (user) {
        let parsedUser = JSON.parse(user);

     if   (parsedUser.password === newPassword){
        alert("New password must be be different from the old password.");
        return;
     }
        parsedUser.password = newPassword;
        localStorage.setItem(username, JSON.stringify(parsedUser));
        alert("Password reset successful! Please log in.");
        window.location.href = "login.html";
    } else {
        alert("User not found!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.getElementById("user-table-body");

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));

        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.role}</td>
        `;
        tableBody.appendChild(row);
    }
});
