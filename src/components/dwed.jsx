// import React, {useState} from 'react';
// import styles from '../components/styles.js';
// import countryCodes from "../components/countryCodes";
// import blackDownArrow from '../assets/blackDownArrow.svg';
// import close from '../assets/Close1.svg';
// import AnimateOnScroll from '../components/AnimateOnScroll.jsx';
// import { div, s } from 'framer-motion/client';


// const [showModal, setShowModal] = useState(false);
// const BookingForm = () => {

//   return (
//     <div onClick={() => setShowModal(true)}>
//         {showModal && (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
//         {/* should have close icon on the right upper hand corner */}
//         <div className={`flex flex-col ${styles.paddingX} justify-center items-center`}
//         id="book-test">


//           <div className="w-full ">


//             {/* Heading */}
//             <AnimateOnScroll className='motion-preset-slide-up motion-duration-700'>
//               <div className="text-center mb-8">
//                 <h2 className={`${styles.heading2} mb-2 text-navyBlue`}>Book Your Test</h2>
//                 <p className="text-deepBlue text-base">Fast, Simple, and Secure</p>
//               </div>
//             </AnimateOnScroll>


//             {/* Form */}
//             <AnimateOnScroll className='motion-preset-slide-up motion-duration-700'>
//               <form className="space-y-6">


//                 {/* First + Last Name */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <label className={styles.label}>First Name*</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       required
//                       minLength={2}
//                       maxLength={50}
//                       pattern="[A-Za-z\s\-']+"
//                       title="Please enter a valid name (letters, spaces, hyphens, and apostrophes only)"
//                       className={styles.inputBase}
//                     />
//                   </div>


//                   <div className="flex flex-col">
//                     <label className={styles.label}>Last Name*</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       required
//                       minLength={2}
//                       maxLength={50}
//                       pattern="^[A-Za-z]+(?:[-'][A-Za-z]+)*$"
//                       title="Please enter a valid name (letters, spaces, hyphens, and apostrophes only)"
//                       className={styles.inputBase}
//                     />
//                   </div>
//                 </div>


//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className={styles.label}>Email Address*</label>
//                   <input
//                     type="email"
//                     required
//                     pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
//                     title="Please enter a valid email address"
//                     className={styles.inputBase}
//                   />
//                 </div>


             


//                 {/* Test Type Dropdown */}
//                 <div className="flex flex-col">
//                   <label className={styles.label}>Test Type*</label>


//                   <div className="relative w-full">
//                     <select required className={styles.inputWithIcon}>
//                       <option>Please select</option>
//                       <option value="basic">Basic Testing</option>
//                       <option value="metabolic">Metabolic & Organ Function</option>
//                       <option value="advanced">Advanced Testing</option>
//                       <option value="infectious">Infectious Disease</option>
//                       <option value="specialised">Specialised Screening</option>
//                       <option value="imaging">Imaging Services</option>
//                     </select>


//                     <img
//                       src={blackDownArrow}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
//                     />
//                   </div>
//                 </div>




//                   {/* Date */}
//                   <div className="flex flex-col">
//                     <label className={styles.label}>Preferred Date*</label>
//                     <input
//                       type="date"
//                       required
//                       className={styles.inputDateTime}
//                     />
//                   </div>


//                   {/* Time */}
//                   <div className="flex flex-col">
//                     <label className={styles.label}>Preferred Time*</label>
//                     <input
//                       type="time"
//                       required
//                       className={styles.inputDateTime}
//                     />
//                   </div>






//                 {/* Phone */}
//                 <div className="flex flex-col">
//                   <label className={styles.label}>Phone Number</label>


//                   <div className="flex gap-3">
//                     {/* Country code dropdown */}
//                     <div className="relative w-28">
//                       <select className={styles.inputWithIcon}>
//                         <option value=""></option>


//                         {countryCodes.map((item, index) => (
//                           <option key={index} value={item.code}>
//                             {item.code} ({item.country})
//                           </option>
//                         ))}
//                       </select>


//                       <img
//                         src={blackDownArrow}
//                         className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
//                       />
//                     </div>


//                     <input type="tel" className={`${styles.inputBase} flex-1`} />
//                   </div>
//                 </div>


//                 {/* Notes */}
//                 <div className="flex flex-col">
//                   <label className={styles.label}>Additional Notes</label>
//                   <textarea rows="4" className={styles.textarea}></textarea>
//                 </div>


//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="bg-cyan text-white font-semibold px-8 py-3
//                   rounded-full hover:opacity-90 transition-opacity w-full md:w-auto"
//                 >
//                   Submit
//                 </button>


//               </form>
//             </AnimateOnScroll>


//           </div>
//         </div>
      

//     </div>




















//         <div>
//   )
// }
// export default BookingForm
