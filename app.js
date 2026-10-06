// Simple DevOps App for Task 4
console.log("DevOps Git Workflow Project v1.0.0");

function login(username) {
    console.log(`User ${username} logged in successfully!`);
}

module.exports = { login };

function logout(username) { console.log('User logged out'); }

login('Vaishnavi');
logout('Vaishnavi');
