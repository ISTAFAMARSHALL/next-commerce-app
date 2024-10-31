import SideBarToggle from '@/app/components/sidebar-toggle-button'


export default function Header () {
    return (
        <header>
            <h1>SmartBuy</h1>
            <SideBarToggle prop={"Open"} >Menu</SideBarToggle>
        </header>
    )
} 