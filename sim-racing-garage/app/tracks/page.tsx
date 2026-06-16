import { tracks } from "@/data/tracks";
import Image from "next/image";

export default function TracksPage() {
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
                />
            </div>
            <ul className="mt-4 flex flex-col gap-2">
                {tracks.map((track) => (
                    <li className="flex items-stretch gap-3 rounded border border-slate-800 bg-slate-900 p-3 hover:bg-slate-700" key={track.id}>
                        <div className="flex flex-1 flex-col gap-1">
                            <h2 className="text-lg font-semibold">{track.name}</h2>
                            <p className="text-sm text-slate-300">{track.description}</p>
                        </div>

                        <div className="h-[200px] w-[300px] shrink-0 overflow-hidden rounded">
                            <Image
                            src={track.image}
                            alt={track.name}
                            width={300}
                            height={200}
                            priority
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}