'use client'

import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "@/app/firebase/config"
import { useRouter } from "next/navigation";
import Loader from "@/app/components/loader";


export default function Reminderlayout ({children} :  {children: React.ReactNode}){
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    
    if (loading) {
        return <Loader />;
      }
    if(!user){
        router.push("/auth/login");
    }

    return (
        <>
            <div className="flex flex-col w-full h-full items-center  bg-gray-900">
                {children}
            </div>
        </>
    )
}