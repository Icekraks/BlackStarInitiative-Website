import React, { useEffect, useState } from "react";
import { Button } from "@app/theme/ui/button";
import { ArrowBigUp } from "lucide-react";
import { cn } from "@app/utils/utils";

const ReturnTop: React.FC<React.PropsWithChildren> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Button
      className={cn(
        "fixed bottom-4 right-4 md:right-12 z-50 bg-primary text-white p-2 transition-all duration-300 ease-in-out",
        !scrolled && "opacity-0 pointer-events-none"
      )}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      aria-label="Return to top"
    >
      <ArrowBigUp size={24} />
    </Button>
  );
};

export default ReturnTop;
