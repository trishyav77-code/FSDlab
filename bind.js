const student={
    name:"trishya"
};
function show(){
    console.log("students:",this.name);

}
const newfunction=show.bind(student);
newfunction();