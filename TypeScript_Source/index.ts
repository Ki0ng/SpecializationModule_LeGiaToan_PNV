// let age: number = 10;
// console.log(age);

// // interface 
// interface people {
//     name: string;
//     age: number;
// }

// const p1: people = {
//     name: "hasd",
//     age: 12,
// };

// console.log(p1);

// enums
enum Color {
    red = 0,
    yellow = 1,
    blue = 2,
}

const pickColor = (status: Color) => {
    switch (status) {
        case Color.red:
            console.log("good")
            break;
        case Color.yellow:
            console.log("sdfa")
            break;
        case Color.blue:
            console.log("dfdf")
        default:
            break;
    }
}

pickColor(Color.red);