import { useState } from "react";
import upIcon from '../assets/up-icon.svg';

const ServiceCard = ({ service, tick }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white border-2 border-skyBlue rounded-2xl shadow-xl p-6 text-start">
      
      {/* Header (ALWAYS visible) */}
      <div className="mb-4 border-b-2 border-navyBlue">
        <img
          src={service.icon}
          alt={service.title}
          width={40}
          height={40}
          className="mb-1.5"
        />
        <h3 className="text-xl lg:text-2xl font-bold mb-1.5 mt-0 text-navyBlue">
          {service.title}
        </h3>

        {/* Only show this when open */}
        {isOpen && (
          <p className="mb-2">{service.description}</p>
        )}
      </div>

      {/* Treatments list (Hidden when collapsed) */}
      {isOpen && (
        <ul className="space-y-3 mb-4 border-b-2 border-navyBlue">
          {service.treatments.map((treatment, index) => (
            <li key={index} className="flex items-start gap-2 mb-2 last:mb-4">
              <img src={tick} alt="" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{treatment}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mt-2"
      >
        <p>{isOpen ? "See less" : "See more"}</p>

        <img
          src={upIcon}
          alt=""
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

    </div>
  );
};

export default ServiceCard;
