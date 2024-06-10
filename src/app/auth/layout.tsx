
export default function AuthLayout({children} : {children: React.ReactNode}){
    return (
        <>
            <div className="flex flex-col w-full h-full items-center justify-center bg-gray-900">
                {children}
            </div>
        </>
    )
}