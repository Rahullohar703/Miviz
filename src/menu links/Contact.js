// src/menu links/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import FormfacadeEmbed from '@formfacade/embed-react';
import './Contact.css'; // Import optional CSS for styling

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      {/* Embed the Form using FormfacadeEmbed */}
      <div className="form-wrapper">
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/101808954562389489787/form/1FAIpQLSdGNxu58HTL71RQ5t-YnKQJXaMkwW3Hem0KeSk7zxP9epso1A/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log('Form submitted')}
        />
      </div>
    </motion.div>
  );
};

export default Contact;
