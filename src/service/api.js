var api = {
	login:{
		getOauth:'/hidevopsio/hiadmin/oauth/url',//获取地址
		oauthGetInfo:'/hidevopsio/hiadmin/oauth/code/',//后面拼接code值(获取用户信息)
		login:'/hidevopsio/hiadmin/login'
	}
	
}
export default api