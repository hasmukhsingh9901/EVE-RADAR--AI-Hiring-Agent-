import { Card, CardBody, CardHeader } from "@heroui/card";
import { Badge, Button, Form, Input } from "@heroui/react";

const FormControl = () => {
  return (
    <CardBody className="pt-6">
      <Form className="space-y-6">
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Full Name
          </label>
          <Input placeholder="Enter your Full Name" className="w-full" />
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Email
          </label>
          <Input placeholder="Enter your Email" className="w-full" />
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            LinkedIN URL
          </label>
          <Input placeholder="Enter your LinkedIN URL" className="w-full" />
        </div>
        <div className="pt-2 w-full">
          <Button type="submit" className="w-full bg-[#dda15e] text-white ">
            Continue to Resume
          </Button>
        </div>
      </Form>
    </CardBody>
  );
};

const DetailForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-full">
        <Card className="border-0 shadow-xl">
          <CardHeader className="font-ubuntu text-zinc-800 border-b pb-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-xl font-semibold">
                Personal Information
              </span>
              <Badge variant="flat" className="text-background text-primart" />
            </div>
          </CardHeader>

          <FormControl />
        </Card>
      </div>
    </div>
  );
};

export default DetailForm;
