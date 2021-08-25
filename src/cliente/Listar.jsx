

import React from 'react';
import {Link} from 'react-router-dom';
import Paginacao from '../components/Paginacao';
import Cabecalho from '../components/Cabecalho';
import Nav from '../components/Nav';

import { findAllCliente } from '../service/ClienteService';



class ListarCliente extends Component {

    constructor(){
        super()
        this.state = this.initState();
        this.setNumberPaginaAtual = this.setNumberPaginaAtual.bind(this);
    }

    initState = () => ({
        clientes:[],
        PaginaAtual: 1,
        pageSize : 5,
        dir: 'asc',
        props: 'id',
        total: 0, 
        paginaFim: 0,
        search: '',
    });


    async componentDidMount(){
        this.loadData();
      
    }


    async loadData(){
        
    const { paginaAtual, pageSize, dir, asc, search} = this.state;
        const clientes = await findAllCliente(paginaAtual,pageSize,dir,asc,search);
        this.setState({
            clientes:clientes.data,
            PaginaAtual:clientes.PaginaAtual,
            pageSize:clientes.pageSize,
            paginaFim:clientes.paginaFim,
            total:clientes.total,
 
        });
    }


    setNumberPaginaAtual = (pagina) => {
        this.setState({
          paginaAtual:pagina
        }, () => this.updateState())
      }
    
      updateState = () => {
        this.loadData();
      } 
    


    render(){

        const { clientespaginaAtual, pageSize, paginaFim, total } = this.state;
        return(
            <div>
                <Nav/>
        <div className="container">
        <Cabecalho path="/" tituloPagina="Listagem de clientes" tituloPesquisa="clientes"></Cabecalho>
    </div>
    <div className="container">
       <div className="tile">
           <div className="tile-body">
               <div id="no-more-tables">
                   <table className="table table-striped table-bordered table-hover cf ">
                        <thead className="cf">
                            <tr>
                               <th>Id</th> 
                               <th>Nome</th>
                               <th>Ações</th>
                            </tr>    
                       </thead>
                            <tbody> 
                                {clientes.map( (cliente) => (
                                <tr key = {cliente.id}>
                                  <td>{ cliente.id }</td>
                                  <td>{ cliente.nome }</td>
                                    <td>
                                    <Link className="btn btn-info btn-sm" to ={'/cliente/alterar/${cliente.id}'}><i className="fa fa-pencil"></i></Link>
                                    <a className="btn btn-danger btn-sm" href=" "><i className="fa fa-trash"></i></a>
                                    <a className="btn btn-warning btn-sm" href=""><i className="fa fa-address-book"></i></a>
                                    </td>
                                </tr> 
                                ))}
                        </tbody>
                   </table>
                   <Paginacao PaginaAtual ={PaginaAtual}
                   pageSize={pageSize}
                   paginaFim={paginaFim}
                   total={total}
                   setRenderPaginaCorrente={(pagina) => this.setNumberPaginaAtual(pagina)}/>
                   <Link className="btn btn-success btn-lg" to="/cliente/inserir" title="Incluir novo Cadastro">
                       <i classNameName="fa fa-plus-circle"></i></Link>    

               </div>
           </div>
       </div>
    </div>
</div>
        );
    
    }



}
export default ListarCliente;