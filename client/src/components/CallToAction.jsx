import { Button } from "flowbite-react";
import portfolioPic from "../assets/portfolio.png";
import React from "react";

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col items-center gap-3">
        <h2 className="text-3xl font-bold">Want to know more about Me?</h2>
        <p className="text-lg text-gray-500 my-2">
          Checkout my portfolio with having various projects
        </p>

        <a href="https://hassan.vercel.app" target="_blank" rel="noopener noreferrer">
          <Button className="rounded-lg bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500">
            Click here
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1 ">
        <img src={portfolioPic} className="rounded-lg" />
      </div>
    </div>
  );
}

export default CallToAction;
