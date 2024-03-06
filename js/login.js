$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        
        var users = [
            { id: 1, name: "Tushar Chaudhari", email: "admin@gmail.com", password: "admin123", role: "Admin" },
            { id: 2, name: "Tushar Chaudhari", email: "superadmin@gmail.com", password: "superadmin123", role: "Super Admin" }
        ];

        
        var user = users.find(function(user) {
            return user.email === email && user.password === password;
        });

        if (user) {
            
            localStorage.setItem('user', JSON.stringify(user)); 
            window.location.href = "home.html";
        } else {
            alert("Invalid email or password");
        }
    });
});
