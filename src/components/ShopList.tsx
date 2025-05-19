import List from "./Shop/List";
import BrandsSlick from "./AboutUs/Brands";
import Categories from "./Shop/Categories";
function ShopList() {
    return (
        <>
            <div className="mx-auto block justify-center px-4 py-8">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar categorii */}
                    <aside className="w-full lg:w-1/4">
                        <Categories />
                    </aside>

                    {/* Conținut principal */}
                    <main className="w-full lg:w-3/4">
                        {/* Filtru și sortare */}
                        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                            <ul className="flex space-x-6 text-2xl font-light">
                                <li>
                                    <a href="#" className="text-gray-900 hover:text-green-400">
                                        Toate
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 hover:text-green-400">
                                        Bărbați
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 hover:text-green-400">
                                        Femei
                                    </a>
                                </li>
                            </ul>

                            <select className="mt-4 w-sm rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none md:mt-0 lg:w-md">
                                <option>Sortează</option>
                                <option>A - Z</option>
                                <option>Articol</option>
                            </select>
                        </div>

                        {/* Lista de produse */}
                        <List />
                    </main>
                </div>
            </div>

            <BrandsSlick />
        </>
    );
}

export default ShopList;
