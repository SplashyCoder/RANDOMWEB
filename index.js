

    class Random{
        constructor(dire){
            this.dire = dire;
            this.firstPart=[]
        }

        number=()=>{
            let numero = Math.random()*80
            numero = Math.round(numero)
            return numero
        }
    
        cl=()=>{ //returns the number of the cl
            
            this.firstPart.push(this.number())
            this.firstPart.push(this.number())
            return this.firstPart
        }

        kr=()=>{ //returns the number of the kr
            this.firstPart.push(this.number())
            this.firstPart.push(this.number())
            return this.firstPart
        }

        cardinal =()=> Math.random() >= 0.5?'sur': 'norte'

        nomen =()=> this.dire == 1? 'cl' : 'Kr'+this.dire
    }

    const address =()=>{

        const clFirst =()=>{
            first.push(address.cl())
            let thirdOpc = address.cardinal()
            document.write('CL'+first[0][0]+thirdOpc+'#'+first[0][1])
        }

        const krFirst =()=>{
            first.push(address.kr())
            let thirdOpc = address.cardinal()
            document.write('Kr'+first[0][0]+'#'+first[0][1])
        }

        let first =[]
        const address = new Random()
        let thirdOpc = address.cardinal()
        first.push(Math.random() >= 0.5? clFirst(): krFirst())
        // let id = 


    } 
    address()
    
    


    