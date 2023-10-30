import Select from '../Select/index';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/index';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './Form.css';

export default function Form({ opcoes, tarefaCadastrada, filtrarFinalizadas }){

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

        setGrau('')
        setNomeTarefa('')
        setDescricaoTarefa('')

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Tarefa criada com sucesso!'
          })
    }
    
    return(
        <>
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
                    <h3>Filtros</h3>
                    <div className="filtro">
                        <Input
                            textoAlternativo={'Finalizadas'}
                            type='checkbox'
                            aoClicar={filtrarFinalizadas}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}