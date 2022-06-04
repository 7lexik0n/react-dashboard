import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="dark:text-gray-200 text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
