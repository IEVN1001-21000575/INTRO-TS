class Persona{
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;

}
imprimir():void{
    console.log(`Hola, mi nombre es ${this.nombre}
        y tengo ${this.edad}`);
}
}
let persona1 = new Persona('Juan', 30);
console.log(persona1)