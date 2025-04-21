import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="text-orange-500">
          <Quote size={36} />
        </div>
      </div>
      
      <p className="text-gray-700 italic mb-4 text-center">"{testimonial.quote}"</p>
      
      <div className="flex items-center justify-center">
        <img 
          src={testimonial.avatarUrl} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-navy">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;