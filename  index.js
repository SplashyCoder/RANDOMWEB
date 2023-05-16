    class Calculadora {
        constructor(first, second) {
            this.resultado = 0;
            this.first = first;
            this.second = second;
        }
    
        sumar() {
            const sumar1 = () => {
                this.resultado = Number(this.first) + Number(this.second);
                alert(this.resultado);

                let numero = Math.random() * 100
                numero = Math.round(numero)

                document.write(numero)
            }
            return sumar1;
        }
    }
    
        const suma =()=>{
            first = prompt('1')
            second = prompt('2')
            const plus = new Calculadora(first,second)
            const sumar1 = plus.sumar();
            sumar1();
        }

        suma();