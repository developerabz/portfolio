'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SkillCard from '@/components/SkillCard'
import ProjectCard from '@/components/ProjectCard'
import { skills } from '@/data/skills'
import { projects } from '@/data/projects'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-burgundy-600 dark:text-burgundy-400">Abdullah Yakub</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Computer Science Graduate & Web Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-burgundy-600 text-burgundy-600 dark:border-burgundy-400 dark:text-burgundy-400 px-6 py-3 rounded-lg hover:bg-burgundy-50 dark:hover:bg-burgundy-900/20 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I&apos;m a Computer Science graduate with a passion for web development and problem-solving. 
                With experience in both frontend and backend technologies, I enjoy creating efficient, 
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I&apos;m not coding, you can find me exploring new technologies and working on personal projects
                that challenge my skills and creativity.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <ul className="text-lg list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Computer Science Graduate</li>
                <li>Full Stack Web Developer</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          
          {/* Web Development Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Web Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.type === 'webdev')
                .map((project, index) => (
                  <ProjectCard key={`webdev-${index}`} {...project} />
                ))
              }
            </div>
          </div>

          {/* WordPress Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">WordPress Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.type === 'wordpress')
                .map((project, index) => (
                  <ProjectCard key={`wordpress-${index}`} {...project} />
                ))
              }
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800/80 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Web Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Custom Website Development</li>
                <li>• Single Page Applications</li>
                <li>• E-commerce Solutions</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800/80 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Backend Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• RESTful API Development</li>
                <li>• Database Design</li>
                <li>• Cloud Deployment</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800/80 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Consulting</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Technical Architecture</li>
                <li>• Code Review</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block bg-burgundy-600 text-white px-8 py-3 rounded-lg hover:bg-burgundy-700 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Resume</h2>
          <div className="text-center space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              Download my resume to learn more about my experience and qualifications.
            </p>
            <a
              href="/Abdullah_Resume_Mar_25_IT.pdf"
              download
              className="inline-flex items-center space-x-2 bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="mailto:abdullah.yakub@hotmail.com" 
                className="inline-flex items-center bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors"
              >
                Send me an email
              </a>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/developerabz/" className="text-gray-600 hover:text-burgundy-600 dark:text-gray-400 dark:hover:text-burgundy-400">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-yakub/" className="text-gray-600 hover:text-burgundy-600 dark:text-gray-400 dark:hover:text-burgundy-400">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
