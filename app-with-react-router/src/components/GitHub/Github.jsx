import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();

    // Firstway of using API

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/SaiBharadwaja570')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    //     .catch(e=>console.log(e))
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-4xl'>Github followers: {data.followers}
    <img  src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

// The second way of using API call by useLoaderData()
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/SaiBharadwaja570')
    return res.json()
  }