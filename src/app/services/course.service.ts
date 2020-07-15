import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  topicCategories = [
    'slides',
    'code',
    'handbook',
  ];
  teachers = [
    'Gonzalo Pincheira',
    'Sebastián Jimenez',
  ];
  courseModules = [
    {
      id: '1',
      name: 'Fundamentos del framework',
      description: 'Conocer los fundamentos del Framework como comunicación de componentes',
      teacher: 'Gonzalo Pincheira',
      requirements: [
        'javascript basics',
        'HTML basics',
        'CSS basics'
      ],
      topics: [
        { id: '1', name: 'Introducción al proyecto de curso.', type: 'slides' },
        { id: '2', name: 'Conocer proceso de Integración continua.', type: 'slides' },
        { id: '3', name: 'Typescript y Angular CLI.', type: 'slides' },
        { id: '4', name: 'Módulos, Componentes y su ciclo de vida.', type: 'code' },
        { id: '5', name: 'Inyección de dependencias.', type: 'code' },
      ]
    },
    {
      id: '2',
      name: 'Servicios y Pruebas unitarias',
      description: 'Aprender pruebas unitarias de software construyendo Servicios en Angular',
      teacher: 'Gonzalo Pincheira',
      requirements: [
        'javascript basics',
        'HTML basics',
        'CSS basics'
      ],
      topics: [
        { id: '1', name: 'Que son los Servicios y como crearlos.', type: 'slides' },
        { id: '2', name: 'Pruebas de software: Teoría Básica.', type: 'slides' },
        { id: '3', name: 'Realizando pruebas unitarias a un Servicio.', type: 'handbook' },
        { id: '4', name: '¿Cómo seguir la metodología de Software guiado por pruebas?', type: 'code' },
      ]
    },
    {
      id: '3',
      name: 'Aseguramiento de calidad y Caracterización de un software',
      description: 'Aprender pruebas unitarias de software construyendo Servicios en Angular',
      teacher: 'Gonzalo Pincheira',
      requirements: [
        'javascript basics',
        'HTML basics',
        'CSS basics'
      ],
      topics: [
        { id: '1', name: 'Pruebas funcionales.', type: 'slides' },
        { id: '2', name: 'Aplicando la teoría a las pruebas funcionales.', type: 'slides' },
        { id: '3', name: 'Una experiencia de Automatización con Cypress y Cucumber.', type: 'code' },
        { id: '4', name: 'Estrategias para el aseguramiento de calidad con las pruebas funcionales.', type: 'code' },
      ]
    },
    {
      id: '4',
      name: 'Trabajando con rutas y componentes',
      description: 'Conocer como se configuran las rutas y como implementar control de acceso',
      teacher: 'Gonzalo Pincheira',
      requirements: [
        'javascript basics',
        'HTML basics',
        'CSS basics'
      ],
      topics: [
        { id: '1', name: 'Creación y niveles de acceso de rutas utilizando Guards.', type: 'slides' },
        { id: '2', name: 'Rutas anidadas y resolución de datos antes de activar una ruta.', type: 'code' },
        { id: '3', name: 'Agregando estilos a los componentes utilizando SASS.', type: 'slides' },
      ]
    },
    {
      id: '5',
      name: 'Manejo de flujo de datos',
      description: 'Conocer RxJS y los principales operadores para generar formulario reactivos',
      teacher: 'Gonzalo Pincheira',
      requirements: [
        'javascript basics',
        'HTML basics',
        'CSS basics'
      ],
      topics: [
        { id: '1', name: 'Utilizando Observables a través del servicio HttpClient.', type: 'code' },
        { id: '2', name: 'Entendiendo la Programación reactiva', type: 'handbook' },
        { id: '3', name: 'Aplicando operadores en formularios reactivos.', type: 'code' },
      ]
    },
    {
      id: '6',
      name: 'Trabajando con rutas y componentes',
      description: 'Conocer como se configuran las rutas y como implementar control de acceso',
      teacher: 'Gonzalo Pincheira',
      requirements: [
        'javascript basics',
        'HTML basics',
        'CSS basics'
      ],
      topics: [
        { id: '1', name: 'Describir una flujo de usuario a través de pruebas funcionales.', type: 'slides' },
        { id: '2', name: 'Construir código de calidad utilizando pruebas unitarias.', type: 'slides' },
        { id: '3', name: 'Procesando datos a través de formularios reactivos usando operadores.', type: 'code' },
        { id: '4', name: 'Asignación de proyecto final a equipos.', type: 'code' },
      ]
    }
  ];
  constructor() { }

  getCourses() {
    return this.courseModules;
  }

  getCourseById(id) {
    return this.courseModules.find(
      course => course.id === id
    );
  }
}
