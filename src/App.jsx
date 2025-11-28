import './index.css'
import AnimateOnScroll from './components/AnimateOnScroll';
import ServiceCard from './components/serviceCard.jsx';
import scrollToSection from './components/Scroll.jsx';

// navbar

import logo from './assets/logo.svg';
// import menuIcon from './assets/hamburgerMenu.svg';
// import closeIcon from "../assets/close.svg";
import Navbar from "./components/Navbar.jsx";

// hero section
import heroImageDesktop from './assets/heroImageDesktop.svg';
import heroImageMobile from './assets/heroImageMobile.svg';

import tickIcon from './assets/tick-icon.svg';
import nayBlueTick from './assets/nayBlue-tick.svg';

import checklist from './assets/checklist.svg';
import person from './assets/person.svg';

import book from './assets/book.svg';
import location from './assets/location.svg';
import sample from './assets/sample.svg';
import results from './assets/results.svg';

import stethoscopeIcon from './assets/stethoscope.svg';
import heartIcon from './assets/heart.svg';
import helixIcon from './assets/helix.svg';
import virusIcon from './assets/virus.svg';
import chartsIcon from './assets/charts.svg';
import computerIcon from './assets/computer.svg';
import tick from './assets/tick.svg';
import up from './assets/up-icon.svg';



// footer section
import clockIcon from './assets/clockIcon.svg';
import mailIcon from './assets/mailIcon.svg';
import locationIcon from './assets/locationIcon.svg';
import phonecallIcon from './assets/phonecallIcon.svg';

import styles from './components/styles.js';

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
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',  // Smooth animation
        block: 'start'       // Scroll to top of section
      });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <>
      
      <Navbar />
      

      {/* hero section */}
      <section className={`bg-navyBlue ${styles.paddingY}`}
      id="home">
        
  
        <div className={`${styles.paddingX} flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto`}>
          {/* {`${styles.paddingX} flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto`} */}

          {/* hero text */}
          {/* Text - slides in smoothly from left */}
          <div className='w-full md:w-1/2 flex flex-col justify-center
          motion-preset-slide-right motion-duration-700' >
            <h1 className={`text-white ${styles.heading1} mb-4`}>
              Professional Healthcare, <span className='text-cyan'>Delivered</span> to You
            </h1>
            <p className={`text-white ${styles.paragraph} mb-6`}>
              Comprehensive mobile lab testing and diagnostic services — right at your doorstep.
            </p>
            <button className={`${styles.primaryButton} self-start`}
            onClick={() => scrollToSection("book-test")}>
              Book Your Test Now
            </button>
          </div>

          {/* hero image */}
          {/* Image - fades in with delay */}
          <div className='w-full md:w-1/2
          motion-preset-fade motion-duration-1000 motion-delay-300'>
            

            <picture>
              <source media="(min-width: 770px)" srcSet={heroImageDesktop} />
              <img 
                src={heroImageMobile}
                className='w-full rounded-2xl'
                alt="Healthcare professional providing medical service to patient" 
              />
            </picture>
          </div>
        </div>
        
      </section>



      {/* why choose us section */}
      <section className={`bg-white ${styles.paddingY}`}
      id="whyChooseUs">

        <div className={`${styles.paddingX} flex flex-col justify-center text-center text-deepBlue 
          mb-0  max-w-7xl mx-auto `}>


        {/* scroll animation */}

          <AnimateOnScroll className='motion-preset-slide-up motion-duration-700'>
            {/* heading - fades up */}
            <div className='mb-12
            motion-preset-slide-up motion-duration-700 motion-scroll'>
              <h2 className={`${styles.heading2} text-navyBlue mb-4`}>WHY CHOOSE US</h2>
              <p className={` ${styles.paragraph}`}>Reliable diagnostics. Personalised care. Professional expertise.</p>
            </div>
          </AnimateOnScroll> 


          {/* cards group */}
          <div className='flex flex-wrap justify-evenly  gap-6'>

            <AnimateOnScroll className='motion-preset-slide-up motion-duration-700 motion-delay-200'>
              <article className={`${styles.Card} min-w-[280px] max-w-[350px]`}>
                <img src={tickIcon} alt="checkmark"
                  className=' mb-4 w-16 h-16' />
                <h3 className={`${styles.heading3} text-navyBlue mt-0 `}>Mobile Service</h3>
                <p className={`${styles.paragraph} mb-0 `}>We come to your location</p>
              </article>
            </AnimateOnScroll>

            <AnimateOnScroll className='motion-preset-slide-up motion-duration-700 motion-delay-200'>
             <article className={`${styles.Card} min-w-[280px] max-w-[350px]`}>
                <img src={tickIcon} alt="checkmark"
                  className='mb-4 w-16 h-16' />
                <h3 className={`${styles.heading3} text-navyBlue mt-0 `}>Professional Team</h3>
                <p className={`${styles.paragraph} mb-0 `}>Certified healthcare experts</p>
              </article>
            </AnimateOnScroll>

            <AnimateOnScroll className='motion-preset-slide-up motion-duration-700 motion-delay-200'>
             <article className={`${styles.Card} min-w-[280px] max-w-[350px]`}>
                <img src={tickIcon} alt="checkmark"
                  className='mb-4 w-16 h-16' />
                <h3 className={`${styles.heading3} text-navyBlue  mt-0 `}>Fast Results</h3>
                <p className={`${styles.paragraph} mb-0 `}>Quick turnaround time</p>
              </article>
            </AnimateOnScroll>
            

            
          </div>
        </div>
      </section>




      {/* services section */}
      <section className={`bg-white ${styles.paddingY}`}
      id="services">
      <div className={`${styles.paddingX} flex flex-col justify-center text-center 
          mb-0  max-w-7xl mx-auto `}>
      
          {/* animations */}
          <AnimateOnScroll className="motion-preset-slide-up motion-duration-700">
            <div className='text-center mb-12 '>
              <h2 className={`${styles.heading2} text-navyBlue mb-4`}>OUR TESTING SERVICES</h2>
              <p className={`max-w-5xl m-auto justify-center ${styles.paragraph} mb-4`}>Whether you need routine screenings or specialized diagnostics, we bring comprehensive mobile lab testing directly to your location with certified professionals and state-of-the-art equipment.</p>
            </div>
          </AnimateOnScroll>
          

          {/* services grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-6 mb-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto justify-center'>

            {servicesData.map((service, index) => (
              <AnimateOnScroll
                key={service.id}
                className={`motion-preset-slide-up motion-duration-700 motion-delay-${index * 100}`}
              >
                <ServiceCard service={service} tick={tick} />
              </AnimateOnScroll>
            ))}
          </div>

          <p>
            Note: All tests are conducted by certified professionals with 
            state-of-the-art equipment
          </p>
        </div>

      </section>



      {/* samples section */}
      <section className={`bg-white ${styles.paddingY} `}
      id="samples">

        <div className={`flex flex-col justify-center text-center 
          text-deepBlue max-w-7xl mx-auto ${styles.paddingX} `}>
          {/* header */}
          <AnimateOnScroll className='motion-preset-slide-up motion-duration-700'>
            <div className='mb-12  mx-auto'>
              <h2 className={`${styles.heading2} text-navyBlue mb-4`}>Sample Collection Types We Handle</h2>
              <p className={` ${styles.paragraph} text-gray-700`}>Our professionals are trained to collect a wide range of specimen types with precision and care.</p>
            </div>
          </AnimateOnScroll>


          {/* Content: List + Image */}
          <div className='flex flex-col md:flex-row items-center 
          md:items-start justify-between gap-8 md:gap-16 w-full'>

            {/* List */}
            <AnimateOnScroll className='motion-preset-slide-up motion-duration-700 motion-delay-200'>
              <div className='flex flex-col gap-4 text-left flex-1'>
                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>SST (Serum Separator Tube):</span> Most common blood tests
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>EDTA:</span> Haematology and blood count analysis
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>Citrate:</span> Coagulation studies
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>Urine (Random/24-hour):</span> Metabolic and renal tests
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>Stool:</span> Gastrointestinal and microbiology
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>CSF (Plain Bottle):</span> Neurological studies
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>Sputum:</span> Respiratory and infection panels
                  </p>
                </div>

                <div className='flex flex-row gap-3 items-start'>
                  <img src={nayBlueTick} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className='text-base md:text-lg'>
                    <span className='font-bold text-navyBlue'>Special Samples:</span> As required
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* image */}
            <AnimateOnScroll className='motion-preset-slide-left motion-duration-700 motion-delay-200'>
              <div className='flex-shrink-0'>
                <img
                  src={checklist}
                  alt="checklist illustration"
                  className='w-64 md:w-80 lg:w-96 h-auto'
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>



      {/* how it works section */}
      <section className={`bg-white ${styles.paddingY}`}
      id="how-it-works">
        <div className={`${styles.paddingX} flex flex-col  justify-center 
      text-center text-deepBlue max-w-7xl mx-auto ${styles.paddingX}`}>
          {/* header */}
          <AnimateOnScroll className='motion-preset-slide-up motion-duration-700'>
            <div className='mb-12 mx-auto text-center'>
              <h2 className={`${styles.heading2} text-navyBlue mb-4`}>HOW IT WORKS</h2>
              <p className={` ${styles.paragraph} text-gray-700`}>Simple, convenient, and professional</p>
            </div>
          </AnimateOnScroll>


          <div className='flex flex-col  sm:flex-row items-center 
              md:items-start justify-center
              max-w-6xl mx-auto '>
              {/* removed gap-8 md:gap-16 to make more responsive  */}
            {/* image */}
            <AnimateOnScroll className='motion-preset-slide-right motion-duration-700 motion-delay-200'>
              <div className='flex-shrink-0'>
                <img
                  src={person}
                  alt="person illustration"
                  className='w-64 md:w-80 lg:w-96 h-auto'
                />
              </div>
            </AnimateOnScroll>

            {/* steps card */}
            <AnimateOnScroll className='motion-preset-slide-left motion-duration-700 motion-delay-200'>
              <div className='flex flex-col flex-1 border-2 border-skyBlue rounded-2xl shadow-xl p-8 md:p-10 lg:p-12'>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
                  
                  {/* Step 1 */}
                  <div className='flex flex-col items-center text-center'>
                    <img src={book} alt=""
                  className=' mb-4 w-16 h-16' />


                    <h3 className='text-lg md:text-xl font-bold mb-2 text-navyBlue'>Book Appointment</h3>
                    <p className='text-sm md:text-base text-gray-700'>Contact us to schedule your test</p>
                  </div>


                  {/* Step 2 */}
                  <div className='flex flex-col items-center text-center'>
                    <img src={location} alt=""
                  className=' mb-4 w-16 h-16' />


                    <h3 className='text-lg md:text-xl font-bold mb-2 text-navyBlue'>We Come to You</h3>
                    <p className='text-sm md:text-base text-gray-700'>Our team arrives at your location</p>
                  </div>


                  {/* Step 3 */}
                  <div className='flex flex-col items-center text-center'>
                    <img src={sample} alt=""
                  className=' mb-4 w-16 h-16' />


                    <h3 className='text-lg md:text-xl font-bold mb-2 text-navyBlue'>Sample Collection</h3>
                    <p className='text-sm md:text-base text-gray-700'>Quick, safe, and professional</p>
                  </div>


                  {/* Step 4 */}
                  <div className='flex flex-col items-center text-center'>
                    <img src={results} alt=""
                className=' mb-4 w-16 h-16' />


                    <h3 className='text-lg md:text-xl font-bold mb-2 text-navyBlue'>Get Results</h3>
                    <p className='text-sm md:text-base text-gray-700'>Fast turnaround with detailed reports</p>
                  </div>


                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>



      {/* call to action section */}
      <section className={`bg-navyBlue ${styles.paddingY}`}>
        <div className={`flex flex-col justify-center items-center text-center text-white  ${styles.paddingX}`}>
          <h2 className={`${styles.heading2} mb-4 text-white`}>Ready to Experience Professional Healthcare at Home?</h2>
          <h3 className={`${styles.heading3} mb-6 text-white font-normal`}>Book your mobile lab test today — fast, safe, and convenient.</h3>
          <button className={`${styles.primaryButton}`}>Schedule Your Test Today</button>
        </div>
      </section>

      
      
      



      {/* book test */}
      <section 
        className={`bg-white flex flex-col ${styles.paddingX} ${styles.paddingY} 
          justify-center items-center`}
        id="book-test">
        
        {/* Form container with max width */}
        <div className="w-full max-w-2xl">
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className={`${styles.heading2} mb-2 text-deepBlue`}>Book Your Test</h2>
            <p className="text-deepBlue text-base">Fast, Simple, and Secure</p>
          </div>
          
          <form className="space-y-6">
            
            {/* First name and Last name - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col text-left">
                <label 
                  htmlFor="firstName" 
                  className="text-deepBlue font-medium mb-2 text-sm">
                  First Name*
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  required 
                  className="border-2 border-cyan rounded-full px-4 py-3 
                    focus:outline-none focus:border-deepBlue transition-colors"
                />
              </div>

              <div className="flex flex-col text-left">
                <label 
                  htmlFor="lastName" 
                  className="text-deepBlue font-medium mb-2 text-sm">
                  Last Name*
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  required 
                  className="border-2 border-cyan rounded-full px-4 py-3 
                    focus:outline-none focus:border-deepBlue transition-colors"
                />
              </div>
            </div>

            {/* Email address */}
            <div className="flex flex-col text-left">
              <label 
                htmlFor="email" 
                className="text-deepBlue font-medium mb-2 text-sm">
                Email Address*
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="border-2 border-cyan rounded-full px-4 py-3 
                  focus:outline-none focus:border-deepBlue transition-colors"
              />
            </div>

            {/* Test type dropdown */}
            <div className="flex flex-col text-left">
              <label 
                htmlFor="testType" 
                className="text-deepBlue font-medium mb-2 text-sm">
                Test Type*
              </label>
              <select 
                id="testType" 
                name="testType"
                required
                className="border-2 border-cyan rounded-full px-4 py-3 
                  text-gray-500 bg-white appearance-none
                  focus:outline-none focus:border-deepBlue transition-colors
                  bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2300B4D8%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')]
                  bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12"
              >
                <option value="">Please select</option>
                <option value="basic">Basic Testing</option>
                <option value="metabolic">Metabolic & Organ Function</option>
                <option value="advanced">Advanced Testing</option>
                <option value="infectious">Infectious Disease</option>
                <option value="specialised">Specialised Screening</option>
                <option value="imaging">Imaging Services</option>
              </select>
            </div>

            {/* Preferred date */}
            <div className="flex flex-col text-left">
              <label 
                htmlFor="preferredDate" 
                className="text-deepBlue font-medium mb-2 text-sm">
                Preferred Date*
              </label>
              <input 
                type="date" 
                id="preferredDate" 
                name="preferredDate"
                required 
                placeholder="Please select"
                className="border-2 border-cyan rounded-full px-4 py-3 
                  text-gray-500
                  focus:outline-none focus:border-deepBlue transition-colors
                  
                  bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
              />
            </div>

            {/* Preferred time */}
            <div className="flex flex-col text-left">
              <label 
                htmlFor="preferredTime" 
                className="text-deepBlue font-medium mb-2 text-sm">
                Preferred Time*
              </label>
              <input 
                type="time" 
                id="preferredTime" 
                name="preferredTime"
                required 
                className="border-2 border-cyan rounded-full px-4 py-3 
                  text-gray-500
                  focus:outline-none focus:border-deepBlue transition-colors
                  bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2300B4D8%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')]
                  bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
              />
            </div>

            {/* Phone number - country code + number */}
            <div className="flex flex-col text-left">
              <label 
                htmlFor="phone" 
                className="text-deepBlue font-medium mb-2 text-sm">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select 
                  id="countryCode" 
                  name="countryCode"
                  className="border-2 border-cyan rounded-full px-4 py-3 w-24
                    bg-white appearance-none
                    focus:outline-none focus:border-deepBlue transition-colors
                    bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2300B4D8%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')]
                    bg-[length:1rem] bg-[right_0.5rem_center] bg-no-repeat pr-8"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+234">+234</option>
                </select>
                
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="flex-1 border-2 border-cyan rounded-full px-4 py-3 
                    focus:outline-none focus:border-deepBlue transition-colors"
                />
              </div>
            </div>

            {/* Additional notes */}
            <div className="flex flex-col text-left">
              <label 
                htmlFor="notes" 
                className="text-deepBlue font-medium mb-2 text-sm">
                Additional Notes
              </label>
              <textarea 
                id="notes" 
                name="notes"
                rows="4"
                className="border-2 border-cyan rounded-3xl px-4 py-3 
                  resize-none
                  focus:outline-none focus:border-deepBlue transition-colors"
              ></textarea>
            </div>

            {/* Submit button */}
            <button 
              type="submit"
              className="bg-cyan text-white font-semibold px-8 py-3 
                rounded-full hover:opacity-90 transition-opacity">
              Submit
            </button>
          </form>
        </div>
      </section>

















      {/* footer */}
      
      <section className={`bg-deepBlue flex flex-col ${styles.paddingX} ${styles.paddingY} justify-center text-white`}>
        
        {/* header */}
        <div className='mb-8 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-skyBlue mb-2'>Optimal Healthcare Wellness & Diagnostics</h2>
          <p className='text-sm md:text-base text-white/80 italic'>Your health & wellness matters...</p>
        </div>

        {/* footer content - flex layout */}
        <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-12 mb-8 max-w-7xl mx-auto w-full text-left md:text-left'>
        {/*  flex-col md:flex-row md:flex-wrap */}
          {/* CONTACT US */}
          <div className='flex-1 min-w-[200px]'>
            <h3 className='text-lg font-bold mb-4 text-skyBlue uppercase tracking-wide'>CONTACT US</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2 text-sm md:text-base'>
                <img src={phonecallIcon} alt="" className='w-5 h-5 mt-0.5 flex-shrink-0' />
                <span>[Phone Number]</span>
              </li>
              <li className='flex items-start gap-2 text-sm md:text-base'>
                <img src={mailIcon} alt="" className='w-5 h-5 mt-0.5 flex-shrink-0' />
                <span>[Email Address]</span>
              </li>
              <li className='flex items-start gap-2 text-sm md:text-base'>
                <img src={locationIcon} alt="" className='w-5 h-5 mt-0.5 flex-shrink-0' />
                <span>[Business Address]</span>
              </li>
              <li className='flex items-start gap-2 text-sm md:text-base'>
                <img src={clockIcon} alt="" className='w-5 h-5 mt-0.5 flex-shrink-0' />
                <span>Hours: 8:30am - 4:30pm</span>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className='flex-1 min-w-[150px]'>
            <h3 className='text-lg font-bold mb-4 text-skyBlue uppercase tracking-wide'>Quick Link</h3>
            <ul className='space-y-3'>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                About Us
              </li>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                Our Services
              </li>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                Privacy Policy
              </li>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className='flex-1 min-w-[150px]'>
            <h3 className='text-lg font-bold mb-4 text-skyBlue uppercase tracking-wide'>Follow Us</h3>
            <ul className='space-y-3'>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                Facebook
              </li>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                Instagram
              </li>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                Twitter
              </li>
              <li className='text-sm md:text-base hover:text-skyBlue cursor-pointer transition-colors'>
                LinkedIn
              </li>
            </ul>
          </div>

          {/* PARTNERS */}
          <div className='flex-1 min-w-[150px]'>
            <h3 className='text-lg font-bold mb-4 text-skyBlue uppercase tracking-wide'>PARTNERS</h3>
            <div className='text-sm md:text-base'>
              [Partner logos section]
            </div>
          </div>

        </div>

        {/* copyright */}
        <div className='text-center pt-6 border-t border-white/20'>
          <p className='text-xs md:text-sm text-white/70 italic'>
            © 2025 Optimal Healthcare Wellness & Diagnostics. All rights reserved.
          </p>
        </div>

      </section>


    </>
  )
}
