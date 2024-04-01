import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TheCatchLocation = (par) => {
  const location = useLocation();
  const returnLocation = useCallback(() => {
    par(location.pathname);
  }, []);
  useEffect(() => {
    returnLocation();
  }, [returnLocation]);
};

export default TheCatchLocation;
