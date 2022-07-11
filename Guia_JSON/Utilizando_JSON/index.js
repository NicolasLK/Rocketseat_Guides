const express = require("express")
const axios = require("axios")

const app = express()

app.listen("3000")

// middleware
app.use(express.json())


/* GET
app.route("/").get( (req, res) => {res.send("Hello!")})
app.route("/about").get( (req, res) => {res.send("Hello About!")})
*/

/* POST, irá mostrar o resultado no Insominia
app.route("/").post( (req, res) =>  res.send(req.body) )
*/

/* PUT 
let author = "Nicolas L. Kaminski"

app.route("/").get( (req, res) => res.send(author))

app.route("/").put( (req, res) => {
    author = req.body.author
    res.send(author)
})
*/

/* DELETE 
let author = "Nicolas L. Kaminski"

app.route("/:identificador").delete( (req, res) => {
    author = ""
    res.send(req.params.identificador)
})
*/

/* Parametros
app.route("/").get( (req,res) => res.send(req.query.name))

app.route("/").post( (req,res) => res.send(req.body))

app.route("/:parametro").get( (req,res) => res.send(req.params.parametro))
*/


/* Body Params
app.route("/").post( (req,res) => {
    const {nome, sobremesas} = req.body
    res.send(sobremesas)
})
*/

/* Route Params 
app.route("/").get( (req,res) => res.send("Hello!"))

app.route("/:variavel").get( (req,res) => res.send(req.params.variavel))

app.route("/identidade/:nome").get( (req,res) => res.send(req.params.nome))
*/

/* Query Params 
app.route("/").get( (req,res) => res.send(req.query.nome))

app.route("/about/user").get( (req,res) => res.send(req.query))
*/

/* Consumindo Users do GitHub com Axios 
app.route("/").get( (req, res) => {
    axios.get("https://api.github.com/users/NicolasLK")
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})
*/

/* Usando o Fetch */



