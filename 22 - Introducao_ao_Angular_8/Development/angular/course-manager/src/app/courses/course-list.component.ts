import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

// Precisamos colocar um decorator para informar ao angular que será uma classe de componente
@Component({
    // selector: 'app-course-list', // importante que na tag tenha alguma referencia a algum componente da aplicação
    templateUrl: './course-list.component.html'
})
// Deixando a classe publica para outros arquivos fazerem a referencia a ela
export class CourseListComponent implements OnInit {

    // o underline _ serve para sinalizar aos desenvolvedores que a variável deve ficar somente neste componente
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    _filterBy: string;

    // Angular utiliza para fazer injeção através do construtor
    constructor(private CourseService: CourseService) { }

    ngOnInit(): void {
        this._courses = this.CourseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string) {
        this._filterBy = value;

        // Filtrando o curso e igualando o valor do filtro em memória ao filtro de curso
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }


}