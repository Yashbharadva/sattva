// import { makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

  const [scrollHeader, setScrollHeader1] = useState(false)

  const listenScrollEvent = () => {
    console.log(window.scrollY)
    if (window.scrollY > 220) {
      return setScrollHeader1("fixed-top");
    } else if (window.scrollY < 220) {
      return setScrollHeader1("fixed-top2");
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
      <nav class="navbar-absolute navbar-transparent navbar navbar-expand-lg">
        <div class={scrollHeader}>
          {/* <div class="navbar-translate">
            <a id="navbar-brand" class="navbar-brand" href="#/">Now Ui Kit PRO React</a>
            <button aria-expanded="false" class="navbar-toggler">
              <span class="navbar-toggler-bar top-bar"></span>
              <span class="navbar-toggler-bar middle-bar"></span>
              <span class="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div> */}
          <div class="collapse navbar-collapse">
            <ul id="ceva" class="ml-auto navbar-nav">
              <li class="dropdown nav-item">
                <a href="#" id="navbarDropdownMenuLink1" class="nav-link">
                  <p>Home</p>
                </a>
                {/* <div tabindex="-1" role="menu" aria-labelledby="navbarDropdownMenuLink1" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                  <a tabindex="0" role="menuitem" class="dropdown-item" href="#/">
                    <i class="now-ui-icons design_image"></i>Presentation</a>
                  <a tabindex="0" role="menuitem" class="dropdown-item" href="#/index">
                    <i class="now-ui-icons business_chart-pie-36"></i>All components</a>
                  <a tabindex="0" role="menuitem" class="dropdown-item" href="#/documentation/introduction">
                    <i class="now-ui-icons design_bullet-list-67"></i>Documentation</a>
                </div> */}
              </li>
              <li class="dropdown nav-item">
                <a href="#" id="navbarDropdownMenuLink" class="nav-link">
                  <p>About Us</p>
                </a>
              </li>

              <li class="dropdown nav-item">
                <a href="#" id="navbarDropdownMenuLink" class="nav-link">
                  <p>Services</p>
                </a>
              </li>

              <li class="dropdown nav-item">
                <a href="#" id="navbarDropdownMenuLink" class="nav-link">
                  <p>Contact Us</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div class="page-header page-header-small">
          <div class="page-header-image" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/004/204/495/large_2x/conceptual-workspace-laptop-computer-and-coffee-cup-note-book-with-white-flowers-placed-on-the-table-on-pastel-background-yellow-free-photo.jpg')`, backgroundAttachment: "fixed" }}></div>
          <div class="content-center">
            <div class="container">
              <h1 class="title">Sattva Tech</h1>
              <div class="text-center">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeaderComponent;