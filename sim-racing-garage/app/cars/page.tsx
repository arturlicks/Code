"use client";
import { useState } from "react";
import { cars } from "@/data/cars";

type CarProps = {
    name: string;
    className: string;
    description: string;
};

function CarCard({ name, className, description }: CarProps) {
    return (
        <div className="rounded border border-slate-800 bg-slate-900 p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{name}</h2>
                <span className="text-xs uppercase text-slate-400">{className}</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{description}</p>
        </div>
    );
}

export default function CarsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterClass, setFilterClass] = useState("");

    return (
        <main className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Carros</h1>
            <p className="text-slate-300">Lista de carros vai aparecer aqui.</p>

            <div className="flex gap-2">
                <input
                    type="text"
                    name="busca"
                    id="busca"
                    placeholder="Buscar carros..."
                    className="flex-1 rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    name="class"
                    id="class"
                    className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="GT3">GT3</option>
                    <option value="GT4">GT4</option>
                    <option value="LMP2">LMP2</option>
                    <option value="TCR">TCR</option>
                </select>
            </div>

            <section className="mt-4 grid gap-3">
                {cars.filter((car) => {
                    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesClass = filterClass ? car.class === filterClass : true;
                    return matchesSearch && matchesClass;
                }).map((car) => (
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