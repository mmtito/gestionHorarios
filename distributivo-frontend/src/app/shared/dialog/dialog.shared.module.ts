import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    imports: [MatDialogModule],
    exports: [DialogComponent],
    declarations: [DialogComponent],
    providers: [],
})
export class DialogSharedModule { }
