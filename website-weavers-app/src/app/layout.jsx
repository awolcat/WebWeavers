import '../index.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navigation';

export const metadata = {
    title: 'Website Weavers',
    description: 'Website services for small businesses and individuals.',
  }
/* eslint-disable-next-line react/prop-types */
export default function RootLayout({ children }) {
    return (
            <html lang="en">
              
                <body>
                    <Navbar />
                    <div id="root" className="dark">{children}</div>
                    <Footer />
                </body>
            </html>
    )
  }