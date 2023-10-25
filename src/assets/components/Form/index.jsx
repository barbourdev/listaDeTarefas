import Select from '../Select/index';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/index';
import { useState } from 'react';
import './Form.css'

export default function Form({ opcoes, tarefaCadastrada }){

    const [grau, setGrau] = useState('')
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [descricaoTarefa, setDescricaoTarefa] = useState('')
    
    const aoSalvar = (e) => {
        e.preventDefault()
        tarefaCadastrada({
            id: uuidv4(),
            grau,
            nomeTarefa,
            descricaoTarefa,
            finalizada: false
        })

        // setGrau('')
        // setNomeTarefa('')
        // setDescricaoTarefa('')
    }
    
    return(
        <form onSubmit={aoSalvar} className='form'>
            <div className="inputs-form">
                <Select
                    obrigatorio={true}
                    label={'Grau da tarefa'}
                    opcoes={opcoes}
                    valorAlterado={valorAlterado => setGrau(valorAlterado)}
                    valor={grau}
                />
                <Input 
                    obrigatorio={true}
                    label={'Nome da Tarefa'}
                    valorAlterado={valorAlterado => setNomeTarefa(valorAlterado)}
                    valor={nomeTarefa}
                />
                <Input 
                    obrigatorio={true}
                    label={'Descrição da Tarefa'}
                    valorAlterado={valorAlterado => setDescricaoTarefa(valorAlterado)}
                    valor={descricaoTarefa}
                />
                <button>
                  Criar Tarefa
                </button>
            </div>
        </form>
    )
}