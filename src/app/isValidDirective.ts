import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appIsValid]'
})
export class isValidDirective {
  constructor(private el:ElementRef) { 
  }

  @HostListener('blur') onMouseLeave() {
    this.isValidCheck();
  }
  
  private isValidCheck() {
      console.log(this.el);
      if(this.el.nativeElement.value === "")
      {
        this.el.nativeElement.classList.add('is-invalid');
        this.el.nativeElement.classList.remove('is-valid');
      }
      else{
          this.el.nativeElement.classList.remove('is-invalid');
          this.el.nativeElement.classList.add('is-valid');
      }
    //this.el.nativeElement.style.backgroundColor = color;
  }

}