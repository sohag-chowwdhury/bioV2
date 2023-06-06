import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/aboutStyle.css";
import "../css/effect.css";


export default function OtherProject() {
  const project_item = [
    {
      id: 0,
      title: "Send a PDF by postal mail",
      description:
        "This project involves integrating Stripe payment gateway and Lob API to enable sending a PDF document by postal mail. Users will be able to upload their PDF document, enter the recipient's address, and make payment through Stripe. Once payment is confirmed, Lob API will be used to print the PDF document and send it via postal mail to the recipient's address. This project can be used by businesses or individuals who need to send important documents to recipients who prefer physical copies.",
      git: "",
      live: "https://elated-shannon-f46b33.netlify.app/",
      video: "https://www.youtube.com/watch?v=7cS1rJn3vHc&t=18s",
      tech: ["Vue", "Firebase", "vuetify", "Lob Api"],
    },

    {
      id: 1,
      title: "AlTA",
      description:
        "AlTA is a project aimed at creating and managing events with a focus on Covid protection. The project will allow event organizers to set rules and guidelines to ensure the safety of attendees. With AlTA, administrators can easily communicate guidelines to event-goers, track attendance, and manage resources such as PPE and sanitation supplies. By prioritizing Covid protection, AlTA provides a safer and more comfortable environment for attendees, which is crucial in the current climate.",
      git: "",
      live: "https://alta-events.web.app/",
      video: "https://www.youtube.com/watch?v=Nlfd2HpAcVw",
      tech: ["React", "Bootstrap", "Firebase", "React"],
    },

    {
      id: 2,
      title: "Yakkart",
      description:
        "Yakkart is a cutting-edge platform designed for buying and selling used products. Using the Google Maps API, Yakkart enables users to locate nearby sellers and products with ease. Additionally, the platform features an intuitive chat system, allowing users to communicate with one another in real-time. Yakkart's location-based filter makes searching for products in specific areas simple and straightforward. With Yakkart, users can conveniently buy and sell used items while enjoying a seamless, user-friendly experience.",
      git: "",
      live: "https://alta-events.web.apps/",
      video: "https://www.youtube.com/watch?v=QrZor5PwSDY&t=14s",
      tech: ["Vue", "Vuex", "Bootstrap", "Firebase"],
    },

    {
      id: 3,
      title: "Personal Website V1",
      description:
        "The personal portfolio project is a web application created using the Vue.js framework, Vuetify UI library, and CSS animations. It showcases the skills, experience, and projects of a user in an interactive and visually appealing manner. The website includes a home page, about me section, skills, projects, and contact form. The design and layout are optimized for both desktop and mobile devices.",
      git: "",
      live: "https://sohag-chowwdhury.github.io/info/",
      video: "https://www.youtube.com/watch?v=twwxyEiYxrA",
      tech: ["Vue", "Vuex", "vuetify", "Animation"],
    },

    {
      id: 4,
      title: "Beet Bitle",
      description:
        "Beet is a revolutionary new project that allows you to earn cryptocurrency by playing friendly matches with your friends during the UEFA Champions League and World Cup tournaments. Simply create a game, invite your friends, and start playing. The more you win, the more cryptocurrency you earn. Join Beet and turn your love of football into a profitable hobby.",
      git: "",
      live: "",
      video: "https://www.youtube.com/watch?v=fsL1B8Xis5s",
      tech: ["Vue", "Express", "Boostrap", "Animation"],
    },

    {
      id: 5,
      title: "E-Commerce",
      description:
        "This project involves creating an e-commerce website with Stripe as the payment gateway. The website will allow customers to browse products, add them to their cart, and make secure payments using Stripe. The website will also feature a user-friendly interface with easy navigation and a responsive design. The goal of this project is to provide a seamless online shopping experience for customers while ensuring the security of their financial information through Stripe's payment processing system.",
      git: "",
      live: "",
      video: "",
      tech: ["React", "Node js", "MongoDB", "Bootstrap"],
    },

    {
      id: 6,
      title: "Social Upliftment Society",
      description:
        "SUS is a non-governmental organization (NGO) focused on sustainable development and social justice initiatives. Our mission is to empower marginalized communities through education, advocacy, and resource allocation. We believe in the importance of creating long-term solutions to systemic issues, such as poverty, inequality, and environmental degradation. By working closely with local leaders and community members, we aim to foster sustainable development and promote equitable access to basic human needs, including education, healthcare, and clean water. Join us in our efforts to create a better world for all.",
      git: "",
      live: "http://sus-sep.org/",
      video: "https://www.youtube.com/watch?v=990fEr15FkY&t=6s",
      tech: ["Vue", "Vuex", "vuetify", "Firebase"],
    },

    {
      id: 7,
      title: "Wear House",
      description:
        "This project is a fully dynamic website that utilizes Vuetify, Vue, and Animation CSS Firebase. The website allows users to purchase clothing items and dynamically modify the content. The user interface is highly customizable, and users can modify the design elements such as color, font, and layout. The project also integrates Firebase for data storage and management, ensuring a seamless user experience.",
      git: "",
      live: "https://www.outwear-bd.com/",
      video: "https://www.youtube.com/watch?v=kc0guP7-cwg",
      tech: ["Vue", "Vuex", "vuetify", "Firebase"],
    },

    {
      id: 8,
      title: "Entry Mart",
      description:
        '"Entry Mart" is a progressive web application (PWA) built with Bootstrap, Vuetify, Vue.js, and CSS animations. The app is designed to be a one-stop-shop for online shoppers, featuring a user-friendly interface and a wide range of products. The app is powered by Firebase, ensuring fast and reliable performance. With "Entry Mart," users can enjoy a seamless shopping experience from the comfort of their homes.',
      git: "",
      live: "",
      video: "https://www.youtube.com/watch?v=FUOo6x1y6QY&t=11s",
      tech: ["Vue", "VuexFire", "Bootstrap", "Firebase"],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 mt-10 lg:mt-20   lg:grid-cols-8 sm:gap-4">
        <div className="lg:col-start-2 mt-10 lg:mt-20 mx-0 sm:mx-4 lg:col-end-8">
          <h3 className="text-2xl font-sans font-semibold  dark:text-gray-700 text-gray-300 text-center sm:text-3xl">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 mx-2 sm:mx-0 sm:grid-cols-2 mt-10 md:grid-cols-3 dark:gap-1 gap-4">
            {project_item.map((item, index) => (
              <div
                key={item.id}
                data-aos-duration="1000"
                data-aos={`${
                  index % 2 === 0 ? "zoom-out-right" : "zoom-out-left"
                }`}
                className="dark:bg-gray-200 bg-gray-800 gap-4 bg__all hover:bg-zinc-800 content-end  transform transition duration-500 hover:scale-105	 rounded  w-full"
              >
                <div className="grid grid-cols-2 mt-10  gap-40 sm:gap-48 md:gap-24 xl:gap-40 lg:48">
                  <div>
                    
                    <a>
                      
                      <FontAwesomeIcon
                        className="text-green-400 mx-2 p-3"
                        size="2xl"
                        icon={faFolder}
                      />
                    </a>
                  </div>
                  <div className="mt-4">
                    {item.video !== "" ? (
                      <a
                        href={`${item.video}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          disabled
                          class="cursor-not-allowed rounded-full dark:bg-gray-200 bg-gray-800 text-white shadow-sm"
                        >
                          <img src="https://img.icons8.com/material-rounded/28/12B886/video.png" />
                        </button>
                      </a>
                    ) : (
                      ""
                    )}
                    {item.live !== "" ? (
                      <a href={`${item.live}`} target="_blank" rel="noreferrer">
                        <button
                          type="button"
                          className="rounded-full ml-3 dark:bg-gray-200 bg-gray-800  text-white shadow-sm hover:dark:bg-gray-200 bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <img src="https://img.icons8.com/ios-filled/28/12B886/open-in-popup.png" />
                        </button>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h1 className="text-xl font-sans font-semibold hover:text-green-300  dark:text-gray-700 text-gray-300 sm:text-2xl px-5">
                  {item.title}
                </h1>
                <p className="mt-6  font-sans text-sm sm:text-sm  leading-8 font-semibold px-5 hover:text-gray-300 dark:text-gray-700 text-gray-300">
                  {item.description}
                </p>
                <div className="px-5">
                  {item.tech.map((itemItect) => {
                    return (
                      <button
                        type="button"
                        className="rounded bg-transparent pr-2 text-end py-2.5 font-sans my-2 text-xs font-semibold text-gray-500 shadow-sm hover:dark:bg-gray-200 bg-gray-800"
                      >
                        {itemItect}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
