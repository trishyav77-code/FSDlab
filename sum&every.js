let marks=[30,90,70,60,50];
let lowmarks=marks.some(mark=>mark<40);
console.log(lowmarks);
let highmarks=marks.every(mark=>mark>40);
console.log(highmarks);