import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  BeakerIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { contact } from "./contact_info";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    window.location.replace(
      `mailto:${contact.myMail}?subject=${formData.subject}&body=hi,my name is ${formData.name} and  ${formData.message}`
    );

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute  uppercase tracking-[10px] md:tracking-[20px] text-gray-500 top-12 md:text-lg text-sm  xl:text-xl md:top-20">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-1 xl:space-y-1  xl:mt-24  ">
        <div className="flex flex-col space-y-2 xl:space-y-1 py-1 items-start mx-auto ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-primary-color h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg xl:text-2xl">{contact.phone}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-primary-color h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg xl:text-2xl">{contact.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-primary-color h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg xl:text-2xl">{contact.address}</p>
          </div>
        </div>
        <div className="w-[300px] md:w-[500px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-1 xl:space-y-2 xl:w-fit  mx-auto "
          >
            <div className="flex space-x-1 max-w-[300px] md:max-w-[500px] items-center ">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-[148px] md:w-[498px]"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput  w-[148px] md:w-[498px]"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput "
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput "
            />
            <button
              type="submit"
              className="bg-primary-color  py-5 xl:px-10 rounded-md text-white font-bold  "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
