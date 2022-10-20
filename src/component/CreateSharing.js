import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

export default function CreateSharing() {
  const [user, setUser] = useState()
  const [title, setTitle] = useState()
  const [date, setDate] = useState(null)
  const [time, setTime] = useState()

  const submit = (e) => {
    const sharing = {
      "username": user,
      "title": title,
      "date": date,
      "time": time
    }
    console.log(sharing)
    axios.post('http://localhost:5000/sharing/add', sharing)
      .then(res => console.log(res.data))
  }

  const isWed = (date) => {
    const day = date.getDay();
    return day === 3;
  };

  return (
    <div>
      <div className="max-w-2xl m-auto">
        <img src={logo} />
        <div className='flex justify-center'>
          <Link className='base' to={"/"}>
            Sharing List
          </Link>
          <div className='active'>
            Create Sharing
          </div>
        </div>

        <div className='m-2'>
          <label className="block mb-2 text-md font-medium text-gray-900 mt-2">Name:</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Input your name that people can recognize"
            onChange={(e) => setUser(e.target.value)}></input>

          <label className="block mb-2 text-md font-medium text-gray-900 mt-2">Topic:</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="The topic you are going to share"
            onChange={(e) => setTitle(e.target.value)}></input>

          <label className="block mb-2 text-md font-medium text-gray-900 mt-2">Date:</label>
          <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            minDate={new Date()}
            selected={date}
            filterDate={isWed}
            onChange={(d) => { setDate(d) }}
            placeholderText="Please choose a Wednesday"
          />

          <label className="block mb-2 text-md font-medium text-gray-900 mt-2">Time:</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setTime(e.target.value)}>
            <option value="" disabled selected>Choose a time after 21:00</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
            <option value="22:30">22:30</option>
            <option value="23:00">23:00</option>
          </select>

          <div className='flex justify-center'>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center mt-6"
              onClick={submit}>Submit</button>
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center mt-6 ml-6"
              to={"/"}>Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
