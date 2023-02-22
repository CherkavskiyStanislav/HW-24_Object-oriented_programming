// // Task 1
class User {
    #name;
    #password;
    constructor (name, login,  age, password){
        this.#name = name;
        this.login = login;
        this.age = age;
        this.#password = password;

    }
    getName(isAdmin){
        return isAdmin 
            ? this.#name || this.login
            : 'Permission denied';
    }
    changeName(newName, password){
        if (password === this.#password){
            return `Name Changed from ${this.#name} to ${this.#name = newName}`;
        } else {
            return 'Permission denied';
        }
    }
}
let user1 = new User('Mike', 'MK_18', 18, '123');
let user2 = new User('', 'NRG', 22);
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);
console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));
console.log(user1.changeName('Bill', '123'));

class Admin extends User{
    #isAdmin;
    constructor (name, login,  age, password){
        super(name, login,  age, password);
        this.#isAdmin = true;
    }
    getUserName(user){
        return user.getName(this.#isAdmin);
    }
}
let admin = new Admin ('Mikle', 'Wazovski', 36);
console.log(admin.getUserName(user1));

// // Task 2
class UserTask {
    #phone;
    constructor (name, phone){
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmins){
        let codedPhone = this.#phone.split('');
        for (let i = 4; i < codedPhone.length - 3; i++ ){
            codedPhone[i] = '*'
        }
        return isAdmins 
            ? this.#phone
            : codedPhone.join('');
    }
}
let user3 = new UserTask ('Mike', '068-888-88-99');
let user4 = new UserTask ('Tom', '099-888-88-99');
console.log(user3.getPhone(true));
console.log(user4.getPhone(false));


