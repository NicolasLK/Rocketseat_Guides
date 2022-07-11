const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = 
        JSON.stringify(data))
        .catch(er => console.error(er))
}

function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(er => console.error(er))
}

function addUser(newUser) {
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(er => console.error(er))
}

function updtUser(updateUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(er => console.error(er))
}

function delUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(er => console.error(er))
}

const newUser = {
    name: "Nicolas L. Kaminski",
    avatar: "https://picsum.photos/200/300",
    city: "Porto Alegre"
}
addUser(newUser)

const updateUser = {
    name: "Eduardo Carvalho",
    avatar: "https://picsum.photos/200/300",
    city: "Joinvile"
}
//updtUser(updateUser, 3)


delUser(6)
getUsers()
getUser()
