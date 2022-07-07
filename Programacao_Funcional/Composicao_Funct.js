
const people  = ["Rafa", "Diego", "Daniel", "Laura"]
const upperCasePeopleThatStartWithD = people
.filter(person => person.startsWith("D"))
.map(dperson => dperson.toUpperCase())


