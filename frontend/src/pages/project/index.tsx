import { useState } from "react";
import { Sprint } from "./sprint"

export interface ISprint {
    id: string;
    name: string;
    initialDate: Date;
    duration: number;
    status: boolean;
}

export const Project = () => {

    const [sprint, setSprint] = useState<ISprint | null>(null);

    return (
        <>
            <Sprint id={""} />
        </>
    )
}