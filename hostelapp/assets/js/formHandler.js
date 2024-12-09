// formHandler.js
import { User } from './storage.js';

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;

    if (name && gender) {
        const user = new User(name, gender);
        user.saveToLocalStorage();
        window.location.href = 'confirmation.html';
    }
});
