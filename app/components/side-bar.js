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
                
                <a className="button" href="">
                    <>Laptops & Computers</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>TVs & Projectors</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Video Games, VR & Collectibles</>
                </a>

                <br></br>

                <a className="button" href="">
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

                <a className="button" href="">
                    <>Headphones</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>PC Gaming</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Tablets & E-Readers</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Sound Bars, Bluetooth Speakers & Home Audio</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Cameras, Camcorders & Drones</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Wearable Technology</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Small Appliances, Floor Care & Home Air Quality</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Smart Home, Security & Wi-Fi</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Printers & Computer Accessories</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Electric Transportation</>
                </a>

                <br></br>

                <a className="button" href="">
                    <>Collectibles & Toys</>
                </a>
            </div>

            <SideBarToggle prop={"Close"} >Close</SideBarToggle>

        </aside>
    )
}