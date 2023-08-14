export interface NavbarLink {
  label: string;
  src: string;
  href: string;
}

export type IncidenceType = 'duda' | 'pedido' | 'integracion';

export type IncidenceState = 'pending' | 'resolved';

export interface Incidence {
  title: string;
  firstMessage: string;
  state: IncidenceState;
  type: IncidenceType;
  uploadTime: string; //No hace falta me parece
  lastInteraction: string;
  id: number;
}

export interface ChatInfo {
  userName: string;
  userImage: string;
  userId: number;
}

export interface Message {
  userId: number; // if (userId === userChatId) message go left
  name: string;
  userImage: string;
  message: string;
  image?: string;
}

export interface Session {
  id: number;
  name: string;
  isAdmin: boolean;
  image?: string;
}

export interface ResponseSession extends Session {
  ok: number;
}

export type ResgisterResponse = 'succes' | 'error' | '';
