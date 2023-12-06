import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  public characters: any[] = []; //Arreglo para guardar los personajes

  constructor(
    private http: HttpClient

  ) { }

   ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    const user = await firstValueFrom(this.http.get<any>('https://rickandmortyapi.com/api/character'))
    this.characters=user.results;
    /*this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(
      response => {
        this.characters=response.results;
        //console.log(this.characters)
      },
      error => {
        console.log(error);
      }
    );*/
  }
}
