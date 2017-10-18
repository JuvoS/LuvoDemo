define(function(require){return require("../common/loginNav"),require("../common/footer"),require("../template")("analysis/analysisMain",function(a,b){"use strict";var c=this,d=c.$helpers,e=function(d,e){e=e||a;var f=c.$include(d,e,b);return k+=f},f=a.data,g=c.$escape,h=a.classIds,i=c.$each,j=(a.val,a.key,c.$string),k="";return e("../common/loginNav"),k+=' <div class="ietips"> \u5c0a\u656c\u7684\u7528\u6237,\u5546\u6807\u5206\u6790\u4e8e\u5373\u65e5\u8d77\u5f00\u59cb\u4e0d\u518d\u4fdd\u969cIE8\u6d4f\u89c8\u5668\u4e0b\u7684\u53ef\u7528\u6027\u3002\u5efa\u8bae\u60a8\u5c3d\u5feb\u5347\u7ea7\u6d4f\u89c8\u5668\uff0c\u6216\u8005\u4f7f\u7528Chrome\u3001Firefox\u3002 </div> <div class="m-container"> <div class="tab_title clearfix mt20"> <span class="tab_li current "><a href="javascript:void(0);">',k+=2==f.memberType?"\u884c\u4e1a":"\u6982\u89c8",k+='</a></span> <span class="tab_li"><a href="/analysis/search/">\u4e2a\u6848</a></span> </div> <div class="mt20 clearfix"> <span class="fl" style="color: #999"> ',k+=2==f.memberType?"\u884c\u4e1a\u662f\u5bf9\u6240\u5728\u884c\u4e1a\u7c7b\u522b\u7684\u7533\u8bf7\u4eba\u6392\u540d\u3001\u5168\u56fd\u5730\u57df\u5206\u5e03\u3001\u7533\u8bf7\u65f6\u95f4\u8d8b\u52bf\u7b49\u7684\u6982\u51b5\u7edf\u8ba1\u3002 ":"\u6982\u89c8\u662f\u5bf9\u5546\u6807\u7684\u7533\u8bf7\u4eba\u6392\u540d\u3001\u5730\u57df\u5206\u5e03\u3001\u65f6\u95f4\u8d8b\u52bf\u3001\u7c7b\u522b\u6ce8\u518c\u91cf\u6392\u540d\u7684\u7edf\u8ba1\u5206\u6790\u3002",k+=' </span> <a href="/notice/index/" target="_blank" style="color:#999;"> <span class="fr">\u6570\u636e\u66f4\u65b0\u81f3\u516c\u544a\u7b2c<i>',k+=g(d.analysisSplit(f.numberDesc,1)),k+="</i>\u671f\uff08",k+=g(d.analysisSplit(f.numberDesc,2)),k+='\uff09</span> </a> </div>  <div class="item" id="item3"> <div class="trade-rank mb20"> <div class="territory-top clearfix mb10"> <h3 class="fl">\u7533\u8bf7\u4eba\u6392\u540d</h3> <div class="fr territory-input"> <div class="fl"> <label style="float: left;padding-top: 6px;">\u5730\u533a\uff1a</label> <input id="city-picker2" readonly class="txt-input" type="text" value="\u5168\u56fd" data-toggle="city-picker" /> </div> <div class="fl select-proposer"> <span class="select-input-title fl">\u7c7b\u522b\uff1a</span> <div class="select-input fl jShowAllLi" click="1" id="pro_class">',k+=""!=h&&2==f.memberType?g(h):"\u5168\u7c7b",k+='</div> <div class="select-list"> <div class="select-class jDiyu"> <ul class="clearfix"> ',i(f.diyu.classConfig,function(a,b){k+=' <li data-key="',k+=g(b),k+='"> <a href="javascript:void(0);"> ',10>b?(k+=" 0",k+=g(b),k+=" "):(k+=" ",k+=g(b),k+=" "),k+=" ",k+=g(a),k+=" </a> </li> "}),k+=' </ul> <div class="btn-choise"> <a href="javascript:void(0);" class="btn-choise-yes" data-type="pro">\u786e\u5b9a</a> <a href="javascript:void(0);" class="btn-choise-no">\u53d6\u6d88</a> </div> </div> </div> </div> <div class="fl datebox"> <label>\u5e74\u4efd\uff1a</label> <div class="txt-date jYearDate"> <span click="1" id="pro_start">',k+=g(f.start_year),k+='</span> <ul type="Pro"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> <label> \u81f3 </label> <div class="txt-date jYearDate"> <span click="1" id="pro_end">',k+=g(f.end_year),k+='</span> <ul type="Pro"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> </div> </div> </div> <table class="table"> <thead> <tr> <td width="30">\u6392\u540d</td> <td width="260">\u7533\u8bf7\u4eba\u540d\u79f0</td> <td width="260">\u5730\u5740</td> <td width="190" class="td-center">\u7b5b\u9009\u6761\u4ef6\u4e0b\u7684\u5546\u6807\u6570\u91cf\uff08\u4ef6\uff09</td> <td class="td-center">\u5546\u6807\u603b\u91cf\uff08\u4ef6\uff09</td> <td class="td-center">\u5360\u6bd4</td> </tr> </thead> <tbody id="pro_list"></tbody> </table> <div class="loading" id="pro_loading" style="display:none;"><img src="/Static/style/slice/loading.gif" alt=""></div> <div class="loading" id="pro_no_data" style="display:none;"><p style="padding-top:150px">\u7c7b\u522b\u9009\u62e9\u592a\u591a\u5566\uff0c\u8bf7\u7cbe\u7b80\u5662</p></div>  <div class="pages" id="pro_pages">   </div> </div> </div>   <div class="item" id="item1"> <div class="territory clearfix">  <div class="territory-top clearfix"> <h3 class="fl">\u5730\u57df\u5206\u5e03</h3> <div class="fr territory-input">  <div class="fl select-proposer"> <span class="select-input-title fl">\u7c7b\u522b\uff1a</span> <div class="select-input fl jShowAllLi" id="loc_class">',k+=""!=h&&2==f.memberType?g(h):"\u5168\u7c7b",k+='</div> <div class="select-list"> <div class="select-class jDiyu"> <ul class="clearfix"> ',i(f.classConfig,function(a,b){k+=' <li data-key="',k+=g(b),k+='"> <a href="javascript:void(0);"> ',10>b?(k+=" 0",k+=g(b),k+=" "):(k+=" ",k+=g(b),k+=" "),k+=" ",k+=g(a),k+=" </a> </li> "}),k+=' </ul> <div class="btn-choise"> <a href="javascript:void(0);" class="btn-choise-yes" data-type="loc">\u786e\u5b9a</a> <a href="javascript:void(0);" class="btn-choise-no">\u53d6\u6d88</a> </div> </div> </div> </div>   <div class="fl datebox" > <label>\u5e74\u4efd\uff1a</label> <div class="txt-date jYearDate"> <span click="1" id="loc_start">',k+=g(f.start_year),k+='</span> <ul type="Loc"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> <label> \u81f3 </label> <div class="txt-date jYearDate"> <span click="1" id="loc_end">',k+=g(f.end_year),k+='</span> <ul type="Loc"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> </div>  </div> </div>   <div class="map fl"> <div class="map-img" style="height: 600px; width: 750px"> <div id="mapchina" style="height: 600px;"></div> </div> <div class="map-num"> <p class="t-center">\u5168\u56fd\u7533\u8bf7\u91cf\u4e3a<span id="loc_total">',k+=g(f.locationTotal),k+='\u4ef6</span></p> </div> </div>   <div class="map-rank table-rank"> <table> <caption>\u7701\u4efd\u7533\u8bf7\u91cfTop10</caption> <thead> <tr> <td width="50">\u6392\u540d</td> <td>\u7701\u4efd</td> <td width="120">\u7533\u8bf7\u91cf\uff08\u4ef6\uff09</td> </tr> </thead> <tbody id="loc_top10"> ',i(f.diyu.locationData,function(a,b){k+=" ",10>b&&(k+=" <tr> <td><b>",k+=g(b+1),k+="</b></td> <td>",k+=g(a.area),k+="</td> <td>",k+=g(a.applyNum),k+="</td> </tr> "),k+=" "}),k+=' </tbody> </table> <div class="loading" id="loc_loading" style="display:none;"><img src="/Static/style/slice/loading.gif" alt=""></div> </div>  </div> </div>   <div class="item" id="item2"> <div class="time timedate"> <div class="territory-top clearfix"> <h3 class="fl">\u65f6\u95f4\u8d8b\u52bf</h3> <div class="fr territory-input">  <div class="fl"> <label style="float: left;padding-top: 6px;">\u5730\u533a\uff1a</label> <input id="city-picker3" readonly class="txt-input" type="text" value="" data-toggle="city-picker"> </div>   <div class="fl select-proposer"> <span class="select-input-title fl">\u7c7b\u522b\uff1a</span> <div class="select-input fl jShowAllLi" id="year_class">',k+=""!=h&&2==f.memberType?g(h):"\u5168\u7c7b",k+='</div> <div class="select-list"> <div class="select-class jDiyu"> <ul class="clearfix"> ',i(f.diyu.classConfig,function(a,b){k+=' <li data-key="',k+=g(b),k+='"> <a href="javascript:void(0);"> ',10>b?(k+=" 0",k+=g(b),k+=" "):(k+=" ",k+=g(b),k+=" "),k+=" ",k+=g(a),k+=" </a> </li> "}),k+=' </ul> <div class="btn-choise"> <a href="javascript:void(0);" class="btn-choise-yes" data-type="Year">\u786e\u5b9a</a> <a href="javascript:void(0);" class="btn-choise-no">\u53d6\u6d88</a> </div> </div> </div> </div>  <div class="fl datebox"> <label>\u5e74\u4efd\uff1a</label> <div class="txt-date jYearDate"> <span click="1" id="year_start">',k+=g(f.start_year),k+='</span> <ul type="Year"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> <label> \u81f3 </label> <div class="txt-date jYearDate"> <span click="1" id="year_end">',k+=g(f.end_year),k+='</span> <ul type="Year"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> </div> </div> </div> <div class="time-img" style="height: 300px; width: 100%"> <div id="timebox" style="height: 300px; width: 100%"></div> </div> <div class="mt10"> <p class="text-center" id="year_text">',k+=g(f.start_year),k+="-",k+=g(f.end_year),k+='\u5e74 \u5546\u6807\u7533\u8bf7\u8d8b\u52bf\u8868</p> </div> </div> </div>   <div class="item" id="item4"> <div class="trade-rank mb20 clearfix"> <div class="territory-top clearfix mb10"> <h3 class="fl">\u7c7b\u522b\u7533\u8bf7\u91cf\u6392\u540d</h3> <div class="fr territory-input"> <div class="fl"> <label style="float: left;padding-top: 6px;">\u5730\u533a\uff1a</label> <input id="city-picker1" readonly class="txt-input" type="text" value="" data-toggle="city-picker"> </div> <div class="fl datebox"> <label>\u5e74\u4efd\uff1a</label> <div class="txt-date jYearDate"> <span click="1" id="class_start">',k+=g(f.start_year),k+='</span> <ul type="Class"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> <label> \u81f3 </label> <div class="txt-date jYearDate"> <span click="1" id="class_end">',k+=g(f.end_year),k+='</span> <ul type="Class"> <li>',k+=j(f.yearArray),k+='</li> </ul> </div> </div> </div> </div> <div class="twotable fl"> <table class="table"> <thead> <tr> <td>\u6392\u540d</td> <td>\u7c7b\u522b</td> <td>\u5546\u6807\u6570\u91cf\uff08\u4ef6\uff09</td> </tr> </thead> <tbody id="class_list_10"> </tbody> </table> <div class="loading" id="class_loading1" style="display:none;"><img src="/Static/style/slice/loading.gif" alt=""></div> </div> <div class="twotable fr"> <table class="table"> <thead> <tr> <td>\u6392\u540d</td> <td>\u7c7b\u522b</td> <td>\u5546\u6807\u6570\u91cf\uff08\u4ef6\uff09</td> </tr> </thead> <tbody id="class_list_20"> </tbody> </table> <div class="loading" id="class_loading2" style="display:none;"><img src="/Static/style/slice/loading.gif" alt=""></div> </div> </div> </div>  </div> ',e("../common/footer"),new String(k)})});