
export const setUsuario = (usuario) => {

    localStorage.setItem("token", usuario.data.access_token);
    localStorage.setItem('nome', usuario.data.nome);
    localStorage.setItem('email', usuario.data.email);
}