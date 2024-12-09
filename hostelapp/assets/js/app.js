// app.js
import { User } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = User.loadUser();
    if (user) {
        document.getElementById('confirmationMessage').textContent = `Welcome, ${user.name}!`;
        const hostel = user.allocateHostel();
        document.getElementById('hostelDetails').textContent = `You have been allocated to the ${hostel} hostel.`;
    }
});
