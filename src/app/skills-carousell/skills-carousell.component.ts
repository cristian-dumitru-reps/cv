import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-carousell',
  templateUrl: './skills-carousell.component.html',
  styleUrls: ['./skills-carousell.component.css'],
})
export class SkillsCarousellComponent implements OnInit {
  index_page = 0;
  constructor() {}

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
        'redux_skill_icon',
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
        'redux_skill_icon',
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

  ngOnInit(): void {}

  selectPage(event: any) {
    const objecto = document.getElementById(event.currentTarget.id);
    console.log(
      'Sono dentro il selectPage con indice:' + event.currentTarget.id
    );
    event.stopPropagation();
    switch (event.currentTarget.id) {
      case 'frontend':
        this.index_page = 0;
        break;
      case 'web':
        this.index_page = 1;
        break;
      case 'mobile':
        this.index_page = 2;
        break;
      case 'desktop':
        this.index_page = 3;
        break;
      case 'backend':
        this.index_page = 4;
        break;
      case 'framework':
        this.index_page = 5;
        break;
      case 'database':
        this.index_page = 6;
        break;
      case 'uix':
        this.index_page = 7;
        break;
      case 'software':
        this.index_page = 8;
        break;
      case 'copywriting':
        this.index_page = 9;
        break;
      case 'management':
        this.index_page = 10;
        break;
      case 'marketing':
        this.index_page = 11;
        break;
      default:
        this.index_page = 0;
        break;
    }
  }

  hideSubMenu(event: any) {
    console.log('Entro con:' + event.currentTarget.id);
    if (
      event.currentTarget.id == 'frontend' ||
      event.currentTarget.id == 'backend' ||
      event.currentTarget.id == 'uix'
    ) {
      const objecto = document.getElementById(event.currentTarget.id);

      if (objecto) {
        console.log(objecto.children);
        if (objecto.children[1].className == 'nascosta') {
          objecto.children[1].className = 'mostra';
        } else {
          objecto.children[1].className = 'nascosta';
        }
        console.log(objecto.children[1]);
        this.selectPage(event);
      }
    }
  }
}
