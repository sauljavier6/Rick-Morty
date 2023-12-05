import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public profileId: string | any;
  public character:any ; //Arreglo para guardar los personajes
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.profileId=this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>('https://rickandmortyapi.com/api/character/'+this.profileId).subscribe(
      response => {
        this.character=response;
       console.log(this.character)
      },
      error => {
        console.log(error);
      }
    );
  }

}
