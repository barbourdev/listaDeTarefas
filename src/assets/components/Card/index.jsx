import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import './Card.css'


export default function Card({ nomeTarefa, descricaoTarefa, opcoes, grau, id, aoDeletar, aoFinalizar, tarefaFeita }){
  
  const cor = opcoes.length > 0 ? opcoes[0].cor : '#000000';

  const finalizada = {tarefaFeita}

  return(
    <div className="card-tarefa">
      <div className='cabecalho-pai'>
        <div className="cabecalho" style={{backgroundColor: cor}}>
            <h3>{nomeTarefa}</h3>
        </div>
        <textarea cols="30" rows="15" value={descricaoTarefa} readOnly></textarea>
      </div>
      <div className="rodape">
          <h3 style={{color: cor}}>{grau}</h3>
          {
            finalizada.tarefaFeita !== true ? (
              <div className="icons">
                <AiOutlineCheck
                  color='#00ff00'
                  size={20}
                  cursor='pointer'
                  onClick={() => aoFinalizar(id)}
                />
                <AiOutlineClose
                  color='#ff0000'
                  size={20}
                  cursor='pointer'
                  onClick={() => aoDeletar(id)}
                />
              </div>  
            ) : (
              <div className='tarefaFinalizada'>
                <p>Tarefa finalizada!</p>
              </div>
            )
          }
              
      </div>
    </div>
  )
}