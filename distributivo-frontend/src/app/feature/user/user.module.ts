import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ComboboxRoleComponent } from '../role/combobox-role/combobox-role.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { PaginationUserComponent } from './pagination-user/pagination-user.component';
import { ToolbarUserComponent } from './toolbar-location/toolbar-user.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserComponent } from './user.component';
import { ListRoleUserComponent } from './list-role-user/list-role-user.component';
import { ToolbarSharedModule } from 'src/app/shared/toolbar/toolbar.shared.module';
import { MaterialExampleModule } from 'src/app/material.module';
import { BottomSheetOverviewUser, BottomSheetuser } from './upload-modal-user/upload-modal-.component';

const routes: Route[] = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes),
   ToolbarSharedModule,
   MaterialExampleModule
  ],
  exports: [],
  declarations: [
    UserComponent,
    UserListComponent,
    PaginationUserComponent,
    ToolbarUserComponent,
    ModalUserComponent,
    ComboboxRoleComponent,
    ListRoleUserComponent,
    BottomSheetuser,
    BottomSheetOverviewUser
  ],
  providers: [],
})
export class UserModule {}
