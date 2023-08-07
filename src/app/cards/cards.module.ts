import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateNewCardComponent } from './create-new-card/create-new-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
  declarations: [HomeComponent, CreateNewCardComponent, EditCardComponent],
  imports: [CommonModule],
})
export class CardsModule {}
