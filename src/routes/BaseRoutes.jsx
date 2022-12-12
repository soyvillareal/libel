import React from "react";
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
const Home = React.lazy(() => import("../scenes/Home/Home"));
const Contact = React.lazy(() => import("../scenes/Contact/Contact"));

export const routes = {
  HOME: "/",
  CONTACT: "/contact",
};

const BaseRoutes = () => {
  const location = useLocation();
  const history = useHistory();
  const background = location.state?.background;

  React.useEffect(() => {
    return () => {
      if (history.action !== "POP") {
        window.scrollTo(0, 0);
      }
    };
  }, [location, history]);

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.CONTACT} component={Contact} />
      </Switch>
    </>
  );
};

export default BaseRoutes;
