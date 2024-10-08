import { FC, ReactNode } from "react";

interface HeaderProps {
  image: string;
  alt: string;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, alt, children }) => {
  return (
    <header>
      {children}
      <img src={image} alt={alt} className="w-3/4 mx-auto h-auto mt-4" />
    </header>
  );
};
export default Header;
