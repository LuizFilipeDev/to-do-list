import ButtonItem from '../Button';

const ApplyColor = (color) => {

    let colorClass = '';

    switch (color) {
        case 'secondary':
            colorClass = 'card-header text-dark bg-secondary';
            break;
        case 'warning':
            colorClass = 'card-header text-dark bg-warning';
            break;
        case 'info':
            colorClass = 'card-header text-dark bg-info';
            break;
        default:
            colorClass = 'card-header text-dark';
            break;
    }

    return colorClass;
}

const CardItem = (props) => {
    return (
        <div className="card" style={{textDecoration: props.isComplete ? "line-through" : ""}}>
            <div className={ApplyColor(props.colorHeader)}></div>
            <div className="card-body d-flex flex-column flex-lg-row justify-content-between">
                <div>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">({props.category})</p>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="mt-2">
                    <ButtonItem buttonItemId={props.taskId} title={!props.isComplete ? "Completar" : "Restaurar"} color={!props.isComplete ? "success" : "secondary"} onClick={props.onClickComplete}/>
                    <ButtonItem buttonItemId={props.taskId} title="Remover"  className="mx-2" color="danger" onClick={props.onClickRemove}/>
                </div>
            </div>
        </div>
    );
}

export default CardItem;