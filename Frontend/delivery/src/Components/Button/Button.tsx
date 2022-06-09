
import { CircleNotch } from "phosphor-react";
import { useContext } from "react";

import { LoadingContext } from "../../Context/Loading";

export function Button({ action }: any) {
    const { loading } = useContext(LoadingContext);

    return (
        <button disabled={loading} className="w-full h-[52px] rounded-lg flex justify-center items-center bg-[#212626] cursor-pointer text-[#F2C849]" onClick={() => action()}>
            {loading &&
            <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
            </div>
            }

            {!loading &&
                <strong>Proximo</strong>
            }
        </button>
    )
}