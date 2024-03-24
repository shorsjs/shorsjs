let student = {name:"Oleg",
age:22,
subjects:["higher mathematics","drawing","mechanics","Foreign Language"]}
let keys = Object. keys(student);
console.log (student);
let value = Object. values(student);
console.log(value);
for (let key in student)
{console.log(key + ":" + student[key]) 
}