import React from "react";
import AppButton from "./AppButton";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center space-y-8 py-24"
    >
      <div className="text-5xl font-bold text-gray-200">Get in touch</div>
      <div className="text-center text-lg text-gray-500 lg:w-1/2">
        I'm looking for new job opportunity, so if you think i'm{" "}
        <span className="text-blue-300">THE ONE</span>, make sure to drop a
        message. Whether you have any query or want to have a conversation, my
        inbox is within your access
      </div>
      <div>
        <AppButton>
          <a href="mailto:sanzaikc@gmail.com">Say Hi</a>
        </AppButton>
      </div>
    </div>
  );
}
