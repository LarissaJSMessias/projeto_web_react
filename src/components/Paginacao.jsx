
import React from 'react';

const Paginacao = ({paginaAtual, pageSize, paginaFim, total}) => {

let currentNumber = paginaAtual + 1;

let start =0;
let size = 0;

let pageLength = pageSize > 5 ? 5 : pageSize;

const pages = [];

if( total <= pageLength){
    start = 1;
    size = paginaFim
} else 
    if (currentNumber <= pageLength - pageLength) / 2){
        start =1;
        size = pageLength;
    } else if (currentNumber >= paginaFim - pageLength /2){
        start =1;
        size = pageLength;
    } else if (currentNumber >= paginaFim - pageLength /2){
        start =1;
        size = pageLength;
    } else {
        start = Math.ceil(currentNumber - pageLength /2);
        size = pageLength;
    }




return (
    <React.Fragment>
        <div className="box-footer clearfix">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <div className="pagination">
                        <p>
                            mostrando { pageSize * paginaAtual + 1}
                            <span className =" badge badge-secondary"></span>
                            de {Math.ceil(total/pageSize)} paginas
                            <span className =" badge badge-secondary"></span>
                           de {total}
                           <span className =" badge badge-secondary"></span>
                           Registros de cadastrados

                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-8">
                <ul className="pagination pull-right">
                    {
                        pages.map((pagina) =>{
                            return(
                                <li>
                                    <a onClick={() =>  renderPaginaCorrente}
                                    className="page-link">
                                        {pagina}
                                        </a>
                                </li>
                            )
                        })
                    }

                    

                </ul>
            </div>

        </div>
    </React.Fragment>
)
}

export default Paginacao;