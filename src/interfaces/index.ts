export interface Channel {
    id: number;
    name: string;
    isActive: boolean;
}

export interface Group {
    name: string;
    channels: Channel[];
}

export interface Server {
    name: string;
    groups: Group[];
}

export interface User {
    id: number;
    name: string;
}

export interface Member {
    name: string;
    online: boolean;
}

export interface Category {
    category: string;
    members: Member[];
}

export interface Message {
    user: Member;
    date: Date;
    msg: string;
}
