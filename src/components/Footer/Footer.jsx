import React from "react";
import "./Footer.css";
import footerLogo from "../../images/Group 1431.svg";
import facebook from "../../images/Group 1432.svg";
import linedin from "../../images/Group 1435.svg";
import insta from "../../images/Group 1433.svg";
import twiteer from "../../images/Group 1434.svg";
import nasnavfooter from "../../images/Group 1439.svg";
import Rectangle from "../../images/Rectangle 586.png";
import visa from "../../images/Group 1437.png";
import payment from "../../images/Group 1438.png";
export function Footer() {
  return (
    <>
      <footer className="px-20 bg-[#3C3C3B] text-white text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div className="container max-w-[1390px] mx-auto py-10 text-center md:text-left">
          <div className="edit-grid grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="bordernone border-r mr-[19px] border-[#5F5F5F] ">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                  <img
                    src="../..//images/Group 1436.svg"
                    classNameName="220px"
                    alt="asd"
                  />
                </span>
              </h6>

              <div className="editwidth w-[494px]">
                <div className="pb-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat .
                </div>
                <div classNameName="pb-5">
                  Ut wisi enim ad minim veniam, quis nostrud exeroi tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat n ulla. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam
                </div>

                <div className="mt-5">
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat volutpat. Ut wisi enim ad minim veniam, quis
                </div>
              </div>
            </div>

            <div className="">
              <label htmlFor="search">
                Subscribe to our newsletter
              </label>

              <form class="mt-3">
                <label
                  for="default-search"
                  class="my-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative ">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="search"
                    id="default-search"
                    class="placeholder:text-secondary block w-full p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500
         focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Mail"
                    required
                  />
                  <button
                    type="submit"
                    class="flex items-center justify-center mb-[-5px] text-black absolute end-2.5 bottom-2.5 bg-primary  
         font-medium rounded-full w-[120px] text-sm px-4 py-2 "
                  >
                    Subscribe
                    <img className="ms-2" src={footerLogo} alt="" />
                  </button>
                </div>
              </form>

              <div className="dblock  flex justify-between mt-8">
                <div className="">
                  <p className="mb-4">
                    <a href="#!">About Us</a>
                  </p>
                  <p className="mb-4">
                    <a href="#!">Contact Us</a>
                  </p>
                  <p className="mb-4">
                    <a href="#!">Track Order</a>
                  </p>
                  <p className="mb-4">
                    <a href="#!">Terms & Conditions</a>
                  </p>
                  <p className="mb-4">
                    <a href="#!">Privacy Policy</a>
                  </p>
                  <p className="mb-4">
                    <a href="#!">Sell With Us</a>
                  </p>
                  <p className="mb-4">
                    <a href="#!">Shipping And Returns</a>
                  </p>
                </div>


                <div className="border-left bordernonetwo">
                  <div className="mb-4 flex justify-between items-center">
                    <div ><img src={facebook} alt=""/></div>
                    <div className=" ms-2">/YESHTERY</div>
                  </div>
                  <div className="mb-4 flex justify-between items-center">
                    <div ><img src={linedin} alt=""/></div>
                    <div className=" ms-2">/YESHTERY</div>
                  </div>
                  <div className="mb-4 flex justify-between items-center">
                    <div ><img src={insta} alt=""/></div>
                    <div className=" ms-2">/YESHTERY</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div ><img src={twiteer} alt=""/></div>
                    <div className=" ms-2">/YESHTERY</div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="dblock container max-w-[1390px] mx-auto border-t py-4 flex justify-between border-[#5F5F5F]">

        <div className="">© 2021 yeshtery, all rights reserved.
          </div>


          <div className="flex justhere">
          <img  className="ms-2" src={Rectangle} alt="" />
          <img className="ms-2"  src={visa} alt="" />
          <img className="ms-2"  src={payment} alt="" />
          </div>


          <div className="flex justify-center items-center">Powered By<img src={nasnavfooter} alt="" /></div>

        </div>

      </footer>
    </>
  );
}

export default Footer;
