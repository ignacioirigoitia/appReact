// Lo que va a hacer el Auth Provider es un middleware que nos va a indicar las rutas privadas y publicas. Y va a estar atado al Token que le llegue. Desde el back se envia un token cuando iniciamos sesion y eso nos va a determinar que rutas vamos a poder ver y cuales no

import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ token, setToken, children }) => {

    useEffect(() => {
        const storageToken = window.localStorage.getItem("_Token");
        setToken(storageToken)
    }, [setToken]);

    return <>{token ? children : <Redirect to="/" />}</>

};

const PublicRoute = ({ token, setToken, children }) => {

    useEffect(() => {
        const storageToken = window.localStorage.getItem("_Token");
        setToken(storageToken)
    }, [setToken]);

    return <>{token ? <Redirect to="/signin"/> : children}</>
};

const AuthProvider = { PrivateRoute, PublicRoute };

export default AuthProvider;
