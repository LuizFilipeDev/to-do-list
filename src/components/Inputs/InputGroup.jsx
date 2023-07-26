const InputGroup = (props) => {
    return(
        <div className="input-group my-3">
            <span className="input-group-text">{props.title}</span>
            <input value={props.value} id={props.id} onChange={(e) => props.onValueChange(e.target.value)} type="text" className="form-control" placeholder={props.placeHolder}/>
        </div>
    );
}

export default InputGroup;