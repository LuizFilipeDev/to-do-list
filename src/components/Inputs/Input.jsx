const Input = (props) => {
    return(
        <div className="input-group">
            <input className="form-control py-2 border-right-0 border" type="text" placeholder={props.placeHolder} id={props.id}/>
        </div>
    );
}

export default Input;