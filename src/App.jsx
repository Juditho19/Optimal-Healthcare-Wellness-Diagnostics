import './index.css'

import heroImage from './assets/hero-image.svg';
import tickIcon from './assets/tick-icon.svg';

import stethoscopeIcon from './assets/stethoscope.svg';
import heartIcon from './assets/heart.svg';
import helixIcon from './assets/helix.svg';
import virusIcon from './assets/virus.svg';
import chartsIcon from './assets/charts.svg';
import computerIcon from './assets/computer.svg';
import tick from './assets/tick.svg';
import up from './assets/up-icon.svg';

import styles from './components/styles.mjs';

export default function App() {

  const servicesData = [
  {
    id: 1,
    icon: stethoscopeIcon,
    title: "Basic Testing",
    description: "Essential health screenings for common conditions",
    treatments: [
      "Malaria/Typhoid Testing",
      "Diabetes/Blood Sugar Screening",
      "HIV Testing & STI/STD Screening",
      "Special Tests (HCL, Citrate, Urine)",
      "Sample types: SST, EDTA, Urine"
    ]
  },
  {
    id: 2,
    icon: heartIcon,
    title: "Metabolic & Organ Function",
    description: "Comprehensive assessment of your body's core functions",
    treatments: [
      "Renal/Comprehensive Metabolic Panel (CMP/BMP)",
      "Fasting Blood Glucose & HbA1c",
      "Kidney Function (Creatinine, eGFR, Urinalysis)",
      "Liver Function (ALT, AST, Albumin, Bilirubin)",
      "BMP, Fasted Sheath Lancing, Urinalysis"
    ]
  },
  {
    id: 3,
    icon: helixIcon,
    title: "ADVANCED TESTING",
    description: "Specialized diagnostics for complex health concerns",
    treatments: [
      "Vitamin Panels (A, B, B12, B6, D3C)",
      "Hormone Testing (Cortisol, Pre-Insulin, C-Peptide)",
      "Antibiotic Susceptibility & Antibiogram(ASB)",
      "Widal Test (Typhoid)",
      "Sample types: SST, EDTA, CSF"
    ]
  },
  {
    id: 4,
    icon: virusIcon,
    title: "Infectious Disease",
    description: "Testing and screening for infections and viruses",
    treatments: [
      "Hepatitis Panels (HBsAg, HCV, RNA, Hep E IgM)",
      "Cytomegalovirus (CMV) DNA Testing",
      "Blood Culture",
      "Clostridium Difficile (C. difficile)",
      "Sample types: SST, Blood, Stool"
    ]
  },
  {
    id: 5,
    icon: chartsIcon,
    title: "Specialised Screening",
    description: "Targeted testing for complex health conditions",
    treatments: [
      "Allergy Testing (Nut Inclusions, Food Allergies)",
      "Renal Studies (Stone Formation, Calcification)",
      "ANCA Screening",
      "Anti-Müllerian Hormone (AMH)",
      "Neoplagon (Optional) (D-Dimer, V.Antigen)",
      "Sample types: Various specialized samples"
    ]
  },
  {
    id: 6,
    icon: computerIcon,
    title: "Imaging Services",
    description: "Professional imaging at your convenience",
    treatments: [
      "Leg Doppler Ultrasound",
      "Circulation Monitoring",
      "Deep Vein Thrombosis (DVT) Screening",
      "Vascular Health Evaluation",
      "Mobile Ultrasound available for home visits"
    ]
  }
];

  return (
    <>

      {/* hero section */}
      <section className=' bg-navyBlue flex flex-col 
      md:grid md:grid-cols-2 py-24 px-4 sm:px-8 md:px-12 lg:px-16 gap-4 m-0 '>
        
        {/* hero content */}
        <div className='w-full flex flex-col justify-center max-w-xl' >
          <h1 className='text-white font-bold text-3xl
          lg:text-4xl xl:text-5xl mb-4 '>
            Professional Healthcare, <span className='text-cyan'>Delivered</span> to You</h1>
          <p className='text-white text-sm md:text-base lg:text-lg mb-4 '>Comprehensive mobile lab testing and diagnostic services — right at your doorstep.</p>
          <button className='text-white bg-cyan rounded-full 
          py-3 px-3 font-bold shadow mb-4 self-start
          hover:opacity-75 transition-all duration-150
          text-xs md:text-sm lg:text-base'>
            Book Your Test Now</button>
        </div>

        {/* hero image */}
        <div className='w-full flex items-center justify-center h-full'>
          <img src={heroImage} 
          className='w-full rounded-2xl '
          alt="Healthcare professional providing medical service to patient" />
        </div>
      </section>

      {/* why choose us section */}
      <section className='bg-white flex flex-col py-24 px-4 sm:px-8 
      md:px-12 lg:px-16 justify-center text-center text-deepBlue'>
        
        <div className='mb-4'>
          <h2 className='text-2xl lg:text-3xl xl:text-4xl
          font-bold mb-4'>WHY CHOOSE US</h2>
          <p className='text-sm md:text-base lg:text-lg 
          font-medium mb-4'>Reliable diagnostics. Personalised care. Professional expertise.</p>
        </div>

        {/* cards group */}
        <div className='flex flex-wrap justify-evenly gap-6'>
          <article className='flex flex-col items-center 
          text-center border-2 border-skyBlue 
          rounded-2xl shadow-xl p-8
          flex-1 min-w-[280px] max-w-[350px]  '>
            <img src={tickIcon} alt="checkmark" 
            className=' mb-4 w-16 h-16' />
            <h3 className='text-xl lg:text-2xl 
          font-bold mb-2 mt-0 text-deepBlue'>Mobile Service</h3>
            <p className='text-sm md:text-base lg:text-lg text-gray-700
          font-regular '>We come to your location</p>
          </article>

          <article className='flex flex-col items-center 
          text-center border-2 border-skyBlue 
          rounded-2xl shadow-xl p-8
          flex-1 min-w-[280px] max-w-[350px]'>
            <img src={tickIcon} alt="checkmark"
            className='mb-4 w-16 h-16' />
            <h3 className='text-xl lg:text-2xl 
          font-bold mb-2 mt-0 text-deepBlue'>Professional Team</h3>
            <p className='text-sm md:text-base lg:text-lg text-gray-700
          font-regular '>Certified healthcare experts</p>
          </article>

          <article className='flex flex-col items-center 
          text-center border-2 border-skyBlue 
          rounded-2xl shadow-xl p-8
          flex-1 min-w-[280px] max-w-[350px]'>
            <img src={tickIcon} alt="checkmark"
            className='mb-4 w-16 h-16' />
            <h3 className='text-xl lg:text-2xl 
          font-bold mb-2 mt-0 text-deepBlue'>Fast Results</h3>
            <p className='text-sm md:text-base lg:text-lg text-gray-700
          font-regular'>Quick turnaround time</p>
          </article>
        </div>
      </section>

      {/* services section */}
      <section className='bg-white flex flex-col py-24 px-4 
      sm:px-8 md:px-12 lg:px-16 justify-center text-center 
      '>
        <div className='text-center mb-4 '>
          <h2 className='text-2xl lg:text-3xl xl:text-4xl
          font-bold mb-4 text-deepBlue'>OUR TESTING SERVICES</h2>
          <p className='max-w-5xl m-auto justify-center text-sm md:text-base lg:text-lg text-gray-700
          font-regular '>Whether you need routine screenings or specialized diagnostics, we bring comprehensive mobile lab testing directly to your location with certified professionals and state-of-the-art equipment.</p>
        </div>

        {/* card components */}
        {/* flex flex-col items-start 
          text-start border-2 border-skyBlue 
          rounded-2xl shadow-xl p-4 */}
        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-6 '>
          
            {servicesData.map((service) =>(
              
              <div className='bg-white border-2 border-skyBlue
               rounded-2xl shadow-xl p-6 text-start' key={service.id}>
                {/* card heading */}
                <div className='mb-4 border-b-2 border-navyBlue '>
                  <img src={service.icon} alt={`${service.title}`} 
                  width={40} height={40}
                  className='mb-1.5' />
                  <h3 className='text-xl lg:text-2xl 
                  font-bold mb-1.5 mt-0 text-deepBlue'>{service.title}</h3>
                  <p className=' mb-2 '>{service.description}</p>
                </div>

                {/* treatment list */}
                <ul className='space-y-3 mb-4 border-b-2 border-navyBlue'>
                  {service.treatments.map((treatment, index) =>(
                    <li key={index} className='flex items-start gap-2 mb-2 last:mb-4 '>
                      <img src={tick} alt=""  className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                      <p className='text-sm'>{treatment}</p>
                    </li>
                  ))}
                </ul>
                
                {/* toggle button */}
                <button className='flex items-center '>
                  <p>See less</p>
                  <img src={up} alt="" className='w-4 h-4 justify-end' />
                </button>

              </div>  

            ))}

          </div>
        
      </section>


    </>
  )
}
