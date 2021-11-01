import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AdminHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

    function makeDeleteRequest(itemId){
      fetch('http://localhost:8080/delete-item/' + itemId,
      {method: 'DELETE'}
      ).then(res => {
      return res.json();
    }).then(data =>{
      setLoadedItems(data);
    });
  }

  if (isLoading) {
    return (<div>Laeb...</div>); 
  }

  return (
    <div>
      <div className="buttons">
      <Link to ="categories">
        <button className="kodulehenupp">vaata kategooriaid</button>
      </Link>
      <Link to="add-item">
        <button className="kodulehenupp">Lisa uus ese</button>
      </Link>
      </div>
      <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems} />
    </div>
  )
}

export default AdminHome;