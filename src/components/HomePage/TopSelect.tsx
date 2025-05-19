import watch from "../../assets/img/category_img_01.jpg";
import shoe from "../../assets/img/category_img_02.jpg";
import glass from "../../assets/img/category_img_03.jpg";

function TopSelect() {
    return (
        <div className="px-4 py-10 text-center">
            <h1 className="mb-10 text-2xl font-light md:text-4xl lg:text-5xl">Top Selecții pentru un Stil Activ</h1>
            <p className="mx-auto mb-12 max-w-xl text-gray-600 sm:text-sm md:max-w-2xl lg:max-w-3xl lg:text-xl">
                Am selectat cele mai îndrăgite produse care îmbină performanța cu stilul. Fie că ești în sală, pe stradă
                sau în natură – fii activ, dar rămâi tu însuți.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="flex w-[400px] flex-col items-center">
                    <img
                        src={watch}
                        alt="Watch"
                        className="md: mb-4 h-50 w-50 rounded-full border-2 border-gray-200 object-cover lg:h-90 lg:w-90"
                    />
                    <h2 className="mb-2 text-lg font-semibold">Watches</h2>
                    <a href="#" className="rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
                        Cumpără acum
                    </a>
                </div>

                <div className="flex w-[400px] flex-col items-center">
                    <img
                        src={shoe}
                        alt="Shoe"
                        className="md: mb-4 h-50 w-50 rounded-full border-2 border-gray-200 object-cover lg:h-90 lg:w-90"
                    />
                    <h2 className="mb-2 text-lg font-semibold">Shoes</h2>
                    <a href="#" className="rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
                        Cumpără acum
                    </a>
                </div>

                <div className="flex w-[400px] flex-col items-center">
                    <img
                        src={glass}
                        alt="Glasses"
                        className="md:0 mb-4 h-50 w-5 rounded-full border-2 border-gray-200 object-cover lg:h-90 lg:w-90"
                    />
                    <h2 className="mb-2 text-lg font-semibold">Accessories</h2>
                    <a href="#" className="rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
                        Cumpără acum
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopSelect;
