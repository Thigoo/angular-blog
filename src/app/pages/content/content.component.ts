import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://www.alura.com.br/artigos/assets/como-comecar-com-angular/como-comecar-com-angular.png';
  contentTitle: string = 'Minha notícia';
  contentDescription: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur temporibus vitae at non unde nobis tenetur repellat cupiditate, aliquam ipsa eos natus inventore! Tempora magni incidunt quam, eligendi esse nisi?';

  constructor() { }

  ngOnInit(): void {
  }

}
