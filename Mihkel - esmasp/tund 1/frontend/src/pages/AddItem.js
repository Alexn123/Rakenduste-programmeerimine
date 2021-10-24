import AddItemForm from "../components/AddItemForm";

function AddItem() {
    function itemSubmitHandler(item){
        fetch('http://localhost8080/items',{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'application/json'}
        });

    }

    return (
        <div className="add-item">
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}

export default AddItem;