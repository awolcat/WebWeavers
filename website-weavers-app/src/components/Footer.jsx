import { MapPin, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const socials = [
                      {link: "https://www.facebook.com/profile.php?id=61574300822119 ", icon: faFacebook},
                      {link: "https://www.instagram.com/webweaversonline101/?hl=en", icon: faInstagram },
                      {link: "https://www.linkedin.com/company/web-weavers-online/?viewAsMember=true", icon: faLinkedin}
                    ];
    return (
        <footer className="bg-gray-900 text-white text-left px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 lg:justify-items-center	">
        <div className='flex flex-col'>
            <h3 className="font-bold mb-4 text-blue-600">WEBSITE WEAVERS</h3>
            <div className="flex items-start gap-2">
              <p>
                Elevate your digital presence with our expert website design and development. 
                We craft bespoke solutions based on client needs.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-blue-600">ADDRESS:</h3>
            <div className="flex items-start gap-2">
              <MapPin size={20} className='text-blue-600'/>
              <p><a href='https://maps.app.goo.gl/VUPW8VKJPm3ohHKNA' target='_blank' rel='origin'>
                  Nairobi, Kenya
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-blue-600">CONTACT</h3>
            <div className="space-y-2">
              <div className="flex flex-col items-start gap-4">
                <div className="flex gap-2 items-center">
                  <Mail size={20} className='text-blue-600'/>
                  <p><a href="mailto:websiteweavers@gmail.com">websiteweavers101@gmail.com</a></p>
                </div>
                <div className='flex flex-row gap-2 justify-start'>
                  {socials.map((social, index) => (
                    <div key={index} className='h-4 w-4'>
                      <a href={social.link} target="_blank">
                            <FontAwesomeIcon icon={social.icon} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 text-center text-gray-400 bg-gray-700 w-full text-sm">
          All Rights Reserved © 2024 WEBSITE WEAVERS
        </div>
      </footer>
    )
}
