import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { DeviceService } from 'src/app/libs/services/device.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  mobileQuery: MediaQueryList;
  showSpinner = false;
  userName = '';
  isAdmin = false;
  user: any;
  private _mobileQueryListener: () => void;
  private autoLogoutSubscription: Subscription = new Subscription();

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,private authService: AuthService, private deviceService: DeviceService) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.userName = this.authService.userValue.email ? this.authService.userValue.email : '';
    this.user = this.authService.userValue;
    // this.isAdmin = this.checkAdmin(this.user);
  }

  async ngOnInit(){
    const result = await this.deviceService.getById(1).toPromise();
    console.log(result);
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
    this.authService.logout();
  }
}
