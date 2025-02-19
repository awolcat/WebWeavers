import '../index.css';

export const metadata = {
    title: 'Website Weavers',
    description: 'Website services for small businesses and individuals.',
  }
/* eslint-disable-next-line react/prop-types */
export default function RootLayout({ children }) {
    return (
            <html lang="en">
              
                <body>
                    <div id="root" className="dark">{children}</div>
                </body>
            </html>
    )
  }