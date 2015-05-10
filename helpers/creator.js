// ** Initialize

var OAuth = require('oauth');
var __ = require('arguejs');
var v = require('./variables');

var oauth = new OAuth.OAuth(
	v.rt_url,
	v.at_url,
	v.cs_key,
	v.cs_secret,
	'1.0A',
	null,
	'HMAC-SHA1'
);


// ## Initialize



var creator = {};

creator.newAccount = function(){
	var signature = {account_data: Object, callback: Function};
	args = __(signature);
	
	callback = args.callback;

	oauth.post(
		v.c_url,
		v.at_key,
		v.at_secret,
		args.account_data,
		function (e, data, res){
			if(e){
				callback(e,null);
			} else {
				var new_AT = res.headers['x-twitter-new-account-oauth-access-token'];
				var new_ATS = res.headers['x-twitter-new-account-oauth-secret'];
				data_obj = JSON.parse(data);
				data_obj.access_token = new_AT;
				data_obj.access_token_secret = new_ATS;
				callback(null,data_obj);
			}
		}
	);    
}

module.exports = creator;
