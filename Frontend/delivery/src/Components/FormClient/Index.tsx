import { useContext, useEffect, useState } from "react";

import { ClientContext } from "../../Context/Client";
import { DeliveryContext } from "../../Context/Delivery";

import { Button } from "../Button/Button";

export function FormClient() {
    const { handleGetClients, handleSaveClient, client, setClient, listClients, showList, handleShowList, handleSelectClient, handleFilterClients } = useContext(ClientContext);

    useEffect(() => {
        handleGetClients();
    }, [])
    return(
        <div className="w-[1000px] bg-[#F2C849] p-6 rounded-lg flex flex-col items-center text-black">
            <strong>Selecione ou Cadastre um novo Cliente</strong>

            <div className="w-full p-4 flex flex-col">
                <div className="flex flex-col">
                    <label>Nome:</label>
                    <input className="h-[40px] p-2 rounded-lg bg-white" onFocus={handleShowList} value={client.name} onChange={e => { handleFilterClients(e.target.value); setClient((prevState: any) => { return { ...prevState, name: e.target.value }})}}/>
                    {showList &&
                    <div className="w-full bg-white flex flex-col">
                        <div className="w-full p-2 flex justify-between cursor-pointer hover:bg-[#212626] hover:text-[#F2C849]" onClick={handleShowList}>
                            <strong>Novo Cliente</strong>
                        </div>
                        {listClients.map((element, key) => 
                            <div key={key} className="w-full p-2 flex justify-between cursor-pointer hover:bg-[#212626] hover:text-[#F2C849]" onClick={() => handleSelectClient(element)}>
                                <strong>{element.name}</strong>
                                <p>{element.phone}</p>
                                <p>{element.email}</p>
                            </div>
                        )}
                        
                    </div>
                    }

                    <div className="my-6 flex flex-col">
                        <label>Phone:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={client.phone} onChange={e => setClient((prevState: any) => { return { ...prevState, phone: e.target.value }})}/>
                    </div>
 
                    <div className="flex flex-col">
                        <label>Email:</label>
                        <input className="h-[40px] p-2 rounded-lg bg-white" value={client.email} onChange={e => setClient((prevState: any) => { return { ...prevState, email: e.target.value }})}/>
                    </div>
                </div>
            </div>
            <div className="w-[200px]">
                <Button action={handleSaveClient}/>
            </div>
        </div>
    )
}