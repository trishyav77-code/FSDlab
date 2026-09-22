//call Stack fun calls another another function after executing itself
function first(){
    second();
}
function second(){
    third();

}
function third(){
    console.log("third");
   
}
first();