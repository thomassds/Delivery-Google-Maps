import { DirectionsRenderer, DirectionsService, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { useCallback, useMemo, useState } from "react"
import { AddressData } from "../../Context/Address"

export function Map({origin, destiny}: any) {
    const [pointA, setPointA] = useState<google.maps.LatLngLiteral>({ 
        lat: parseFloat(origin.latitude),
        lng: parseFloat(origin.longitude)
    });

    const [pointB, setPointB] = useState<google.maps.LatLngLiteral>({ 
        lat: parseFloat(destiny.latitude),
        lng: parseFloat(destiny.longitude)
    });
    
    const [response, setResponse] = useState<google.maps.DistanceMatrixResponse | null>(null);
    const [routes, setRoutes] = useState<google.maps.DistanceMatrixResponse | null>(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAKO05_1yTb2atrYfvZJKEFlO4wFs9wP7A"
    })

    const directionsServiceOptions =
    // @ts-ignore
    useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin: pointA,
        destination: pointB,
        travelMode: "DRIVING",
      };
    }, [pointA, pointB]);

    const directionsCallback = useCallback((res: any) => {
        if (res !== null && res.status === "OK") {
          setResponse(res);
        } else {
          console.log(res);
        }
    }, []);

    const directionsRendererOptions = useMemo<any>(() => {
        return {
          directions: response,
        };
    }, [response]);

    return (
        <div className="w-full h-full">
            { isLoaded &&
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={pointA}
                    zoom={10}
                >
                    <Marker position={pointA} />
                    <Marker position={pointB} />

                    <DirectionsService 
                        options={directionsServiceOptions} 
                        callback={directionsCallback}
                    />

                    <DirectionsRenderer options={directionsRendererOptions}/>
                </GoogleMap>
            }
        </div>
    )
}