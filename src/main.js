export default class App {

    factorial(numero){
        let resultado = numero

        for(let i = numero; i > 1; resultado = resultado * i) {
            if (i > 1) { 
                i--
            }
        }

        return resultado

    }

    convertirAString(numero){ 
        let i = 1
        let resultado = ""

        while(i <= numero) {

            resultado = resultado + "*"
            i = i + 1
        } 

        return resultado
    }

    obtenerDivisibles(numero) {
        let i = numero
        let divisibles = 0

        do {
            if (numero % i == 0) {
                divisibles = divisibles + 1
            }

            i = i - 1

        } while(i != 0)
        
        return divisibles
    }

    elevar(numero, potencia) {
        let resultado = numero

        while(potencia != 1) {
            resultado = resultado * numero
            potencia = potencia - 1
        }

        return resultado
    }
}

let app = new App()

console.log(app.factorial(4))

console.log(app.convertirAString(7))

console.log(app.obtenerDivisibles(6))

console.log(app.elevar(3, 3))
