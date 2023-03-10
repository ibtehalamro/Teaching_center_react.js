import { Link, useLocation } from "react-router-dom";
import React from "react";
import { studentUrls } from "../../../Constants/URLConstants/StudentUrls";
import { CourseUrls } from "../../../Constants/URLConstants/CourseUrls";
import { SectionUrls } from "../../../Constants/URLConstants/SectionUrls";
import { TeacherUrls } from "../../../Constants/URLConstants/TeacherUrls";
import { PaymentUrls } from "../../../Constants/URLConstants/PaymentUrls";

export default function SideNavbar() {
  const location = useLocation();
  function getLinkCLassName(link) {
    return ["link", location.pathname.includes (link) ? "active" : ""].join(" ");
  }
  const navBarLinks = [
    //TODO : change links here to constants
    { link: studentUrls.ROUTER, name: "Student" },
    { link: CourseUrls.ROUTER, name: "Courses" },
    { link: SectionUrls.ROUTER, name: "Section" },
    { link: TeacherUrls.ROUTER, name: "Teacher" },
    { link: PaymentUrls.ROUTER, name: "Payment" },
  ];

  return (
    <nav className="sideNavbar-container">
      <div className="sideNav__links">
        {navBarLinks.map(({ link, name }) => (
          <Link key={name} to={link} className={getLinkCLassName(link)}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
