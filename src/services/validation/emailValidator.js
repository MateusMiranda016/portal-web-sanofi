export const isEmailValid = (emailInput) => {
    // Regex para verificar se o endereço de e-mail é válido
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailInput)
}