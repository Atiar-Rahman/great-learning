import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  let breadcrumbPath = "";

  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.length > 0 && " / "}
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbPath}>
            {formatName(name)}
          </span>
        ) : (
          <span key={breadcrumbPath}>
            <Link to={breadcrumbPath}>{formatName(name)}</Link> /
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
