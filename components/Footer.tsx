import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-12 border-t border-gray-100 text-center text-sm text-gray-500">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a href="#support" className="hover:text-black transition-colors duration-200">Contact Support</a>
        <span className="hidden sm:inline text-gray-300">•</span>
        <a href="#privacy" className="hover:text-black transition-colors duration-200">Privacy Policy</a>
        <span className="hidden sm:inline text-gray-300">•</span>
        <a href="#terms" className="hover:text-black transition-colors duration-200">Terms & Conditions</a>
      </div>
      <div className="mt-8 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Recova. All rights reserved.
      </div>
    </footer>
  );
};