console.log("Welcome to Node Js Module");


//callback Function :=> one function exicute in another function as argumensts 
// like one function pass another function as a arguments thast the callback function  

//syntax:=>

//    const greet = ((name, callback)=>{
//     console.log("Hello" + name);
//     callback()
//    })

//    const bye=(()=>{
//     console.log("bye");
    
//    })
//    greet("Mayur",bye);


//Used to perform async operations
//by default Node JS execute Async
//Is a function where one function passing into another function as a arguments
// i.e execute one function into inside another function


// const User=(name)=>{
//     console.log("My name is" + name);
// }

const Greet= (msg, User)=>{
    User("Mayur")
    console.log(msg);
    
}

// Greet("Good Morning...!!")

Greet("Good Morning",(name)=>{
    console.log(name);
    
})

//HOC

function A(x) {
    return function B(y){
        console.log(x*y);
    }
}
A(20)(20)