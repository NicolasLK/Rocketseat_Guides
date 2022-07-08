/*
* Promise
*
* A promesa de que  algo irá acontecer
* Poderá dar certo ou errado,
* mas irá acontecer
*
*/
import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/NicolasLK"),
  axios.get("https://api.github.com/users/NicolasLK/repos")
])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch((error) => console.log(error.message));
