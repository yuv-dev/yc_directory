import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      {/* Header */}
      <Header />
      {/* Children */}
      {children}
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default layout;
