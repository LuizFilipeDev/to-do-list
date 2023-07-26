import CardItem from "./CardItem";

const Item = (props) => {
    return (
        <div className="row my-3">
            <div className="col">
                <CardItem onClickComplete={props.task.complete} onClickRemove={props.task.remove} isComplete={props.item.isComplete} taskId={props.item.id} 
                          title={props.item.title} description={props.item.description} colorHeader={props.colorHeader} category={props.category}/>
            </div>
        </div> 
    );
}

export default Item;