let nombre = "Teclab";
let FechaNacimiento= "21/03/1975";
let anioinicial = "2018";
if(anioinicial === "2023"){
    console.log("la variable anioInicial tiene como valor 2018")
} else{
    console.warn("El valor de anioInicial no es el esperado")
}



const usuario = "Joe McMillan";
const securityId ='01216318578-4645-a454654';

const paisesDelSur = ['Argentina','Uruguay','Venezuela','Chile'];

const carrito =[{codigo:123, nombre: 'Teclado Bluetooth', importe: 15500},
                {codigo:234, nombre: 'Mouse Bluetooth', importe: 7800},
                {codigo:345, nombre: 'SSD Portatil', importe: 47350}]; 

                let numerico ="1"
                let string = "frutas"
                const arrayFrutas = ["Manzana","Banana","Pera","Limon","Mango" ]

let userName = "mcmillanjoe"
let password = "mcmillan-security.1990"

if(userName === "mcmillanjoe" && password === "mcmillan-security.1990") {
    console.log("bienvenido nuevamete, " + userName)
} else {
    console.log("no se reconoce el usuario y/o la contraseña ingresada.")
}
                
                let valorOfertado = 2500
                switch (valorOfertado){
                    case 1000: 
                        console.warn("Su oferta es muy baja. Realiza una mejor oferta.")
                        break;
                    case 2000:
                        console.log("Gracoas por tu oferta, Puedes retirar el producto hoy mismo.")
                        break;
                    default:
                        console.error("No pudimos interpretar tu oferta. Intenta nuevamente.")    

                }   

let edad = 18;
let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(resultado); // devuelve como resultado: "Eres menor de edad"