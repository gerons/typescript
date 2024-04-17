namespace Validations {

    const validateText = (text: string): boolean => {
        return  (text.length > 3) ? true : false
    }

    const validaDate = ( fecha: Date ): boolean => {
        return ( isNaN(fecha.valueOf()) ) ? false : true
    }

}