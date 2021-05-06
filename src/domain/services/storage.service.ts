import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { City } from '../entities/city';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public saveCityOnHistory(key: string, city: City) {
    this._storage?.set(key, city);
  }

  public async getCitiesHistory() {
    let citiesHistory = [];

    return this._storage
      ?.forEach((key: string) => {
        citiesHistory.push(key);
      })
      .then(() => {
        return Promise.resolve(citiesHistory);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
