export type CarClass = "GT3" | "GT4" | "LMP2" | "TCR";

export type Car = {
    id: number;
    name: string;
    class: CarClass;
    image: string;
    description: string;
};

export const cars: Car[] = [
    {
        id: 1,
        name: "Ford Mustang GT4",
        class: "GT4",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_204/shot_ss_2_screen_full.jpg",
        description:
            "GT4 car based on the Mustang, balanced and stable, good for long races and drivers who prefer predictable handling.",
    },
    {
        id: 2,
        name: "BMW M4 GT3",
        class: "GT3",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_132/shot_ss_4_screen_full.jpg",
        description:
            "Modern GT3 with good traction on corner exits and strong braking, widely used in endurance series.",
    },
    {
        id: 3,
        name: "Mercedes-AMG GT4",
        class: "GT4",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_188/shot_ss_2_screen_full.jpg",
        description:
            "Front-engined GT4 with a powerful V8, great low-end torque and very popular in multi-class championships.",
    },
    {
        id: 4,
        name: "Ferrari 296 GT3",
        class: "GT3",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_212/shot_ss_2_screen_full.jpg",
        description:
            "Mid-engined GT3, very agile in direction changes, requires precise driving to extract maximum performance on technical tracks.",
    },
    {
        id: 5,
        name: "Porsche 718 Cayman GT4 Clubsport",
        class: "GT4",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_165/shot_ss_2_screen_full.jpg",
        description:
            "GT4 with a mid-engine and a very communicative rear end, an excellent choice for learning lines and car control.",
    },
];