"use client"

import React from 'react'

const Footer = () => {
  return (
    <div>
            <div className='bg-black text-white flex flex-col align-center text-center pt-[100px] space-y-5'>
        <div>
            <h3><sup>1</sup> Price Before incentives is $44,990, excluding texes and fees. Subject to change.</h3>
            <p className='underline hover:cursor-pointer' >Learn aboout est. gas savings</p>
        </div>
        <div>
            <h3><sup>2</sup> Excludes taxes and fees with price subject to change. Available in select states.</h3>
            <p className='underline hover:cursor-pointer' >See Details</p>
        </div>
        <div>
            <h3><sup>3</sup> Price before incentives and savings is $77,990, excluding taxes and fees. Subject to change.</h3>
            <p className='underline hover:cursor-pointer' >Learn aboout est. gas savings</p>
        </div>
        <div>
            <h3><sup>4</sup> Price before savings is $72,990, excluding taxes and fees. Subject to change.</h3>
            <p className='underline hover:cursor-pointer ' >Learn aboout est. gas savings</p>
        </div>
        <div>
            <ul className="flex flex-row justify-center space-x-6 mt-10 mb-5">
                <li>Tesla © 2024</li>
                <li>Privacy & Legal</li>
                <li>Vehicle Recalls</li>
                <li>Contact</li>
                <li>News</li>
                <li>Get Updates</li>
                <li>Locations</li>
            </ul>
        </div>
        

    </div>
    </div>
  )
}

export default Footer