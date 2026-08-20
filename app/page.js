"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://www.airbnb.com/rooms/36699311";
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      <p>Taking you to Dreamy in Savannah…</p>
    </main>
  );
}
