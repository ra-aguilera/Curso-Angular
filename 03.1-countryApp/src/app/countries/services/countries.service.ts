import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {
    
    private apiUrl: string  = 'https://restcountries.com/v3.1'

    public cacheStore:CacheStore = {
        byCapital: {term: '', countries:[]},
        byCountries: {term: '', countries:[]},
        byRegion: {region: '', countries:[]},
    };

    constructor(private httpClient: HttpClient) {
        this.loadToLocalStorage()
    }

    private saveToLocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadToLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return;
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    private getCountriespRequest( url: string ): Observable<Country[]>{
        return this.httpClient.get<Country[]>(url).pipe(
            catchError( err => of([])),
            //delay(1000)
        )
    }

    searchCountryByAlphaCode( code: string ): Observable<Country | null>{
        return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
            .pipe(
                map ( countries => countries.length > 0 ? countries[0] : null),
                catchError( err => of(null)
                )
        )
    }

    searchCapital( term: string ): Observable<Country[]>{
        return this.getCountriespRequest(`${this.apiUrl}/capital/${term}`)
            .pipe(
                tap( countries => this.cacheStore.byCapital = {term, countries}),
                tap( ()=> this.saveToLocalStorage())
            );
    }

    searchRegion( term: Region ): Observable<Country[]>{
        return  this.getCountriespRequest(`${this.apiUrl}/region/${term}`)
            .pipe(
                tap( countries => this.cacheStore.byRegion = {region: term, countries}),
                tap( ()=> this.saveToLocalStorage())
            );
    }

    searchCountry( term: string ): Observable<Country[]>{
        return  this.getCountriespRequest(`${this.apiUrl}/name/${term}`) 
            .pipe(
                tap( countries => this.cacheStore.byCountries = {term, countries}),
                tap( ()=> this.saveToLocalStorage())
            );
    }

}