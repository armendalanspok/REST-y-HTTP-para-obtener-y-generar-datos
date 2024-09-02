// 1. Varios tipos de datos diferentes
let nombre: string = "Alan";
let edad: number = 25;
let esDesarrollador: boolean = true;
let habilidades: string[] = ["Java", "JavaScript", "Typescrip"];
let response: undefined = undefined;
// 2. Enumeraciones para representar diferentes valores
enum  estadosConocidos{
   Puebla,
    Tlaxcala,
    NuevoLeon,
    Queretaro,
}

let estado:  estadosConocidos = estadosConocidos.Tlaxcala;

// 3. Uso de los tipos any y unknown en diferentes situaciones
let prueba: any = "Mi nombre es Alan";
prueba = 25; 
prueba = true; 

let valorDesconocido: unknown;
valorDesconocido = "hola mundo";

if (typeof valorDesconocido === "string") {
    let longitud = valorDesconocido.length; 
}

// 4. Tipos de unión e intersección
type union = number| string;

let resultado: union = "Ejemplo de union";
resultado = 200; 

type Persona = {
    nombre: string;
    edad: number;
};

type Empleo = {
    empresa: string;
    puesto: string;
};

type EmpleadoCompleto = Persona & Empleo;

let empleado: EmpleadoCompleto = {
    nombre: "Alan",
    edad: 25,
    empresa: "Afirme Seguros",
    puesto: "Desarrollador",
};

// 5. Tipos de colección en diferentes situaciones
let listaNumeros: number[] = [1, 2, 3, 4, 5];

let mapaDeUsuarios: Map<number, string> = new Map();
mapaDeUsuarios.set(1, "Alan");
mapaDeUsuarios.set(2, "Lenin");

let conjuntoDeHabilidades: Set<string> = new Set(["Nadar", "correr", "saltar"]);


mapaDeUsuarios.forEach((nombre, id) => {
    console.log(`Usuario ${id}: ${nombre}`);
});


conjuntoDeHabilidades.forEach(habilidad => {
    console.log(`Habilidad: ${habilidad}`);
});