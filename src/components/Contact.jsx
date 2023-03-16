import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { contacts } from "../constants";
import { github } from "../assets";
import { linkedin } from "../assets";
import { email } from "../assets";
import { phone } from "../assets";

const Contact = () => {
  // const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       {
  //         from_name: form.name,
  //         to_name: "JavaScript Mastery",
  //         from_email: form.email,
  //         to_email: "sujata@jsmastery.pro",
  //         message: form.message,
  //       },
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <section className="pt-5">
          <p className="text-white font-medium text-4xl">{contacts.name}</p>
          <div className="flex mt-4">
            <img src={email} className="h-9 w-9 items-center " alt="" />
            <span>
              <p className="text-white font-medium pl-3 pt-[6px] hover:text-cyan-400">{contacts.email}</p>{" "}
            </span>{" "}
          </div>{" "}
          <div className="flex mt-4">
            <img src={phone} className="h-10 w-10 items-center " alt="" />{" "}
            <span>
              <p className="text-white font-medium pl-3 pt-[6px] hover:text-cyan-400">{contacts.phone}</p>{" "}
            </span>{" "}
          </div>{" "}
          <div onClick={() => window.open(contacts.linkedin_link, "_blank")} className="flex mt-4  cursor-pointer">
            <img src={linkedin} className="h-9 w-9 items-center  hover:cursor-pointer" alt="" />{" "}
            <span>
              <p className="text-white font-medium pl-3 pt-[6px]  hover:text-green-400  hover:underline ">{contacts.linkedin_link}</p>{" "}
            </span>{" "}
          </div>{" "}
          <div onClick={() => window.open(contacts.github_link, "_blank")} className="flex mt-4 cursor-pointer">
            <img src={github} className="h-9 w-9 items-center  hover:cursor-pointer" alt="" />
            <p className="text-white font-medium pl-3 pt-[6px] hover:text-green-400 hover:underline ">{contacts.github_link}</p>{" "}
          </div>{" "}
        </section>{" "}
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

//   return (
//     <div className={`xl:mt-12 grid xl:grid-row grid-col-reverse gap-10 overflow-hidden`}>
//       <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="grid-[0.75] bg-black-100 p-8 rounded-2xl">
//         <p className={styles.sectionSubText}>Get in touch </p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <section className="pt-5">
//           <p className="text-white font-medium text-4xl">{contacts.name}</p>
//           <div className="flex mt-4">
//             <img src={email} className="h-9 w-9 items-center" alt="" />
//             <span>
//               <p className="text-white font-medium pl-3 pt-[6px] hover:text-yellow-400">{contacts.email}</p>
//             </span>
//           </div>
//           <div className="flex mt-4">
//             <img src={phone} className="h-10 w-10 items-center " alt="" />
//             <span>
//               <p className="text-white font-medium pl-3 pt-[6px] hover:text-yellow-400">{contacts.phone}</p>
//             </span>
//           </div>
//           <div onClick={() => window.open(contacts.linkedin_link, "_blank")} className="flex mt-4  cursor-pointer">
//             <img src={linkedin} className="h-9 w-9 items-center  hover:cursor-pointer" alt="" />
//             <span>
//               <p className="text-white font-medium pl-3 pt-[6px]  hover:text-green-400  hover:underline ">{contacts.linkedin_link}</p>
//             </span>
//           </div>
//           <div onClick={() => window.open(contacts.github_link, "_blank")} className="flex mt-4 cursor-pointer">
//             <img src={github} className="h-9 w-9 items-center  hover:cursor-pointer" alt="" />
//             <p className="text-white font-medium pl-3 pt-[6px] hover:text-green-400 hover:underline ">{contacts.github_link}</p>
//           </div>
//         </section>
//       </motion.div>

//       <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:grid-1 xl:h-auto md:h-[550px] h-[350px]">
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

export default SectionWrapper(Contact, "contact");
