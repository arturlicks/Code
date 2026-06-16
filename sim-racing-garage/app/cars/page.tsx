"use client";
import { useCarFilters } from "@/hooks/useCarFilters";
import { cars } from "@/data/cars";
import CarCard from "@/components/carCard";

export default function CarsPage() {
    const { filteredCars, searchTerm, setSearchTerm, selectedClass, setSelectedClass } = useCarFilters(cars);

    return (
        <main className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Cars</h1>
            <p className="text-slate-300">A list of cars will appear here.</p>

            <div className="flex gap-2">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search cars..."
                    className="flex-1 rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    name="class"
                    id="class"
                    className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="GT3">GT3</option>
                    <option value="GT4">GT4</option>
                    <option value="LMP2">LMP2</option>
                    <option value="TCR">TCR</option>
                </select>
            </div>

            <section className="mt-4 grid gap-3">
                {filteredCars.map((car) => (
                    <CarCard
                        key={car.id}
                        name={car.name}
                        className={car.class}
                        description={car.description}
                    />
                ))}
            </section>
        </main>
    );
}