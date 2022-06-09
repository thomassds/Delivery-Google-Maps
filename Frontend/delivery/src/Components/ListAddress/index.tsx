import { useContext } from "react"
import { AddressContext } from "../../Context/Address"

export function ListAddress({ type }: any) {
    const { showListAddress, listAddress, handleShowListAddress, handleSelectAddress } = useContext(AddressContext);

    return(
        <div className="w-full bg-white flex flex-col">
            <input className="h-[40px] p-2 rounded-lg bg-white" onFocus={handleShowListAddress} value={""}/>
            {showListAddress &&
            <>
                <div className="w-full p-2 flex justify-between cursor-pointer hover:bg-[#212626] hover:text-[#F2C849]" onClick={handleShowListAddress}>
                    <strong>Novo Endereço</strong>
                </div>

                {listAddress.map((element, key) => 
                    <div key={key} className="w-full p-2 flex justify-between cursor-pointer hover:bg-[#212626] hover:text-[#F2C849]" onClick={() => handleSelectAddress(type, element)}>
                        <strong>{element.cep}</strong>
                        <p>{element.street}</p>
                        <p>{element.number}</p>
                        <p>{element.city} - {element.state}</p>
                    </div>
                )}
            </>
            }
        </div>
    )
}