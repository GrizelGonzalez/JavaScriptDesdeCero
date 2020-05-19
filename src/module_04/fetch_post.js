//Comprobación de soporte FECHT
/*if (window.fetch != undefined) console.log('FETCH OK')
else console.log('FETCH NOW WORKS')*/

const button = document.getElementById('button')

//res = response = respuesta
button.addEventListener('click', () => {
    /*fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => console.log(res))*/

    const newPost = {
        title: 'A new post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
        }
    }).then(res => res.json())
    .then(data => console.log(data))
   
})
