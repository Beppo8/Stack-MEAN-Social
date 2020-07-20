import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
	selector: 'home',
	styleUrls: ['./home.component.css'],
	templateUrl: './home.component.html',
	providers: [UserService]
})
export class HomeComponent implements OnInit{
	public title:string;
	public identity: any;
	public url: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService:UserService
	){
		this.title = 'Bienvenido a NGSocial';
		this.url = GLOBAL.url;
	}

	ngOnInit(){
		console.log('home.component cargado !!');
		this.identity = this._userService.getIdentity();
	}

	ngDoCheck(){
		this.identity = this._userService.getIdentity();
	}
  
	logout(){
	  localStorage.clear();
	  this.identity = null;
	  this._router.navigate(['/']);
	}
}