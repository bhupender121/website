import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilityService  } from '../../app/common/utility.service'


export const WebConfig = {
  PrivateAPIDomain: "https://livesiteapi.omnibiz.com/api/",
  BannerRootPath: "https://dealsimg.vconnect.com/",
  CompanyLogoPath: "https://az742041.vo.msecnd.net/vcsites/vcimages/resource/",
  WebsiteRootPath: "https://m.vconnect.com/",
  IconPath: "https://dealsimg.vconnect.com/SVG_Images/",
  clevertapAPI: "https://api.clevertap.com/1/",
  currentURL: window.location.href,
  
  Gaid:'UA-39413994-1',
  facebookAppID: "699173753481084",
  meta_tag_fb_App_Id: '699173753481084',
  meta_tag_company_logo: 'https://m.vconnect.com/img/vconnect-logo-desktop.png',
  meta_tag_twitter_card: 'summary',
  meta_tag_twitter_site: '@vconnectnigeria',
  meta_tag_og_type: 'Website',
  meta_tag_og_site_name: 'VConnect™',
  meta_tag_og_locale: 'en_US',

  vc_countryCode: 'countryCode',
  vc_cookiesDomain: '.vconnect.com',
}

