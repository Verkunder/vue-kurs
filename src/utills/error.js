const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'User with this E-mail was not found :(',
    INVALID_PASSWORD: 'Your password is incorrect :(',
    auth: 'Please sign in!'
}
export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}