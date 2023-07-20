import { FC } from "react";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <aside>
      <div className="px-4 py-6 h-full bg-primary-600 w-16 hover:w-32 transition-all delay-75 duration-100 ease-out">
        Side bar
      </div>
    </aside>
  );
};

export default SideBar;
