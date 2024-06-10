"use client"

import { ChangeEvent,FormEvent, useState } from "react";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth"
import {app, auth} from "@/app/firebase/config"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginComp(){
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    function onEmailChange(event: ChangeEvent<HTMLFormElement>){
        setEmail(event.target.value);
    }
    function onPassChange(event: ChangeEvent<HTMLFormElement>){
        setPass(event.target.value);
    }
    async function handleSubmit(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("form submitting");

        try{
            const res = await signInWithEmailAndPassword(email, pass);
            console.log(res);
            setEmail("");
            setPass("");
            router.push("/");
        }
        catch(err){
            console.log(err);
        }
        // now call api!
    }

    return (
        <>
        <div className="flex flex-col w-1/3 p-5 rounded-md items-center bg-gray-800 text-white">
            <div className="p-5 text-2xl">Login</div>
            <div className="p-5">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly gap-4">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" className="inp" value={email} onChange={onEmailChange} required></input>
                    <label htmlFor="password" className="flex mt-2">Password: </label>
                    <input type="password" id="password" name="password" className="inp" value={pass} onChange={onPassChange} required></input>

                    <button type="submit" className="sub-btn">Login</button>
                </form>
            </div>
            <div className="p-5 text-sm">Not a user? Click here to <Link href="/auth/signup"><b>Signup</b></Link></div>
        </div>
        </>
    )
}