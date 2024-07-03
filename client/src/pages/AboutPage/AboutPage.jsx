const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 flex  items-center justify-center ">
      <div className="max-w-2xl mx-aito p-3 text-center">
        <div className="">
          <h1 className="text-3xl font-semibold text-center my-7">
            About Pixel Pulse
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p className="">
              Pixel Pulse is a community-driven blog platform that focuses on
              sharing knowledge, tips, and inspiration about various programming
              languages, frameworks, and technologies. We invite you to join our
              community and share your thoughts, experiences, and knowledge with
              others.
            </p>
            <p className="">
              If you have any questions, need assistance, or have suggestions
              for improving our platform, feel free to reach out to the owner at
              <a
                href="mailto:saidularefin8@gmail.com"
                className="text-blue-500 pl-1"
              >
                saidularefin8@gmail.com
              </a>
              .
            </p>
            <p className="">
              We hope you enjoy our platform and find it helpful in your journey
              to become a better developer. If you have any other questions or
              need further assistance, please don't hesitate to reach out to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
