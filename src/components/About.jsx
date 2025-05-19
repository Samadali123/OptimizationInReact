import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaRegCreditCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Sarah founded ShopEase with a vision to revolutionize online shopping with simplicity and customer satisfaction at its core.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'With over 15 years in tech, Michael leads our development team to create seamless shopping experiences.'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Priya ensures that every aspect of our platform is not only beautiful but also intuitive and accessible.'
    },
    {
      name: 'James Wilson',
      role: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'James and his team work tirelessly to ensure that every customer query is addressed promptly and effectively.'
    }
  ];

  // Core values data
  const coreValues = [
    {
      icon: <FaShippingFast className="text-4xl text-indigo-600" />,
      title: 'Fast Delivery',
      description: 'We ensure your products reach you in the shortest time possible without compromising on quality.'
    },
    {
      icon: <FaHeadset className="text-4xl text-indigo-600" />,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to assist you with any queries or concerns.'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-indigo-600" />,
      title: 'Secure Shopping',
      description: 'Your security is our priority. We implement the latest security measures to protect your data.'
    },
    {
      icon: <FaRegCreditCard className="text-4xl text-indigo-600" />,
      title: 'Easy Returns',
      description: 'Not satisfied with your purchase? Our hassle-free return policy has got you covered.'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About ShopEase</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">Redefining your shopping experience since 2015</p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Our Story"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-lg hidden md:block"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-indigo-600 mb-8"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, ShopEase began with a simple mission: to make online shopping truly easy and enjoyable. What started as a small startup with just 5 team members has now grown into a thriving e-commerce platform serving over 1 million customers worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey hasn't been without challenges, but our commitment to customer satisfaction and product quality has never wavered. We've continuously evolved, listening to feedback and adapting to changing market needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, ShopEase stands as a testament to perseverance, innovation, and customer-centricity. We're not just an online store; we're a community that values quality, transparency, and exceptional service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
              At ShopEase, our values guide every decision we make. They're the foundation of our culture and the principles that drive us to deliver excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
              Behind every great product is a great team. At ShopEase, we're proud of the passionate, talented people who make everything possible.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
