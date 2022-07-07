/*
const { EventEmitter } = require("events")

const em = new EventEmitter()

em.on("SayHello", (message) => {
    console.log("I listen you!", message)
})

em.on("SayGoodBye", (message_2) => {
    console.log("I listen you, again", message_2)
})


em.emit("SayHello", "Nicolas")
em.emit("SayGoodBye", "Nicolas")

*/

const { inherits } = require("util")
const { EventEmitter } = require("events")

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")
chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log("Oh! E agora, quem poderá me defender?")
chapolin.emit("help")


