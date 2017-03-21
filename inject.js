function GetProxy()
{
	var dotLast = window.location.hostname.lastIndexOf('.');
	var tmp = window.location.hostname.substr(0, dotLast);
	var dotNext = tmp.lastIndexOf('.');
	var proxyDNS = window.location.hostname.substr(dotNext+1);
	return proxyDNS;
}

var _3s3sObject = 
{
	aWhiteADList: [
		"800notes.com",
		"ameblo.jp",
		"ameba.jp",
		"censor.net.ua",
		"ej.ru",
		"ficbook.net",
		"grani.ru",
		"graniru.org",
		"glavcom.ua",
		"kasparov.ru",
		"livejournal.com",
		"navalny.com",
		"ok.ru",
		"opensharing.org",
		"szona.org",
		"topix.com",
		"twitter.com",
		"vesti-ukr.com",
		"vk.com",
		"facebook.com"
		],
	adNetworks: [
	//	{host: "ad.a-ads.com", code: "<iframe data-aa='47233' src='//ad.a-ads.com/47233?size=468x60' scrolling='no' style='width:468px; height:60px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>"},
	//	{host: "www.booking.com", code: "<iframe width='468' height='60' scrolling='no' frameborder='0' name='banner' target='_blank' src='https://www.booking.com?aid=801965;tmpl=banners;size=468x60;lang=en;target_aid=801965;theme=minimal;label=banner'></iframe>"},
		//{host: "ads2.3s3s.org", code: "<iframe target='_blank' frameborder='0' src='http://ads2.3s3s.org' scrolling='no' style='width:480px; height:70px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>"},
		{
			host: "ads2.3s3s.org", 
			code: "<iframe target='_blank' frameborder='0' src='http://ads2.3s3s.org' scrolling='no' style='width:480px; height:70px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>"
		},
		{
			host: "3s3s.github.io",
			code: "<iframe target='_blank' frameborder='0' src='http://3s3s.github.io/github.io/' scrolling='no' style='width:480px; height:70px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>"
		},
		{
			host: "ad2.3s3s.org",
			code: "<iframe target='_blank' frameborder='0' src='http://ad2.3s3s.org/' scrolling='no' style='width:480px; height:70px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>"
		}
		//	'<div id="_3s3s_no_change"><!-- Ad Unit [17990] grani.ru.3s3s.org-468x60-1 -->'+
		//	'<div id="switch_placeholder_584d0961bba60196628d6ab63b857924" class="switch_placeholder"></div>'+
		//	'<script> (__scads = window.__scads || []).push({"z":17990,"targetId":"switch_placeholder_584d0961bba60196628d6ab63b857924","domain":"delivery.us.myswitchads.com","width":"468","height":"60"}); </script>'+
		//	'<script async src="//delivery.us.myswitchads.com/adserver/sat.js?v=2"></script></div>'}

	//	{host: "ad.3s3s.org", code: '<!-- Ad Unit [17195] Simple and easy to use anonymizer_468x60_1 -->' +
	//			'<div id="switch_placeholder_6f571e8753e85571dae325b1d0176362" class="switch_placeholder"></div>' +
	//			'<script> (__scads = window.__scads || []).push({"z":17195,"targetId":"switch_placeholder_6f571e8753e85571dae325b1d0176362","domain":"delivery.us.myswitchads.com","width":"468","height":"60"}); </script>' +
	//			'<script async src="//delivery.us.myswitchads.com/adserver/sat.js?v=2"></script>'}
		//{host: "coinurl.com", code: "<iframe scrolling='no' style='border: 0; width: 468px; height: 60px;' src='//coinurl.com/get.php?id=30738'></iframe>"}
	],
	proxyList: ["3s3s.org"],
	blackList: 
	[
		["yagoda-goji.com", "Aleksandr Litvinov <support@yagoda-goji.com>", 0], 
		["kanjuzi.com", "Zhang Chao <648914043@qq.com>", 1], 
		["security.ua", "Igor Prikhodko <admin@corp.security.ua>", 0],
		["tripadvisor.com", "MarkMonitor +1-301-545-4676", 0],
		["ebank.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["ebay.co.uk", "DigitalOcean Support <abuse@digitalocean.com>", 1],
		["ebay.com", "DigitalOcean Support <abuse@digitalocean.com>", 2],
		["pages.ebay.com", "DigitalOcean Support <abuse@digitalocean.com>", 1],
		["paypal.com", "DigitalOcean Support <abuse@digitalocean.com>", 1],
		["ok.ru", "DigitalOcean Support <abuse@digitalocean.com>", 1],
		["signin.ebay.com", "DigitalOcean Support <abuse@digitalocean.com>", 1],
		["infoseek.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["infoseek.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["internet-research.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["linkshare.com", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["marketspeed.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["nikki.ne.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.at", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.co.th", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.com", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.com.es", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.com.my", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.com.sg", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.com.tw", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.es", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.ne.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-bank.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-credit.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuteneagles.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-kc.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-sec.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-toushin.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["showtime.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["tarad.com", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.co.id", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.web.id", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["b2b-shiire.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.com.br", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-card.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten.de", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-life.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["stylife.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["rakuten-edy.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["www.kddi.com", "T. Mukasa <csirt-support@kddi.com>", 1],
		["kddi.com", "T. Mukasa <csirt-support@kddi.com>", 1],
		["happy-giraffe.ru", "Paul Kolosov <pavel@happy-giraffe.ru>", 1],
		["umi.ru", "Эдуард Андреев <ed@umisoft.ru>", 1],
		["umi-cms.ru", "Эдуард Андреев <ed@umisoft.ru>", 1],
		["parketmarket.by", "Ваш Салон <info@vashsalon.by>", 3]
	],
	RKN_List: ["legalrc.biz", "kavkazcenter.com"],

	workProxy: "",
	loadScript: function(url, callback)
	{
		// Adding the script tag to the head as suggested before
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;

		// Then bind the event to the callback function.
		// There are several events for cross browser compatibility.
		script.onreadystatechange = callback;
		script.onload = callback;

		// Fire the loading
		head.appendChild(script);
	},
	UpdateUrl: function(strOldUrl)
	{
		if ((!strOldUrl.length) || (strOldUrl.indexOf(_3s3sObject.workProxy) != -1))
			return strOldUrl;
			
		var strProtocol = "http://";
		if (strOldUrl.indexOf("https://") != -1)
			strProtocol = "http://h_t_t_p_s.";
					
		var nStart = strOldUrl.indexOf("://");
		if (nStart == -1)
			return strOldUrl;
			
		var strRightPart = strOldUrl.substring(nStart+3);
						
		var strHost = strRightPart;
		var strFolder = "/";
						
		var nSlash = strRightPart.indexOf('/');
		if (nSlash != -1)
		{
			strHost = strRightPart.substring(0, nSlash);
			if (strHost.indexOf(":") > 0)
				strHost = strHost.substring(0, strHost.indexOf(":"));
				
			strFolder = strRightPart.substring(nSlash);
		}
		strHost += "."+_3s3sObject.workProxy;
		
		return strProtocol+strHost+strFolder;
	},
	UpdateElementURL: function(element, getAddress)
	{
		var strURL = getAddress(element);
		if (strURL == null || (element.id == "_3s3s_no_change") || (element.parentNode.id == "_3s3s_no_change"))
			return;
				
		getAddress(element, _3s3sObject.UpdateUrl(getAddress(element)));
		/*if (strURL.indexOf("http://") != -1)
			getAddress(element, _3s3sObject.UpdateUrl(getAddress(element), "http://"));
		if (strURL.indexOf("https://") != -1)
			getAddress(element, _3s3sObject.UpdateUrl(getAddress(element), "http://h_t_t_p_s."));*/
	},
	Parse: function(elementName, getAddress)
	{
		var nFirstIndex = 0;
		setInterval(function()
			{
				var elements = document.getElementsByTagName(elementName);
				for(var index=nFirstIndex; index<nFirstIndex+100; index++)
				{
					if ((index >= elements.length) || (!elements[index]))
					{
						nFirstIndex = 0;
						return;
					}
					
					//var element = elements[index];
					_3s3sObject.UpdateElementURL(elements[index], getAddress);
				}
				nFirstIndex = index;
			}, 1000);
	},
	RedirectBlackList: function()
	{
		/*if (window.location.hostname.indexOf("h_t_t_p_s.www.facebook.com.3s3s.org") != -1)
		{
			window.location.hostname = "h_t_t_p_s.m.facebook.com.3s3s.org";
			return;
		}*/
			
		for (var i=0; i<_3s3sObject.blackList.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.blackList[i][0]) == -1)
				continue;
			
			var nPos = window.location.hostname.indexOf(_3s3sObject.workProxy);
			if (nPos == -1)
				continue;
				
			var protocol = window.location.protocol
			var host = window.location.hostname.substring(0, nPos-1);
			if (host.indexOf("h_t_t_p_s.") == 0)
			{
				protocol = "https:";
				host = window.location.hostname.substring(10, nPos-1)
			}
			
			/*if (_3s3sObject.blackList[i][2] == 0)
			{
				alert("This is blacklisted site. \n\nWARNING: perhaps site owners spying on visitors and/or actively interact with the intelligence service\n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to anonymouse.org");
				
				window.location.href = "http://anonymouse.org/cgi-bin/anon-www.cgi/" + protocol+"//"+host+window.location.pathname;
			}
			if (_3s3sObject.blackList[i][2] == 1)
			{
				alert("This is blacklisted site. \n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to anonymouse.org");
				
				window.location.href = "http://anonymouse.org/cgi-bin/anon-www.cgi/" + protocol+"//"+host+window.location.pathname;
			}
			if (_3s3sObject.blackList[i][2] == 2)
			{
				alert("This is blacklisted site. \n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to blank page");
				
				window.location.href = "about:blank";
			}
			if (_3s3sObject.blackList[i][2] == 3)
			{
				alert("This is blacklisted site. \n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to CORAL CDN");
				
				window.location.hostname = host + ".nyud.net";
			}*/
			
			window.location.href = "http://"+GetProxy()+"/redirect_error.ssp?referer="+protocol+"//"+host+window.location.pathname;
			break;
		}
		for (var i=0; i<_3s3sObject.RKN_List.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.RKN_List[i]) == -1)
				continue;
			
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
			xmlhttp.open("POST", "http://"+GetProxy()+"/make_short_url.ssp", false);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
			
			xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var data = JSON.parse(xmlhttp.responseText);
					
					if (data.result != true || data.short.length == 0)
						return;
						
					window.location.href = "http://"+data.short[0]+"."+GetProxy();
				}
			}	
			xmlhttp.onerror = function (e)
			{
				alert(xmlhttp.statusText);
			}
				
			var uri = encodeURIComponent(window.location.href);
			xmlhttp.send("action=make_temp&long="+uri+"&alias=");
			break;
		}
	},
	iframeRef: function( frameRef )
	{
		return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument;
	},
	CloneObject: function (obj)
	{
		var copy;
		if (null == obj || "object" != typeof obj) return obj;
		
		if (obj instanceof Object)
		{
	        	copy = {};
	        	for (var attr in obj)
	        	{
	            		if (obj.hasOwnProperty(attr))
	            			copy[attr] = _3s3sObject.CloneObject(obj[attr]);
	        	}
	        	return copy;
	    	}
	
	    	throw new Error("Unable to copy obj! Its type isn't supported.");
	},
	ReplaceProxyAdditions: function(str)
	{
		if (!str) return str;
		
		var ret	= str.replace("h_t_t_p_s.", '');
		return ret.replace("."+_3s3sObject.workProxy, '')
	},
	SetCloneLocation: function(ret)
	{
		var host = _3s3sObject.ReplaceProxyAdditions(ret.host);
		var href = _3s3sObject.ReplaceProxyAdditions(ret.href);
		var hostname = _3s3sObject.ReplaceProxyAdditions(ret.hostname);
		
		var origin = 0;
		if (ret.origin)
			origin = _3s3sObject.ReplaceProxyAdditions(ret.origin);
		
		Object.defineProperty(ret, "host", {
			get: function() {
				return host;
			},
			set: function(newValue)	{
				if (newValue.indexOf("."+_3s3sObject.workProxy) == -1)
				{
					if (newValue.indexOf(":") == -1)
						newValue += "."+_3s3sObject.workProxy;
					else
						newValue.replace(":", "."+_3s3sObject.workProxy+":");
				}
				window.location.host = newValue;
				return newValue; 
			},
			configurable: false
		});
		Object.defineProperty(ret, "href", {
			get: function() {
				return href;
			},
			set: function(newValue)	{
				window.location.href = _3s3sObject.UpdateUrl(newValue);
				return newValue; 
			},
			configurable: false
		});
		Object.defineProperty(ret, "hostname", {
			get: function() {
				return hostname;
			},
			set: function(newValue)	{
				if (newValue.indexOf("."+_3s3sObject.workProxy) == -1)
					newValue += "."+_3s3sObject.workProxy;
				window.location.hostname = newValue;
				return newValue; 
			},
			configurable: false
		});
		if (ret.origin)
			Object.defineProperty(ret, "origin", {
				get: function() {
					return origin;
				},
				set: function(newValue)	{
					window.location.origin = newValue;
					return newValue; 
				},
				configurable: false
			});
		ret.toString = function() {
			return this.href;
		}
	},
	run: function()
	{
		_3s3sObject.proxyList[0] = GetProxy();
		
		window.location_ = _3s3sObject.CloneObject(window.location);
		if (document.location) document.location_ = _3s3sObject.CloneObject(document.location);
		if ((window.location.hostname.indexOf("ads2.3s3s.org") != -1) ||
		    (window.location.hostname.indexOf("adsence.3s3s.org") != -1) ||
		    (window.location.hostname.indexOf("ad2.3s3s.org") != -1))
			return;
			
		if (window.location.hostname.indexOf("."+_3s3sObject.proxyList[0]) == -1)
		{
			_3s3sObject.ShowAd();
			return;
		}
			
		for (var i=0; i<_3s3sObject.proxyList.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.proxyList[i]) == -1)
				continue;
			_3s3sObject.workProxy = _3s3sObject.proxyList[i];
			break;
		}
		if (!_3s3sObject.workProxy.length)
			return;
		
		_3s3sObject.RedirectBlackList();
		
			
		var initDomain = document.domain.substring(0);
		var initLocation = window.location_;
		var initLocationDoc = document.location_;
		var initReferrer = document.referrer+"";
		var initURL = document.URL+"";
		
		if (!Object.defineProperty)
		{
			document.referrer = initReferrer.replace("."+_3s3sObject.workProxy, '');
			document.URL = initURL.replace("."+_3s3sObject.workProxy, '');
		}
		else
		{
			Object.defineProperty(document, "domain", {
				get: function()
				{
					var nPos1 = initDomain.indexOf("h_t_t_p_s.");
					var nPos2 = initDomain.indexOf("." + _3s3sObject.workProxy);
					
					if (nPos2 == -1)
						return initDomain;
						
					var strLeft = initDomain.substring(0, nPos2);
					
					if (nPos1 == -1)
						return strLeft;
					
					return strLeft.substring(10);
				},
				set: function(newValue) 
				{
					return newValue+"." + _3s3sObject.workProxy;
				}, 
				configurable: false });
				
			Object.defineProperty(document, "referrer", {
				get: function()
				{
					//var ret = initReferrer.replace("h_t_t_p_s.", '');
				//	return ret.replace("."+_3s3sObject.workProxy, '');
					return _3s3sObject.ReplaceProxyAdditions(initReferrer);
				},
				set: function(newValue) 
				{
					return newValue;
				}, 
				configurable: false });
			Object.defineProperty(document, "URL", {
				get: function()
				{
					//var ret = initURL.replace("h_t_t_p_s.", '');
					//return ret.replace("."+_3s3sObject.workProxy, '');
					return _3s3sObject.ReplaceProxyAdditions(initURL);
				},
				set: function(newValue) 
				{
					return newValue;
				}, 
				configurable: false });
			Object.defineProperty(window, "location_", {
				get: function()
				{
					var ret = _3s3sObject.CloneObject(window.location);
					_3s3sObject.SetCloneLocation(ret);
					return ret;
				}
			});
			Object.defineProperty(document, "location_", {
				get: function()
				{
					var ret = _3s3sObject.CloneObject(document.location);
					_3s3sObject.SetCloneLocation(ret);
					return ret;
				}
			});
				
		}
		
		_3s3sObject.Parse('A', function(element, value) 
			{
				if (element.id == "_3s3s_no_change" )
					return null;
					
				var strHref = element.href.substring(0);

				if ((value) && (value.length) && (value != strHref))
					element.href = value;
					
				return strHref;
			})
		_3s3sObject.Parse('LINK', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.href))
					element.href = value;
				return element.href;
			})
		_3s3sObject.Parse('IMG', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.src = value;
				return element.src;
			})
		_3s3sObject.Parse('SCRIPT', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.src = value;
				return element.src;
			})
		_3s3sObject.Parse('FRAME', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.src = value;
				return element.src;
			})
		_3s3sObject.Parse('IFRAME', function(element, value) 
			{
				for (var i=0; i<_3s3sObject.adNetworks.length; i++)
				{
					if (element.src.indexOf("//"+_3s3sObject.adNetworks[i].host) != -1)
						return;
				}
				
				if ((value) && (value.length) && (value != element.src))
					element.src = value;
				return element.src;
			})
		_3s3sObject.Parse('FORM', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.action = value;
				return element.getAttribute("action");
			})
		_3s3sObject.Parse('INPUT', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.src = value;
				return element.src;
			})
		/*_3s3sObject.Parse('OBJECT', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.data = value;
				return element.data;
			})*/
		_3s3sObject.Parse('SOURCE', function(element, value) 
			{
				if ((value) && (value.length) && (value != element.src))
					element.src = value;
				return element.src;
			})
			
		var open = XMLHttpRequest.prototype.open;
		XMLHttpRequest.prototype.open = function() 
		{
			open.apply(this, arguments);
		}
		
		"appendChild insertBefore insertAfter replaceChild"
		.split(" ")
		.forEach(
		    function ( ftype ) {
		        var corefn = this[ftype]
		        this[ftype] = function () {
		            _3s3sObject.DomChange( ftype, arguments );
		            return corefn.apply( this, arguments );
		        };
		    },
		    Element.prototype
		);
		
		_3s3sObject.ShowAd();
		/*var open2 = window.prototype.open;
		window.prototype.open = function(strUrl, winName, winParams)
		{
			open2.call(this, _3s3sObject.UpdateUrl(strUrl), winName, winParams);
		}*/
	},
	DomChange: function(ftype, fargs)
	{
		if (!fargs || !fargs.length)
			return;
			
		if (fargs[0].src)
			fargs[0].src = _3s3sObject.UpdateUrl(fargs[0].src);
		if (fargs[0].href)
			fargs[0].href = _3s3sObject.UpdateUrl(fargs[0].href);
		
	},
	CloseAd: function()
	{
		var elem = document.getElementById("_3s3sTopAd")
		elem.parentNode.removeChild(elem);
		return false;
	},
	
	GetAdCode: function()
	{
		//if (window["locatio"+"n"].hostname.indexOf(".3s3s.org") == -1)
		//	return _3s3sObject.adNetworks[1].code; //proxy mode

		function GetOneTimeCode()
		{
			var storage;
			if (window.content != undefined)
				storage = window.content.localStorage;
			else
				storage = localStorage;
		    
			var listAdTimes;
			var strlistAdTimes = storage.getItem('3s3s_ad_times');
			if (strlistAdTimes == undefined)
				listAdTimes = Object();
			else
				listAdTimes = JSON.parse(strlistAdTimes);
			
			var CURRENT_TIME_MS = (new Date()).getTime();	
			
			if (listAdTimes["a-ads"] == undefined)
				listAdTimes["a-ads"] = CURRENT_TIME_MS - 25*3600*1000;
				
			if (CURRENT_TIME_MS - listAdTimes["a-ads"] < 24*3600*1000)
				return "";
			
			listAdTimes["a-ads"] = CURRENT_TIME_MS;
			storage.setItem('3s3s_ad_times', JSON.stringify(listAdTimes));
			
			return _3s3sObject.adNetworks[0].code;
			
		}
		var strOneTimeCode = GetOneTimeCode();

		var nIndex = 0; //adArray.length*Math.random() | 0;
		for (var i = 0; i<_3s3sObject.aWhiteADList.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.aWhiteADList[i]) != -1)
			{
				if (strOneTimeCode.length)
					return strOneTimeCode;
				nIndex = 1;
				break;
			}
		}
		//if (window["locatio"+"n"].hostname.indexOf(".3s3s.org") == -1)
		//	return _3s3sObject.adNetworks[1].code; //proxy mode
		return _3s3sObject.adNetworks[nIndex].code;
	},
	
	ShowAd: function()
	{
		if (window.top !== window.self)
			return;
		if (window.location.hostname == "cur.lv")
			return;

		for (var i=0; i<_3s3sObject.adNetworks.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.adNetworks[i].host) != -1)
				return;
		}
		function onLoad()
		{
			if (!document.body)
			{
				setTimeout(onLoad, 5000);
				return;
			}
			
			var strCode = _3s3sObject.GetAdCode();
			var ads3 = "";//<iframe target='_blank' frameborder='0' s"+"rc='http:/"+"/ads3"+".3s3s"+".org' scrolling='no' style='width:0px; height:0px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>";
			
			var parent = document.createElement('div');
			parent.id = "_3s3sTopAd";
			parent.style.cssText = 'overflow: hidden !important; box-shadow: 1px 1px 4px #333 !important; z-index: 2047483647 !important; position: fixed !important; display: block !important; height: 65px !important; min-width: 800px !important; left: 1% !important; margin: 0 !important; padding-left: 10px !important; padding-right: 10px !important; top: 0 !important; width: 96% !important; background-color: rgba(255, 255, 255, 0.9) !important; font size: 11px !important';
			parent.innerHTML = 
				"<table style='word-break: keep-all !important; width: 100% !important; height: 100% !important; font-size: 12px !important'><tr style='vertical-align: center !important; height: 65px !important'>" +
					"<td style='valign: top !important; vertical-align: top !important;'><span style='color: #005689 !important; cursor: pointer !important;' id='_3s3sCloseAd' title='close ad'>close</span></td>" +
					"<td style='width: 100% !important; height: 100% !important; text-align: center !important; vertical-align: top !important;'>" +
					strCode + ads3 + "</td>"+
					"<td style='vertical-align: top !important;'><a style='color: #005689 !important;' href='mailto:ivanivanovkzv@gmail.com?subject=Offer of cooperation (AD 3s3s.org)'>Advertise on 3s3s.org</a></td>"+
				"</tr></table>";
				
			//if (window["locatio"+"n"].hostname.indexOf(_3s3sObject.workProxy) == -1)
			//	parent.innerHTML = ads3;
				
			document.body.appendChild(parent);

			var linkClose = document.getElementById("_3s3sCloseAd");
			/*linkClose.onclick = function (){
				document.getElementById("_3s3sTopAd").remove();
				return false;
			}*/ 
			linkClose.addEventListener('click', _3s3sObject.CloseAd, false);
			linkClose.addEventListener('touchstart', _3s3sObject.CloseAd, false);
		}
		
		setTimeout(onLoad, 5000);
	}
}
_3s3sObject.run();
