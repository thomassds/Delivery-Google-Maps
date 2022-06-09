import { createContext, useContext, useEffect, useState } from "react";
import { format, parse, parseISO } from "date-fns";
import { api } from "../Services/api";
import { LoadingContext } from "./Loading";

interface DeliveryContextChilden {
    children: React.ReactNode
}

export interface DeliveryData {
    id?: string,
    delivery_date?: string,
    id_client?: string,
    id_origin?: string,
    id_destiny?: string,
}

interface DeliveryContextData {
    deliveries: DeliveryData[],
    showFormClient: boolean,
    setShowFormClient(data: any): void,
    handleBackForm(): void,
    handleAddDelivery(): void,
    handleNextFormClient(): void,
    handleNextFormOrigin(): void,
    handleNextFormDestiny(): void,
    handleNextFormDelivery(): void,
    showFormOrigin: boolean,
    showFormDestiny: boolean,
    showDeliveries: boolean,
    showFormDelivery: boolean,
    delivery: DeliveryData,
    setDelivery(data: any): void,
    handleSaveDelivery(data: DeliveryData): void
}

export const DeliveryContext = createContext<DeliveryContextData>({} as DeliveryContextData);

export const DeliveryProvider: React.FC<DeliveryContextChilden> = ({children}) => { 
    const { loading, setLoading } = useContext(LoadingContext);
    
    const [delivery, setDelivery] = useState<DeliveryData>({});
    const [deliveries, setDeliveries] = useState<DeliveryData[]>([]); 

    const [showDeliveries, setShowDeliveries] = useState<boolean>(true);
    const [showFormClient, setShowFormClient] = useState<boolean>(false);
    const [showFormOrigin, setShowFormOrigin] = useState<boolean>(false)
    const [showFormDestiny, setShowFormDestiny] = useState<boolean>(false);
    const [showFormDelivery, setShowFormDelivery] = useState<boolean>(false);

    function handleBackForm() {
        if(showFormClient) {
            handleGetDeliveries();
            handleNextFormDelivery();
        }

        if(showFormOrigin) {
            handleAddDelivery();
        }

        if(showFormDestiny) {
            handleNextFormClient();
        }

        if(showFormDelivery) {
            handleNextFormOrigin();
        }
    }

    function handleAddDelivery() {
        setShowDeliveries(false);
        setShowFormClient(true);
        setShowFormOrigin(false);
        setShowFormDestiny(false);
        setShowFormDelivery(false);
    }

    function handleNextFormClient() {
        setShowDeliveries(false);
        setShowFormClient(false);
        setShowFormOrigin(true);
        setShowFormDestiny(false);
        setShowFormDelivery(false);
    }

    function handleNextFormOrigin() {
        setShowDeliveries(false);
        setShowFormClient(false);
        setShowFormOrigin(false);
        setShowFormDestiny(true);
        setShowFormDelivery(false);
    }

    function handleNextFormDestiny() {
        setShowDeliveries(false);
        setShowFormClient(false);
        setShowFormOrigin(false);
        setShowFormDestiny(false);
        setShowFormDelivery(true);
    }

    function handleNextFormDelivery() {
        setShowDeliveries(true);
        setShowFormClient(false);
        setShowFormOrigin(false);
        setShowFormDestiny(false);
        setShowFormDelivery(false);
    }

    async function handleGetDeliveries() {
        try {
            const { data } = await api.get("/deliveries");

            setDeliveries(data);
        } catch (error) {
            
        }
    }

    async function handleSaveDelivery({ id_client, id_origin, id_destiny, delivery_date}: DeliveryData) {
        setLoading(true);

        if(!delivery_date) {
            return 
        }

        try {
            const data = {
                id_client,
                id_origin,
                id_destiny,
                delivery_date: format(parse(delivery_date, 'yyyy-MM-dd', new Date()), `yyyy-MM-dd'T'hh:mm:ss`)
            };

            const response = await api.post("/delivery", data);

            handleGetDeliveries();
            setLoading(false);
            handleNextFormDelivery();
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetDeliveries();

    }, []);
    return ( 
        <DeliveryContext.Provider value={{ showFormClient, showDeliveries, setShowFormClient, showFormOrigin, showFormDelivery, showFormDestiny, delivery, setDelivery, deliveries, handleBackForm, handleAddDelivery, handleNextFormClient, handleNextFormOrigin, handleNextFormDestiny, handleNextFormDelivery, handleSaveDelivery}}>
            {children}
        </DeliveryContext.Provider>
    );
}