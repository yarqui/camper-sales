import { Suspense } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import Spinner from "../../components/Spinner/Spinner";
import PAGE_NAMES from "../../router/paths";
import Icon from "../../components/Icon/Icon";
import Container from "../../components/Container/Container";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoClick = () => {
    navigate("/", { state: { from: location } }); // TODO: do we need state?
  };

  return (
    <div className=" ml-auto mr-auto ">
      <header className="w-screen bg-yellow-50 px-16 py-2 shadow-sm shadow-slate-300">
        <div className="flex items-center">
          {/* Logo */}
          <div
            className="hover:cursor-pointer"
            onClick={onLogoClick}
            title="To Home page"
          >
            <Icon iconId="icon-logo" className="size-16 fill-carmineColor" />
          </div>

          {/* Navigation */}
          <div className="w-full place-items-center">
            <nav className="nav-bar">
              <NavLink
                className="px-4 py-2 transition-all duration-250"
                to={PAGE_NAMES.homepage}
                end
              >
                Home
              </NavLink>

              <NavLink
                className="px-4 py-2 transition-all duration-250"
                to={PAGE_NAMES.catalog}
              >
                Catalog
              </NavLink>

              <NavLink
                className="px-4 py-2 transition-all duration-250"
                to={PAGE_NAMES.favorites}
              >
                Favorites
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="flex items-center justify-center p-10">
            <Spinner className="size-32 opacity-75" />
          </div>
        }
      >
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </div>
  );
};

export default HeaderLayout;
