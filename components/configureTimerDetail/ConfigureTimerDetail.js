"use client";

import { useRouter } from "next/navigation";
import ConfigureCard from "./ConfigureCard";

const ConfigureTimerDetail = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/quick-draw/show");
    };
    return (
        <div>
            <h1>Configure Timer Detail new comp</h1>
            <ConfigureCard type="module" />
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default ConfigureTimerDetail;