fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(responce => {
    if(responce.ok){
        return responce.json()
    }
    throw new Error("Network does not ok!")
})
.then(data =>{
    console.log("data recived", data);
})

.catch(error =>{
    console.error("Error", error)
})

fetch('https://jsonplaceholder.org/users', {
    method: "POST",
    headers: {
        'Content-Type' : 'aplication/json'
    },
    body: JSON.stringify({
        name: "Bob",
        age: 30
    })
})

.then(responce => {
    if(responce.ok){
        return responce.json()
    }
    throw new Error("Network does not ok!")
})
.then(data =>{
    console.log("data posted", data);
})

.catch(error =>{
    console.error("Error", error)
})

fetch('https://jsonplaceholder.org/users/1', {
    method: "PUT",
    headers: {
        'Content-Type' : 'aplication/json'
    },
    body: JSON.stringify({
        name: "Jack",
        age: 54
    })
})

.then(responce => {
    if(responce.ok){
        return responce.json()
    }
    throw new Error("Network does not ok!")
})
.then(data =>{
    console.log("data update", data);
})

.catch(error =>{
    console.error("Error", error)
})

fetch('https://jsonplaceholder.org/posts/1', {
    method: 'DELETE'
})

.then(responce => {
    if(responce.ok){
        return responce.json()
    }
    throw new Error("Network does not ok!")
})
.then(data =>{
    console.log("data delete", data);
})

.catch(error =>{
    console.error("Error", error)
})