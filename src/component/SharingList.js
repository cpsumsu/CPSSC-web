import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

export default function SharingList() {
  const [sharings, setSharings] = useState([])

  useEffect(() => {
    axios.get("http://143.198.192.147:5000/sharing").then(
      res => {
        console.log(res.data)
        setSharings(res.data)
      }
    )
  }, [])

  return (
    <div className="max-w-2xl m-auto">
      <img src={logo} />
      <div className="mx-2">
        <div className='flex justify-center'>
          <div className='active'>Sharing List</div>
          <Link className='base' to={"/create"}>
            Create Sharing
          </Link>
        </div>
        <p className="font-bold mt-3 px-2">
          Sharing would be done on <a href="https://discord.gg/DnRsuvYqCf" style={{ color: "#005F95" }} target="_blank">Discord</a><br />
          Details:&nbsp;
          <a style={{ color: "#005F95" }} href="https://github.com/cpsumsu/CPS-Study-Club#readme" target="_blank">
            https://github.com/cpsumsu/CPS-Study-Club#readme
          </a>
        </p>
        <div class="flex relative">
          <table class="w-full text-sm text-left text-gray-500 mt-3">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Topic
                </th>
                <th scope="col" class="py-3 px-6">
                  Speaker
                </th>
                <th scope="col" class="py-3 px-6">
                  Date
                </th>
                <th scope="col" class="py-3 px-6">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {sharings.map(s => {
                return (
                  <tr class="bg-white border-b" key={s._id}>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900">
                      {s.title}
                    </th>
                    <td class="py-4 px-6">
                      {s.username}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                      {s.date.substring(5, 10).replace("-", "/")}
                    </td>
                    <td class="py-4 px-6">
                      {s.time}
                    </td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
