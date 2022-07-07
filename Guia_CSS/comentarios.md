# Comentários

* Não irá afetar seu código
* Ajuda a lembrar blocos de códigos
* Deixa dias para leitura
* Ajuda  outros a entenderem
* Nunca esqueça de fechar um comentário aberto

- Comentários começam com '/*' e terminam com '*/'.

/* Básico */
/* --------------------------------------------- */
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em){
    body{
        font-size: 130%;
    }
}

h1 {
    font-size: 1.5em;
}

/* Elementos especificos */
/* --------------------------------------------- */
div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p{
    margin: 0;
    padding: 1em;
}

div p + p{
    padding-top: 0;
}

* Os comentários podem ser usados para desabilitar parte do código

/*.special{
    color: red;
}*/

p {
    color: blue;
}

