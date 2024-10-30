// src/pages/NotFoundPage.tsx
import React from "react";
import LottieRenderer from "@/components/LottieRenderer";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {HomeIcon} from "@heroicons/react/24/outline";

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-5 justify-center">
            <LottieRenderer animationId="100" className="w-80 h-80"/>

            <Link to={"/"}>
                <Button>
                    <HomeIcon/>
                    Go to Homepage
                </Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
