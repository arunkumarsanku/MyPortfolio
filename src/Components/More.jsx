// import React from 'react';
// import { HOBBIES, ITALY_EXPERIENCE } from '../constants';

// const More = () => {
//     return (
//         <div id="more" className="min-h-screen pt-20 pb-16 px-8">
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-12">More About Me</h1>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <section className="bg-neutral-800 rounded-lg p-6">
//                         <h2 className="text-2xl font-semibold mb-6">My Hobbies</h2>
//                         <ul className="space-y-3">
//                             {HOBBIES.map((hobby, index) => (
//                                 <li key={index} className="flex items-center text-gray-300">
//                                     <span className="mr-2">•</span>
//                                     {hobby}
//                                 </li>
//                             ))}
//                         </ul>
//                     </section>

//                     <section className="bg-neutral-800 rounded-lg p-6">
//                         <h2 className="text-2xl font-semibold mb-6">My Italian Experience</h2>
//                         <div className="space-y-4">
//                             {ITALY_EXPERIENCE.map((exp, index) => (
//                                 <div key={index} className="bg-neutral-700 rounded-lg p-4">
//                                     <h3 className="text-xl font-medium text-yellow-500 mb-2">
//                                         {exp.title}
//                                     </h3>
//                                     <p className="text-gray-300">{exp.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default More;