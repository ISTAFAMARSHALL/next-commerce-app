export default function Footer () {

    return ( 
        <footer>

            <div
                style={{
                display: 'flex',
                justifyContent: 'space-around',
                }}
            >
                <div style={{ flex: 1 }}>
                <h3>Contact Us</h3>
                <p>Email: info@mycommerce.com</p>
                <p>Phone: (123) 456-7890</p>
                </div>

                <div style={{ flex: 1 }}>
                <h3>Follow Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                </div>

                <div style={{ flex: 1 }}>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Privacy Policy</p>
                </div>
            </div>

            <div>
                <p>&copy; 2023 MyCommerce. All rights reserved.</p>
            </div>
            
        </footer>
    )
}