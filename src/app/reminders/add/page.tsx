'use client'

import React, { useState } from 'react';

type ReminderType = 'Birthday' | 'Anniversary' | 'Meeting' | 'Other';

interface Reminder {
  date: string;
  message: string;
  type: ReminderType;
  title: string;
}

const ReminderForm: React.FC = () => {
  const [form, setForm] = useState<Reminder>({
    date: '',
    message: '',
    type: 'Birthday',
    title: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the form to your backend or handle it as required
    console.log(form);

    // to be done after a successfull submition!
    setForm({
    date: '',
    message: '',
    type: 'Birthday',
    title: '',
  });
  };

  return (
    <div className='flex items-center justify-center w-full h-full'>
    <form onSubmit={handleSubmit} className=" w-2/5 mx-auto text-white bg-gray-800 p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">Add a New Reminder</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={handleChange}
          className="inp"
          placeholder="Enter reminder title"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={form.date}
          onChange={handleChange}
          className="inp"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block   text-sm font-bold mb-2" htmlFor="type">
          Type of Reminder
        </label>
        <select
          name="type"
          id="type"
          value={form.type}
          onChange={handleChange}
          className="inp"
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Meeting">Meeting</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block   text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          className="inp"
          placeholder="Enter a message for the reminder"
          required
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <button
          type="submit"
          className="p-4 rounded-md bg-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-950"
        >
          Add Reminder
        </button>
      </div>
    </form>
    </div>
  );
};

export default ReminderForm;
