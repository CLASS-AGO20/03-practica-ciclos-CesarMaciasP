export default class App {

    convertirAString(numero){ 
        let string = 0
        let resultado 

        while(numero != 0) {
            numero--
            string++
        } 

        

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

console.log(app.factorial)

console.log(app.convertirAString(4))

console.log(app.obtenerDivisibles(6))

console.log(app.elevar(3, 3))
