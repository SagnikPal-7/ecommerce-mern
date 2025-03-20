import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { GiLipstick } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="row">
          {/* */}
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoMdMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>MEN</Button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <Button>WOMEN</Button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <Button>ELECTRONICS</Button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <Button>BEAUTY</Button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <Button>KIDS</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* */}
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaHome /> &nbsp; HOME
                    <span className="ml-1">
                      <FaAngleDown />
                    </span>
                    &nbsp;
                  </Button>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <IoMan /> &nbsp; MEN
                  </Button>
                </Link>

                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ethenic Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>Formal Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiLargeDress />
                    &nbsp; WOMEN
                  </Button>
                </Link>

                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ethenic Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>Western Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaMobileAlt /> &nbsp; ELECTRONICS
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Smart-Watch</Button>
                  </Link>
                  <Link to="/">
                    <Button>Headphones</Button>
                  </Link>
                  <Link to="/">
                    <Button>Mobiles</Button>
                  </Link>
                  <Link to="/">
                    <Button>Laptop</Button>
                  </Link>
                  <Link to="/">
                    <Button>Desktop</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiLipstick /> &nbsp; BEAUTY
                  </Button>
                </Link>

                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Smart-Watch</Button>
                  </Link>
                  <Link to="/">
                    <Button>Headphones</Button>
                  </Link>
                  <Link to="/">
                    <Button>Mobiles</Button>
                  </Link>
                  <Link to="/">
                    <Button>Laptop</Button>
                  </Link>
                  <Link to="/">
                    <Button>Desktop</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaBaby /> &nbsp; KIDS
                  </Button>
                </Link>

                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ethenic Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>Formal Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>&nbsp; BLOG</Button>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>&nbsp; CONTACT US</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
