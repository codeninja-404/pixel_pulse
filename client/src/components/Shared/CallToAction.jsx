import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn about MongoDB?</h2>
        <p className="text-gray-500 my-2">
          Checkout theses documentation to learn more about MongoDB
          documentation.
        </p>
        <Button
          className="rounded-tl-3xl rounded-br-3xl"
          gradientDuoTone="pinkToOrange"
        >
          <a
            href="https://www.mongodb.com/solutions/developer-data-platform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://www.thestreet.com/.image/c_limit,cs_srgb,fl_progressive,q_auto:good,w_700/MTgzNjA2MzE3NjgyNzk1NTY2/mongodb.jpg"
          alt=""
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default CallToAction;
