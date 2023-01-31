import { useState, useCallback } from 'react'



 export const useConter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
    setCount((prevCount) => prevCount + 1);
    }
   }, [count]);
   const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
   }, []);
   return {count, isShow, handleClick, handleDisplay};
}