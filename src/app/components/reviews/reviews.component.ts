import { Component, OnInit } from '@angular/core';
import{UtilityService} from '../../common/utility.service';
import {ApiResponse} from '../../common/api-response';
import { from } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
   reviewData:any;
   recordperpage: number=1000;
   pageno: number=1;
  constructor(private _UtilityService: UtilityService,) { }

  ngOnInit() {
    let queryString='?recordperpage='+this.recordperpage+'&pageno='+this.pageno;
    this._UtilityService.getAPIData('BOWebsite','GetWebsiteReview',1,queryString,null,null)
    .subscribe((response: ApiResponse)=>{
      debugger;
      this.reviewData=response.Result;
    });
  }

}
