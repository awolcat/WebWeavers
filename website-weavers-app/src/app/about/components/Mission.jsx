const Mission = () => {
    return (
        <section className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden justify-self-center self-center dark:bg-white">
            <img 
              src="/images/mission.webp"
              alt="Modern digital designs" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-self-center self-center md:w-3/5">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 dark:text-slate-400">
              At WebWeaversOnline, our mission is to transform your vision into reality by creating visually captivating and user-friendly websites that resonate with your audience. We believe in the power of design to tell your brand story and reflect your identity and values.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Mission;