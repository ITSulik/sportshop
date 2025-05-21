// components/List.tsx
import { products } from "./Products";
import Card from "./Card";

const List = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-10 p-5 md:grid-cols-3 xl:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.title} {...product} />
                ))}
            </div>
            <div className="flex justify-end">
                <ul className="inline-flex space-x-3 text-lg font-semibold">
                    <li>
                        <a
                            href="#"
                            className="pointer-events-none cursor-not-allowed rounded-md bg-green-300 px-4 py-2 text-white shadow-sm"
                            aria-disabled="true"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="rounded-md border border-gray-300 px-4 py-2 shadow-sm hover:bg-gray-100">
                            2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="rounded-md border border-gray-300 px-4 py-2 shadow-sm hover:bg-gray-100">
                            3
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default List;
