const express = require("express")
const app = express()

app.set("view engine", "ejs")


//Criando uma rota
app.get("/", function (req, res){
    const items = [
        { 
            title: "D",
            message: "ev"
        },
        {
            title: "E",
            message: "JS"
        },
        {
            title: "M",
            message: "eet"
        },
        {
            title: "A",
            message: "lright, let's do it"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "imple syntax"
        }
]

    const subtitle = "Uma lignuagem de modelagem para criação de páginas Html utilizando JS"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})

app.listen(8080)
console.log("Rodando")
