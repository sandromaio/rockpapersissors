import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OvoComponent } from './ui/main-root/ovo.component';
import { BoardComponent } from './ui/game/board/board.component';

@NgModule({
  declarations: [
    OvoComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OvoComponent]
})
export class AppModule { }
