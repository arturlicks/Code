export type Track = {
    id: number;
    name: string;
    country: string;
    lengthKm: number;
    image: string;
    description: string;
};

export const tracks: Track[] = [
    {
        id: 1,
        name: "Road Atlanta",
        country: "United States",
        lengthKm: 4.09,
        image: "/images/tracks/Road-Atlanta.png",
        description:
            "Fast circuit with many elevation changes and blind corners. The final downhill sequence is critical for lap time.",
    },
    {
        id: 2,
        name: "Road America",
        country: "United States",
        lengthKm: 6.51,
        image:
            "/images/tracks/Road-America.png",
        description:
            "Long layout with extensive straights and technical sections. Widely used in GT3 and multi-class series.",
    },
    {
        id: 3,
        name: "Watkins Glen",
        country: "United States",
        lengthKm: 5.44,
        image:
            "/images/tracks/Watkins-Glen.png",
        description:
            "A flowing track with a high-speed S and few runoff areas, great for building confidence at speed.",
    },
    {
        id: 4,
        name: "Spa-Francorchamps",
        country: "Belgium",
        lengthKm: 7.00,
        image:
            "/images/tracks/Spa-Francorchamps.png",
        description:
            "A world classic with a wide variety of corners. Eau Rouge/Raidillon and Blanchimont demand bravery and precision.",
    },
    {
        id: 5,
        name: "Sebring International Raceway",
        country: "United States",
        lengthKm: 6.02,
        image:
            "/images/tracks/Sebring.png",
        description:
            "A very bumpy circuit, famous for its bumps. Tire wear and consistency are more important than a perfect lap.",
    },
];