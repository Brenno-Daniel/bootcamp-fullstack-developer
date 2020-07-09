import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'] // Recebe um array de parametro, para caso queiramos passar mais de uma folha de estilos
})
export class StarComponent implements OnChanges {
    
    // Faz com que a variavel esteja elegivel para receber alguma informação de um elemento interno
    @Input()
    rating: number = 0;

    starWidth: number;

    
    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}