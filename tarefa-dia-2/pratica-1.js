let nome = "Victor";
let email = "victoraurelio.1989@gmail.com";
let profissao = "futuro programador";
let idade = 32;
let cidade = "Grécia";

console.log(nome, email, profissao, idade, cidade);

//console.log(`Olá,`, nome, `! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para`, cidade, `. Confirma pra gente alguns dados? A sua idade é`, idade, `, você é`, profissao, `e o seu email é`, email, `? Ficamos no aguardo. Muito obrigado e boa viagem! :D`);

console.log(`Olá, ${nome}! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para ${cidade}. Confirma pra gente alguns dados? A sua idade é ${idade}, você é ${profissao} e o seu email é ${email}? Ficamos no aguardo. Muito obrigado e boa viagem! :D`);