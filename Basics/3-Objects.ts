//Custom type in TS
type User = {
    email: string;
    password: string;
    isPaid: boolean
}

function createUser(user: User) {
    console.log(user.email, user.password, user.isPaid);
}

const Manav = {
    email: "vermamanav117@gmail.com",
    password: "123456",
    isPaid: true
}

createUser(Manav);

