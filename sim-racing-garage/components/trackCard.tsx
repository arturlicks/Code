import Image from "next/image";

export default function TrackCard({ name, description, image }: { name: string; description: string; image: string }) {
    return (
        <>
        <div className="flex flex-1 flex-col gap-1">
                            <h2 className="text-lg font-semibold">{name}</h2>
                            <p className="text-sm text-slate-300">{description}</p>
                        </div>

                        <div className="h-[180px] w-[300px] shrink-0">
                            <Image
                            src={image}
                            alt={name}
                            width={300}
                            height={180}
                            priority
                            className="rounded w-full h-full"
                            />
                        </div>
        </>
    );
}