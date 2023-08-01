import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject();
  private debouncerSuscription?: Subscription;
  
  @Input()
  public placeholder: string = '';
  
  @Input()
  public initialValue: string = '';

  public inputSearch: string = ''

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => this.onDebounce.emit(value))
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


  emmitValue(){
    this.onValue.emit(this.inputSearch);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
