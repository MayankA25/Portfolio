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
    loading ? <Loader/> : <div className="h-full p-5 relative m-auto my-8 w-[70%]">{children}</div>
  )
}
