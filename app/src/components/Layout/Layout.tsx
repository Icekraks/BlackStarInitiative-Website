import { Header } from "@app/components/Header/Header";
import { useRef } from "react";
import ReturnTop from "@app/components/ReturnTop";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col lg:flex-row">
      <Header />
      <main
        className="w-full lg:w-[calc(100%-5rem)] bg-[#fdf6e3] h-full min-h-[100dvh]"
        ref={mainRef}
      >
        {children}
        <ReturnTop />
      </main>
    </div>
  );
};
