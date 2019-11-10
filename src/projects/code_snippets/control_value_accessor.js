const code = `
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator } from "@angular/forms";
@Component({
  selector: "app-palitra",
  templateUrl: "./palitra.component.html",
  styleUrls: ["./palitra.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PalitraComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: PalitraComponent,
      multi: true
    }
  ]
})
export class PalitraComponent implements ControlValueAccessor, Validator {
  @Input() cvetove: string[] = [];

  private izbranCvqt: string;
  private onChange: (value: string) => void;

  validate() {
    if (!this.izbranCvqt) {
      return {
        'required': 'Please, select a color'
      }
    }
    return null
  }

  setIzbranCvqt(cvqt: string) {
    this.izbranCvqt = cvqt;
    this.onChange(cvqt);
  }

  writeValue(value: string) {
    this.izbranCvqt = value;
  }

  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched() {}
}
`;
export default code;