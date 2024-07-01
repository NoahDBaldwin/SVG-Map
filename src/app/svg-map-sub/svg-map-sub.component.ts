import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WorldSvgComponent } from '../world-svg/world-svg.component';

export type Response = [ResponseMeta, ResponseData[]];

export interface ResponseMeta {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
}

export interface ResponseData  {
  id: string
  iso2Code: string
  name: string
  region: Region
  adminregion: Adminregion
  incomeLevel: IncomeLevel
  lendingType: LendingType
  capitalCity: string
  longitude: string
  latitude: string
}

export interface Region {
  id: string
  iso2code: string
  value: string
}

export interface Adminregion {
  id: string
  iso2code: string
  value: string
}

export interface IncomeLevel {
  id: string
  iso2code: string
  value: string
}

export interface LendingType {
  id: string
  iso2code: string
  value: string
}

/**
 * research javascript/angular classes
 */

@Component({
  selector: 'app-svg-map-sub',
  standalone: true,
  imports: [WorldSvgComponent, CommonModule, HttpClientModule],
  templateUrl: './svg-map-sub.component.html',
  styleUrl: './svg-map-sub.component.css',
})
export class SVGMapSubComponent implements AfterViewInit {
  public countryData: Response | null = null;
  public data: Response | undefined;

  constructor(public http: HttpClient) {}

  ngAfterViewInit() {
    // get the paths
    const paths = this.getCountryPaths();

    paths.forEach((path) => {
      path.addEventListener('mouseenter', (ev) => this.onMouseEnter(ev));
      path.addEventListener('mouseout',(ev) => this.onMouseOut(ev));
    });
  }

  get aCountry() {
    return this.countryData?.[1]?.[0] as any as ResponseData;
  }

  getCountryPaths() {
    return document.querySelectorAll('path');
  }

  onMouseOut(ev: Event){
    const { value: country } =
      (ev?.currentTarget as SVGElement)?.attributes?.getNamedItem('id') ?? {};

      if (!country) return;
      const selectedCountry = document.querySelector(`#${country}`);
      if (selectedCountry?.classList.contains('highlighted')){
        selectedCountry.setAttribute('fill','black');
        selectedCountry.classList.remove('highlighted');
      }
  }

  onMouseEnter(ev: Event) {
    const { value: country } =
      (ev?.currentTarget as SVGElement)?.attributes?.getNamedItem('id') ?? {};

    console.log(country);
    if (!country) return;
    //change the color
    const selectedCountry = document.querySelector(`#${country}`);
    if (selectedCountry){
      selectedCountry.setAttribute('fill','red');
      selectedCountry.classList.add('highlighted');
    }

    this.queryApi(country);
  }

  queryApi(country: string) {
    return this.http
      .get<Response>(
        `https://api.worldbank.org/V2/country/${country.toUpperCase()}?format=json`
      )
      .subscribe((res) => {
        console.log({ res });
        this.countryData = res;
      });
  }
}
