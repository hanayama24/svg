import {
    Component,
    OnInit,
    Output,
    Input,
} from '@angular/core';

@Component({
    styleUrls: ['./svg.component.css'],
    selector: 'app-svg-content',
    templateUrl: './svg-content.component.html',
})
export class SvgContentComponent implements OnInit {
        public setPathD() {
            const getPathD = `M256.5,377.8c0-12.4,8.4-21.2,20.2-21.2c11.8,0,19.5,8.7,19.8,21.2c0,11.8-7.7,20.9-20.2,20.9
            C264.6,398.6,256.5,389.5,256.5,377.8z M256.5,496.5c0-12.4,8.4-21.2,20.2-21.2c11.8,0,19.5,8.7,19.8,21.2
            c0,11.8-7.7,20.9-20.2,20.9C264.6,517.3,256.5,508.2,256.5,496.5`;
        }
      ngOnInit() {

  }
}