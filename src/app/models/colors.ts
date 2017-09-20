export class Colors {

    public red = {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    }

    public blue = {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    }
    public yellow = {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }

    public colors : {value: string, colorHex: {primary: string, secondary: string} }[] = [
        {value: "Red", colorHex: this.red},
        {value: "Blue", colorHex: this.blue},
        {value: "Yellow", colorHex: this.yellow}
      ]

    getColorFromValue(value : string){
        switch(value){
            case('Red'): {
                return this.red
            } case('Blue'): {
                return this.blue
            } case('Yellow'): {
                return this.yellow
            } default:
                break
        }
    }

    getColorFromObject({primary, secondary} : {primary: string, secondary: string}){
        if(primary === this.red.primary && secondary === this.red.secondary){
            return this.colors[0]
        }if(primary === this.blue.primary && secondary === this.blue.secondary){
            return this.colors[1]
        }if(primary === this.yellow.primary && secondary === this.yellow.secondary){
            return this.colors[2]
        }
    }
}