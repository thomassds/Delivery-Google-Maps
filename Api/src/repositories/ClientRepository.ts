export interface ClientData {
    id?: string,
    name: string,
    phone: string,
    email: string
}

export interface ClientDataUpdate {
    id: string,
    name?: string,
    phone?: string,
    email?: string
}

export interface ClientDataGetAll {
    id: string,
    name?: string,
    phone?: string,
    email?: string
}

export interface ClientDataByEmailOrPhone {
    phone: string,
    email: string
}

export interface ClientRepository {
    create: (data: ClientData) => Promise<ClientData>;
    getAll: () => Promise<ClientDataGetAll[]>
    getOne: (id: string) => Promise<ClientData | null>;
    update: (data: ClientDataUpdate) => Promise<ClientDataUpdate>;
    getOneByEmailOrPhone: (data: ClientDataByEmailOrPhone) => Promise<ClientData | null>
}