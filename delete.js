document.getElementById("deleteform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    let storedUser = localStorage.getItem(username);
    if (!storedUser) {
        alert("User not found!");
        return;
    }

    let confirmDelete = prompt("Are you sure you want to delete your account? Type 'yes' to confirm.");
    
    if (confirmDelete.toLowerCase() === "yes") {
        localStorage.removeItem(username);
        alert("DELETE SUCCESSFUL!");
        window.location.href = "#";
    } else {
        alert("DELETE CANCELED");
    }
});
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