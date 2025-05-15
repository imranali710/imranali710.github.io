import { Link } from 'react-router-dom';
import card from '../../assets/card.png';
import business_card from '../../assets/business_card.png';
import restaurant from '../../assets/restaurant.png';
import design from '../../assets/design-dwelling.png';



const projects = [
  {
    title: "Restaurant Demo",
    description: "A responsive website for a restaurant with menu, reservation, and contact features.",
    image_src: restaurant, // Adjust this based on your routing
    link: "https://imranali710.github.io/RestaurantShowcase/"
  },
  {
    title: "House Designing Demo",
    description: "Web application for comprehensive and feature-rich house designing system.",
    image_src: design,
    link: "https://imranali710.github.io/design-dwelling/"
  },
  // Add more projects here
];

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-white">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mt-16 mb-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-4">
            I'm Imran
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10">
            <span>Software Developer</span>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I’m a developer with a passion for crafting software that not only solves real-world problems but also drives innovation. With a strong foundation in full-stack web application development, AI integration, and microservice architectures, I specialize in transforming ideas into impactful solutions—from concept to launch—efficiently and with precision.
          </p>
          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-block text-black font-medium py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border"
            >
              View My Work
            </Link>
          </div>
          {/* Downward Arrow */}
          <div className="mt-8">
            <span className="text-5xl text-black animate-bounce">↓</span>
          </div>
        </div>
      </div>
      {/* Demo Section */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Demo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={project.image_src} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block text-blue-600 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="flex flex-col items-center justify-center bg-gray-100 py-4 px-4 sm:px-6 md:px-8">
        <img
          src={card}
          alt="Imran Ali Logo"
          className="h-auto mb-6"
        />
        <a
          href={business_card}
          download="Imran_Ali_Business_Card.png"
          className="inline-block mb-4 text-black font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border"
        >
          Download My Card
        </a>
      </div>
    </div>
  );
};

export default HomePage;
