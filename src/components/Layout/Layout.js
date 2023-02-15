import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-6 py-6 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
