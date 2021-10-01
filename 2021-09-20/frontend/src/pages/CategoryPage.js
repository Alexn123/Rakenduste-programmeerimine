import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';

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
    <div>
      <Link to ="add-category">
        <button>lisa kategooriaid</button>
      </Link>
      <CategoryList categories={loadedCategories} />
    </div>
  )
}

export default CategoryPage;