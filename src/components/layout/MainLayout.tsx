import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop.tsx";

const MainLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster
        theme={"light"}
        position="top-right"
        expand={false}
        richColors={true}
      />
      <div className={"font-display"}>
        <Navbar />
        <main className={" flex flex-col pb-10 items-center justify-start"}>
          <Outlet /> {/* Page content will render here */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;