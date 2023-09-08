/* eslint-disable react/prop-types */
import SideBar from "../Components/SideBar/SideBar";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <main className="max-w-screen flex-1 mx-auto">{children}</main>
    </div>
  );
}

export default RootLayout;