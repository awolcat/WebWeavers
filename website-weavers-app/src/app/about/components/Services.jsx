const Services = () => {
    const services = [
        {
            name: 'ui/ux design',
            description: `We create efficient layouts to maximize the use of space. 
                            Every design is crafted with attention to detail to ensure comfort and ease of use.`
        }, 
        {
            name: 'web development',
            description: `From concept development to final installation, 
                            we handle all aspects of website development, 
                            ensuring every detail aligns with the client's vision.`
        },
        {
            name: 'digital presence',
            description: `We design and craft unique digital solutions tailored to specific client needs, 
                            creating websites that are not only beautiful but also functional.`
        },
        {
            name: 'software development',
            description: 'Revolutionize your business with our cutting-edge software development solutions.'
        }

    ];
    return (
        <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8">Our Services</h2>
            <p className="text-gray-700 mb-8">
              At WebWeaversOnline, we offer a comprehensive range of services to bring your digital vision to life. 
              Each service is tailored to meet the unique needs of our clients, ensuring a seamless and satisfying experience.
            </p>
            <div className="bg-white p-4 rounded-lg overflow-hidden">
              <img 
                src="/images/aboutusservices.webp" 
                alt="Our work example" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-12 flex flex-col items-center justify-center">
            {services.map((service, index) => (
                <div className='border-black' key={index}>
                    <h3 className="text-2xl font-bold mb-4 uppercase">{service.name.toUpperCase()}</h3>
                    <p className="text-gray-700">{service.description}</p>
                </div>
            ))}
            
          </div>
        </div>
      </section>
    );
};

export default Services;