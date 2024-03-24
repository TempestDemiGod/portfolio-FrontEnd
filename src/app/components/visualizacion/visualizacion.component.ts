import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.css']
})
export class VisualizacionComponent implements OnInit{
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() infoProject?: any
  image?:string
  info?:string
  name?:string
  tecnologias?:any
  webURL?:string
  gitHubURL?:string

  close(){
    this.closeModal.emit(false)
  }

  ngOnInit(): void {
    if(this.infoProject.image?.secure_url
      ){
      this.image = this.infoProject.image.secure_url
    }else{
      this.image = this.infoProject.image
    }
    this.info = this.infoProject.info
    this.name = this.infoProject.name
    this.tecnologias = this.infoProject.tecnologias
    this.webURL = this.infoProject.webURL
    this.gitHubURL = this.infoProject.gitHubURL
  }
}
