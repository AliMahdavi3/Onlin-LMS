import React from "react";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import { Route, Routes } from "react-router-dom";
import Course from "./shop/course/Course";
import Books from "./shop/books/Books";
import Articles from "./shop/alteicles/Articles";
import Pudcast from "./shop/pudcast/Pudcast";
import Translate from "./shop/translate/Translate";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />}>
        <Route path="" element={<Course />} />
        <Route path="books" element={<Books />} />
        <Route path="articles" element={<Articles />} />
        <Route path="pudcast" element={<Pudcast />} />
        <Route path="translate" element={<Translate />} />
      </Route>
    </Routes>
  );
};

export default Content;
