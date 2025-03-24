const WhyUs = () => {
    return (
        <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Showcase Your Brand",
                content: "We work closely with you to understand your operational challenges and deliver software that addresses them effectively."
              },
              {
                title: "Meet Business Needs",
                content: "We combine technical expertise with creative flair to deliver seamless, high-performing websites tailored to your business needs."
              },
              {
                title: "Comprehensive Process",
                content: "Our process begins with a detailed discussion about your business needs and goals, followed by project planning, setup and development, and finally, launch and optimization."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-[#0A66C2] transition-colors">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-slate-400">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

export default WhyUs;