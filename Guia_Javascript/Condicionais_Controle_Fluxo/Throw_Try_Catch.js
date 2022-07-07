/* 
  Throw

  try...catch

*/

// Throw
function sayMyName(nome = "") {
    if (nome === "") {
        throw "Nome é obrigatório"
    }

    console.log(nome)
}

// try...catch
try {
    sayMyName("Nicolas")
} catch(e) {
    console.log(e)
}


console.log("Após o try/catch")