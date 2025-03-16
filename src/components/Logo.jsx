import { useState, useEffect } from "react";

const Logo = () => {
  const [logo, setLogo] = useState("./icon/logo_mountain_green.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setLogo("./icon/logo_green.png");
      } else {
        setLogo("./icon/logo_mountain_green.png");
      }
    };

    handleResize(); // 初始化時檢查
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <img src={logo} alt="logo"/>;
};

export default Logo;
