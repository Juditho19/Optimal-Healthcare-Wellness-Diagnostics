import { useCallback } from 'react';

export function useScrollTo() {
  // Scroll to a section by ID
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navbar (adjust as needed)
      const navbarHeight = 72; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Scroll to top of page
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Scroll to specific Y position
  const scrollToPosition = useCallback((position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToSection, scrollToTop, scrollToPosition };
}