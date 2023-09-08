/* eslint-disable react/prop-types */

import Sidebar from "../Components/Shared/SideBar/SideBar";


function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="max-w-screen flex-1 mx-auto">{children}</main>
    </div>
  );
}

export default RootLayout;