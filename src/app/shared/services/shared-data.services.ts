
export class SharedDataServices {
    placeholderVar = 'Ea-28';
    changePlaceholderValue( newVal : string ){
        this.placeholderVar = newVal
        // console.log('LOOK HERE >>', this.placeholderVar)
    }
}