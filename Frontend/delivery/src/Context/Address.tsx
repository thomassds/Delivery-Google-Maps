import { createContext, useContext, useEffect, useState } from "react";
import { api, geolocation } from "../Services/api";
import { DeliveryContext } from "./Delivery";
import { LoadingContext } from "./Loading";

interface AddressContextChilden {
    children: React.ReactNode
}


interface AddressContextData { 
    listAddress: AddressData[],
    handleShowListAddress(): void,
    handleSelectAddress(type: string, data: AddressData): void,
    showListAddress: boolean,
    origin: AddressData,
    setOrigin(value: any): void,
    destiny: AddressData,
    setDestiny(value: any): void,
    handleSaveAddressOrigin(): void,
    handleSaveAddressDestiny(): void,
    handleGetAddress(): void,
    resetAddress(): void
}

export interface AddressData {
    id?: string,
    cep?: string,
    street?: string,
    number?: string,
    district?: string,
    complement?: string,
    state?: string,
	city?: string,
	latitude?: string,
	longitude?: string
}


export const AddressContext = createContext<AddressContextData>({} as AddressContextData);

export const AddressProvider: React.FC<AddressContextChilden> = ({children}) => { 
    const { handleNextFormOrigin, handleNextFormDestiny } = useContext(DeliveryContext);
    const { loading, setLoading } = useContext(LoadingContext);

    const [adresses, setAdresses] = useState<AddressData[]>([]);
    const [listAddress, setListAddress] = useState<AddressData[]>([]);

    const [origin, setOrigin] = useState<AddressData>({});
    const [destiny, setDestiny] = useState<AddressData>({});

    const [showListAddress, setShowListAddress] = useState<boolean>(false);

    async function handleGetAddress() {
        try {
            const { data } = await api.get("/address");
            
            setAdresses(data);
            setListAddress(data);
        } catch (error) {
            
        }
    }

    async function handleSaveAddressOrigin() {
        if(!origin.cep) {
            return alert("Porfavor preencha seu cep");
        }

        if(!origin.city) {
            return alert("Porfavor preencha a cidade");
        }

        if(!origin.complement) {
            return alert("Porfavor preencha o complemento");
        }

        if(!origin.district) {
            return alert("Porfavor preencha o bairro");
        }

        if(!origin.latitude) {
            return alert("Porfavor preencha a latitude");
        }

        if(!origin.longitude) {
            return alert("Porfavor preencha a longitude");
        }

        if(!origin.number) {
            return alert("Porfavor preencha o numero");
        }

        if(!origin.state) {
            return alert("Porfavor preencha o estado");
        }

        if(!origin.street) {
            return alert("Porfavor preencha a rua");
        }

        try {
            setLoading(true);
            if(!origin.id) {
                const { data } = await api.post("/address", origin);
                setOrigin(data);
            }

            setLoading(false);
            handleNextFormOrigin();
        } catch ({response}) {
            return console.log({ response })
        }
    }

    async function handleSaveAddressDestiny() {
        if(!destiny.cep) {
            return alert("Porfavor preencha seu cep");
        }

        if(!destiny.city) {
            return alert("Porfavor preencha a cidade");
        }

        if(!destiny.complement) {
            return alert("Porfavor preencha o complemento");
        }

        if(!destiny.district) {
            return alert("Porfavor preencha o bairro");
        }

        if(!destiny.latitude) {
            return alert("Porfavor preencha a latitude");
        }

        if(!destiny.longitude) {
            return alert("Porfavor preencha a longitude");
        }

        if(!destiny.number) {
            return alert("Porfavor preencha o numero");
        }

        if(!destiny.state) {
            return alert("Porfavor preencha o estado");
        }

        if(!destiny.street) {
            return alert("Porfavor preencha a rua");
        }

        try {
            setLoading(true);
            if(!destiny.id) {
                const { data } = await api.post("/address", destiny);
                setDestiny(data);
            }

            setLoading(false);
            handleNextFormDestiny();
        } catch ({response}) {
            return console.log({ response })
        }
    }

    function handleShowListAddress() {
        return setShowListAddress(!showListAddress);
    }

    function handleSelectAddress(type: string, data: AddressData) {
        if(type == "origin") {
            setOrigin(data);
        }

        if(type == "destiny") {
            setDestiny(data);
        }

        setShowListAddress(false);
    }

    function resetAddress() {
        setOrigin({});
        setDestiny({});
    }

    async function handleGetGeolocationOrigin(address: AddressData) {
        if(!address.street || !address.number || !address.city || address.longitude || address.latitude) {
            return;
        }

        var param = `${address.street},${address.number},${address.city}`;

        param = param.replace(/ /g, "%20");
        param = param.replace(/,/g, "%2C");
        
        try {
            const { data } = await geolocation.get(`json?address=${param},+
                CA&key=${import.meta.env.VITE_GOOGLE_KEY}`
            );

            setOrigin((prevState: any) => { return { ...prevState, latitude: `${data.results[0].geometry.location.lat}`, longitude: `${data.results[0].geometry.location.lng}` }});
        } catch (error) {
            return console.log(error);
        }
    }

    async function handleGetGeolocationDestiny(address: AddressData) {
        if(!address.street || !address.number || !address.city || address.longitude || address.latitude) {
            return;
        }

        var param = `${address.street},${address.number},${address.city}`;

        param = param.replace(/ /g, "%20");
        param = param.replace(/,/g, "%2C");
        
        try {
            const { data } = await geolocation.get(`json?address=${param},+
                CA&key=${import.meta.env.VITE_GOOGLE_KEY}`
            );

            setDestiny((prevState: any) => { return { ...prevState, latitude: `${data.results[0].geometry.location.lat}`, longitude: `${data.results[0].geometry.location.lng}` }});
        } catch (error) {
            return console.log(error);
        }
    }

    useEffect(() => {
        handleGetGeolocationOrigin(origin);
    }, [origin]);

    useEffect(() => {
        handleGetGeolocationDestiny(destiny);
    }, [destiny]);
    return ( 
        <AddressContext.Provider 
            value={{ 
                listAddress, origin, setOrigin,
                destiny, setDestiny,
                handleSaveAddressOrigin,
                handleSaveAddressDestiny,
                showListAddress, handleShowListAddress, handleSelectAddress,
                handleGetAddress, resetAddress
            }}>
            {children}
        </AddressContext.Provider>
    );
}