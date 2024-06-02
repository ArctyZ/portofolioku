function Contact() {
  return (
    <div
      id="contact"
      className="max-w-[1040px] md:mt-56 mx-auto w-full h-screen"
    >
      <h1 className="md:text-5xl text-4xl font-bold p-2 m-2 text-center">
        Contact
      </h1>
      <form action="https://getform.io/f/nadowpwb" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full ">
          <div className="flex flex-col py-2">
            <label className="md-text-2xl text-xl py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="md-text-2xl text-xl py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="phone"
              id=""
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="md-text-2xl text-xl  py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="md-text-2xl text-xl p-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-400"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="md-text-2xl text-xl  p-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-gray-400"
              rows="10"
              name="Message"
            ></textarea>
          </div>
        </div>
        <button className="bg-gray-800 text-white mt-4 w-full p-4 rounded-lg hover:bg-gray-800/70">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
