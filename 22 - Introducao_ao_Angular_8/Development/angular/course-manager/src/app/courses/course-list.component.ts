import { Component } from '@angular/core';

// Precisamos colocar um decorator para informar ao angular que será uma classe de componente
@Component({
    selector: 'app-course-list', // importante que na tag tenha alguma referencia a algum componente da aplicação
    template: '<h2> Course List </h2>'
})
export class CourseListComponent {

}