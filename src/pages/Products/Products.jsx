import React,{ useState, useEffect } from "react";
import { Button, Rating, Typography } from "@material-tailwind/react";
import { getProducts } from '../../services/api';

import img360 from "../../images/Group 577.png";
import "./Products.css";
export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto pt-5 sm:pt-10 md:pt-16 px-5 sm:px-10 md:px-16">
        <div className="mb-5">
          <div className="pb-2 pr-2">
            <div className="text-3xl text-secondary font-bold">
              Similar Products
            </div>
            <p className="text-gray-600 mt-3 font-light text-2xl">
              You may like these products also
            </p>
          </div>
        </div>

        <div className="gap-here grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[100px]">
          {/* Start First Card */}
          {/* <div className="oneWidth p-5 border add-card-style rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <div className="bg-white">
                <img
                  src={img360}
                  className="absolute bg-white w-[40px] h-[40px] p-1 rounded-lg top-2 left-2"
                  alt=""
                />
              </div>
              <img
                className="w-full "
                src={image}
                alt="Sunset in the mountains"
              />
            </div>

            <div className="font-bold text-black text-lg py-4 mb-auto">
              <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </div>

              <div className="flex flex-row justify-between">
                <div>
                  <div className="text-xl text-secondary">
                    9,999 <span className="text-lg">LE</span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 line-through">9,999 LE</div>
                    <span className="font-normal ml-5 bg-primary p-1 rounded h-[25px] flex items-center text-black">
                      50%
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <img src={adidasImage} alt="unkown" />
                </div>
              </div>
            </div>
            <div className="my-1 mx-auto flex items-center gap-2">
              <Rating value={4} className="text-amber-500" />
              <Typography className="text-black font-extrabold">
                4.9 of 5
              </Typography>
            </div>
            <Typography className="text-black mx-auto font-normal">
              Pickup From: <span className="font-bold">Genena Mall</span>
            </Typography>
          </div> */}
          {/* End First Card */}
          {/* Start Second Card */}
          
          {products.map((product) => (
        <div
          key={product.id}
          className="oneWidth p-5 border add-card-style rounded-lg overflow-hidden shadow-lg flex flex-col"
        >
          <div className="relative">
            <div className="bg-white">
            <img
                  src={img360}
                  className="absolute bg-white w-[40px] h-[40px] p-1 rounded-lg top-2 left-2"
                  alt=""
                />
            </div>
            <img className="w-full" src={product.image} alt="Product" />
          </div>
          <div className="font-bold text-black text-lg py-4 mb-auto">
            <div>{product.content}</div>
            <div className="text-xl text-secondary">{product.price} <span className="text-lg">{product.eg}</span></div>
            {product.discound && (
              <div className="flex">
                <div className="text-gray-400 line-through">{product.sale} LE</div>
                <span className="font-normal ml-5 bg-primary p-1 rounded h-[25px] flex items-center text-black">
                  {product.discound}
                </span>
              </div>
            )}
          </div>
          <div className="my-1 mx-auto flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="text-black font-extrabold">
              4.9 of 5
            </Typography>
          </div>
          <Typography className="text-black  flex justify-between  font-normal">
            <div className="font-bold mx-auto" >
              {product.from}: <span className="font-bold mx-auto">{product.to}</span>
            </div>
            {product.fromTwo && (
              <div className="mx-auto">
                {product.fromTwo}: <span className="font-bold mx-auto">{product.toTwo}</span>
              </div>
            )}
            {product.in && (
              <div >
                {product.in}: <span className="font-bold">{product.days}</span>
              </div>
            )}
          </Typography>
        </div>
      ))}

          {/* End Second Card */}
          {/* Start Third Card */}
          {/* <div className="oneWidth p-5 border add-card-style rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <div className="bg-white">
                <img
                  src={img360}
                  className="absolute bg-white w-[40px] h-[40px] p-1 rounded-lg top-2 left-2"
                  alt=""
                />
              </div>
              <img
                className="w-full "
                src={adidasImageThree}
                alt="Sunset in the mountains"
              />
            </div>

            <div className="font-bold text-black text-lg py-4 mb-auto">
              <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </div>

              <div className="flex flex-row justify-between">
                <div>
                  <div className="text-xl text-secondary">
                    9,999 <span className="text-lg">LE</span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 line-through">9,999 LE</div>
                    <span className="font-normal ml-5 bg-primary p-1 rounded h-[25px] flex items-center text-black">
                      30%
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <img src={adidasImage} alt="unkown" />
                </div>
              </div>
            </div>
            <div className="my-1 mx-auto flex items-center gap-2">
              <Rating value={4} className="text-amber-500" />
              <Typography className="text-black font-extrabold">
                4.9 of 5
              </Typography>
            </div>
            <Typography className="text-black mx-auto font-normal">
              Pickup From: <span className="font-bold">Genena Mall</span>
            </Typography>
          </div> */}
          {/* End Third Card */}
          {/* Start Fourth Card */}
          {/* <div className="oneWidth p-5 border add-card-style rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <div className="bg-white">
                <img
                  src={img360}
                  className="absolute bg-white w-[40px] h-[40px] p-1 rounded-lg top-2 left-2"
                  alt=""
                />
              </div>
              <img
                className="w-full "
                src={adidasImageFour}
                alt="Sunset in the mountains"
              />
            </div>

            <div className="font-bold text-black text-lg py-4 mb-auto">
              <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </div>

              <div className="flex flex-row justify-between">
                <div>
                  <div className="text-xl text-secondary">
                    9,999 <span className="text-lg">LE</span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 line-through">9,999 LE</div>
                    <span className="font-normal ml-5 bg-primary p-1 rounded h-[25px] flex items-center text-black">
                      70%
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <img src={adidasImage} alt="unkown" />
                </div>
              </div>
            </div>
            <div className="my-1 mx-auto flex items-center gap-2">
              <Rating value={4} className="text-amber-500" />
              <Typography className="text-black font-extrabold">
                4.9 of 5
              </Typography>
            </div>
            <Typography className="text-black flex justify-between  font-normal">
              <div>
                From: <span className="font-bold">Egypt</span>
              </div>
              <div>
                To: <span className="font-bold">Egypt</span>
              </div>
              <div>
                in: <span className="font-bold">2 Days</span>
              </div>
            </Typography>
          </div> */}
          {/* End Fourth Card */}
        </div>
      </div>
      <div className="mb-20 border-b-4 mx-auto w-[88%] flex justify-between text-sm">
        <div className="text-secondary p-10 flex items-center pb-2 pr-2 border-b-4 border-secondary ">
          <a
            href="#"
            className="font-semibold inline-block  pt-1 w-[300px]"
          ></a>
        </div>
      </div>
    </>
  );
}

export default Products;
