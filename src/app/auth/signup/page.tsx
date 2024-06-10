"use client"
import { ChangeEvent, useState } from "react"
import { FormEvent } from "react"
import {EmailAndPasswordActionHook, useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import {app, auth} from "@/app/firebase/config"
import Link from "next/link"

export default function signUp(){
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [cpass, setCpass] = useState("");

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    function onEmailChange(event: ChangeEvent<HTMLFormElement>){
        setEmail(event.target.value);
    }
    function onPassChange(event: ChangeEvent<HTMLFormElement>){
        setPass(event.target.value);
    }
    function onCpassChange(event: ChangeEvent<HTMLInputElement>){
        setCpass(event.target.value);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("form submitting");
        try{
            const res = await createUserWithEmailAndPassword(email, pass);
            console.log(res);
            setEmail("");
            setPass("");
            setCpass("");
        }
        catch(err){
            console.log(err)
        }
        // now call api!
    }

    // dummy user: Email: test@remindmeio.com     Password:test.123123
    return (
        <>
        <div className="container flex flex-col w-1/3 p-5 rounded-md items-center bg-gray-800 text-white">
            <div className="p-5 text-2xl">Sign Up</div>
            <div className="p-5">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly gap-4">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" className="inp" value={email} onChange={onEmailChange} required></input>
                    <label htmlFor="password" className="flex mt-2">Password: </label>
                    <input type="password" id="password" name="password" value={pass} onChange={onPassChange} className="inp" required></input>
                    <label htmlFor="cpassword" className="flex mt-2">Confirm Password: </label>
                    <input type="password" id="cpassword" name="cpassword" value={cpass} onChange={onCpassChange} className="inp" required></input>
                    <button type="submit" className="sub-btn">Sign Up</button>
                </form>
            </div>
            <div className="p-5 text-sm">Already a user? Click here to <Link href="/auth/login"><b>Login</b></Link></div>
        </div>
        </>
    )
}