import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardWithLink() {
  return (
    <div className="flex justify-center">
      <Card className="mt-6 w-96">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-mybrown"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>

          <Typography variant="h5" color="blue-gray" className="mb-2">
            About Me
          </Typography>
          <Typography>
            Currently a rising junior at The Ohio State University studying
            Computer Science with a minor in German.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Connect with Me
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                stroke="#000000"
                className="h-4 w-4"
              >
                <path
                  id="XMLID_24_"
                  d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5 C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
                ></path>
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
export default CardWithLink;
