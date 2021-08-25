
export const validarCliente = (state) =>{
    const {
        nome,
        cpf,
        telefone,
        email,
        toReturn,
        formValidation,
      } = state;


      if(nome.trim().length > 100){
        formValidation.nome.push("o nome não pode ter mais de 100 caracteres");
        formValidation.validNome = true;
        toReturn = true;
      }

      if(nome.trim().length === 0){
        formValidation.nome.push("o nome deve ser informado");
        formValidation.validNome = true;
        toReturn = true;
      }

      if(nome.trim().length < 10){
        formValidation.nome.push("o nome não pode ter menos que 10 caracteres");
        formValidation.validNome = true;
        toReturn = true;
      }

      state = {toReturn, formValidation}

      return state;
      
}