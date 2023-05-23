import {BeakerIcon, BookOpenIcon, AcademicCapIcon} from "@heroicons/react/solid";
import { Component, FunctionComponent } from "react";


const SideBar = () => {
  return (
    <div className="fixed top-1/3 left-0 w-16 m-0 flex flex-col
      bg-slate-800 text-orange-50 border shadow-lg rounded-2xl">
        <SideBarIcon icon={<BeakerIcon/>} />
        <SideBarIcon icon={<BookOpenIcon/>} />
        <SideBarIcon icon={<AcademicCapIcon/>} />
    </div>
  );
};

interface LayoutProps {
  icon: JSX.Element;
}

const SideBarIcon: React.FC<LayoutProps>  = ({icon}) => (
  <div className="sidebar-icon">
  {icon}
  </div>
);

export default SideBar;


