/*Palabras reservadas de Bucles
--break -Rompe el bucle
--continue -Se salta las posiciones que le indiquemos y después continua su ejecución*/

/*Bucle For Of*/
let names = ['Paco','José','Paula','María']

for(let name of names){
    console.log(name);
    
}

/*Bucle For In*/

for(let index in names){
    console.log(index);
}

for (let i = 0; i<names.length; i++){
    if(names[i]==='Paula'){
        continue//continue es igual a i++
    }
    console.log(names[i]);
}