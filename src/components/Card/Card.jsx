 const Card = (props) => {
    return(
        <div className="card my-3">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;