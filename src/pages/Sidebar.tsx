import {BeakerIcon, BookOpenIcon, AcademicCapIcon} from "@heroicons/react/solid";
import { Component, FunctionComponent, MouseEvent, useState } from "react";
import BeakerPage from "./beaker";
import BookPage from "./book";
import CapPage from "./cap";


interface SideBarProps {
  handleIconClick: (iconName: string) => void;
}



const SideBar: React.FC<SideBarProps> = ({ handleIconClick }) => {
  const [currentPage, setCurrentPage] = useState("");

  const handleClick = (iconName: string) => {
    setCurrentPage(iconName);
    handleIconClick(iconName);
  
  };

 return (
    <div className="fixed top-1/3 left-0 w-16 m-0 flex flex-col
      bg-slate-800 text-orange-50 border shadow-lg rounded-2xl">
        <SideBarIcon icon={<BeakerIcon/>} name="beaker" onClick={() => handleClick("beaker")}/>
        <SideBarIcon icon={<BookOpenIcon/>} name ="book" onClick={() => handleClick("book")}/>
        <SideBarIcon icon={<AcademicCapIcon/>} name = "cap" onClick={() => handleClick("cap")}/>
      
    </div>
  );
};

interface LayoutProps {
  icon: JSX.Element;
  name: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SideBarIcon: React.FC<LayoutProps>  = ({icon,name, onClick}) => (
  <div className="sidebar-icon" data-icon={name} onClick={onClick}>
  {icon}
  </div>
);

export const renderPage = (currentPage: string) => {
  switch (currentPage) {
    case "beaker":
      return <BeakerPage/>;
    case "book":
      return <BookPage/>;
    case "cap":
      return <CapPage/>;
    default:
      return <div>Page not found</div>;
    }
  };
 

export default SideBar;


