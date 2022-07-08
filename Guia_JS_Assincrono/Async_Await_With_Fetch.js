//Usando a fetch API
/*fetch('https://api.github.com/users/NicolasLK')
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( error =>console.log(error))
*/

//Usando Async/Await
/*
async function start() {
  try {
    const response = await fetch('https://api.github.com/users/NicolasLK')
    const user = await response.json()
    const reposResponse  = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  } catch (e) {
    console.log(e)
  }
}

start()
*/

//Outra maneira
/*
async function start() {
    const response = await fetch('https://api.github.com/users/NicolasLK')
    const user = await response.json()
    const reposResponse  = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}

start().catch(e => console.log(e))
*/

//Mais uma maneira
/*
async function start() {
  const user = await fetch("https://api.github.com/users/NicolasLK").then((r) =>
    r.json());
  const repos = await fetch(user.repos_url).then((r) => r.json());
  console.log(repos);
}

start().catch((e) => console.log(e));
*/

//More maneiras
async function start() {
    const url = "https://api.github.com/users/NicolasLK";
    const user = await fetch(url).then((r) => r.json());
    const userRepos = await fetch(user.repos_url).then((r) => r.json());
    console.log(userRepos);
  }
  
  start().catch((e) => console.log(e));
  