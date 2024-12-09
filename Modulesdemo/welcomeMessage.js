// welcomeMessage.js

export class WelcomeMessage {
    constructor(name) {
        this.name = name;
    }

    // Method to generate the welcome message
    generateMessage() {
        return `Welcome, ${this.name}!!!!!!`;
    }
}
