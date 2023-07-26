const Button = (props) => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-end col-sm-12">
            <button className="btn btn-primary" onClick={() => {props.onClick()}}>{props.title}</button>
        </div>
    );
}

export default Button;