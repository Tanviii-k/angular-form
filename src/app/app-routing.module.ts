import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "assetForm",component: AssetFormComponent},
  {path: "details",component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
