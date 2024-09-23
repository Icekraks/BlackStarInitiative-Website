import { Header } from "@app/components/Header/Header";
import { useRef } from "react";
import ReturnTop from "@app/components/ReturnTop";

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
    </div>
  );
};
