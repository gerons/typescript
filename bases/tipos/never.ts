(() => {

    const error = ( message: string ):never => {
        throw new Error(message);
    }


    error('Error al registrar el usuario')

})()