
import React from 'react';
import { SlideData } from '../types';
import { MetricVisual } from './MetricVisual';

interface SlideRendererProps {
  slide: SlideData;
  isLastSlide?: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, isLastSlide }) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'intro':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 bg-white p-12">
            <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-emerald-600">
              {slide.title}
            </h1>
            <p className="text-3xl text-slate-500 max-w-2xl font-light italic">
              "{slide.subtitle}"
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-4xl text-left mt-6">
              {slide.content.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-blue-600 text-2xl">✦</span>
                  <span className="text-xl text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'grid':
        const isOperatingModel = slide.title.includes("Operating Model");
        return (
          <div className="h-full flex flex-col py-10 px-20 bg-white">
            <h2 className="text-5xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">{slide.title}</h2>
            <p className="text-2xl text-slate-500 mb-8 italic">{slide.subtitle}</p>
            
            <div className={`grid gap-6 mb-8 flex-grow ${isOperatingModel ? 'grid-cols-3' : 'grid-cols-2 lg:grid-cols-3'}`}>
              {slide.content.map((item, idx) => (
                <div key={idx} className={`p-8 bg-white rounded-2xl border border-slate-200 border-l-8 border-l-blue-600 shadow-sm hover:shadow-lg transition-all flex items-center justify-center text-center ${isOperatingModel ? 'h-full bg-slate-50/50' : ''}`}>
                  <p className={`${isOperatingModel ? 'text-4xl' : 'text-xl'} text-slate-800 font-black leading-tight tracking-tight`}>{item}</p>
                </div>
              ))}
            </div>

            {slide.highlight && (
              <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-sm">
                <p className="text-2xl text-blue-700 text-center font-bold">
                  {slide.highlight}
                </p>
              </div>
            )}
          </div>
        );

      case 'comparison':
        return (
          <div className="h-full flex flex-col justify-center py-10 px-20 bg-white">
             <h2 className="text-5xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">{slide.title}</h2>
             <p className="text-2xl text-slate-500 mb-6">{slide.subtitle}</p>
             <div className="grid grid-cols-1 md:grid-cols-1 gap-6 flex-grow">
               {slide.columns?.map((col, idx) => (
                 <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4 uppercase tracking-wider">{col.title}</h3>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                      {col.items.map((item, i) => (
                        <li key={i} className="text-lg text-slate-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl mt-auto">
                       <p className="text-slate-400 text-sm uppercase mb-1 font-semibold">Key Question Answered:</p>
                       <p className="text-2xl text-emerald-700 font-bold italic">"{col.question}"</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="h-full flex flex-col justify-center py-10 px-20 bg-white">
            <h2 className="text-5xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">{slide.title}</h2>
            <p className="text-2xl text-slate-500 mb-6 italic">{slide.subtitle}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-grow items-center">
              {slide.metrics?.map((metric, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-tight">{metric.label}</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200 whitespace-nowrap">
                      Target: {metric.target}
                    </span>
                  </div>
                  <div className="flex-grow flex items-center justify-center">
                    <MetricVisual metric={metric} />
                  </div>
                  <p className="text-slate-500 text-sm mt-4 leading-relaxed text-center">{metric.description}</p>
                </div>
              ))}
            </div>
            {slide.content.length > 0 && (
               <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <ul className="flex flex-wrap gap-x-12 gap-y-2 justify-center">
                    {slide.content.map((c, idx) => (
                      <li key={idx} className="text-xl text-emerald-600 font-bold flex items-center">
                         <span className="mr-2 text-emerald-500">✓</span> {c}
                      </li>
                    ))}
                  </ul>
               </div>
            )}
          </div>
        );

      case 'dos-donts':
        const isDos = slide.dos && slide.dos.length > 0;
        const list = isDos ? slide.dos : slide.donts;
        const colorClass = isDos ? 'emerald' : 'rose';
        const icon = isDos ? '✅' : '❌';
        const bullet = isDos ? '✔' : '✘';

        return (
          <div className="h-full flex flex-col py-8 px-16 bg-white">
            <h2 className="text-4xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-3">{slide.title}</h2>
            <p className="text-xl text-slate-500 mb-4 italic">{slide.subtitle}</p>
            <div className={`flex-grow bg-${colorClass}-50 p-6 rounded-[1.5rem] border border-${colorClass}-100 shadow-sm flex flex-col overflow-hidden`}>
              <h3 className={`text-2xl font-black text-${colorClass}-700 mb-6 flex items-center uppercase tracking-widest`}>
                <span className="mr-4 text-3xl">{icon}</span> {isDos ? "DO'S" : "DON'TS"}
              </h3>
              <ul className={`grid gap-x-10 gap-y-3 ${list && list.length > 6 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {list?.map((item, idx) => (
                  <li key={idx} className="text-xl text-slate-800 flex items-start font-medium leading-tight">
                    <span className={`text-${colorClass}-500 mr-3 text-2xl mt-[-4px] flex-shrink-0`}>{bullet}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="h-full flex flex-col justify-center items-center text-center px-16 bg-white py-8">
            <h2 className="text-5xl font-black text-slate-900 mb-4">{slide.title}</h2>
            <p className="text-2xl text-blue-600 mb-8 italic font-light">{slide.subtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl flex-grow items-center">
              {slide.content.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col justify-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">⚙️</div>
                  <p className="text-lg text-slate-800 font-bold leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <div className="w-full max-w-4xl p-6 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200 mt-8">
              <p className="text-2xl text-white font-bold uppercase tracking-widest">{slide.highlight}</p>
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="h-full flex flex-col justify-center px-20 bg-gradient-to-b from-white to-blue-50">
             <div className="max-w-4xl">
                <h2 className="text-6xl font-black text-slate-900 mb-4 leading-tight">{slide.title}</h2>
                <p className="text-3xl text-blue-600 mb-10 border-l-4 border-blue-600 pl-6 italic font-medium">{slide.subtitle}</p>
                <div className="space-y-4 mb-10">
                  {slide.content.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-6 bg-white/40 p-3 rounded-xl border border-white/60 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-blue-200 flex-shrink-0">
                        ★
                      </div>
                      <p className="text-2xl text-slate-800 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                   <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-4 relative z-10">Our North Star</p>
                   <p className="text-4xl text-slate-900 font-black leading-tight relative z-10">
                     {slide.highlight?.split(':')[1]?.trim() || slide.highlight}
                   </p>
                </div>
             </div>
          </div>
        );

      default:
        return <div>Unsupported Slide Type</div>;
    }
  };

  return (
    <div className="h-full w-full overflow-hidden bg-white shadow-2xl rounded-lg border border-slate-200 animate-in fade-in zoom-in-95 duration-500">
      {renderContent()}
    </div>
  );
};
