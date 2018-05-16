class Account {
    constructor(name, number, balance){
        this.name = name;
        this.number = number;
        this.balance = balance;
    }

    withdraw(amount) {
        this.balance -= amount;

        if (this.balance < amount) {
            alert("You're poor!")
        }
    }

    deposit(amount) {
        this.balance += amount;
    }
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomName() {
    const firstNames = ["Matt", "David", "Chris"];
    const lastNames = ["Smith", "Tennant", "Eccleston"];

    return randomChoice(firstNames) + " " + randomChoice(lastNames);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

const accounts = [];

for (let i = 0; i < 10; i++) {
    // create new account
    let newAccount = new Account(randomName(), randomInt(10000000, 99999999), randomInt(0, 1000000000000));

    accounts.push(newAccount);
}