import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { DropdownModule } from 'ng2-bootstrap'

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LayoutComponent } from './components/layout/layout.component'
import { MainComponent } from './components/main/main.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'

import { AsideToggleDirective } from './directives/aside/aside.directives'
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav/nav.directives'
import {
  MobileSidebarToggleDirective, SidebarToggleDirective,
  SidebarOffCanvasCloseDirective
} from './directives/sidebar/sidebar.directives'

export const components: any[] = [
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  MainComponent,
  SidebarComponent,
]

export const directives: any[] = [
  AsideToggleDirective,
  MobileSidebarToggleDirective,
  NavDropdownDirective,
  NavDropdownToggleDirective,
  SidebarToggleDirective,
  SidebarOffCanvasCloseDirective,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

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
