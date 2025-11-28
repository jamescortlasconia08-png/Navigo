
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from '../components/login/UserLogin';
import UserRegister from '../components/login/UserRegister';
import BusinessLogin from '../components/login/BusinessLogin';
import BusinessRegister from '../components/login/BusinessRegister';

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login/user" element={<UserLogin />} />
                <Route path="/register/user" element={<UserRegister />} />
                <Route path="/login/business" element={<BusinessLogin />} />
                <Route path="/register/business" element={<BusinessRegister />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AuthRoutes;
