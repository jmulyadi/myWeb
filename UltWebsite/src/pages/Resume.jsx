import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const handleDownload = () => {
  const url = "../../junior_res.pdf";
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Josh_Mulyadi_Resume.pdf";
  anchor.click();
  document.body.removeChild(anchor);
};

export function Resume() {
  return (
    <motion.div>
      <Card className="w-96 h-100" id="resume">
        <CardHeader shadow={false} floated={false} className="h-80">
          <img src="../../res.jpg" alt="card-image" className="h-l w-full " />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              Resume
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleDownload}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Download
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
export default Resume;
