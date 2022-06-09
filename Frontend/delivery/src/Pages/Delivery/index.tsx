import { CardDelivery } from "../../Components/CardDelivery/Index";

import { ArrowCircleLeft, PlusCircle } from 'phosphor-react';
import { FormClient } from "../../Components/FormClient/Index";
import { useContext, useState } from "react";
import { DeliveryContext } from "../../Context/Delivery";
import { FormOrigin } from "../../Components/FormOrigin";
import { FormDestiny } from "../../Components/FormDestiny";
import { FormDelivery } from "../../Components/FormDelivery";

export function Delivery() {
    const { deliveries, showDeliveries, showFormDelivery, showFormClient, handleBackForm, handleAddDelivery, showFormOrigin, showFormDestiny } = useContext(DeliveryContext);

    return (
        <section className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-[600px] p-6 flex justify-between items-center">
                <ArrowCircleLeft size={32} className="cursor-pointer" onClick={() => handleBackForm()}/>

                <input type="text"/>

                <PlusCircle size={32} className="cursor-pointer" onClick={() => handleAddDelivery()}/>
            </div>

            { showDeliveries &&
            <div className="">
                {deliveries.map((e, key) => 
                    <div key={key} className="my-6">
                        <CardDelivery data={e}/>
                    </div>
                )}
            </div>
            }

            {showFormClient &&
                <FormClient/>
            }

            {showFormOrigin &&
                <FormOrigin/>
            }

            {showFormDestiny &&
                <FormDestiny/>
            }

            {showFormDelivery &&
                <FormDelivery/>
            }
        </section>
    )
}