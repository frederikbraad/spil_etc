let user = {
name: "Frederik",
age: 30,
email: "fhb@help.com",
location: "Copenhagen",
blogs: ["Citronmæne, æblekage, drømmekage"],
login: function(){
    console.log("Du er logget ind!");
}
}

console.log(user);

// console.log(user.name)

user.blogs.forEach(function(e){
    console.log(e);
})

// math floor runder op


/*console.log(Math.floor(Math.random()*10)-1);
console.log(Math.random());*/

let randomNumber = Math.floor(Math.random()*3);

let arr = ["name", "age", "email"];

console.log(user);
