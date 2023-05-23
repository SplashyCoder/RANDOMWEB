

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

        let first =[]
        const address = new Random()

        const clFirst =()=>{
            first.push(address.cl())
            let thirdOpc = address.cardinal()
            let startPoint = 'CL'+first[0][0]+thirdOpc+'#'+first[0][1]
            const lable = document.getElementById('startPoint')
            lable.textContent = startPoint
        }

        const krFirst =()=>{
            first.push(address.kr())
            let thirdOpc = address.cardinal()
            let startPoint = 'Kr'+first[0][0]+'#'+first[0][1]
            const lable = document.getElementById('startPoint')
            lable.textContent = startPoint
        }

        Math.random() >= 0.5? clFirst(): krFirst()
        


    } 
    
    
    


    