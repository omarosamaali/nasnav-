import { Button, Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import image from "../../images/Group 356.png";
import imageOne from "../../images/Group 354.png";
import imageCartOne from "../../images/Group 333.png";
import imageCartTwo from "../../images/Group 331@2x.png";
import imageCartThree from "../../images/Group 329@2x.png";
import imageCartFour from "../../images/Group 335@2x.png";
import "./EcommerceSection.css";
import img360 from "../../images/Group 577.png";

export function EcommerceSection12() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [showCartDropdown, setShowCartDropdown] = useState(false); // State to show/hide cart dropdown

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const closeCartDropdown = () => {
    setShowCartDropdown(false);
  };

  const addToCart = () => {
    if (count > 0) {
      setCartItems([...cartItems, { id: Date.now(), quantity: count }]);
      setCount(0); // Reset the count after adding to cart
    }
  };

  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <section className="pt-10 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 lg:grid-cols-2 ">
        <div className="">
          <div>
  

            <div
              id="default-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="h-full hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-end 
        items-center w-full md:inset-0 max-h-full"
            >
              <div className="ml-auto flex relative w-full max-w-2xl max-h-full">
                <div className="w-[475px] ml-auto relative h-screen bg-white shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
                    <button
                      type="button"
                      className="text-gray-900 bg-transparent hover:text-gray-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-end items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <h1 className="text-center text-2xl text-secondary font-bold">
                    My Cart
                  </h1>
                  <div className="p-4 md:p-5 space-y-4">
                    <p className="text-xl leading-relaxed text-black font-bold">
                      Cart Summary
                    </p>
                    {cartItems.length === 0 ? (
                      <div className="bg-white border border-gray-200 rounded-lg shadow">
                        <p className="text-center text-gray-700 dark:text-gray-200">
                          Your cart is empty
                        </p>
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white border border-gray-200 rounded-lg shadow"
                        >
                          <a
                            href="#"
                            className="flex flex-col items-center md:flex-row md:max-w-xl p-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <img
                              className="object-cover w-full rounded-t-lg h-[126px] md:w-48 md:rounded-none md:rounded-s-lg"
                              src="https://moesportsnyc.com/cdn/shop/products/Blocked_Trefoil_Tee_Black_GR9740_21_model_540x.jpg?v=1634684696"
                              alt="asd"
                            />
                            <div className="flex flex-col justify-between ml-2 leading-normal">
                              <h5 className="mb-2 text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </h5>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                Quantity: {item.quantity}
                              </p>
                              <div className="flex flex-row justify-between items-center">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-secondary dark:text-white">
                                  9,999 <span className="text-sm">LE</span>
                                </h5>
                                <button
                                  className="bg-primary text-black font-bold text-xs mr-2 h-[24px] w-[80px] py-0.5 px-2 rounded-full"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))
                    )}
                    <p className="text-xl leading-relaxed text-black font-extrabold text-center">
                      Total:{" "}
                      {cartItems.reduce(
                        (total, item) => total + 9999 * item.quantity,
                        0
                      )}{" "}
                      LE
                    </p>
                  </div>
                  <div className="my-2 flex justify-center w-full items-center gap-3">
                    <Button
                      color="gray"
                      className="rounded-full bg-primary text-black h-[54px] w-[196px] text-lg"
                    >
                      Review Card
                    </Button>
                    <Button
                      color="gray"
                      className="rounded-full bg-secondary h-[54px] w-[196px] text-lg"
                      onClick={() => {
                        /* Handle checkout logic */
                      }}
                    >
                      Complete Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={toggleCartDropdown}
            className="bg-white ml-[15px] h-[45px] cursor-pointer mt-[15px] absolute rounded-lg "
          >
            <button  data-modal-target="default-modal"
                data-modal-toggle="default-modal" onClick={toggleCartDropdown}>
              <img
                src={img360}
                className="  rounded-lg w-[43px] h-[43px] p-1"
                alt=""
              />
          </button>
            </div>
          <img
            src="https://moesportsnyc.com/cdn/shop/products/Blocked_Trefoil_Tee_Black_GR9740_21_model_540x.jpg?v=1634684696"
            alt="pink blazer"
            className="responsive w-[568px] h-[568px] rounded-lg"
          />
          <div className="responsive flex mt-3 justify-between items-center">
            <svg
              className="w-10 font-normal h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>

            <div className="">
              <img src={imageCartOne} className=" h-[120px]" alt="" />
            </div>
            <div>
              <img src={imageCartTwo} className=" h-[120px]" alt="" />
            </div>
            <div>
              <img src={imageCartThree} className=" h-[120px]" alt="" />
            </div>
            <div>
              <img src={imageCartFour} className=" h-[120px]" alt="" />
            </div>
            <svg
              className="w-10 h-10 font-normal text-gray-800  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className="widthCart mt-10 border-t pt-3 lg:pt-0 lg:border-t-0 lg:mt-0">
          <Typography className="mb-4" variant="h3">
            <div className="mobile">

            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="../../../public/images/Group 745.svg"
                className="h-[47px] w-[60px]"
                alt="Flowbite Logo"
              />
            </a>
          </div>
          </Typography>

          <div className="mobile">
          <Typography
          
            className=" fontsizeCart mb-2 w-[395px] font-bold text-[#1D1D1B]"
            variant="h3"
          >

            Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.
          </Typography>
                        </div>

          <Typography className=" font-bold text-gray-400" variant="h5 ">
            <div className="text-centerMobile">
            Men
            </div>
          </Typography>

          <div className="rates my-5 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.9 of 5 (22 Rates)
            </Typography>
          </div>

          <div className="rates border-b pb-8 my-5 flex items-center gap-2">
            <Typography className="flex text-md">
              <div className="text-secondary">
                <span className="text-xl font-extrabold">9,999 </span>
                <span className="font-bold">LE</span>
              </div>
              <div className="text-gray-400 line-through">
                <span className="text-md ml-5">9,999 </span>
                <span className="">LE</span>
              </div>
              <div className="ml-5 bg-primary p-1 rounded h-[25px] flex items-center">
                30% Off
              </div>
            </Typography>
          </div>

          <Typography className="!mt-4 border-b pb-10">
            <h1 className="font-bold text-xl mobile">Size</h1>
            <div className="widthHere flex w-[71%] justify-between ">
              <div className="w-[64px] mt-5 h-[64px] rounded-full border cursor-pointer hover:bg-gray-300 transition-all duration-300 border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  Small
                </div>
              </div>
              <div className="w-[64px] mt-5 cursor-pointer hover:bg-gray-300 transition-all duration-300 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  Medium
                </div>
              </div>
              <div className="w-[64px] mt-5 cursor-pointer hover:bg-gray-300 transition-all duration-300 h-[64px] rounded-full border border-gray-300 bg-gray-300">
                <div className="text-black flex items-center justify-center h-full text-xs font-bold">
                  Large
                </div>
              </div>
              <div className="w-[64px] mt-5 cursor-pointer hover:bg-gray-300 transition-all duration-300 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  X Large
                </div>
              </div>
              <div className="w-[64px] mt-5 cursor-pointer hover:bg-gray-300 transition-all duration-300 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  XX Large
                </div>
              </div>
            </div>
          </Typography>

          <Typography className="!mt-4 border-b pb-10">
            <h1 className="font-bold text-xl mobile">Color</h1>
            <div className="editcards flex w-[71%]">
              <div className="mt-5 rounded-full border border-secondary">
                <img
                  src={imageOne}
                  className="rounded-full w-[80px] h-[80px]"
                  alt=""
                />
              </div>
              <div className="mt-5 ml-4 rounded-full border border-secondary">
                <img
                  src={image}
                  className="rounded-full w-[80px] h-[80px]"
                  alt="asdf"
                />
              </div>
            </div>
          </Typography>

          <Typography className="!mt-6">
            <h1 className="font-bold text-xl mobile">Quantity</h1>
            <div className="editbuttons">

            <button className="mt-4 flex justify-between items-center counter-button w-[252px] h-[48px] bg-gray-200 rounded-full">
              <span className="minus" onClick={decrement}>
                -
              </span>
              <span className="count text-secondary font-bold">{count}</span>
              <span className="plus" onClick={increment}>
                +
              </span>
            </button>
            </div>
            <div className="flex-derck my-5 flex w-full items-center gap-3">
              <Button
                color="gray"
                className="rounded-full bg-secondary h-[54px] w-[252px] text-lg"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
              <Button
                color="gray"
                className="rounded-full bg-primary text-black h-[54px] w-[252px] text-lg"
              >
                Pickup From Store
              </Button>
            </div>
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default EcommerceSection12;
