import './Select.css'

export default function Select({ label, opcoes, valorAlterado, valor, obrigatorio=false, }) {

    const valueChange = (e) => {
        valorAlterado(e.target.value)
    }

    return(
        <div className="select-input">
            <h3>{label}</h3>
            <select onChange={valueChange} value={valor} required={obrigatorio}>
                <option value=""></option>
                {opcoes.map(opcao => <option key={opcao.id}>{opcao.grau}</option>)}
            </select>
        </div>
    )
}