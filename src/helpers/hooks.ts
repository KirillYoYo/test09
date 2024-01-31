import {useEffect, useState} from "react";

export const useGetBkg = () => {
  const [bkgStyle, setBkgStyle] = useState('linear-gradient(90deg, rgba(199,199,199,1) 0%, rgba(135,135,135,1) 35%, rgba(0,157,189,1) 100%)')

  const handleScroll = () => {
    setBkgStyle(`linear-gradient(90deg, rgba(${199 - window.scrollY / 2},199,199,1) 0%, rgba(135,135,${135 + window.scrollY / 10},1) 35%, rgba(${window.scrollY / 8},157,189,1) 100%)`)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return bkgStyle
}