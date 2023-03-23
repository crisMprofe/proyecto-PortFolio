import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './componentes/header/header.component';
import { LogosComponent } from './componentes/logos/logos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { InfopersonalComponent } from './componentes/infopersonal/infopersonal.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    BannerComponent,
    EstudiosComponent,
    InfopersonalComponent,

    HabilidadesComponent,
     ExperienciaComponent,
     ProyectosComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
