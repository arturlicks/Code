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
        country: "Estados Unidos",
        lengthKm: 4.09,
        image:
            "https://ir-core-sites.iracing.com/members/member_images/tracks/road_atlanta/shot_ss_1_screen_full.jpg",
        description:
            "Circuito rápido com muitas mudanças de elevação e curvas cegas. A sequência final em descida é crítica para tempo de volta.",
    },
    {
        id: 2,
        name: "Road America",
        country: "Estados Unidos",
        lengthKm: 6.51,
        image:
            "https://ir-core-sites.iracing.com/members/member_images/tracks/road_america/shot_ss_1_screen_full.jpg",
        description:
            "Traçado longo com retas extensas e trechos técnicos. Muito usado em séries de GT3 e multiclass.",
    },
    {
        id: 3,
        name: "Watkins Glen",
        country: "Estados Unidos",
        lengthKm: 5.44,
        image:
            "https://ir-core-sites.iracing.com/members/member_images/tracks/watkins_glen/shot_ss_1_screen_full.jpg",
        description:
            "Pista fluida com S de alta velocidade e poucas áreas de escape, ótima para treinar confiança em alta.",
    },
    {
        id: 4,
        name: "Spa-Francorchamps",
        country: "Bélgica",
        lengthKm: 7.00,
        image:
            "https://ir-core-sites.iracing.com/members/member_images/tracks/spa/shot_ss_1_screen_full.jpg",
        description:
            "Clássico mundial com grande variação de curvas. Eau Rouge/Raidillon e Blanchimont exigem coragem e precisão.",
    },
    {
        id: 5,
        name: "Sebring International Raceway",
        country: "Estados Unidos",
        lengthKm: 6.02,
        image:
            "https://ir-core-sites.iracing.com/members/member_images/tracks/sebring/shot_ss_1_screen_full.jpg",
        description:
            "Circuito muito irregular, famoso pelos bumps. Desgaste de pneu e consistência são mais importantes que a volta perfeita.",
    },
];