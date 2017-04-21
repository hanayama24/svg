import {
    Component,
    OnInit,
    ElementRef,
    Output,
    Input,
    EventEmitter
} from '@angular/core';

import polygonCoord from './polygon.const';

@Component({
  selector: 'app-svg-line',
  templateUrl: './svg-line.component.html',
  styleUrls: ['./svg-line.component.css']
})
export class SvgLineComponent implements OnInit {
    private event: MouseEvent;
    private clientX = 0;
    private clientY = 0;
    private setEndXCoord = 734;
    private setEndYCoord = 147;
    private setCurrentCx;
    private setCurrentCy;
    private listStartX = [100];
    private listStartY = [100];
    private listEndX = [];
    private listEndY = [];
    public timeOutRef;

    private startCoord = [
        { x: 0, y: 0},
        { x: 100, y: 100},
    ];
    private endCoord = [
        { x: 100, y: 100},
        { x: 200, y: 200},
    ];

    public polygonSX = [];
    public polygonSY = [];
    public polygonEX = [];
    public polygonEY = [];

    public polygonStartPoints = [];
    public polygonEndPoints = [];

    @Output()
    coordinatesChanged = new EventEmitter();

    private onEvent(event: MouseEvent): void {
        this.event = event;
    }

    private coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }

    constructor(private elementRef: ElementRef) {
    }

    clicked(event) {
        event.preventDefault();

        this.getEndXYCoord(event);
        console.log('Coordinates changed: x:', this.setEndXCoord, event.clientX, ' and y: ', this.setEndYCoord, event.clientY );
    }

    getEndXYCoord(event) {
        event.preventDefault();
        this.setEndXCoord = this.clientX;
        this.setEndYCoord = this.clientY;
        this.listEndX.push(this.setEndXCoord);
        this.listEndY.push(this.setEndYCoord);
        this.listStartX.push(this.listEndX[this.listEndX.length - 1]);
        this.listStartY.push(this.listEndY[this.listEndY.length - 1]);
        this.endCoord.push({ x: this.clientX, y: this.clientY });
        this.startCoord.push(this.endCoord[this.endCoord.length - 2]);
        console.log('Start coordinate in object: ', this.endCoord, this.endCoord.length - 1 );
        console.log('End coordinate in object: ', this.endCoord);
    }

    clearAllLines() {
        event.preventDefault();
        this.listEndX = [100];
        this.listEndY = [100];
        this.listStartX = [];
        this.listStartY = [];
        this.setCurrentCx = [];
        this.setCurrentCy = [];
        this.startCoord = [
            {x: 100, y: 100}
        ];
        this.endCoord = [
            {x: 0, y: 0}
        ];
        this.coordinatesChanged.emit(this.setEndXCoord);
    }

    makePolygon() {
        this.polygonSX = [231.5, 202.5, 202.5, 234.8, 285.8, 334.8, 388.3, 409.5, 388, 287.5];
        this.polygonSY = [321, 369.8, 427, 477.6, 497.5, 497.5, 461.9, 397.8, 333.5, 294.6];

        this.polygonEX = [202.5, 202.5, 234.8, 285.8, 334.8, 388.3, 409.5, 388, 287.5, 270.8, 213.9, 235.1];
        this.polygonEY = [369.8, 427, 477.6, 497.5, 497.5, 461.9, 397.8, 333.5, 294.6, 329, 378.3, 451.1];

        this.polygonStartPoints = polygonCoord;

        this.polygonEndPoints = this.polygonStartPoints.slice(1);

        this.endCoord = this.polygonEndPoints;
        this.startCoord = this.polygonStartPoints;

        this.startCoord.push(this.endCoord[this.endCoord.length - 2]);

        this.listEndX = this.polygonEX;
        this.listEndY = this.polygonEY;
        this.listStartX = this.polygonSX;
        this.listStartY = this.polygonSY;
    }
    ngOnInit() {
   }
}




