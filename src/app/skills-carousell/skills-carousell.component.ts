import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-skills-carousell',
  templateUrl: './skills-carousell.component.html',
  styleUrls: ['./skills-carousell.component.css'],
})
export class SkillsCarousellComponent implements OnInit {
  
  ngAfterViewInit(): void {
    feather.replace();
  }
  index_page = 0;
  skill_index_page = 0;
  constructor() {}
  specific_skills = [
    {
      title: 'Angular',
      job_experience:
        '40',
      personal_experience:
      '60',
    },
    {
      title: 'React',
      job_experience:
        '0',
      personal_experience:
      '100',
    },
    {
      title: 'Java',
      job_experience:
        '85',
      personal_experience:
      '15',
    },
    {
      title: 'Springboot',
      job_experience:
        '100',
      personal_experience:
      '0',
    },
    {
      title: 'Flutter',
      job_experience:
        '0',
      personal_experience:
      '100',
    },
    {
      title: 'Node',
      job_experience:
        '20',
      personal_experience:
      '80',
    },
    {
      title: 'NestJs',
      job_experience:
        '0',
      personal_experience:
      '100',
    },
    {
      title: 'Mongo',
      job_experience:
        '0',
      personal_experience:
      '100',
    },
    {
      title: 'SQL',
      job_experience:
        '70',
      personal_experience:
      '30',
    },
    {
      title: 'Figma',
      job_experience:
        '00',
      personal_experience:
      '100',
    },
  ];

  skills_description = [
    {
      title: 'Frontend',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',
    },
    {
      title: 'Web',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',
      icons: [
        'angular_skill_icon',
        'react_skill_icon',
        'java_skill_icon',
        'spring_skill_icon',
      ],
    },
    {
      title: 'Mobile',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: ['flutter_skill_icon', 'react_skill_icon', 'angular_skill_icon'],
    },
    {
      title: 'Desktop',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: [
        'angular_skill_icon',
        'react_skill_icon',
        'java_skill_icon',
        'html_skill_icon',
      ],
    },
    {
      title: 'Backend',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',
    },
    {
      title: 'Framework',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: ['node_skill_icon', 'nestjs_skill_icon', 'spring_skill_icon'],
    },
    {
      title: 'Database',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: ['mongo_skill_icon', 'sql_skill_icon'],
    },
    {
      title: 'UI & UX',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',
    },
    {
      title: 'Software',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: ['figma_skill_icon'],
    },
    {
      title: 'Copywriting',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: [],
    },
    {
      title: 'Management',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: [],
    },
    {
      title: 'Marketing',
      description:
        'Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.Magnifica descrizione piena di stronzate per tentare di riempire un attimo la pagina dai.',

      icons: [],
    },
  ];

  ngOnInit(): void {
    const frontendLi = document.getElementById('frontend');
    if (frontendLi){
      frontendLi.children[1].className = 'mostra';
      frontendLi.children[0].className = 'orange';
    } 

    const backendLi = document.getElementById('backend');
    if (backendLi) backendLi.children[1].className = 'nascosta';

    const uiLi = document.getElementById('uix');
    if (uiLi) uiLi.children[1].className = 'nascosta';
  }

  onClickSkills(event: any):void{
    console.log("Clickato su Skill:" + event.currentTarget.id);
    const clicked_skill = event.currentTarget.id.replace("_skill_icon","");
    console.log("Clickato su Skill:" + clicked_skill);
    switch (clicked_skill) {
      case 'angular':
        this.skill_index_page = 0;
        break;
      case 'react':
        this.skill_index_page = 1;
        break;
      case 'java':
        this.skill_index_page = 2;
        break;
      case 'spring':
        this.skill_index_page = 3;
        break;
      case 'flutter':
        this.skill_index_page = 4;
        break;
      case 'node':
        this.skill_index_page = 5;
        break;
      case 'nestjs':
        this.skill_index_page = 6;
        break;
      case 'mongo':
        this.skill_index_page = 7;
        break;
      case 'sql':
        this.skill_index_page = 8;
        break;
      case 'figma':
        this.skill_index_page = 9;
        break;
      default:
        this.skill_index_page = 0;
        break;
    }
  }

  selectPage(event: any, trigger?:any) {
    const objecto = document.getElementById(event.currentTarget.id);
    if(!trigger){
      const boxess = document.querySelectorAll('.orange');
      boxess.forEach((box) => {
        box.className = 'black';
      });
    }
    console.log(
      'Sono dentro il selectPage con indice:' + event.currentTarget.id
    );
    console.log(this.index_page + " " + this.skills_description[this.index_page]);
    event.stopPropagation();
    switch (event.currentTarget.id) {
      case 'frontend':
        this.index_page = 0;
        break;
      case 'web':
        this.index_page = 1;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'mobile':
        this.index_page = 2;
        this.skill_index_page = 4;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'desktop':
        this.index_page = 3;
        this.skill_index_page = 0;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'backend':
        this.index_page = 4;
        break;
      case 'framework':
        this.index_page = 5;
        this.skill_index_page = 5;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'database':
        this.index_page = 6;
        this.skill_index_page = 7;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'uix':
        this.index_page = 7;
        break;
      case 'software':
        this.index_page = 8;
        this.skill_index_page = 9;

        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'copywriting':
        this.index_page = 9;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'management':
        this.index_page = 10;
        if(objecto) objecto.children[0].className = "orange";
        break;
      case 'marketing':
        this.index_page = 11;
        if(objecto) objecto.children[0].className = "orange";
        break;
      default:
        this.index_page = 0;
        break;
    }
  }

  hideSubMenu(event: any) {
    console.log('Entro con:' + event.currentTarget.id);

    const objecto = document.getElementById(event.currentTarget.id);
    const boxes = document.querySelectorAll('.mostra');
    boxes.forEach((box) => {
      box.className = 'nascosta';
    });

    const boxess = document.querySelectorAll('.orange');
    boxess.forEach((box) => {
      box.className = 'black';
    });

    if (objecto) {
      if (objecto.children[1].className == 'nascosta') {
        objecto.children[0].className = 'orange';
        objecto.children[1].className = 'mostra';
      } else {
        objecto.children[0].className = 'black';
        console.log('Tolo arancione a ' + objecto.children[0].className);
        objecto.children[1].className = 'nascosta';
      }
      this.selectPage(event,"trigger");
    }
  }
}
