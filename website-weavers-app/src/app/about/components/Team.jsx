import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
    const members = [
        {
            name: 'Francis Onyach',
            role: 'Digital Marketing Strategist - SEO Expert',
            bio: 'Does SEO',
            image: '/images/team/frankie.jpeg',
            linkedIn: 'https://www.linkedin.com/in/francis-onyach/'
        },
        {
            name: 'George Wambani',
            role: 'Business Strategist',
            bio: 'Does SEO',
            image: '/images/team/george.jpeg',
            linkedIn: ' https://www.linkedin.com/in/georgewambani/'
        },
        {
            name: 'Myra Jarenga',
            role: 'Digital Marketing Strategist - Social Media Management',
            bio: 'Does SEO',
            image: '/images/team/myra.jpeg',
            linkedIn: 'https://www.linkedin.com/in/myra-jarenga/'
        },
        {
            name: 'Albert Irura',
            role: 'Software Developer',
            bio: 'Does SEO',
            image: '/images/team/albert.jpeg',
            linkedIn: 'https://www.linkedin.com/in/albertmathenge/'
        }
    ];
    return (
        <section className="bg-gray-100 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">MEET THE TEAM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {members.map((member, index) => (
                <div className="col-span-1 flex flex-col justify-start items-center gap-2" key={index}>
                    <div className="bg-white rounded-full overflow-hidden w-[150px] h-[150px]">
                        <img 
                            src={member.image} 
                            alt="Team member" 
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mt-4 text-center">{member.name}</h3>
                    <p className="uppercase text-gray-600 text-center text-md/2 dark:text-slate-400">{member.role.toUpperCase()}</p>
                    <div>
                        <a href={member.linkedIn} target="_blank">
                            <FontAwesomeIcon size='2x' icon={faLinkedin} />
                        </a>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

export default Team;

