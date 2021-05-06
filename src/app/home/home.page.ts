import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { StorageService } from 'src/domain/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  citiesHistory: City[];
  hasError: boolean = false;
  hasHistory: boolean = false;
  errorMessage: string;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly router: Router,
    private storageService: StorageService
  ) {}

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string, city: City) {
    this.storageService.saveCityOnHistory(city.name, city);
    this.router.navigateByUrl(`/weather/${cityId}`);
  }

  async ngOnInit() {
    this.storageService
      .init()
      .then(async (_) => {
        await this.storageService
          .getCitiesHistory()
          .then(async (cities) => {
            this.citiesHistory = cities;
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      })
      .then(() => {
        if (this.citiesHistory.length > 0) {
          this.hasHistory = true;
        }
      });
  }
}
