import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Textarea } from "@heroui/react";
import { Badge, UploadCloud } from "lucide-react";

const ResumeCard = () => {
  const inputType = "text";
  return (
    <div>
      <Card className="border-0 shadow-xl">
        <CardHeader className="font-ubuntu text-zinc-800 border-b pb-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-xl font-semibold"> Resume Submission</span>
            <Badge variant="flat" className="text-background text-primart" />
          </div>
        </CardHeader>
        <CardBody>
          <div className="space-y-5 pt-2">
            <div className="flex gap-4">
              <Button className="font-ubuntuCondensed text-zinc-900 flex-1">
                Text Input
              </Button>
              <Button className="font-ubuntuCondensed text-zinc-900 flex-1">
                Upload Resume
              </Button>
            </div>

            {!inputType === "text" ? (
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Resume Text
                </label>
                <Textarea
                  placeholder="Paste your resume content or write a summary of your experience..."
                  className="min-h-32"
                />
              </div>
            ) : (
              <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6  text-center">
                <div className="flex flex-col items-center ">
                  <Button
                    variant="outline"
                    className=" text-zinc-950 flex flex-col"
                  >
                    <UploadCloud />
                  </Button>
                  <p className="text-sm text-zinc-500">
                    PDF, DOC, DOCX (Max: 5MB)
                  </p>
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Key Skills
              </label>
              <Textarea
                placeholder="List your key skills (e.g., JavaScript, React, UI/UX Design, Project Management)"
                className="min-h-20"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResumeCard;
