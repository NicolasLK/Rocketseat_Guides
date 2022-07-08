/*
* Promise
*
* A promesa de que  algo irá acontecer
* Poderá dar certo ou errado,
* mas irá acontecer
*
*/

import axios from "axios";
axios.get('https://api.github.com/users/NicolasLK')
  .then(res => axios.get(res.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch( error => console.log(error))