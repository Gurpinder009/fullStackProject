import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './collection.css';
import getAxiosInstance from '../../services/axiosInstance';

const CollectionPage = ({isLoggedIn}) => {
  const navigate = useNavigate();
  const  collectionName  = useParams().collection;
  const [collectionItems, setCollectionItems] = useState([]);



  function handleDelete(id){
    console.log(id);
    const axios = getAxiosInstance();
    axios.delete(`/jewelleries/${id}`).then(()=>loadInitialData()).catch(ex=>alert(ex));
  }

  function handleUpdate(id){
    console.log(id);
    navigate(`/admin/collections/update/${id}`)
  }

  useEffect(() => {
      loadInitialData();
  },[collectionName]);


  function loadInitialData(){
    const axios = getAxiosInstance();
      console.log(collectionName)
      axios.get(`/jewelleries/category/${collectionName}`).then((result)=>setCollectionItems(result.data)).catch(e=>alert(e))
  }

  
  return (
    <div className="collection-page">
      <h1>{collectionName} Collection</h1>
      <p className="collection-description">
        Explore our beautiful collection of {collectionName}!
      </p>

      <div className="collection-items">
        {collectionItems.map((item) => (
          <div className="collection-item" key={item._id}>
            <img
              src={`http://localhost:5000${item.image}`}
              alt={item.name}
              className="item-image"
            />
            <h2 className="item-name">{item.name}</h2>
            <p className="price">${item.price}</p>
            <p className="description">{item.description}</p>
            
            {(isLoggedIn)?
            <>
            <button className="add-to-cart" onClick={()=>handleUpdate(item._id)}> update </button>
            <button className="add-to-cart" onClick={()=>handleDelete(item._id)}> delete </button>
            </>:<><button className="add-to-cart">Add to Cart</button></>   
            }
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
