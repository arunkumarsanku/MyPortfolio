import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiDocker, SiJenkins, SiTerraform, SiAnsible, SiKubernetes, SiPrometheus, SiGrafana } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const Technologies = () => {
  return (
    <div data-testid="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Using Grid for Equal Spacing */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 place-items-center"
      >
        {[
          { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React" },
          { icon: <TbBrandNextjs className="text-7xl" />, name: "Next.js" },
          { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB" },
          { icon: <DiRedis className="text-7xl text-red-700" />, name: "Redis" },
          { icon: <FaNode className="text-7xl text-green-500" />, name: "Node.js" },
          { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, name: "PostgreSQL" },
          { icon: <SiDocker className="text-7xl text-blue-500" />, name: "Docker" },
          { icon: <SiJenkins className="text-7xl text-red-600" />, name: "Jenkins" },
          { icon: <SiTerraform className="text-7xl text-purple-500" />, name: "Terraform" },
          { icon: <SiAnsible className="text-7xl text-gray-300" />, name: "Ansible" },
          { icon: <SiKubernetes className="text-7xl text-blue-600" />, name: "Kubernetes" },
          { icon: <SiPrometheus className="text-7xl text-orange-500" />, name: "Prometheus" },
          { icon: <SiGrafana className="text-7xl text-yellow-500" />, name: "Grafana" },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(3 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center space-y-2 rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
            <p className="text-sm text-neutral-400">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
