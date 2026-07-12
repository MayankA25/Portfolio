"use client";
import useLoadingStore from "@/store/useLoadingStore";
import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import ScrollTracker from "../ScrollTracker/ScrollTracker";

export default function MainComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, setLoading } = useLoadingStore();
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(
          "https://github-contributions-api.jogruber.de/v4/MayankA25",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setLoading]);
  return loading ? (
    <Loader />
  ) : (
    <div className="relative m-auto my-8 h-full w-full overflow-x-hidden px-5 md:px-10 lg:w-[85%]">
      {children}
      <ScrollTracker/>
    </div>
  );
}
