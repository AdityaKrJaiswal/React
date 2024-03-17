import React from 'react';
function Nav(){
    return (
        <nav className="flex justify-between max-w-7xl mx-auto h-16 items-center">
          <div>
            <img
              src="https://ceros-webadmin-data.s3.us-east-1.amazonaws.com/ceros-stage/f5a8d14f-cf3a-4722-930b-ee5b26452cf6.svg"
              alt=""
            />
          </div>
          <ul className="flex gap-6">
            <li href="#">Platform</li>
            <li href="#">Why Ceros</li>
            <li href="#">Inspiration</li>
            <li href="#">Education</li>
            <li href="#">About</li>
          </ul>
          <div className="flex gap-3 justify-center items-center">
            <button className="h-12 px-4 m-2 text-lg   duration-150  rounded-lg  border border-slate-300 hover:border-slate-400  focus:shadow-outline ">
              Login
            </button>
            <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
              Request a Demo
            </button>
          </div>
        </nav>
    );
};

export default Nav;