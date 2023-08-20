//Enums in TypeScript
//Enums are used to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

//Numeric enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log("Numeric Enums:");
console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
//In Numeric Enums, the enum values are incremented from the previous value.

//String enums
enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log("String Enums:");
console.log(Direction1.Up); // Output: UP
console.log(Direction1.Down); // Output: DOWN
//In String Enums, each enum member has to be constant-initialized with a string literal, or with another string enum member.

//Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
console.log("Heterogeneous Enums:");
console.log(BooleanLikeHeterogeneousEnum.No); // Output: 0
console.log(BooleanLikeHeterogeneousEnum.Yes); // Output: YES
//In Heterogeneous enums, enum members that don’t have an initializer will be considered constant if its preceding enum member is considered constant. In the below example, enum member No is assigned the value 0. Since enum member No is constant, enum member Yes is also considered as constant.

//Computed and constant members
enum E { X, Y, Z }
console.log("Computed and Constant Members:");
console.log(E.X); // Output: 0
console.log(E.Y); // Output: 1
console.log(E.Z); // Output: 2
console.log(E[E.X]); // Output: X
console.log(E[E.Y]); // Output: Y
console.log(E[E.Z]); // Output: Z
//In the above example, enum members X, Y, and Z do not have an initializer, so they are constant. In the last three console.log statements, we are accessing the enum members using a computed property name. In this case, the enum member name is used as the property name and the enum member value is returned.