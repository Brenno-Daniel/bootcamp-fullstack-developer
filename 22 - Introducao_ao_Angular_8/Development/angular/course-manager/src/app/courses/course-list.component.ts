import { Component, OnInit } from '@angular/core';
import { Course } from './course';

// Precisamos colocar um decorator para informar ao angular que será uma classe de componente
@Component({
    selector: 'app-course-list', // importante que na tag tenha alguma referencia a algum componente da aplicação
    templateUrl: './course-list.component.html'
})
// Deixando a classe publica para outros arquivos fazerem a referencia a ela
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 3.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1095',
                duration: 80,
                rating: 4,
                releaseDate: 'January, 2, 2020'
            }
        ]
    }


}