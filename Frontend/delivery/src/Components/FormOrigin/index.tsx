import { useContext, useEffect } from "react";

import { AddressContext } from "../../Context/Address";
import { DeliveryContext } from "../../Context/Delivery";

import { Button } from "../Button/Button";

import { ListAddress } from "../ListAddress";

export function FormOrigin() {
    const { handleGetAddress, origin, setOrigin, handleSaveAddressOrigin } = useContext(AddressContext);

    useEffect(() => {
        handleGetAddress();
    }, [])
    return (
        <div className="w-[1000px] bg-[#F2C849] p-6 rounded-lg flex flex-col items-center text-black">
            <strong>Selecione ou Cadastre um novo Endereço de Origem</strong>

            <div className="w-full p-4 flex flex-col">
                <div className="flex flex-col">
                    <label>Endereço:</label>
                    
                   
                    <ListAddress type="origin"/>
                    

                    <div className="my-4 flex flex-col">
                        <label>CEP:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.cep} onChange={e => setOrigin((prevState: any) => { return { ...prevState, cep: e.target.value }})}/>
                    </div>
 
                    <div className="my-4 flex flex-col">
                        <label>Rua:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.street} onChange={e => setOrigin((prevState: any) => { return { ...prevState, street: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Numero:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.number} onChange={e => setOrigin((prevState: any) => { return { ...prevState, number: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Complemento:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.complement} onChange={e => setOrigin((prevState: any) => { return { ...prevState, complement: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Bairro:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.district} onChange={e => setOrigin((prevState: any) => { return { ...prevState, district: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Cidade:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.city} onChange={e => setOrigin((prevState: any) => { return { ...prevState, city: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Estado:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.state} onChange={e => setOrigin((prevState: any) => { return { ...prevState, state: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Longitude:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.longitude} onChange={e => setOrigin((prevState: any) => { return { ...prevState, longitude: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Latitude:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={origin.latitude} onChange={e => setOrigin((prevState: any) => { return { ...prevState, latitude: e.target.value }})}/>
                    </div>
                </div>
            </div>

            <div className="w-[200px]">
                <Button action={handleSaveAddressOrigin}/>
            </div>
        </div>
    )
}