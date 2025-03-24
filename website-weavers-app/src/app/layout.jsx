import '../index.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
    title: 'Website Weavers',
    description: 'Website services for small businesses and individuals.',
}

export default function RootLayout({ children }) {
    return (
            <html lang="en">
              
                <body className="dark:bg-gray-900 dark:text-white transition-color ease-in-ease-out duration-300">
                    <Navbar />
                    <div className='z-50 fixed right-4 bottom-4'>
                        <ThemeToggle />
                    </div>
                    
                    <div id="root" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                      {children}
                    </div>
                    <Footer />
                </body>
            </html>
    )
}