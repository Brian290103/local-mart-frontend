// src/components/LottieRenderer.tsx
import React from "react";
import Lottie from "lottie-react";
import {getLottieAnimation} from "@/data/lotties";

type LottieRendererProps = {
    animationId: string;
    loop?: boolean;
    className?: string;
};

const LottieRenderer: React.FC<LottieRendererProps> = ({animationId, loop = true, className}) => {
    const animationData = getLottieAnimation(animationId);

    if (!animationData) return <p>Animation not found</p>;

    return (
        <Lottie animationData={animationData} loop={loop} className={className}/>
    );
};

export default LottieRenderer;
