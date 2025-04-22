import { useEffect } from "react";
import { useLocation, useMatches } from "react-router-dom";

const DynamicTitle = () => {
  const pathLocation = useLocation();
  const pathMatches = useMatches();

  useEffect(() => {
    console.log("ROUTE MATCHES:", pathMatches);
    const currentPage = pathMatches.find((match) => match.handle?.title);

    if (currentPage) {
      document.title = currentPage.handle.title;
    } else {
      document.title = "MyApp";
    }
  }, [pathLocation, pathMatches]);

  return null;
};

export default DynamicTitle;
