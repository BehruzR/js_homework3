// let count = +prompt('Введите количество бананов');

// for(let ban = 1; ban <= count; ++ban){
//     if(ban == 1){
//         console.log(ban +" banana");
//     }else if(ban <= count){
//         console.log(ban + " bananas");
//     }
// }

//let count = +prompt('Введите число');
//
//let sum = 0;
//
//for (let i = 0; i <= count; i++) {
//    if (i %2 == 0) {
//        sum += i
//    }
//}
//console.log(sum)

let num = +prompt("Введите число");
let stepen = +prompt("Введите степень");

let answer = 1;

for (let i = 1; i <= stepen; i++) {
  answer *= num;
}
console.log(answer);
