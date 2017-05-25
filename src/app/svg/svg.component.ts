import {
    Component,
    OnInit,
    ElementRef,
    Output,
    Input,
    EventEmitter
} from '@angular/core';
import { SvgContentComponent } from './svg-content.component';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations/@angular/animations';

import polygonCoord from '../svg-line/polygon.const';

@Component({
    selector: 'app-svg',
    styleUrls: ['./svg.component.css'],
    animations: [
        trigger('fadeInOut', [
        state('closed', style({
            opacity: 0,
            transform: 'scale(1)',
        })),
        state('open', style({
            opacity: 0.7,
            transform: 'scale(1)',
        })),
        transition('open <=> closed', animate( '600ms ease-in-out' )),
        ])
    ],
    templateUrl: './svg.component.html',
})
export class SvgComponent implements OnInit {
    public count = 0;
    private event: MouseEvent;
    private clientX = 0;
    private clientY = 0;
    private clickedClientX = 0;
    private clickedClientY = 0;
    private setCurrentCx = [100];
    private setCurrentCy = [100];
    private radiusSixOrEight = 8;
    private startCoord = [];

    public getPathD;
    public state = 'open';
    public timeOutRef;
    public coordinatesCx: number[] = [100, 200];
    public coordinatesCy: number[] = [100, 200];

    private onEvent(event: MouseEvent): void {
        this.event = event;
    }

    private coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }

    // tslint:disable-next-line:member-ordering


    constructor(private elementRef: ElementRef) {
        this.coordinatesCx = [100, 200];
        this.coordinatesCy = [100, 200];
    }

    clicked(event, o) {
        event.preventDefault();
        this.count++;
        this.setCurrentCx.push(this.clientX);
        this.setCurrentCy.push(this.clientY);
        console.log('State change: ', this.state);
        this.state = this.state === 'open' ? 'closed' : 'open';
        console.log('State change: ', this.state);
        setTimeout(() => {
            this.state = this.state === 'open' ? 'closed' : 'open';
            console.log('Timeout ready!!!!! ', this.state);
        }, 610);
        this.clickedClientX = this.clientX;
        this.clickedClientY = this.clientY;
        this.startCoord.push({x: this.clientX, y: this.clientY });
        this.getRadius(o);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRadius(o) {
        return o ? 8 : 6;
    }

    iSeeYouChangedCoord(event) {
        console.log('I see you changed coord');
        this.setCurrentCx = [];
        this.setCurrentCy = [];
        this.startCoord = polygonCoord;
    }

    private setArc() {
        return ` M 432, 273.5
                c 11.6, 0, 22.5, 2.7, 32.2, 7.6
                                M 464.2, 281.1
                c 13.9, 7, 25.3, 18.3, 32.2, 32.2
                                M 496.4, 313.3
                c 4.9, 9.7, 7.6, 20.6, 7.6, 32.2
                                M 496.4, 377.7
                c 4.9-9.7,7.6-20.6,7.6-32.2
                                M 496.4, 377.7
                c -7, 13.9 -18.3, 25.3 -32.2, 32.2
                                M 464.2, 409.9
                c -9.7, 4.9 -20.6,7.6 -32.2,7.6
                                M 432, 417.5
                c -39.8,0 -72-32.2-72-72
                s 32.2-72, 72-72`;
        // 'M ' + this.clientX  + ', ' +  this.clientY + ' A50,50 0 1 0 315, 160';
    }

    private setPathD() {
        // const svgElement = document.createElement("g");
        // svgElement.innerHTML="<circle>1</circle>";
        // console.log(svgElement);

        return this.getPathD = `M256.5,377.8c0-12.4,8.4-21.2,20.2-21.2c11.8,0,19.5,8.7,19.8,21.2c0,11.8-7.7,20.9-20.2,20.9
        C264.6,398.6,256.5,389.5,256.5,377.8z M256.5,496.5c0-12.4,8.4-21.2,20.2-21.2c11.8,0,19.5,8.7,19.8,21.2
        c0,11.8-7.7,20.9-20.2,20.9C264.6,517.3,256.5,508.2,256.5,496.5`;
    }

    private createSvgElement() {
        // const svgElement = `<div>SVG ?,  no plain HTML string</div>`;
        const svgContainer = this.elementRef.nativeElement.querySelector('.svg-container');
        console.log('Element Svg created!!!', svgContainer);
    }

    private  beginAnim() {
        // toggle state to kickstart animation
        this.state = this.state === 'open' ? 'closed' : 'open';
    }

  ngOnInit() {

  }



}


