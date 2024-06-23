import { useState } from "react";

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header className=" flex justify-between p-7">
      <h1>Tienda</h1>

      <div className="container-icon relative">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon-cart w-6 h-6 stroke-black cursor-pointer m-2"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>

          <div className="count-products absolute top-1/2 right-0 flex text-black w-6 h-6 justify-center items-center">
            <span className=" text-xs" id="contador-productos">
              {countProducts}
            </span>
          </div>
        </div>

        <div
          className={`container-cart-products absolute top-12 right-0 bg-white w-96 rounded-lg ${
            active ? "" : "hidden-cart hidden"
          }`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div
                    className="cart-product flex items-center justify-between p-7"
                    key={product.id}
                  >
                    <div className="info-cart-product flex justify-between p-7">
                      <span className="cantidad-producto-carrito text-xl font-normal">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito text-xl">
                        {product.nameProduct}
                      </p>
                      <span className="precio-producto-carrito font-bold text-xl m-2">
                        ${product.price}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="cart-total flex justify-center items-center p-5 gap-5">
                <h3 className=" font-black text-xl">Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>

              <button
                className="btn-clear-all border-none bg-black text-white p-4 block w-full mt-2 rounded-lg cursor-pointer"
                onClick={onCleanCart}
              >
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty p-5 text-center">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
