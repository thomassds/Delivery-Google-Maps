import { useState } from "react"

import { format, parseISO } from 'date-fns';
import { Map } from "../GoogleMap";


export function CardDelivery({ data }: any) {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    
    return (
        <div className="w-[1000px] bg-[#F2C849] rounded-lg cursor-pointer" onClick={() => setShowDetail(!showDetail)}>
            <div className="w-full text-black p-6 flex justify-between">
                <strong>{data.client.name}</strong>

                <strong>{format(parseISO(data.delivery_date), "dd/MM/yyyy")}</strong>

                <strong>{data.destiny.city} - {data.destiny.state}</strong>
            </div>    

            {showDetail &&
                <>
                <div className="w-full p-6 flex justify-between">
                    <div className="w-[300px] rounded-lg p-6 bg-[#212626] flex flex-col justify-between items-center">
                        <strong>Cliente</strong>
                        <div className="flex flex-col my-6 h-[200px]">
                            <p className="my-2">{data.client.name}</p>

                            <p className="my-2">{data.client.phone}</p>

                            <p className="my-2">{data.client.email}</p>
                        </div>
                    </div>

                    <div className="w-[300px] rounded-lg p-6 bg-[#212626] flex flex-col justify-between items-center">
                        <strong>Origem</strong>
                        <div className="flex flex-col my-6 h-[200px]">
                            <p className="my-2">{data.origin.city} - {data.origin.state}</p>

                            <p className="my-2">{data.origin.cep}</p>

                            <p className="my-2">{data.origin.street}</p>
                            
                            <p className="my-2">{data.origin.number}</p>

                            <p className="my-2">{data.origin.district}</p>

                            <p className="my-2">{data.origin.complement}</p>
                        </div>
                    </div>

                    <div className="w-[300px] rounded-lg p-6 bg-[#212626] flex flex-col justify-between items-center">
                        <strong>Destino</strong>
                        <div className="flex flex-col my-6 h-[200px]">
                            <p className="my-2">{data.destiny.city} - {data.destiny.state}</p>

                            <p className="my-2">{data.destiny.cep}</p>

                            <p className="my-2">{data.destiny.street}</p>

                            <p className="my-2">{data.destiny.number}</p>

                            <p className="my-2">{data.destiny.district}</p>

                            <p className="my-2">{data.destiny.complement}</p>
                        </div>
                    </div>
                </div> 
                <div className="w-full p-6 flex justify-between">
                    <div className="w-full h-[400px] bg-[#212626] h-[200px] rounded-lg">
                        <Map 
                            origin={data.origin}
                            destiny={data.destiny}
                        />
                    </div>
                </div>
                </>
            }
        </div>
    )
}