import { useState } from "react";
import { menuData } from "../data/menuData";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...menuData.map((item) => item.category)];

    const filteredMenu =
        selectedCategory === "All"
            ? menuData
            : menuData.filter(
                (item) => item.category === selectedCategory
            );

    return (
        <section className="min-h-screen bg-ink py-24 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-yolk uppercase tracking-[0.3em] text-sm font-bold">
                        Rottu Kadai
                    </span>

                    <h1 className="text-5xl font-display font-extrabold text-white mt-3">
                        Our Menu
                    </h1>

                    <p className="text-smoke mt-4">
                        Freshly prepared with authentic flavours.
                    </p>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`whitespace-nowrap px-7 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                ? "bg-yolk text-ink shadow-lg shadow-yolk/20"
                                : "bg-ink-card border border-white/5 text-white hover:border-yolk hover:text-yolk"
                                }`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu */}
                <div className="space-y-10">
                    {filteredMenu.map((section) => (
                        <div
                            key={section.category}
                            className="bg-ink-card border border-white/5 rounded-3xl p-6 md:p-8"
                        >
                            {/* Category Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-yolk">
                                        {section.category}
                                    </h2>

                                    <p className="text-smoke mt-2 text-sm">
                                        Freshly prepared with authentic flavours.
                                    </p>
                                </div>

                                <span className="hidden md:flex w-12 h-12 rounded-full bg-yolk/10 items-center justify-center text-2xl">
                                    🍽️
                                </span>
                            </div>

                            {/* Items */}
                            <div className="space-y-3">
                                {section.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group bg-[#151518] border border-white/5 hover:border-yolk/30 rounded-2xl px-5 py-5 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-white font-semibold text-lg group-hover:text-yolk transition-colors">
                                                    {item.name}
                                                </h3>

                                                <p className="text-smoke text-sm mt-1">
                                                    Freshly prepared with authentic spices.
                                                </p>
                                            </div>

                                            <span className="bg-yolk/10 text-yolk font-bold px-4 py-2 rounded-full text-lg">
                                                ₹{item.price}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back Button */}
                <div className="text-center mt-20">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-yolk text-ink px-6 py-3 rounded-full font-bold"
                    >
                        <FiArrowLeft />
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}