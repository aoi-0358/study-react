import { useEffect, } from 'react'



export const useBglightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
     };
  }, []);
}