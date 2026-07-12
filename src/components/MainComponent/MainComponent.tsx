'use client';
import useLoadingStore from '@/store/useLoadingStore'
import React, { useEffect } from 'react'
import Loader from '../Loader/Loader';

export default function MainComponent({ children }: { children: React.ReactNode }) {
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
  return (
    loading ? <Loader/> : <div className="h-full px-5 md:px-10 relative m-auto my-8 w-full lg:w-[85%] overflow-x-hidden">{children}</div>
  )
}
