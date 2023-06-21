function yell(msg) {
    try {
        console.log(msg.toUpperCase());
    } catch (e) {
        console.log('Please pass a string next time!');
    }

    const number = [1, 2, 3, 4];

    number.forEach(el => console.log(el))

    const logNum = num => console.log(num);

    logNum(5);


}

const user = {
    username: 'username',
    password: 'password',
    age: 20
}

const user1 = {
    username: 'username2',
    password: 'password2',
    age: 25
}

const newUser = { ...user, ...user1 };
console.log(newUser);

const person = {
    firstName: 'Viggo',
    lastName: 'Morten',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.assert.log(this.fullName());
        }, 3000)
    }
}