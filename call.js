const students1 = {
    name: "trishya"
};

const student2 = {
    name: "rahul"
};

function introduces(city) {
    console.log(`My name is ${this.name} and I live in ${city}`);
}

introduces.call(students1, "Delhi");
const student1 = {
    name: "trishya"
};

function introduce(city, age) {
    console.log(`name: ${this.name}`);
    console.log(`city: ${city}`);
    console.log(`age: ${age}`);
}

introduce.apply(student1, ["delhi", 24]);