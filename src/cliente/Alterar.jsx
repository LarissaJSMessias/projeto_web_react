import React from "react";
import { Link } from "react-router-dom";
import { updateCliente, findClienteById } from "../service/ClienteService";
import Cabecalho from "../components/Cabecalho";
import Nav from "../components/Nav";

class AlterarCliente extends React.Component{

    constructor(props){
        super(props);
        this.state = this.initState();
    }

    initState = () => ({
            id:undefined,
            nome:"",
            cpf:"",
            telefone:"",
            email:"",    
    });



    componentDidMount(){
        const { id } = this.props.match.params;
        this.loadData(id);
    }


    async loadData(id){
        const resposta_servidor = await findClienteById(id);
        
        this.setState({
            id:resposta_servidor.cliente.id,
            nome:resposta_servidor.cliente.nome,
            cpf:resposta_servidor.cliente.cpf,
            telefone:resposta_servidor.cliente.telefone,
            email:resposta_servidor.cliente.email,
        })
    }



    onChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
           [name]:value
        });
        
    };

    async handleSubimitCliente(e){
        e.preventDefault();  
    
        const {
            nome,
            cpf,
            telefone,
            email,
          } = this.state;
    
      
        let cliente = {
            id:id,
            nome:nome,
            cpf:cpf,
            telefone:telefone,
            email:email, 
        } 
    
        const resposta_servidor = await updateCliente(cliente); 
    
        this.setState({
            state:this.initState(),
        }, this.listarCliente() )
      }
    
    
      listarCliente = () => {
          this.props.history.push('/cliente/listar');
      }
    



    render(){

        const {id, nome, cpf, telefone, email} = this.state;

        return(
            <div className="conteiner pt-5">
                <Nav/>
                <Cabecalho path="/cliente/listar" tituloPagina="cadastro de Clientes" tituloPesquisa="nome Cliente"></Cabecalho>
             
             <div className="tile">
              <div className="tile-body">
               <form onSubmit={(e) => this.handleSubimitAutor(e)}> 
                <div className="row">
                 <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
        <label htmlfor="nome" className="control-label">
            Nome:</label>
<input type="text"
        name="nome"
        value = {nome}
        onChange = { (e) => this.onChange(e)}
        id="nome"
        className="form-control"/> 

    </div>
    </div>
 </div>
<div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6">
        <div className="form-group">
        <label htmlfor="cpf" className="control-label">CPF:</label>
<input type="text"
        name="cpf"
        value = {cpf}
        onChange = { (e) => this.onChange(e)}
        id="cpf"
        className="form-control" />
    </div>
    </div>
</div> 
<div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6">
        <div className="form-group">
        <label htmlfor="telefone" className="control-label">Telefone:</label>
<input type="text"
        name="telefone"
        value = {telefone}
        onChange = { (e) => this.onChange(e)}
        id="telefone"
        className="form-control"/>

    </div>
    </div>
</div> 
<div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6">
        <div className="form-group">
        <label htmlfor="email" className="control-label">Email:</label>
<input type="text"
        name="email"
        value = {email}
        onChange = { (e) => this.onChange(e)}
        id="email"
        className="form-control"/>

        </div>
        </div>
    </div> 
<input type="hidden"  id="id" name="id" value= {id}/>

    <div className="center">
                <button type="submit" className="btn btn-primary btn-lg" title="Incluir novo Registro">
                  Salvar Dados do Cliente
                </button>
                <Link to="/autor/listar"  className="btn btn-secondary btn-lg ml-3" title="Cancelar a Inclusão">
                  Cancelar Alteração do Cliente
                </Link>
              </div>
            </form>
           </div>
         </div> 
        </div>  

        );
    }

}
export default AlterarCliente;