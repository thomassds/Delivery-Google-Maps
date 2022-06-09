import { ClientProvider } from './Context/Client';
import { DeliveryProvider } from './Context/Delivery';
import { AddressProvider } from './Context/Address';
import { LoadingProvider } from './Context/Loading';

import { Delivery } from './Pages/Delivery';

function App() {

    return (
        <LoadingProvider>
            <DeliveryProvider>
                <AddressProvider>
                    <ClientProvider>
                            <Delivery/>
                    </ClientProvider>
                </AddressProvider>
            </DeliveryProvider>
        </LoadingProvider>
    )
}

export default App
