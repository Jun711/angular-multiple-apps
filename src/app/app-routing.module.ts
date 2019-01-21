import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let childModule = '';
let redirectToPath = '';

function isWeb() {
	// check if it is web or mobile
	return true;
}

if (isWeb()) {
  childModule = '../../projects/web/src/app/app.module#WebModule';
  // childModule = './home/home.module#HomeModule';
  redirectToPath = '';
} else {
  childModule = '../../projects/mobile/src/app/app.module#MobileModule';
  // childModule = './home/home.module#HomeModule';
  redirectToPath = 'mobile';
}
console.log('childModule:', childModule);
console.log('redirectToPath:', redirectToPath);

const routes: Routes = [
  { path: '', loadChildren: isWeb() ? 'src/app/web/web.module#WebModule' : 'src/app/mobile/mobile.module#MobileModule'},
  // { path: 'mobile', loadChildren: './mobile/mobile.module#MobileModule' },
  // { path: 'web', loadChildren: './web/web.module#WebModule' },
  // { path: '**', redirectTo: redirectToPath }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // WebModule.forRoot(),
    // MobileModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
