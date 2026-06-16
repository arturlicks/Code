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
        name: 'Ford Mustang GT4',
        class: 'GT4',
        image: 'https://ir-core-sites.iracing.com/members/member_images/cars/carid_204/shot_ss_2_screen_full.jpg',
        description:
            'O Ford Mustang GT4 é um carro de corrida baseado no icônico Mustang, projetado para competir na classe GT4. Ele apresenta um motor V8 de 5.2 litros, suspensão ajustável e uma aerodinâmica otimizada para oferecer desempenho excepcional nas pistas.',
    },
    {
        id: 2,
        name: 'BMW M4 GT3 EVO',
        class: 'GT3',
        image: 'https://ir-core-sites.iracing.com/members/member_images/cars/carid_132/shot_ss_4_screen_full.jpg',
        description:
            'O BMW M4 GT3 EVO é um supercarro alemão que apresenta um design aerodinâmico e um motor V8 biturbo, proporcionando uma experiência de condução emocionante.',
    }
];