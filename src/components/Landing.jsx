import React from "react";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCards";
import { features } from "@/constants/features-cards-datat";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="min-h-screen   flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="md:mt-0 mt-32 text-center max-w-2xl transform transition-all duration-700 opacity-100 translate-y-0">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-poiret uppercase">
          EVE-Radar
        </h1>
        <p className="mt-4 text-xl font-poiret font-bold text-gray-300">
          Extract, match, and evaluate candidates with AI-driven precision.
          Powered by RAG and Google Gemini AI.
        </p>
        <CustomButton className="mt-10 text-zinc-900">
          <Link href={'/applicant-detail'}>Get Started</Link>
        </CustomButton>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="transform transition-all duration-500 opacity-100 translate-y-0"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <CustomCard>
              <h3 className="text-xl font-semibold text-primary text-zinc-800 font-ubuntuCondensed">
                {feature.title}
              </h3>
              <div className="w-full h-2 border-b-1  border-zinc-400" />
              <p className="font-poiret text-xl font-bold mt-2">
                {feature.description}
              </p>
            </CustomCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
