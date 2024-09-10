export interface UserData {
    username: string;
    password: string;
}

export interface Errors {
    username?: string;
    password?: string;
}

export interface UserContextType {
    user: any;
    handleUser: (userData: any) => void;
    logout: () => void;
  }
  