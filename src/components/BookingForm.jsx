import React, { useState, useEffect } from 'react';
import styles from '../components/styles.js';
import countryCodes from "../components/countryCodes";
import blackDownArrow from '../assets/blackDownArrow.svg';
import close from '../assets/Close1.svg';

const BookingForm = ({ showModal, setShowModal }) => {
  
  // Lock scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    
    if (showModal) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showModal, setShowModal]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
    
    // Close modal after submission (or show success message first)
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative
          motion-preset-fade motion-duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <img src={close} alt="Close" className="w-6 h-6" />
        </button>

        {/* Form Content */}
        <div className="p-8 md:p-12">
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className={`${styles.heading2} mb-2 text-navyBlue`}>Book Your Test</h2>
            <p className="text-deepBlue text-base">Fast, Simple, and Secure</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className={styles.label}>First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  minLength={2}
                  maxLength={50}
                  pattern="[A-Za-z\s\-']+"
                  title="Please enter a valid name (letters, spaces, hyphens, and apostrophes only)"
                  className={styles.inputBase}
                />
              </div>

              <div className="flex flex-col">
                <label className={styles.label}>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  minLength={2}
                  maxLength={50}
                  pattern="[A-Za-z\s\-']+"
                  title="Please enter a valid name (letters, spaces, hyphens, and apostrophes only)"
                  className={styles.inputBase}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className={styles.label}>Email Address*</label>
              <input
                type="email"
                name="email"
                required
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                title="Please enter a valid email address"
                className={styles.inputBase}
              />
            </div>

            {/* Test Type Dropdown */}
            <div className="flex flex-col">
              <label className={styles.label}>Test Type*</label>

              <div className="relative w-full">
                <select 
                  name="testType"
                  required 
                  className={styles.inputWithIcon}
                >
                  <option value="">Please select</option>
                  <option value="basic">Basic Testing</option>
                  <option value="metabolic">Metabolic & Organ Function</option>
                  <option value="advanced">Advanced Testing</option>
                  <option value="infectious">Infectious Disease</option>
                  <option value="specialised">Specialised Screening</option>
                  <option value="imaging">Imaging Services</option>
                </select>

                <img
                  src={blackDownArrow}
                  alt=""
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className={styles.label}>Preferred Date*</label>
              <input
                type="date"
                name="preferredDate"
                required
                className={styles.inputDateTime}
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className={styles.label}>Preferred Time*</label>
              <input
                type="time"
                name="preferredTime"
                required
                className={styles.inputDateTime}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className={styles.label}>Phone Number</label>

              <div className="flex gap-3">
                {/* Country code dropdown */}
                <div className="relative w-28">
                  <select 
                    name="countryCode"
                    className={styles.inputWithIcon}
                  >
                    <option value=""> </option>
                    {countryCodes.map((item, index) => (
                      <option key={index} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>

                  <img
                    src={blackDownArrow}
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />
                </div>

                <input 
                  type="tel" 
                  name="phone"
                  className={`${styles.inputBase} flex-1`} 
                />
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col">
              <label className={styles.label}>Additional Notes</label>
              <textarea 
                name="notes"
                rows="4" 
                className={styles.textarea}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-cyan text-white font-semibold px-8 py-3
                rounded-full hover:opacity-90 transition-opacity w-full"
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingForm;