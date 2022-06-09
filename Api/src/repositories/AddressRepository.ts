export interface AddressData {
    id?: string,
    cep: string,
    street: string,
    number: string
    district: string,
    complement: string,
    state: string,
    city: string,
    longitude: string,
    latitude: string
}

export interface AddressDataQuery {
    id?: string,
    cep?: string,
    street?: string,
    number?: string
    district?: string,
    complement?: string,
    state?: string,
    city?: string,
    longitude?: string,
    latitude?: string
}

export interface AddressRepository {
    create: (data: AddressData) => Promise<AddressData>;
    getAll: () => Promise<AddressData[]>;
    getOne: (id: string) => Promise<AddressData | null>;
    getQuery: (query: string) => Promise<any>;
}