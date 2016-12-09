import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { DropdownModule } from 'ng2-bootstrap'

import { components } from './components'
import { directives } from './directives'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),

    DropdownModule,
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
  ]
})

export class CoreUIModule { }
