import React from "react";
import ContentLoader from "react-content-loader";

export const MenuLoader = (props) => (
    <ContentLoader 
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="12" ry="12" width="327" height="450" />
    </ContentLoader>
)

export const ProductDetailLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={1000}
      height={400}
      viewBox="0 0 1000 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="105" y="50" rx="10" ry="10" width="300" height="200" /> 
      <rect x="450" y="50" rx="10" ry="10" width="130" height="40" /> 
      <rect x="450" y="100" rx="10" ry="10" width="101" height="25" /> 
      <rect x="450" y="140" rx="10" ry="10" width="101" height="25" /> 
      <rect x="450" y="190" rx="10" ry="10" width="280" height="60" />
    </ContentLoader>
)