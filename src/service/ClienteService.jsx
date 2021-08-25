
import http from "../util/banco";

export const findAllCliente = async(PaginaAtual, pageSize,dir, props, search,) =>{
    return (
        http.get('/cliente/listar', {
            params:{
                PaginaAtual,
                pageSize,
                dir,
                props,
                search,
            }
        })
        .then( res =>{
            return res.data;
        })
    )
}


export const findClienteById = async (id) =>{
    return (
        http.get(`/cliente/alterar/${id}`)
            .then(res => {
                res.data;
            }).catch(error =>{
                error.res;
            })
    )
}




export const createCliente = async ( cliente ) => {
   return (
        http({
            method:'post',
            url:'/cliente/salvar',
            data:cliente,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res => {
            console.log(res.data);
            return res.data
        })

    )
}


export const updateCliente = async ( cliente ) => {
    return (
         http({
             method:'post',
             url:`/cliente/update/${cliente.id}`,
             data:cliente,
             headers:{
                 'Content-Type':'application/json'
             },
         }).then(res => {
             console.log(res.data);
             return res.data
         })
 
     )
 }