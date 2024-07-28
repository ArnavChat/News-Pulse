import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom"; // Rename 'Routes' to 'ReactRoutes'
import News from "./News";
import Login from "./Login";
import Signup from "./Signup";

const AppRoutes = () => {
  return (
    <ReactRoutes> {/* Use the renamed component */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<News key="general" category="general" />} />
      <Route path="/Entertainment" element={<News key="entertainment" category="entertainment" />} />
      <Route path="/Technology" element={<News key="technology" category="technology" />} />
      <Route path="/Sports" element={<News key="sports" category="sports" />} />
      <Route path="/Business" element={<News key="business" category="business" />} />
      <Route path="/Health" element={<News key="health" category="health" />} />
      <Route path="/Science" element={<News key="science" category="science" />} />
    </ReactRoutes>
  );
};

export default AppRoutes;