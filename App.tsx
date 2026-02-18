
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isOverview, setIsOverview] = useState(false);

  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape') setIsOverview((prev) => !prev);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentSlide = SLIDES[currentSlideIndex];

  if (isOverview) {
    return (
      <div className="min-h-screen bg-slate-50 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">Presentation Overview</h1>
          <button 
            onClick={() => setIsOverview(false)}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            Close Overview (Esc)
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
          {SLIDES.map((slide, idx) => (
            <div 
              key={slide.id} 
              onClick={() => {
                setCurrentSlideIndex(idx);
                setIsOverview(false);
              }}
              className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 bg-white shadow-sm ${
                currentSlideIndex === idx ? 'border-blue-600 ring-4 ring-blue-100' : 'border-slate-200 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="p-4 aspect-video flex flex-col justify-center items-center text-center">
                <span className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-widest">Slide {idx + 1}</span>
                <h3 className="text-slate-800 font-bold text-sm truncate w-full px-2">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-container bg-slate-50 relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="w-full h-full max-w-[1440px] max-h-[900px] relative">
          <SlideRenderer 
            slide={currentSlide} 
            isLastSlide={currentSlideIndex === totalSlides - 1} 
          />
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="h-20 bg-white border-t border-slate-200 flex items-center justify-between px-10">
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsOverview(true)}
            className="text-slate-500 hover:text-blue-600 transition-colors flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50"
          >
            <span className="text-xl">⠿</span>
            <span className="text-xs font-bold uppercase tracking-widest">Index</span>
          </button>
          <div className="h-4 w-px bg-slate-200"></div>
          <span className="text-slate-400 text-xs font-bold font-mono tracking-widest uppercase">
            {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <span className="text-xl font-bold">←</span>
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200"
          >
            <span className="text-xl font-bold">→</span>
          </button>
        </div>
      </footer>

      {/* Floating UI Elements */}
      <div className="fixed top-8 right-8 z-50 flex space-x-4 opacity-40 hover:opacity-100 transition-opacity">
         <div className="bg-white border border-slate-200 px-3 py-1 rounded-md text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            PM ONBOARDING_V1.0
         </div>
      </div>
    </div>
  );
};

export default App;
