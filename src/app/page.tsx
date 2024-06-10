'use client'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col text-white w-2/3 h-1/2 rounded-md bg-gray-800">
        <div className="m-10 text-4xl">
          Who are we?
        </div>
        <div className="flex flex-row w-full justify-evenly">
          <Image src="/icons/schedule.png" width={200} height={200} priority={true} className="img px-5 py-5" alt="calendar logo"></Image>
          <div className="px-10 py-10 w-3/4 ">
          Never miss a moment! RemindMeIO: Your ultimate wingman for birthdays, anniversaries, and every celebration in between. Sign up now and turn dates into unforgettable memories!
          </div>
        </div>
      </div>
    </>
  );
}
