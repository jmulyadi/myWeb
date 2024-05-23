import { Typography } from "@material-tailwind/react";
import React from "react";

const FooterCard = () => {
  return (
    <div>
      <div className="bg-gray-900 p-6" id="contact">
        <div className="flex flex-col md:flex-row gap-8 md:gap-40 justify-center items-center">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-4 items-center">
            <Typography className="px-0 md:px-12" variant="h4" color="white">
              Contact
            </Typography>
            <a href="mailto:jmulyadi1@gmail.com" className="cursor-pointer">
              <Typography
                className="py-4 hover:text-blue-500 hover:underline text-center md:text-left"
                color="white"
              >
                Email: jmulyadi1@gmail.com
              </Typography>
            </a>
            <a href="https://www.linkedin.com/in/josh-mulyadi/">
              <Typography
                color="white"
                className="hover:text-blue-500 hover:underline text-center md:text-left"
              >
                Linkedin: linkedin.com/in/josh-mulyadi/
              </Typography>
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Typography className="px-0 md:px-16" variant="h3" color="white">
              Socials
            </Typography>
            <div className="flex space-x-4 py-4 justify-center md:justify-start">
              <a
                className="hover:cursor-pointer transform hover:-translate-y-2 transition duration-300"
                href="https://github.com/"
              >
                <svg
                  fill="gray"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
              <a
                className="hover:cursor-pointer transform hover:-translate-y-2 transition duration-300"
                href="https://www.linkedin.com/in/josh-mulyadi/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="gray"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
              <a
                className="hover:cursor-pointer transform hover:-translate-y-2 transition duration-300"
                href="https://www.facebook.com/profile.php?id=100083940182440&mibextid=LQQJ4d"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
              <a
                className="hover:cursor-pointer transform hover:-translate-y-2 transition duration-300"
                href="https://www.youtube.com/channel/UCWzXtazvtlnCXAvUSg0a8bw"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-black py-4">
        <Typography
          color="white"
          className="font-bold text-center md:text-left"
        >
          ©&nbsp;
        </Typography>
        <Typography color="white" className="text-center md:text-left">
          Made with ♥ by
        </Typography>
        <Typography
          className="font-bold text-center md:text-left"
          color="white"
          id="bottom"
        >
          &nbsp;Josh Mulyadi
        </Typography>
      </div>
    </div>
  );
};

export default FooterCard;
