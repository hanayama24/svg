import { Component, OnInit, ElementRef, Output, Input } from '@angular/core';
import { SvgContentComponent } from './svg-content.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations/@angular/animations';

@Component({
  selector: 'app-svg',
  styleUrls: ['./svg.component.css'],
  animations: [
    trigger("fadeInOut", [
      state("open", style({opacity: 1})),
      state("closed", style({opacity: 0})),
      transition("open <=> closed", animate( "3000ms" )),
    ])
  ],
  templateUrl: './svg.component.html',
})
export class SvgComponent implements OnInit {
    public count = 0;
    private event: MouseEvent;
    private clientX = 0;
    private clientY = 0;
    private setCurrentCx = undefined;
    private setCurrentCy =  undefined;
    public getPathD;
    public state = 'open';
    public timeOutRef;

    private onEvent(event: MouseEvent): void {
        this.event = event;
    }

    private coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }

    // tslint:disable-next-line:member-ordering
    @Output() svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    constructor(private elementRef: ElementRef) {}

    clicked(event) {
        event.preventDefault();
        this.count++;
        this.setCurrentCx = event.clientX;
        this.setCurrentCy = event.clientY;
        this.setPathD();
        this.beginAnim();
    }

    private setPathD() {
        // const svgElement = document.createElement("g");
        // svgElement.innerHTML="<circle>1</circle>";
        // console.log(svgElement);

        return this.getPathD=`M256.5,377.8c0-12.4,8.4-21.2,20.2-21.2c11.8,0,19.5,8.7,19.8,21.2c0,11.8-7.7,20.9-20.2,20.9
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
             this.setCurrentCx = undefined;
             this.setCurrentCy =  undefined;
  }



}


