import { useEffect, useState } from "react";
import MiniHero from "../components/partials/MiniHero";
import ProductCard from "../components/partials/ProductCard";
import { getProducts } from "../api/products";
import ReactPaginate from "react-paginate";
import { FadeLoader } from "react-spinners";

const Products = () => {
  const [products, setProducts] = useState([]);
  const list = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
  };
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const start = currentPage * itemsPerPage;
  const currentProducts = products.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    setTimeout(() => {
      list();
      setLoading(false);
    }, "1000");
  }, []);
  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <MiniHero />

        {loading ? (
          <div className="flex justify-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <FadeLoader
              color="white"
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} p={product} />
              ))}
            </div>
            <div className="flex justify-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="inline-flex -space-x-px text-base h-10"
                pageClassName=""
                pageLinkClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 
    hover:bg-gray-100 hover:text-gray-700 
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
    dark:hover:bg-gray-700 dark:hover:text-white"
                activeClassName=""
                activeLinkClassName="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 
    hover:bg-blue-100 hover:text-blue-700 
    dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                previousClassName=""
                previousLinkClassName="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg 
    hover:bg-gray-100 hover:text-gray-700 
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
    dark:hover:bg-gray-700 dark:hover:text-white"
                nextClassName=""
                nextLinkClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg 
    hover:bg-gray-100 hover:text-gray-700 
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
    dark:hover:bg-gray-700 dark:hover:text-white"
                breakClassName=""
                breakLinkClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                disabledClassName="opacity-50 cursor-not-allowed"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
