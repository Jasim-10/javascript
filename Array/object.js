//object literals

// const JsUser = {
//     name: "Jasim",
//     age: 18,
//     location: "Jaipur",
//     email: "jasim@gmail.com",
//     isLogged: false,
//     lastLogin: ["Monday", "Saturday"]
// };

// console.log(JsUser.age);
// console.log(JsUser["email"])
// console.log(JsUser["age"])




// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Jasim",
//     age: 18,
//     [mySym]: "mykey1",
//     location: "Jaipur",
//     email: "jasim@gmail.com",
//     isLogged: false,
//     lastLogin: ["Monday", "Saturday"]
// };

// console.log(JsUser.age);
// console.log(JsUser["email"])
// console.log(JsUser["age"])
// console.log(JsUser[mySym])

// JsUser.email = "jasim@chatgpt.com"
// Object.freeze(JsUser)                        //after that we cannot change anything in object
// JsUser.age = 25
// console.log(JsUser)




// const JsUser = {
//     name: "Jasim",
//     age: 18,
//     location: "Jaipur",
//     email: "jasim@gmail.com",
//     isLogged: false,
//     lastLogin: ["Monday", "Saturday"]
// };
// JsUser.greeting = function(){
//     console.log("Hello Js User")
//     console.log(`Hello Js User , ${this.name}`)
// }
// console.log(JsUser.greeting())






//singleton

// const tinderUser = new Object()
// console.log(tinderUser)


// const tinderUser = {}
// tinderUser.id = 123
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser)

// const regularUser = {
//     email: "Some@gmail.com",
//     fullName:{
//         userFullname: {
//             firstName: "jasim",
//             lastName: "Ansari"
//         }
//     }
// }
// console.log(regularUser.fullName.userFullname.firstName)



const obj1 = {1:"a",2:"b"}
const obj2 = {2:"c",3:"d"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)