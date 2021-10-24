import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';
import './CategoryPage.css';

function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/categories').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedCategories(data);
    });
  },[])
  
  if (isLoading) {
    return (<div>Laeb...</div>); 
  }

  return (
    <div className="buttonss">
      <div className="buttonsss">
      <Link to ="add-category">
        <button className="kategoorianupp">lisa kategooriaid</button>
      </Link>
      </div>
      <CategoryList categories={loadedCategories} />
    </div>
  )
}

export default CategoryPage;