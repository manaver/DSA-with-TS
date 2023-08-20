function displayUser(user) {
    console.log(user._id, user.email, user.password, user.isPaid);
}
var Manav = {
    _id: "12",
    email: "vermamanav117@gmail.com",
    password: "123456",
    isPaid: true,
};
displayUser(Manav);
// Example for Object returning
function forgotPassword(user, newPassword) {
    user.password = newPassword;
    return user;
}
var n2 = forgotPassword(Manav, '12345678');
console.log(n2);
