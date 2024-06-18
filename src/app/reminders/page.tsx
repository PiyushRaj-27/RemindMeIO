'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/app/firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface Reminder {
    id: string;
    date: string;
    message: string;
    type: string;
    title: string;
    recipientEmail: string;
}

const Remind: React.FC = () => {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchReminders = async () => {
            if (user) {
                const remindersCollection = collection(db, 'reminders');
                const q = query(remindersCollection, where('recipientEmail', '==', user.email));
                const querySnapshot = await getDocs(q);
                const remindersList: Reminder[] = [];
                querySnapshot.forEach((doc) => {
                    remindersList.push({ id: doc.id, ...doc.data() } as Reminder);
                });
                setReminders(remindersList);
                setLoading(false);
            }
        };

        fetchReminders();
    }, [user]);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <>
            <div className='p-5 w-full flex flex-col items-center justify-center mb-5'>
            <div className="flex-col text-white w-4/5 p-10 mt-32 bg-gray-800 mb-5">
                <div className="flex flex-row items-center justify-between mb-6">
                    <div className="text-2xl font-bold">Your Reminders!</div>
                    <Link href="/reminders/add">
                        <div className="p-4 rounded-md bg-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-950">
                            Add new
                        </div>
                    </Link>
                </div>
                {reminders.length === 0 ? (
                    <div className="text-white">No reminders found.</div>
                ) : (
                    <div className="space-y-4">
                        {reminders.map((reminder) => (
                            <div key={reminder.id} className="p-4 bg-gray-700 rounded-md mb-4">
                                <h3 className="text-xl font-bold mb-4">{reminder.title}</h3>
                                <p className='mb-2'><strong>Date:</strong> {reminder.date}</p>
                                <p className='mb-2'><strong>Type:</strong> {reminder.type}</p>
                                <p className='mb-2'><strong>Message:</strong> {reminder.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

export default Remind;
