
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dateOfBirth = document.getElementById('date_of_birth').value;

    const userData = {
        username: username,
        email: email,
        password: password,
        date_of_birth: dateOfBirth
    };

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Usuario registrado exitosamente');
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        alert('Error al registrar el usuario');
    }
});
