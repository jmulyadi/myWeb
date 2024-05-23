import React from "react";
import { Button } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard() {
  return (
    <div className="flex justify-center" id="home">
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="../../public/ProPic.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Josh Mulyadi
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            OSU Student / Software Engineering Intern
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProfileCard;
