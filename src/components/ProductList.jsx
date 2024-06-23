// import { data } from "../Datos/data";

import {objx} from "../obtener";


export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	console.log(objx)
	return (
		<div className='container-items grid grid-cols-3 gap-5'>
			{
			objx.map(product => (
				<div className='item rounded-lg' key={product.id}>
					<figure className=" overflow-hidden">
						<img className=" w-full h-72 object-cover rounded-lg " src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product p-4 flex flex-col gap-2'>
						<h2>{product.nameProduct}</h2>
						<p>{product.desc}</p>
						<p className='price font-black text-xl'>${product.price}</p>
						<button className=" border-none bg-black text-white p-4 cursor-pointer" onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};