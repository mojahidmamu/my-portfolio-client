import React from 'react';

const Education = () => {
    return (
        <div className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="text-slate-900 dark:text-white">Educational </span>
                <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
                    Qualifications
                </span>
                </h2>

                <div className="flex justify-center">
                    <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
                </div>


            </div>
        </div>
    );
};

export default Education;