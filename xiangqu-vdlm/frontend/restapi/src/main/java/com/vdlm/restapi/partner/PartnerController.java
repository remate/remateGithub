package com.vdlm.restapi.partner;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.vdlm.dal.model.User;
import com.vdlm.dal.model.UserSigninLog;
import com.vdlm.restapi.BaseController;
import com.vdlm.service.common.SignService;
import com.vdlm.service.pricing.CouponService;
import com.vdlm.service.user.UserService;
import com.vdlm.service.userAgent.UserSigninLogService;
import com.vdlm.service.userAgent.impl.UserSigninLogFactory;

@Controller
public class PartnerController extends BaseController {
    
	@Autowired
	private UserSigninLogService userSigninLogService;
	
    @Autowired
    private SignService signService;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private RememberMeServices rememberMeServices;
    
    @Autowired
    private CouponService couponService;
    
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @RequestMapping(value="/partner/redirect", params={ "backUrl"})
    public String redirect(HttpServletRequest request, HttpServletResponse response, @RequestParam( "backUrl" ) String backurl) 
    {
        // 合作方(partner code)
        final String partner = StringUtils.defaultIfBlank(request.getParameter("partner"), "xiangqu");
        // 合作方用户唯一id(userId in partner)
        final String externalUserId = request.getParameter("user_id");
        // 合作方用户昵称(user name)
        final String externalUserName = request.getParameter("user_name");
        // 用户头像(avatar)
        final String avatar = request.getParameter("avatar");
        // 用户手机号(mobile)
        final String mobile = request.getParameter("mobile");
        
        // 签名内容
        final String sign = request.getParameter("sign");
        
        final String deviceId = StringUtils.defaultString(request.getParameter("did"));
        
        final String queryString = request.getQueryString();
        boolean signCheck = signService.signCheck(partner, sign, queryString);
        
        if (!signCheck ){
            return "partner/redirect_error";
        } else {
            User user = null;
            if (StringUtils.isNotEmpty(mobile)) {
                user = userService.loadByLoginname(mobile);
            }
            if (user == null) {
            	user = userService.loadByDomainAndExtUid(partner, externalUserId);
            }
	    	if (user == null) {
		        String loginname = externalUserId + "@" + partner;
		        user = userService.loadByLoginname(loginname);
	    	}
	        
            if (user == null) {
                user = userService.registerExtUser(partner, externalUserId, externalUserName, avatar);
            }
            
            couponService.autoGrantCoupon(partner, user.getId(), deviceId);
            
            // FIXME why?? comment it -- indra@ixiaopu.com
//            request.getSession().invalidate();
            request.getSession().getId();
            
            final Authentication auth = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(auth);
            rememberMeServices.loginSuccess(request, response, auth);

            //记录用户登录环境Log
            final UserSigninLog log = UserSigninLogFactory.createUserSigninLog(request, user);
            userSigninLogService.insert(log);
            
            return "redirect:" + backurl;  //return backurl; 错误
        }
    }
    
    @RequestMapping("/partner/redirect")
    public String redirect(HttpServletRequest request, HttpServletResponse response) {
        // 合作方 code
        final String partner = StringUtils.defaultIfBlank(request.getParameter("partner"), "xiangqu");
        // 合作方用户唯一id
        final String externalUserId = request.getParameter("user_id");
        // 合作方用户昵称
        final String externalUserName = request.getParameter("user_name");
        // 用户头像
        final String avatar = request.getParameter("avatar");
        // 用户手机号
        final String mobile = request.getParameter("mobile");
        // 联盟推广id
        final String unionId = request.getParameter("union_id");
        // 跳转的目标页面
        String targetUrl = request.getParameter("target_url");
        // 签名方式  MD5
        //final String signType = request.getParameter("sign_type");
        // 签名内容
        final String sign = request.getParameter("sign");
        
        final String deviceId = StringUtils.defaultString(request.getParameter("did"));
        
        final String queryString = request.getQueryString();
        final boolean signCheck = signService.signCheck(partner, sign, queryString);
        if (!signCheck){
            return "partner/redirect_error";
        } else {
            User user = null;
            if (StringUtils.isNotEmpty(mobile)) {
                user = userService.loadByLoginname(mobile);
            }
            if (user == null) {
            	user = userService.loadByDomainAndExtUid(partner, externalUserId);
            }
	    	if (user == null) {
		        String loginname = externalUserId + "@" + partner;
		        user = userService.loadByLoginname(loginname);
	    	}
	    	
            // 用户不存在，再尝试匿名登录
            if (user == null) {
                user = userService.registerExtUser(partner, externalUserId, externalUserName, avatar);
            }
            
            couponService.autoGrantCoupon(partner, user.getId(), deviceId);
            
            // FIXME why?? comment it -- indra@ixiaopu.com
//            request.getSession().invalidate();
            request.getSession().getId();
            
            final Authentication auth = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(auth);
            rememberMeServices.loginSuccess(request, response, auth);
            
            //记录用户登录环境Log
            final UserSigninLog log = UserSigninLogFactory.createUserSigninLog(request, user);
            userSigninLogService.insert(log);
            
            if (StringUtils.isNotEmpty(unionId)) {
                targetUrl = targetUrl.contains("?") ? targetUrl + "&unionId=" + unionId : targetUrl + "?unionId=" + unionId;
            }
            
            if (logger.isDebugEnabled()) {
            	logger.debug("User[" + user.getId() + "], ext_user_id=" + externalUserId + " from " + partner + " is authed success" );
            }
            return "redirect:" + targetUrl;
        }
    }
}
