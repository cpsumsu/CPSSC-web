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

  const [success, setSuccess] = useState(false)

  const submit = (e) => {
    const sharing = {
      "username": user,
      "title": title,
      "date": date,
      "time": time
    }
    console.log(sharing)
    axios.post('http://143.198.192.147:5000/sharing/add', sharing)
      .then(
        res => {
          console.log(res.data);
          setSuccess(true);
        }
      )
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
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center mt-3"
              onClick={submit}>Submit</button>
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center mt-3 ml-6"
              to={"/"}>Cancel</Link>
          </div>

          {success &&
            <div className="mt-3 flex p-4 mb-4 bg-green-100 rounded-lg" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div className="ml-3 text-sm font-medium text-green-700">
                Create successfully!
              </div>
              <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8" data-dismiss-target="#alert-3" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
