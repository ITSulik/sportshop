function Form() {
    return (
        <div className="bg-white p-10">
            <form className="mx-auto max-w-3xl space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="mb-1 block font-semibold">
                            Nume
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Introduceți numele"
                            className="w-full rounded border border-gray-300 px-3 py-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Introduceți email"
                            className="w-full rounded border border-gray-300 px-3 py-2"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="mb-1 block font-semibold">
                        Subiect
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Introduceți subiectul"
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="mb-1 block font-semibold">
                        Mesajul
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Introduceți mesajul"
                        rows={8}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    ></textarea>
                </div>

                <div className="text-end">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-[16pt] font-light text-white transition hover:bg-green-700"
                    >
                        {" "}
                        Începe conversația
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
