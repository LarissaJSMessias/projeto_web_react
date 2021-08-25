import React from "react";
import { Link } from "react-router-dom";
import { createCliente } from "../service/ClienteService";
import {validarCliente} from "../validacao/ValidCliente";
import Nav from "../components/Nav";
import Cabecalho from "../components/Cabecalho";

class IncluirCliente extends React.Component{

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


    toReturn: false,

formValidation:{
    nome: [],
    cpf: [],
    telefone: [],
    email: [],  
    
    validNome: false,
    ValidCpf: false,
    ValidTelefone: false,
    ValidEmail: false,   

}
        


    });


    onChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
           [name]:value
        });
        
    };


    validarDigitacaoCliente(){
        const {toReturn, formValidation} = this.state;
        let state = validarCliente(this.state);
        this.setState ({
            toReturn : state.toReturn,
            formValidation : state.formValidation,
        })
        return state.toReturn;
    }

    async handleSubimitCliente(e){
        e.preventDefault();  

        if(this.validarDigitacaoCliente() === false){

       
    
        const {
            nome,
            cpf,
            telefone,
            email,
          } = this.state;
    
      
        let cliente = {
            nome:nome,
            cpf:cpf,
            telefone:telefone,
            email:email, 
        } 
    
        const resposta_servidor = await createCliente(cliente); 
    
        this.setState({
            state:this.initState()
        }, this.listarCliente() )
      }
    }


    
      listarCliente = () => {
          this.props.history.push('/cliente/listar');
      }
    



    render(){

        const {nome, cpf, telefone, email, formValidation} = this.state;

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
        className= {
            formValidation.validNome === true ? "form-control is-invalid" : "form-control"
        }/> 
        {
            formValidation.validNome && (
                <div className="invalid-feedback">
                    {
                        formValidation.nome.map((erro, index) => {
                           return(
                            <p key={index} style={{ margin: "0"}}>
                                <span>{erro}</span>
                            </p>
                        )
                        })
                    }
                </div>
            )
        }


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
    <div className="center">
                <button type="submit" className="btn btn-primary btn-lg" title="Incluir novo Registro">
                  Salvar Dados do Cliente
                </button>
                <Link to="/autor/listar"  className="btn btn-secondary btn-lg ml-3" title="Cancelar a Inclusão">
                  Cancelar Inclusão do Cliente
                </Link>
              </div>
            </form>
           </div>
         </div> 
        </div>  

        );
    }

}
export default IncluirCliente;