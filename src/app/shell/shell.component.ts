import { Component, OnInit, Directive, ViewContainerRef, TemplateRef, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { State, getShellTitle } from 'app/store';
import * as shell from 'app/store/shell';

@Directive({
  selector: '[appShellTitle]'
})
export class ShellTitleDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private el: ElementRef,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new shell.SetTitleAction(this.getTemplateContent()));
  }

  private getTemplateContent() {
    const viewRef = this.templateRef.createEmbeddedView('');
    const value = viewRef.rootNodes[0].innerText;
    viewRef.destroy();
    return value;
  }
}

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  titleObs = this.store.select(getShellTitle);

  constructor(
    private store: Store<State>
  ) { }


  ngOnInit() {
  }

}
