'use client'

import { useEffect , useState } from "react"

export default function SideBarToggle ({children, prop }) {
    
    const [isSidebarVisible , setSidebarVisible] = useState(false)

    useEffect (() => {

        const sidebar = document.getElementById('sidebar')

        if (prop === 'Open') {
            sidebar.classList.add('show')
            setSidebarVisible(true)
        }
     
        if (prop === 'Close') {
            sidebar.classList.remove('show')
            setSidebarVisible(false)
        }

    },[isSidebarVisible])

    const toggleSideBar = () => {
        setSidebarVisible(!isSidebarVisible);
    }

    return(
        <button 
            onClick={toggleSideBar}
            style={{
                backgroundColor: '#0072ce',
                color: 'white',
                border: 'none',
                padding: '10px',
                cursor: 'pointer',
                textAlign: 'justify',
                fontSize: 'large',
                marginLeft: '55px'
            }} 
        >
            {children}
        </button>
    )
}