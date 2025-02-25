"use client";
import Wrapper from "@/providers/Wrapper";
import { useState } from "react";
import DetailForm from "./components/detail-form";
import { Tab, Tabs } from "@heroui/react";
import ResumeCard from "./components/resume-card";
import ResumeAnalyze from "./components/resume-analyze";

const ApplicantDetail = () => {
  const [inputType, setInputType] = useState("text");

  return (
    <Wrapper>
      <div className="min-h-screen w-full p-6">
        <div className="max-w-4xl mx-auto pt-32">
          {/* HEADER SECTION */}
          <div className="text-center mb-10">
            <h1 className="font-ubuntuCondensed text-3xl md:text-4xl font-bold text-primary mb-3">
              Applicant Detail Form
            </h1>
            <p className="text-primary max-w-2xl mx-auto">
              Submit your details and resume to get AI-powered feedback on your
              application
            </p>
          </div>
          {/* HEADER SECTION */}

          <div className="flex flex-col gap-4 w-full">
            <Tabs
              aria-label="Tabs colors"
              color={"secondary"}
              radius="full"
              classNames={{
                tab: " text-zinc-800",
                tabList: "w-full",
              }}
            >
              <Tab
                key="Personal Information"
                title="Personal Information"
                className="text-zinc-800"
              >
                <DetailForm />
              </Tab>
              <Tab
                key="Upload Resume / Text"
                title="Upload Resume"
                className="text-zinc-800"
              >
                <ResumeCard />
              </Tab>
              <Tab
                key="Analyze Resume"
                title="Analyze Resume"
                className="text-zinc-800"
              >
                <ResumeAnalyze />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ApplicantDetail;
