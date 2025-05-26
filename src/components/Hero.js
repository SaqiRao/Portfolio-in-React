import React from "react";

const Hero = () =>{
    return(
<section
  className="flex flex-col justify-center items-center h-screen text-center px-4 bg-cover bg-center relative"
  style={{ backgroundImage: "url('https://your-image-url.com/background.jpg')" }}
>
  {/* Optional dark overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

  <div className="relative z-10">
    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hi, I'm Saqib Rao</h2>
    <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
      A passionate Full-Stack Developer building modern and performant web applications.
    </p>
  </div>
</section>
    );

};
export default Hero;