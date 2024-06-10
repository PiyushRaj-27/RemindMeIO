'use client'
import Link from "next/link"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "@/app/firebase/config"
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function Navbar(){
    const [user] = useAuthState(auth);
    const router = useRouter();

    function logout(){
        signOut(auth);
        router.push("/");
    }

    if(user){
        return(
            <>
            <div className="bg-gray-900 flex flex-row items-center justify-between absolute w-screen">
                <div className="flex flex-row items-center">
                <div className="text-white font-bold px-4 py-4 text-4xl">
                    RemindMeIO
                </div>
    
                <div className="text-white font-normal px-2 py-2 ml-6">
                    <Link href="/">
                    Home
                    </Link>
                </div>
    
                <div className="text-white font-normal px-2 py-2 ml-6">
                    <Link href="/reminders">
                    Reminders
                    </Link>
                </div>
                </div>
               
                <div className="flex flex-row">
    
                    <div className="bg-gray-900 border-2 border-white px-2 py-2 mr-6 rounded-md text-white duration-500 hover:bg-gray-950 " onClick={logout}>
                        Logout
                    </div>
                    
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <div className="bg-gray-900 flex flex-row items-center justify-between absolute w-screen">
            <div className="flex flex-row items-center">
            <div className="text-white font-bold px-4 py-4 text-4xl">
                RemindMeIO
            </div>

            <div className="text-white font-normal px-2 py-2 ml-6">
                <Link href="/">
                Home
                </Link>
            </div>

            <div className="text-white font-normal px-2 py-2 ml-6">
                    <Link href="/reminders">
                    Reminders
                    </Link>
            </div>
            </div>
           
            <div className="flex flex-row">

                <Link href="/auth/signup">
                <div className="bg-gray-900 border-2 border-white px-2 py-2 mr-6 rounded-md text-white duration-500 hover:bg-gray-950 ">
                    Signup
                </div>
                </Link>
                <Link href="/auth/login">
                <div className="bg-gray-900 border-2 border-white px-2 py-2 mr-6 rounded-md text-white duration-500 hover:bg-gray-950 ">
                    Login
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}