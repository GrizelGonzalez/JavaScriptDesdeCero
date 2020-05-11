class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }

    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const juan = new Persona('Juan', 'Garcia', 25)

console.log(juan);
console.log(juan.saludar());