import image from "../assets/avatar.png"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={image} 
            alt="" 
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px]"
          />
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex maw-w-[600px] flex-col items-center justify-center gap-4 text-center"
        >
          <h1 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-6xl">
            Caco Abud
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl">
            Graphic Designer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Graphic designer specializing in captivating and impactful visual creation, with expertise in Adobe Photoshop, Illustrator, Dimension, and After Effects. With a keen eye for detail and composition, he develops projects ranging from branding and logo design to animations and 3D visuals. Each project is crafted to communicate with clarity and originality, visually connecting ideas in an engaging and functional way.
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero;