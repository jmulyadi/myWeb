import {
  CardBody,
  CardFooter,
  Button,
  Collapse,
  Card,
  Typography,
} from "@material-tailwind/react";
export function UJ() {
  return (
    <img
      className="absolute top-2 right-20 h-20 w-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="../../Project_Pics/UJ.png"
      alt="UJ"
    />
  );
}
export function OSU() {
  return (
    <img
      className="absolute top-2 right-20 h-20 w-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="../../Project_Pics/osu.webp"
      alt="OSU"
    />
  );
}
export function Flight() {
  return (
    <img
      className="absolute top-2 right-20 h-20 w-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="../../Project_Pics/flight.png"
      alt="flight"
    />
  );
}
import React from "react";

export function CollapseDefault() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={toggleOpen}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
export function SimpleCard() {
  return (
    <div>
      <Card className="mt-6 w-96 relative">
        <CardBody>
          <UJ />
          <div className="py-5"></div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Ultrajaya Internship
          </Typography>
          <Typography>
            A beverage company located in Indonesia. Here I worked to create
            different visuals to help better understand how products are doing
            in differnt parts of the country.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
      <Card className="mt-6 w-96 relative">
        <CardBody>
          <OSU />
          <div className="py-5"></div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Java TA
          </Typography>
          <Typography>
            Assisted students in he highest undergrad-level Java course.
            Teaching them the principles of Object-Oriented-Programing along
            with best coding practices.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
      <Card className="mt-6 w-96 relative">
        <CardBody>
          <Flight />
          <div className="py-5"></div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            DevOps Intern
          </Typography>
          <Typography>
            A company that creates Flight Similators and Trainings pilots. I
            helped deploy, maintain, and scale these applications.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
    </div>
  );
}
export default SimpleCard;
