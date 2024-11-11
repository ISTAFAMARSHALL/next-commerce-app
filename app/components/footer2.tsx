// export default function Footer () {

//     return ( 
//         <footer>

//             <div
//                 style={{
//                 display: 'flex',
//                 justifyContent: 'space-around',
//                 }}
//             >
//                 <div style={{ flex: 1 }}>
//                 <h3>Contact Us</h3>
//                 <p>Email: info@mycommerce.com</p>
//                 <p>Phone: (123) 456-7890</p>
//                 </div>

//                 <div style={{ flex: 1 }}>
//                 <h3>Follow Us</h3>
//                 <p>Facebook</p>
//                 <p>Twitter</p>
//                 <p>Instagram</p>
//                 </div>

//                 <div style={{ flex: 1 }}>
//                 <h3>Company</h3>
//                 <p>About Us</p>
//                 <p>Careers</p>
//                 <p>Privacy Policy</p>
//                 </div>
//             </div>

//             <div>
//                 <p>&copy; 2023 MyCommerce. All rights reserved.</p>
//             </div>
            
//         </footer>
//     )
// }

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '2em',
      backgroundColor: '#0072ce',
      color: 'white',
      textAlign: 'center',
      position: 'sticky',
      bottom: 0,
      width: '100%',
    }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Smart Buy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
