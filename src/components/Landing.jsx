import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="mt-10  text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Hero Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block font-poiret ">Discover Your</span>
            <span className="text-primary">Career Potential</span>
          </h1>

          <p className="text-lg md:text-xl font-ubuntu text-primary">
            SkillFinder Pro analyzes your resume, identifies missing skills, and
            guides your professional growth with AI-powered insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-primary text-background  font-ubuntuCondensed"
            >
              <Link href={'/applicant-detail'}>Analyze My Resume</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-primary hover:text-background font-ubuntuCondensed"
            >
              How It Works
            </Button>
          </div>

          <p className="text-lg text-primary font-poiret">
            Join 10,000+ professionals enhancing their career prospects
          </p>
        </div>

        {/* Hero Image/Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Main illustration - dashboard mockup */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-[#ffe6a7] p-3 flex items-center">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-2 text-xs text-background font-ubuntuCondensed">
                  SkillFinder Pro Analysis
                </div>
              </div>

              <div className="p-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  </div>
                  <div className="h-16 bg-gray-200 rounded mt-4"></div>
                  <div className="flex justify-between">
                    <div className="h-8 w-24 bg-[#a68a64] rounded"></div>
                    <div className="h-8 w-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-yellow-400 rounded-lg -rotate-6 shadow-lg z-0"></div>
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-[#c2c5aa] rounded-lg rotate-12 shadow-lg z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
