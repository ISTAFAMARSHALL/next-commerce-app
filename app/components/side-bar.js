'use client'

import SideBarToggle from '@/app/components/sidebar-toggle-button'

export default function SideBar () {
    return (
        <aside id="sidebar"
        
        >
            
            <div 
                id='category-links'
                style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    justifyContent: 'space-around',
                }}
            >
                {/* Link elements for Best Buy categories */}
                
                <a className="button" href="/products/laptop-computers">
                    <>Laptops & Computers</>
                </a>

                <br></br>

                <a className="button" href="/products/televisions">
                    <>TeleVisions</>
                </a>

                <br></br>

                <a className="button" href="/products/projectors">
                    <>Projectors</>
                </a>

                <br></br>

                <a className="button" href="/products/gaming-consoles">
                    <>Video Game Consoles</>
                </a>

                <br></br>

                <a className="button" href="/products/vr-headsets">
                    <>Virtual Reality</>
                </a>

                <br></br>

                <a className="button" href="/products/appliances">
                    <>Major Appliances</>
                </a>

                <br></br>

                {/* Add more Link elements for other categories */}
                <a className="button" href="">
                    <>Apple</>
                </a>

                <br></br>

                <a className="button" href="/products/cell-phones">
                    <>Cell Phones</>
                </a>

                <br></br>

                <a className="button" href="/products/headphones">
                    <>Headphones</>
                </a>

                <br></br>

                <a className="button" href="/products/pc-gaming">
                    <>PC Gaming</>
                </a>

                <br></br>

                <a className="button" href="/products/tablets-e-readers">
                    <>Tablets & E-Readers</>
                </a>

                <br></br>

                <a className="button" href="/products/home-audio">
                    <>Home Audio</>
                </a>

                <br></br>

                <a className="button" href="/products/cameras-camcorders">
                    <>Cameras, Camcorders</>
                </a>

                <br></br>

                <a className="button" href="/products/drones">
                    <>Drones</>
                </a>

                <br></br>

                <a className="button" href="/products/wearable-tech">
                    <>Wearable Technology</>
                </a>

                {/* <br></br>

                <a className="button" href="">
                    <>Small Appliances, Floor Care & Home Air Quality</>
                </a> */}

                <br></br>

                <a className="button" href="/products/smarthome-security-wifi">
                    <>Smart Home, Security & Wi-Fi</>
                </a>

                <br></br>

                <a className="button" href="/products/printers-computeraccessories">
                    <>Printers & Computer Accessories</>
                </a>

                {/* <br></br>

                <a className="button" href="">
                    <>Electric Transportation</>
                </a> */}

                {/* <br></br>

                <a className="button" href="">
                    <>Collectibles & Toys</>
                </a> */}
            </div>

            <SideBarToggle prop={"Close"} >Close</SideBarToggle>

        </aside>
    )
}