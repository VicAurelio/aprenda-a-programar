let n = 8;
let i = 2;

while(n % i != 0){
    i++
}

if(i == n){
    console.log(`Sim, o número ${n} é primo`)
} else {
    console.log(`Não, o número ${n} não é primo`)
}