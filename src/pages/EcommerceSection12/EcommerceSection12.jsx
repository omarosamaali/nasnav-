import React from "react";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";

export function EcommerceSection12() {
  return (
    <section className="py-10 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <img src="https://moesportsnyc.com/cdn/shop/products/Blocked_Trefoil_Tee_Black_GR9740_21_model_540x.jpg?v=1634684696" alt="pink blazer" 
        className="w-[568px] h-[568px] rounded-lg" />

        <div>

        <Typography className="mb-4" variant="h3">
        {/* Start Logo */}
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../../public/images/Group 745.svg" className="h-[47px] w-[60px]" alt="Flowbite Logo" />
        </a>
        {/* End Logo */}          
        </Typography>

          <Typography className="mb-2 font-bold text-[#1D1D1B]" variant="h3">
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </Typography>

          <Typography className="font-bold text-gray-400" variant="h5 ">Men</Typography>

          <div className="my-5 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
             4.9 of 5 (22 Rates)
            </Typography>
          </div>


          <div className="border-b pb-8 my-5 flex items-center gap-2">
            <Typography className="flex text-md">
             <div className="text-secondary"><span className=" text-xl font-extrabold">9,999 </span><span className="font-bold">LE</span></div>
             <div className="text-gray-400 line-through"><span className=" text-md ml-5">9,999 </span><span className="">LE</span></div>
             <div className="ml-5 bg-primary p-1 rounded h-[25px] flex items-center">30% Off</div>
            </Typography>
          </div>


          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </Typography>
          <Typography color="blue-gray" variant="h6">
            Color
          </Typography>
          <div className="my-8 mt-3 flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <Button color="gray" className="w-52">
              Add to Cart
            </Button>
            <IconButton color="gray" variant="text" className="shrink-0">
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EcommerceSection12;