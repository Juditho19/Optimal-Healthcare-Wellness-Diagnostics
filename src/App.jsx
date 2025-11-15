import './index.css'

import heroImage from './assets/hero-image.svg';
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

  return (
    <>

      {/* hero section */}
      <section className={`bg-navyBlue flex flex-col 
      md:grid md:grid-cols-2 ${styles.paddingY} ${styles.paddingX} 
      gap-4 m-0`}>


        {/* hero content */}
        <div className='w-full flex flex-col justify-center max-w-xl' >
          <h1 className={`text-white ${styles.heading1}`}>
            Professional Healthcare, <span className='text-cyan'>Delivered</span> to You</h1>
          <p className={` text-white  ${styles.paragraph} mb-4`}>
            Comprehensive mobile lab testing and diagnostic services — right at your doorstep.
          </p>
          <button className={` ${styles.primaryButton} self-start mb-4`}>
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
      <section className={`bg-white flex flex-col ${styles.paddingX} ${styles.paddingY} 
      justify-center text-center text-deepBlue mb-0`}>

        <div className='mb-4'>
          <h2 className={`${styles.heading2} text-navyBlue`}>WHY CHOOSE US</h2>
          <p className={` ${styles.paragraph}`}>Reliable diagnostics. Personalised care. Professional expertise.</p>
        </div>

        {/* cards group */}
        <div className='flex flex-wrap justify-evenly gap-6'>
          <article className={`${styles.Card} min-w-[280px] max-w-[350px]`}>
            <img src={tickIcon} alt="checkmark"
              className=' mb-4 w-16 h-16' />
            <h3 className={`${styles.heading3} text-navyBlue mt-0 `}>Mobile Service</h3>
            <p className={`${styles.paragraph} mb-0 `}>We come to your location</p>
          </article>

          <article className={`${styles.Card} min-w-[280px] max-w-[350px]`}>
            <img src={tickIcon} alt="checkmark"
              className='mb-4 w-16 h-16' />
            <h3 className={`${styles.heading3} text-navyBlue mt-0 `}>Professional Team</h3>
            <p className={`${styles.paragraph} mb-0 `}>Certified healthcare experts</p>
          </article>

          <article className={`${styles.Card} min-w-[280px] max-w-[350px]`}>
            <img src={tickIcon} alt="checkmark"
              className='mb-4 w-16 h-16' />
            <h3 className={`${styles.heading3} text-navyBlue  mt-0 `}>Fast Results</h3>
            <p className={`${styles.paragraph} mb-0 `}>Quick turnaround time</p>
          </article>
        </div>
      </section>

      {/* services section */}
      <section className={`bg-white flex flex-col ${styles.paddingY} ${styles.paddingX}
      justify-center text-center`}>

        <div className='text-center mb-4 '>
          <h2 className={`${styles.heading2} text-navyBlue`}>OUR TESTING SERVICES</h2>
          <p className={`max-w-5xl m-auto justify-center ${styles.paragraph} mb-4`}>Whether you need routine screenings or specialized diagnostics, we bring comprehensive mobile lab testing directly to your location with certified professionals and state-of-the-art equipment.</p>
        </div>

        {/* card components */}
        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-6 '>

          {servicesData.map((service) => (

            <div className='bg-white border-2 border-skyBlue
               rounded-2xl shadow-xl p-6 text-start' key={service.id}>
              {/* card heading */}
              <div className='mb-4 border-b-2 border-navyBlue '>
                <img src={service.icon} alt={`${service.title}`}
                  width={40} height={40}
                  className='mb-1.5' />
                <h3 className='text-xl lg:text-2xl 
                  font-bold mb-1.5 mt-0 text-navyBlue'>{service.title}</h3>
                <p className=' mb-2 '>{service.description}</p>
              </div>

              {/* treatment list */}
              <ul className='space-y-3 mb-4 border-b-2 border-navyBlue'>
                {service.treatments.map((treatment, index) => (
                  <li key={index} className='flex items-start gap-2 mb-2 last:mb-4 '>
                    <img src={tick} alt="" className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
        <p></p>

      </section>


      {/* samples section */}
      <section className={`bg-white flex flex-col ${styles.paddingX} ${styles.paddingY} 
      justify-center text-center text-deepBlue`}>
        {/* header */}
        <div className='mb-12 max-w-4xl mx-auto'>
          <h2 className={`${styles.heading2} text-navyBlue mb-4`}>Sample Collection Types We Handle</h2>
          <p className={` ${styles.paragraph} text-gray-700`}>Our professionals are trained to collect a wide range of specimen types with precision and care.</p>
        </div>

        {/* Content: List + Image */}
        <div className='flex flex-col md:flex-row items-center 
        md:items-start justify-center gap-8 md:gap-16  
        max-w-6xl mx-auto '>

          {/* List */}
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

          {/* image */}
          <div className='flex-shrink-0'>
            <img
              src={checklist}
              alt="checklist illustration"
              className='w-64 md:w-80 lg:w-96 h-auto'
            />
          </div>
        </div>
      </section>

      {/* how it works section */}
      <section className={`bg-white flex flex-col ${styles.paddingX} ${styles.paddingY} 
      justify-center text-center text-deepBlue `}>
        {/* header */}
        <div className='mb-12 max-w-4xl mx-auto'>
          <h2 className={`${styles.heading2} text-navyBlue mb-4`}>HOW IT WORKS</h2>
          <p className={` ${styles.paragraph} text-gray-700`}>Simple, convenient, and professional</p>
        </div>


        <div className='flex flex-col  sm:flex-row items-center 
            md:items-start justify-center
            max-w-6xl mx-auto '>
            {/* removed gap-8 md:gap-16 to make more responsive  */}
          {/* image */}
          <div className='flex-shrink-0'>
            <img
              src={person}
              alt="person illustration"
              className='w-64 md:w-80 lg:w-96 h-auto'
            />
          </div>

          {/* steps card */}
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


        </div>
      </section>


      {/* call to action section */}
      <section className={`bg-navyBlue flex flex-col ${styles.paddingX} ${styles.paddingY} justify-center items-center text-center text-white`}>
        <div className='w-full flex flex-col items-center justify-center max-w-3xl'>
          <h2 className={`${styles.heading2} mb-4 text-white`}>Ready to Experience Professional Healthcare at Home?</h2>
          <h3 className={`${styles.heading3} mb-6 text-white font-normal`}>Book your mobile lab test today — fast, safe, and convenient.</h3>
          <button className={`${styles.primaryButton}`}>Schedule Your Test Today</button>
        </div>
      </section>

      

      {/* book test */}
      {/* <section className={`bg-white flex flex-col ${styles.paddingX} ${styles.paddingY} 
      justify-center text-center`}>
        <h2 className={`${styles.heading2} mb-4`}>Book Your Test</h2>
        <h3  className={`${styles.heading3}`}>Fast, Simple, and Secure</h3>
        
        <form action="">

          <div>
            <label htmlFor=""></label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </section> */}

      {/* footer */}
      
      {/* footer */}
      <section className={`bg-deepBlue flex flex-col ${styles.paddingX} ${styles.paddingY} justify-center text-white`}>
        
        {/* header */}
        <div className='mb-8 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-skyBlue mb-2'>Optimal Healthcare Wellness & Diagnostics</h2>
          <p className='text-sm md:text-base text-white/80 italic'>Your health & wellness matters...</p>
        </div>

        {/* footer content - flex layout */}
        <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-12 mb-8 max-w-7xl mx-auto w-full text-left md:text-left'>

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
