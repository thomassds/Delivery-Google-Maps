import { createContext, useState } from "react";

interface LoadingContextChilden {
    children: React.ReactNode
}


interface LoadingContextData {
    loading: boolean,
    setLoading(data: any): void
}

export const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export const LoadingProvider: React.FC<LoadingContextChilden> = ({children}) => { 
    const [loading, setLoading] = useState(false);

    return ( 
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}