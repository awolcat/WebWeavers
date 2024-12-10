const ServiceCarouselCard = ({ title, description, imageUrl }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mx-2 flex-shrink-0 w-72">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-full mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCarouselCard;

