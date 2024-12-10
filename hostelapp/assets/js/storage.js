// storage.js
export class User {
    constructor(name, gender) {
        this.name = name;
        
        this.gender = gender;
    }

    saveToLocalStorage() {
        localStorage.setItem('user', JSON.stringify(this));
    }

    static loadUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            return new User(user.name, user.gender);
        }
        return null;
    }

    allocateHostel() {
        return this.gender === 'male' ? 'Boys Hostel' : 'Girls Hostel';
    }
}
