import React from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import { useState } from "react";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  
  const submitHandler=(event)=>{
    const templateParams = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message
    };
    const config={
      SecureToken:"3b054770-a0d0-4cd1-935b-c63bbfffcb8a",
      To : 'hitenpatdiya1234@gmail.com',
      From : "faugjeegaming@gmail.com",
      Subject : "This is the subject",
      Body : templateParams
}
    event.preventDefault()
    

    if(window.Email){
      window.Email.send(config).then(()=>alert("Email send succesfully"))
    }
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }
  return (
    <section className="pt-40 lg:pt-80 min-h-[85vh] lg:min-h-[78vh] flex items-center lg:mb-20 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-medium mb-2 
              tracking-wide"
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's <br />
                connect!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={submitHandler}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              
              
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your PhoneNo"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
               placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
             
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
