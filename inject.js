var _3s3sObject = 
{
	adNetworks: [
		{host: "ad.a-ads.com", code: "<iframe data-aa='47233' src='//ad.a-ads.com/47233?size=468x60' scrolling='no' style='width:468px; height:60px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>"},
		{host: "coinurl.com", code: "<iframe scrolling='no' style='border: 0; width: 468px; height: 60px;' src='//coinurl.com/get.php?id=30738'></iframe>"}
	],
	proxyList: ["3s3s.org", "unblok.us"],
	blackList: 
	[
		["yagoda-goji.com", "Aleksandr Litvinov <support@yagoda-goji.com>", 0], 
		["security.ua", "Igor Prikhodko <admin@corp.security.ua>", 0],
		["ebank.co.jp", "Toshiharu Kaneko <toshiharu.kaneko@mail.rakuten.com>", 1],
		["ebay.co.uk", "DigitalOcean Support <abuse@digitalocean.com>", 1],
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
	UpdateUrl: function(strOldUrl, strProtocol)
	{
		if ((!strOldUrl.length) || (strOldUrl.indexOf(strProtocol) == -1) || (strOldUrl.indexOf(_3s3sObject.workProxy) != -1))
			return strOldUrl;
					
		var nStart = strOldUrl.indexOf(strProtocol);
		var strRightPart = strOldUrl.substring(nStart+strProtocol.length);
						
		var strHost = strRightPart;
		var strFolder = "/";
						
		var nSlash = strRightPart.indexOf('/');
		if (nSlash != -1)
		{
			strHost = strRightPart.substring(0, nSlash);
			strFolder = strRightPart.substring(nSlash);
		}
		strHost += "."+_3s3sObject.workProxy;
		
		return strProtocol+strHost+strFolder;
	},
	UpdateElementURL: function(element, getAddress)
	{
		strURL = getAddress(element);
		if (strURL == null)
			return;
				
		if (strURL.indexOf("http://") != -1)
			getAddress(element, _3s3sObject.UpdateUrl(getAddress(element), "http://"));
		if (strURL.indexOf("https://") != -1)
			getAddress(element, _3s3sObject.UpdateUrl(getAddress(element), "http://h_t_t_p_s."));
	},
	Parse: function(elementName, getAddress)
	{
		var nFirstIndex = 0;
		intervalID = setInterval(function()
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
			
			if (_3s3sObject.blackList[i][2] == 0)
			{
				alert("This is blacklisted site. \n\nWARNING: perhaps site owners spying on visitors and/or actively interact with the intelligence service\n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to anonymouse.org");
				
				window.location.href = "http://anonymouse.org/cgi-bin/anon-www.cgi/" + protocol+"//"+host;
			}
			if (_3s3sObject.blackList[i][2] == 1)
			{
				alert("This is blacklisted site. \n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to anonymouse.org");
				
				window.location.href = "http://anonymouse.org/cgi-bin/anon-www.cgi/" + protocol+"//"+host;
			}
			if (_3s3sObject.blackList[i][2] == 3)
			{
				alert("This is blacklisted site. \n\nFor unblock this please contact to site admin: " +_3s3sObject.blackList[i][1]+ "\nNow you will by redirect to CORAL CDN");
				
				window.location.hostname = host + ".nyud.net";
			}
			
			break;
		}
		for (var i=0; i<_3s3sObject.RKN_List.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.RKN_List[i]) == -1)
				continue;
			
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
			xmlhttp.open("POST", "http://3s3s.org/make_short_url.ssp", false);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
			
			xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var data = JSON.parse(xmlhttp.responseText);
					
					if (data.result != true || data.short.length == 0)
						return;
						
					window.location.href = "http://"+data.short[0]+".3s3s.org";
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
	run: function()
	{
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
		var initLocation = window.location;
		
		Object.defineProperty(document, "domain", {
			get: function()
			{
				var nPos1 = initDomain.indexOf("h_t_t_p_s.");
				var nPos2 = initDomain.indexOf("." + _3s3sObject.workProxy);
				
				if (nPos2 == -1)
					return initDomain;
					
				var strLeft = initDomain.substring(0, nPos2);
				
				if (nPos1 == -1);
					return strLeft;
				
				return strLeft.substring(10);
			},
			set: function(newValue) 
			{
				return newValue+"." + _3s3sObject.workProxy;
			}, 
			configurable: false });
			
		/*Object.defineProperty(window, "location", {
			get: function()
			{
				console.log("3s3s get location");
				return initLocation;
			},
			configurable: false });*/

		/*var footer = document.createElement('a');
		footer.id = "3s3s_footer";
		footer.href = "http://www.3s3s.org";
		footer.title = "Anonymoused by http://www.3s3s/org";
		document.body.appendChild(footer);*/
		
		_3s3sObject.Parse('A', function(element, value) 
			{
				var strHref = element.href.substring(0);
				/*var strProtocol = element.protocol.substring(0);
				var strHost = element.host.substring(0);
				var strPath = element.pathname + element.search + element.hash;
				
				Object.defineProperty(element, "href", {
					get: function()
					{
						var nPos1 = strHost.indexOf("h_t_t_p_s.");
						var nPos2 = strHost.indexOf("." + _3s3sObject.workProxy);
						
						if (nPos2 == -1)
						{
							console.log("a href get return1: " + strHref);
							return strHref;
						}
							
						var strLeft = strHost.substring(0, nPos2);
						
						if (nPos1 == -1);
						{
							console.log("a href get return2: " + strProtocol+"//" + strLeft + strPath);
							return strProtocol+"//" + strLeft + strPath;
						}
						
						console.log("a href get return3: " + strProtocol+"//" + strLeft.substring(10) + strLeft + strPath);
						return strProtocol+"//" + strLeft.substring(10) + strLeft + strPath;
					},
					set: function(newValue) 
					{
						return newValue;
					}, 
					configurable: false });*/

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
		XMLHttpRequest.prototype.open = function(Method, Url, async) 
		{
			open.call(this, Method, _3s3sObject.UpdateUrl(Url), async);
		}	
		
		_3s3sObject.ShowAd();

		/*var open2 = window.prototype.open;
		window.prototype.open = function(strUrl, winName, winParams)
		{
			open2.call(this, _3s3sObject.UpdateUrl(strUrl), winName, winParams);
		}*/
	},
	CloseAd: function()
	{
		document.getElementById("_3s3sTopAd").remove();
	},
	
	ShowAd: function()
	{
		for (var i=0; i<_3s3sObject.adNetworks.length; i++)
		{
			if (window.location.hostname.indexOf(_3s3sObject.adNetworks[i].host) != -1)
				return;
		}
		function onLoad()
		{
			if (!document.body)
				return;
				
			var nIndex = _3s3sObject.adNetworks.length*Math.random() | 0;

			var parent = document.createElement('div');
			parent.id = "_3s3sTopAd";
			parent.style.cssText = 'box-shadow: 1px 1px 4px #333 !important; z-index: 100 !important; position: fixed !important; display: block !important; height: 65px !important; min-width: 800px !important; left: 0 !important; margin: 0 !important; padding: 0 !important; top: 0 !important; width: 100% !important; background-color: white !important; font size: 11px !important';
			parent.innerHTML = 
				"<table style='width: 100% !important; height: 100% !important'><tr>" +
					"<td><a href='mailto:ivanivanovkzv@gmail.com?subject=Offer of cooperation (AD 3s3s.org)'>Advertise on 3s3s.org</a></td><td style='width: 100% !important; height: 100% !important; text-align: center !important'>" +
					_3s3sObject.adNetworks[nIndex].code + "</td><td style='valign: top !important'><a id='_3s3sCloseAd' title='close ad' href='#'>close</a></td>" +
				"</tr></table>";
			document.body.appendChild(parent);
			
			var linkClose = document.getElementById("_3s3sCloseAd");
			linkClose.onclick = function (){
				document.getElementById("_3s3sTopAd").remove();
				return false;
			}
		}
		if (window.addEventListener) {
		  window.addEventListener('load', onLoad, false);
		}
		else if (window.attachEvent) {
		  window.attachEvent('onload', onLoad );
		}

	}
}
_3s3sObject.run();
