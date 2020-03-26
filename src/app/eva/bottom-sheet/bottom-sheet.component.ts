import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Inject,
} from '@angular/core';
import { EvaBottomSheetService } from './eva-bottom-sheet.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'eva-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state(
        'open',
        style({
          height: '*',
          padding: '1rem',
        })
      ),
      state(
        'closed',
        style({
          height: 0,
          padding: 0,
        })
      ),
      transition('open <=> closed', [animate('0.25s')]),
    ]),
  ],
})
export class EvaBottomSheetComponent implements OnInit {
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef })
  public viewContainerRef: ViewContainerRef;

  constructor(
    public evaBottomSheetService: EvaBottomSheetService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this._loadComponent();
  }

  private _loadComponent() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
      this.evaBottomSheetService.bottomSheetData.component
    );
    if (componentFactory) {
      this.viewContainerRef.clear();
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
    }
  }
}
