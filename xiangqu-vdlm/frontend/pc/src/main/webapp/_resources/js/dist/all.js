define("plugins/browser",[],function(){var a=navigator.userAgent,b=window,c=b.opera?opera.version().replace(/\d$/,"")-0:parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(a)||[,0])[1]),d=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],e=!1;for(var f=0;f<d.length;f++)if(a.indexOf(d[f])>0){e=d[f];break}return{ie:!!b.VBArray&&Math.max(document.documentMode||0,c),firefox:!!b.netscape&&c,opera:!!b.opera&&c,chrome:!!b.chrome&&c,safari:/apple/i.test(navigator.vendor)&&c,mobile:e}}),define("base/utils",["jquery","amaze","underscore"],function(b,c,d){var e={api:{logout:function(a,b){var c=this;$.ajax({url:host+"/logout",type:"POST",dataType:"json",success:function(a){a.errorCode==200?($(window).off("beforeunload.pro"),e.tool.goLogin(1)):b&&b(a.moreInfo)},error:function(a){b&&b("服务器暂时没有相应，请稍后重试...")}})},move:function(a,b){var c=this;$.ajax({url:host+"/shop/movestart",type:"POST",dataType:"json",success:function(c){c.errorCode==200?a&&a(c):b&&b(c.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():b&&b("服务器暂时没有相应，请稍后重试...")}})},moveAgain:function(a,b,c){var d=this;$.ajax({url:host+"/shop/step5",data:{shopUrl:a.shopUrl,option:a.option},type:"POST",dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},checkMoveCode:function(a,b,c,d){var f=this;$.ajax({url:host+"/shop/step2check",type:"POST",dataType:"json",data:{rnd:a,itemId:b},success:function(a){a.errorCode==200?c&&c(a):d&&d(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("服务器暂时没有相应，请稍后重试...")}})},getAddressParent:function(a,b,c){if(!a)return!1;$.ajax({url:host+"/zone/"+a+"/parents",type:"POST",dataType:"json",success:function(a){a.data.length?b&&b(a):c&&c()},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},address:function(a,b,c){if(!a)return;var d=this;$.ajax({url:host+"/zone/"+a+"/children",type:"POST",dataType:"json",success:function(a){a.data.length?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getShopInfo:function(a,b,c){var d=this;$.ajax({url:host+"/shop/"+a,type:"POST",dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},updateShop:function(a,b,c){var d=this;$.ajax({url:host+"/shop/update",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},editMobile:function(a,b,c){var d=this;$.ajax({url:host+"/shop/saveMobileAndTel",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},updatePostAge:function(a,b,c){var d=this;$.ajax({url:host+"/shop/updatePostageSet",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveDesc:function(a,b,c){var d=this;$.ajax({url:host+"/fragment/save",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},delDesc:function(a,b,c){var d=this;$.ajax({url:host+"/fragment/delete",type:"POST",data:{id:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},setFragment:function(a,b,c){var d=this;$.ajax({url:host+"/shop/set_fragment",type:"POST",data:{enable:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},setFragmentIdx:function(a,b,c){var d=this;$.ajax({url:host+"/fragment/saveIdx",type:"POST",data:{ids:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getFragList:function(a,b){var c=this;$.ajax({url:host+"/fragment/list",type:"POST",dataType:"json",success:function(c){c.errorCode==200?a&&a(c):b&&b(c.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():b&&b("服务器暂时没有相应，请稍后重试...")}})},changeEnableDesc:function(a,b,c){var d=this;$.ajax({url:host+"/product/changeEnableDesc",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveProductDesc:function(a,b,c){var d=this;$.ajax({url:host+"/product/saveProductDesc",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveProductFragment:function(a,b,c){var d=this;$.ajax({url:host+"/productFragment/save",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveProduct:function(a,b,c){var d=this;$.ajax({url:host+"/product/save",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getProductInfo:function(a,b,c){var d=this;$.ajax({url:host+"/product/"+a,type:"POST",dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getProductList:function(a,b,c,d){var f=this,g="";switch(a){case"onsale":g="/product/list";break;case"draft":g="/product/list",b.order="statusDraft";break;case"delay":g="/product/list/forsalebyPC";break;case"offsale":g="/product/list",b.order="soldout";break;case"search":g="/product/searchbyPc/"+window.shopId+"/"+b.keyword,delete b.keyword;break;default:g="/product/list"}var h={order:"",direction:"",pageable:!0,page:0,size:8};$.extend(h,b),$.ajax({url:host+g,type:"POST",data:h,dataType:"json",success:function(b){b.errorCode==200?(b.type=a,c&&c(b)):d&&d(b.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("服务器暂时没有相应，请稍后重试...")}})},batchInstock:function(a,b,c){var d=this,f={ids:a.join(",")};$.ajax({url:host+"/product/batch-instock",type:"POST",data:f,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},batchOnsale:function(a,b,c){var d=this,f={ids:a.join(",")};$.ajax({url:host+"/product/batch-onsale",type:"POST",data:f,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveShopCommission:function(a,b,c){var d=this;$.ajax({url:host+"/shop/saveShopCommission",type:"POST",data:{commisionRate:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveThirdCommission:function(a,b,c){var d=this;$.ajax({url:host+"/shop/saveThirdCommission",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getLogistics:function(a,b){$.ajax({url:host+"/logistics/list",type:"POST",dataType:"json",success:function(c){c.errorCode==200?a&&a(c):b&&b(c.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():b&&b("获取快递公司失败！")}})},getProCateList:function(a,b,c,d,f){var g="",h=b||0;switch(a){case 1:g="/category/product/list",h=-1;break;case 2:g="/category/product/list";break;case 3:g="/shop/category/list";break;default:g="/category/product/list"}var i={page:0,size:8,id:h};$.extend(i,f),$.ajax({url:host+g,type:"POST",dataType:"json",data:i,success:function(a){a.errorCode==200?c&&c(a):d&&d(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("获取店铺分类信息失败！")}})},addProCate:function(a,b,c){$.ajax({url:host+"/shop/category/save",type:"POST",data:{name:a},dataType:"JSON",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("获取店铺分类信息失败！")}})},removeProCate:function(a,b,c){$.ajax({url:host+"/shop/category/batchRemove",type:"POST",dataType:"json",traditional:!0,data:{ids:a},success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("获取店铺分类信息失败！")}})},changeProCate:function(a,b,c,d){$.ajax({url:host+"/category/product/add",type:"POST",dataType:"json",traditional:!0,data:{categoryId:a,productIds:b},success:function(a){a.errorCode==200?c&&c(a):d&&d(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("获取店铺分类信息失败！")}})},changeCateName:function(a,b,c,d){$.ajax({url:host+"/shop/category/batchUpdate",type:"POST",dataType:"json",traditional:!0,data:a,success:function(a){a.errorCode==200?b&&b(d):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("修改店铺分类信息失败！")}})},getCategoryList:function(a,b,c){a.id==""&&(a={}),$.ajax({url:host+"/domain/category",type:"GET",dataType:"json",data:a,success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})}},tool:{alert:function(a){var b=$("#J-KD-alert-msg"),c=$("#J-KD-alert"),d=$(".am-dimmer");b.text(a),c.modal({autoClose:!0,closeTime:3e3,onConfirm:function(){this.close()}})},confirm:function(a,b,c){var d=$("#J-KD-confirm-msg"),e=$("#J-KD-confirm");d.text(a),window.confirmFn=b,window.cancelFn=c,e.modal({relatedTarget:this,onConfirm:function(){window.confirmFn&&window.confirmFn($(this.relatedTarget)),this.close()},onCancel:function(){window.cancelFn&&window.cancelFn($(this.relatedTarget)),this.close()}})},getAbsUrl:function(a){var b=new Image;return b.src=a,a=b.src,b.src=null,a},request:function(a){var b=location.href,c=b.substring(b.indexOf("?")+1,b.length).split(/\&|\#/g),d={};for(i=0;j=c[i];i++)d[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);var e=d[a.toLowerCase()];return typeof e=="undefined"?"":e},goLogin:function(a){a?e.tool.alert("退出成功～"):e.tool.alert("由于您长时间没有操作，请重新登录～"),setTimeout(function(){location.href="/sellerpc/pc/login.html"},1e3)},scoreStarShow:function(a){var b={trigger:".mod-score",font:"12px",colorS:"#f9b700",colorE:"#e9e9e9",scoreAll:5,scoreShow:0,eventClk:!0},c=$.extend(b,a),d="";for(var e=0;e<c.scoreAll;e++)e<Math.round(c.scoreShow)?d+='<em class="solid">&#xe620;</em>':d+='<em class="empty">&#xe61f;</em>';$(c.trigger).append(d),c.eventClk&&$(document).on("click",c.trigger+" em",function(){var a=$(this);if(a.next("em").hasClass("solid")||a.prev("em").hasClass("empty"))return!1;a.hasClass("solid")?a.removeClass("solid").addClass("empty").html("&#xe61f;"):a.removeClass("empty").addClass("solid").html("&#xe620;")})},getStringLength:function(b,c,d,e){var f=0,g=0;str_cut=new String,g=b.length;if(c=1){for(var h=0;h<g;h++)a=b.charAt(h),f++,escape(a).length>4&&f++;return f}if(c=2){for(var h=0;h<g;h++){a=b.charAt(h),f++,escape(a).length>4&&f++,str_cut=str_cut.concat(a);if(f>=d)return e&&e.length>0&&(str_cut=str_cut.concat(e)),str_cut}if(f<d)return b}}}};return e}),define("plugins/slider",["jquery"],function(){function a(){}return a.prototype.init=function(a,b){this.settings={step:3e3,auto:!0,width:200},$.extend(this.settings,b),this.el=a,this.len=a.find(".sliderBox img").length,this.index=0,a.find(".sliderIndex em:eq(0)").addClass("active"),a.find(".sliderBox").append(a.find(".sliderBox").html()),a.find(".sliderBox").css("left",0),a.find(".sliderBox").width(this.settings.width*a.find(".sliderBox img").length),this.settings.auto&&a.find(".sliderBox img").length>2&&this.auto(),this.clickIndex()},a.prototype.clean=function(){var a=this;this.el.on("mouseenter",function(){a.destroy()}).on("mouseleave",function(){a.settings.auto&&a.el.find(".sliderBox img").length>2&&a.auto()})},a.prototype.auto=function(){var a=this;this.timer=setInterval(function(){a.index++,a.index%=a.len*2,a.goIndex()},this.settings.step)},a.prototype.destroy=function(){clearInterval(this.timer),this.timer=null},a.prototype.goIndex=function(){var a=this;this.index==0&&(this.el.find(".sliderBox").css("left",-(this.len-1)*this.settings.width),this.index=this.len),console.log(-a.index*a.settings.width),a.el.find(".sliderBox").stop().animate({left:-a.index*a.settings.width},200,"",function(){a.el.find(".sliderIndex em").removeClass("active").filter(":eq("+a.index%a.len+")").addClass("active")})},a.prototype.clickIndex=function(){var a=this;this.el.find(".sliderIndex em").on("click",function(){a.index=$(this).index(),a.goIndex()})},a}),define("base/all/product-show",["jquery","base/utils","qrcode","plugins/slider","jiathis"],function(a,b,c,d,e){var f=$(".KD-product-show"),g=f.find(".product-show-name"),h=f.find(".product-price span"),i=f.find(".product-code"),j=$(".sliderBox"),k=$(".sliderIndex"),l=new d;return $("body").on("click","[modal-productShow]",function(){var a=$(this).attr("modal-productShow");b.api.getProductInfo(a,function(a){g.text(a.data.name),h.text(a.data.price),i.empty(),c(i,{width:145,height:145,url:a.data.productUrl});var d="商品名称："+a.data.name,e=b.tool.getAbsUrl("/p/"+a.data.id);jiathis_config={title:"快快开店",summary:d,url:e,pic:a.data.imgs[0]?a.data.imgs[0].imgUrl:""};var m=a.data.imgs;j.empty(),k.empty(),$.each(m,function(a,b){j.append('<img src="'+b.imgUrl+'" class="am-fl" />'),k.append("<em></em>")}),l.init($(".product-show-imgs"),{width:390}),f.modal()},function(){b.tool.alert("获取商品数据失败，请稍后重试!")})}),$(".product-show-close").on("click",function(){f.modal("close")}),f.on("close.modal.amui",function(){l.destroy()}),null}),define("base/all/ajaxSet",["jquery","plugins/browser"],function(a,b){return b.ie&b.ie<=8||$(document).ajaxStart(function(){$(".ajax-dimmer").show().addClass("active"),$("#J-kd-modal-loading").show().addClass("active"),$("#J-kd-modal-loading .loading").stop().css("width","1%").animate({width:"20%"},function(){$(this).animate({width:"80%"},1e4)})}).ajaxStop(function(){$(".ajax-dimmer").removeClass("active").hide(),$("#J-kd-modal-loading").removeClass("active").hide()}),null}),define("base/all/checkbox",["jquery","icheck"],function(a,b){$.fn.extend({initCheck:function(){return this.each(function(){$(this).iCheck({checkboxClass:"icheckbox",radioClass:"iradiobox"}),$(".icheck").on("ifChecked",function(){var a=$(this),b=a.attr("name"),c=$('.icheckbox input[name="'+b+'"]').length,d=$('.icheckbox input[name="'+b+'"]:checked').length;c===d&&$("input.checkAll[group="+b+"]").iCheck("check")}).on("ifUnchecked",function(){var a=$(this),b=a.attr("name");$("input.checkAll[group="+b+"]").iCheck("uncheck")})}),$("input.checkAll").on("ifChecked",function(){$("input[name="+$(this).attr("group")+"]").iCheck("check")}).on("ifClicked",function(){$("input[name="+$(this).attr("group")+"]:checked")&&$("input[name="+$(this).attr("group")+"]").iCheck("uncheck")}),this}}),$(".kd-checkbox,.kd-radio").initCheck()}),require(["jquery","amaze","underscore","switchs","placeholder","plugins/browser"],function(a,b,c,d,e,f){f.ie&f.ie<8||f.ie==8&&$("input[type=text],textarea").placeholder()}),require(["jquery","base/utils"],function(a,b){$("#J_logout").on("click",function(){b.tool.confirm("确认退出当前账户？",function(){b.api.logout()})})}),require(["jquery"],function(){$(".am-nav button").on("click",function(){location.href=$(this).attr("data-href")})}),require(["base/all/product-show"]),require(["base/all/ajaxSet"]),require(["base/all/checkbox"]),require(["chosen"],function(){$(".combox").chosen()}),define("base/all",function(){})