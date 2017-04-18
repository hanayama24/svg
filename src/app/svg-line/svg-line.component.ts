import { Component, OnInit, ElementRef, Output, Input } from '@angular/core';

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
    private listStartX = [100];
    private listStartY = [100];
    private listEndX = [];
    private listEndY = [];

    public timeOutRef;

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
        console.log('This list length end in: ', this.listEndX.length, this.listEndX);
    }

    clearAllLines() {
        event.preventDefault();
        this.listEndX = [100];
        this.listEndY = [100];
        this.listStartX = [];
        this.listStartY = [];
    }
    ngOnInit() {
   }
}
