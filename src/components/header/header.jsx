// import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import "./headerStyle.css";

// const useStyles = makeStyles(() => ({
//   nav: {
//     boxShadow: "none",
//     color: "yellow",
//     paddingTop: "20px",
//     position: "fixed",
//     right: "0",
//     left: "0",
//     top: "0",
//     minHeight: "53px",
//     transition: "all 0.3s ease 0s",
//     display: "flex",
//     alignItems: "center",
//   },
//   nav1: {
//     boxShadow: "none",
//     color: "white",
//     backgroundColor: "black",
//     paddingTop: "20px",
//     position: "fixed",
//     right: "0",
//     left: "0",
//     top: "0",
//     minHeight: "53px",
//     transition: "all 0.3s ease 0s",
//     display: "flex",
//     alignItems: "center",
//   },
//   container: {
//     width: "100%",
//     display: "flex",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginLeft: "20%",
//     marginRight: "20%",
//   },
//   aTag: {
//     textTransform: "uppercase",
//     fontSize: "20px",
//     paddingTop: "0.5rem",
//     lineHeight: "1.625rem"
//   },
//   menu: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     gap: "25px",
//     listStyle: "none"
//   },
//   wrapper: {
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/98f3d2f9678857fb9c9cfaf1/Untitled-1.png')`,
//     height: "205vh",
//     minHeight: "100vh",
//     overflow: "hidden",
//     // backgroundRepeat: "no-repeat",
//     justifyContent: "center",
//     alignItems: "center",

//   },
//   imagesTag: {
//     zIndex: 0,
//     height: "50%",
//     position: "absolute",
//   },
//   image: {
//     position: "absolute",
//     backgroundSize: "cover",
//     backgroundPosition: "50%",
//     width: "100%",
//     height: "100%",
//     zIndex: "-1"
//   }
// }));


function HeaderComponent() {
  // const classes = useStyles();

  const [header, setHeader] = useState("header");

  const listenScrollEvent = e => {
    console.log(window.scrollY);
    if (window.scrollY < 750) {
      return setHeader("navbar navbar-absolute navbar-transparent navbar-expand-lg");
    } else if (window.scrollY > 40) {
      return setHeader("navbar navbar-absolute navbar-expand-lg");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    // <div>
    //   <div className="main">

    //     {/* <nav className={classes.nav}>
    //       <div className={classes.container}>
    //         <div className={classes.buttonMenu}>
    //           <a className={classes.aTag}>Sattva Tech</a>
    //         </div>
    //         <div className={classes.menuItems}>
    //           <ul className={classes.menu}>
    //             <li><a>Home</a></li>
    //             <li><a>About Us</a></li>
    //             <li><a>Services</a></li>
    //             <li><a>Contact Us</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav> */}

    //     {/* NAVIGATION BAR */}

    //     <nav className={scrollHeader}>
    //       <div className="container">
    //         <div className="navbar-translate">
    //           {/* <div className="navbar-brand">
    //             Sattva
    //           </div> */}
    //         </div>
    //         <div className="collapse">
    //           <ul id="ceva" className="navbar-nav">
    //             <li className="nav-item">
    //               <div className="nav-link">
    //                 <p>Home</p>
    //               </div>
    //             </li>
    //             <li className="nav-item">
    //               <div className="nav-link">
    //                 <p>About Us</p>
    //               </div>
    //             </li>
    //             <li className="nav-item">
    //               <div className="nav-link">
    //                 <p>Services</p>
    //               </div>
    //             </li>
    //             <li className="dropdown nav-item">
    //               <div className="nav-link">
    //                 <p>Contact Us</p>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>

    //     <div className="images-tag">
    //       <div className="textCenter">
    //         Sattva Tech
    //       </div>
    //       <div className="button-more">
    //         Learn More
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div>
      <nav className={header}>
        <div className="container">
          {/* <div className="navbar-translate">
            <a id="navbar-brand" className="navbar-brand" href="#/">Now Ui Kit PRO React</a>
            <button aria-expanded="false" className="navbar-toggler">
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div> */}
          <div className="collapse navbar-collapse">
            <ul id="ceva" className="ml-auto navbar-nav">
              <li className="dropdown nav-item">
                <a href="#" id="navbarDropdownMenuLink1" className="nav-link">
                  <p>Home</p>
                </a>
                {/* <div tabindex="-1" role="menu" aria-labelledby="navbarDropdownMenuLink1" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                  <a tabindex="0" role="menuitem" className="dropdown-item" href="#/">
                    <i className="now-ui-icons design_image"></i>Presentation</a>
                  <a tabindex="0" role="menuitem" className="dropdown-item" href="#/index">
                    <i className="now-ui-icons business_chart-pie-36"></i>All components</a>
                  <a tabindex="0" role="menuitem" className="dropdown-item" href="#/documentation/introduction">
                    <i className="now-ui-icons design_bullet-list-67"></i>Documentation</a>
                </div> */}
              </li>
              <li className="dropdown nav-item">
                <a href="#about-us" id="navbarDropdownMenuLink" className="nav-link">
                  <p>About Us</p>
                </a>
              </li>

              <li className="dropdown nav-item">
                <a href="#services" id="navbarDropdownMenuLink" className="nav-link">
                  <p>Services</p>
                </a>
              </li>

              <li className="dropdown nav-item">
                <a href="#contact-us" id="navbarDropdownMenuLink" className="nav-link">
                  <p>Contact Us</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div className="page-header page-header-small">
          <div className="page-header-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhdHR2YSUyMHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')`, backgroundAttachment: "fixed", objectFit: "cover" }}></div>
          <div className="content-center">
            <div className="container">
              <h1 className="title">Sattva Tech</h1>
              <button className="button">
                <span>
                Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeaderComponent;