import { useRef } from 'react';
import './AddItemForm.css';

//võtan kasutusele useRef
function AddCategoryForm(props){
    
    //
    //selle nimetus peab olema sama, mis
    //input sees oleval ref={SIIN}
    const nameInputRef = useRef();
    const typeInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();

        const nameValue = nameInputRef.current.value;
        const typeValue = typeInputRef.current.value;
        
        const category = {
            name: nameValue,
            type: typeValue
        }
        props.onAddCategory(category);

    }
    // kui toimub nupuvajutus siis läheb käima onsubmit
    //paremal pool võrdusmärki pannakse käima ülemine funktsioon
    //annan kaasa evendi, millel kutsun previous
    return(
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br/>
            <input type="text" placeholder="Nimi" required ref={nameInputRef}/><br/>
            <label>Kategooria tyyp</label><br/>
            <select required ref={typeInputRef}>
                <option value="BASIC">Basic</option>
                <option value="DELUXE">Deluxe</option>
                <option value="PREMIUM">Premium</option>
            </select><br/>
            <button>Sisesta uus kategooria</button>
        </form>
    )
}

export default AddCategoryForm;