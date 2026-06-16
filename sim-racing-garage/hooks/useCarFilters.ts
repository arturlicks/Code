"use client";

import { useState, useMemo } from "react";
import type { Car } from "@/data/cars";

export function useCarFilters(allCars: Car[]) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClass, setSelectedClass] = useState("");

    const filteredCars = useMemo(() => {
        return allCars.filter((car) => {
            const matchesSearch =
                searchTerm === "" ||
                car.name.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesClass =
                selectedClass === "" || car.class === selectedClass;

            return matchesSearch && matchesClass;
        });
    }, [allCars, searchTerm, selectedClass]);

    return {
        filteredCars,
        searchTerm,
        setSearchTerm,
        selectedClass,
        setSelectedClass,
    };
}