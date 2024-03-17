import React from "react";
import {motion} from "framer-motion"
function Hero(){
    return (
        <div className="flex h-[86vh] justify-between items-center max-w-7xl mx-auto bg-indigo-700 w-full">
            <div className="mx-auto flex  flex-col gap-4 px-3">
                <motion.h1 
                initial={{x:-100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{
                    duration:"1",
                    delay:"1"
                }}
                className="font-semibold text-7xl text-white">About us</motion.h1>
                
                <motion.p 
                initial={{x:-100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{
                    duration:"1",
                    delay:"1"
                }}
                className=" text-left text-white text-indigo-400/75 max-w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab rem quasi aliquid. Eius reprehenderit quibusdam aspernatur pariatur architecto reiciendis est! Enim velit sed iure unde nihil ipsa voluptatum odit!</motion.p>
            </div>
            <motion.div 
            initial={{x:+100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
                duration:"1",
                delay:"1"
            }}
            className="w-2/5 h-1/2  rounded-full  px-10  mx-auto">
                <img className="h-full w-full rounded-full" src="photo.jpg" alt="" />
            </motion.div>
        </div>
    );
}

export default Hero;