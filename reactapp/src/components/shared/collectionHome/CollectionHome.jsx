import React from 'react';
import './collectionHome.css';
import necklace3 from '../../../images/necklace3.jpg';
import { NavLink } from 'react-router-dom';

const collections=[
  {id:1,name:'Rings',image:necklace3,link:'/collections/rings'},
  {id:2,name:'Necklaces',image:necklace3,link:'/collections/necklaces'},
  {id:3,name:'Bracelets',image:necklace3,link:'/collections/bracelets'},
  {id:4,name:'Earings',image:necklace3,link:'/collections/Earings'},

]
 
const CollectionsHome = () => {
  return (
   <div className='collection-home'>
    <h1 className='collection-title'>Shop by Collections</h1>
    <p className='collection-subtitle'>Browse through your favourite category</p>
    <div className='category-cards-wrapper'>
      {collections.map((collection)=>{
        return(
        <div key={collection.id} className='category-cards'>
          <img src={collection.image} alt={collection.name} className='category-image'></img>
          <h2 className='category-name'>{collection.name}</h2>
          <NavLink to={collection.link} className='category-link'>Explore &gt;</NavLink>
          </div>
        )
      })}
    </div>
   </div>
  );
};

export default CollectionsHome;
