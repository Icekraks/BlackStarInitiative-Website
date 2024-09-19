import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Button } from "@app/theme/ui/button";
import { RootLoaderData } from "@app/types/global";
import { ObjectContact } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { Link, useRouteLoaderData } from "@remix-run/react";

export type ContactProps = ObjectContact & {
  sectionIndex: number;
};

const Contact: React.FC<ContactProps> = ({
  title,
  description,
  image,
  sectionIndex,
}) => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  const { social } = root;

  const currentGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good evening!";
    } else {
      return "Good night!";
    }
  };

  return (
    <div
      className={cn(
        "relative mb-12 lg:mb-16 2xl:mb-24 px-0 md:px-16",
        sectionIndex !== 0 ? "mt-12 lg:mt-16 2xl:mt-24" : ""
      )}
    >
      <div className="flex flex-col md:flex-row w-full items-center max-w-[1440px] mx-auto">
        <div>
          <h1 className="text-primary text-[2rem] lg:text-[5.5rem] xl:text-[8rem] font-bold mb-8 w-full">
            {currentGreeting()}
          </h1>

          <p className="w-full lg:w-[600px] text-primary md:px-10 lg:px-16 mb-8">
            {description}
          </p>
          <div className="flex flex-col w-full md:px-10 lg:px-16">
            {social.email && (
              <div>
                <span className="text-primary pr-1 font-bold">Email me:</span>
                <Button className="px-0" variant="link" size="sm" asChild>
                  <Link
                    to={`mailto:${social.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.email}
                  </Link>
                </Button>
              </div>
            )}
            <div className="flex items-center">
              <span className="text-primary pr-1 font-bold">Socials:</span>
              {social.linkedin && (
                <Button className="px-0 mr-1" variant="link" size="sm" asChild>
                  <Link to={social.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </Link>
                </Button>
              )}
              {social.github && (
                <Button className="px-0 mr-1" variant="link" size="sm" asChild>
                  <Link to={social.github} target="_blank" rel="noreferrer">
                    Github
                  </Link>
                </Button>
              )}
              {social.youtube && (
                <Button className="px-0" variant="link" size="sm" asChild>
                  <Link to={social.youtube} target="_blank" rel="noreferrer">
                    Youtube
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
