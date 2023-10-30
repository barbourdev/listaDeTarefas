import './Input.css'

export default function Input({ label, type='text', obrigatorio=false, valor, valorAlterado = () => {}, aoClicar, textoAlternativo }) {

    const valueChange = (e) => {
        valorAlterado(e.target.value)
    }

    return(
        <div className={`campo-input ${type}`}>
            <h3>{label}</h3>
            <input type={type} required={obrigatorio} value={valor} onChange={valueChange} onClick={aoClicar} id={type}/>
            <p>{textoAlternativo}</p>
        </div>
    )
}