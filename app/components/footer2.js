// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer style={{
//       padding: '2em',
//       backgroundColor: '#0072ce',
//       color: 'white',
//       textAlign: 'center',
//       position: 'sticky',
//       bottom: 0,
//       width: '100%',
//     }}>
//       <p style={{ margin: 0 }}>© {new Date().getFullYear()} Smart Buy. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        {/* About Us Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>About Us</h4>
          <p style={styles.text}>
            Smart Buy is your one-stop shop for the latest electronics, offering unbeatable prices and top-notch customer service.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <nav>
            <ul style={styles.list}>
              <li><a href="" style={styles.link}>About Us</a></li>
              <li><a href="../#shop-by-category" style={styles.link}>Shop by Category</a></li>
              <li><a href="/promos/sale" style={styles.link}>Deals</a></li>
              <li><a href="" style={styles.link}>FAQ</a></li>
            </ul>
          </nav>
        </div>

        {/* Support Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Support</h4>
          <ul style={styles.list}>
            <li><a href="" style={styles.link}>Contact Us</a></li>
            <li><a href="" style={styles.link}>Returns & Refunds</a></li>
            <li><a href="" style={styles.link}>Warranty</a></li>
            <li><a href="" style={styles.link}>Shipping Info</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon}><FiFacebook /></a>
            <a href="https://twitter.com" style={styles.icon}><FiTwitter /></a>
            <a href="https://instagram.com" style={styles.icon}><FiInstagram /></a>
            <a href="https://linkedin.com" style={styles.icon}><FiLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.text}>© {new Date().getFullYear()} Smart Buy. All rights reserved.</p>
        <a href="" style={styles.link}>Privacy Policy</a>
        <a href="" style={styles.link}>Terms & Conditions</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0072ce',
    color: '#fff',
    padding: '2em 1em',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2em',
    marginBottom: '2em',
  },
  column: {
    textAlign: 'left',
  },
  heading: {
    fontSize: '1.2em',
    marginBottom: '0.5em',
  },
  text: {
    fontSize: '0.9em',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9em',
    display: 'block',
    marginBottom: '0.5em',
    transition: 'color 0.2s',
  },
  linkHover: {
    color: '#ffd700', // Gold color on hover
  },
  socialIcons: {
    display: 'flex',
    gap: '1em',
    justifyContent: 'flex-start',
  },
  icon: {
    color: '#fff',
    fontSize: '1.5em',
    transition: 'color 0.2s, transform 0.2s',
  },
  iconHover: {
    color: '#ffd700', // Gold color on hover
    transform: 'scale(1.2)',
  },
  bottomBar: {
    borderTop: '1px solid #ddd',
    paddingTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5em',
  },
};

export default Footer;