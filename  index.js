    class Calculadora {
        constructor(first, second) {
            this.resultado = 0;
            this.first = first;
            this.second = second;
        }
    
        sumar() {
            const sumar1 = () => {
                this.resultado = this.first + this.second;
                return this.resultado;
        }
        return sumar1;
        }
    }
    
        const suma =()=>{
            first = prompt('1')
            second = prompt('2')
            
            const plus = new Calculadora(first, second)
            plus.sumar();
        }
    suma()
    
