import SideBarToggle from '@/app/components/sidebar-toggle-button'


export default function Header () {

    return (
    
        <header>

            <a href='..'>
                <h1>SmartBuy</h1>
            </a>

            <SideBarToggle prop={"Open"} >Menu</SideBarToggle>
            
        </header>
    )
} 