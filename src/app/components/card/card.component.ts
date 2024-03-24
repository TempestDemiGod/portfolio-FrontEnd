import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() project?:any
  image?:string
  info?:string
  name?:string
  tecnologias?:any

  @Output() infoProject = new EventEmitter<any>();

  constructor(){}

  openInfo(){
    this.infoProject.emit(this.project);
  }

  ngOnInit(): void {
      if(this.project.image?.secure_url
        ){
        this.image = this.project.image.secure_url
      }else{
        this.image = this.project.image
      }
      this.info = this.project.info
      this.name = this.project.name
      this.tecnologias = this.project.tecnologias
  }
}
