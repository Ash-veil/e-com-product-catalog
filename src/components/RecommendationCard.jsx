import { Link } from "react-router-dom";
import { getProducts } from "../api/products";
import slugify from "slugify";
import { useCart } from "../context/CartContext";


const RecommendationCard = () => {
  const products = getProducts();
  const recProd = products.slice(12, 15);
  const { addToCart } = useCart()
  return (
    <div className="hidden xl:mt-8 xl:block">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        People also bought
      </h3>

      <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
        {recProd.map((p) => (
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <Link to={`/products/${p.ref}/${slugify(p.name, {lower:true})}`} className="overflow-hidden rounded">
              <img
                className="mx-auto h-44 w-44 dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="imac image"
              />
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </Link>
            <div>
              <Link to={`/products/${p.ref}/${slugify(p.name, {lower:true})}`} 
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {p.name}
              </Link>
              <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
               
                {p.desc}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                 {"€"+ p.price}
              </p>
               <button
               onClick={()=>addToCart(p)}
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCard;
