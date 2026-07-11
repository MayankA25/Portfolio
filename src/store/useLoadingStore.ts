import { create } from "zustand";

interface LoadingState{
    loading: boolean;
    setLoading: (val: boolean)=>void;
}
const useLoadingStore = create<LoadingState>((set, get)=>({
    loading: true,

    setLoading: (val: boolean)=>{
        set({ loading: val });
    }
}))

export default useLoadingStore;