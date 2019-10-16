import { Component, OnInit } from '@angular/core';
import{UtilityService} from '../../common/utility.service'
import{ApiResponse} from '../../common/api-response'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   websiteData:any;
  constructor(private _UtilityService:UtilityService) { }

  ngOnInit() {
    let queryString='';
    this._UtilityService.getAPIData('BOWebsite','GetWebsiteDetails',1,queryString,null,null)
    .subscribe((response: ApiResponse)=>{
      debugger;
      this.websiteData=response.Result;
    });

  }

}
