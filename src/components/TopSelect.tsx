import watch from "../assets/img/category_img_01.jpg";
import shoe from "../assets/img/category_img_02.jpg";
import glass from "../assets/img/category_img_03.jpg";
import "../index.css";

function TopSelect() {
    return (
        <div className="px-4 py-10 text-center">
            <h1 className="mb-10 text-5xl font-light">Top Selecții pentru un Stil Activ</h1>
            <p className="mx-auto mb-12 max-w-3xl text-gray-600">
                Am selectat cele mai îndrăgite produse care îmbină performanța cu stilul. Fie că ești în sală, pe stradă
                sau în natură – fii activ, dar rămâi tu însuți.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="flex w-[400px] flex-col items-center">
                    <img
                        src={watch}
                        alt="Watch"
                        className="mb-4 h-90 w-90 rounded-full border-2 border-gray-200 object-cover"
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
                        className="mb-4 h-90 w-90 rounded-full border-2 border-gray-200 object-cover"
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
                        className="mb-4 h-90 w-90 rounded-full border-2 border-gray-200 object-cover"
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
