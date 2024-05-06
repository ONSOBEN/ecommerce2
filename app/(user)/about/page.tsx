
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard ,faCartFlatbed,faStream} from '@fortawesome/free-solid-svg-icons'


export default function page() {
  return (
    <section className="relative pt-16 bg-blueGray-50">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzf2uWo_CdeqldtYqE066DjBj2e6mVIoCRwnlqxw7_A&s" alt="Product Image" />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-pink-500 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Discover Our Latest Products
            </h4>
            <p className="text-md font-light mt-2 text-white">
              Explore a wide range of products from electronics to fashion,
              all at your fingertips. Shop now and enjoy free shipping on
              orders over $50.
            </p>
          </blockquote>
        </div>
      </div>

      <div className="w-full md:w-6/12 px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faCartFlatbed} />
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  Shopping Cart
                </h6>
                <p className="mb-4 text-blueGray-500">
                  Easily add items to your cart and checkout with just a few clicks.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faStream} />
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  User Reviews
                </h6>
                <p className="mb-4 text-blueGray-500">
                  Read what our customers have to say about our products and service.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 mt-4">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faCreditCard} /> 
                </div>
                <h6 className="text-xl mb-1 font-semibold">Payment Options</h6>
                <p className="mb-4 text-blueGray-500">
                  We accept all major credit cards and offer secure payment processing.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0">
              <div className="px-4 py-5 flex-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faCreditCard} />
                </div>
                <h6 className="text-xl mb-1 font-semibold">
                  Product Details
                </h6>
                <p className="mb-4 text-blueGray-500">
                  Get detailed information about each product, including specifications and reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
