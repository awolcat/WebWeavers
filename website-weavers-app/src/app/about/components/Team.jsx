const Team = () => {
    const members = [
        {
            name: 'Frankie',
            role: 'SEO Marketing',
            bio: 'Does SEO',
            image: '/images/team/frankie.jpeg'
        },
        {
            name: 'George',
            role: 'Team Lead',
            bio: 'Does SEO',
            image: '/images/team/george.jpeg'
        },
        {
            name: 'Myra',
            role: 'Social Media, Branding',
            bio: 'Does SEO',
            image: '/images/team/myra.jpeg'
        },
        {
            name: 'Albert',
            role: 'Developer',
            bio: 'Does SEO',
            image: '/images/team/albert.jpeg'
        }
    ];
    return (
        <section className="bg-gray-100 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">MEET THE TEAM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {members.map((member, index) => (
                <div className="col-span-1 flex flex-col justify-center items-center" key={index}>
                    <div className="bg-white rounded-full overflow-hidden w-[150px] h-[150px]">
                        <img 
                            src={member.image} 
                            alt="Team member" 
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mt-4 text-center">{member.name}</h3>
                    <p className="uppercase text-gray-600 text-center">{member.role.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

export default Team;

