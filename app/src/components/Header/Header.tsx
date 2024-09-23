import React, { useEffect, useState } from "react";

import { useMedia } from "@app/hooks/useMedia";
import { HeaderDesktop } from "@app/components/Header/HeaderDesktop";
import { HeaderMobile } from "@app/components/Header/HeaderMobile";

export const Header: React.FC = () => {
  const { isMd } = useMedia();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMd) {
      setIsMenuOpen(false);
    }
  }, [isMd]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 left-0 z-10">
      <HeaderDesktop isScrolled={isScrolled} />
      <HeaderMobile
        isScrolled={isScrolled}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
    </header>
  );
};
