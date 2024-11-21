import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@pages/Home/Home";
import ListSpots from "@pages/ListSpots";
import NotFound from "@pages/NotFound/NotFound";
import Spot from "@pages/Spot";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list" element={<ListSpots />} />
    <Route path="/:name" element={<Spot />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);
