import Lottie404 from "@/assets/lotties/404.json";

export type LottieAnimation = {
    id: string;
    animationData: any;
};

const lottieAnimations: LottieAnimation[] = [
    {id: "100", animationData: Lottie404},
    // Add more Lottie files here with unique IDs
];

export const getLottieAnimation = (id: string) => {
    const animation = lottieAnimations.find((anim) => anim.id === id);
    if (!animation) {
        console.warn(`Lottie animation with id "${id}" not found.`);
        return null;
    }
    return animation.animationData;
};
