function Contact() {
  const review = [
    {
      name: "Rory Silva",
      Country: "Ioty,COO,USA",
      description:
        "Outstanding work.Sohag is very capable and professional. The coding was also fairly decent, and he was really responsive. I would suggest him for any  Vue js Project.",
      title: "CEO",
      img: "https://media.licdn.com/dms/image/D4E03AQH4j_0M5Dx6MA/profile-displayphoto-shrink_200_200/0/1672533416969?e=1689206400&v=beta&t=ztzRrUdMLw3_rNji-9LDj4VVjUxVvBu7ig-iy7CKxZE",
    },
    {
      name: "Sebastian",
      Country: "Qproco, CEO ,Poland",
      description:
        "I enjoyed collaborating with Tanvir. With the first project milestone, he went above and beyond my expectations. And when I asked him if we might alter the project's scope, he agreed to do so for a fair price increase. I'm forward to collaborate with him once more soon.",
      title: "CEO",
      img: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
    },
    {
      name: "Amar",
      Country: "Resappy, Co-founder, Saudi Arabia",
      description:
        "Mr. Chowdhury, have delivered work as per requirements. His communication is prompt, concise, and to the point. He asks the right questions to ensure that he meets the expectations. He stick to his time commitment, and the quality of work great. Great to work with.",
      img: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1236602f60a41afe35180ceb8f0d7197-1515514721321/61cb91b8-54b3-4599-99ab-1d812970b7e2.jpg",
    },
    {
      name: "Steve",
      Country: "Digi Menu Box,Co-founder, Netherland",
      description:
        "Great ,worked fast and with high-quality results. Would definitely work with him again in the future.",
      img: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ec5711864b8553c09af20da97371f9ae-1575732653657/1fc63b67-3454-40b3-99cb-3d38dc72ec4f.jpg",
    },
    {
      name: "Cooper",
      Country: "USA",
      description:
        "His work was elegant swift and helped me think of new ways to improve my code",
      img: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man4-512.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 mt-12 mx-0 sm:mx-3  sm:grid-cols-8 gap-4">
        <div className="lg:col-start-2 mt-4 px-5 sm:px-12 lg:col-end-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-[50%] ml-[40%] sm:ml-[30%] mt-2 border-t-2 border-gray-700" />
            </div>
            <div className="relative flex justify-start">
              <h1 className="text-2xl font-oswald font-bold  text-gray-400 sm:text-4xl">
                {" "}
                Testimonials{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="sm:col-start-1 mt-4 px-0 md:px-12 sm:col-end-12 lg:col-start-2 lg:col-end-8">
          {review.map((item, index) => (
            <div
              className="bg-gray-800 shadow-xl hover:bg-slate-800 p-2 hover:my-1"
              data-aos-duration="1500"
              data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
              key={item.description}
            >
              <div className="grid grid-cols-12">
                <div className=" col-start-1 col-end-3 md:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-3 xl:col-start-1  xl:col-end-2 2xl:col-start-1 2xl:col-end-2">
                  <img
                    className="inline-block h-10 w-10 sm:h-14 sm:w-14 ml-0 sm:ml-5 rounded-full mt-2"
                    src={`${item.img}`}
                    alt=""
                  />
                </div>

                <div className="col-start-3 col-end-12 sm:col-start-3 sm:col-end-12 md:col-start-3 md:col-end-12  xl:col-start-2 xl:col-end-12  2xl:col-start-2 2xl:col-end-12">
                  <p className="text-start text-sm sm:text-md text-green-300 mt-2 ml-0 xl:ml-3 2xl:ml-0 px-0 font-oswald font-bold">
                    {item.name}
                  </p>
                  <p className="text-start text-sm sm:text-md text-gray-400 font-xs mt-2 ml-0 xl:ml-3 2xl:ml-0 px-0 font-oswald font-bold">
                    {item.Country}
                  </p>
                </div>
              </div>
              <p className="text-start text-gray-400 mt-0 ml-0  text-sm sm:text-md sm:ml-5 p-5 font-sans font-semibold">
                {" "}
                <span className="text-green-400 text-xs sm:text-md">
                  "
                </span>{" "}
                {item.description}{" "}
              </p>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-52 border-t-2 mx-10 my-2 border-gray-700" />
                </div>
                <div className="relative flex justify-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-8">
        <div className="mt-10 col-start-3 col-end-7 " id="Contact">
          <h1 className="text-4xl font-oswald font-bold text-center my-10 text-gray-400 sm:text-5xl">
            <span className="text-green-400">04.</span> Get In Touch{" "}
          </h1>
          <p className="p-10 text-center   text-gray-400 text-xl mt-2 px-10 sm:px-5 font-sans font-bold">
            Currently I’m looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <div className="flex items-center justify-start gap-x-6">
            <a
              className="mailto mx-auto  flot-center"
              href="mailto:sohag02.c@gmail.com"
            >
              <button
                type="button"
                className="rounded px-14 my-4 py-4 hover:border-b-4 hover:border-green-500/100  bg-gray-800 text-sm font-semibold text-green-300 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-700"
              >
                Say Hello !
              </button>
            </a>
          </div>
        </div>
        <div className="mt-10 top-[10%] col-start-3 col-end-7 ">
          <p className="mt-10 text-gray-500 text-sm font-sans mb-2 font-semibold text-center">
            {" "}
            Design & build by <span> Sohag Chowdhury</span>.
          </p>
          <p className="mt-2 text-green-400 text-xs font-sans mb-2 font-semibold text-center">
            {" "}
            WhatsApp : <span className="text-gray-500"> (+880)-1781559196</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
