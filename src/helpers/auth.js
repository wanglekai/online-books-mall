export const isAuth = () => {
    const jwt = window.localStorage.getItem('jwt')
    if (jwt) return JSON.parse(jwt)
    return false
}