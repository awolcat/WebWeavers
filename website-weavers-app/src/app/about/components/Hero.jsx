const Hero = () => {
    return (
        <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-8xl font-bold mb-8 tracking-tighter">ABOUT US</h1>
            <p className="text-lg mb-4">Web Design, Digital Development and Visibility Online</p>
            <p className="text-md text-gray-700 w-[90%] bg-gray-200 rounded-md p-4">
              Modern designs featuring clean lines, neutral palettes, and
              high-quality development standards.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/images/about.webp" 
              alt="WebWeaversOnline elegant web design" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    )
};
export default Hero;