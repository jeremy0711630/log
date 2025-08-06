document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector(".menu-toggle");
    let sidebar = document.querySelector(".sidebar");
    let content = document.querySelector(".content");
    let dashboardLink = document.querySelector(".sidebar a:nth-child(2)");
    let homeLink = document.querySelector(".sidebar a:first-child");
    let logoutLink = document.querySelector(".sidebar a[href='login.html']");

    // Set default margin for content when page loads
    if (!sidebar.classList.contains("active")) {
        content.style.marginLeft = "0px";
    }

    // Toggle sidebar visibility and adjust content margin
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        document.body.classList.toggle("body-sidebar-active");
        content.style.marginLeft = sidebar.classList.contains("active") ? "220px" : "0px";
    });

    function showHome() {
        content.innerHTML = `
            <h2 style="text-align: center;">Welcome, Admin!</h2>
            <div style="display: flex; justify-content: center; gap: 20px;">
                <a href="login admin.html"><button>Login</button></a>
                <a href="register admin.html"><button>Register</button></a>
            </div>
            <div id="user-list"></div>
        `;
    }

    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        showHome();
    });

    dashboardLink.addEventListener("click", function (event) {
        event.preventDefault();
        displayUsers();
    });

    logoutLink.addEventListener("click", function (event) {
        event.preventDefault();
        let confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            window.location.href = "login.html";
        }
    });

    function displayUsers() {
        content.innerHTML = `
            <h2>Registered Users</h2>
            <div style="max-height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 10px;">
                <table border="1" cellspacing="0" cellpadding="5" style="width: 100%;">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody id="user-table-body">
                    </tbody>
                </table>
            </div>
        `;

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
    }

    showHome();
});
