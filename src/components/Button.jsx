const applyColor = (color) => {

    let colorClass = '';

    switch (color) {
        case 'primary':
            colorClass = 'btn btn-primary';
            break;
        case 'secondary':
            colorClass = 'btn btn-secondary';
            break;
        case 'success':
            colorClass = 'btn btn-success';
            break;
        case 'danger':
            colorClass = 'btn btn-danger';
            break;
        case 'warning':
            colorClass = 'btn btn-warning';
            break;
        case 'info':
            colorClass = 'btn btn-info';
            break;
        case 'light':
            colorClass = 'btn btn-light';
            break;
        case 'dark':
            colorClass = 'btn btn-dark';
            break;
        case 'link':
            colorClass = 'btn btn-link';
            break;
        default:
            colorClass = 'btn btn-link';
            break;
    }

    return colorClass;
}

const ButtonItem = (props) => {
    return (
        <button buttonitemid={props.buttonItemId} className={applyColor(props.color) + ` ${props.className}`} onClick={(e) => {props.onClick(e.target.attributes.buttonitemid.value)}}>{props.title}</button>
    );
}

export default ButtonItem;