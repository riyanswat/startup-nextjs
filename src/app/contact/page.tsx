// import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Rayan Trading",
  description: "This is Contact Page for Rayan Trading",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Page"
        description="Feel free to reach out."
      /> */}
      <div className="pt-40"></div>

      <Contact />
    </>
  );
};

export default ContactPage;
