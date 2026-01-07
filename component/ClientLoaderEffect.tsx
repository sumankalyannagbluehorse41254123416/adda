"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const ClientLoaderEffect: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <Image
          src={"/assest/images/loading.gif"}
          height={180}
          width={150}
          alt="loader"
        />
      </div>
    );

  return <>{children}</>;
};

export default ClientLoaderEffect;
