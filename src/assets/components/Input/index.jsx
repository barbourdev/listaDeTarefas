import './Input.css'

export default function Input({ label, type='text', obrigatorio=false, valor, valorAlterado }) {

    const valueChange = (e) => {
        valorAlterado(e.target.value)
    }

    return(
        <div className="campo-input">
            <label>{label}</label>
            <input type={type} required={obrigatorio} value={valor} onChange={valueChange}/>
        </div>
    )
}