interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-500">
      <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-6 mx-auto">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-navy text-center mb-3">{title}</h3>
      
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;