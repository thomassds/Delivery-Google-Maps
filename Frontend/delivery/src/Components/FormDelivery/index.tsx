import { useContext, useState } from "react";

import { ClientContext } from "../../Context/Client";
import { DeliveryContext } from "../../Context/Delivery";
import { AddressContext } from "../../Context/Address";

import { Button } from "../Button/Button";

export function FormDelivery() {
    const { delivery, setDelivery, handleSaveDelivery} = useContext(DeliveryContext);
    const { client } = useContext(ClientContext);
    const { origin, destiny } = useContext(AddressContext);

    return(
        <div className="w-[1000px] bg-[#F2C849] p-6 rounded-lg flex flex-col items-center text-black">
            <strong>Cadastre uma nova entrega:</strong>

            <div className="w-full p-4 flex flex-col">
                <div className="flex flex-col">
                    <div className="my-4 flex flex-col">
                        <label>Data:</label>
                        <input type="date" className="h-[40px] p-2 rounded-lg bg-white" value={delivery.delivery_date} onChange={e => setDelivery((prevState: any) => { return { ...prevState, delivery_date: e.target.value }})}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Cliente:</label>
                        <input disabled={true} className="h-[40px] p-2 rounded-lg bg-white" value={client.name}/>
                    </div>
 
                    <div className="my-4 flex flex-col">
                        <label>Origem:</label>
                        <input disabled={true} className="h-[40px] p-2 rounded-lg bg-white" value={`${origin.cep} - ${origin.street} - ${origin.city} - ${origin.state}`}/>
                    </div>

                    <div className="my-4 flex flex-col">
                        <label>Destino:</label>
                        <input disabled={true} className="h-[40px] p-2 rounded-lg bg-white" value={`${destiny.cep} - ${destiny.street} - ${destiny.city} - ${destiny.state}`}/>
                    </div>
                </div>
            </div>
            <div className="w-[200px]">
                <Button action={() => handleSaveDelivery({
                    delivery_date: delivery.delivery_date,
                    id_client: client.id,
                    id_destiny: destiny.id,
                    id_origin: origin.id
                })}/>
            </div>
        </div>
    )
}