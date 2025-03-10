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
    <div className="space-y-32">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-burgundy-600 dark:text-burgundy-400">Abdullah Yakub</span>
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
      <section id="about" className="py-16">
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
              <p className="text-gray-600">
                I'm a Computer Science graduate with a passion for web development and problem-solving. 
                With experience in both frontend and backend technologies, I enjoy creating efficient, 
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies and working on personal projects
                that challenge my skills and creativity.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Computer Science Graduate</li>
                <li>Full Stack Web Developer</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
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
      <section id="skills" className="py-16 bg-gray-50">
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
      <section id="services" className="py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Website Development</li>
                <li>• Single Page Applications</li>
                <li>• E-commerce Solutions</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• RESTful API Development</li>
                <li>• Database Design</li>
                <li>• Server Configuration</li>
                <li>• Cloud Deployment</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Technical Architecture</li>
                <li>• Code Review</li>
                <li>• Performance Optimization</li>
                <li>• Security Assessment</li>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-burgundy-600 text-white px-6 py-3 rounded-lg hover:bg-burgundy-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/developerabz/" className="text-gray-600 hover:text-burgundy-600">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-yakub/" className="text-gray-600 hover:text-burgundy-600">
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
