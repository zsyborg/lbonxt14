import { useState } from 'react';
import {
  FaHome,
  FaChartLine,
  FaEnvelope,
  FaCog,
  FaUsers,
  FaCalendar,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { SlLogout, SlScreenDesktop } from "react-icons/sl";
import { FaBell, FaBurger, FaCreditCard, FaLink, FaNewspaper, FaTicket, FaUser, FaUserTie } from "react-icons/fa6";
import { LuMenu, LuNetwork, LuNewspaper, LuSpeech, LuWalletCards } from "react-icons/lu";
import { PiMoneyLight, PiNotification } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isTextvisible, setIsTextVisible] = useState(false);
  const [openSubMenus, setSubMenus] = useState<{[key: string]: boolean}>({})


  const handleToggle = (menuKey: string) => {
    setSubMenus((prevstate) => ({
      ...prevstate,
      [menuKey]: !prevstate[menuKey],
    }))
    // setIsContentVisible(!isContentVisible);
    console.log(menuKey + 'Opened')
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    setIsTextVisible(!isTextvisible);

  };


  const navText = () => {
    setIsTextVisible(!isTextvisible);
  }


  // const navItems = [
  //   { icon: <FaHome />, text: 'Home' },
  //   { icon: <FaChartLine />, text: 'Analytics' },
  //   { icon: <FaEnvelope />, text: 'Messages' },
  //   { icon: <FaCog />, text: 'Settings' },
  //   { icon: <FaUsers />, text: 'Team' },
  //   { icon: <FaCalendar />, text: 'Calendar' },
  //   { icon: <FaFileAlt />, text: 'Documents' },
  // ];

  return (
    <>
      <div className={collapsed ? 'collapsed': 'sidebar'}>
        <div className='sidebarHeader'>
          {!collapsed && <div><img src="/logo.png" className='w-15 h-15 rounded-full inline' alt='Lifeis Speed Logo'/>
                  <p className='text-white inline'>Lifeis Speed Pvt. Ltd.</p>
                  </div>
                //   <span className='logo'>Dashboard</span>
                  }
          <button className='toggleBtn' onClick={toggleSidebar}>
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>
          {/* 
        <div className='navLinks'>
          {navItems.map((item, index) => (
            <div key={index} className='navItem'>
              <span className='icon'>{item.icon}</span>
              {!collapsed && <span className='navText text'>{item.text}</span>}
              {collapsed && (
                <span className='tooltip'>{item.text}</span>
              )}
            </div>
          ))}
        </div>
           */}

         <ul className="">
              {/* <li className="p-2 absolute top-0 left-0 z-50">
                <LuMenu onClick={navText} className='text-white text-3xl text-center pl-2 pb-2'/>
              </li> */}
        
                
                <li>
                  <a href="/lbo/dashboard" className="flex items-center p-2 text-base font-normal text-white hover:bg-gray-300 hover:text-gray-900 group">
                    <SlScreenDesktop />
                    <span className={isTextvisible ? 'hidden' : 'ml-3 navtext'}>Dashboard</span>
                  </a>
                </li>
                <li>
                  <button onClick={() => handleToggle('myaccount')} type="button" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                    <FaUserTie/>
                    <span className={isTextvisible ? 'hidden': 'flex-1 ml-3 text-left whitespace-nowrap'} >My Account</span>
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
        
                  <ul id="myaccount" className={openSubMenus['myaccount'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="/lbo/myaccount/info" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">LBO Info</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Upload KYC Document</a>
                    </li>
                    <li>
                      <a href="/lbo/myaccount/orders" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Orders</a>
                    </li>
                    <li>
                      <a href="/lbo/myaccount/invoices" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Invoices</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Address</a>
                    </li>
                    <li>
                      <a href="/lbo/myaccount/welcomekit" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Welcome Kit</a>
                    </li>
                   
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Download Documents</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button type="button" onClick={() => handleToggle('mynetwork')} className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                    <LuNetwork/>
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>My Network</span>
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <ul id="mynetwork" className={openSubMenus['mynetwork'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="/lbo/mynetwork/binary" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Binary Tree</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/idwise" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">ID-Wise Downline</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/generationtree" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Generation Tree</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/mydirect" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">My Direct</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">My Downline</a>
                    </li>
                    <li>
                      <a href="" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Generation Downline</a>
                    </li>
                    <li>
                      <a href="lbo/mynetwork/gentreeadjustment" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Generation Tree Adjustment</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={() => handleToggle('mycommission')} className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-300 hover:text-gray-900 group">
                    <PiMoneyLight/>
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 whitespace-nowrap'}>My Commision</span>
                    
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  <ul id="mycommission" className={openSubMenus['mycommission'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="/lbo/mycommission/ledger" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Commission Ledger</a>
                    </li>
                    <li>
                      <a href="/lbo/mycommission/tds" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">TDS Details</a>
                    </li>
                    <li>
                      <a href="/lbo/mycommission/bigboss" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Bigboss Rewards</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/schemes" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Schemes & Offers</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/bonus" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Matching Bonus Rewards</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/lapsereport" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Lapse Pair Report</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Profit Team Carry Forward</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Spot Sales Incentive Income</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Universal Rank Qualification</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Unilevel Rank Qualification</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Unilevel Career Income</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Leadership Incentive Income</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Leadership Incentive Rank Qualification</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Same Level Income Report</a>
                    </li>
                    <li>
                      <a href="/lbo/mynetwork/speedsales" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Crorepati Rewards Qualification</a>
                    </li>
                  </ul>
                </li>
        
        
        
                <li>
                  <button type="button" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <FaNewspaper/>
        
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Testimonial Transaction</span>
                    
                  
                  </button>
                  
                </li>
        
        
        
        
        
                <li>
                  <button type="button" onClick={() => handleToggle('ewallet')} className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <FaCreditCard/>
        
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>E-Wallet</span>
                    
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <ul id="ewallet" className={openSubMenus['ewallet'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Add Money Request</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Add Money Request Report</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Fund Transfer</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Withdraw Amount</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Account Statement</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Change Password</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Account Statement (Credit Note)</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Self Fund Transfer</a>
                    </li>
                  </ul>
                </li>
        
        
        
        
        
                <li>
                  <button type="button" onClick={() => handleToggle('epin')} className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <FaCreditCard/>
        
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>E-Pin</span>
                    
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <ul id="epin" className={openSubMenus['epin'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Check E-Pin</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">E-Pin Place Order</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">E-Pin Order Details</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">E-Pin Transfer</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">E-Pin Report</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Change Password</a>
                    </li>
                  </ul>
                </li>
        
        
        
        
                <li>
                  <button type="button" onClick={() => handleToggle('communication')} className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <LuSpeech/>
        
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Communication Centre</span>
                    
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <ul id="communication" className={openSubMenus['communication'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Compose</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Inbox</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Sent</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Folders</a>
                    </li>
                  </ul>
                </li>
        
        
        
        
                <li>
                  <button type="button" onClick={() => handleToggle('tickets')} className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <FaTicket/>
        
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Tickets</span>
                    
                    <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <ul id="tickets" className={openSubMenus['tickets'] ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">Add New Ticket</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900">My Tickets</a>
                    </li>
                  </ul>
                </li>
        
        
                <li>
                  <button type="button" className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <LuNewspaper/>
        
                    
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>News</span>
        
                    </button>
                    </li>
        
                <li>
                  <button type="button" className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group text-white hover:bg-gray-300 hover:text-gray-900" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
        
                    <AiFillHome/>
        
                    <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Go to Website</span>
        
                    </button>
                    </li>
        
                    <li>
                      <ul className='extranavs mt-4 content-evenly place-content-evenly'>
                        <li>
                        <a href="#" className="inline-flex justify-center p-2 text-white rounded cursor-pointer hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                          <FaUser/>
                        </a>
                        </li>
                        <li>
                        <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-white rounded cursor-pointer  dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <FaBell/>
                        </a>
                        </li>
                        <li>
                        <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-white rounded cursor-pointer  dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <SlLogout/>
                        </a>
                        </li>
                        <li>
                        <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-white rounded cursor-pointer  dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <FaLink/>
                        </a>
                        </li>
                      </ul>
                    </li>
        
        
              </ul>
      </div>
      <style jsx global>{`
        body {
          margin-left: ${collapsed ? '80px' : '250px'};
          transition: margin-left 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
