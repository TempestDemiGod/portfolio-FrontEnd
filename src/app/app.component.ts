import { Component, OnInit } from '@angular/core';
import axios from './utils/axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portFolioFrontEnd';
  masProyectos:boolean = false
  skills = [
    {
      name: 'Front-End',
      skills: [
        {
          name: 'Angular',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
        },
        {
          name: 'HTML',
          image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'
        },
        {
          name: 'CSS',
          image: 'https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png'
        },
        {
          name: 'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
          name: 'TypeScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
        },
        {
          name: 'Tailwind',
          image: 'https://assets-global.website-files.com/62fa7db457da915c677c5570/62fa886f57da917ae17ce424_Tailwind_CSS_Logo.svg.png'
        },
        {
          name: 'Bootstrap',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png'
        }
      ]
    },
    {
      name: 'Back-End',
      skills: [
        {
          name: 'Node JS',
          image: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'
        },
        {
          name: 'Express JS',
          image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'
        },
        {
          name: 'Python',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png'
        },
        {
          name: 'PostgreSQL',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png'
        },
        {
          name: 'Firebase',
          image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png'
        },
        {
          name: 'MongoDB',
          image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png'
        },
      ]
    },
    {
      name: 'Otros',
      skills: [
        {
          name: 'Git',
          image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
        },
        {
          name: 'GitHub',
          image: 'https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png'
        },
        {
          name: 'VS Code',
          image: 'https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png'
        },
        {
          name: 'Postman',
          image: 'https://iconape.com/wp-content/png_logo_vector/postman.png'
        },
        {
          name: 'Adobe XD',
          image: 'https://static-00.iconduck.com/assets.00/adobe-xd-icon-2048x2048-n4c7t4w4.png'
        },
        {
          name: 'Bizagi',
          image: 'https://asset.brandfetch.io/idYImgMHFx/idSWeeYsRC.png'
        },
      ]
    }
  ]
  mainProjects = [
    {
      name: 'Task Project',
      image: 'https://res.cloudinary.com/tempestdemigod/image/upload/v1709606416/portfolio/proyects/tylg2cl8acwxjrupzaix.png',
      info: 'En este Proyecto realizo una app Web, en la que se registra por usuario, en la que esta compuesta por cursos en el cual cada curso esta compuesto de tareas independientes, haciendo verificacion de usuario usando JWT y en el BackEnd se hacen verificaciones de authenticacion y validaciones del cuerpo de la peticion usando zod',
      tecnologias: [
        'vercel','node js', 'angular', 'Tailwind', 'TypeScript', 'JWT'
      ],
      webURL: 'https://tempest-tasks-project.vercel.app',
      gitHubURL: 'https://github.com/stars/TempestDemiGod/lists/task-project-tempest'
    },
    {
      name: 'COFFEE Tempest',
      image: 'https://res.cloudinary.com/tempestdemigod/image/upload/v1709606944/portfolio/proyects/mir0qmmclwls98dbab3c.png',
      info: 'En esta app Web realizo un ejemplo de tienda de cafe, en la cual permite agregar productos a un carrito de compras, una lista de favoritos, y eliminarlo de estas listas, la verificacion del usuario es con JWT, todo eso es por parte del FrontEnd, por parte del BackEnd se realizan verificaciones de authenticacion por el token, y subida de imagen usando Cloudinary.',
      tecnologias: [
        'vercel','node js', 'angular', 'Tailwind', 'TypeScript', 'JWT', 'Cloudinary'
      ],
      webURL: 'https://coffe-tempest.vercel.app/home',
      gitHubURL: 'https://github.com/stars/TempestDemiGod/lists/coffe-tempest'
    },
    {
      name: 'COCKTAIL APP',
      image: 'https://res.cloudinary.com/tempestdemigod/image/upload/v1709606795/portfolio/proyects/yh4r5wgzdkfu3dciua8r.png',
      info: 'En esta APP de Cooktails se realizo un frontEnd usando Angular, haciendo uso de una api la cual muestra datos y informacion para la realizacion de cooktails.',
      tecnologias: [
        'vercel', 'angular', 'Bootstrap', 'TypeScript'
      ],
      webURL: 'https://cocktail-project-eight.vercel.app',
      gitHubURL: 'https://github.com/TempestDemiGod/CocktailProjectFront'
    }
  ]

  listProjects?:any
  projectInfo?:any
  proyectModal:boolean = false

  send:boolean = false

  useForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  ver(value:any){
    this.projectInfo = value
    this.proyectModal = true
  }
  async allProjects(){
    const projects = await axios.get('/projects')
    const listaProyectos = projects.data.projects
    if(listaProyectos.length >0){
      this.listProjects = projects.data.projects
    }
  }
  modal(close:boolean){
    this.proyectModal = close
  }


  async sendMessage(){
    emailjs.init('itScIigGkL_S-GE5z')
    const response = await emailjs.send("service_9hycp3a","template_33jpti9",{
      from_name: this.useForm.value.name,
      to_name: "portfolio Tempest",
      from_email: this.useForm.value.email,
      subject: this.useForm.value.subject,
      message: this.useForm.value.message,
      });
      this.send = true
      setTimeout(()=>{
        this.send = false
      },3000)
    this.useForm.reset();
  }
  ngOnInit(): void {
    this.allProjects()
  }
}
