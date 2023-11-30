import UserProfileCard from "@/app/components/UserProfileCard";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UserProfile( {isLoggedIn, user} ) {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    return (
        <main> 
            <h1> Users Profile </h1>
            <UserProfileCard user={user}/>
        </main>
    );
};

