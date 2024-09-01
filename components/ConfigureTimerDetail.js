"use client";

import { useRouter } from "next/navigation";

const ConfigureTimerDetail = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/quick-draw/show");
    };
    return (
        <div>
            <h1>Configure Timer Detail new comp</h1>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default ConfigureTimerDetail;