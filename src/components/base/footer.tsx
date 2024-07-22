import { useState } from "react";

const Footer = () => {
  const [date] = useState(() => new Date().getFullYear());

  return (
    <footer className="py-5 bg-primary text-white">
      <div className="container text-center font-medium uppercase text-sm">
        &copy;{date} testlix
      </div>
    </footer>
  );
};

export default Footer;
