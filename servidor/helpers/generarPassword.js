exports.generarPass = (length) => {
    let resultado = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        resultado += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return resultado
}

