const url = "http://localhost:5500/api";

function getUsers() {
    try{
        axios.get(url)
        .then(response => {
            ApiResult.textContent = JSON.stringify(response.data)
        })
    } catch (e) {
        console.log(e)
    }
}

function addNewUser(newUser) {
    try {
        axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
    } catch (e) {
        console.log(e)
    }
}

function getUser(id) {
    try {
        axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
    } catch (e) {
        console.log(e)
    }
}

getUser(1)

getUsers()

const newUser = {
    name: "Isadora Kaminski",
    avatar: "https://picsum.photos/200/300",
    city: "Sideropolis"
}

//addNewUser(newUser)
