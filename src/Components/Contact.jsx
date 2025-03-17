import { CONTACT } from "../constants";
import {  motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div data-testid="contact" className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get In Touch</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="text-center tracking-tighter">
            <motion.p
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}
             <div className="justify-center  flex  text-2xl"> <FaLinkedin
              
            onClick={() => window.open("https://www.linkedin.com/in/arun-kumar-sanku-b6376a1a5/", "_blank")}
                        aria-label="LinkedIn profile"
                      /> </div> </a>   
        </motion.div>
        
    </div>
  )
}

export default Contact
