import Item from '../components/Item';
import '../components/ItemList.css';

function ItemList(props) {
  return(<div>
    {props.items.map(item=> (
     <Item 
      key={item.id} 
      name={item.name} 
      price={item.price}
      category={item.category} />
    ))}
  </div>);
}

export default ItemList;