import React, { useEffect } from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from "../components/pages/home/Home.jsx";
import NavBar from "../components/shared/navbar/Navbar.jsx";
import Footer from './shared/footer/Footer';
import CollectionPage from './pages/collections/Collections.jsx';
import AboutUs from "../components/pages/about/About.jsx"
import ContactUs from "../components/pages/contactUs/ContactUs.jsx"
import LoginPage from './pages/login/Login.jsx';
import CollectionsHome from './shared/collectionHome/CollectionHome.jsx';
import AddCollection from './pages/addCollection/AddCollection.jsx';
import UpdateCollection from "./pages/updateCollection/UpdateCollection.jsx"

export default function Router({isLoggedIn, setIsLoggedIn}) {

    function handleLogin() {
        setIsLoggedIn((prev)=> !prev);
    }





    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <NavBar isLoggedIn={isLoggedIn}
                                handleLogin={handleLogin}
                            
                            
                            />
                            <Home/>
                            <CollectionsHome />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/collections/:collection"
                    element={
                        <div>
                            <NavBar isLoggedIn={isLoggedIn}
                                handleLogin={handleLogin}
                            />

                            <CollectionPage isLoggedIn={isLoggedIn} />
                            <Footer />
                        </div>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <div>
                            <NavBar isLoggedIn={isLoggedIn} 
                                handleLogin={handleLogin}
                            />

                            <AboutUs />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/contact-us"
                    element={
                        <div>
                            <NavBar isLoggedIn={isLoggedIn} 
                            handleLogin={handleLogin}/>

                            <ContactUs />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/admin/login"
                    element={
                        <div>
                            <NavBar isLoggedIn={isLoggedIn}
                                handleLogin={handleLogin}
                            />

                            <LoginPage handleLogin={handleLogin} />
                            <Footer />
                        </div>
                    }
                />


                <Route path="/admin/collections/create" element={
                    <div>
                          <NavBar isLoggedIn={isLoggedIn}
                                handleLogin={handleLogin}
                            />
                        <AddCollection isLoggedIn={isLoggedIn}/>
                        <Footer />

                    </div>
                    //  <CollectionCreate isLoggedIn={isLoggedIn}/>
                } />
            
<Route path="/admin/collections/update/:id" element={
                    <UpdateCollection isLoggedIn={isLoggedIn}/>} />
                <Route path="*" element={<>Page is not found</>} />
            </Routes>
        </div>
    );
}



// function CollectionCreate(isLoggedIn){
//     const navigate = useNavigate();

//     useEffect(()=>{
//         if(!isLoggedIn){
//             navigate("/admin/login")
//         }
//     },[isLoggedIn,navigate])
//     return <>Hellow create</>
// }
