import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">RemindMeIO</h2>
                    <p className="mt-2">Never forget an important event again.</p>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-400 transition duration-300">Home</a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">About</a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">Contact</a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">FAQ</a>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400 transition duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.56c-.88.39-1.83.66-2.82.78 1.01-.6 1.8-1.55 2.17-2.68-.95.56-2.01.97-3.13 1.2a4.92 4.92 0 00-8.38 4.48c-4.09-.2-7.71-2.16-10.14-5.13a4.85 4.85 0 00-.66 2.48c0 1.71.87 3.22 2.19 4.1a4.92 4.92 0 01-2.23-.62v.06c0 2.39 1.7 4.38 3.95 4.83a4.95 4.95 0 01-2.21.08 4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.1 2.1c-.4 0-.8-.02-1.19-.07a13.93 13.93 0 007.56 2.22c9.05 0 14-7.5 14-14v-.64A10 10 0 0024 4.56z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.04c-5.5 0-10 4.46-10 9.96 0 4.42 3.4 8.08 7.75 8.83v-6.23H7.08V11.6h2.67V9.69c0-2.63 1.62-4.06 3.99-4.06 1.14 0 2.11.09 2.4.13v2.79h-1.65c-1.3 0-1.55.62-1.55 1.52v2h3.1l-.41 2.99h-2.69v6.23C18.6 20.08 22 16.42 22 11.99c0-5.5-4.5-9.96-10-9.96z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.209 11.387.6.111.82-.261.82-.578 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.613-4.042-1.613-.546-1.38-1.334-1.748-1.334-1.748-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.304 3.492.997.108-.774.419-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.47-2.381 1.238-3.222-.125-.303-.535-1.52.117-3.164 0 0 1.01-.323 3.31 1.23.96-.266 1.98-.399 3-.404 1.02.005 2.04.138 3 .404 2.29-1.553 3.298-1.23 3.298-1.23.654 1.644.243 2.861.119 3.164.77.841 1.236 1.912 1.236 3.222 0 4.61-2.806 5.624-5.479 5.921.43.372.813 1.103.813 2.222 0 1.604-.014 2.897-.014 3.293 0 .32.217.694.824.577C20.565 21.795 24 17.307 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24H22.23c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.08 20.41H3.69V9h3.39v11.41zM5.38 7.49c-1.09 0-1.98-.88-1.98-1.98s.89-1.98 1.98-1.98 1.98.89 1.98 1.98c0 1.09-.89 1.98-1.98 1.98zM20.41 20.41h-3.39v-5.79c0-1.38-.03-3.16-1.93-3.16-1.94 0-2.24 1.51-2.24 3.06v5.89h-3.39V9h3.25v1.56h.05c.45-.84 1.54-1.73 3.17-1.73 3.39 0 4.01 2.23 4.01 5.13v6.45z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="text-center mt-8 text-gray-500">
                &copy; {new Date().getFullYear()} RemindMeIO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
