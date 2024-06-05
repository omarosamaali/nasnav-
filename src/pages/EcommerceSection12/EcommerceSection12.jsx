import { Button, Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import image from "../../images/Group 356.png";
import imageOne from "../../images/Group 354.png";
import imageCartOne from '../../images/Group 333.png';
import imageCartTwo from '../../images/Group 331@2x.png';
import imageCartThree from '../../images/Group 329@2x.png';
import imageCartFour from '../../images/Group 335@2x.png';
import "./EcommerceSection.css";

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
     
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <div className="">
 <div className="cart-icon-container w-[50px]">
        <div className="cart-icon" onClick={toggleCartDropdown}>
          <span className="cart-badge">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white mt-[-80px] z-50 bg-black hover:bg-black absolute focus:ring-4 focus:outline-none  font-medium 
  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-black
"
              type="button"
              onClick={() => {
                setShowCartDropdown(!showCartDropdown); // Toggle cart dropdown
              }}
            >
              {cartItemCount}
            </button>
          </span>

          <i className="fas fa-shopping-cart"></i>
        </div>

        {showCartDropdown && (
          <div className="cart-dropdown absolute mt-[-80px]">
            {cartItems.length === 0 ? (
              <div className="z-10 mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Your cart is empty
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div className="z-10 mt-12 w-[210px] py-2 px-3 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                          <span>Item with quantity: {item.quantity}</span>
                          <button
                            className="text-red-200 mr-2 mt-1 bg-red-800 p-1 rounded-lg"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

        <img
          src="https://moesportsnyc.com/cdn/shop/products/Blocked_Trefoil_Tee_Black_GR9740_21_model_540x.jpg?v=1634684696"
          alt="pink blazer"
          className="w-[568px] h-[568px] rounded-lg"
          />
          <div className="flex mt-3 justify-between items-center">
<svg className="w-10 font-normal h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
</svg>

            <div><img src={imageCartOne} className=" h-[120px]" alt="" /></div>
            <div><img src={imageCartTwo} className=" h-[120px]" alt="" /></div>
            <div><img src={imageCartThree} className=" h-[120px]" alt="" /></div>
            <div><img src={imageCartFour} className=" h-[120px]" alt="" /></div>
            <svg className="w-10 h-10 font-normal text-gray-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
</svg>

          </div>
          </div>

        <div>
          <Typography className="mb-4" variant="h3">
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
          </Typography>

          <Typography
            className="mb-2 w-[395px] font-bold text-[#1D1D1B]"
            variant="h3"
          >
            Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.
          </Typography>

          <Typography className="font-bold text-gray-400" variant="h5 ">
            Men
          </Typography>

          <div className="my-5 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.9 of 5 (22 Rates)
            </Typography>
          </div>

          <div className="border-b pb-8 my-5 flex items-center gap-2">
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
            <h1 className="font-bold text-xl">Size</h1>
            <div className="flex w-[90%] justify-between">
              <div className="w-[64px] mt-5 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  Small
                </div>
              </div>
              <div className="w-[64px] mt-5 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  Medium
                </div>
              </div>
              <div className="w-[64px] mt-5 h-[64px] rounded-full border border-gray-300 bg-gray-300">
                <div className="text-black flex items-center justify-center h-full text-xs font-bold">
                  Large
                </div>
              </div>
              <div className="w-[64px] mt-5 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  X Large
                </div>
              </div>
              <div className="w-[64px] mt-5 h-[64px] rounded-full border border-gray-300">
                <div className="text-secondary flex items-center justify-center h-full text-xs font-bold">
                  XX Large
                </div>
              </div>
            </div>
          </Typography>

          <Typography className="!mt-4 border-b pb-10">
            <h1 className="font-bold text-xl">Color</h1>
            <div className="flex w-[90%]">
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
            <h1 className="font-bold text-xl">Quantity</h1>
            <button className="mt-4 flex justify-between items-center counter-button w-[252px] h-[48px] bg-gray-200 rounded-full">
              <span className="minus" onClick={decrement}>
                -
              </span>
              <span className="count text-secondary font-bold">{count}</span>
              <span className="plus" onClick={increment}>
                +
              </span>
            </button>
            <div className="my-5 flex w-full items-center gap-3">
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
        

{/* <Button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</Button>

<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</div> */}


        </div>
      </div>
    </section>
  );
}

export default EcommerceSection12;
