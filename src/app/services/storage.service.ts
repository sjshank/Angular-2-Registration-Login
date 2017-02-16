import { Injectable } from '@angular/core';

import { IUser } from '../models/user';

@Injectable()
export class StorageService {

    clearStorage(key: string) {
        localStorage.removeItem(key);
    }

    addStorage(key: string, user: IUser) {  
        localStorage.setItem(key, JSON.stringify(user));
    }

    getStorage(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}