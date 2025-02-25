import { Card, CardBody, CardHeader } from "@heroui/card";
import { AlertCircle } from "lucide-react";
import React from "react";

const ResumeAnalyze = () => {
    const analysis = {
        missingSkills: [
          "Knowledge of Docker containerization",
          "Experience with GraphQL",
          "Cloud deployment experience"
        ],
        improvements: [
          "Consider adding specific metrics for your project achievements",
          "Include more details about team collaboration",
          "Add certifications if available"
        ]
      };
  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className="font-semibold mb-2 text-2xl font-ubuntu text-zinc-800">Areas for Improvement</h1>
        </CardHeader>
        <CardBody className="space-y-2">
          <div>
            <h3 className="font-semibold mb-3 font-ubuntuCondensed text-zinc-800">Missing Skills/Experience</h3>
            <ul className="space-y-2">
              {analysis.missingSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertCircle className="text-red-500 mt-1" size={16} />
                  <span className="text-zinc-900">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Suggested Improvements</h3>
            <ul className="space-y-2">
              {analysis.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertCircle className="text-blue-500 mt-1" size={16} />
                  <span className="text-zinc-800">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResumeAnalyze;
