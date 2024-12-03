import React, { useState,useEffect } from 'react';
import '../addCollection/add_collection.css';
import getAxiosInstance from '../../services/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCollection = ({isLoggedIn}) => {
    let {id} = useParams();
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      image: "",
      category: '',
    });
  

    const navigate = useNavigate();
    
    useEffect(()=>{
        loadJewelleryData()
        
    },[])

    async function loadJewelleryData(){
        let axiosIns = getAxiosInstance();
    
        let result = await axiosIns.get(`/jewelleries/${id}`);
        setFormData((prev)=>{
            let newData = {...prev};
            
            newData.name = result.data.name;
            newData.description = result.data.description;
            newData.price = result.data.price;
            newData.image = result.data.image;
            newData.category = result.category;










            return newData
            // newData.name = result.data.name;
            // newData.description = result.data.description;
            // newData.price = result.date.price;
            // newData.category = result.date.category;
            // newData.image = result.date.image; 
        });
    }



    useEffect(()=>{
        if(!isLoggedIn){
            navigate("/admin/login")
        }
    },[isLoggedIn,navigate])
  



  const categories = [
  
    
    'Necklaces', 'Earings', 'Bracelets', 'Rings'];

  const handleName = (e) =>{
    setFormData((prev)=>{
        let newData = {...prev}
        newData.name = e.target.value
        return newData;
    });
  }


  const handleDescription = (e) =>{
    setFormData((prev)=>{
        let newData = {...prev}
        newData.description = e.target.value
        return newData;
    });
  }

  const handlePrice = (e) =>{
    setFormData((prev)=>{
        let newData = {...prev}
        newData.price = e.target.value
        return newData;
    });
  }

  const handleImageUrl = (e) =>{
    setFormData((prev)=>{
        let newData = {...prev}
        newData.image = e.target.value
        return newData;
    });
  }


  const handleCategory = (e)=>{
    setFormData((prev)=>{
        let newData = {...prev}
        newData.category = e.target.value
        return newData;
    });
  }





  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const axiosIns = getAxiosInstance();

    try {
      const response = await axiosIns.patch(`/jewelleries/${id}`,formData)
      if (response.status === 200) {
        alert("Collection added successfully!");
       navigate(`/jewelleries/${formData.category}`)
      } else {
        alert("Failed to add collection.");
      }
    } catch (error) {
      console.error("Error adding collection:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-collection-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleName}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleDescription}
          required
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handlePrice}
          required
        />
      </div>

      <div>
        <label>Image Url:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleImageUrl}
          required
        />
      </div>

      <div>
        <label>Select Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleCategory}
          
          required
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category} defaultChecked={(category === formData.category) ? true:false} >
              {category}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Update Collection</button>
    </form>
  );
};

export default UpdateCollection;
