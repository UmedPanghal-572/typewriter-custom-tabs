import React, { useRef } from "react";
import Typewriter from "typewriter-effect";

const Header = () => {


    return (
        <>
            <div className="flex justify-center items-center bg-black min-h-screen space-y-20 flex-col px-3">
                <div className="text-center">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('<span class="text-amber-500 text-center font-bold text-2xl mx-5"> This includes a React component which can be used within your project. You can pass in a onInit function which will be called with the instance of the typewriter so you can use the typewriter core API. </span>')
                                .start();
                        }}
                    /></div>
                <div className="flex justify-center text-center">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('<span class = "text-red-500 font-bold text-2xl mx-5" >  The typewriter effect creates the illusion that text is typed out one character at a time. This effect is visually engaging when it comes to displaying key information or messages. we will discuss how to implement this effect using different methods such as setTimeout, setInterval, and CSS animations with JavaScript. Each method has its unique advantages and can be used depending on the requirements of your project. </span>')
                                .pause(1000)
                                .start();
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
