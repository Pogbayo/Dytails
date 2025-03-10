"use client";
import React, { useState } from "react";
import HomepageDivider from "./HomepageDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      opened: false,
      question: " What types of real estate investments do you offer?",
      answer:
        "We specialize in strategic acquisitions, development, and management of commercial, residential, and mixed-use properties to maximize value and long-term returns.",
    },
    {
      id: 2,
      opened: false,
      question: "How does Dytails Investments support manufacturing ventures?",
      answer:
        "We invest in innovative manufacturing companies that drive economic growth and technological advancements, helping them scale efficiently..",
    },
    {
      id: 3,
      opened: false,
      question: "What is meant by 'Production Investments'?",
      answer:
        "Our production investments focus on high-potential companies across various sectors, fostering industrial growth and sustainability.",
    },
    {
      id: 4,
      opened: false,
      question: " How do you contribute to the service industry?",
      answer:
        "We partner with service-oriented businesses that enhance quality of life and contribute to societal well-being. We also provide logistics, procurement, and seamless operational solutions.",
    },
    {
      id: 5,
      opened: false,
      question:
        "What makes Dytails Investments different from other investment companies?",
      answer:
        "Our unique approach combines integrity, innovation, sustainability, excellence, and collaboration, ensuring long-term success for our partners and stakeholders.",
    },
  ]);

  const handleClick = (id: number) => {
    const newFaqs = faqs.map((faq) => {
      if (faq.id === id) {
        return { ...faq, opened: !faq.opened };
      } else return faq;
    });
    setFaqs(newFaqs);
  };

  return (
    <div className="flex flex-col items-center">
      <HomepageDivider>
        <h1 className=" text-white">FAQs</h1>
        <p className=" text-white">Need some answers?</p>
      </HomepageDivider>
      <div className="mt-4 mb-5 lg:w-1/2 max-w-[800px]">
        {faqs.map((faq) => (
          <div
            className="flex flex-col m-6 bg-royalblue rounded-xl min-h-24 p-6 text-left"
            key={faq.id}
            onClick={() => handleClick(faq.id)}
          >
            <div className="flex items-center justify-between">
              <h3 className="w-5/6">{faq.question}</h3>
              <button className="">
                <FontAwesomeIcon
                  icon={!faq.opened ? faPlus : faMinus}
                  className="text-teal h-10"
                />
              </button>
            </div>

            {faq.opened && (
              <div className="mt-6 w-9/12">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
