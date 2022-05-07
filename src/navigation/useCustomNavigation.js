import React from "react";
import Main from "../pages/main";
import Products from "../pages/products/index";
import DetailPage from "../pages/detailPage/index";
import ProductCart from "../pages/productCart";
import Category from "../pages/category";
import Group from "../pages/group";
import SetInfo from "../pages/setInfo";
import Product from "../component/product";
export const useCustomRoutes = () => {
  return [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/register",
      element: <div>mehemt</div>,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/detail",
      element: <DetailPage />,
    },
    {
      path: "/productCart",
      element: <ProductCart />,
    },
    {
      path: "/category-edit",
      element: <Category />,
    },
    {
      path: "/category-edit/:category_id/group-edit",
      element: <Group />,
    },
    {
      path: "/category-edit/:category_id/group-edit/:group_id/set-info-edit",
      element: <SetInfo />,
    },
    {
      path: "/panel/product",
      element: <Product />,
    },
    {
      path: "*",
      element: <div>Page Not Found</div>,
    },
  ];
};
