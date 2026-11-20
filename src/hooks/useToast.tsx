import {useCallback, useState} from "react";

export default function useToast() {
    const [toast, setToast] = useState<string | null>(null);

    const showToast = useCallback((message: string, duration = 2000) => {
        if (typeof duration !== "number" || duration <= 0)
            throw new Error("duration must be a positive number");

        setToast(message);

        setTimeout(() => {
            setToast(null);
        }, duration);
    }, []);

    return { showToast, toast };
}
