const SelectGroup = (props) => {
    return(
        <div className="input-group my-3">
            <label className="input-group-text">{props.title}</label>
            <select onChange={(e) => props.onValueChange(e.target.value)} className="form-select" aria-label={props.ariaLabel} id={props.id}>
                <option defaultValue>Selecione..</option>
                {
                    props.options.map((item) => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })
                }
            </select>
        </div>
    );
}

export default SelectGroup;