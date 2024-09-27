import React, { useState } from "react";
import { SettingsMaintenance } from "@app/types/schema";
import { useFetcher, useSearchParams } from "@remix-run/react";
import { Logo } from "@app/components/Logo";
import { Input } from "@app/theme/ui/input";
import { Button } from "@app/theme/ui/button";
import { Eye, EyeOff } from "lucide-react";

type MaintainceFormProps = SettingsMaintenance & {};

export const Maintenance: React.FC<MaintainceFormProps> = ({
  title,
  subtitle,
  description,
  password,
}) => {
  const fetcher = useFetcher();
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(false);

  return (
    <div className="relative h-[100dvh] max-h-[1000px] pb-12 lg:pb-16 2xl:pb-20 px-4 md:px-16 pt-12 lg:pt-16 2xl:pt-20">
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
        <Logo stacked />
        <h1 className="heading-2 mt-6 text-4xl lg:text-6xl text-center text-secondary">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-secondary md:px-10 lg:px-16 mb-8 w-full text-center">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col max-w-[80%] mx-auto">
          {description && (
            <p className="text-1.5xl text-bsi-white px-4 md:px-10 lg:px-16 w-full text-center">
              {description}
            </p>
          )}
          <div className="mt-20 mx-auto">
            <fetcher.Form action={"/password"} method="POST">
              <input type="hidden" name="originalPassword" value={password} />
              <input
                type="hidden"
                name="returnUrl"
                value={searchParams.get("continue") || ""}
              />
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col w-[30rem]">
                  <label htmlFor="password" className="text-bsi-white">
                    Password
                  </label>

                  <div className="relative">
                    <Input
                      name="password"
                      variant="inverted"
                      type={show ? "text" : "password"}
                    />
                    <Button
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      variant="icon"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                      }}
                    >
                      {show ? (
                        <EyeOff className="w-6 h-6" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </Button>
                  </div>
                </div>
                <Button variant="outlineSecondary" size="lg" type="submit">
                  Login
                </Button>
              </div>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
};
