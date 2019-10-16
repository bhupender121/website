import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../../common/utility.service'
import { ApiResponse } from '../../common/api-response';
import { from } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  recordperpage: number=1000;
  pageno: number=1;
  photoGalleryData:any;
  constructor(private _UtilityService: UtilityService) { }


  _
  ngOnInit() {
    let queryString='?recordperpage='+this.recordperpage+'&pageno='+this.pageno;
    this._UtilityService.getAPIData('BOWebsite','GetWebsitephotos',1,queryString,null,null)
    .subscribe((response: ApiResponse) => {
      debugger;
       this.photoGalleryData=response.Result;

    })
    
  }

}
