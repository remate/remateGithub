define("base/utils",["jquery","amaze","underscore"],function(b,c,d){var e={api:{logout:function(a,b){var c=this;$.ajax({url:host+"/logout",type:"POST",dataType:"json",success:function(a){a.errorCode==200?($(window).off("beforeunload.pro"),e.tool.goLogin(1)):b&&b(a.moreInfo)},error:function(a){b&&b("服务器暂时没有相应，请稍后重试...")}})},move:function(a,b){var c=this;$.ajax({url:host+"/shop/movestart",type:"POST",dataType:"json",success:function(c){c.errorCode==200?a&&a(c):b&&b(c.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():b&&b("服务器暂时没有相应，请稍后重试...")}})},moveAgain:function(a,b,c){var d=this;$.ajax({url:host+"/shop/step5",data:{shopUrl:a.shopUrl,option:a.option},type:"POST",dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},checkMoveCode:function(a,b,c,d){var f=this;$.ajax({url:host+"/shop/step2check",type:"POST",dataType:"json",data:{rnd:a,itemId:b},success:function(a){a.errorCode==200?c&&c(a):d&&d(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("服务器暂时没有相应，请稍后重试...")}})},getAddressParent:function(a,b,c){if(!a)return!1;$.ajax({url:host+"/zone/"+a+"/parents",type:"POST",dataType:"json",success:function(a){a.data.length?b&&b(a):c&&c()},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},address:function(a,b,c){if(!a)return;var d=this;$.ajax({url:host+"/zone/"+a+"/children",type:"POST",dataType:"json",success:function(a){a.data.length?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getShopInfo:function(a,b,c){var d=this;$.ajax({url:host+"/shop/"+a,type:"POST",dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},updateShop:function(a,b,c){var d=this;$.ajax({url:host+"/shop/update",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},editMobile:function(a,b,c){var d=this;$.ajax({url:host+"/shop/saveMobileAndTel",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},updatePostAge:function(a,b,c){var d=this;$.ajax({url:host+"/shop/updatePostageSet",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveDesc:function(a,b,c){var d=this;$.ajax({url:host+"/fragment/save",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},delDesc:function(a,b,c){var d=this;$.ajax({url:host+"/fragment/delete",type:"POST",data:{id:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},setFragment:function(a,b,c){var d=this;$.ajax({url:host+"/shop/set_fragment",type:"POST",data:{enable:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},setFragmentIdx:function(a,b,c){var d=this;$.ajax({url:host+"/fragment/saveIdx",type:"POST",data:{ids:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getFragList:function(a,b){var c=this;$.ajax({url:host+"/fragment/list",type:"POST",dataType:"json",success:function(c){c.errorCode==200?a&&a(c):b&&b(c.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():b&&b("服务器暂时没有相应，请稍后重试...")}})},changeEnableDesc:function(a,b,c){var d=this;$.ajax({url:host+"/product/changeEnableDesc",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveProductDesc:function(a,b,c){var d=this;$.ajax({url:host+"/product/saveProductDesc",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveProductFragment:function(a,b,c){var d=this;$.ajax({url:host+"/productFragment/save",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveProduct:function(a,b,c){var d=this;$.ajax({url:host+"/product/save",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getProductInfo:function(a,b,c){var d=this;$.ajax({url:host+"/product/"+a,type:"POST",dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getProductList:function(a,b,c,d){var f=this,g="";switch(a){case"onsale":g="/product/list";break;case"draft":g="/product/list",b.order="statusDraft";break;case"delay":g="/product/list/forsalebyPC";break;case"offsale":g="/product/list",b.order="soldout";break;case"search":g="/product/searchbyPc/"+window.shopId+"/"+b.keyword,delete b.keyword;break;default:g="/product/list"}var h={order:"",direction:"",pageable:!0,page:0,size:8};$.extend(h,b),$.ajax({url:host+g,type:"POST",data:h,dataType:"json",success:function(b){b.errorCode==200?(b.type=a,c&&c(b)):d&&d(b.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("服务器暂时没有相应，请稍后重试...")}})},batchInstock:function(a,b,c){var d=this,f={ids:a.join(",")};$.ajax({url:host+"/product/batch-instock",type:"POST",data:f,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},batchOnsale:function(a,b,c){var d=this,f={ids:a.join(",")};$.ajax({url:host+"/product/batch-onsale",type:"POST",data:f,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveShopCommission:function(a,b,c){var d=this;$.ajax({url:host+"/shop/saveShopCommission",type:"POST",data:{commisionRate:a},dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},saveThirdCommission:function(a,b,c){var d=this;$.ajax({url:host+"/shop/saveThirdCommission",type:"POST",data:a,dataType:"json",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})},getLogistics:function(a,b){$.ajax({url:host+"/logistics/list",type:"POST",dataType:"json",success:function(c){c.errorCode==200?a&&a(c):b&&b(c.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():b&&b("获取快递公司失败！")}})},getProCateList:function(a,b,c,d,f){var g="",h=b||0;switch(a){case 1:g="/category/product/list",h=-1;break;case 2:g="/category/product/list";break;case 3:g="/shop/category/list";break;default:g="/category/product/list"}var i={page:0,size:8,id:h};$.extend(i,f),$.ajax({url:host+g,type:"POST",dataType:"json",data:i,success:function(a){a.errorCode==200?c&&c(a):d&&d(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("获取店铺分类信息失败！")}})},addProCate:function(a,b,c){$.ajax({url:host+"/shop/category/save",type:"POST",data:{name:a},dataType:"JSON",success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("获取店铺分类信息失败！")}})},removeProCate:function(a,b,c){$.ajax({url:host+"/shop/category/batchRemove",type:"POST",dataType:"json",traditional:!0,data:{ids:a},success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("获取店铺分类信息失败！")}})},changeProCate:function(a,b,c,d){$.ajax({url:host+"/category/product/add",type:"POST",dataType:"json",traditional:!0,data:{categoryId:a,productIds:b},success:function(a){a.errorCode==200?c&&c(a):d&&d(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():d&&d("获取店铺分类信息失败！")}})},changeCateName:function(a,b,c,d){$.ajax({url:host+"/shop/category/batchUpdate",type:"POST",dataType:"json",traditional:!0,data:a,success:function(a){a.errorCode==200?b&&b(d):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("修改店铺分类信息失败！")}})},getCategoryList:function(a,b,c){a.id==""&&(a={}),$.ajax({url:host+"/domain/category",type:"GET",dataType:"json",data:a,success:function(a){a.errorCode==200?b&&b(a):c&&c(a.moreInfo)},error:function(a){a.status==401?e.tool.goLogin():c&&c("服务器暂时没有相应，请稍后重试...")}})}},tool:{alert:function(a){var b=$("#J-KD-alert-msg"),c=$("#J-KD-alert"),d=$(".am-dimmer");b.text(a),c.modal({autoClose:!0,closeTime:3e3,onConfirm:function(){this.close()}})},confirm:function(a,b,c){var d=$("#J-KD-confirm-msg"),e=$("#J-KD-confirm");d.text(a),window.confirmFn=b,window.cancelFn=c,e.modal({relatedTarget:this,onConfirm:function(){window.confirmFn&&window.confirmFn($(this.relatedTarget)),this.close()},onCancel:function(){window.cancelFn&&window.cancelFn($(this.relatedTarget)),this.close()}})},getAbsUrl:function(a){var b=new Image;return b.src=a,a=b.src,b.src=null,a},request:function(a){var b=location.href,c=b.substring(b.indexOf("?")+1,b.length).split(/\&|\#/g),d={};for(i=0;j=c[i];i++)d[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);var e=d[a.toLowerCase()];return typeof e=="undefined"?"":e},goLogin:function(a){a?e.tool.alert("退出成功～"):e.tool.alert("由于您长时间没有操作，请重新登录～"),setTimeout(function(){location.href="/sellerpc/pc/login.html"},1e3)},scoreStarShow:function(a){var b={trigger:".mod-score",font:"12px",colorS:"#f9b700",colorE:"#e9e9e9",scoreAll:5,scoreShow:0,eventClk:!0},c=$.extend(b,a),d="";for(var e=0;e<c.scoreAll;e++)e<Math.round(c.scoreShow)?d+='<em class="solid">&#xe620;</em>':d+='<em class="empty">&#xe61f;</em>';$(c.trigger).append(d),c.eventClk&&$(document).on("click",c.trigger+" em",function(){var a=$(this);if(a.next("em").hasClass("solid")||a.prev("em").hasClass("empty"))return!1;a.hasClass("solid")?a.removeClass("solid").addClass("empty").html("&#xe61f;"):a.removeClass("empty").addClass("solid").html("&#xe620;")})},getStringLength:function(b,c,d,e){var f=0,g=0;str_cut=new String,g=b.length;if(c=1){for(var h=0;h<g;h++)a=b.charAt(h),f++,escape(a).length>4&&f++;return f}if(c=2){for(var h=0;h<g;h++){a=b.charAt(h),f++,escape(a).length>4&&f++,str_cut=str_cut.concat(a);if(f>=d)return e&&e.length>0&&(str_cut=str_cut.concat(e)),str_cut}if(f<d)return b}}}};return e}),define("base/all/checkbox",["jquery","icheck"],function(a,b){$.fn.extend({initCheck:function(){return this.each(function(){$(this).iCheck({checkboxClass:"icheckbox",radioClass:"iradiobox"}),$(".icheck").on("ifChecked",function(){var a=$(this),b=a.attr("name"),c=$('.icheckbox input[name="'+b+'"]').length,d=$('.icheckbox input[name="'+b+'"]:checked').length;c===d&&$("input.checkAll[group="+b+"]").iCheck("check")}).on("ifUnchecked",function(){var a=$(this),b=a.attr("name");$("input.checkAll[group="+b+"]").iCheck("uncheck")})}),$("input.checkAll").on("ifChecked",function(){$("input[name="+$(this).attr("group")+"]").iCheck("check")}).on("ifClicked",function(){$("input[name="+$(this).attr("group")+"]:checked")&&$("input[name="+$(this).attr("group")+"]").iCheck("uncheck")}),this}}),$(".kd-checkbox,.kd-radio").initCheck()}),define("base/category/getData",["jquery","base/utils","doT","moment","pager","base/all/checkbox"],function(a,b,c,d,e,f){function j(){if(i)return;i=!0;var a=$('[name="pageSize"]').val(),d=$('[name="pageNum"]').val(),e=(d-1)*a,f=$('[name="orderField"]').val(),k=$('[name="direction"]').val(),l=$(".am-form-search input").val(),m={};$("#J-downs").show(),$("#J-ups").show(),$("#J-cate").show(),status=="delay"?$(".am-table-sort .col2 i").html("计划发布时间"):$(".am-table-sort .col2 i").html("销量"),l&&(m.keyword=l),k&&k==="desc"?m.isDesc=!0:k&&(m.isDesc=!1),f&&(m.orderName=f),m.page=d-1,m.size=a;var n=null,o=$(".am-form-group-cate .active"),p=2;o.attr("data-id")?n=o.attr("data-id"):o.hasClass("notcate")?n=0:p=1,b.api.getProCateList(p,n,function(a){i=!1;var b=c.template(g);$(".order-item-body").html(b(a)),$(".checkAll").attr("checked",!1),$(".kd-checkbox,.kd-radio").initCheck(),h.init($(".pagers"),{count:a.data.categoryTotal,current_page:$('[name="pageNum"]').val()-1,callback:function(a){return $('[name="pageNum"]').val(a+1),a>=0&&j(),!1}})},function(a){i=!1},m)}window.moment=d;var g=$(".tpl-proList").html(),h=new e,i=!1;return j}),define("base/category/setPro",["jquery","base/utils","base/category/getData","doT","moment","pager","base/all/checkbox"],function(a,b,c,d,e,f,g){function h(a){a.data.list.length||($('[name="pageNum"]').val($('[name="pageNum"]').val()-1),c()),window.moment=e;var b=$(".tpl-proList").html(),g=new f;isLoading=!1;var h=d.template(b);$(".order-item-body").html(h(a)),$(".checkAll").attr("checked",!1),$(".kd-checkbox,.kd-radio").initCheck(),g.init($(".pagers"),{count:a.data.categoryTotal,current_page:$('[name="pageNum"]').val()-1,callback:function(a){return $('[name="pageNum"]').val(a+1),a>=0&&c(),!1}})}return h}),define("base/category/down",["jquery","base/utils","base/category/getData","base/category/setPro"],function(a,b,c,d){$("body").on("click",".btn-proOff",function(){b.tool.confirm.call(this,"确认下架此商品？",function(a){b.api.batchInstock([a.attr("data-id")],function(a){if(a.data.failList.length)b.tool.alert("商品由于参加活动未能下架成功！");else{b.tool.alert("下架成功");var c=null,e=$(".am-form-group-cate .active"),f=2,g={};e.attr("data-id")?c=e.attr("data-id"):e.hasClass("notcate")?c=0:f=1,g.page=$('[name="pageNum"]').val()-1,b.api.getProCateList(f,c,d,b.tool.alert,g)}},function(a){b.tool.alert(a)})})}),$("#J-downs").on("click",function(){var a=[];if(!$('.order-item-body [name="productId"]:checked').length){b.tool.alert("请选择要下架的商品");return}$('.order-item-body [name="productId"]:checked').each(function(){a.push($(this).parents("tr").attr("data-id"))}),b.tool.confirm.call(this,"确认下架这些商品？",function(){b.api.batchInstock(a,function(a){if(a.data.failList.length)b.tool.alert("部分商品由于参加活动未能下架成功！");else{b.tool.alert("下架成功");var c=null,e=$(".am-form-group-cate .active"),f=2,g={};e.attr("data-id")?c=e.attr("data-id"):e.hasClass("notcate")?c=0:f=1,g.page=$('[name="pageNum"]').val()-1,b.api.getProCateList(f,c,d,b.tool.alert,g)}},function(a){b.tool.alert(a)})})})}),define("base/category/up",["jquery","base/utils","base/category/getData","base/category/setPro"],function(a,b,c,d){$("body").on("click",".btn-proOn",function(){b.tool.confirm.call(this,"确认上架此商品？",function(a){b.api.batchOnsale([a.attr("data-id")],function(a){if(a.data.failList.length)b.tool.alert("商品由于参加活动未能上架成功！");else{b.tool.alert("上架成功");var c=null,e=$(".am-form-group-cate .active"),f=2,g={};e.attr("data-id")?c=e.attr("data-id"):e.hasClass("notcate")?c=0:f=1,g.page=$('[name="pageNum"]').val()-1,b.api.getProCateList(f,c,d,b.tool.alert,g)}},function(a){b.tool.alert(a)})})}),$("#J-ups").on("click",function(){var a=[];if(!$('.order-item-body [name="productId"]:checked').length){b.tool.alert("请选择要上架的商品");return}$('.order-item-body [name="productId"]:checked').each(function(){a.push($(this).parents("tr").attr("data-id"))}),b.tool.confirm.call(this,"确认上架这些商品？",function(){b.api.batchOnsale(a,function(a){if(a.data.failList.length)b.tool.alert("部分商品由于参加活动未能上架成功！");else{b.tool.alert("上架成功");var c=null,e=$(".am-form-group-cate .active"),f=2,g={};e.attr("data-id")?c=e.attr("data-id"):e.hasClass("notcate")?c=0:f=1,g.page=$('[name="pageNum"]').val()-1,b.api.getProCateList(f,c,d,b.tool.alert,g)}},function(a){b.tool.alert(a)})})})}),define("base/category/initParams",["jquery"],function(a){return function(a,b,c,d,e,f){a?($('[name="keyword"]').val(a),$(".am-table-sort em").hide()):$(".am-form-search input").val(""),$('[name="pageOffset"]').val(b),c?($('[name="orderField"]').val("sales"),$('[name="direction"]').val(c)):d?($('[name="orderField"]').val("amount"),$('[name="direction"]').val(d)):e?($('[name="orderField"]').val("price"),$('[name="direction"]').val(e)):($('[name="orderField"]').val(""),$('[name="direction"]').val("")),f&&$('[name="status"]').val(f)}}),define("base/category/sort",["jquery","base/category/getData","base/category/initParams"],function(a,b,c){return function(){$("body").on("click",".j-order",function(){$(this).hasClass("asc")?($(this).removeClass("asc").addClass("desc").attr("data-dir","desc"),$(this).html("&#xe612;")):($(this).removeClass("desc").addClass("asc").attr("data-dir","asc"),$(this).html("&#xe613;")),$('[name="pageNum"]').val(1)}),$("body").on("click",".j-order-sales",function(){c(0,0,$(this).attr("data-dir"),0,0),b()}),$("body").on("click",".j-order-amount",function(){c(0,0,0,$(this).attr("data-dir"),0),b()}),$("body").on("click",".j-order-price",function(){c(0,0,0,0,$(this).attr("data-dir")),b()})}}),define("base/category/initCategory",["jquery","base/utils","base/category/getData","amaze","base/all/checkbox","base/category/setPro"],function(a,b,c,d,e,f){function h(a){var b=a.data.length,c=[];for(var d=0;d<b;d++)c.push('<li data-id="'+a.data[d].id+'" data-index="'+d+'"><span>'+a.data[d].name+"</span></li>"),g.push(a.data[d].name);var e=['<li class="addcate">+新增分类</li>','<li class="addcate-editbox">','<input type="text" value="" />','<button class="yesbtn" type="button">确定</button>','<button class="nobtn" type="button">取消</button>',"</li>"];$(".am-form-group-cate ul").append(c.join("")),$(".am-form-group-cate ul").append(e.join(""))}function i(){$(".am-form-group-cate ul").attr("class","editstate editstatenow"),$(".am-form-group-cate .editcate").css("margin","8px 5px"),$(".addcate-editbox").hide(),$(".am-form-group-cate ul li").append("<em>&#xe624;</em>").end().eq(-2).find("em").remove().end().eq(0).css("cursor","pointer"),$(".am-form-group-cate ul li.allproduct em").remove(),$(".am-form-group-cate ul li span").attr("contenteditable","true").css("cursor","text"),$(".am-form-group-cate ul li em").css("cursor","pointer"),$(".allproduct").attr("contenteditable","false"),$(".addcate").attr("contenteditable","false"),$(".addcate").hide(),$(this).find("button").show(),$(this).find("i").hide()}function k(){g=[],$(".am-form-group-cate ul li span").each(function(a){g.push($(this).text())}),b.api.removeProCate(j,l,m)}function l(a){j=[],a?(g=[],$(".am-form-group-cate .waitRemove").remove(),$(".am-form-group-cate ul li span").each(function(a){if($(this).parents("li:first").hasClass("waitRemove"))return!0;g.push($(this).text())})):($(".am-form-group-cate ul li span").each(function(a){$(this).text(g[a])}),$(".am-form-group-cate .waitRemove").removeClass("waitRemove")),$(".am-form-group-cate ul li span br").remove(),$(".editstate").removeClass(),$(".addcate-editbox").show(),$(".am-form-group-cate ul li").show(),$(".am-form-group-cate .addcate-editbox").hide(),$(".am-form-group-cate .editcate").css("margin","10px 20px"),$(".am-form-group-cate ul li em").remove(),$(".am-form-group-cate .editcate button").hide(),$(".am-form-group-cate .editcate i").show(),$(".am-form-group-cate .addcate").show(),$(".am-form-group-cate ul li span").css("cursor","pointer"),$(".am-form-group-cate ul li span").attr("contenteditable","false"),$(".allproduct").attr("contenteditable","false"),$(".addcate").attr("contenteditable","false")}function m(a){b.tool.alert(a),$(".waitRemove").show().removeClass("waitRemove"),j=[]}function o(a){var b=a.data.length;$(".kd-modal-dialog ul li").remove();var c=[];c.push('<li data-id="0">未分类</li>');for(var d=0;d<b;d++)c.push("<li data-id="+a.data[d].id+">"+a.data[d].name+"</li>");var e=['<li class="addcate">+新增分类</li>','<li class="addcate-editbox">','<input type="text" value="" />','<button class="yesbtn" type="button">确定</button>','<button class="nobtn" type="button">取消</button>',"</li>"];$(".kd-modal-dialog ul").append(c.join("")),$(".kd-modal-dialog ul").append(e.join("")),$("#J-modifyProCate-pop").modal()}var g=[];b.api.getProCateList(3,null,h,b.tool.alert),$("body").on("click",".am-form-group-cate .editcate",i);var j=[];$("body").on("click",".am-form-group-cate .editcate .nobtn",function(){return l(),!1}),$("body").on("click",".am-form-group-cate ul li em",function(){return $(this).parents("li:first").hide().addClass("waitRemove"),j.push($(this).parents("li:first").attr("data-id")),!1}),$("body").on("click",".am-form-group-cate span.editcate .yesbtn",function(){var a={},c=0,d=[];return $(".am-form-group-cate ul li").each(function(e){if($(this).hasClass("addcate")||$(this).hasClass("allproduct")||$(this).hasClass("addcate-editbox")||$(this).hasClass("waitRemove"))return!0;var f=$(this).find("span").text();b.tool.getStringLength(f,1)>16&&d.push(f),f!=g[e-1]&&(a["categorys["+c+"].id"]=$(this).attr("data-id"),a["categorys["+c+"].name"]=f,c++)}),d.length?(b.tool.alert("分类名称最多8个汉字或者16个字母。"),!1):!j.length&&!c?($(".am-form-group-cate .waitRemove").removeClass("waitRemove"),l(),!1):(c&&j.length?b.api.changeCateName(a,k,m,j):c?b.api.changeCateName(a,l,m,1):j.length&&b.api.removeProCate(j,l,m),!1)}),$("body").on("click",".am-form-group-cate .addcate",function(){$(".am-form-group-cate .addcate").hide(),$(".am-form-group-cate .addcate-editbox").css("display","inline-block")}),$("body").on("click",".am-form-group-cate .addcate-editbox .nobtn",function(){$(".am-form-group-cate .addcate-editbox input").val(""),$(".am-form-group-cate .addcate").show(),$(".am-form-group-cate .addcate-editbox").hide()}),$("body").on("click",".am-form-group-cate .addcate-editbox .yesbtn",function(){var a=$(".am-form-group-cate .addcate-editbox input").val();if(!a||b.tool.getStringLength(a,1)>16)return b.tool.alert("分类名称最多8个汉字或者16个字母。"),!1;b.api.addProCate(a,function(b){$(".am-form-group-cate ul li").eq(-2).before('<li data-id="'+b.data.id+'" data-index="'+g.length+'"><span></span></li>'),$(".am-form-group-cate ul li").eq(-3).find("span").text(a),g.push(a),$(".am-form-group-cate .addcate-editbox .nobtn").click()},b.tool.alert)});var n=[];$("#J-cate").on("click",function(){n=[];if(!$('.order-item-body [name="productId"]:checked').length){b.tool.alert("请选择要分类的商品");return}return $('.order-item-body [name="productId"]:checked').each(function(){n.push($(this).parents("tr").attr("data-id"))}),$(".modifyProCate-pop .kd-modal-title span").eq(-2).html(n.length),b.api.getProCateList(3,null,o,b.tool.alert),!1}),$("body").on("click",".modifyProCate-pop .am-btn-comfirm-no",function(){return $("#J-modifyProCate-pop").modal("close"),!1}),$("body").on("click",".kd-modal-dialog ul li",function(){$(".kd-modal-dialog ul li").removeClass("active").find("em").remove();if(!$(this).hasClass("addcate")&&!$(this).hasClass("addcate-editbox")){var a=$(this).html();$(".kd-modal-title span").eq(-1).html(a),$(this).addClass("active").append("<em>&#xe625;</em>")}return!1}),$("body").on("click",".kd-modal-dialog ul li.addcate",function(){return $(".kd-modal-dialog ul li.addcate-editbox").show(),$(".kd-modal-dialog ul li.addcate").hide(),!1}),$("body").on("click",".kd-modal-dialog ul li.addcate-editbox .yesbtn",function(){var a=$(".kd-modal-dialog ul li.addcate-editbox input").val();return!a||b.tool.getStringLength(a,1)>16?(b.tool.alert("分类名称最多8个汉字或者16个字母。"),!1):(b.api.addProCate(a,function(b){$(".kd-modal-dialog ul li").eq(-2).before('<li data-id="'+b.data.id+'">'+a+"</li>"),$(".kd-modal-dialog ul li.addcate-editbox .nobtn").click();var c=$(".kd-modal-dialog ul");c.scrollTop(c.offset().top),$(".am-form-group-cate ul li").eq(-2).before('<li data-id="'+b.data.id+'" data-index="'+g.length+'"><span></span></li>'),$(".am-form-group-cate ul li").eq(-3).find("span").text(a),g.push(a),$(".kd-modal-dialog ul li.addcate-editbox input").val("")},b.tool.alert),!1)}),$("body").on("click",".kd-modal-dialog ul li.addcate-editbox .nobtn",function(){$(".kd-modal-dialog ul li.addcate").show(),$(".kd-modal-dialog ul li.addcate-editbox").hide()}),$("#proCatebtn").on("click",function(){var a=$(".kd-modal-dialog ul li.active").attr("data-id");if(!a)return!1;b.api.changeProCate(a,n,function(){$("#J-modifyProCate-pop").modal("close");var a={};a.page=$('[name="pageNum"]').val()-1;var c=$(".am-form-group-cate").find(".active").attr("data-id");b.api.getProCateList(2,c,f,b.tool.alert,a)},b.tool.alert)}),$("body").on("click",".am-form-group-cate ul li",function(){if($(this).parents("ul:first").hasClass("editstatenow")||$(this).hasClass("addcate-editbox")||$(this).hasClass("addcate")||$(this).hasClass("editcate"))return!1;var a=$(this).hasClass("allproduct")?1:2,c=$(this).attr("data-id")||-1,d={};return d.page=0,$('[name="pageNum"]').val(1),$(".am-form-group-cate ul li").removeClass("active"),$(".am-form-group-cate .notcate").removeClass("active"),$(this).addClass("active"),b.api.getProCateList(a,c,f,b.tool.alert,d),!1}),$("body").on("click",".am-form-group-cate ul li span",function(){if($(this).parents("ul:first").hasClass("editstatenow"))return!1}),$("body").on("click",".am-form-group-cate .notcate",function(){if($(this).hasClass("editcate"))return!1;l();var a={};return a.page=0,$('[name="pageNum"]').val(1),$(".am-form-group-cate ul li").removeClass("active"),$(this).addClass("active"),b.api.getProCateList(2,0,f,b.tool.alert,a),!1})}),require(["jquery","base/utils"],function(a,b){}),require(["base/category/getData","base/utils"],function(a,b){var c={ONSALE:"onsale",DRAFT:"draft",FORSALE:"delay"};b.tool.request("status")&&($('select[name="productStatus"]').find('[value="'+c[b.tool.request("status")]+'"]').attr("selected",!0),$('select[name="productStatus"]').trigger("chosen:updated.chosen"),$('#pagerForm [name="status"]').val(c[b.tool.request("status")])),a()}),require(["base/category/down"]),require(["base/category/up"]),require(["base/category/sort"],function(a){a()}),require(["base/category/initCategory"]),define("base/category",function(){})