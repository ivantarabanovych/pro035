const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhr.onload = function(){
    if (xhr.status === 200){
        console.log("Data recived", xhr.responseText);
    } else {
        console.error("Error:", xhr.status);
        
    }
};
xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.org/users", true);
xhr.setRequestHeader("Content-Type", "aplication/json")
xhr.onload = function(){
    if (xhr.status === 201){
        console.log("Data Posted", xhr.responseText);
    } else {
        console.error("Error:", xhr.status);
        
    }
};
const data = JSON.stringify({name:"Bob", age: 30})
xhr.send(data);

const xhr = new XMLHttpRequest();
xhr.open("PUT", "https://jsonplaceholder.org/users/1", true);
xhr.setRequestHeader("Content-Type", "aplication/json")
xhr.onload = function(){
    if (xhr.status === 200){
        console.log("Data update", xhr.responseText);
    } else {
        console.error("Error:", xhr.status);
        
    }
};
const data = JSON.stringify({name:"Francis", age: 40})
xhr.send(data);

const xhr = new XMLHttpRequest();
xhr.open("DELETE", "https://jsonplaceholder.org/users/1", true);
xhr.onload = function(){
    if (xhr.status === 200){
        console.log("Data delete", xhr.responseText);
    } else {
        console.error("Error:", xhr.status);
        
    }
};
xhr.send();


