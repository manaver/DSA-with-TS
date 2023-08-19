//Custom type in TS
type User = {
    readonly _id: string;
    email: string;
    password: string;
    isPaid: boolean;
    creditCard?: number; // ? means optional
}

function displayUser(user: User) {
    console.log(user._id, user.email, user.password, user.isPaid);
}

const Manav = {
    _id: "12",
    email: "vermamanav117@gmail.com",
    password: "123456",
    isPaid: true,
}

displayUser(Manav);

// Example for Object returning
function forgotPassword(user: User, newPassword: string): User {
    user.password = newPassword;
    return user;
}

let n2: User = forgotPassword(Manav, '12345678');
console.log(n2);