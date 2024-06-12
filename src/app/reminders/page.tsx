import Link from "next/link"



export default function remind(){

    return (
        <>
        <div className="flex-col text-white w-4/5 p-10 mt-32 bg-gray-800">
        <div className="flex flex-row items-center justify-between">
            <div className="text-2xl font-bold">Your Reminders!</div>
            <Link href="/reminders/add"><div className="p-4 rounded-md bg-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-950">Add new</div></Link>
        </div>
        
        </div>
        </>

    )
}