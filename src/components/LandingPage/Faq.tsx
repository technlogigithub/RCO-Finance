import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";
import Container from "../shared/Container";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "01. How can I buy with connect wallet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "02. How can I buy with a login?",
      answer:
        'You can participate in the presale by clicking the "Participate In Presale" button and following the instructions.',
    },
    {
      question: "03. What security measure does your platform offer?",
      answer:
        "Yes, Wallit IQ uses the latest encryption technology to ensure your transactions are safe and secure.",
    },
    {
      question: "04. What security measure does your platform offer?",
      answer:
        "Yes, Wallit IQ uses the latest encryption technology to ensure your transactions are safe and secure.",
    },
  ];
  return (
    <Container>
      <div id="faq">
        <h2 className="text-secondary/50 max-lg:text-center">
          Frequently Asked Question
        </h2>
        <div className="text-white mt-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b py-7 border-black-light px-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="3000"
            >
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h4>{faq.question}</h4>
                <span className="transform transition-transform duration-300">
                  {activeIndex === index ? (
                    <MinusIcon className="h-6 w-6" />
                  ) : (
                    <PlusIcon className="h-6 w-6" />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-6 text-white max-w-3xl">
                    <p>{faq.answer}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
