import React from 'react';

const Banner = () => {
    return (
        <div
        className="hero min-h-screen mt-4 rounded-lg"
        style={{
          backgroundImage: "url(https://wtm-assets-2.imgix.net/uploads/post/image/632/how_to_become_a_chef_in_melbourne.png?auto=format%2Cenhance&fit=crop&crop=entropy&w=994&h=520&s=2710bf2643f6cd13fa305e6346784361)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;