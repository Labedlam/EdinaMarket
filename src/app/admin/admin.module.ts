import { NgModule} from '@angular/core';
import { CommonModule}  from '@angular/common';

import {AdminComponent} from './containers/admin/admin.component';

@NgModule({
    declarations: [
        //holds components for this module
        AdminComponent
    ],
    imports: [
        CommonModule,
        
    ],
    exports:[
        AdminComponent
    ]
})

export class AdminModule{}