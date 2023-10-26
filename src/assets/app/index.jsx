import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { format } from 'date-fns';
import Form from '../components/Form';
import { useState } from 'react';
import Card from './../components/Card/index';

export default function App(){

  const [tarefas, setTarefas] = useState([])
  const [tarefasFinalizadas, setTarefasFinalizadas] = useState([])
  const [filtro, setFiltro] = useState(false)

  const novaTarefa = (tarefa) => {
    const novasTarefas = [...tarefas, tarefa];

    const ordemDeImportancia = ["Urgente", "Importante", "Bobagem"];
    novasTarefas.sort((a, b) => ordemDeImportancia.indexOf(a.grau) - ordemDeImportancia.indexOf(b.grau));
    setTarefas(novasTarefas);
  }

  const opcoes = [
    {
      id: uuidv4(),
      grau: 'Urgente',
      cor: '#ff0000'
    },
    {
      id: uuidv4(),
      grau: 'Importante',
      cor: '#ff9000'
    },
    {
      id: uuidv4(),
      grau: 'Bobagem',
      cor: '#90ee90'
    }
  ]

  function deletarTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  function finalizarTarefa(id) {
    const tarefaFinalizada = tarefas.findIndex(tarefa => tarefa.id === id)

    if (tarefaFinalizada !== -1) {
      const tarefasCopia = [...tarefas]

      const dataHora = new Date()
      const dataHoraFormatada = format(dataHora, "dd/MM/yyyy HH:mm:ss")

      const descricaoOriginal = tarefasCopia[tarefaFinalizada].descricaoTarefa

      tarefasCopia[tarefaFinalizada].descricaoTarefa = `${descricaoOriginal}\n\nFinalizada em: ${dataHoraFormatada}`

      tarefasCopia[tarefaFinalizada].finalizada = true
      console.log(tarefasCopia[tarefaFinalizada])
      
      setTarefasFinalizadas([...tarefasFinalizadas, tarefasCopia[tarefaFinalizada]]);
      tarefasCopia.splice(tarefaFinalizada, 1)
      setTarefas(tarefasCopia)
    }
  }

  return(
    <section className='app-section'>
      <Form
        tarefaCadastrada={tarefa => novaTarefa(tarefa)} 
        filtrarFinalizadas={() => setFiltro(!filtro)}
        opcoes={opcoes}
        />
          {
            filtro !== true ? (
              tarefas.length > 0 && 
                <section className="cards">
                    {tarefas.map(tarefa =>
                      <Card 
                        key={tarefa.id}
                        id={tarefa.id}
                        nomeTarefa={tarefa.nomeTarefa}
                        descricaoTarefa={tarefa.descricaoTarefa}
                        grau={tarefa.grau}
                        opcoes={opcoes.filter(opcao => opcao.grau === tarefa.grau)}
                        aoDeletar={deletarTarefa}
                        aoFinalizar={finalizarTarefa}
                      />
                    )}
                </section>  
            ) : (
              tarefasFinalizadas.length > 0 && 
                <section className="cards">
                    {tarefasFinalizadas.map(tarefa =>
                      <Card 
                        key={tarefa.id}
                        id={tarefa.id}
                        nomeTarefa={tarefa.nomeTarefa}
                        descricaoTarefa={tarefa.descricaoTarefa}
                        grau={tarefa.grau}
                        opcoes={opcoes.filter(opcao => opcao.grau === tarefa.grau)}
                        aoDeletar={deletarTarefa}
                        aoFinalizar={finalizarTarefa}
                        tarefaFeita={tarefa.finalizada}
                      />
                    )}
                </section>
            )
          }

    </section>
  )
}
