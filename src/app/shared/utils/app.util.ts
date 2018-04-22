// Angular Imports
import {FormControl, FormGroup} from "@angular/forms";

/**
 * Utilities to be used throughout app
 */
export class AppUtils {

  public static markAsDirty(group: FormGroup) {
    group.markAsDirty();
    for (let i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsDirty();
      } else if (group.controls[i] instanceof FormGroup) {
        AppUtils.markAsDirty(<FormGroup>group.controls[i]);
      }
    }
  }
}
