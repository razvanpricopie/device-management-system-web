import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  mobileQuery: MediaQueryList;
  showSpinner = false;
  userName = '';
  isAdmin = false;
  user: any;
  private _mobileQueryListener: () => void;
  private autoLogoutSubscription: Subscription = new Subscription();

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.userName = this.authService.userValue.email ? this.authService.userValue.email : '';
    // this.user = this.authService.userValue;
    // this.isAdmin = this.checkAdmin(this.user);
  }

  // checkAdmin(user: any){
  //   let isAdmin = false;
  //   user.roles.forEach((role : any) => {
  //     if(role.role === "ADMIN") isAdmin = true;
  //   });
  //   return isAdmin;
  // }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.autoLogoutSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  logout(){
    //this.authService.logout();
  }
}
