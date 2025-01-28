import React from "react";
import "animate.css";
// import Tilt from "react-tilt";
import ParallaxTilt from "react-parallax-tilt";



const Animate = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col bg-gray-100">
            <h1 className="animate__animated animate__bounce animate__infinite text-3xl font-bold text-center">
                Hello, Animate.bounce!
            </h1>
            <h2 className="animate__animated animate__swing animate__infinite text-3xl font-bold pt-10 text-center" >
                Hello, Animate.swing!
            </h2>
            
            {/* <Tilt options={{  speed: 400, scale: 1.1 }}  style={{ height: 250,  width: 250 }}>
                <button className="px-5 py-4 border-4 border-red-500 rounded-3xl mt-14 text-3xl text-black font-bold">
                    Read More
                </button>
            </Tilt> */}

            <ParallaxTilt>
                <button className="px-5 py-4 border-4 border-red-500 rounded-3xl mt-14 text-3xl text-black font-bold">
                    Read More
                </button>
            </ParallaxTilt>
        </div>
    );
};

export default Animate;
