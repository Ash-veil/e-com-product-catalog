import { useCart } from "../context/CartContext";

const Checkout = ({ total }) => {
  const { cart } = useCart();

  const tax = 14;
  const deliveryFees = 39.99;
  const totalAfterFees = total + deliveryFees + (total * tax) / 100;
  return (
    <>
      {cart.length > 0 && (
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Order summary
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Original price
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    {"€" + total.toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    {"€" + deliveryFees}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Tax
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    {"+" + tax + "%"}
                  </dd>
                </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt className="text-base font-bold text-gray-900 dark:text-white">
                  Total
                </dt>
                <dd className="text-base font-bold text-green-600 ">
                  {" "}
                  {"€" + totalAfterFees.toFixed(2)}{" "}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
