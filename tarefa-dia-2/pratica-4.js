let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
    console.log(`O valor total do item ${produtoA.nome} é R$ ${produtoA.valor*1.2}`)
} else {
    console.log(`O valor total do item ${produtoA.nome} é R$ ${produtoA.valor*1.12}`)
}

if (produtoB.internacional == true) {
    console.log(`O valor total do item ${produtoB.nome} é R$ ${produtoB.valor*1.2}`)
} else {
    console.log(`O valor total do item ${produtoB.nome} é R$ ${produtoB.valor*1.12}`)
}

if (produtoC.internacional == true) {
    console.log(`O valor total do item ${produtoC.nome} é R$ ${produtoC.valor*1.2}`)
} else {
    console.log(`O valor total do item ${produtoC.nome} é R$ ${produtoC.valor*1.12}`)
}