import {
    Component,
    OnInit,
    ElementRef,
    Output,
    Input,
    EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-svg-curves',
  templateUrl: './svg-curves.component.html',
  styleUrls: ['./svg-curves.component.css']
})
export class SvgCurvesComponent implements OnInit {
    private event: MouseEvent;
    private clientX = 0;
    private clientY = 0;

    constructor() { }

    private onEvent(event: MouseEvent): void {
        this.event = event;
    }

    private coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }

    private setArc() {
        return 'M ' + this.clientX / 12 + ', ' +  this.clientY / 12 + ' A50,50 0 1 0 315, 160';
    }

    ngOnInit() {
    }

}
