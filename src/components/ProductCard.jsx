export default function ProductCard({ product }) {
  return (
    <section className="bg-blue-200 rounded-lg p-4 shadow hover:shadow-lg hover:translate-x-1 mb-5 text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-2 rounded"
      ></img>
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 cursor-pointer">
        Add to cart
      </button>
    </section>
  );
}
