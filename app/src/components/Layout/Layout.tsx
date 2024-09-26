import { Header } from "@app/components/Header/Header";
import { useEffect, useRef } from "react";
import ReturnTop from "@app/components/ReturnTop";
import Footer from "@app/components/Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="w-full h-full bg-bsi-black" ref={mainRef}>
        {children}
        <ReturnTop />
      </main>
      <Footer />
    </div>
  );
};
