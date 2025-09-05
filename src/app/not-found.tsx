"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/error"); // Redirect to your error page
  }, [router]);

  return null; // Or a loader/spinner if you like
};

export default NotFoundRedirect;
