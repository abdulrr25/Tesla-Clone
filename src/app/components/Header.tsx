  import { BsQuestionCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import "./Header.scss";

  const Header = () => {
    return (
      <div className="absolute w-full h-screen flex flex-row justify-between " >
        <div className=' pt-5 px-5 w-[150px] h-[35px] '>
          <img className=" relative z-10 hover cursor-pointer " src='./tesla.svg' alt='tesla'/>
        </div>
        <div className="">
          <ul className='flex flex-row w-[40rem] justify-center gap-5  pt-5 '>
            <li className="mainmenu hover:cursor-pointer hover:bg-slate-225 "><p className="relative z-10">Vehicles</p>

              <div className="submenu absolute  top-0 left-0 right-0 w-full bg-white ">
                  
                  <div className="flex flex-col items-center text-center -left-px">
                    <img src="/Model-Sbg.jpg" alt="" width={225} height={225} className="mb-2" />
                    <div >
                      <h1>Model-S</h1>
                      <button className=" mr-2 hover:cursor-pointer underline text-[#85878A]">Learn</button> 
                      <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/Model-3bg.jpg" alt="" width={225} height={225} className="mb-2" /> 
                    <div >
                      <p>Model-3</p>
                      <button className="hover:cursor-pointer mr-2 underline text-[#85878A]">Learn</button> 
                      <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/model-4bg.jpg" alt="" width={225} height={225} className="mb-2" />
                    <div>
                      <p>Model-4</p>
                      <button className="hover:cursor-pointer underline mr-2 text-[#85878A]">Learn</button>
                      <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center -pl-15">
                    <img src="/model-ybg.jpg" alt="" width={225} height={225} className="mb-2" />
                    <div >
                    <p >Model-Y</p>
                    <button className="hover:cursor-pointer underline mr-3 text-[#85878A]">Learn</button>
                    <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>
                  
                <div className="flex flex-col w-0.5 h-37 bg-[#E2E3E3] rounded-full"></div>
                
                <div className="flex flex-column pl-7">
                  <ul>
                    <li className="hover:cursor-pointer hover:underline ">Inventory</li>
                    <li className="hover:cursor-pointer hover:underline ">Demo Drive</li>
                    <li className="hover:cursor-pointer hover:underline ">Trade-in</li>
                    <li className="hover:cursor-pointer hover:underline ">Compare</li>
                    <li className="hover:cursor-pointer hover:underline ">Fleet</li>
                    <li className="hover:cursor-pointer hover:underline ">Semi</li>
                    <li className="hover:cursor-pointer hover:underline ">Roadster</li>
                  </ul>
                </div>
                </div>
            </li>
            <li className="mainmenu hover:cursor-pointer ">
              <p className="relative z-10">Energy</p>
              <div className="submenu absolute  top-0 left-0 right-0 w-full bg-white ">
                  
                  <div className="flex flex-col items-center text-center -left-px">
                    <img src="/SolarnPanels.png" alt="" width={225} height={225} className="mb-2" />
                    <div >
                      <h1>Solar Panel</h1>
                      <button className=" mr-2 hover:cursor-pointer underline text-[#85878A]">Learn</button> 
                      <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/SolarnRoof.png" alt="" width={225} height={225} className="mb-2" /> 
                    <div >
                      <p>Solar Roof</p>
                      <button className="hover:cursor-pointer mr-2 underline text-[#85878A]">Learn</button> 
                      <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/powernwalll.png" alt="" width={225} height={225} className="mb-2" />
                    <div>
                      <p>PowerWall</p>
                      <button className="hover:cursor-pointer underline mr-2 text-[#85878A]">Learn</button>
                      <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center -pl-15">
                    <img src="/MeganMenunEnergy.png" alt="" width={225} height={225} className="mb-2" />
                    <div >
                    <p >Megapack</p>
                    <button className="hover:cursor-pointer underline mr-3 text-[#85878A]">Learn</button>
                    <button className="hover:cursor-pointer underline text-[#85878A]">Order</button>
                    </div>
                  </div>
                  
                <div className="flex flex-col w-0.5 h-37 bg-[#E2E3E3] rounded-full"></div>
                
                <div className="flex flex-column pl-7">
                  <ul>
                    <li className="hover:cursor-pointer hover:underline ">Schedule a Consultation</li>
                    <li className="hover:cursor-pointer hover:underline ">Why Solar</li>
                    <li className="hover:cursor-pointer hover:underline ">Incentives</li>
                    <li className="hover:cursor-pointer hover:underline ">Support</li>
                    <li className="hover:cursor-pointer hover:underline ">Partner with Tesla</li>
                    <li className="hover:cursor-pointer hover:underline ">Commercial</li>
                    <li className="hover:cursor-pointer hover:underline ">Utilities</li>
                  </ul>
                </div>
                </div>

            </li>
            <li className="mainmenu  hover:cursor-pointer ">
              <p className="relative z-10">Charging</p>
              <div className="submenu absolute  top-0 left-0 right-0 w-full bg-white ">
                  
                  <div className="flex flex-col items-center text-center -left-px">
                    <img src="/Chargingn.png" alt="" width={300} height={300} className="mb-2" />
                    <div >
                      <h1>Charging</h1>
                      <button className=" mr-2 hover:cursor-pointer underline text-[#85878A]">Learn</button> 
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/ChargingnHome.png" alt="" width={300} height={300} className="mb-2" /> 
                    <div >
                      <p>Home Charging</p>
                      <button className="hover:cursor-pointer mr-2 underline text-[#85878A]">Learn</button> 
                      <button className="hover:cursor-pointer underline text-[#85878A]">Shop</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/Superchargingn.png" alt="" width={300} height={300} className="mb-2" />
                    <div>
                      <p>Supercharging</p>
                      <button className="hover:cursor-pointer underline mr-2 text-[#85878A]">Learn</button>
                      <button className="hover:cursor-pointer underline text-[#85878A]">Find</button>
                    </div>
                  </div>
                  
                <div className="flex flex-col w-0.5 h-37 bg-[#E2E3E3] rounded-full"></div>
                
                <div className="flex flex-column pl-7">
                  <ul>
                    <li className="hover:cursor-pointer hover:underline ">Help Me Charge</li>
                    <li className="hover:cursor-pointer hover:underline ">Charging Calculator</li>
                    <li className="hover:cursor-pointer hover:underline ">Charging With NACS</li>
                    <li className="hover:cursor-pointer hover:underline ">Supercharger Voting</li>
                    <li className="hover:cursor-pointer hover:underline ">Host a Supercharger</li>
                    <li className="hover:cursor-pointer hover:underline ">Commercial Charging</li>
                    <li className="hover:cursor-pointer hover:underline ">Host Wall Connectors</li>
                  </ul>
                </div>
                </div>

            </li>

            <li className="mainmenu hover:cursor-pointer ">
              <p className="relative z-10">Discover</p>
              <div className="submenu absolute top-0 left-0 right-0 w-full bg-white flex flex-row justify-evenly">
                <div className="flex flex-col items-center  mt-5">
                  <ul >
                    <h1 className="text-light text-[#66686C] text-bold  mb-5">Resources</h1>
                    <li>Demo Drive</li>
                    <li>Insurance</li>
                    <li>Video Guides</li>
                    <li>Customer Stories</li>
                    <li>Events</li>
                  </ul>

                </div>
                <div className="flex flex-col items-center  mt-5">
                  <ul>
                    <h1 className="text-light text-[#66686C] text-bold mb-5">Location Services</h1>
                    <li>Find Us</li>
                    <li>Find a Collision Center</li>
                    <li>Find a Certifief Installer</li>

                  </ul>

                </div>
                <div className="flex flex-col items-center mt-5">
                  <ul>
                    <h1 className="text-light text-[#66686C] text-bold mb-5">Company</h1>
                    <li>About</li>
                    <li>Carrers</li>
                    <li>Investors Relations</li>
                  </ul>

                </div>
              </div>

            </li>

            <li className="mainmenu hover:cursor-pointer ">
              <p className="relative z-10">Shop</p>
              <div className="submenu absolute  top-0 left-0 right-0 w-full bg-white flex flex-row justify-between">
                  
                  <div className="flex flex-col items-center text-center ">
                    <img src="/Chargingn.png" alt="" width={225} height={225} className="mb-2" />
                    <div >
                      <h1>Charging</h1>
                      
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/VehiclenAccessories.png" alt="" width={225} height={225} className="mb-2" /> 
                    <div >
                      <p>Vehicle Accessories</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img src="/Appareln.png" alt="" width={225} height={225} className="mb-2" />
                    <div>
                      <p>Apparel</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center -pl-15">
                    <img src="/Lifestylen.png" alt="" width={225} height={225} className="mb-2" />
                    <div >
                      <p>Lifestyle</p>
                    </div>
                  </div>
                </div>

            </li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-row hover:cursor-pointer pt-6 px-6 gap-3'>
            <button><TfiWorld className="w-5 h-5 relative z-10"/></button>
            <button><BsQuestionCircle className="w-5 h-5 relative z-10"/></button>
            <button><FaRegUserCircle className="w-5 h-5 relative z-10"/></button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header