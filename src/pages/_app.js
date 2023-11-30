import {createRef, useEffect, useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig"

export default function MyApp({ Component, pageProps}){
    const [appInitialized, setAppIsInitialized] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);

    const createUser = useCallback((e) => {
        
    }, []);

    const loginUser = useCallback((e) => {

    }, []);

    const logoutUser = useCallback((e) => {

    }, []);

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        setAppIsInitialized(true);
    }, [])

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUserInformation(user);
                    setIsLoggedIn(true);
                } else{
                        setUserInformation(null);
                        setIsLoggedIn(false);
                    }
                    setIsLoading(false);
                });
            }
    }, [appInitialized]);

    if (isLoading) return null;

    return (
        <>
        <Header />
        <Component
        {...pageProps}
        createUser = {createUser}
        loginUser = {loginUser}
        logoutUser = {logoutUser}
        isLoggedIn = {isLoggedIn}
        userInformation = {userInformation}
        />
    </>
    )
}
