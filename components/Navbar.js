import React, { useState } from "react";
import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { useRouter } from "next/router";

function NavbarList(props) {
  return (
    <React.Fragment>
      <li className="nav__item">
        <a
          href={
            props.navLink__id === "/Jobs"
              ? props.navLink__id
              : props.navLink__id === "/applied"
              ? "/applied"
              : "/"
          }
          className="nav__link"
          onClick={() => {
            props.setIsNavToggle(!props.isNavToggle);
          }}
        >
          {/* <div className="nav__icon">
            {props.navLink__id === "#profile" && <UilEstate />}
            {props.navLink__id === "#talents" && <UilUser />}
            {props.navLink__id === "#jobs" && <UilFileAlt />}
            {props.navLink__id === "#skills" && <UilBriefcaseAlt />}
            {props.navLink__id === "#offers" && <UilScenery />}
            {props.navLink__id === "#settings" && <UilMessage />}
          </div> */}

          {props.navLink__name}
        </a>
      </li>
    </React.Fragment>
  );
}

function Navbar({ inView }) {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const color = "white";
  // const [isNavLink , setIsNavLink] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    console.log(!isNavToggle);
    setIsNavToggle(!isNavToggle);
  };

  //array__navList
  const navLink__name = [
    "PROFILE",
    "TALENTS",
    "FIND JOBS",
    "APPLIED",
    "OFFERS",
    "SETTINGS",
  ];
  const navLink__id = [
    "/",
    "/talents",
    "/Jobs",
    "/applied",
    "/offers",
    "/settings",
  ];

  const iteration = [0, 1, 2, 3, 4, 5];

  return (
    <header
      style={{
        backgroundColor:
          router.asPath === "/Jobs" || router.asPath === "/applied"
            ? "white"
            : "transparent",
      }}
      className="header"
      id="header"
    >
      <nav className="nav container">
        <div className="nav__logoparent">
          <img style={{ height: 20, width: 20 }} src={"./favicon.ico"} />
          <a href="#jai" className="nav__logo">
            AVIATE
          </a>
        </div>

        <div
          className={`nav__menu ${isNavToggle ? "show__menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {iteration.map((num) => {
              return (
                <NavbarList
                  key={navLink__name[num]}
                  navLink__id={navLink__id[num]}
                  navLink__name={navLink__name[num]}
                  setIsNavToggle={setIsNavToggle}
                  isNavToggle={isNavToggle}
                />
              );
            })}
          </ul>
          <UilTimes
            id="nav-close"
            className="nav__close"
            onClick={handleClick}
          />
        </div>
        {!isNavToggle && (
          <div className="nav__btns">
            <div className="nav__toggle" onClick={handleClick} id="nav-toggle">
              <UilApps />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
