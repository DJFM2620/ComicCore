import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportFeedbackRoutingModule } from './report-feedback-routing.module';
import { ReportFeedbackComponent } from './pages/report-feedback/report-feedback.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportFeedbackComponent
  ],
  imports: [
    CommonModule,
    ReportFeedbackRoutingModule,
    FormsModule, // Para poder usar el ngForm y hacer uso del Formulario por Plantillas
    SharedModule
  ]
})
export class ReportFeedbackModule { }
