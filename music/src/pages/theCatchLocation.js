import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TheCatchLocation = (par) => {
  const location = useLocation();

  const returnLocation = useCallback(() => {
    par(location.pathname);
  }, [location.pathname, par]);
  useEffect(() => {
    returnLocation();
  }, [returnLocation]);
  return { location: location.pathname };
};

export default TheCatchLocation;
