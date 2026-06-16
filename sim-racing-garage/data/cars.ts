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
            "Carro GT4 baseado no Mustang, equilibrado e estável, bom para corridas longas e pilotos que preferem um comportamento mais previsível.",
    },
    {
        id: 2,
        name: "BMW M4 GT3",
        class: "GT3",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_132/shot_ss_4_screen_full.jpg",
        description:
            "GT3 moderno com boa tração nas saídas de curva e forte em freagens, muito usado nas séries de endurance.",
    },
    {
        id: 3,
        name: "Mercedes-AMG GT4",
        class: "GT4",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_188/shot_ss_2_screen_full.jpg",
        description:
            "GT4 frontal com V8 potente, ótimo torque em baixa e muito popular em campeonatos multicategoria.",
    },
    {
        id: 4,
        name: "Ferrari 296 GT3",
        class: "GT3",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_212/shot_ss_2_screen_full.jpg",
        description:
            "GT3 de motor central, muito ágil em mudanças de direção, exige pilotagem precisa para extrair o máximo em pistas técnicas.",
    },
    {
        id: 5,
        name: "Porsche 718 Cayman GT4 Clubsport",
        class: "GT4",
        image:
            "https://ir-core-sites.iracing.com/members/member_images/cars/carid_165/shot_ss_2_screen_full.jpg",
        description:
            "GT4 com motor central e traseira muito comunicativa, excelente opção para aprender linhas e controle de carro.",
    },
];