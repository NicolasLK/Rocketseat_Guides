/*
* Promise
*
* A promesa de que  algo irá acontecer
* Poderá dar certo ou errado,
* mas irá acontecer
*
*/

fetch("https://api.github.com/users/NicolasLK")
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))
