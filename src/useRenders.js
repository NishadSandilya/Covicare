import { useRef } from "react";

const useRenders = (comp) => {
    const compRef = useRef(1);
    console.log(`${comp} rendered ${compRef.current++} times`);
}

export default useRenders;