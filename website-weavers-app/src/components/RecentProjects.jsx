import LawrenClean from '../assets/images/Lawrenclean2.png';
const projects = [
    {
        title: 'LawrenClean',
        description: 'Web development service for LawrenClean.',
        category: 'Cleaning Services',
        image: LawrenClean,
        link: 'https://lawrenclean.nl'
    },
    {
        title: 'Extra Fresh Farm',
        description: 'Landing page web development service for Extra Fresh Farm.',
        category: 'Farming & Shipping',
        image: LawrenClean,
        link: 'https://extrafreshfarm.com'
    }

];

const RecentProjects = () => {
    return (
        <section id='recent-projects' className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
                return (
                <div key={index} className="rounded-lg shadow-lg">
                    <a href={project.link}>
                     <img src={project.image.src} alt={project.title} className="w-full h-60 object-cover rounded-t-lg" />
              <div className="text-left p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
                <p className="text-blue-500 font-bold mt-2">
                  {project.category}
                </p>
              </div>
              </a>
            </div>);
            })}
          </div>
        </div>
        </section>
    );
};

export default RecentProjects;