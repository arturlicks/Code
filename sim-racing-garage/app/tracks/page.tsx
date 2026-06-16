"use client";

import TrackCard from "@/components/trackCard";
import { tracks } from "@/data/tracks";
import { useState } from "react";

export default function TracksPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <main>
            <h1>Tracks</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search tracks..."
                    className="flex-1 rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ul className="mt-4 flex flex-col gap-2">
                {tracks.filter((track) => track.name.toLowerCase().includes(searchTerm.toLowerCase())).map((track) => (
                    <li className="flex items-stretch gap-3 rounded border border-slate-800 bg-slate-900 p-3 hover:bg-slate-700" key={track.id}>
                        <TrackCard name={track.name} description={track.description} image={track.image} />
                    </li>
                ))}
            </ul>
        </main>
    );
}