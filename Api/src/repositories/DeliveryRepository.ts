export interface DeliveryData {
    delivery_date: Date,
    id_client: string,
    id_destiny: string,
    id_origin: string, 
}

export interface DeliveryRepository {
    create: (data: DeliveryData) => Promise<DeliveryData>;
    getAll: () => Promise<DeliveryData[]>;
    getOne: (id: string) => Promise<DeliveryData | null>;
}