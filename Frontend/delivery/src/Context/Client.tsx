import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { DeliveryContext } from "./Delivery";


interface ClientContextChilden {
    children: React.ReactNode
}

export interface ClientData {
    id?: string,
    name?: string,
    phone?: string,
    email?: string
}

interface ClientContextData {
    client: ClientData,
    setClient(value: any): void,
    clients: ClientData[],
    listClients: ClientData[],
    handleShowList(): void,
    handleSelectClient(data: ClientData): void,
    handleFilterClients(filter: string): void,
    showList: boolean,
    handleSaveClient(): void
}

export const ClientContext = createContext<ClientContextData>({} as ClientContextData);

export const ClientProvider: React.FC<ClientContextChilden> = ({children}) => {
    const { handleNextFormClient } = useContext(DeliveryContext);

    const [client, setClient] = useState<ClientData>({});
    const [clients, setClients] = useState<ClientData[]>([]);
    const [listClients, setListClients] = useState<ClientData[]>([]);

    const [showList, setShowList] = useState<boolean>(false);

    async function handleGetClients() {
        try {
            const { data } = await api.get("/clients");

            setListClients(data);
            setClients(data);
        } catch (error) {
            
        }
    }
    
    async function handleSaveClient() {
        if(!client.name || !client.email || !client.phone) {
            return alert("Porfavor, selecione ou preencha um novo cliente");
        }
        
        try {
            if(!client.id) {
                const { data } = await api.post("/client", client);
                setClient(data);
            }

            handleNextFormClient();
        } catch ({ response }) {
            return console.log(response);
        }
    }

    function handleSelectClient(data: ClientData) {
        setClient(data);
        setShowList(false);
    }

    function handleShowList() {
        return setShowList(!showList);
    }

    function handleFilterClients(filter: string) {
        const data = clients.filter(e => e.name?.toLowerCase().includes(filter.toLowerCase()));

        setListClients(data);
    }

    useEffect(() => {
        handleGetClients();

    }, []);
    return ( 
        <ClientContext.Provider value={{ client,setClient, clients, listClients, showList, handleShowList, handleSelectClient, handleFilterClients, handleSaveClient }}>
            {children}
        </ClientContext.Provider>
    );
};
