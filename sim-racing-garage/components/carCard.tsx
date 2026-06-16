type CarProps = {
    name: string;
    className: string;
    description: string;
};

export default function CarCard({ name, className, description }: CarProps) {
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