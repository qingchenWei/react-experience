import React, { useEffect } from "react";
import "nprogress/nprogress.css";
import nprogress from "nprogress";

export default function Nprogress() {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  });

  return <React.Fragment></React.Fragment>;
}
