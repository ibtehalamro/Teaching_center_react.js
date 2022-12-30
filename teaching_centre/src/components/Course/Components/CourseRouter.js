import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useResolvedPath } from "react-router";
import { CourseUrls } from "../../../Constants/URLConstants/CourseUrls";
import CourseHome from "./CourseHome";
import CourseForm from "./CourseForm";
import CoursesList from "./CoursesList";

const CourseRouter = () => {
  const pathname = useResolvedPath("").pathname;
  return (
    <div className="course-wrapper">
      <div className="buttons-container">
        <NavLink className="cross-fade-button" to={`${pathname}${CourseUrls.HOME}`}>Home</NavLink>
        <NavLink className="cross-fade-button" to={`${pathname}${CourseUrls.NEW_COURSE_FORM}`}>New Course</NavLink>
        <NavLink className="cross-fade-button" to={`${pathname}${CourseUrls.COURSE_LIST}`}>Courses List</NavLink>
      </div>

      <Routes>
        <Route exact path={`${CourseUrls.HOME}`} element={<CourseHome />} />
        <Route exact path={`${CourseUrls.NEW_COURSE_FORM}`} element={<CourseForm />} />
        <Route exact path={`${CourseUrls.COURSE_LIST}`} element={<CoursesList />} />
      </Routes>
    </div>
  );
}

export default CourseRouter;