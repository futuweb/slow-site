!function(n) {
    function e(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return n[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }
    var t = {};
    return e.m = n, e.c = t, e.p = "", e(0);
}([ function(n, e, t) {
    "use strict";
    var r = t(1), i = new r({
        monitorId: 442581
    });
    i.listen(), t(2), t(4), t(5);
    var o = t(8), a = angular.module("kaihubao", [ o, "lr.upload", "duScroll" ]).config([ "$stateProvider", "$locationProvider", "$urlRouterProvider", function(n, e, r) {
        e.html5Mode(!0), r.otherwise("index"), n.state("index", {
            url: "/",
            templateUrl: "/views/index/index.html",
            controller: t(9)
        }).state("indexUrl", {
            url: "/index",
            templateUrl: "/views/index/index.html",
            controller: t(9)
        }).state("customerList", {
            url: "/index/customer-list?status",
            templateUrl: "/views/index/customerList.html",
            controller: t(10),
            reloadOnSearch: !1,
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("agentPassword", {
            url: "/index/agent-password",
            templateUrl: "/views/index/agentPassword.html",
            controller: t(11),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("helpFaq", {
            url: "/index/help-faq",
            templateUrl: "/views/index/helpFaq.html",
            controller: t(12),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("registerAgent", {
            url: "/index/register-agent",
            templateUrl: "/views/index/registerAgent.html",
            controller: t(13)
        }).state("fillAgent", {
            url: "/index/fill-agent",
            templateUrl: "/views/index/fillAgent.html",
            controller: t(14),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("agreementAgent", {
            url: "/index/agreement-agent",
            templateUrl: "/views/index/agreementAgent.html",
            controller: t(15),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("accessAgent", {
            url: "/index/access-agent",
            templateUrl: "/views/index/accessAgent.html",
            controller: t(16),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("downloadAgent", {
            url: "/index/download-agent",
            templateUrl: "/views/index/downloadAgent.html",
            controller: t(17),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("downloadBlankForm", {
            url: "/index/download-blank-form",
            templateUrl: "/views/index/downloadBlankForm.html",
            controller: t(18),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("downloadCard", {
            url: "/index/download-card",
            templateUrl: "/views/index/downloadCard.html",
            controller: t(19),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("incomeAgent", {
            url: "/index/income-agent?uid",
            templateUrl: "/views/index/incomeAgent.html",
            controller: t(20),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("agentInformation", {
            url: "/index/agent-information",
            templateUrl: "/views/index/agentInformation.html",
            controller: t(21),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("functionSet", {
            url: "/index/function-set",
            templateUrl: "/views/index/functionSet.html",
            controller: t(22),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("accountName", {
            url: "/index/account-name",
            templateUrl: "/views/index/accountName.html",
            controller: t(23),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("agentInformationModify", {
            url: "/index/agent-information-modify",
            templateUrl: "/views/index/agentInformationModify.html",
            controller: t(24),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("downloadIos", {
            url: "/index/download-ios",
            templateUrl: "/views/index/downloadIos.html",
            controller: t(25)
        }).state("mobileRegister", {
            url: "/index/mobile-register",
            templateUrl: "/views/index/mobileRegister.html",
            controller: t(26)
        }).state("agentTask", {
            url: "/index/agent-task",
            templateUrl: "/views/index/agentTask.html",
            controller: t(27),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("completeTest", {
            url: "/index/complete-test",
            templateUrl: "/views/index/completeTest.html",
            controller: t(28),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("agentOperationGuide", {
            url: "/index/agent-operation-guide",
            templateUrl: "/views/index/agentOperationGuide.html",
            controller: t(29),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("applicationType", {
            url: "/index/application-type",
            templateUrl: "/views/index/applicationType.html",
            controller: t(30)
        }).state("videoInterview", {
            url: "/index/video-interview",
            templateUrl: "/views/index/videoInterview.html",
            controller: t(31),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("verifyId", {
            url: "/index/verify-id",
            templateUrl: "/views/index/verifyId.html",
            controller: t(32),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("resetPassWord", {
            url: "/index/reset-password",
            templateUrl: "/views/index/resetPassWord.html",
            controller: t(33),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("resetSuccess", {
            url: "/index/reset-success",
            templateUrl: "/views/index/resetSuccess.html",
            controller: t(34),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("addCustomerInformation", {
            url: "/index/add-customer-information?uid&origin",
            templateUrl: "/views/index/addCustomerInformation.html",
            controller: t(35),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("mobileIndex", {
            url: "/index/mobile-index",
            templateUrl: "/views/index/mobileIndex.html",
            controller: t(36),
            resolve: {
                agentInfo: "agentInfo"
            }
        }).state("mobileLogin", {
            url: "/index/mobile-login",
            templateUrl: "/views/index/mobileLogin.html",
            controller: t(37),
            resolve: {
                agentInfo: "agentInfo"
            }
        });
    } ]);
    a.directive("locateButton", t(38)), a.directive("addressSelect", t(39)), a.directive("videoTag", t(53)), 
    a.factory("MyError", t(54)), a.factory("city", t(55)), a.factory("bankCard", t(56)), 
    a.factory("myHttp", t(57)), a.factory("agentInfo", t(58)), a.factory("login", t(59)), 
    a.factory("customer", t(60)), a.factory("loading", t(61)), a.factory("dialog", t(62)), 
    a.factory("form", t(63)), a.factory("agent", t(64)), a.factory("siteStat", t(65)), 
    a.factory("autoJump", t(66)), a.factory("jzbMobile", t(67)), a.factory("forbidJump", t(68)), 
    a.factory("verify", t(69)), a.factory("map", t(70)), a.factory("mobileAreaBox", t(71)), 
    a.run([ "$rootScope", "agent", "agentInfo", function(n, e, t) {
        e.getAgentInfo().then(function(e) {
            n.state = +e.state, n.taskStatus = +e.newbie_task_status, n.code = e.code;
        });
    } ]), a.run([ "$rootScope", "$location", "siteStat", "autoJump", "jzbMobile", "forbidJump", function(n, e, t, r, i, o) {
        i.handleLeftNav(), n.$on("$stateChangeStart", function(n, e) {
            var t = o.shoulePreventJump(e.url);
            t && n.preventDefault(), r.jump(e.url);
        });
    } ]), a.run([ "$rootScope", "$location", "siteStat", "map", function(n, e, t, r) {
        n.$on("$stateChangeSuccess", function() {
            var i = e.path();
            t.pvCount(i), r.closeTimer(), clearInterval(n.timer);
        });
    } ]), a.run([ "$rootScope", "agent", "agentInfo", "$location", function(n, e, t, r) {
        n.passTask = function() {
            e.passAgentTask().then(function(n) {
                t.refresh();
            }, function(n) {
                alert(n);
            });
        }, n.newbieTaskJump = function() {
            2 === n.taskStatus || 3 === n.taskStatus ? r.path("/index/complete-test") : r.path("/index/agent-task");
        };
    } ]);
    var s = t(72);
    new s({
        ga: "GTM-TX9746"
    });
}, function(n, e, t) {
    !function(e, t) {
        n.exports = t();
    }(this, function() {
        return function(n) {
            function e(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return n[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
            }
            var t = {};
            return e.m = n, e.c = t, e.p = "", e(0);
        }([ function(n, e, t) {
            var r = function(n) {
                !n || !n.monitorId, this._monitorId = n.monitorId, this._serverUrl = "//dedog-report.futunn.com";
            }, i = function(n, e, t) {
                return "load" === e && "complete" === document.readyState ? void t() : void (window.addEventListener ? n.addEventListener(e, t, !1) : window.attachEvent && n.attachEvent("on" + e, t));
            };
            r.prototype.listen = function(n) {
                function e() {
                    function n(n) {
                        var e = [];
                        for (var t in n) e.push(t + "=" + n[t]);
                        return e.join("&");
                    }
                    var e = "__toolDedogBeaconImg", t = document.getElementById(e);
                    t || (t = new Image(), t.id = e, t.style.display = "none", document.body.appendChild(t)), 
                    t.src = c + "?" + n(s);
                }
                var r = t(1), o = r(navigator.userAgent), a = o.device.model && o.device.vendor + " " + o.device.model || o.device.vendor || o.device.type || o.os.name, s = {
                    ua: navigator.userAgent,
                    dev_type: a,
                    os_type: o.os.name + " " + o.os.version,
                    monitorId: this._monitorId
                };
                i(window, "error", function(n) {
                    s.url = location.href, s.msg = n.message, s.filename = n.filename, s.line = n.lineno, 
                    s.col = n.colno, s.stack = n.error.stack;
                    var t = new Date();
                    s.time = new Date(t.getTime() - 60 * t.getTimezoneOffset() * 1e3).toISOString().replace(/T/g, " ").replace(/\.\d+Z$/, ""), 
                    i(window, "load", e);
                });
                var c = this._serverUrl;
            }, n.exports = r;
        }, function(n, e) {
            !function(e, t) {
                "use strict";
                var r = "", i = "?", o = "function", a = "undefined", s = "object", c = "major", u = "model", l = "name", f = "type", d = "vendor", p = "version", h = "architecture", g = "console", m = "mobile", v = "tablet", y = {
                    has: function(n, e) {
                        return e.toLowerCase().indexOf(n.toLowerCase()) !== -1;
                    },
                    lowerize: function(n) {
                        return n.toLowerCase();
                    }
                }, $ = {
                    rgx: function() {
                        for (var n, e, r, i, c, u, l, f = 0, d = arguments; f < d.length; f += 2) {
                            var p = d[f], h = d[f + 1];
                            if (typeof n === a) {
                                n = {};
                                for (i in h) c = h[i], typeof c === s ? n[c[0]] = t : n[c] = t;
                            }
                            for (e = r = 0; e < p.length; e++) if (u = p[e].exec(this.getUA())) {
                                for (i in h) l = u[++r], c = h[i], typeof c === s && c.length > 0 ? 2 == c.length ? typeof c[1] == o ? n[c[0]] = c[1].call(this, l) : n[c[0]] = c[1] : 3 == c.length ? typeof c[1] !== o || c[1].exec && c[1].test ? n[c[0]] = l ? l.replace(c[1], c[2]) : t : n[c[0]] = l ? c[1].call(this, l, c[2]) : t : 4 == c.length && (n[c[0]] = l ? c[3].call(this, l.replace(c[1], c[2])) : t) : n[c] = l ? l : t;
                                break;
                            }
                            if (u) break;
                        }
                        return n;
                    },
                    str: function(n, e) {
                        for (var r in e) if (typeof e[r] === s && e[r].length > 0) {
                            for (var o in e[r]) if (y.has(e[r][o], n)) return r === i ? t : r;
                        } else if (y.has(e[r], n)) return r === i ? t : r;
                        return n;
                    }
                }, w = {
                    browser: {
                        oldsafari: {
                            major: {
                                1: [ "/8", "/1", "/3" ],
                                2: "/4",
                                "?": "/"
                            },
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: [ "NT 5.1", "NT 5.2" ],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                RT: "ARM"
                            }
                        }
                    }
                }, b = {
                    browser: [ [ /(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i ], [ l, p, c ], [ /\s(opr)\/((\d+)?[\w\.]+)/i ], [ [ l, "Opera" ], p, c ], [ /(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i ], [ l, p, c ], [ /(yabrowser)\/((\d+)?[\w\.]+)/i ], [ [ l, "Yandex" ], p, c ], [ /(comodo_dragon)\/((\d+)?[\w\.]+)/i ], [ [ l, /_/g, " " ], p, c ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i ], [ l, p, c ], [ /(dolfin)\/((\d+)?[\w\.]+)/i ], [ [ l, "Dolphin" ], p, c ], [ /((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i ], [ [ l, "Chrome" ], p, c ], [ /version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i ], [ p, c, [ l, "Mobile Safari" ] ], [ /version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i ], [ p, c, l ], [ /webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i ], [ l, [ c, $.str, w.browser.oldsafari.major ], [ p, $.str, w.browser.oldsafari.version ] ], [ /(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i ], [ l, p, c ], [ /(navigator|netscape)\/((\d+)?[\w\.-]+)/i ], [ [ l, "Netscape" ], p, c ], [ /(swiftfox)/i, /(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i ], [ l, p, c ] ],
                    cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ h, "amd64" ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ h, "ia32" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ h, /ower/, "", y.lowerize ] ], [ /(sun4\w)[;\)]/i ], [ [ h, "sparc" ] ], [ /(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ h, y.lowerize ] ],
                    device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ u, d, [ f, v ] ], [ /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ d, u, [ f, v ] ], [ /\((ip[honed]+);.+(apple)/i ], [ u, d, [ f, m ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ d, u, [ f, m ] ], [ /\((bb10);\s(\w+)/i ], [ [ d, "BlackBerry" ], u, [ f, m ] ], [ /android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i ], [ [ d, "Asus" ], u, [ f, v ] ], [ /(sony)\s(tablet\s[ps])/i ], [ d, u, [ f, v ] ], [ /(nintendo)\s([wids3u]+)/i ], [ d, u, [ f, g ] ], [ /((playstation)\s[3portablevi]+)/i ], [ [ d, "Sony" ], u, [ f, g ] ], [ /(sprint\s(\w+))/i ], [ [ d, $.str, w.device.sprint.vendor ], [ u, $.str, w.device.sprint.model ], [ f, m ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ d, [ u, /_/g, " " ], [ f, m ] ], [ /\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i, /(mot)[\s-]?(\w+)*/i ], [ [ d, "Motorola" ], u, [ f, m ] ], [ /android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i ], [ [ d, "Motorola" ], u, [ f, v ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i ], [ [ d, "Samsung" ], u, [ f, v ] ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ d, "Samsung" ], u, [ f, m ] ], [ /(sie)-(\w+)*/i ], [ [ d, "Siemens" ], u, [ f, m ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i ], [ [ d, "Nokia" ], u, [ f, m ] ], [ /android\s3\.[\s\w-;]{10}((a\d{3}))/i ], [ [ d, "Acer" ], u, [ f, v ] ], [ /android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i ], [ [ d, "LG" ], u, [ f, v ] ], [ /((nexus\s4))/i, /(lg)[e;\s-\/]+(\w+)*/i ], [ [ d, "LG" ], u, [ f, m ] ], [ /(mobile|tablet);.+rv\:.+gecko\//i ], [ f, d, u ] ],
                    engine: [ [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ l, p ], [ /rv\:([\w\.]+).*(gecko)/i ], [ p, l ] ],
                    os: [ [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ l, [ p, $.str, w.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ l, "Windows" ], [ p, $.str, w.os.windows.version ] ], [ /\((bb)(10);/i ], [ [ l, "BlackBerry" ], p ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i ], [ l, p ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ l, "Symbian" ], p ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ l, "Firefox OS" ], p ], [ /(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ l, p ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ l, "Chromium OS" ], p ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ l, "Solaris" ], p ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ l, p ], [ /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i ], [ [ l, "iOS" ], [ p, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i ], [ l, [ p, /_/g, "." ] ], [ /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i ], [ l, p ] ]
                }, x = function I(n) {
                    if (!(this instanceof I)) return new I(n).getResult();
                    var t = n || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : r);
                    return this instanceof I ? (this.getBrowser = function() {
                        return $.rgx.apply(this, b.browser);
                    }, this.getCPU = function() {
                        return $.rgx.apply(this, b.cpu);
                    }, this.getDevice = function() {
                        return $.rgx.apply(this, b.device);
                    }, this.getEngine = function() {
                        return $.rgx.apply(this, b.engine);
                    }, this.getOS = function() {
                        return $.rgx.apply(this, b.os);
                    }, this.getResult = function() {
                        return {
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    }, this.getUA = function() {
                        return t;
                    }, this.setUA = function(n) {
                        return t = n, this;
                    }, void this.setUA(t)) : new I(n).getResult();
                };
                n.exports = x;
            }(this);
        } ]);
    });
}, function(n, e, t) {
    t(3), n.exports = angular;
}, function(n, e) {
    !function(n) {
        "use strict";
        function e(n, e) {
            return e = e || Error, function() {
                var t, r, i = 2, o = arguments, a = o[0], s = "[" + (n ? n + ":" : "") + a + "] ", c = o[1];
                for (s += c.replace(/\{\d+\}/g, function(n) {
                    var e = +n.slice(1, -1), t = e + i;
                    return t < o.length ? $n(o[t]) : n;
                }), s += "\nhttp://errors.angularjs.org/1.5.8/" + (n ? n + "/" : "") + a, r = i, 
                t = "?"; r < o.length; r++, t = "&") s += t + "p" + (r - i) + "=" + encodeURIComponent($n(o[r]));
                return new e(s);
            };
        }
        function t(n) {
            if (null == n || S(n)) return !1;
            if (Yr(n) || b(n) || qr && n instanceof qr) return !0;
            var e = "length" in Object(n) && n.length;
            return x(e) && (e >= 0 && (e - 1 in n || n instanceof Array) || "function" == typeof n.item);
        }
        function r(n, e, i) {
            var o, a;
            if (n) if (k(n)) for (o in n) "prototype" == o || "length" == o || "name" == o || n.hasOwnProperty && !n.hasOwnProperty(o) || e.call(i, n[o], o, n); else if (Yr(n) || t(n)) {
                var s = "object" != typeof n;
                for (o = 0, a = n.length; o < a; o++) (s || o in n) && e.call(i, n[o], o, n);
            } else if (n.forEach && n.forEach !== r) n.forEach(e, i, n); else if (w(n)) for (o in n) e.call(i, n[o], o, n); else if ("function" == typeof n.hasOwnProperty) for (o in n) n.hasOwnProperty(o) && e.call(i, n[o], o, n); else for (o in n) Nr.call(n, o) && e.call(i, n[o], o, n);
            return n;
        }
        function i(n, e, t) {
            for (var r = Object.keys(n).sort(), i = 0; i < r.length; i++) e.call(t, n[r[i]], r[i]);
            return r;
        }
        function o(n) {
            return function(e, t) {
                n(t, e);
            };
        }
        function a() {
            return ++Xr;
        }
        function s(n, e) {
            e ? n.$$hashKey = e : delete n.$$hashKey;
        }
        function c(n, e, t) {
            for (var r = n.$$hashKey, i = 0, o = e.length; i < o; ++i) {
                var a = e[i];
                if ($(a) || k(a)) for (var u = Object.keys(a), l = 0, f = u.length; l < f; l++) {
                    var d = u[l], p = a[d];
                    t && $(p) ? I(p) ? n[d] = new Date(p.valueOf()) : C(p) ? n[d] = new RegExp(p) : p.nodeName ? n[d] = p.cloneNode(!0) : L(p) ? n[d] = p.clone() : ($(n[d]) || (n[d] = Yr(p) ? [] : {}), 
                    c(n[d], [ p ], !0)) : n[d] = p;
                }
            }
            return s(n, r), n;
        }
        function u(n) {
            return c(n, Fr.call(arguments, 1), !1);
        }
        function l(n) {
            return c(n, Fr.call(arguments, 1), !0);
        }
        function f(n) {
            return parseInt(n, 10);
        }
        function d(n, e) {
            return u(Object.create(n), e);
        }
        function p() {}
        function h(n) {
            return n;
        }
        function g(n) {
            return function() {
                return n;
            };
        }
        function m(n) {
            return k(n.toString) && n.toString !== Vr;
        }
        function v(n) {
            return "undefined" == typeof n;
        }
        function y(n) {
            return "undefined" != typeof n;
        }
        function $(n) {
            return null !== n && "object" == typeof n;
        }
        function w(n) {
            return null !== n && "object" == typeof n && !zr(n);
        }
        function b(n) {
            return "string" == typeof n;
        }
        function x(n) {
            return "number" == typeof n;
        }
        function I(n) {
            return "[object Date]" === Vr.call(n);
        }
        function k(n) {
            return "function" == typeof n;
        }
        function C(n) {
            return "[object RegExp]" === Vr.call(n);
        }
        function S(n) {
            return n && n.window === n;
        }
        function _(n) {
            return n && n.$evalAsync && n.$watch;
        }
        function E(n) {
            return "[object File]" === Vr.call(n);
        }
        function T(n) {
            return "[object FormData]" === Vr.call(n);
        }
        function A(n) {
            return "[object Blob]" === Vr.call(n);
        }
        function O(n) {
            return "boolean" == typeof n;
        }
        function N(n) {
            return n && k(n.then);
        }
        function j(n) {
            return n && x(n.length) && Jr.test(Vr.call(n));
        }
        function P(n) {
            return "[object ArrayBuffer]" === Vr.call(n);
        }
        function L(n) {
            return !(!n || !(n.nodeName || n.prop && n.attr && n.find));
        }
        function M(n) {
            var e, t = {}, r = n.split(",");
            for (e = 0; e < r.length; e++) t[r[e]] = !0;
            return t;
        }
        function D(n) {
            return jr(n.nodeName || n[0] && n[0].nodeName);
        }
        function q(n, e) {
            var t = n.indexOf(e);
            return t >= 0 && n.splice(t, 1), t;
        }
        function R(n, e) {
            function t(n, e) {
                var t, r = e.$$hashKey;
                if (Yr(n)) for (var o = 0, a = n.length; o < a; o++) e.push(i(n[o])); else if (w(n)) for (t in n) e[t] = i(n[t]); else if (n && "function" == typeof n.hasOwnProperty) for (t in n) n.hasOwnProperty(t) && (e[t] = i(n[t])); else for (t in n) Nr.call(n, t) && (e[t] = i(n[t]));
                return s(e, r), e;
            }
            function i(n) {
                if (!$(n)) return n;
                var e = a.indexOf(n);
                if (e !== -1) return c[e];
                if (S(n) || _(n)) throw Wr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                var r = !1, i = o(n);
                return void 0 === i && (i = Yr(n) ? [] : Object.create(zr(n)), r = !0), a.push(n), 
                c.push(i), r ? t(n, i) : i;
            }
            function o(n) {
                switch (Vr.call(n)) {
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return new n.constructor(i(n.buffer), n.byteOffset, n.length);

                  case "[object ArrayBuffer]":
                    if (!n.slice) {
                        var e = new ArrayBuffer(n.byteLength);
                        return new Uint8Array(e).set(new Uint8Array(n)), e;
                    }
                    return n.slice(0);

                  case "[object Boolean]":
                  case "[object Number]":
                  case "[object String]":
                  case "[object Date]":
                    return new n.constructor(n.valueOf());

                  case "[object RegExp]":
                    var t = new RegExp(n.source, n.toString().match(/[^\/]*$/)[0]);
                    return t.lastIndex = n.lastIndex, t;

                  case "[object Blob]":
                    return new n.constructor([ n ], {
                        type: n.type
                    });
                }
                if (k(n.cloneNode)) return n.cloneNode(!0);
            }
            var a = [], c = [];
            if (e) {
                if (j(e) || P(e)) throw Wr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                if (n === e) throw Wr("cpi", "Can't copy! Source and destination are identical.");
                return Yr(e) ? e.length = 0 : r(e, function(n, t) {
                    "$$hashKey" !== t && delete e[t];
                }), a.push(n), c.push(e), t(n, e);
            }
            return i(n);
        }
        function B(n, e) {
            if (n === e) return !0;
            if (null === n || null === e) return !1;
            if (n !== n && e !== e) return !0;
            var t, r, i, o = typeof n, a = typeof e;
            if (o == a && "object" == o) {
                if (!Yr(n)) {
                    if (I(n)) return !!I(e) && B(n.getTime(), e.getTime());
                    if (C(n)) return !!C(e) && n.toString() == e.toString();
                    if (_(n) || _(e) || S(n) || S(e) || Yr(e) || I(e) || C(e)) return !1;
                    i = gn();
                    for (r in n) if ("$" !== r.charAt(0) && !k(n[r])) {
                        if (!B(n[r], e[r])) return !1;
                        i[r] = !0;
                    }
                    for (r in e) if (!(r in i) && "$" !== r.charAt(0) && y(e[r]) && !k(e[r])) return !1;
                    return !0;
                }
                if (!Yr(e)) return !1;
                if ((t = n.length) == e.length) {
                    for (r = 0; r < t; r++) if (!B(n[r], e[r])) return !1;
                    return !0;
                }
            }
            return !1;
        }
        function F(n, e, t) {
            return n.concat(Fr.call(e, t));
        }
        function U(n, e) {
            return Fr.call(n, e || 0);
        }
        function H(n, e) {
            var t = arguments.length > 2 ? U(arguments, 2) : [];
            return !k(e) || e instanceof RegExp ? e : t.length ? function() {
                return arguments.length ? e.apply(n, F(t, arguments, 0)) : e.apply(n, t);
            } : function() {
                return arguments.length ? e.apply(n, arguments) : e.call(n);
            };
        }
        function V(e, t) {
            var r = t;
            return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : S(t) ? r = "$WINDOW" : t && n.document === t ? r = "$DOCUMENT" : _(t) && (r = "$SCOPE"), 
            r;
        }
        function z(n, e) {
            if (!v(n)) return x(e) || (e = e ? 2 : null), JSON.stringify(n, V, e);
        }
        function W(n) {
            return b(n) ? JSON.parse(n) : n;
        }
        function G(n, e) {
            n = n.replace(ei, "");
            var t = Date.parse("Jan 01, 1970 00:00:00 " + n) / 6e4;
            return isNaN(t) ? e : t;
        }
        function X(n, e) {
            return n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + e), n;
        }
        function Y(n, e, t) {
            t = t ? -1 : 1;
            var r = n.getTimezoneOffset(), i = G(e, r);
            return X(n, t * (i - r));
        }
        function J(n) {
            n = qr(n).clone();
            try {
                n.empty();
            } catch (e) {}
            var t = qr("<div>").append(n).html();
            try {
                return n[0].nodeType === si ? jr(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(n, e) {
                    return "<" + jr(e);
                });
            } catch (e) {
                return jr(t);
            }
        }
        function K(n) {
            try {
                return decodeURIComponent(n);
            } catch (e) {}
        }
        function Z(n) {
            var e = {};
            return r((n || "").split("&"), function(n) {
                var t, r, i;
                n && (r = n = n.replace(/\+/g, "%20"), t = n.indexOf("="), t !== -1 && (r = n.substring(0, t), 
                i = n.substring(t + 1)), r = K(r), y(r) && (i = !y(i) || K(i), Nr.call(e, r) ? Yr(e[r]) ? e[r].push(i) : e[r] = [ e[r], i ] : e[r] = i));
            }), e;
        }
        function Q(n) {
            var e = [];
            return r(n, function(n, t) {
                Yr(n) ? r(n, function(n) {
                    e.push(en(t, !0) + (n === !0 ? "" : "=" + en(n, !0)));
                }) : e.push(en(t, !0) + (n === !0 ? "" : "=" + en(n, !0)));
            }), e.length ? e.join("&") : "";
        }
        function nn(n) {
            return en(n, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
        }
        function en(n, e) {
            return encodeURIComponent(n).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+");
        }
        function tn(n, e) {
            var t, r, i = ti.length;
            for (r = 0; r < i; ++r) if (t = ti[r] + e, b(t = n.getAttribute(t))) return t;
            return null;
        }
        function rn(n, e) {
            var t, i, o = {};
            r(ti, function(e) {
                var r = e + "app";
                !t && n.hasAttribute && n.hasAttribute(r) && (t = n, i = n.getAttribute(r));
            }), r(ti, function(e) {
                var r, o = e + "app";
                !t && (r = n.querySelector("[" + o.replace(":", "\\:") + "]")) && (t = r, i = r.getAttribute(o));
            }), t && (o.strictDi = null !== tn(t, "strict-di"), e(t, i ? [ i ] : [], o));
        }
        function on(e, t, i) {
            $(i) || (i = {});
            var o = {
                strictDi: !1
            };
            i = u(o, i);
            var a = function() {
                if (e = qr(e), e.injector()) {
                    var r = e[0] === n.document ? "document" : J(e);
                    throw Wr("btstrpd", "App already bootstrapped with this element '{0}'", r.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                t = t || [], t.unshift([ "$provide", function(n) {
                    n.value("$rootElement", e);
                } ]), i.debugInfoEnabled && t.push([ "$compileProvider", function(n) {
                    n.debugInfoEnabled(!0);
                } ]), t.unshift("ng");
                var o = ie(t, i.strictDi);
                return o.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(n, e, t, r) {
                    n.$apply(function() {
                        e.data("$injector", r), t(e)(n);
                    });
                } ]), o;
            }, s = /^NG_ENABLE_DEBUG_INFO!/, c = /^NG_DEFER_BOOTSTRAP!/;
            return n && s.test(n.name) && (i.debugInfoEnabled = !0, n.name = n.name.replace(s, "")), 
            n && !c.test(n.name) ? a() : (n.name = n.name.replace(c, ""), Gr.resumeBootstrap = function(n) {
                return r(n, function(n) {
                    t.push(n);
                }), a();
            }, void (k(Gr.resumeDeferredBootstrap) && Gr.resumeDeferredBootstrap()));
        }
        function an() {
            n.name = "NG_ENABLE_DEBUG_INFO!" + n.name, n.location.reload();
        }
        function sn(n) {
            var e = Gr.element(n).injector();
            if (!e) throw Wr("test", "no injector found for element argument to getTestability");
            return e.get("$$testability");
        }
        function cn(n, e) {
            return e = e || "_", n.replace(ri, function(n, t) {
                return (t ? e : "") + n.toLowerCase();
            });
        }
        function un() {
            var e;
            if (!ii) {
                var t = ni();
                Rr = v(t) ? n.jQuery : t ? n[t] : void 0, Rr && Rr.fn.on ? (qr = Rr, u(Rr.fn, {
                    scope: Si.scope,
                    isolateScope: Si.isolateScope,
                    controller: Si.controller,
                    injector: Si.injector,
                    inheritedData: Si.inheritedData
                }), e = Rr.cleanData, Rr.cleanData = function(n) {
                    for (var t, r, i = 0; null != (r = n[i]); i++) t = Rr._data(r, "events"), t && t.$destroy && Rr(r).triggerHandler("$destroy");
                    e(n);
                }) : qr = An, Gr.element = qr, ii = !0;
            }
        }
        function ln(n, e, t) {
            if (!n) throw Wr("areq", "Argument '{0}' is {1}", e || "?", t || "required");
            return n;
        }
        function fn(n, e, t) {
            return t && Yr(n) && (n = n[n.length - 1]), ln(k(n), e, "not a function, got " + (n && "object" == typeof n ? n.constructor.name || "Object" : typeof n)), 
            n;
        }
        function dn(n, e) {
            if ("hasOwnProperty" === n) throw Wr("badname", "hasOwnProperty is not a valid {0} name", e);
        }
        function pn(n, e, t) {
            if (!e) return n;
            for (var r, i = e.split("."), o = n, a = i.length, s = 0; s < a; s++) r = i[s], 
            n && (n = (o = n)[r]);
            return !t && k(n) ? H(o, n) : n;
        }
        function hn(n) {
            for (var e, t = n[0], r = n[n.length - 1], i = 1; t !== r && (t = t.nextSibling); i++) (e || n[i] !== t) && (e || (e = qr(Fr.call(n, 0, i))), 
            e.push(t));
            return e || n;
        }
        function gn() {
            return Object.create(null);
        }
        function mn(n) {
            function t(n, e, t) {
                return n[e] || (n[e] = t());
            }
            var r = e("$injector"), i = e("ng"), o = t(n, "angular", Object);
            return o.$$minErr = o.$$minErr || e, t(o, "module", function() {
                var n = {};
                return function(e, o, a) {
                    var s = function(n, e) {
                        if ("hasOwnProperty" === n) throw i("badname", "hasOwnProperty is not a valid {0} name", e);
                    };
                    return s(e, "module"), o && n.hasOwnProperty(e) && (n[e] = null), t(n, e, function() {
                        function n(n, e, t, r) {
                            return r || (r = i), function() {
                                return r[t || "push"]([ n, e, arguments ]), l;
                            };
                        }
                        function t(n, t) {
                            return function(r, o) {
                                return o && k(o) && (o.$$moduleName = e), i.push([ n, t, arguments ]), l;
                            };
                        }
                        if (!o) throw r("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", e);
                        var i = [], s = [], c = [], u = n("$injector", "invoke", "push", s), l = {
                            _invokeQueue: i,
                            _configBlocks: s,
                            _runBlocks: c,
                            requires: o,
                            name: e,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: n("$provide", "value"),
                            constant: n("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            component: t("$compileProvider", "component"),
                            config: u,
                            run: function(n) {
                                return c.push(n), this;
                            }
                        };
                        return a && u(a), l;
                    });
                };
            });
        }
        function vn(n, e) {
            if (Yr(n)) {
                e = e || [];
                for (var t = 0, r = n.length; t < r; t++) e[t] = n[t];
            } else if ($(n)) {
                e = e || {};
                for (var i in n) "$" === i.charAt(0) && "$" === i.charAt(1) || (e[i] = n[i]);
            }
            return e || n;
        }
        function yn(n) {
            var e = [];
            return JSON.stringify(n, function(n, t) {
                if (t = V(n, t), $(t)) {
                    if (e.indexOf(t) >= 0) return "...";
                    e.push(t);
                }
                return t;
            });
        }
        function $n(n) {
            return "function" == typeof n ? n.toString().replace(/ \{[\s\S]*$/, "") : v(n) ? "undefined" : "string" != typeof n ? yn(n) : n;
        }
        function wn(t) {
            u(t, {
                bootstrap: on,
                copy: R,
                extend: u,
                merge: l,
                equals: B,
                element: qr,
                forEach: r,
                injector: ie,
                noop: p,
                bind: H,
                toJson: z,
                fromJson: W,
                identity: h,
                isUndefined: v,
                isDefined: y,
                isString: b,
                isFunction: k,
                isObject: $,
                isNumber: x,
                isElement: L,
                isArray: Yr,
                version: fi,
                isDate: I,
                lowercase: jr,
                uppercase: Pr,
                callbacks: {
                    $$counter: 0
                },
                getTestability: sn,
                $$minErr: e,
                $$csp: Qr,
                reloadWithDebugInfo: an
            }), (Br = mn(n))("ng", [ "ngLocale" ], [ "$provide", function(n) {
                n.provider({
                    $$sanitizeUri: Ct
                }), n.provider("$compile", ge).directive({
                    a: Lo,
                    input: na,
                    textarea: na,
                    form: Bo,
                    script: Ya,
                    select: Za,
                    style: ns,
                    option: Qa,
                    ngBind: ra,
                    ngBindHtml: oa,
                    ngBindTemplate: ia,
                    ngClass: sa,
                    ngClassEven: ua,
                    ngClassOdd: ca,
                    ngCloak: la,
                    ngController: fa,
                    ngForm: Fo,
                    ngHide: Ua,
                    ngIf: ha,
                    ngInclude: ga,
                    ngInit: va,
                    ngNonBindable: ja,
                    ngPluralize: Da,
                    ngRepeat: qa,
                    ngShow: Fa,
                    ngStyle: Ha,
                    ngSwitch: Va,
                    ngSwitchWhen: za,
                    ngSwitchDefault: Wa,
                    ngOptions: Ma,
                    ngTransclude: Xa,
                    ngModel: Aa,
                    ngList: ya,
                    ngChange: aa,
                    pattern: ts,
                    ngPattern: ts,
                    required: es,
                    ngRequired: es,
                    minlength: is,
                    ngMinlength: is,
                    maxlength: rs,
                    ngMaxlength: rs,
                    ngValue: ta,
                    ngModelOptions: Na
                }).directive({
                    ngInclude: ma
                }).directive(Mo).directive(da), n.provider({
                    $anchorScroll: oe,
                    $animate: Ui,
                    $animateCss: zi,
                    $$animateJs: Bi,
                    $$animateQueue: Fi,
                    $$AnimateRunner: Vi,
                    $$animateAsyncRun: Hi,
                    $browser: fe,
                    $cacheFactory: de,
                    $controller: be,
                    $document: xe,
                    $exceptionHandler: Ie,
                    $filter: Rt,
                    $$forceReflow: Ki,
                    $interpolate: De,
                    $interval: qe,
                    $http: je,
                    $httpParamSerializer: Ce,
                    $httpParamSerializerJQLike: Se,
                    $httpBackend: Le,
                    $xhrFactory: Pe,
                    $jsonpCallbacks: ao,
                    $location: Qe,
                    $log: nt,
                    $parse: $t,
                    $rootScope: kt,
                    $q: wt,
                    $$q: bt,
                    $sce: Tt,
                    $sceDelegate: Et,
                    $sniffer: At,
                    $templateCache: pe,
                    $templateRequest: Ot,
                    $$testability: Nt,
                    $timeout: jt,
                    $window: Mt,
                    $$rAF: It,
                    $$jqLite: Kn,
                    $$HashMap: Ai,
                    $$cookieReader: qt
                });
            } ]);
        }
        function bn() {
            return ++pi;
        }
        function xn(n) {
            return n.replace(mi, function(n, e, t, r) {
                return r ? t.toUpperCase() : t;
            }).replace(vi, "Moz$1");
        }
        function In(n) {
            return !bi.test(n);
        }
        function kn(n) {
            var e = n.nodeType;
            return e === oi || !e || e === ui;
        }
        function Cn(n) {
            for (var e in di[n.ng339]) return !0;
            return !1;
        }
        function Sn(n) {
            for (var e = 0, t = n.length; e < t; e++) Pn(n[e]);
        }
        function _n(n, e) {
            var t, i, o, a, s = e.createDocumentFragment(), c = [];
            if (In(n)) c.push(e.createTextNode(n)); else {
                for (t = s.appendChild(e.createElement("div")), i = (xi.exec(n) || [ "", "" ])[1].toLowerCase(), 
                o = ki[i] || ki._default, t.innerHTML = o[1] + n.replace(Ii, "<$1></$2>") + o[2], 
                a = o[0]; a--; ) t = t.lastChild;
                c = F(c, t.childNodes), t = s.firstChild, t.textContent = "";
            }
            return s.textContent = "", s.innerHTML = "", r(c, function(n) {
                s.appendChild(n);
            }), s;
        }
        function En(e, t) {
            t = t || n.document;
            var r;
            return (r = wi.exec(e)) ? [ t.createElement(r[1]) ] : (r = _n(e, t)) ? r.childNodes : [];
        }
        function Tn(n, e) {
            var t = n.parentNode;
            t && t.replaceChild(e, n), e.appendChild(n);
        }
        function An(n) {
            if (n instanceof An) return n;
            var e;
            if (b(n) && (n = Kr(n), e = !0), !(this instanceof An)) {
                if (e && "<" != n.charAt(0)) throw $i("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new An(n);
            }
            e ? Bn(this, En(n)) : Bn(this, n);
        }
        function On(n) {
            return n.cloneNode(!0);
        }
        function Nn(n, e) {
            if (e || Pn(n), n.querySelectorAll) for (var t = n.querySelectorAll("*"), r = 0, i = t.length; r < i; r++) Pn(t[r]);
        }
        function jn(n, e, t, i) {
            if (y(i)) throw $i("offargs", "jqLite#off() does not support the `selector` argument");
            var o = Ln(n), a = o && o.events, s = o && o.handle;
            if (s) if (e) {
                var c = function(e) {
                    var r = a[e];
                    y(t) && q(r || [], t), y(t) && r && r.length > 0 || (gi(n, e, s), delete a[e]);
                };
                r(e.split(" "), function(n) {
                    c(n), yi[n] && c(yi[n]);
                });
            } else for (e in a) "$destroy" !== e && gi(n, e, s), delete a[e];
        }
        function Pn(n, e) {
            var t = n.ng339, r = t && di[t];
            if (r) {
                if (e) return void delete r.data[e];
                r.handle && (r.events.$destroy && r.handle({}, "$destroy"), jn(n)), delete di[t], 
                n.ng339 = void 0;
            }
        }
        function Ln(n, e) {
            var t = n.ng339, r = t && di[t];
            return e && !r && (n.ng339 = t = bn(), r = di[t] = {
                events: {},
                data: {},
                handle: void 0
            }), r;
        }
        function Mn(n, e, t) {
            if (kn(n)) {
                var r = y(t), i = !r && e && !$(e), o = !e, a = Ln(n, !i), s = a && a.data;
                if (r) s[e] = t; else {
                    if (o) return s;
                    if (i) return s && s[e];
                    u(s, e);
                }
            }
        }
        function Dn(n, e) {
            return !!n.getAttribute && (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1;
        }
        function qn(n, e) {
            e && n.setAttribute && r(e.split(" "), function(e) {
                n.setAttribute("class", Kr((" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Kr(e) + " ", " ")));
            });
        }
        function Rn(n, e) {
            if (e && n.setAttribute) {
                var t = (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                r(e.split(" "), function(n) {
                    n = Kr(n), t.indexOf(" " + n + " ") === -1 && (t += n + " ");
                }), n.setAttribute("class", Kr(t));
            }
        }
        function Bn(n, e) {
            if (e) if (e.nodeType) n[n.length++] = e; else {
                var t = e.length;
                if ("number" == typeof t && e.window !== e) {
                    if (t) for (var r = 0; r < t; r++) n[n.length++] = e[r];
                } else n[n.length++] = e;
            }
        }
        function Fn(n, e) {
            return Un(n, "$" + (e || "ngController") + "Controller");
        }
        function Un(n, e, t) {
            n.nodeType == ui && (n = n.documentElement);
            for (var r = Yr(e) ? e : [ e ]; n; ) {
                for (var i = 0, o = r.length; i < o; i++) if (y(t = qr.data(n, r[i]))) return t;
                n = n.parentNode || n.nodeType === li && n.host;
            }
        }
        function Hn(n) {
            for (Nn(n, !0); n.firstChild; ) n.removeChild(n.firstChild);
        }
        function Vn(n, e) {
            e || Nn(n);
            var t = n.parentNode;
            t && t.removeChild(n);
        }
        function zn(e, t) {
            t = t || n, "complete" === t.document.readyState ? t.setTimeout(e) : qr(t).on("load", e);
        }
        function Wn(n, e) {
            var t = _i[e.toLowerCase()];
            return t && Ei[D(n)] && t;
        }
        function Gn(n) {
            return Ti[n];
        }
        function Xn(n, e) {
            var t = function(t, r) {
                t.isDefaultPrevented = function() {
                    return t.defaultPrevented;
                };
                var i = e[r || t.type], o = i ? i.length : 0;
                if (o) {
                    if (v(t.immediatePropagationStopped)) {
                        var a = t.stopImmediatePropagation;
                        t.stopImmediatePropagation = function() {
                            t.immediatePropagationStopped = !0, t.stopPropagation && t.stopPropagation(), a && a.call(t);
                        };
                    }
                    t.isImmediatePropagationStopped = function() {
                        return t.immediatePropagationStopped === !0;
                    };
                    var s = i.specialHandlerWrapper || Yn;
                    o > 1 && (i = vn(i));
                    for (var c = 0; c < o; c++) t.isImmediatePropagationStopped() || s(n, t, i[c]);
                }
            };
            return t.elem = n, t;
        }
        function Yn(n, e, t) {
            t.call(n, e);
        }
        function Jn(n, e, t) {
            var r = e.relatedTarget;
            r && (r === n || Ci.call(n, r)) || t.call(n, e);
        }
        function Kn() {
            this.$get = function() {
                return u(An, {
                    hasClass: function(n, e) {
                        return n.attr && (n = n[0]), Dn(n, e);
                    },
                    addClass: function(n, e) {
                        return n.attr && (n = n[0]), Rn(n, e);
                    },
                    removeClass: function(n, e) {
                        return n.attr && (n = n[0]), qn(n, e);
                    }
                });
            };
        }
        function Zn(n, e) {
            var t = n && n.$$hashKey;
            if (t) return "function" == typeof t && (t = n.$$hashKey()), t;
            var r = typeof n;
            return t = "function" == r || "object" == r && null !== n ? n.$$hashKey = r + ":" + (e || a)() : r + ":" + n;
        }
        function Qn(n, e) {
            if (e) {
                var t = 0;
                this.nextUid = function() {
                    return ++t;
                };
            }
            r(n, this.put, this);
        }
        function ne(n) {
            return Function.prototype.toString.call(n) + " ";
        }
        function ee(n) {
            var e = ne(n).replace(Li, ""), t = e.match(Oi) || e.match(Ni);
            return t;
        }
        function te(n) {
            var e = ee(n);
            return e ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
        }
        function re(n, e, t) {
            var i, o, a;
            if ("function" == typeof n) {
                if (!(i = n.$inject)) {
                    if (i = [], n.length) {
                        if (e) throw b(t) && t || (t = n.name || te(n)), Mi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", t);
                        o = ee(n), r(o[1].split(ji), function(n) {
                            n.replace(Pi, function(n, e, t) {
                                i.push(t);
                            });
                        });
                    }
                    n.$inject = i;
                }
            } else Yr(n) ? (a = n.length - 1, fn(n[a], "fn"), i = n.slice(0, a)) : fn(n, "fn", !0);
            return i;
        }
        function ie(n, e) {
            function t(n) {
                return function(e, t) {
                    return $(e) ? void r(e, o(n)) : n(e, t);
                };
            }
            function i(n, e) {
                if (dn(n, "service"), (k(e) || Yr(e)) && (e = I.instantiate(e)), !e.$get) throw Mi("pget", "Provider '{0}' must define $get factory method.", n);
                return x[n + m] = e;
            }
            function a(n, e) {
                return function() {
                    var t = _.invoke(e, this);
                    if (v(t)) throw Mi("undef", "Provider '{0}' must return a value from $get factory method.", n);
                    return t;
                };
            }
            function s(n, e, t) {
                return i(n, {
                    $get: t !== !1 ? a(n, e) : e
                });
            }
            function c(n, e) {
                return s(n, [ "$injector", function(n) {
                    return n.instantiate(e);
                } ]);
            }
            function u(n, e) {
                return s(n, g(e), !1);
            }
            function l(n, e) {
                dn(n, "constant"), x[n] = e, C[n] = e;
            }
            function f(n, e) {
                var t = I.get(n + m), r = t.$get;
                t.$get = function() {
                    var n = _.invoke(r, t);
                    return _.invoke(e, null, {
                        $delegate: n
                    });
                };
            }
            function d(n) {
                ln(v(n) || Yr(n), "modulesToLoad", "not an array");
                var e, t = [];
                return r(n, function(n) {
                    function r(n) {
                        var e, t;
                        for (e = 0, t = n.length; e < t; e++) {
                            var r = n[e], i = I.get(r[0]);
                            i[r[1]].apply(i, r[2]);
                        }
                    }
                    if (!w.get(n)) {
                        w.put(n, !0);
                        try {
                            b(n) ? (e = Br(n), t = t.concat(d(e.requires)).concat(e._runBlocks), r(e._invokeQueue), 
                            r(e._configBlocks)) : k(n) ? t.push(I.invoke(n)) : Yr(n) ? t.push(I.invoke(n)) : fn(n, "module");
                        } catch (i) {
                            throw Yr(n) && (n = n[n.length - 1]), i.message && i.stack && i.stack.indexOf(i.message) == -1 && (i = i.message + "\n" + i.stack), 
                            Mi("modulerr", "Failed to instantiate module {0} due to:\n{1}", n, i.stack || i.message || i);
                        }
                    }
                }), t;
            }
            function p(n, t) {
                function r(e, r) {
                    if (n.hasOwnProperty(e)) {
                        if (n[e] === h) throw Mi("cdep", "Circular dependency found: {0}", e + " <- " + y.join(" <- "));
                        return n[e];
                    }
                    try {
                        return y.unshift(e), n[e] = h, n[e] = t(e, r);
                    } catch (i) {
                        throw n[e] === h && delete n[e], i;
                    } finally {
                        y.shift();
                    }
                }
                function i(n, t, i) {
                    for (var o = [], a = ie.$$annotate(n, e, i), s = 0, c = a.length; s < c; s++) {
                        var u = a[s];
                        if ("string" != typeof u) throw Mi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                        o.push(t && t.hasOwnProperty(u) ? t[u] : r(u, i));
                    }
                    return o;
                }
                function o(n) {
                    return !(Dr <= 11) && ("function" == typeof n && /^(?:class\b|constructor\()/.test(ne(n)));
                }
                function a(n, e, t, r) {
                    "string" == typeof t && (r = t, t = null);
                    var a = i(n, t, r);
                    return Yr(n) && (n = n[n.length - 1]), o(n) ? (a.unshift(null), new (Function.prototype.bind.apply(n, a))()) : n.apply(e, a);
                }
                function s(n, e, t) {
                    var r = Yr(n) ? n[n.length - 1] : n, o = i(n, e, t);
                    return o.unshift(null), new (Function.prototype.bind.apply(r, o))();
                }
                return {
                    invoke: a,
                    instantiate: s,
                    get: r,
                    annotate: ie.$$annotate,
                    has: function(e) {
                        return x.hasOwnProperty(e + m) || n.hasOwnProperty(e);
                    }
                };
            }
            e = e === !0;
            var h = {}, m = "Provider", y = [], w = new Qn([], (!0)), x = {
                $provide: {
                    provider: t(i),
                    factory: t(s),
                    service: t(c),
                    value: t(u),
                    constant: t(l),
                    decorator: f
                }
            }, I = x.$injector = p(x, function(n, e) {
                throw Gr.isString(e) && y.push(e), Mi("unpr", "Unknown provider: {0}", y.join(" <- "));
            }), C = {}, S = p(C, function(n, e) {
                var t = I.get(n + m, e);
                return _.invoke(t.$get, t, void 0, n);
            }), _ = S;
            x["$injector" + m] = {
                $get: g(S)
            };
            var E = d(n);
            return _ = S.get("$injector"), _.strictDi = e, r(E, function(n) {
                n && _.invoke(n);
            }), _;
        }
        function oe() {
            var n = !0;
            this.disableAutoScrolling = function() {
                n = !1;
            }, this.$get = [ "$window", "$location", "$rootScope", function(e, t, r) {
                function i(n) {
                    var e = null;
                    return Array.prototype.some.call(n, function(n) {
                        if ("a" === D(n)) return e = n, !0;
                    }), e;
                }
                function o() {
                    var n = s.yOffset;
                    if (k(n)) n = n(); else if (L(n)) {
                        var t = n[0], r = e.getComputedStyle(t);
                        n = "fixed" !== r.position ? 0 : t.getBoundingClientRect().bottom;
                    } else x(n) || (n = 0);
                    return n;
                }
                function a(n) {
                    if (n) {
                        n.scrollIntoView();
                        var t = o();
                        if (t) {
                            var r = n.getBoundingClientRect().top;
                            e.scrollBy(0, r - t);
                        }
                    } else e.scrollTo(0, 0);
                }
                function s(n) {
                    n = b(n) ? n : t.hash();
                    var e;
                    n ? (e = c.getElementById(n)) ? a(e) : (e = i(c.getElementsByName(n))) ? a(e) : "top" === n && a(null) : a(null);
                }
                var c = e.document;
                return n && r.$watch(function() {
                    return t.hash();
                }, function(n, e) {
                    n === e && "" === n || zn(function() {
                        r.$evalAsync(s);
                    });
                }), s;
            } ];
        }
        function ae(n, e) {
            return n || e ? n ? e ? (Yr(n) && (n = n.join(" ")), Yr(e) && (e = e.join(" ")), 
            n + " " + e) : n : e : "";
        }
        function se(n) {
            for (var e = 0; e < n.length; e++) {
                var t = n[e];
                if (t.nodeType === qi) return t;
            }
        }
        function ce(n) {
            b(n) && (n = n.split(" "));
            var e = gn();
            return r(n, function(n) {
                n.length && (e[n] = !0);
            }), e;
        }
        function ue(n) {
            return $(n) ? n : {};
        }
        function le(n, e, t, i) {
            function o(n) {
                try {
                    n.apply(null, U(arguments, 1));
                } finally {
                    if (y--, 0 === y) for (;$.length; ) try {
                        $.pop()();
                    } catch (e) {
                        t.error(e);
                    }
                }
            }
            function a(n) {
                var e = n.indexOf("#");
                return e === -1 ? "" : n.substr(e);
            }
            function s() {
                k = null, c(), u();
            }
            function c() {
                w = C(), w = v(w) ? null : w, B(w, E) && (w = E), E = w;
            }
            function u() {
                x === l.url() && b === w || (x = l.url(), b = w, r(S, function(n) {
                    n(l.url(), w);
                }));
            }
            var l = this, f = n.location, d = n.history, h = n.setTimeout, g = n.clearTimeout, m = {};
            l.isMock = !1;
            var y = 0, $ = [];
            l.$$completeOutstandingRequest = o, l.$$incOutstandingRequestCount = function() {
                y++;
            }, l.notifyWhenNoOutstandingRequests = function(n) {
                0 === y ? n() : $.push(n);
            };
            var w, b, x = f.href, I = e.find("base"), k = null, C = i.history ? function() {
                try {
                    return d.state;
                } catch (n) {}
            } : p;
            c(), b = w, l.url = function(e, t, r) {
                if (v(r) && (r = null), f !== n.location && (f = n.location), d !== n.history && (d = n.history), 
                e) {
                    var o = b === r;
                    if (x === e && (!i.history || o)) return l;
                    var s = x && Ve(x) === Ve(e);
                    return x = e, b = r, !i.history || s && o ? (s || (k = e), t ? f.replace(e) : s ? f.hash = a(e) : f.href = e, 
                    f.href !== e && (k = e)) : (d[t ? "replaceState" : "pushState"](r, "", e), c(), 
                    b = w), k && (k = e), l;
                }
                return k || f.href.replace(/%27/g, "'");
            }, l.state = function() {
                return w;
            };
            var S = [], _ = !1, E = null;
            l.onUrlChange = function(e) {
                return _ || (i.history && qr(n).on("popstate", s), qr(n).on("hashchange", s), _ = !0), 
                S.push(e), e;
            }, l.$$applicationDestroyed = function() {
                qr(n).off("hashchange popstate", s);
            }, l.$$checkUrlChange = u, l.baseHref = function() {
                var n = I.attr("href");
                return n ? n.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
            }, l.defer = function(n, e) {
                var t;
                return y++, t = h(function() {
                    delete m[t], o(n);
                }, e || 0), m[t] = !0, t;
            }, l.defer.cancel = function(n) {
                return !!m[n] && (delete m[n], g(n), o(p), !0);
            };
        }
        function fe() {
            this.$get = [ "$window", "$log", "$sniffer", "$document", function(n, e, t, r) {
                return new le(n, r, e, t);
            } ];
        }
        function de() {
            this.$get = function() {
                function n(n, r) {
                    function i(n) {
                        n != d && (p ? p == n && (p = n.n) : p = n, o(n.n, n.p), o(n, d), d = n, d.n = null);
                    }
                    function o(n, e) {
                        n != e && (n && (n.p = e), e && (e.n = n));
                    }
                    if (n in t) throw e("$cacheFactory")("iid", "CacheId '{0}' is already taken!", n);
                    var a = 0, s = u({}, r, {
                        id: n
                    }), c = gn(), l = r && r.capacity || Number.MAX_VALUE, f = gn(), d = null, p = null;
                    return t[n] = {
                        put: function(n, e) {
                            if (!v(e)) {
                                if (l < Number.MAX_VALUE) {
                                    var t = f[n] || (f[n] = {
                                        key: n
                                    });
                                    i(t);
                                }
                                return n in c || a++, c[n] = e, a > l && this.remove(p.key), e;
                            }
                        },
                        get: function(n) {
                            if (l < Number.MAX_VALUE) {
                                var e = f[n];
                                if (!e) return;
                                i(e);
                            }
                            return c[n];
                        },
                        remove: function(n) {
                            if (l < Number.MAX_VALUE) {
                                var e = f[n];
                                if (!e) return;
                                e == d && (d = e.p), e == p && (p = e.n), o(e.n, e.p), delete f[n];
                            }
                            n in c && (delete c[n], a--);
                        },
                        removeAll: function() {
                            c = gn(), a = 0, f = gn(), d = p = null;
                        },
                        destroy: function() {
                            c = null, s = null, f = null, delete t[n];
                        },
                        info: function() {
                            return u({}, s, {
                                size: a
                            });
                        }
                    };
                }
                var t = {};
                return n.info = function() {
                    var n = {};
                    return r(t, function(e, t) {
                        n[t] = e.info();
                    }), n;
                }, n.get = function(n) {
                    return t[n];
                }, n;
            };
        }
        function pe() {
            this.$get = [ "$cacheFactory", function(n) {
                return n("templates");
            } ];
        }
        function he() {}
        function ge(e, t) {
            function i(n, e, t) {
                var i = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, o = gn();
                return r(n, function(n, r) {
                    if (n in S) return void (o[r] = S[n]);
                    var a = n.match(i);
                    if (!a) throw Wi("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, r, n, t ? "controller bindings definition" : "isolate scope definition");
                    o[r] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || r
                    }, a[4] && (S[n] = o[r]);
                }), o;
            }
            function a(n, e) {
                var t = {
                    isolateScope: null,
                    bindToController: null
                };
                if ($(n.scope) && (n.bindToController === !0 ? (t.bindToController = i(n.scope, e, !0), 
                t.isolateScope = {}) : t.isolateScope = i(n.scope, e, !1)), $(n.bindToController) && (t.bindToController = i(n.bindToController, e, !0)), 
                $(t.bindToController)) {
                    var r = n.controller, o = n.controllerAs;
                    if (!r) throw Wi("noctrl", "Cannot bind to controller without directive '{0}'s controller.", e);
                    if (!we(r, o)) throw Wi("noident", "Cannot bind to controller without identifier for directive '{0}'.", e);
                }
                return t;
            }
            function s(n) {
                var e = n.charAt(0);
                if (!e || e !== jr(e)) throw Wi("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", n);
                if (n !== n.trim()) throw Wi("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", n);
            }
            function c(n) {
                var e = n.require || n.controller && n.name;
                return !Yr(e) && $(e) && r(e, function(n, t) {
                    var r = n.match(I), i = n.substring(r[0].length);
                    i || (e[t] = r[0] + t);
                }), e;
            }
            var l = {}, f = "Directive", m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, w = /(([\w\-]+)(?:\:([^;]+))?;?)/, x = M("ngSrc,ngSrcset,src,srcset"), I = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, C = /^(on[a-z]+|formaction)$/, S = gn();
            this.directive = function A(n, t) {
                return dn(n, "directive"), b(n) ? (s(n), ln(t, "directiveFactory"), l.hasOwnProperty(n) || (l[n] = [], 
                e.factory(n + f, [ "$injector", "$exceptionHandler", function(e, t) {
                    var i = [];
                    return r(l[n], function(r, o) {
                        try {
                            var a = e.invoke(r);
                            k(a) ? a = {
                                compile: g(a)
                            } : !a.compile && a.link && (a.compile = g(a.link)), a.priority = a.priority || 0, 
                            a.index = o, a.name = a.name || n, a.require = c(a), a.restrict = a.restrict || "EA", 
                            a.$$moduleName = r.$$moduleName, i.push(a);
                        } catch (s) {
                            t(s);
                        }
                    }), i;
                } ])), l[n].push(t)) : r(n, o(A)), this;
            }, this.component = function(n, e) {
                function t(n) {
                    function t(e) {
                        return k(e) || Yr(e) ? function(t, r) {
                            return n.invoke(e, this, {
                                $element: t,
                                $attrs: r
                            });
                        } : e;
                    }
                    var o = e.template || e.templateUrl ? e.template : "", a = {
                        controller: i,
                        controllerAs: we(e.controller) || e.controllerAs || "$ctrl",
                        template: t(o),
                        templateUrl: t(e.templateUrl),
                        transclude: e.transclude,
                        scope: {},
                        bindToController: e.bindings || {},
                        restrict: "E",
                        require: e.require
                    };
                    return r(e, function(n, e) {
                        "$" === e.charAt(0) && (a[e] = n);
                    }), a;
                }
                var i = e.controller || function() {};
                return r(e, function(n, e) {
                    "$" === e.charAt(0) && (t[e] = n, k(i) && (i[e] = n));
                }), t.$inject = [ "$injector" ], this.directive(n, t);
            }, this.aHrefSanitizationWhitelist = function(n) {
                return y(n) ? (t.aHrefSanitizationWhitelist(n), this) : t.aHrefSanitizationWhitelist();
            }, this.imgSrcSanitizationWhitelist = function(n) {
                return y(n) ? (t.imgSrcSanitizationWhitelist(n), this) : t.imgSrcSanitizationWhitelist();
            };
            var E = !0;
            this.debugInfoEnabled = function(n) {
                return y(n) ? (E = n, this) : E;
            };
            var T = 10;
            this.onChangesTtl = function(n) {
                return arguments.length ? (T = n, this) : T;
            }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(e, t, i, o, s, c, g, S, A, N) {
                function j() {
                    try {
                        if (!--kn) throw wn = void 0, Wi("infchng", "{0} $onChanges() iterations reached. Aborting!\n", T);
                        g.$apply(function() {
                            for (var n = [], e = 0, t = wn.length; e < t; ++e) try {
                                wn[e]();
                            } catch (r) {
                                n.push(r);
                            }
                            if (wn = void 0, n.length) throw n;
                        });
                    } finally {
                        kn++;
                    }
                }
                function P(n, e) {
                    if (e) {
                        var t, r, i, o = Object.keys(e);
                        for (t = 0, r = o.length; t < r; t++) i = o[t], this[i] = e[i];
                    } else this.$attr = {};
                    this.$$element = n;
                }
                function L(n, e, t) {
                    xn.innerHTML = "<span " + e + ">";
                    var r = xn.firstChild.attributes, i = r[0];
                    r.removeNamedItem(i.name), i.value = t, n.attributes.setNamedItem(i);
                }
                function M(n, e) {
                    try {
                        n.addClass(e);
                    } catch (t) {}
                }
                function R(e, t, r, i, o) {
                    e instanceof qr || (e = qr(e));
                    for (var a = /\S+/, s = 0, c = e.length; s < c; s++) {
                        var u = e[s];
                        u.nodeType === si && u.nodeValue.match(a) && Tn(u, e[s] = n.document.createElement("span"));
                    }
                    var l = V(e, t, e, r, i, o);
                    R.$$addScopeClass(e);
                    var f = null;
                    return function(n, t, r) {
                        ln(n, "scope"), o && o.needsNewScope && (n = n.$parent.$new()), r = r || {};
                        var i = r.parentBoundTranscludeFn, a = r.transcludeControllers, s = r.futureParentElement;
                        i && i.$$boundTransclude && (i = i.$$boundTransclude), f || (f = F(s));
                        var c;
                        if (c = "html" !== f ? qr(dn(f, qr("<div>").append(e).html())) : t ? Si.clone.call(e) : e, 
                        a) for (var u in a) c.data("$" + u + "Controller", a[u].instance);
                        return R.$$addScopeInfo(c, n), t && t(c, n), l && l(n, c, c, i), c;
                    };
                }
                function F(n) {
                    var e = n && n[0];
                    return e && "foreignobject" !== D(e) && Vr.call(e).match(/SVG/) ? "svg" : "html";
                }
                function V(n, e, t, r, i, o) {
                    function a(n, t, r, i) {
                        var o, a, s, c, u, l, f, d, g;
                        if (p) {
                            var m = t.length;
                            for (g = new Array(m), u = 0; u < h.length; u += 3) f = h[u], g[f] = t[f];
                        } else g = t;
                        for (u = 0, l = h.length; u < l; ) s = g[h[u++]], o = h[u++], a = h[u++], o ? (o.scope ? (c = n.$new(), 
                        R.$$addScopeInfo(qr(s), c)) : c = n, d = o.transcludeOnThisElement ? z(n, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && e ? z(n, e) : null, 
                        o(a, c, s, r, d)) : a && a(n, s.childNodes, void 0, i);
                    }
                    for (var s, c, u, l, f, d, p, h = [], g = 0; g < n.length; g++) s = new P(), c = W(n[g], [], s, 0 === g ? r : void 0, i), 
                    u = c.length ? Z(c, n[g], s, e, t, null, [], [], o) : null, u && u.scope && R.$$addScopeClass(s.$$element), 
                    f = u && u.terminal || !(l = n[g].childNodes) || !l.length ? null : V(l, u ? (u.transcludeOnThisElement || !u.templateOnThisElement) && u.transclude : e), 
                    (u || f) && (h.push(g, u, f), d = !0, p = p || u), o = null;
                    return d ? a : null;
                }
                function z(n, e, t) {
                    function r(r, i, o, a, s) {
                        return r || (r = n.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                            parentBoundTranscludeFn: t,
                            transcludeControllers: o,
                            futureParentElement: a
                        });
                    }
                    var i = r.$$slots = gn();
                    for (var o in e.$$slots) e.$$slots[o] ? i[o] = z(n, e.$$slots[o], t) : i[o] = null;
                    return r;
                }
                function W(n, e, t, r, i) {
                    var o, a, s = n.nodeType, c = t.$attr;
                    switch (s) {
                      case oi:
                        tn(e, ve(D(n)), "E", r, i);
                        for (var u, l, f, d, p, h, g = n.attributes, m = 0, v = g && g.length; m < v; m++) {
                            var y = !1, x = !1;
                            u = g[m], l = u.name, p = Kr(u.value), d = ve(l), (h = En.test(d)) && (l = l.replace(Xi, "").substr(8).replace(/_(.)/g, function(n, e) {
                                return e.toUpperCase();
                            }));
                            var I = d.match(An);
                            I && rn(I[1]) && (y = l, x = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), 
                            f = ve(l.toLowerCase()), c[f] = l, !h && t.hasOwnProperty(f) || (t[f] = p, Wn(n, f) && (t[f] = !0)), 
                            hn(n, e, p, f, h), tn(e, f, "A", r, i, y, x);
                        }
                        if (a = n.className, $(a) && (a = a.animVal), b(a) && "" !== a) for (;o = w.exec(a); ) f = ve(o[2]), 
                        tn(e, f, "C", r, i) && (t[f] = Kr(o[3])), a = a.substr(o.index + o[0].length);
                        break;

                      case si:
                        if (11 === Dr) for (;n.parentNode && n.nextSibling && n.nextSibling.nodeType === si; ) n.nodeValue = n.nodeValue + n.nextSibling.nodeValue, 
                        n.parentNode.removeChild(n.nextSibling);
                        fn(e, n.nodeValue);
                        break;

                      case ci:
                        G(n, e, t, r, i);
                    }
                    return e.sort(sn), e;
                }
                function G(n, e, t, r, i) {
                    try {
                        var o = m.exec(n.nodeValue);
                        if (o) {
                            var a = ve(o[1]);
                            tn(e, a, "M", r, i) && (t[a] = Kr(o[2]));
                        }
                    } catch (s) {}
                }
                function X(n, e, t) {
                    var r = [], i = 0;
                    if (e && n.hasAttribute && n.hasAttribute(e)) {
                        do {
                            if (!n) throw Wi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, t);
                            n.nodeType == oi && (n.hasAttribute(e) && i++, n.hasAttribute(t) && i--), r.push(n), 
                            n = n.nextSibling;
                        } while (i > 0);
                    } else r.push(n);
                    return qr(r);
                }
                function Y(n, e, t) {
                    return function(r, i, o, a, s) {
                        return i = X(i[0], e, t), n(r, i, o, a, s);
                    };
                }
                function K(n, e, t, r, i, o) {
                    var a;
                    return n ? R(e, t, r, i, o) : function() {
                        return a || (a = R(e, t, r, i, o), e = t = o = null), a.apply(this, arguments);
                    };
                }
                function Z(n, e, t, o, a, s, c, l, f) {
                    function d(n, e, t, r) {
                        n && (t && (n = Y(n, t, r)), n.require = h.require, n.directiveName = g, (C === h || h.$$isolateScope) && (n = vn(n, {
                            isolateScope: !0
                        })), c.push(n)), e && (t && (e = Y(e, t, r)), e.require = h.require, e.directiveName = g, 
                        (C === h || h.$$isolateScope) && (e = vn(e, {
                            isolateScope: !0
                        })), l.push(e));
                    }
                    function p(n, o, a, s, f) {
                        function d(n, e, t, r) {
                            var i;
                            if (_(n) || (r = t, t = e, e = n, n = void 0), O && (i = w), t || (t = O ? E.parent() : E), 
                            !r) return f(n, e, i, t, q);
                            var o = f.$$slots[r];
                            if (o) return o(n, e, i, t, q);
                            if (v(o)) throw Wi("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, J(E));
                        }
                        var p, h, g, m, y, w, b, E, T, A;
                        e === a ? (T = t, E = t.$$element) : (E = qr(a), T = new P(E, t)), y = o, C ? m = o.$new(!0) : x && (y = o.$parent), 
                        f && (b = d, b.$$boundTransclude = f, b.isSlotFilled = function(n) {
                            return !!f.$$slots[n];
                        }), I && (w = nn(E, T, b, I, m, o, C)), C && (R.$$addScopeInfo(E, m, !0, !(S && (S === C || S === C.$$originalDirective))), 
                        R.$$addScopeClass(E, !0), m.$$isolateBindings = C.$$isolateBindings, A = $n(o, T, m, m.$$isolateBindings, C), 
                        A.removeWatches && m.$on("$destroy", A.removeWatches));
                        for (var N in w) {
                            var j = I[N], L = w[N], M = j.$$bindings.bindToController;
                            L.identifier && M ? L.bindingInfo = $n(y, T, L.instance, M, j) : L.bindingInfo = {};
                            var D = L();
                            D !== L.instance && (L.instance = D, E.data("$" + j.name + "Controller", D), L.bindingInfo.removeWatches && L.bindingInfo.removeWatches(), 
                            L.bindingInfo = $n(y, T, L.instance, M, j));
                        }
                        for (r(I, function(n, e) {
                            var t = n.require;
                            n.bindToController && !Yr(t) && $(t) && u(w[e].instance, Q(e, t, E, w));
                        }), r(w, function(n) {
                            var e = n.instance;
                            if (k(e.$onChanges)) try {
                                e.$onChanges(n.bindingInfo.initialChanges);
                            } catch (t) {
                                i(t);
                            }
                            if (k(e.$onInit)) try {
                                e.$onInit();
                            } catch (t) {
                                i(t);
                            }
                            k(e.$doCheck) && (y.$watch(function() {
                                e.$doCheck();
                            }), e.$doCheck()), k(e.$onDestroy) && y.$on("$destroy", function() {
                                e.$onDestroy();
                            });
                        }), p = 0, h = c.length; p < h; p++) g = c[p], yn(g, g.isolateScope ? m : o, E, T, g.require && Q(g.directiveName, g.require, E, w), b);
                        var q = o;
                        for (C && (C.template || null === C.templateUrl) && (q = m), n && n(q, a.childNodes, void 0, f), 
                        p = l.length - 1; p >= 0; p--) g = l[p], yn(g, g.isolateScope ? m : o, E, T, g.require && Q(g.directiveName, g.require, E, w), b);
                        r(w, function(n) {
                            var e = n.instance;
                            k(e.$postLink) && e.$postLink();
                        });
                    }
                    f = f || {};
                    for (var h, g, m, y, w, b = -Number.MAX_VALUE, x = f.newScopeDirective, I = f.controllerDirectives, C = f.newIsolateScopeDirective, S = f.templateDirective, E = f.nonTlbTranscludeDirective, T = !1, A = !1, O = f.hasElementTranscludeDirective, N = t.$$element = qr(e), j = s, L = o, M = !1, q = !1, B = 0, F = n.length; B < F; B++) {
                        h = n[B];
                        var V = h.$$start, z = h.$$end;
                        if (V && (N = X(e, V, z)), m = void 0, b > h.priority) break;
                        if ((w = h.scope) && (h.templateUrl || ($(w) ? (un("new/isolated scope", C || x, h, N), 
                        C = h) : un("new/isolated scope", C, h, N)), x = x || h), g = h.name, !M && (h.replace && (h.templateUrl || h.template) || h.transclude && !h.$$tlb)) {
                            for (var G, Z = B + 1; G = n[Z++]; ) if (G.transclude && !G.$$tlb || G.replace && (G.templateUrl || G.template)) {
                                q = !0;
                                break;
                            }
                            M = !0;
                        }
                        if (!h.templateUrl && h.controller && (w = h.controller, I = I || gn(), un("'" + g + "' controller", I[g], h, N), 
                        I[g] = h), w = h.transclude) if (T = !0, h.$$tlb || (un("transclusion", E, h, N), 
                        E = h), "element" == w) O = !0, b = h.priority, m = N, N = t.$$element = qr(R.$$createComment(g, t[g])), 
                        e = N[0], mn(a, U(m), e), m[0].$$parentNode = m[0].parentNode, L = K(q, m, o, b, j && j.name, {
                            nonTlbTranscludeDirective: E
                        }); else {
                            var tn = gn();
                            if (m = qr(On(e)).contents(), $(w)) {
                                m = [];
                                var rn = gn(), sn = gn();
                                r(w, function(n, e) {
                                    var t = "?" === n.charAt(0);
                                    n = t ? n.substring(1) : n, rn[n] = e, tn[e] = null, sn[e] = t;
                                }), r(N.contents(), function(n) {
                                    var e = rn[ve(D(n))];
                                    e ? (sn[e] = !0, tn[e] = tn[e] || [], tn[e].push(n)) : m.push(n);
                                }), r(sn, function(n, e) {
                                    if (!n) throw Wi("reqslot", "Required transclusion slot `{0}` was not filled.", e);
                                });
                                for (var cn in tn) tn[cn] && (tn[cn] = K(q, tn[cn], o));
                            }
                            N.empty(), L = K(q, m, o, void 0, void 0, {
                                needsNewScope: h.$$isolateScope || h.$$newScope
                            }), L.$$slots = tn;
                        }
                        if (h.template) if (A = !0, un("template", S, h, N), S = h, w = k(h.template) ? h.template(N, t) : h.template, 
                        w = _n(w), h.replace) {
                            if (j = h, m = In(w) ? [] : $e(dn(h.templateNamespace, Kr(w))), e = m[0], 1 != m.length || e.nodeType !== oi) throw Wi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g, "");
                            mn(a, N, e);
                            var ln = {
                                $attr: {}
                            }, fn = W(e, [], ln), pn = n.splice(B + 1, n.length - (B + 1));
                            (C || x) && en(fn, C, x), n = n.concat(fn).concat(pn), on(t, ln), F = n.length;
                        } else N.html(w);
                        if (h.templateUrl) A = !0, un("template", S, h, N), S = h, h.replace && (j = h), 
                        p = an(n.splice(B, n.length - B), N, t, a, T && L, c, l, {
                            controllerDirectives: I,
                            newScopeDirective: x !== h && x,
                            newIsolateScopeDirective: C,
                            templateDirective: S,
                            nonTlbTranscludeDirective: E
                        }), F = n.length; else if (h.compile) try {
                            y = h.compile(N, t, L);
                            var hn = h.$$originalDirective || h;
                            k(y) ? d(null, H(hn, y), V, z) : y && d(H(hn, y.pre), H(hn, y.post), V, z);
                        } catch (wn) {
                            i(wn, J(N));
                        }
                        h.terminal && (p.terminal = !0, b = Math.max(b, h.priority));
                    }
                    return p.scope = x && x.scope === !0, p.transcludeOnThisElement = T, p.templateOnThisElement = A, 
                    p.transclude = L, f.hasElementTranscludeDirective = O, p;
                }
                function Q(n, e, t, i) {
                    var o;
                    if (b(e)) {
                        var a = e.match(I), s = e.substring(a[0].length), c = a[1] || a[3], u = "?" === a[2];
                        if ("^^" === c ? t = t.parent() : (o = i && i[s], o = o && o.instance), !o) {
                            var l = "$" + s + "Controller";
                            o = c ? t.inheritedData(l) : t.data(l);
                        }
                        if (!o && !u) throw Wi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, n);
                    } else if (Yr(e)) {
                        o = [];
                        for (var f = 0, d = e.length; f < d; f++) o[f] = Q(n, e[f], t, i);
                    } else $(e) && (o = {}, r(e, function(e, r) {
                        o[r] = Q(n, e, t, i);
                    }));
                    return o || null;
                }
                function nn(n, e, t, r, i, o, a) {
                    var s = gn();
                    for (var u in r) {
                        var l = r[u], f = {
                            $scope: l === a || l.$$isolateScope ? i : o,
                            $element: n,
                            $attrs: e,
                            $transclude: t
                        }, d = l.controller;
                        "@" == d && (d = e[l.name]);
                        var p = c(d, f, !0, l.controllerAs);
                        s[l.name] = p, n.data("$" + l.name + "Controller", p.instance);
                    }
                    return s;
                }
                function en(n, e, t) {
                    for (var r = 0, i = n.length; r < i; r++) n[r] = d(n[r], {
                        $$isolateScope: e,
                        $$newScope: t
                    });
                }
                function tn(n, t, r, o, s, c, u) {
                    if (t === s) return null;
                    var p = null;
                    if (l.hasOwnProperty(t)) for (var h, g = e.get(t + f), m = 0, y = g.length; m < y; m++) try {
                        if (h = g[m], (v(o) || o > h.priority) && h.restrict.indexOf(r) != -1) {
                            if (c && (h = d(h, {
                                $$start: c,
                                $$end: u
                            })), !h.$$bindings) {
                                var w = h.$$bindings = a(h, h.name);
                                $(w.isolateScope) && (h.$$isolateBindings = w.isolateScope);
                            }
                            n.push(h), p = h;
                        }
                    } catch (b) {
                        i(b);
                    }
                    return p;
                }
                function rn(n) {
                    if (l.hasOwnProperty(n)) for (var t, r = e.get(n + f), i = 0, o = r.length; i < o; i++) if (t = r[i], 
                    t.multiElement) return !0;
                    return !1;
                }
                function on(n, e) {
                    var t = e.$attr, i = n.$attr;
                    n.$$element;
                    r(n, function(r, i) {
                        "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), 
                        n.$set(i, r, !0, t[i]));
                    }), r(e, function(e, r) {
                        n.hasOwnProperty(r) || "$" === r.charAt(0) || (n[r] = e, "class" !== r && "style" !== r && (i[r] = t[r]));
                    });
                }
                function an(n, e, t, i, a, s, c, u) {
                    var l, f, p = [], h = e[0], g = n.shift(), m = d(g, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: g
                    }), v = k(g.templateUrl) ? g.templateUrl(e, t) : g.templateUrl, y = g.templateNamespace;
                    return e.empty(), o(v).then(function(o) {
                        var d, w, b, x;
                        if (o = _n(o), g.replace) {
                            if (b = In(o) ? [] : $e(dn(y, Kr(o))), d = b[0], 1 != b.length || d.nodeType !== oi) throw Wi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, v);
                            w = {
                                $attr: {}
                            }, mn(i, e, d);
                            var I = W(d, [], w);
                            $(g.scope) && en(I, !0), n = I.concat(n), on(t, w);
                        } else d = h, e.html(o);
                        for (n.unshift(m), l = Z(n, d, t, a, e, g, s, c, u), r(i, function(n, t) {
                            n == d && (i[t] = e[0]);
                        }), f = V(e[0].childNodes, a); p.length; ) {
                            var k = p.shift(), C = p.shift(), S = p.shift(), _ = p.shift(), E = e[0];
                            if (!k.$$destroyed) {
                                if (C !== h) {
                                    var T = C.className;
                                    u.hasElementTranscludeDirective && g.replace || (E = On(d)), mn(S, qr(C), E), M(qr(E), T);
                                }
                                x = l.transcludeOnThisElement ? z(k, l.transclude, _) : _, l(f, k, E, i, x);
                            }
                        }
                        p = null;
                    }), function(n, e, t, r, i) {
                        var o = i;
                        e.$$destroyed || (p ? p.push(e, t, r, o) : (l.transcludeOnThisElement && (o = z(e, l.transclude, i)), 
                        l(f, e, t, r, o)));
                    };
                }
                function sn(n, e) {
                    var t = e.priority - n.priority;
                    return 0 !== t ? t : n.name !== e.name ? n.name < e.name ? -1 : 1 : n.index - e.index;
                }
                function un(n, e, t, r) {
                    function i(n) {
                        return n ? " (module: " + n + ")" : "";
                    }
                    if (e) throw Wi("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", e.name, i(e.$$moduleName), t.name, i(t.$$moduleName), n, J(r));
                }
                function fn(n, e) {
                    var r = t(e, !0);
                    r && n.push({
                        priority: 0,
                        compile: function(n) {
                            var e = n.parent(), t = !!e.length;
                            return t && R.$$addBindingClass(e), function(n, e) {
                                var i = e.parent();
                                t || R.$$addBindingClass(i), R.$$addBindingInfo(i, r.expressions), n.$watch(r, function(n) {
                                    e[0].nodeValue = n;
                                });
                            };
                        }
                    });
                }
                function dn(e, t) {
                    switch (e = jr(e || "html")) {
                      case "svg":
                      case "math":
                        var r = n.document.createElement("div");
                        return r.innerHTML = "<" + e + ">" + t + "</" + e + ">", r.childNodes[0].childNodes;

                      default:
                        return t;
                    }
                }
                function pn(n, e) {
                    if ("srcdoc" == e) return S.HTML;
                    var t = D(n);
                    return "xlinkHref" == e || "form" == t && "action" == e || "img" != t && ("src" == e || "ngSrc" == e) ? S.RESOURCE_URL : void 0;
                }
                function hn(n, e, r, i, o) {
                    var a = pn(n, i);
                    o = x[i] || o;
                    var s = t(r, !0, a, o);
                    if (s) {
                        if ("multiple" === i && "select" === D(n)) throw Wi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", J(n));
                        e.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(n, e, c) {
                                        var u = c.$$observers || (c.$$observers = gn());
                                        if (C.test(i)) throw Wi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var l = c[i];
                                        l !== r && (s = l && t(l, !0, a, o), r = l), s && (c[i] = s(n), (u[i] || (u[i] = [])).$$inter = !0, 
                                        (c.$$observers && c.$$observers[i].$$scope || n).$watch(s, function(n, e) {
                                            "class" === i && n != e ? c.$updateClass(n, e) : c.$set(i, n);
                                        }));
                                    }
                                };
                            }
                        });
                    }
                }
                function mn(e, t, r) {
                    var i, o, a = t[0], s = t.length, c = a.parentNode;
                    if (e) for (i = 0, o = e.length; i < o; i++) if (e[i] == a) {
                        e[i++] = r;
                        for (var u = i, l = u + s - 1, f = e.length; u < f; u++, l++) l < f ? e[u] = e[l] : delete e[u];
                        e.length -= s - 1, e.context === a && (e.context = r);
                        break;
                    }
                    c && c.replaceChild(r, a);
                    var d = n.document.createDocumentFragment();
                    for (i = 0; i < s; i++) d.appendChild(t[i]);
                    for (qr.hasData(a) && (qr.data(r, qr.data(a)), qr(a).off("$destroy")), qr.cleanData(d.querySelectorAll("*")), 
                    i = 1; i < s; i++) delete t[i];
                    t[0] = r, t.length = 1;
                }
                function vn(n, e) {
                    return u(function() {
                        return n.apply(null, arguments);
                    }, n, e);
                }
                function yn(n, e, t, r, o, a) {
                    try {
                        n(e, t, r, o, a);
                    } catch (s) {
                        i(s, J(t));
                    }
                }
                function $n(n, e, i, o, a) {
                    function c(e, t, r) {
                        k(i.$onChanges) && t !== r && (wn || (n.$$postDigest(j), wn = []), l || (l = {}, 
                        wn.push(u)), l[e] && (r = l[e].previousValue), l[e] = new me(r, t));
                    }
                    function u() {
                        i.$onChanges(l), l = void 0;
                    }
                    var l, f = [], d = {};
                    return r(o, function(r, o) {
                        var u, l, h, g, m, v = r.attrName, y = r.optional, $ = r.mode;
                        switch ($) {
                          case "@":
                            y || Nr.call(e, v) || (i[o] = e[v] = void 0), e.$observe(v, function(n) {
                                if (b(n) || O(n)) {
                                    var e = i[o];
                                    c(o, n, e), i[o] = n;
                                }
                            }), e.$$observers[v].$$scope = n, u = e[v], b(u) ? i[o] = t(u)(n) : O(u) && (i[o] = u), 
                            d[o] = new me(Gi, i[o]);
                            break;

                          case "=":
                            if (!Nr.call(e, v)) {
                                if (y) break;
                                e[v] = void 0;
                            }
                            if (y && !e[v]) break;
                            l = s(e[v]), g = l.literal ? B : function(n, e) {
                                return n === e || n !== n && e !== e;
                            }, h = l.assign || function() {
                                throw u = i[o] = l(n), Wi("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", e[v], v, a.name);
                            }, u = i[o] = l(n);
                            var w = function(e) {
                                return g(e, i[o]) || (g(e, u) ? h(n, e = i[o]) : i[o] = e), u = e;
                            };
                            w.$stateful = !0, m = r.collection ? n.$watchCollection(e[v], w) : n.$watch(s(e[v], w), null, l.literal), 
                            f.push(m);
                            break;

                          case "<":
                            if (!Nr.call(e, v)) {
                                if (y) break;
                                e[v] = void 0;
                            }
                            if (y && !e[v]) break;
                            l = s(e[v]);
                            var x = i[o] = l(n);
                            d[o] = new me(Gi, i[o]), m = n.$watch(l, function(n, e) {
                                if (e === n) {
                                    if (e === x) return;
                                    e = x;
                                }
                                c(o, n, e), i[o] = n;
                            }, l.literal), f.push(m);
                            break;

                          case "&":
                            if (l = e.hasOwnProperty(v) ? s(e[v]) : p, l === p && y) break;
                            i[o] = function(e) {
                                return l(n, e);
                            };
                        }
                    }), {
                        initialChanges: d,
                        removeWatches: f.length && function() {
                            for (var n = 0, e = f.length; n < e; ++n) f[n]();
                        }
                    };
                }
                var wn, bn = /^\w/, xn = n.document.createElement("div"), kn = T;
                P.prototype = {
                    $normalize: ve,
                    $addClass: function(n) {
                        n && n.length > 0 && A.addClass(this.$$element, n);
                    },
                    $removeClass: function(n) {
                        n && n.length > 0 && A.removeClass(this.$$element, n);
                    },
                    $updateClass: function(n, e) {
                        var t = ye(n, e);
                        t && t.length && A.addClass(this.$$element, t);
                        var r = ye(e, n);
                        r && r.length && A.removeClass(this.$$element, r);
                    },
                    $set: function(n, e, t, o) {
                        var a, s = this.$$element[0], c = Wn(s, n), u = Gn(n), l = n;
                        if (c ? (this.$$element.prop(n, e), o = c) : u && (this[u] = e, l = u), this[n] = e, 
                        o ? this.$attr[n] = o : (o = this.$attr[n], o || (this.$attr[n] = o = cn(n, "-"))), 
                        a = D(this.$$element), "a" === a && ("href" === n || "xlinkHref" === n) || "img" === a && "src" === n) this[n] = e = N(e, "src" === n); else if ("img" === a && "srcset" === n && y(e)) {
                            for (var f = "", d = Kr(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(d) ? p : /(,)/, g = d.split(h), m = Math.floor(g.length / 2), $ = 0; $ < m; $++) {
                                var w = 2 * $;
                                f += N(Kr(g[w]), !0), f += " " + Kr(g[w + 1]);
                            }
                            var b = Kr(g[2 * $]).split(/\s/);
                            f += N(Kr(b[0]), !0), 2 === b.length && (f += " " + Kr(b[1])), this[n] = e = f;
                        }
                        t !== !1 && (null === e || v(e) ? this.$$element.removeAttr(o) : bn.test(o) ? this.$$element.attr(o, e) : L(this.$$element[0], o, e));
                        var x = this.$$observers;
                        x && r(x[l], function(n) {
                            try {
                                n(e);
                            } catch (t) {
                                i(t);
                            }
                        });
                    },
                    $observe: function(n, e) {
                        var t = this, r = t.$$observers || (t.$$observers = gn()), i = r[n] || (r[n] = []);
                        return i.push(e), g.$evalAsync(function() {
                            i.$$inter || !t.hasOwnProperty(n) || v(t[n]) || e(t[n]);
                        }), function() {
                            q(i, e);
                        };
                    }
                };
                var Cn = t.startSymbol(), Sn = t.endSymbol(), _n = "{{" == Cn && "}}" == Sn ? h : function(n) {
                    return n.replace(/\{\{/g, Cn).replace(/}}/g, Sn);
                }, En = /^ngAttr[A-Z]/, An = /^(.+)Start$/;
                return R.$$addBindingInfo = E ? function(n, e) {
                    var t = n.data("$binding") || [];
                    Yr(e) ? t = t.concat(e) : t.push(e), n.data("$binding", t);
                } : p, R.$$addBindingClass = E ? function(n) {
                    M(n, "ng-binding");
                } : p, R.$$addScopeInfo = E ? function(n, e, t, r) {
                    var i = t ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    n.data(i, e);
                } : p, R.$$addScopeClass = E ? function(n, e) {
                    M(n, e ? "ng-isolate-scope" : "ng-scope");
                } : p, R.$$createComment = function(e, t) {
                    var r = "";
                    return E && (r = " " + (e || "") + ": ", t && (r += t + " ")), n.document.createComment(r);
                }, R;
            } ];
        }
        function me(n, e) {
            this.previousValue = n, this.currentValue = e;
        }
        function ve(n) {
            return xn(n.replace(Xi, ""));
        }
        function ye(n, e) {
            var t = "", r = n.split(/\s+/), i = e.split(/\s+/);
            n: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++) if (a == i[s]) continue n;
                t += (t.length > 0 ? " " : "") + a;
            }
            return t;
        }
        function $e(n) {
            n = qr(n);
            var e = n.length;
            if (e <= 1) return n;
            for (;e--; ) {
                var t = n[e];
                t.nodeType === ci && Ur.call(n, e, 1);
            }
            return n;
        }
        function we(n, e) {
            if (e && b(e)) return e;
            if (b(n)) {
                var t = Ji.exec(n);
                if (t) return t[3];
            }
        }
        function be() {
            var n = {}, t = !1;
            this.has = function(e) {
                return n.hasOwnProperty(e);
            }, this.register = function(e, t) {
                dn(e, "controller"), $(e) ? u(n, e) : n[e] = t;
            }, this.allowGlobals = function() {
                t = !0;
            }, this.$get = [ "$injector", "$window", function(r, i) {
                function o(n, t, r, i) {
                    if (!n || !$(n.$scope)) throw e("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                    n.$scope[t] = r;
                }
                return function(e, a, s, c) {
                    var l, f, d, p;
                    if (s = s === !0, c && b(c) && (p = c), b(e)) {
                        if (f = e.match(Ji), !f) throw Yi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", e);
                        d = f[1], p = p || f[3], e = n.hasOwnProperty(d) ? n[d] : pn(a.$scope, d, !0) || (t ? pn(i, d, !0) : void 0), 
                        fn(e, d, !0);
                    }
                    if (s) {
                        var h = (Yr(e) ? e[e.length - 1] : e).prototype;
                        l = Object.create(h || null), p && o(a, p, l, d || e.name);
                        var g;
                        return g = u(function() {
                            var n = r.invoke(e, l, a, d);
                            return n !== l && ($(n) || k(n)) && (l = n, p && o(a, p, l, d || e.name)), l;
                        }, {
                            instance: l,
                            identifier: p
                        });
                    }
                    return l = r.instantiate(e, a, d), p && o(a, p, l, d || e.name), l;
                };
            } ];
        }
        function xe() {
            this.$get = [ "$window", function(n) {
                return qr(n.document);
            } ];
        }
        function Ie() {
            this.$get = [ "$log", function(n) {
                return function(e, t) {
                    n.error.apply(n, arguments);
                };
            } ];
        }
        function ke(n) {
            return $(n) ? I(n) ? n.toISOString() : z(n) : n;
        }
        function Ce() {
            this.$get = function() {
                return function(n) {
                    if (!n) return "";
                    var e = [];
                    return i(n, function(n, t) {
                        null === n || v(n) || (Yr(n) ? r(n, function(n) {
                            e.push(en(t) + "=" + en(ke(n)));
                        }) : e.push(en(t) + "=" + en(ke(n))));
                    }), e.join("&");
                };
            };
        }
        function Se() {
            this.$get = function() {
                return function(n) {
                    function e(n, o, a) {
                        null === n || v(n) || (Yr(n) ? r(n, function(n, t) {
                            e(n, o + "[" + ($(n) ? t : "") + "]");
                        }) : $(n) && !I(n) ? i(n, function(n, t) {
                            e(n, o + (a ? "" : "[") + t + (a ? "" : "]"));
                        }) : t.push(en(o) + "=" + en(ke(n))));
                    }
                    if (!n) return "";
                    var t = [];
                    return e(n, "", !0), t.join("&");
                };
            };
        }
        function _e(n, e) {
            if (b(n)) {
                var t = n.replace(to, "").trim();
                if (t) {
                    var r = e("Content-Type");
                    (r && 0 === r.indexOf(Zi) || Ee(t)) && (n = W(t));
                }
            }
            return n;
        }
        function Ee(n) {
            var e = n.match(no);
            return e && eo[e[0]].test(n);
        }
        function Te(n) {
            function e(n, e) {
                n && (i[n] = i[n] ? i[n] + ", " + e : e);
            }
            var t, i = gn();
            return b(n) ? r(n.split("\n"), function(n) {
                t = n.indexOf(":"), e(jr(Kr(n.substr(0, t))), Kr(n.substr(t + 1)));
            }) : $(n) && r(n, function(n, t) {
                e(jr(t), Kr(n));
            }), i;
        }
        function Ae(n) {
            var e;
            return function(t) {
                if (e || (e = Te(n)), t) {
                    var r = e[jr(t)];
                    return void 0 === r && (r = null), r;
                }
                return e;
            };
        }
        function Oe(n, e, t, i) {
            return k(i) ? i(n, e, t) : (r(i, function(r) {
                n = r(n, e, t);
            }), n);
        }
        function Ne(n) {
            return 200 <= n && n < 300;
        }
        function je() {
            var n = this.defaults = {
                transformResponse: [ _e ],
                transformRequest: [ function(n) {
                    return !$(n) || E(n) || A(n) || T(n) ? n : z(n);
                } ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: vn(Qi),
                    put: vn(Qi),
                    patch: vn(Qi)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            }, t = !1;
            this.useApplyAsync = function(n) {
                return y(n) ? (t = !!n, this) : t;
            };
            var i = !0;
            this.useLegacyPromiseExtensions = function(n) {
                return y(n) ? (i = !!n, this) : i;
            };
            var o = this.interceptors = [];
            this.$get = [ "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, s, c, l, f, d) {
                function p(t) {
                    function o(n, e) {
                        for (var t = 0, r = e.length; t < r; ) {
                            var i = e[t++], o = e[t++];
                            n = n.then(i, o);
                        }
                        return e.length = 0, n;
                    }
                    function a(n, e) {
                        var t, i = {};
                        return r(n, function(n, r) {
                            k(n) ? (t = n(e), null != t && (i[r] = t)) : i[r] = n;
                        }), i;
                    }
                    function s(e) {
                        var t, r, i, o = n.headers, s = u({}, e.headers);
                        o = u({}, o.common, o[jr(e.method)]);
                        n: for (t in o) {
                            r = jr(t);
                            for (i in s) if (jr(i) === r) continue n;
                            s[t] = o[t];
                        }
                        return a(s, vn(e));
                    }
                    function c(e) {
                        var t = e.headers, i = Oe(e.data, Ae(t), void 0, e.transformRequest);
                        return v(i) && r(t, function(n, e) {
                            "content-type" === jr(e) && delete t[e];
                        }), v(e.withCredentials) && !v(n.withCredentials) && (e.withCredentials = n.withCredentials), 
                        m(e, i).then(l, l);
                    }
                    function l(n) {
                        var e = u({}, n);
                        return e.data = Oe(n.data, n.headers, n.status, p.transformResponse), Ne(n.status) ? e : f.reject(e);
                    }
                    if (!$(t)) throw e("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                    if (!b(t.url)) throw e("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", t.url);
                    var p = u({
                        method: "get",
                        transformRequest: n.transformRequest,
                        transformResponse: n.transformResponse,
                        paramSerializer: n.paramSerializer
                    }, t);
                    p.headers = s(t), p.method = Pr(p.method), p.paramSerializer = b(p.paramSerializer) ? d.get(p.paramSerializer) : p.paramSerializer;
                    var h = [], g = [], y = f.when(p);
                    return r(I, function(n) {
                        (n.request || n.requestError) && h.unshift(n.request, n.requestError), (n.response || n.responseError) && g.push(n.response, n.responseError);
                    }), y = o(y, h), y = y.then(c), y = o(y, g), i ? (y.success = function(n) {
                        return fn(n, "fn"), y.then(function(e) {
                            n(e.data, e.status, e.headers, p);
                        }), y;
                    }, y.error = function(n) {
                        return fn(n, "fn"), y.then(null, function(e) {
                            n(e.data, e.status, e.headers, p);
                        }), y;
                    }) : (y.success = io("success"), y.error = io("error")), y;
                }
                function h(n) {
                    r(arguments, function(n) {
                        p[n] = function(e, t) {
                            return p(u({}, t || {}, {
                                method: n,
                                url: e
                            }));
                        };
                    });
                }
                function g(n) {
                    r(arguments, function(n) {
                        p[n] = function(e, t, r) {
                            return p(u({}, r || {}, {
                                method: n,
                                url: e,
                                data: t
                            }));
                        };
                    });
                }
                function m(e, i) {
                    function o(n) {
                        if (n) {
                            var e = {};
                            return r(n, function(n, r) {
                                e[r] = function(e) {
                                    function r() {
                                        n(e);
                                    }
                                    t ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r);
                                };
                            }), e;
                        }
                    }
                    function c(n, e, r, i) {
                        function o() {
                            u(e, n, r, i);
                        }
                        g && (Ne(n) ? g.put(C, [ n, e, Te(r), i ]) : g.remove(C)), t ? l.$applyAsync(o) : (o(), 
                        l.$$phase || l.$apply());
                    }
                    function u(n, t, r, i) {
                        t = t >= -1 ? t : 0, (Ne(t) ? b.resolve : b.reject)({
                            data: n,
                            status: t,
                            headers: Ae(r),
                            config: e,
                            statusText: i
                        });
                    }
                    function d(n) {
                        u(n.data, n.status, vn(n.headers()), n.statusText);
                    }
                    function h() {
                        var n = p.pendingRequests.indexOf(e);
                        n !== -1 && p.pendingRequests.splice(n, 1);
                    }
                    var g, m, b = f.defer(), I = b.promise, k = e.headers, C = w(e.url, e.paramSerializer(e.params));
                    if (p.pendingRequests.push(e), I.then(h, h), !e.cache && !n.cache || e.cache === !1 || "GET" !== e.method && "JSONP" !== e.method || (g = $(e.cache) ? e.cache : $(n.cache) ? n.cache : x), 
                    g && (m = g.get(C), y(m) ? N(m) ? m.then(d, d) : Yr(m) ? u(m[1], m[0], vn(m[2]), m[3]) : u(m, 200, {}, "OK") : g.put(C, I)), 
                    v(m)) {
                        var S = Lt(e.url) ? s()[e.xsrfCookieName || n.xsrfCookieName] : void 0;
                        S && (k[e.xsrfHeaderName || n.xsrfHeaderName] = S), a(e.method, C, i, c, k, e.timeout, e.withCredentials, e.responseType, o(e.eventHandlers), o(e.uploadEventHandlers));
                    }
                    return I;
                }
                function w(n, e) {
                    return e.length > 0 && (n += (n.indexOf("?") == -1 ? "?" : "&") + e), n;
                }
                var x = c("$http");
                n.paramSerializer = b(n.paramSerializer) ? d.get(n.paramSerializer) : n.paramSerializer;
                var I = [];
                return r(o, function(n) {
                    I.unshift(b(n) ? d.get(n) : d.invoke(n));
                }), p.pendingRequests = [], h("get", "delete", "head", "jsonp"), g("post", "put", "patch"), 
                p.defaults = n, p;
            } ];
        }
        function Pe() {
            this.$get = function() {
                return function() {
                    return new n.XMLHttpRequest();
                };
            };
        }
        function Le() {
            this.$get = [ "$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(n, e, t, r) {
                return Me(n, r, n.defer, e, t[0]);
            } ];
        }
        function Me(n, e, t, i, o) {
            function a(n, e, t) {
                n = n.replace("JSON_CALLBACK", e);
                var r = o.createElement("script"), a = null;
                return r.type = "text/javascript", r.src = n, r.async = !0, a = function(n) {
                    gi(r, "load", a), gi(r, "error", a), o.body.removeChild(r), r = null;
                    var s = -1, c = "unknown";
                    n && ("load" !== n.type || i.wasCalled(e) || (n = {
                        type: "error"
                    }), c = n.type, s = "error" === n.type ? 404 : 200), t && t(s, c);
                }, hi(r, "load", a), hi(r, "error", a), o.body.appendChild(r), a;
            }
            return function(o, s, c, u, l, f, d, h, g, m) {
                function $() {
                    x && x(), I && I.abort();
                }
                function w(e, r, i, o, a) {
                    y(S) && t.cancel(S), x = I = null, e(r, i, o, a), n.$$completeOutstandingRequest(p);
                }
                if (n.$$incOutstandingRequestCount(), s = s || n.url(), "jsonp" === jr(o)) var b = i.createCallback(s), x = a(s, b, function(n, e) {
                    var t = 200 === n && i.getResponse(b);
                    w(u, n, t, "", e), i.removeCallback(b);
                }); else {
                    var I = e(o, s);
                    I.open(o, s, !0), r(l, function(n, e) {
                        y(n) && I.setRequestHeader(e, n);
                    }), I.onload = function() {
                        var n = I.statusText || "", e = "response" in I ? I.response : I.responseText, t = 1223 === I.status ? 204 : I.status;
                        0 === t && (t = e ? 200 : "file" == Pt(s).protocol ? 404 : 0), w(u, t, e, I.getAllResponseHeaders(), n);
                    };
                    var k = function() {
                        w(u, -1, null, null, "");
                    };
                    if (I.onerror = k, I.onabort = k, r(g, function(n, e) {
                        I.addEventListener(e, n);
                    }), r(m, function(n, e) {
                        I.upload.addEventListener(e, n);
                    }), d && (I.withCredentials = !0), h) try {
                        I.responseType = h;
                    } catch (C) {
                        if ("json" !== h) throw C;
                    }
                    I.send(v(c) ? null : c);
                }
                if (f > 0) var S = t($, f); else N(f) && f.then($);
            };
        }
        function De() {
            var n = "{{", e = "}}";
            this.startSymbol = function(e) {
                return e ? (n = e, this) : n;
            }, this.endSymbol = function(n) {
                return n ? (e = n, this) : e;
            }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(t, r, i) {
                function o(n) {
                    return "\\\\\\" + n;
                }
                function a(t) {
                    return t.replace(p, n).replace(h, e);
                }
                function s(n) {
                    if (null == n) return "";
                    switch (typeof n) {
                      case "string":
                        break;

                      case "number":
                        n = "" + n;
                        break;

                      default:
                        n = z(n);
                    }
                    return n;
                }
                function c(n, e, t, r) {
                    var i;
                    return i = n.$watch(function(n) {
                        return i(), r(n);
                    }, e, t);
                }
                function l(o, l, p, h) {
                    function m(n) {
                        try {
                            return n = N(n), h && !y(n) ? n : s(n);
                        } catch (e) {
                            r(oo.interr(o, e));
                        }
                    }
                    if (!o.length || o.indexOf(n) === -1) {
                        var $;
                        if (!l) {
                            var w = a(o);
                            $ = g(w), $.exp = o, $.expressions = [], $.$$watchDelegate = c;
                        }
                        return $;
                    }
                    h = !!h;
                    for (var b, x, I, C = 0, S = [], _ = [], E = o.length, T = [], A = []; C < E; ) {
                        if ((b = o.indexOf(n, C)) == -1 || (x = o.indexOf(e, b + f)) == -1) {
                            C !== E && T.push(a(o.substring(C)));
                            break;
                        }
                        C !== b && T.push(a(o.substring(C, b))), I = o.substring(b + f, x), S.push(I), _.push(t(I, m)), 
                        C = x + d, A.push(T.length), T.push("");
                    }
                    if (p && T.length > 1 && oo.throwNoconcat(o), !l || S.length) {
                        var O = function(n) {
                            for (var e = 0, t = S.length; e < t; e++) {
                                if (h && v(n[e])) return;
                                T[A[e]] = n[e];
                            }
                            return T.join("");
                        }, N = function(n) {
                            return p ? i.getTrusted(p, n) : i.valueOf(n);
                        };
                        return u(function(n) {
                            var e = 0, t = S.length, i = new Array(t);
                            try {
                                for (;e < t; e++) i[e] = _[e](n);
                                return O(i);
                            } catch (a) {
                                r(oo.interr(o, a));
                            }
                        }, {
                            exp: o,
                            expressions: S,
                            $$watchDelegate: function(n, e) {
                                var t;
                                return n.$watchGroup(_, function(r, i) {
                                    var o = O(r);
                                    k(e) && e.call(this, o, r !== i ? t : o, n), t = o;
                                });
                            }
                        });
                    }
                }
                var f = n.length, d = e.length, p = new RegExp(n.replace(/./g, o), "g"), h = new RegExp(e.replace(/./g, o), "g");
                return l.startSymbol = function() {
                    return n;
                }, l.endSymbol = function() {
                    return e;
                }, l;
            } ];
        }
        function qe() {
            this.$get = [ "$rootScope", "$window", "$q", "$$q", "$browser", function(n, e, t, r, i) {
                function o(o, s, c, u) {
                    function l() {
                        f ? o.apply(null, d) : o(g);
                    }
                    var f = arguments.length > 4, d = f ? U(arguments, 4) : [], p = e.setInterval, h = e.clearInterval, g = 0, m = y(u) && !u, v = (m ? r : t).defer(), $ = v.promise;
                    return c = y(c) ? c : 0, $.$$intervalId = p(function() {
                        m ? i.defer(l) : n.$evalAsync(l), v.notify(g++), c > 0 && g >= c && (v.resolve(g), 
                        h($.$$intervalId), delete a[$.$$intervalId]), m || n.$apply();
                    }, s), a[$.$$intervalId] = v, $;
                }
                var a = {};
                return o.cancel = function(n) {
                    return !!(n && n.$$intervalId in a) && (a[n.$$intervalId].reject("canceled"), e.clearInterval(n.$$intervalId), 
                    delete a[n.$$intervalId], !0);
                }, o;
            } ];
        }
        function Re(n) {
            for (var e = n.split("/"), t = e.length; t--; ) e[t] = nn(e[t]);
            return e.join("/");
        }
        function Be(n, e) {
            var t = Pt(n);
            e.$$protocol = t.protocol, e.$$host = t.hostname, e.$$port = f(t.port) || co[t.protocol] || null;
        }
        function Fe(n, e) {
            var t = "/" !== n.charAt(0);
            t && (n = "/" + n);
            var r = Pt(n);
            e.$$path = decodeURIComponent(t && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), 
            e.$$search = Z(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path);
        }
        function Ue(n, e) {
            return 0 === n.lastIndexOf(e, 0);
        }
        function He(n, e) {
            if (Ue(e, n)) return e.substr(n.length);
        }
        function Ve(n) {
            var e = n.indexOf("#");
            return e == -1 ? n : n.substr(0, e);
        }
        function ze(n) {
            return n.replace(/(#.+)|#$/, "$1");
        }
        function We(n) {
            return n.substr(0, Ve(n).lastIndexOf("/") + 1);
        }
        function Ge(n) {
            return n.substring(0, n.indexOf("/", n.indexOf("//") + 2));
        }
        function Xe(n, e, t) {
            this.$$html5 = !0, t = t || "", Be(n, this), this.$$parse = function(n) {
                var t = He(e, n);
                if (!b(t)) throw uo("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', n, e);
                Fe(t, this), this.$$path || (this.$$path = "/"), this.$$compose();
            }, this.$$compose = function() {
                var n = Q(this.$$search), t = this.$$hash ? "#" + nn(this.$$hash) : "";
                this.$$url = Re(this.$$path) + (n ? "?" + n : "") + t, this.$$absUrl = e + this.$$url.substr(1);
            }, this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a, s;
                return y(o = He(n, r)) ? (a = o, s = y(o = He(t, o)) ? e + (He("/", o) || o) : n + a) : y(o = He(e, r)) ? s = e + o : e == r + "/" && (s = e), 
                s && this.$$parse(s), !!s;
            };
        }
        function Ye(n, e, t) {
            Be(n, this), this.$$parse = function(r) {
                function i(n, e, t) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return Ue(e, t) && (e = e.replace(t, "")), i.exec(e) ? n : (r = i.exec(n), r ? r[1] : n);
                }
                var o, a = He(n, r) || He(e, r);
                v(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", v(a) && (n = r, this.replace())) : (o = He(t, a), 
                v(o) && (o = a)), Fe(o, this), this.$$path = i(this.$$path, o, n), this.$$compose();
            }, this.$$compose = function() {
                var e = Q(this.$$search), r = this.$$hash ? "#" + nn(this.$$hash) : "";
                this.$$url = Re(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = n + (this.$$url ? t + this.$$url : "");
            }, this.$$parseLinkUrl = function(e, t) {
                return Ve(n) == Ve(e) && (this.$$parse(e), !0);
            };
        }
        function Je(n, e, t) {
            this.$$html5 = !0, Ye.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a;
                return n == Ve(r) ? o = r : (a = He(e, r)) ? o = n + t + a : e === r + "/" && (o = e), 
                o && this.$$parse(o), !!o;
            }, this.$$compose = function() {
                var e = Q(this.$$search), r = this.$$hash ? "#" + nn(this.$$hash) : "";
                this.$$url = Re(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = n + t + this.$$url;
            };
        }
        function Ke(n) {
            return function() {
                return this[n];
            };
        }
        function Ze(n, e) {
            return function(t) {
                return v(t) ? this[n] : (this[n] = e(t), this.$$compose(), this);
            };
        }
        function Qe() {
            var n = "", e = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
            this.hashPrefix = function(e) {
                return y(e) ? (n = e, this) : n;
            }, this.html5Mode = function(n) {
                return O(n) ? (e.enabled = n, this) : $(n) ? (O(n.enabled) && (e.enabled = n.enabled), 
                O(n.requireBase) && (e.requireBase = n.requireBase), O(n.rewriteLinks) && (e.rewriteLinks = n.rewriteLinks), 
                this) : e;
            }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(t, r, i, o, a) {
                function s(n, e, t) {
                    var i = u.url(), o = u.$$state;
                    try {
                        r.url(n, e, t), u.$$state = r.state();
                    } catch (a) {
                        throw u.url(i), u.$$state = o, a;
                    }
                }
                function c(n, e) {
                    t.$broadcast("$locationChangeSuccess", u.absUrl(), n, u.$$state, e);
                }
                var u, l, f, d = r.baseHref(), p = r.url();
                if (e.enabled) {
                    if (!d && e.requireBase) throw uo("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    f = Ge(p) + (d || "/"), l = i.history ? Xe : Je;
                } else f = Ve(p), l = Ye;
                var h = We(f);
                u = new l(f, h, "#" + n), u.$$parseLinkUrl(p, p), u.$$state = r.state();
                var g = /^\s*(javascript|mailto):/i;
                o.on("click", function(n) {
                    if (e.rewriteLinks && !n.ctrlKey && !n.metaKey && !n.shiftKey && 2 != n.which && 2 != n.button) {
                        for (var i = qr(n.target); "a" !== D(i[0]); ) if (i[0] === o[0] || !(i = i.parent())[0]) return;
                        var s = i.prop("href"), c = i.attr("href") || i.attr("xlink:href");
                        $(s) && "[object SVGAnimatedString]" === s.toString() && (s = Pt(s.animVal).href), 
                        g.test(s) || !s || i.attr("target") || n.isDefaultPrevented() || u.$$parseLinkUrl(s, c) && (n.preventDefault(), 
                        u.absUrl() != r.url() && (t.$apply(), a.angular["ff-684208-preventDefault"] = !0));
                    }
                }), ze(u.absUrl()) != ze(p) && r.url(u.absUrl(), !0);
                var m = !0;
                return r.onUrlChange(function(n, e) {
                    return v(He(h, n)) ? void (a.location.href = n) : (t.$evalAsync(function() {
                        var r, i = u.absUrl(), o = u.$$state;
                        n = ze(n), u.$$parse(n), u.$$state = e, r = t.$broadcast("$locationChangeStart", n, i, e, o).defaultPrevented, 
                        u.absUrl() === n && (r ? (u.$$parse(i), u.$$state = o, s(i, !1, o)) : (m = !1, c(i, o)));
                    }), void (t.$$phase || t.$digest()));
                }), t.$watch(function() {
                    var n = ze(r.url()), e = ze(u.absUrl()), o = r.state(), a = u.$$replace, l = n !== e || u.$$html5 && i.history && o !== u.$$state;
                    (m || l) && (m = !1, t.$evalAsync(function() {
                        var e = u.absUrl(), r = t.$broadcast("$locationChangeStart", e, n, u.$$state, o).defaultPrevented;
                        u.absUrl() === e && (r ? (u.$$parse(n), u.$$state = o) : (l && s(e, a, o === u.$$state ? null : u.$$state), 
                        c(n, o)));
                    })), u.$$replace = !1;
                }), u;
            } ];
        }
        function nt() {
            var n = !0, e = this;
            this.debugEnabled = function(e) {
                return y(e) ? (n = e, this) : n;
            }, this.$get = [ "$window", function(t) {
                function i(n) {
                    return n instanceof Error && (n.stack ? n = n.message && n.stack.indexOf(n.message) === -1 ? "Error: " + n.message + "\n" + n.stack : n.stack : n.sourceURL && (n = n.message + "\n" + n.sourceURL + ":" + n.line)), 
                    n;
                }
                function o(n) {
                    var e = t.console || {}, o = e[n] || e.log || p, a = !1;
                    try {
                        a = !!o.apply;
                    } catch (s) {}
                    return a ? function() {
                        var n = [];
                        return r(arguments, function(e) {
                            n.push(i(e));
                        }), o.apply(e, n);
                    } : function(n, e) {
                        o(n, null == e ? "" : e);
                    };
                }
                return {
                    log: o("log"),
                    info: o("info"),
                    warn: o("warn"),
                    error: o("error"),
                    debug: function() {
                        var t = o("debug");
                        return function() {
                            n && t.apply(e, arguments);
                        };
                    }()
                };
            } ];
        }
        function et(n, e) {
            if ("__defineGetter__" === n || "__defineSetter__" === n || "__lookupGetter__" === n || "__lookupSetter__" === n || "__proto__" === n) throw fo("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
            return n;
        }
        function tt(n) {
            return n + "";
        }
        function rt(n, e) {
            if (n) {
                if (n.constructor === n) throw fo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                if (n.window === n) throw fo("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
                if (n.children && (n.nodeName || n.prop && n.attr && n.find)) throw fo("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
                if (n === Object) throw fo("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e);
            }
            return n;
        }
        function it(n, e) {
            if (n) {
                if (n.constructor === n) throw fo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                if (n === po || n === ho || n === go) throw fo("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e);
            }
        }
        function ot(n, e) {
            if (n && (n === (0).constructor || n === (!1).constructor || n === "".constructor || n === {}.constructor || n === [].constructor || n === Function.constructor)) throw fo("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", e);
        }
        function at(n, e) {
            return "undefined" != typeof n ? n : e;
        }
        function st(n, e) {
            return "undefined" == typeof n ? e : "undefined" == typeof e ? n : n + e;
        }
        function ct(n, e) {
            var t = n(e);
            return !t.$stateful;
        }
        function ut(n, e) {
            var t, i;
            switch (n.type) {
              case $o.Program:
                t = !0, r(n.body, function(n) {
                    ut(n.expression, e), t = t && n.expression.constant;
                }), n.constant = t;
                break;

              case $o.Literal:
                n.constant = !0, n.toWatch = [];
                break;

              case $o.UnaryExpression:
                ut(n.argument, e), n.constant = n.argument.constant, n.toWatch = n.argument.toWatch;
                break;

              case $o.BinaryExpression:
                ut(n.left, e), ut(n.right, e), n.constant = n.left.constant && n.right.constant, 
                n.toWatch = n.left.toWatch.concat(n.right.toWatch);
                break;

              case $o.LogicalExpression:
                ut(n.left, e), ut(n.right, e), n.constant = n.left.constant && n.right.constant, 
                n.toWatch = n.constant ? [] : [ n ];
                break;

              case $o.ConditionalExpression:
                ut(n.test, e), ut(n.alternate, e), ut(n.consequent, e), n.constant = n.test.constant && n.alternate.constant && n.consequent.constant, 
                n.toWatch = n.constant ? [] : [ n ];
                break;

              case $o.Identifier:
                n.constant = !1, n.toWatch = [ n ];
                break;

              case $o.MemberExpression:
                ut(n.object, e), n.computed && ut(n.property, e), n.constant = n.object.constant && (!n.computed || n.property.constant), 
                n.toWatch = [ n ];
                break;

              case $o.CallExpression:
                t = !!n.filter && ct(e, n.callee.name), i = [], r(n.arguments, function(n) {
                    ut(n, e), t = t && n.constant, n.constant || i.push.apply(i, n.toWatch);
                }), n.constant = t, n.toWatch = n.filter && ct(e, n.callee.name) ? i : [ n ];
                break;

              case $o.AssignmentExpression:
                ut(n.left, e), ut(n.right, e), n.constant = n.left.constant && n.right.constant, 
                n.toWatch = [ n ];
                break;

              case $o.ArrayExpression:
                t = !0, i = [], r(n.elements, function(n) {
                    ut(n, e), t = t && n.constant, n.constant || i.push.apply(i, n.toWatch);
                }), n.constant = t, n.toWatch = i;
                break;

              case $o.ObjectExpression:
                t = !0, i = [], r(n.properties, function(n) {
                    ut(n.value, e), t = t && n.value.constant && !n.computed, n.value.constant || i.push.apply(i, n.value.toWatch);
                }), n.constant = t, n.toWatch = i;
                break;

              case $o.ThisExpression:
                n.constant = !1, n.toWatch = [];
                break;

              case $o.LocalsExpression:
                n.constant = !1, n.toWatch = [];
            }
        }
        function lt(n) {
            if (1 == n.length) {
                var e = n[0].expression, t = e.toWatch;
                return 1 !== t.length ? t : t[0] !== e ? t : void 0;
            }
        }
        function ft(n) {
            return n.type === $o.Identifier || n.type === $o.MemberExpression;
        }
        function dt(n) {
            if (1 === n.body.length && ft(n.body[0].expression)) return {
                type: $o.AssignmentExpression,
                left: n.body[0].expression,
                right: {
                    type: $o.NGValueParameter
                },
                operator: "="
            };
        }
        function pt(n) {
            return 0 === n.body.length || 1 === n.body.length && (n.body[0].expression.type === $o.Literal || n.body[0].expression.type === $o.ArrayExpression || n.body[0].expression.type === $o.ObjectExpression);
        }
        function ht(n) {
            return n.constant;
        }
        function gt(n, e) {
            this.astBuilder = n, this.$filter = e;
        }
        function mt(n, e) {
            this.astBuilder = n, this.$filter = e;
        }
        function vt(n) {
            return "constructor" == n;
        }
        function yt(n) {
            return k(n.valueOf) ? n.valueOf() : bo.call(n);
        }
        function $t() {
            var n, e, t = gn(), i = gn(), o = {
                true: !0,
                false: !1,
                null: null,
                undefined: void 0
            };
            this.addLiteral = function(n, e) {
                o[n] = e;
            }, this.setIdentifierFns = function(t, r) {
                return n = t, e = r, this;
            }, this.$get = [ "$filter", function(a) {
                function s(n, e, r) {
                    var o, s, u;
                    switch (r = r || w, typeof n) {
                      case "string":
                        n = n.trim(), u = n;
                        var m = r ? i : t;
                        if (o = m[u], !o) {
                            ":" === n.charAt(0) && ":" === n.charAt(1) && (s = !0, n = n.substring(2));
                            var y = r ? $ : v, b = new yo(y), x = new wo(b, a, y);
                            o = x.parse(n), o.constant ? o.$$watchDelegate = h : s ? o.$$watchDelegate = o.literal ? d : f : o.inputs && (o.$$watchDelegate = l), 
                            r && (o = c(o)), m[u] = o;
                        }
                        return g(o, e);

                      case "function":
                        return g(n, e);

                      default:
                        return g(p, e);
                    }
                }
                function c(n) {
                    function e(e, t, r, i) {
                        var o = w;
                        w = !0;
                        try {
                            return n(e, t, r, i);
                        } finally {
                            w = o;
                        }
                    }
                    if (!n) return n;
                    e.$$watchDelegate = n.$$watchDelegate, e.assign = c(n.assign), e.constant = n.constant, 
                    e.literal = n.literal;
                    for (var t = 0; n.inputs && t < n.inputs.length; ++t) n.inputs[t] = c(n.inputs[t]);
                    return e.inputs = n.inputs, e;
                }
                function u(n, e) {
                    return null == n || null == e ? n === e : ("object" != typeof n || (n = yt(n), "object" != typeof n)) && (n === e || n !== n && e !== e);
                }
                function l(n, e, t, r, i) {
                    var o, a = r.inputs;
                    if (1 === a.length) {
                        var s = u;
                        return a = a[0], n.$watch(function(n) {
                            var e = a(n);
                            return u(e, s) || (o = r(n, void 0, void 0, [ e ]), s = e && yt(e)), o;
                        }, e, t, i);
                    }
                    for (var c = [], l = [], f = 0, d = a.length; f < d; f++) c[f] = u, l[f] = null;
                    return n.$watch(function(n) {
                        for (var e = !1, t = 0, i = a.length; t < i; t++) {
                            var s = a[t](n);
                            (e || (e = !u(s, c[t]))) && (l[t] = s, c[t] = s && yt(s));
                        }
                        return e && (o = r(n, void 0, void 0, l)), o;
                    }, e, t, i);
                }
                function f(n, e, t, r) {
                    var i, o;
                    return i = n.$watch(function(n) {
                        return r(n);
                    }, function(n, t, r) {
                        o = n, k(e) && e.apply(this, arguments), y(n) && r.$$postDigest(function() {
                            y(o) && i();
                        });
                    }, t);
                }
                function d(n, e, t, i) {
                    function o(n) {
                        var e = !0;
                        return r(n, function(n) {
                            y(n) || (e = !1);
                        }), e;
                    }
                    var a, s;
                    return a = n.$watch(function(n) {
                        return i(n);
                    }, function(n, t, r) {
                        s = n, k(e) && e.call(this, n, t, r), o(n) && r.$$postDigest(function() {
                            o(s) && a();
                        });
                    }, t);
                }
                function h(n, e, t, r) {
                    var i;
                    return i = n.$watch(function(n) {
                        return i(), r(n);
                    }, e, t);
                }
                function g(n, e) {
                    if (!e) return n;
                    var t = n.$$watchDelegate, r = !1, i = t !== d && t !== f, o = i ? function(t, i, o, a) {
                        var s = r && a ? a[0] : n(t, i, o, a);
                        return e(s, t, i);
                    } : function(t, r, i, o) {
                        var a = n(t, r, i, o), s = e(a, t, r);
                        return y(a) ? s : a;
                    };
                    return n.$$watchDelegate && n.$$watchDelegate !== l ? o.$$watchDelegate = n.$$watchDelegate : e.$stateful || (o.$$watchDelegate = l, 
                    r = !n.inputs, o.inputs = n.inputs ? n.inputs : [ n ]), o;
                }
                var m = Qr().noUnsafeEval, v = {
                    csp: m,
                    expensiveChecks: !1,
                    literals: R(o),
                    isIdentifierStart: k(n) && n,
                    isIdentifierContinue: k(e) && e
                }, $ = {
                    csp: m,
                    expensiveChecks: !0,
                    literals: R(o),
                    isIdentifierStart: k(n) && n,
                    isIdentifierContinue: k(e) && e
                }, w = !1;
                return s.$$runningExpensiveChecks = function() {
                    return w;
                }, s;
            } ];
        }
        function wt() {
            this.$get = [ "$rootScope", "$exceptionHandler", function(n, e) {
                return xt(function(e) {
                    n.$evalAsync(e);
                }, e);
            } ];
        }
        function bt() {
            this.$get = [ "$browser", "$exceptionHandler", function(n, e) {
                return xt(function(e) {
                    n.defer(e);
                }, e);
            } ];
        }
        function xt(n, t) {
            function i() {
                this.$$state = {
                    status: 0
                };
            }
            function o(n, e) {
                return function(t) {
                    e.call(n, t);
                };
            }
            function a(n) {
                var e, r, i;
                i = n.pending, n.processScheduled = !1, n.pending = void 0;
                for (var o = 0, a = i.length; o < a; ++o) {
                    r = i[o][0], e = i[o][n.status];
                    try {
                        k(e) ? r.resolve(e(n.value)) : 1 === n.status ? r.resolve(n.value) : r.reject(n.value);
                    } catch (s) {
                        r.reject(s), t(s);
                    }
                }
            }
            function s(e) {
                !e.processScheduled && e.pending && (e.processScheduled = !0, n(function() {
                    a(e);
                }));
            }
            function c() {
                this.promise = new i();
            }
            function l(n) {
                var e = new c(), t = 0, i = Yr(n) ? [] : {};
                return r(n, function(n, r) {
                    t++, y(n).then(function(n) {
                        i.hasOwnProperty(r) || (i[r] = n, --t || e.resolve(i));
                    }, function(n) {
                        i.hasOwnProperty(r) || e.reject(n);
                    });
                }), 0 === t && e.resolve(i), e.promise;
            }
            function f(n) {
                var e = p();
                return r(n, function(n) {
                    y(n).then(e.resolve, e.reject);
                }), e.promise;
            }
            var d = e("$q", TypeError), p = function() {
                var n = new c();
                return n.resolve = o(n, n.resolve), n.reject = o(n, n.reject), n.notify = o(n, n.notify), 
                n;
            };
            u(i.prototype, {
                then: function(n, e, t) {
                    if (v(n) && v(e) && v(t)) return this;
                    var r = new c();
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ r, n, e, t ]), 
                    this.$$state.status > 0 && s(this.$$state), r.promise;
                },
                catch: function(n) {
                    return this.then(null, n);
                },
                finally: function(n, e) {
                    return this.then(function(e) {
                        return m(e, !0, n);
                    }, function(e) {
                        return m(e, !1, n);
                    }, e);
                }
            }), u(c.prototype, {
                resolve: function(n) {
                    this.promise.$$state.status || (n === this.promise ? this.$$reject(d("qcycle", "Expected promise to be resolved with value other than itself '{0}'", n)) : this.$$resolve(n));
                },
                $$resolve: function(n) {
                    function e(n) {
                        c || (c = !0, a.$$resolve(n));
                    }
                    function r(n) {
                        c || (c = !0, a.$$reject(n));
                    }
                    var i, a = this, c = !1;
                    try {
                        ($(n) || k(n)) && (i = n && n.then), k(i) ? (this.promise.$$state.status = -1, i.call(n, e, r, o(this, this.notify))) : (this.promise.$$state.value = n, 
                        this.promise.$$state.status = 1, s(this.promise.$$state));
                    } catch (u) {
                        r(u), t(u);
                    }
                },
                reject: function(n) {
                    this.promise.$$state.status || this.$$reject(n);
                },
                $$reject: function(n) {
                    this.promise.$$state.value = n, this.promise.$$state.status = 2, s(this.promise.$$state);
                },
                notify: function(e) {
                    var r = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && r && r.length && n(function() {
                        for (var n, i, o = 0, a = r.length; o < a; o++) {
                            i = r[o][0], n = r[o][3];
                            try {
                                i.notify(k(n) ? n(e) : e);
                            } catch (s) {
                                t(s);
                            }
                        }
                    });
                }
            });
            var h = function(n) {
                var e = new c();
                return e.reject(n), e.promise;
            }, g = function(n, e) {
                var t = new c();
                return e ? t.resolve(n) : t.reject(n), t.promise;
            }, m = function(n, e, t) {
                var r = null;
                try {
                    k(t) && (r = t());
                } catch (i) {
                    return g(i, !1);
                }
                return N(r) ? r.then(function() {
                    return g(n, e);
                }, function(n) {
                    return g(n, !1);
                }) : g(n, e);
            }, y = function(n, e, t, r) {
                var i = new c();
                return i.resolve(n), i.promise.then(e, t, r);
            }, w = y, b = function(n) {
                function e(n) {
                    r.resolve(n);
                }
                function t(n) {
                    r.reject(n);
                }
                if (!k(n)) throw d("norslvr", "Expected resolverFn, got '{0}'", n);
                var r = new c();
                return n(e, t), r.promise;
            };
            return b.prototype = i.prototype, b.defer = p, b.reject = h, b.when = y, b.resolve = w, 
            b.all = l, b.race = f, b;
        }
        function It() {
            this.$get = [ "$window", "$timeout", function(n, e) {
                var t = n.requestAnimationFrame || n.webkitRequestAnimationFrame, r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.webkitCancelRequestAnimationFrame, i = !!t, o = i ? function(n) {
                    var e = t(n);
                    return function() {
                        r(e);
                    };
                } : function(n) {
                    var t = e(n, 16.66, !1);
                    return function() {
                        e.cancel(t);
                    };
                };
                return o.supported = i, o;
            } ];
        }
        function kt() {
            function n(n) {
                function e() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                    this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = a(), 
                    this.$$ChildScope = null;
                }
                return e.prototype = n, e;
            }
            var i = 10, o = e("$rootScope"), s = null, c = null;
            this.digestTtl = function(n) {
                return arguments.length && (i = n), i;
            }, this.$get = [ "$exceptionHandler", "$parse", "$browser", function(e, u, l) {
                function f(n) {
                    n.currentScope.$$destroyed = !0;
                }
                function d(n) {
                    9 === Dr && (n.$$childHead && d(n.$$childHead), n.$$nextSibling && d(n.$$nextSibling)), 
                    n.$parent = n.$$nextSibling = n.$$prevSibling = n.$$childHead = n.$$childTail = n.$root = n.$$watchers = null;
                }
                function h() {
                    this.$id = a(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                    this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                    this.$$watchersCount = 0, this.$$isolateBindings = null;
                }
                function g(n) {
                    if (C.$$phase) throw o("inprog", "{0} already in progress", C.$$phase);
                    C.$$phase = n;
                }
                function m() {
                    C.$$phase = null;
                }
                function y(n, e) {
                    do n.$$watchersCount += e; while (n = n.$parent);
                }
                function w(n, e, t) {
                    do n.$$listenerCount[t] -= e, 0 === n.$$listenerCount[t] && delete n.$$listenerCount[t]; while (n = n.$parent);
                }
                function b() {}
                function x() {
                    for (;E.length; ) try {
                        E.shift()();
                    } catch (n) {
                        e(n);
                    }
                    c = null;
                }
                function I() {
                    null === c && (c = l.defer(function() {
                        C.$apply(x);
                    }));
                }
                h.prototype = {
                    constructor: h,
                    $new: function(e, t) {
                        var r;
                        return t = t || this, e ? (r = new h(), r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = n(this)), 
                        r = new this.$$ChildScope()), r.$parent = t, r.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = r, 
                        t.$$childTail = r) : t.$$childHead = t.$$childTail = r, (e || t != this) && r.$on("$destroy", f), 
                        r;
                    },
                    $watch: function(n, e, t, r) {
                        var i = u(n);
                        if (i.$$watchDelegate) return i.$$watchDelegate(this, e, t, i, n);
                        var o = this, a = o.$$watchers, c = {
                            fn: e,
                            last: b,
                            get: i,
                            exp: r || n,
                            eq: !!t
                        };
                        return s = null, k(e) || (c.fn = p), a || (a = o.$$watchers = []), a.unshift(c), 
                        y(this, 1), function() {
                            q(a, c) >= 0 && y(o, -1), s = null;
                        };
                    },
                    $watchGroup: function(n, e) {
                        function t() {
                            c = !1, u ? (u = !1, e(o, o, s)) : e(o, i, s);
                        }
                        var i = new Array(n.length), o = new Array(n.length), a = [], s = this, c = !1, u = !0;
                        if (!n.length) {
                            var l = !0;
                            return s.$evalAsync(function() {
                                l && e(o, o, s);
                            }), function() {
                                l = !1;
                            };
                        }
                        return 1 === n.length ? this.$watch(n[0], function(n, t, r) {
                            o[0] = n, i[0] = t, e(o, n === t ? o : i, r);
                        }) : (r(n, function(n, e) {
                            var r = s.$watch(n, function(n, r) {
                                o[e] = n, i[e] = r, c || (c = !0, s.$evalAsync(t));
                            });
                            a.push(r);
                        }), function() {
                            for (;a.length; ) a.shift()();
                        });
                    },
                    $watchCollection: function(n, e) {
                        function r(n) {
                            o = n;
                            var e, r, i, s, c;
                            if (!v(o)) {
                                if ($(o)) if (t(o)) {
                                    a !== p && (a = p, m = a.length = 0, f++), e = o.length, m !== e && (f++, a.length = m = e);
                                    for (var u = 0; u < e; u++) c = a[u], s = o[u], i = c !== c && s !== s, i || c === s || (f++, 
                                    a[u] = s);
                                } else {
                                    a !== h && (a = h = {}, m = 0, f++), e = 0;
                                    for (r in o) Nr.call(o, r) && (e++, s = o[r], c = a[r], r in a ? (i = c !== c && s !== s, 
                                    i || c === s || (f++, a[r] = s)) : (m++, a[r] = s, f++));
                                    if (m > e) {
                                        f++;
                                        for (r in a) Nr.call(o, r) || (m--, delete a[r]);
                                    }
                                } else a !== o && (a = o, f++);
                                return f;
                            }
                        }
                        function i() {
                            if (g ? (g = !1, e(o, o, c)) : e(o, s, c), l) if ($(o)) if (t(o)) {
                                s = new Array(o.length);
                                for (var n = 0; n < o.length; n++) s[n] = o[n];
                            } else {
                                s = {};
                                for (var r in o) Nr.call(o, r) && (s[r] = o[r]);
                            } else s = o;
                        }
                        r.$stateful = !0;
                        var o, a, s, c = this, l = e.length > 1, f = 0, d = u(n, r), p = [], h = {}, g = !0, m = 0;
                        return this.$watch(d, i);
                    },
                    $digest: function() {
                        var n, t, r, a, u, f, d, p, h, v, y, $, w = i, I = this, E = [];
                        g("$digest"), l.$$checkUrlChange(), this === C && null !== c && (l.defer.cancel(c), 
                        x()), s = null;
                        do {
                            p = !1, v = I;
                            for (var A = 0; A < S.length; A++) {
                                try {
                                    $ = S[A], $.scope.$eval($.expression, $.locals);
                                } catch (O) {
                                    e(O);
                                }
                                s = null;
                            }
                            S.length = 0;
                            n: do {
                                if (f = v.$$watchers) for (d = f.length; d--; ) try {
                                    if (n = f[d]) if (u = n.get, (t = u(v)) === (r = n.last) || (n.eq ? B(t, r) : "number" == typeof t && "number" == typeof r && isNaN(t) && isNaN(r))) {
                                        if (n === s) {
                                            p = !1;
                                            break n;
                                        }
                                    } else p = !0, s = n, n.last = n.eq ? R(t, null) : t, a = n.fn, a(t, r === b ? t : r, v), 
                                    w < 5 && (y = 4 - w, E[y] || (E[y] = []), E[y].push({
                                        msg: k(n.exp) ? "fn: " + (n.exp.name || n.exp.toString()) : n.exp,
                                        newVal: t,
                                        oldVal: r
                                    }));
                                } catch (O) {
                                    e(O);
                                }
                                if (!(h = v.$$watchersCount && v.$$childHead || v !== I && v.$$nextSibling)) for (;v !== I && !(h = v.$$nextSibling); ) v = v.$parent;
                            } while (v = h);
                            if ((p || S.length) && !w--) throw m(), o("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", i, E);
                        } while (p || S.length);
                        for (m(); T < _.length; ) try {
                            _[T++]();
                        } catch (O) {
                            e(O);
                        }
                        _.length = T = 0;
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var n = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this === C && l.$$applicationDestroyed(), 
                            y(this, -this.$$watchersCount);
                            for (var e in this.$$listenerCount) w(this, this.$$listenerCount[e], e);
                            n && n.$$childHead == this && (n.$$childHead = this.$$nextSibling), n && n.$$childTail == this && (n.$$childTail = this.$$prevSibling), 
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, 
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return p;
                            }, this.$$listeners = {}, this.$$nextSibling = null, d(this);
                        }
                    },
                    $eval: function(n, e) {
                        return u(n)(this, e);
                    },
                    $evalAsync: function(n, e) {
                        C.$$phase || S.length || l.defer(function() {
                            S.length && C.$digest();
                        }), S.push({
                            scope: this,
                            expression: u(n),
                            locals: e
                        });
                    },
                    $$postDigest: function(n) {
                        _.push(n);
                    },
                    $apply: function(n) {
                        try {
                            g("$apply");
                            try {
                                return this.$eval(n);
                            } finally {
                                m();
                            }
                        } catch (t) {
                            e(t);
                        } finally {
                            try {
                                C.$digest();
                            } catch (t) {
                                throw e(t), t;
                            }
                        }
                    },
                    $applyAsync: function(n) {
                        function e() {
                            t.$eval(n);
                        }
                        var t = this;
                        n && E.push(e), n = u(n), I();
                    },
                    $on: function(n, e) {
                        var t = this.$$listeners[n];
                        t || (this.$$listeners[n] = t = []), t.push(e);
                        var r = this;
                        do r.$$listenerCount[n] || (r.$$listenerCount[n] = 0), r.$$listenerCount[n]++; while (r = r.$parent);
                        var i = this;
                        return function() {
                            var r = t.indexOf(e);
                            r !== -1 && (t[r] = null, w(i, 1, n));
                        };
                    },
                    $emit: function(n, t) {
                        var r, i, o, a = [], s = this, c = !1, u = {
                            name: n,
                            targetScope: s,
                            stopPropagation: function() {
                                c = !0;
                            },
                            preventDefault: function() {
                                u.defaultPrevented = !0;
                            },
                            defaultPrevented: !1
                        }, l = F([ u ], arguments, 1);
                        do {
                            for (r = s.$$listeners[n] || a, u.currentScope = s, i = 0, o = r.length; i < o; i++) if (r[i]) try {
                                r[i].apply(null, l);
                            } catch (f) {
                                e(f);
                            } else r.splice(i, 1), i--, o--;
                            if (c) return u.currentScope = null, u;
                            s = s.$parent;
                        } while (s);
                        return u.currentScope = null, u;
                    },
                    $broadcast: function(n, t) {
                        var r = this, i = r, o = r, a = {
                            name: n,
                            targetScope: r,
                            preventDefault: function() {
                                a.defaultPrevented = !0;
                            },
                            defaultPrevented: !1
                        };
                        if (!r.$$listenerCount[n]) return a;
                        for (var s, c, u, l = F([ a ], arguments, 1); i = o; ) {
                            for (a.currentScope = i, s = i.$$listeners[n] || [], c = 0, u = s.length; c < u; c++) if (s[c]) try {
                                s[c].apply(null, l);
                            } catch (f) {
                                e(f);
                            } else s.splice(c, 1), c--, u--;
                            if (!(o = i.$$listenerCount[n] && i.$$childHead || i !== r && i.$$nextSibling)) for (;i !== r && !(o = i.$$nextSibling); ) i = i.$parent;
                        }
                        return a.currentScope = null, a;
                    }
                };
                var C = new h(), S = C.$$asyncQueue = [], _ = C.$$postDigestQueue = [], E = C.$$applyAsyncQueue = [], T = 0;
                return C;
            } ];
        }
        function Ct() {
            var n = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(e) {
                return y(e) ? (n = e, this) : n;
            }, this.imgSrcSanitizationWhitelist = function(n) {
                return y(n) ? (e = n, this) : e;
            }, this.$get = function() {
                return function(t, r) {
                    var i, o = r ? e : n;
                    return i = Pt(t).href, "" === i || i.match(o) ? t : "unsafe:" + i;
                };
            };
        }
        function St(n) {
            if ("self" === n) return n;
            if (b(n)) {
                if (n.indexOf("***") > -1) throw xo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", n);
                return n = Zr(n).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + n + "$");
            }
            if (C(n)) return new RegExp("^" + n.source + "$");
            throw xo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
        }
        function _t(n) {
            var e = [];
            return y(n) && r(n, function(n) {
                e.push(St(n));
            }), e;
        }
        function Et() {
            this.SCE_CONTEXTS = Io;
            var n = [ "self" ], e = [];
            this.resourceUrlWhitelist = function(e) {
                return arguments.length && (n = _t(e)), n;
            }, this.resourceUrlBlacklist = function(n) {
                return arguments.length && (e = _t(n)), e;
            }, this.$get = [ "$injector", function(t) {
                function r(n, e) {
                    return "self" === n ? Lt(e) : !!n.exec(e.href);
                }
                function i(t) {
                    var i, o, a = Pt(t.toString()), s = !1;
                    for (i = 0, o = n.length; i < o; i++) if (r(n[i], a)) {
                        s = !0;
                        break;
                    }
                    if (s) for (i = 0, o = e.length; i < o; i++) if (r(e[i], a)) {
                        s = !1;
                        break;
                    }
                    return s;
                }
                function o(n) {
                    var e = function(n) {
                        this.$$unwrapTrustedValue = function() {
                            return n;
                        };
                    };
                    return n && (e.prototype = new n()), e.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue();
                    }, e.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString();
                    }, e;
                }
                function a(n, e) {
                    var t = f.hasOwnProperty(n) ? f[n] : null;
                    if (!t) throw xo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", n, e);
                    if (null === e || v(e) || "" === e) return e;
                    if ("string" != typeof e) throw xo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", n);
                    return new t(e);
                }
                function s(n) {
                    return n instanceof l ? n.$$unwrapTrustedValue() : n;
                }
                function c(n, e) {
                    if (null === e || v(e) || "" === e) return e;
                    var t = f.hasOwnProperty(n) ? f[n] : null;
                    if (t && e instanceof t) return e.$$unwrapTrustedValue();
                    if (n === Io.RESOURCE_URL) {
                        if (i(e)) return e;
                        throw xo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString());
                    }
                    if (n === Io.HTML) return u(e);
                    throw xo("unsafe", "Attempting to use an unsafe value in a safe context.");
                }
                var u = function(n) {
                    throw xo("unsafe", "Attempting to use an unsafe value in a safe context.");
                };
                t.has("$sanitize") && (u = t.get("$sanitize"));
                var l = o(), f = {};
                return f[Io.HTML] = o(l), f[Io.CSS] = o(l), f[Io.URL] = o(l), f[Io.JS] = o(l), f[Io.RESOURCE_URL] = o(f[Io.URL]), 
                {
                    trustAs: a,
                    getTrusted: c,
                    valueOf: s
                };
            } ];
        }
        function Tt() {
            var n = !0;
            this.enabled = function(e) {
                return arguments.length && (n = !!e), n;
            }, this.$get = [ "$parse", "$sceDelegate", function(e, t) {
                if (n && Dr < 8) throw xo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var i = vn(Io);
                i.isEnabled = function() {
                    return n;
                }, i.trustAs = t.trustAs, i.getTrusted = t.getTrusted, i.valueOf = t.valueOf, n || (i.trustAs = i.getTrusted = function(n, e) {
                    return e;
                }, i.valueOf = h), i.parseAs = function(n, t) {
                    var r = e(t);
                    return r.literal && r.constant ? r : e(t, function(e) {
                        return i.getTrusted(n, e);
                    });
                };
                var o = i.parseAs, a = i.getTrusted, s = i.trustAs;
                return r(Io, function(n, e) {
                    var t = jr(e);
                    i[xn("parse_as_" + t)] = function(e) {
                        return o(n, e);
                    }, i[xn("get_trusted_" + t)] = function(e) {
                        return a(n, e);
                    }, i[xn("trust_as_" + t)] = function(e) {
                        return s(n, e);
                    };
                }), i;
            } ];
        }
        function At() {
            this.$get = [ "$window", "$document", function(n, e) {
                var t, r, i = {}, o = n.chrome && n.chrome.app && n.chrome.app.runtime, a = !o && n.history && n.history.pushState, s = f((/android (\d+)/.exec(jr((n.navigator || {}).userAgent)) || [])[1]), c = /Boxee/i.test((n.navigator || {}).userAgent), u = e[0] || {}, l = /^(Moz|webkit|ms)(?=[A-Z])/, d = u.body && u.body.style, p = !1, h = !1;
                if (d) {
                    for (var g in d) if (r = l.exec(g)) {
                        t = r[0], t = t[0].toUpperCase() + t.substr(1);
                        break;
                    }
                    t || (t = "WebkitOpacity" in d && "webkit"), p = !!("transition" in d || t + "Transition" in d), 
                    h = !!("animation" in d || t + "Animation" in d), !s || p && h || (p = b(d.webkitTransition), 
                    h = b(d.webkitAnimation));
                }
                return {
                    history: !(!a || s < 4 || c),
                    hasEvent: function(n) {
                        if ("input" === n && Dr <= 11) return !1;
                        if (v(i[n])) {
                            var e = u.createElement("div");
                            i[n] = "on" + n in e;
                        }
                        return i[n];
                    },
                    csp: Qr(),
                    vendorPrefix: t,
                    transitions: p,
                    animations: h,
                    android: s
                };
            } ];
        }
        function Ot() {
            var n;
            this.httpOptions = function(e) {
                return e ? (n = e, this) : n;
            }, this.$get = [ "$templateCache", "$http", "$q", "$sce", function(e, t, r, i) {
                function o(a, s) {
                    function c(n) {
                        if (!s) throw ko("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, n.status, n.statusText);
                        return r.reject(n);
                    }
                    o.totalPendingRequests++, b(a) && !v(e.get(a)) || (a = i.getTrustedResourceUrl(a));
                    var l = t.defaults && t.defaults.transformResponse;
                    return Yr(l) ? l = l.filter(function(n) {
                        return n !== _e;
                    }) : l === _e && (l = null), t.get(a, u({
                        cache: e,
                        transformResponse: l
                    }, n))["finally"](function() {
                        o.totalPendingRequests--;
                    }).then(function(n) {
                        return e.put(a, n.data), n.data;
                    }, c);
                }
                return o.totalPendingRequests = 0, o;
            } ];
        }
        function Nt() {
            this.$get = [ "$rootScope", "$browser", "$location", function(n, e, t) {
                var i = {};
                return i.findBindings = function(n, e, t) {
                    var i = n.getElementsByClassName("ng-binding"), o = [];
                    return r(i, function(n) {
                        var i = Gr.element(n).data("$binding");
                        i && r(i, function(r) {
                            if (t) {
                                var i = new RegExp("(^|\\s)" + Zr(e) + "(\\s|\\||$)");
                                i.test(r) && o.push(n);
                            } else r.indexOf(e) != -1 && o.push(n);
                        });
                    }), o;
                }, i.findModels = function(n, e, t) {
                    for (var r = [ "ng-", "data-ng-", "ng\\:" ], i = 0; i < r.length; ++i) {
                        var o = t ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + e + '"]', s = n.querySelectorAll(a);
                        if (s.length) return s;
                    }
                }, i.getLocation = function() {
                    return t.url();
                }, i.setLocation = function(e) {
                    e !== t.url() && (t.url(e), n.$digest());
                }, i.whenStable = function(n) {
                    e.notifyWhenNoOutstandingRequests(n);
                }, i;
            } ];
        }
        function jt() {
            this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(n, e, t, r, i) {
                function o(o, s, c) {
                    k(o) || (c = s, s = o, o = p);
                    var u, l = U(arguments, 3), f = y(c) && !c, d = (f ? r : t).defer(), h = d.promise;
                    return u = e.defer(function() {
                        try {
                            d.resolve(o.apply(null, l));
                        } catch (e) {
                            d.reject(e), i(e);
                        } finally {
                            delete a[h.$$timeoutId];
                        }
                        f || n.$apply();
                    }, s), h.$$timeoutId = u, a[u] = d, h;
                }
                var a = {};
                return o.cancel = function(n) {
                    return !!(n && n.$$timeoutId in a) && (a[n.$$timeoutId].reject("canceled"), delete a[n.$$timeoutId], 
                    e.defer.cancel(n.$$timeoutId));
                }, o;
            } ];
        }
        function Pt(n) {
            var e = n;
            return Dr && (Co.setAttribute("href", e), e = Co.href), Co.setAttribute("href", e), 
            {
                href: Co.href,
                protocol: Co.protocol ? Co.protocol.replace(/:$/, "") : "",
                host: Co.host,
                search: Co.search ? Co.search.replace(/^\?/, "") : "",
                hash: Co.hash ? Co.hash.replace(/^#/, "") : "",
                hostname: Co.hostname,
                port: Co.port,
                pathname: "/" === Co.pathname.charAt(0) ? Co.pathname : "/" + Co.pathname
            };
        }
        function Lt(n) {
            var e = b(n) ? Pt(n) : n;
            return e.protocol === So.protocol && e.host === So.host;
        }
        function Mt() {
            this.$get = g(n);
        }
        function Dt(n) {
            function e(n) {
                try {
                    return decodeURIComponent(n);
                } catch (e) {
                    return n;
                }
            }
            var t = n[0] || {}, r = {}, i = "";
            return function() {
                var n, o, a, s, c, u = t.cookie || "";
                if (u !== i) for (i = u, n = i.split("; "), r = {}, a = 0; a < n.length; a++) o = n[a], 
                s = o.indexOf("="), s > 0 && (c = e(o.substring(0, s)), v(r[c]) && (r[c] = e(o.substring(s + 1))));
                return r;
            };
        }
        function qt() {
            this.$get = Dt;
        }
        function Rt(n) {
            function e(i, o) {
                if ($(i)) {
                    var a = {};
                    return r(i, function(n, t) {
                        a[t] = e(t, n);
                    }), a;
                }
                return n.factory(i + t, o);
            }
            var t = "Filter";
            this.register = e, this.$get = [ "$injector", function(n) {
                return function(e) {
                    return n.get(e + t);
                };
            } ], e("currency", Vt), e("date", or), e("filter", Bt), e("json", ar), e("limitTo", sr), 
            e("lowercase", jo), e("number", zt), e("orderBy", ur), e("uppercase", Po);
        }
        function Bt() {
            return function(n, r, i, o) {
                if (!t(n)) {
                    if (null == n) return n;
                    throw e("filter")("notarray", "Expected array but received: {0}", n);
                }
                o = o || "$";
                var a, s, c = Ht(r);
                switch (c) {
                  case "function":
                    a = r;
                    break;

                  case "boolean":
                  case "null":
                  case "number":
                  case "string":
                    s = !0;

                  case "object":
                    a = Ft(r, i, o, s);
                    break;

                  default:
                    return n;
                }
                return Array.prototype.filter.call(n, a);
            };
        }
        function Ft(n, e, t, r) {
            var i, o = $(n) && t in n;
            return e === !0 ? e = B : k(e) || (e = function(n, e) {
                return !v(n) && (null === n || null === e ? n === e : !($(e) || $(n) && !m(n)) && (n = jr("" + n), 
                e = jr("" + e), n.indexOf(e) !== -1));
            }), i = function(i) {
                return o && !$(i) ? Ut(i, n[t], e, t, !1) : Ut(i, n, e, t, r);
            };
        }
        function Ut(n, e, t, r, i, o) {
            var a = Ht(n), s = Ht(e);
            if ("string" === s && "!" === e.charAt(0)) return !Ut(n, e.substring(1), t, r, i);
            if (Yr(n)) return n.some(function(n) {
                return Ut(n, e, t, r, i);
            });
            switch (a) {
              case "object":
                var c;
                if (i) {
                    for (c in n) if ("$" !== c.charAt(0) && Ut(n[c], e, t, r, !0)) return !0;
                    return !o && Ut(n, e, t, r, !1);
                }
                if ("object" === s) {
                    for (c in e) {
                        var u = e[c];
                        if (!k(u) && !v(u)) {
                            var l = c === r, f = l ? n : n[c];
                            if (!Ut(f, u, t, r, l, l)) return !1;
                        }
                    }
                    return !0;
                }
                return t(n, e);

              case "function":
                return !1;

              default:
                return t(n, e);
            }
        }
        function Ht(n) {
            return null === n ? "null" : typeof n;
        }
        function Vt(n) {
            var e = n.NUMBER_FORMATS;
            return function(n, t, r) {
                return v(t) && (t = e.CURRENCY_SYM), v(r) && (r = e.PATTERNS[1].maxFrac), null == n ? n : Xt(n, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, t);
            };
        }
        function zt(n) {
            var e = n.NUMBER_FORMATS;
            return function(n, t) {
                return null == n ? n : Xt(n, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, t);
            };
        }
        function Wt(n) {
            var e, t, r, i, o, a = 0;
            for ((t = n.indexOf(Eo)) > -1 && (n = n.replace(Eo, "")), (r = n.search(/e/i)) > 0 ? (t < 0 && (t = r), 
            t += +n.slice(r + 1), n = n.substring(0, r)) : t < 0 && (t = n.length), r = 0; n.charAt(r) == To; r++) ;
            if (r == (o = n.length)) e = [ 0 ], t = 1; else {
                for (o--; n.charAt(o) == To; ) o--;
                for (t -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +n.charAt(r);
            }
            return t > _o && (e = e.splice(0, _o - 1), a = t - 1, t = 1), {
                d: e,
                e: a,
                i: t
            };
        }
        function Gt(n, e, t, r) {
            var i = n.d, o = i.length - n.i;
            e = v(e) ? Math.min(Math.max(t, o), r) : +e;
            var a = e + n.i, s = i[a];
            if (a > 0) {
                i.splice(Math.max(n.i, a));
                for (var c = a; c < i.length; c++) i[c] = 0;
            } else {
                o = Math.max(0, o), n.i = 1, i.length = Math.max(1, a = e + 1), i[0] = 0;
                for (var u = 1; u < a; u++) i[u] = 0;
            }
            if (s >= 5) if (a - 1 < 0) {
                for (var l = 0; l > a; l--) i.unshift(0), n.i++;
                i.unshift(1), n.i++;
            } else i[a - 1]++;
            for (;o < Math.max(0, e); o++) i.push(0);
            var f = i.reduceRight(function(n, e, t, r) {
                return e += n, r[t] = e % 10, Math.floor(e / 10);
            }, 0);
            f && (i.unshift(f), n.i++);
        }
        function Xt(n, e, t, r, i) {
            if (!b(n) && !x(n) || isNaN(n)) return "";
            var o, a = !isFinite(n), s = !1, c = Math.abs(n) + "", u = "";
            if (a) u = "∞"; else {
                o = Wt(c), Gt(o, i, e.minFrac, e.maxFrac);
                var l = o.d, f = o.i, d = o.e, p = [];
                for (s = l.reduce(function(n, e) {
                    return n && !e;
                }, !0); f < 0; ) l.unshift(0), f++;
                f > 0 ? p = l.splice(f, l.length) : (p = l, l = [ 0 ]);
                var h = [];
                for (l.length >= e.lgSize && h.unshift(l.splice(-e.lgSize, l.length).join("")); l.length > e.gSize; ) h.unshift(l.splice(-e.gSize, l.length).join(""));
                l.length && h.unshift(l.join("")), u = h.join(t), p.length && (u += r + p.join("")), 
                d && (u += "e+" + d);
            }
            return n < 0 && !s ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf;
        }
        function Yt(n, e, t, r) {
            var i = "";
            for ((n < 0 || r && n <= 0) && (r ? n = -n + 1 : (n = -n, i = "-")), n = "" + n; n.length < e; ) n = To + n;
            return t && (n = n.substr(n.length - e)), i + n;
        }
        function Jt(n, e, t, r, i) {
            return t = t || 0, function(o) {
                var a = o["get" + n]();
                return (t > 0 || a > -t) && (a += t), 0 === a && t == -12 && (a = 12), Yt(a, e, r, i);
            };
        }
        function Kt(n, e, t) {
            return function(r, i) {
                var o = r["get" + n](), a = (t ? "STANDALONE" : "") + (e ? "SHORT" : ""), s = Pr(a + n);
                return i[s][o];
            };
        }
        function Zt(n, e, t) {
            var r = -1 * t, i = r >= 0 ? "+" : "";
            return i += Yt(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Yt(Math.abs(r % 60), 2);
        }
        function Qt(n) {
            var e = new Date(n, 0, 1).getDay();
            return new Date(n, 0, (e <= 4 ? 5 : 12) - e);
        }
        function nr(n) {
            return new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay()));
        }
        function er(n) {
            return function(e) {
                var t = Qt(e.getFullYear()), r = nr(e), i = +r - +t, o = 1 + Math.round(i / 6048e5);
                return Yt(o, n);
            };
        }
        function tr(n, e) {
            return n.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1];
        }
        function rr(n, e) {
            return n.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1];
        }
        function ir(n, e) {
            return n.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1];
        }
        function or(n) {
            function e(n) {
                var e;
                if (e = n.match(t)) {
                    var r = new Date(0), i = 0, o = 0, a = e[8] ? r.setUTCFullYear : r.setFullYear, s = e[8] ? r.setUTCHours : r.setHours;
                    e[9] && (i = f(e[9] + e[10]), o = f(e[9] + e[11])), a.call(r, f(e[1]), f(e[2]) - 1, f(e[3]));
                    var c = f(e[4] || 0) - i, u = f(e[5] || 0) - o, l = f(e[6] || 0), d = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                    return s.call(r, c, u, l, d), r;
                }
                return n;
            }
            var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(t, i, o) {
                var a, s, c = "", u = [];
                if (i = i || "mediumDate", i = n.DATETIME_FORMATS[i] || i, b(t) && (t = No.test(t) ? f(t) : e(t)), 
                x(t) && (t = new Date(t)), !I(t) || !isFinite(t.getTime())) return t;
                for (;i; ) s = Oo.exec(i), s ? (u = F(u, s, 1), i = u.pop()) : (u.push(i), i = null);
                var l = t.getTimezoneOffset();
                return o && (l = G(o, l), t = Y(t, o, !0)), r(u, function(e) {
                    a = Ao[e], c += a ? a(t, n.DATETIME_FORMATS, l) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                }), c;
            };
        }
        function ar() {
            return function(n, e) {
                return v(e) && (e = 2), z(n, e);
            };
        }
        function sr() {
            return function(n, e, r) {
                return e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : f(e), isNaN(e) ? n : (x(n) && (n = n.toString()), 
                t(n) ? (r = !r || isNaN(r) ? 0 : f(r), r = r < 0 ? Math.max(0, n.length + r) : r, 
                e >= 0 ? cr(n, r, r + e) : 0 === r ? cr(n, e, n.length) : cr(n, Math.max(0, r + e), r)) : n);
            };
        }
        function cr(n, e, t) {
            return b(n) ? n.slice(e, t) : Fr.call(n, e, t);
        }
        function ur(n) {
            function r(e) {
                return e.map(function(e) {
                    var t = 1, r = h;
                    if (k(e)) r = e; else if (b(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (t = "-" == e.charAt(0) ? -1 : 1, 
                    e = e.substring(1)), "" !== e && (r = n(e), r.constant))) {
                        var i = r();
                        r = function(n) {
                            return n[i];
                        };
                    }
                    return {
                        get: r,
                        descending: t
                    };
                });
            }
            function i(n) {
                switch (typeof n) {
                  case "number":
                  case "boolean":
                  case "string":
                    return !0;

                  default:
                    return !1;
                }
            }
            function o(n) {
                return k(n.valueOf) && (n = n.valueOf(), i(n)) ? n : m(n) && (n = n.toString(), 
                i(n)) ? n : n;
            }
            function a(n, e) {
                var t = typeof n;
                return null === n ? (t = "string", n = "null") : "object" === t && (n = o(n)), {
                    value: n,
                    type: t,
                    index: e
                };
            }
            function s(n, e) {
                var t = 0, r = n.type, i = e.type;
                if (r === i) {
                    var o = n.value, a = e.value;
                    "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && ($(o) && (o = n.index), 
                    $(a) && (a = e.index)), o !== a && (t = o < a ? -1 : 1);
                } else t = r < i ? -1 : 1;
                return t;
            }
            return function(n, i, o, c) {
                function u(n, e) {
                    return {
                        value: n,
                        tieBreaker: {
                            value: e,
                            type: "number",
                            index: e
                        },
                        predicateValues: f.map(function(t) {
                            return a(t.get(n), e);
                        })
                    };
                }
                function l(n, e) {
                    for (var t = 0, r = f.length; t < r; t++) {
                        var i = p(n.predicateValues[t], e.predicateValues[t]);
                        if (i) return i * f[t].descending * d;
                    }
                    return p(n.tieBreaker, e.tieBreaker) * d;
                }
                if (null == n) return n;
                if (!t(n)) throw e("orderBy")("notarray", "Expected array but received: {0}", n);
                Yr(i) || (i = [ i ]), 0 === i.length && (i = [ "+" ]);
                var f = r(i), d = o ? -1 : 1, p = k(c) ? c : s, h = Array.prototype.map.call(n, u);
                return h.sort(l), n = h.map(function(n) {
                    return n.value;
                });
            };
        }
        function lr(n) {
            return k(n) && (n = {
                link: n
            }), n.restrict = n.restrict || "AC", g(n);
        }
        function fr(n, e) {
            n.$name = e;
        }
        function dr(n, e, t, i, o) {
            var a = this, s = [];
            a.$error = {}, a.$$success = {}, a.$pending = void 0, a.$name = o(e.name || e.ngForm || "")(t), 
            a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, 
            a.$$parentForm = Do, a.$rollbackViewValue = function() {
                r(s, function(n) {
                    n.$rollbackViewValue();
                });
            }, a.$commitViewValue = function() {
                r(s, function(n) {
                    n.$commitViewValue();
                });
            }, a.$addControl = function(n) {
                dn(n.$name, "input"), s.push(n), n.$name && (a[n.$name] = n), n.$$parentForm = a;
            }, a.$$renameControl = function(n, e) {
                var t = n.$name;
                a[t] === n && delete a[t], a[e] = n, n.$name = e;
            }, a.$removeControl = function(n) {
                n.$name && a[n.$name] === n && delete a[n.$name], r(a.$pending, function(e, t) {
                    a.$setValidity(t, null, n);
                }), r(a.$error, function(e, t) {
                    a.$setValidity(t, null, n);
                }), r(a.$$success, function(e, t) {
                    a.$setValidity(t, null, n);
                }), q(s, n), n.$$parentForm = Do;
            }, _r({
                ctrl: this,
                $element: n,
                set: function(n, e, t) {
                    var r = n[e];
                    if (r) {
                        var i = r.indexOf(t);
                        i === -1 && r.push(t);
                    } else n[e] = [ t ];
                },
                unset: function(n, e, t) {
                    var r = n[e];
                    r && (q(r, t), 0 === r.length && delete n[e]);
                },
                $animate: i
            }), a.$setDirty = function() {
                i.removeClass(n, ba), i.addClass(n, xa), a.$dirty = !0, a.$pristine = !1, a.$$parentForm.$setDirty();
            }, a.$setPristine = function() {
                i.setClass(n, ba, xa + " " + qo), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, 
                r(s, function(n) {
                    n.$setPristine();
                });
            }, a.$setUntouched = function() {
                r(s, function(n) {
                    n.$setUntouched();
                });
            }, a.$setSubmitted = function() {
                i.addClass(n, qo), a.$submitted = !0, a.$$parentForm.$setSubmitted();
            };
        }
        function pr(n) {
            n.$formatters.push(function(e) {
                return n.$isEmpty(e) ? e : e.toString();
            });
        }
        function hr(n, e, t, r, i, o) {
            gr(n, e, t, r, i, o), pr(r);
        }
        function gr(n, e, t, r, i, o) {
            var a = jr(e[0].type);
            if (!i.android) {
                var s = !1;
                e.on("compositionstart", function() {
                    s = !0;
                }), e.on("compositionend", function() {
                    s = !1, u();
                });
            }
            var c, u = function(n) {
                if (c && (o.defer.cancel(c), c = null), !s) {
                    var i = e.val(), u = n && n.type;
                    "password" === a || t.ngTrim && "false" === t.ngTrim || (i = Kr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u);
                }
            };
            if (i.hasEvent("input")) e.on("input", u); else {
                var l = function(n, e, t) {
                    c || (c = o.defer(function() {
                        c = null, e && e.value === t || u(n);
                    }));
                };
                e.on("keydown", function(n) {
                    var e = n.keyCode;
                    91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || l(n, this, this.value);
                }), i.hasEvent("paste") && e.on("paste cut", l);
            }
            e.on("change", u), Zo[a] && r.$$hasNativeValidators && a === t.type && e.on(Ko, function(n) {
                if (!c) {
                    var e = this[Or], t = e.badInput, r = e.typeMismatch;
                    c = o.defer(function() {
                        c = null, e.badInput === t && e.typeMismatch === r || u(n);
                    });
                }
            }), r.$render = function() {
                var n = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                e.val() !== n && e.val(n);
            };
        }
        function mr(n, e) {
            if (I(n)) return n;
            if (b(n)) {
                Xo.lastIndex = 0;
                var t = Xo.exec(n);
                if (t) {
                    var r = +t[1], i = +t[2], o = 0, a = 0, s = 0, c = 0, u = Qt(r), l = 7 * (i - 1);
                    return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), c = e.getMilliseconds()), 
                    new Date(r, 0, u.getDate() + l, o, a, s, c);
                }
            }
            return NaN;
        }
        function vr(n, e) {
            return function(t, i) {
                var o, a;
                if (I(t)) return t;
                if (b(t)) {
                    if ('"' == t.charAt(0) && '"' == t.charAt(t.length - 1) && (t = t.substring(1, t.length - 1)), 
                    Uo.test(t)) return new Date(t);
                    if (n.lastIndex = 0, o = n.exec(t)) return o.shift(), a = i ? {
                        yyyy: i.getFullYear(),
                        MM: i.getMonth() + 1,
                        dd: i.getDate(),
                        HH: i.getHours(),
                        mm: i.getMinutes(),
                        ss: i.getSeconds(),
                        sss: i.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, r(o, function(n, t) {
                        t < e.length && (a[e[t]] = +n);
                    }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0);
                }
                return NaN;
            };
        }
        function yr(n, e, t, r) {
            return function(i, o, a, s, c, u, l) {
                function f(n) {
                    return n && !(n.getTime && n.getTime() !== n.getTime());
                }
                function d(n) {
                    return y(n) && !I(n) ? t(n) || void 0 : n;
                }
                $r(i, o, a, s), gr(i, o, a, s, c, u);
                var p, h = s && s.$options && s.$options.timezone;
                if (s.$$parserName = n, s.$parsers.push(function(n) {
                    if (s.$isEmpty(n)) return null;
                    if (e.test(n)) {
                        var r = t(n, p);
                        return h && (r = Y(r, h)), r;
                    }
                }), s.$formatters.push(function(n) {
                    if (n && !I(n)) throw Ea("datefmt", "Expected `{0}` to be a date", n);
                    return f(n) ? (p = n, p && h && (p = Y(p, h, !0)), l("date")(n, r, h)) : (p = null, 
                    "");
                }), y(a.min) || a.ngMin) {
                    var g;
                    s.$validators.min = function(n) {
                        return !f(n) || v(g) || t(n) >= g;
                    }, a.$observe("min", function(n) {
                        g = d(n), s.$validate();
                    });
                }
                if (y(a.max) || a.ngMax) {
                    var m;
                    s.$validators.max = function(n) {
                        return !f(n) || v(m) || t(n) <= m;
                    }, a.$observe("max", function(n) {
                        m = d(n), s.$validate();
                    });
                }
            };
        }
        function $r(n, e, t, r) {
            var i = e[0], o = r.$$hasNativeValidators = $(i.validity);
            o && r.$parsers.push(function(n) {
                var t = e.prop(Or) || {};
                return t.badInput || t.typeMismatch ? void 0 : n;
            });
        }
        function wr(n, e, t, r, i, o) {
            if ($r(n, e, t, r), gr(n, e, t, r, i, o), r.$$parserName = "number", r.$parsers.push(function(n) {
                return r.$isEmpty(n) ? null : zo.test(n) ? parseFloat(n) : void 0;
            }), r.$formatters.push(function(n) {
                if (!r.$isEmpty(n)) {
                    if (!x(n)) throw Ea("numfmt", "Expected `{0}` to be a number", n);
                    n = n.toString();
                }
                return n;
            }), y(t.min) || t.ngMin) {
                var a;
                r.$validators.min = function(n) {
                    return r.$isEmpty(n) || v(a) || n >= a;
                }, t.$observe("min", function(n) {
                    y(n) && !x(n) && (n = parseFloat(n)), a = x(n) && !isNaN(n) ? n : void 0, r.$validate();
                });
            }
            if (y(t.max) || t.ngMax) {
                var s;
                r.$validators.max = function(n) {
                    return r.$isEmpty(n) || v(s) || n <= s;
                }, t.$observe("max", function(n) {
                    y(n) && !x(n) && (n = parseFloat(n)), s = x(n) && !isNaN(n) ? n : void 0, r.$validate();
                });
            }
        }
        function br(n, e, t, r, i, o) {
            gr(n, e, t, r, i, o), pr(r), r.$$parserName = "url", r.$validators.url = function(n, e) {
                var t = n || e;
                return r.$isEmpty(t) || Ho.test(t);
            };
        }
        function xr(n, e, t, r, i, o) {
            gr(n, e, t, r, i, o), pr(r), r.$$parserName = "email", r.$validators.email = function(n, e) {
                var t = n || e;
                return r.$isEmpty(t) || Vo.test(t);
            };
        }
        function Ir(n, e, t, r) {
            v(t.name) && e.attr("name", a());
            var i = function(n) {
                e[0].checked && r.$setViewValue(t.value, n && n.type);
            };
            e.on("click", i), r.$render = function() {
                var n = t.value;
                e[0].checked = n == r.$viewValue;
            }, t.$observe("value", r.$render);
        }
        function kr(n, e, t, r, i) {
            var o;
            if (y(r)) {
                if (o = n(r), !o.constant) throw Ea("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", t, r);
                return o(e);
            }
            return i;
        }
        function Cr(n, e, t, r, i, o, a, s) {
            var c = kr(s, n, "ngTrueValue", t.ngTrueValue, !0), u = kr(s, n, "ngFalseValue", t.ngFalseValue, !1), l = function(n) {
                r.$setViewValue(e[0].checked, n && n.type);
            };
            e.on("click", l), r.$render = function() {
                e[0].checked = r.$viewValue;
            }, r.$isEmpty = function(n) {
                return n === !1;
            }, r.$formatters.push(function(n) {
                return B(n, c);
            }), r.$parsers.push(function(n) {
                return n ? c : u;
            });
        }
        function Sr(n, e) {
            return n = "ngClass" + n, [ "$animate", function(t) {
                function i(n, e) {
                    var t = [];
                    n: for (var r = 0; r < n.length; r++) {
                        for (var i = n[r], o = 0; o < e.length; o++) if (i == e[o]) continue n;
                        t.push(i);
                    }
                    return t;
                }
                function o(n) {
                    var e = [];
                    return Yr(n) ? (r(n, function(n) {
                        e = e.concat(o(n));
                    }), e) : b(n) ? n.split(" ") : $(n) ? (r(n, function(n, t) {
                        n && (e = e.concat(t.split(" ")));
                    }), e) : n;
                }
                return {
                    restrict: "AC",
                    link: function(a, s, c) {
                        function u(n) {
                            var e = f(n, 1);
                            c.$addClass(e);
                        }
                        function l(n) {
                            var e = f(n, -1);
                            c.$removeClass(e);
                        }
                        function f(n, e) {
                            var t = s.data("$classCounts") || gn(), i = [];
                            return r(n, function(n) {
                                (e > 0 || t[n]) && (t[n] = (t[n] || 0) + e, t[n] === +(e > 0) && i.push(n));
                            }), s.data("$classCounts", t), i.join(" ");
                        }
                        function d(n, e) {
                            var r = i(e, n), o = i(n, e);
                            r = f(r, 1), o = f(o, -1), r && r.length && t.addClass(s, r), o && o.length && t.removeClass(s, o);
                        }
                        function p(n) {
                            if (e === !0 || (1 & a.$index) === e) {
                                var t = o(n || []);
                                if (h) {
                                    if (!B(n, h)) {
                                        var r = o(h);
                                        d(r, t);
                                    }
                                } else u(t);
                            }
                            h = Yr(n) ? n.map(function(n) {
                                return vn(n);
                            }) : vn(n);
                        }
                        var h;
                        a.$watch(c[n], p, !0), c.$observe("class", function(e) {
                            p(a.$eval(c[n]));
                        }), "ngClass" !== n && a.$watch("$index", function(t, r) {
                            var i = 1 & t;
                            if (i !== (1 & r)) {
                                var s = o(a.$eval(c[n]));
                                i === e ? u(s) : l(s);
                            }
                        });
                    }
                };
            } ];
        }
        function _r(n) {
            function e(n, e, s) {
                v(e) ? t("$pending", n, s) : r("$pending", n, s), O(e) ? e ? (l(a.$error, n, s), 
                u(a.$$success, n, s)) : (u(a.$error, n, s), l(a.$$success, n, s)) : (l(a.$error, n, s), 
                l(a.$$success, n, s)), a.$pending ? (i(Ca, !0), a.$valid = a.$invalid = void 0, 
                o("", null)) : (i(Ca, !1), a.$valid = Er(a.$error), a.$invalid = !a.$valid, o("", a.$valid));
                var c;
                c = a.$pending && a.$pending[n] ? void 0 : !a.$error[n] && (!!a.$$success[n] || null), 
                o(n, c), a.$$parentForm.$setValidity(n, c, a);
            }
            function t(n, e, t) {
                a[n] || (a[n] = {}), u(a[n], e, t);
            }
            function r(n, e, t) {
                a[n] && l(a[n], e, t), Er(a[n]) && (a[n] = void 0);
            }
            function i(n, e) {
                e && !c[n] ? (f.addClass(s, n), c[n] = !0) : !e && c[n] && (f.removeClass(s, n), 
                c[n] = !1);
            }
            function o(n, e) {
                n = n ? "-" + cn(n, "-") : "", i($a + n, e === !0), i(wa + n, e === !1);
            }
            var a = n.ctrl, s = n.$element, c = {}, u = n.set, l = n.unset, f = n.$animate;
            c[wa] = !(c[$a] = s.hasClass($a)), a.$setValidity = e;
        }
        function Er(n) {
            if (n) for (var e in n) if (n.hasOwnProperty(e)) return !1;
            return !0;
        }
        function Tr(n) {
            n[0].hasAttribute("selected") && (n[0].selected = !0);
        }
        var Ar = /^\/(.+)\/([a-z]*)$/, Or = "validity", Nr = Object.prototype.hasOwnProperty, jr = function(n) {
            return b(n) ? n.toLowerCase() : n;
        }, Pr = function(n) {
            return b(n) ? n.toUpperCase() : n;
        }, Lr = function(n) {
            return b(n) ? n.replace(/[A-Z]/g, function(n) {
                return String.fromCharCode(32 | n.charCodeAt(0));
            }) : n;
        }, Mr = function(n) {
            return b(n) ? n.replace(/[a-z]/g, function(n) {
                return String.fromCharCode(n.charCodeAt(0) & -33);
            }) : n;
        };
        "i" !== "I".toLowerCase() && (jr = Lr, Pr = Mr);
        var Dr, qr, Rr, Br, Fr = [].slice, Ur = [].splice, Hr = [].push, Vr = Object.prototype.toString, zr = Object.getPrototypeOf, Wr = e("ng"), Gr = n.angular || (n.angular = {}), Xr = 0;
        Dr = n.document.documentMode, p.$inject = [], h.$inject = [];
        var Yr = Array.isArray, Jr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, Kr = function(n) {
            return b(n) ? n.trim() : n;
        }, Zr = function(n) {
            return n.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
        }, Qr = function() {
            function e() {
                try {
                    return new Function(""), !1;
                } catch (n) {
                    return !0;
                }
            }
            if (!y(Qr.rules)) {
                var t = n.document.querySelector("[ng-csp]") || n.document.querySelector("[data-ng-csp]");
                if (t) {
                    var r = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
                    Qr.rules = {
                        noUnsafeEval: !r || r.indexOf("no-unsafe-eval") !== -1,
                        noInlineStyle: !r || r.indexOf("no-inline-style") !== -1
                    };
                } else Qr.rules = {
                    noUnsafeEval: e(),
                    noInlineStyle: !1
                };
            }
            return Qr.rules;
        }, ni = function() {
            if (y(ni.name_)) return ni.name_;
            var e, t, r, i, o = ti.length;
            for (t = 0; t < o; ++t) if (r = ti[t], e = n.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                i = e.getAttribute(r + "jq");
                break;
            }
            return ni.name_ = i;
        }, ei = /:/g, ti = [ "ng-", "data-ng-", "ng:", "x-ng-" ], ri = /[A-Z]/g, ii = !1, oi = 1, ai = 2, si = 3, ci = 8, ui = 9, li = 11, fi = {
            full: "1.5.8",
            major: 1,
            minor: 5,
            dot: 8,
            codeName: "arbitrary-fallbacks"
        };
        An.expando = "ng339";
        var di = An.cache = {}, pi = 1, hi = function(n, e, t) {
            n.addEventListener(e, t, !1);
        }, gi = function(n, e, t) {
            n.removeEventListener(e, t, !1);
        };
        An._data = function(n) {
            return this.cache[n[this.expando]] || {};
        };
        var mi = /([\:\-\_]+(.))/g, vi = /^moz([A-Z])/, yi = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }, $i = e("jqLite"), wi = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, bi = /<|&#?\w+;/, xi = /<([\w:-]+)/, Ii = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ki = {
            option: [ 1, '<select multiple="multiple">', "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        ki.optgroup = ki.option, ki.tbody = ki.tfoot = ki.colgroup = ki.caption = ki.thead, 
        ki.th = ki.td;
        var Ci = n.Node.prototype.contains || function(n) {
            return !!(16 & this.compareDocumentPosition(n));
        }, Si = An.prototype = {
            ready: function(e) {
                function t() {
                    r || (r = !0, e());
                }
                var r = !1;
                "complete" === n.document.readyState ? n.setTimeout(t) : (this.on("DOMContentLoaded", t), 
                An(n).on("load", t));
            },
            toString: function() {
                var n = [];
                return r(this, function(e) {
                    n.push("" + e);
                }), "[" + n.join(", ") + "]";
            },
            eq: function(n) {
                return qr(n >= 0 ? this[n] : this[this.length + n]);
            },
            length: 0,
            push: Hr,
            sort: [].sort,
            splice: [].splice
        }, _i = {};
        r("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(n) {
            _i[jr(n)] = n;
        });
        var Ei = {};
        r("input,select,option,textarea,button,form,details".split(","), function(n) {
            Ei[n] = !0;
        });
        var Ti = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern"
        };
        r({
            data: Mn,
            removeData: Pn,
            hasData: Cn,
            cleanData: Sn
        }, function(n, e) {
            An[e] = n;
        }), r({
            data: Mn,
            inheritedData: Un,
            scope: function(n) {
                return qr.data(n, "$scope") || Un(n.parentNode || n, [ "$isolateScope", "$scope" ]);
            },
            isolateScope: function(n) {
                return qr.data(n, "$isolateScope") || qr.data(n, "$isolateScopeNoTemplate");
            },
            controller: Fn,
            injector: function(n) {
                return Un(n, "$injector");
            },
            removeAttr: function(n, e) {
                n.removeAttribute(e);
            },
            hasClass: Dn,
            css: function(n, e, t) {
                return e = xn(e), y(t) ? void (n.style[e] = t) : n.style[e];
            },
            attr: function(n, e, t) {
                var r = n.nodeType;
                if (r !== si && r !== ai && r !== ci) {
                    var i = jr(e);
                    if (_i[i]) {
                        if (!y(t)) return n[e] || (n.attributes.getNamedItem(e) || p).specified ? i : void 0;
                        t ? (n[e] = !0, n.setAttribute(e, i)) : (n[e] = !1, n.removeAttribute(i));
                    } else if (y(t)) n.setAttribute(e, t); else if (n.getAttribute) {
                        var o = n.getAttribute(e, 2);
                        return null === o ? void 0 : o;
                    }
                }
            },
            prop: function(n, e, t) {
                return y(t) ? void (n[e] = t) : n[e];
            },
            text: function() {
                function n(n, e) {
                    if (v(e)) {
                        var t = n.nodeType;
                        return t === oi || t === si ? n.textContent : "";
                    }
                    n.textContent = e;
                }
                return n.$dv = "", n;
            }(),
            val: function(n, e) {
                if (v(e)) {
                    if (n.multiple && "select" === D(n)) {
                        var t = [];
                        return r(n.options, function(n) {
                            n.selected && t.push(n.value || n.text);
                        }), 0 === t.length ? null : t;
                    }
                    return n.value;
                }
                n.value = e;
            },
            html: function(n, e) {
                return v(e) ? n.innerHTML : (Nn(n, !0), void (n.innerHTML = e));
            },
            empty: Hn
        }, function(n, e) {
            An.prototype[e] = function(e, t) {
                var r, i, o = this.length;
                if (n !== Hn && v(2 == n.length && n !== Dn && n !== Fn ? e : t)) {
                    if ($(e)) {
                        for (r = 0; r < o; r++) if (n === Mn) n(this[r], e); else for (i in e) n(this[r], i, e[i]);
                        return this;
                    }
                    for (var a = n.$dv, s = v(a) ? Math.min(o, 1) : o, c = 0; c < s; c++) {
                        var u = n(this[c], e, t);
                        a = a ? a + u : u;
                    }
                    return a;
                }
                for (r = 0; r < o; r++) n(this[r], e, t);
                return this;
            };
        }), r({
            removeData: Pn,
            on: function(n, e, t, r) {
                if (y(r)) throw $i("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (kn(n)) {
                    var i = Ln(n, !0), o = i.events, a = i.handle;
                    a || (a = i.handle = Xn(n, o));
                    for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [ e ], c = s.length, u = function(e, r, i) {
                        var s = o[e];
                        s || (s = o[e] = [], s.specialHandlerWrapper = r, "$destroy" === e || i || hi(n, e, a)), 
                        s.push(t);
                    }; c--; ) e = s[c], yi[e] ? (u(yi[e], Jn), u(e, void 0, !0)) : u(e);
                }
            },
            off: jn,
            one: function(n, e, t) {
                n = qr(n), n.on(e, function r() {
                    n.off(e, t), n.off(e, r);
                }), n.on(e, t);
            },
            replaceWith: function(n, e) {
                var t, i = n.parentNode;
                Nn(n), r(new An(e), function(e) {
                    t ? i.insertBefore(e, t.nextSibling) : i.replaceChild(e, n), t = e;
                });
            },
            children: function(n) {
                var e = [];
                return r(n.childNodes, function(n) {
                    n.nodeType === oi && e.push(n);
                }), e;
            },
            contents: function(n) {
                return n.contentDocument || n.childNodes || [];
            },
            append: function(n, e) {
                var t = n.nodeType;
                if (t === oi || t === li) {
                    e = new An(e);
                    for (var r = 0, i = e.length; r < i; r++) {
                        var o = e[r];
                        n.appendChild(o);
                    }
                }
            },
            prepend: function(n, e) {
                if (n.nodeType === oi) {
                    var t = n.firstChild;
                    r(new An(e), function(e) {
                        n.insertBefore(e, t);
                    });
                }
            },
            wrap: function(n, e) {
                Tn(n, qr(e).eq(0).clone()[0]);
            },
            remove: Vn,
            detach: function(n) {
                Vn(n, !0);
            },
            after: function(n, e) {
                var t = n, r = n.parentNode;
                e = new An(e);
                for (var i = 0, o = e.length; i < o; i++) {
                    var a = e[i];
                    r.insertBefore(a, t.nextSibling), t = a;
                }
            },
            addClass: Rn,
            removeClass: qn,
            toggleClass: function(n, e, t) {
                e && r(e.split(" "), function(e) {
                    var r = t;
                    v(r) && (r = !Dn(n, e)), (r ? Rn : qn)(n, e);
                });
            },
            parent: function(n) {
                var e = n.parentNode;
                return e && e.nodeType !== li ? e : null;
            },
            next: function(n) {
                return n.nextElementSibling;
            },
            find: function(n, e) {
                return n.getElementsByTagName ? n.getElementsByTagName(e) : [];
            },
            clone: On,
            triggerHandler: function(n, e, t) {
                var i, o, a, s = e.type || e, c = Ln(n), l = c && c.events, f = l && l[s];
                f && (i = {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                    },
                    isDefaultPrevented: function() {
                        return this.defaultPrevented === !0;
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0;
                    },
                    isImmediatePropagationStopped: function() {
                        return this.immediatePropagationStopped === !0;
                    },
                    stopPropagation: p,
                    type: s,
                    target: n
                }, e.type && (i = u(i, e)), o = vn(f), a = t ? [ i ].concat(t) : [ i ], r(o, function(e) {
                    i.isImmediatePropagationStopped() || e.apply(n, a);
                }));
            }
        }, function(n, e) {
            An.prototype[e] = function(e, t, r) {
                for (var i, o = 0, a = this.length; o < a; o++) v(i) ? (i = n(this[o], e, t, r), 
                y(i) && (i = qr(i))) : Bn(i, n(this[o], e, t, r));
                return y(i) ? i : this;
            }, An.prototype.bind = An.prototype.on, An.prototype.unbind = An.prototype.off;
        }), Qn.prototype = {
            put: function(n, e) {
                this[Zn(n, this.nextUid)] = e;
            },
            get: function(n) {
                return this[Zn(n, this.nextUid)];
            },
            remove: function(n) {
                var e = this[n = Zn(n, this.nextUid)];
                return delete this[n], e;
            }
        };
        var Ai = [ function() {
            this.$get = [ function() {
                return Qn;
            } ];
        } ], Oi = /^([^\(]+?)=>/, Ni = /^[^\(]*\(\s*([^\)]*)\)/m, ji = /,/, Pi = /^\s*(_?)(\S+?)\1\s*$/, Li = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Mi = e("$injector");
        ie.$$annotate = re;
        var Di = e("$animate"), qi = 1, Ri = "ng-animate", Bi = function() {
            this.$get = p;
        }, Fi = function() {
            var n = new Qn(), e = [];
            this.$get = [ "$$AnimateRunner", "$rootScope", function(t, i) {
                function o(n, e, t) {
                    var i = !1;
                    return e && (e = b(e) ? e.split(" ") : Yr(e) ? e : [], r(e, function(e) {
                        e && (i = !0, n[e] = t);
                    })), i;
                }
                function a() {
                    r(e, function(e) {
                        var t = n.get(e);
                        if (t) {
                            var i = ce(e.attr("class")), o = "", a = "";
                            r(t, function(n, e) {
                                var t = !!i[e];
                                n !== t && (n ? o += (o.length ? " " : "") + e : a += (a.length ? " " : "") + e);
                            }), r(e, function(n) {
                                o && Rn(n, o), a && qn(n, a);
                            }), n.remove(e);
                        }
                    }), e.length = 0;
                }
                function s(t, r, s) {
                    var c = n.get(t) || {}, u = o(c, r, !0), l = o(c, s, !1);
                    (u || l) && (n.put(t, c), e.push(t), 1 === e.length && i.$$postDigest(a));
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function(n, e, r, i) {
                        i && i(), r = r || {}, r.from && n.css(r.from), r.to && n.css(r.to), (r.addClass || r.removeClass) && s(n, r.addClass, r.removeClass);
                        var o = new t();
                        return o.complete(), o;
                    }
                };
            } ];
        }, Ui = [ "$provide", function(n) {
            var e = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(t, r) {
                if (t && "." !== t.charAt(0)) throw Di("notcsel", "Expecting class selector starting with '.' got '{0}'.", t);
                var i = t + "-animation";
                e.$$registeredAnimations[t.substr(1)] = i, n.factory(i, r);
            }, this.classNameFilter = function(n) {
                if (1 === arguments.length && (this.$$classNameFilter = n instanceof RegExp ? n : null, 
                this.$$classNameFilter)) {
                    var e = new RegExp("(\\s+|\\/)" + Ri + "(\\s+|\\/)");
                    if (e.test(this.$$classNameFilter.toString())) throw Di("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ri);
                }
                return this.$$classNameFilter;
            }, this.$get = [ "$$animateQueue", function(n) {
                function e(n, e, t) {
                    if (t) {
                        var r = se(t);
                        !r || r.parentNode || r.previousElementSibling || (t = null);
                    }
                    t ? t.after(n) : e.prepend(n);
                }
                return {
                    on: n.on,
                    off: n.off,
                    pin: n.pin,
                    enabled: n.enabled,
                    cancel: function(n) {
                        n.end && n.end();
                    },
                    enter: function(t, r, i, o) {
                        return r = r && qr(r), i = i && qr(i), r = r || i.parent(), e(t, r, i), n.push(t, "enter", ue(o));
                    },
                    move: function(t, r, i, o) {
                        return r = r && qr(r), i = i && qr(i), r = r || i.parent(), e(t, r, i), n.push(t, "move", ue(o));
                    },
                    leave: function(e, t) {
                        return n.push(e, "leave", ue(t), function() {
                            e.remove();
                        });
                    },
                    addClass: function(e, t, r) {
                        return r = ue(r), r.addClass = ae(r.addclass, t), n.push(e, "addClass", r);
                    },
                    removeClass: function(e, t, r) {
                        return r = ue(r), r.removeClass = ae(r.removeClass, t), n.push(e, "removeClass", r);
                    },
                    setClass: function(e, t, r, i) {
                        return i = ue(i), i.addClass = ae(i.addClass, t), i.removeClass = ae(i.removeClass, r), 
                        n.push(e, "setClass", i);
                    },
                    animate: function(e, t, r, i, o) {
                        return o = ue(o), o.from = o.from ? u(o.from, t) : t, o.to = o.to ? u(o.to, r) : r, 
                        i = i || "ng-inline-animate", o.tempClasses = ae(o.tempClasses, i), n.push(e, "animate", o);
                    }
                };
            } ];
        } ], Hi = function() {
            this.$get = [ "$$rAF", function(n) {
                function e(e) {
                    t.push(e), t.length > 1 || n(function() {
                        for (var n = 0; n < t.length; n++) t[n]();
                        t = [];
                    });
                }
                var t = [];
                return function() {
                    var n = !1;
                    return e(function() {
                        n = !0;
                    }), function(t) {
                        n ? t() : e(t);
                    };
                };
            } ];
        }, Vi = function() {
            this.$get = [ "$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(n, e, t, i, o) {
                function a(n) {
                    this.setHost(n);
                    var e = t(), r = function(n) {
                        o(n, 0, !1);
                    };
                    this._doneCallbacks = [], this._tick = function(n) {
                        var t = i[0];
                        t && t.hidden ? r(n) : e(n);
                    }, this._state = 0;
                }
                var s = 0, c = 1, u = 2;
                return a.chain = function(n, e) {
                    function t() {
                        return r === n.length ? void e(!0) : void n[r](function(n) {
                            return n === !1 ? void e(!1) : (r++, void t());
                        });
                    }
                    var r = 0;
                    t();
                }, a.all = function(n, e) {
                    function t(t) {
                        o = o && t, ++i === n.length && e(o);
                    }
                    var i = 0, o = !0;
                    r(n, function(n) {
                        n.done(t);
                    });
                }, a.prototype = {
                    setHost: function(n) {
                        this.host = n || {};
                    },
                    done: function(n) {
                        this._state === u ? n() : this._doneCallbacks.push(n);
                    },
                    progress: p,
                    getPromise: function() {
                        if (!this.promise) {
                            var e = this;
                            this.promise = n(function(n, t) {
                                e.done(function(e) {
                                    e === !1 ? t() : n();
                                });
                            });
                        }
                        return this.promise;
                    },
                    then: function(n, e) {
                        return this.getPromise().then(n, e);
                    },
                    catch: function(n) {
                        return this.getPromise()["catch"](n);
                    },
                    finally: function(n) {
                        return this.getPromise()["finally"](n);
                    },
                    pause: function() {
                        this.host.pause && this.host.pause();
                    },
                    resume: function() {
                        this.host.resume && this.host.resume();
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0);
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1);
                    },
                    complete: function(n) {
                        var e = this;
                        e._state === s && (e._state = c, e._tick(function() {
                            e._resolve(n);
                        }));
                    },
                    _resolve: function(n) {
                        this._state !== u && (r(this._doneCallbacks, function(e) {
                            e(n);
                        }), this._doneCallbacks.length = 0, this._state = u);
                    }
                }, a;
            } ];
        }, zi = function() {
            this.$get = [ "$$rAF", "$q", "$$AnimateRunner", function(n, e, t) {
                return function(e, r) {
                    function i() {
                        return n(function() {
                            o(), s || c.complete(), s = !0;
                        }), c;
                    }
                    function o() {
                        a.addClass && (e.addClass(a.addClass), a.addClass = null), a.removeClass && (e.removeClass(a.removeClass), 
                        a.removeClass = null), a.to && (e.css(a.to), a.to = null);
                    }
                    var a = r || {};
                    a.$$prepared || (a = R(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (e.css(a.from), 
                    a.from = null);
                    var s, c = new t();
                    return {
                        start: i,
                        end: i
                    };
                };
            } ];
        }, Wi = e("$compile"), Gi = new he();
        ge.$inject = [ "$provide", "$$sanitizeUriProvider" ], me.prototype.isFirstChange = function() {
            return this.previousValue === Gi;
        };
        var Xi = /^((?:x|data)[\:\-_])/i, Yi = e("$controller"), Ji = /^(\S+)(\s+as\s+([\w$]+))?$/, Ki = function() {
            this.$get = [ "$document", function(n) {
                return function(e) {
                    return e ? !e.nodeType && e instanceof qr && (e = e[0]) : e = n[0].body, e.offsetWidth + 1;
                };
            } ];
        }, Zi = "application/json", Qi = {
            "Content-Type": Zi + ";charset=utf-8"
        }, no = /^\[|^\{(?!\{)/, eo = {
            "[": /]$/,
            "{": /}$/
        }, to = /^\)\]\}',?\n/, ro = e("$http"), io = function(n) {
            return function() {
                throw ro("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", n);
            };
        }, oo = Gr.$interpolateMinErr = e("$interpolate");
        oo.throwNoconcat = function(n) {
            throw oo("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", n);
        }, oo.interr = function(n, e) {
            return oo("interr", "Can't interpolate: {0}\n{1}", n, e.toString());
        };
        var ao = function() {
            this.$get = [ "$window", function(n) {
                function e(n) {
                    var e = function(n) {
                        e.data = n, e.called = !0;
                    };
                    return e.id = n, e;
                }
                var t = n.angular.callbacks, r = {};
                return {
                    createCallback: function(n) {
                        var i = "_" + (t.$$counter++).toString(36), o = "angular.callbacks." + i, a = e(i);
                        return r[o] = t[i] = a, o;
                    },
                    wasCalled: function(n) {
                        return r[n].called;
                    },
                    getResponse: function(n) {
                        return r[n].data;
                    },
                    removeCallback: function(n) {
                        var e = r[n];
                        delete t[e.id], delete r[n];
                    }
                };
            } ];
        }, so = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, co = {
            http: 80,
            https: 443,
            ftp: 21
        }, uo = e("$location"), lo = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: Ke("$$absUrl"),
            url: function(n) {
                if (v(n)) return this.$$url;
                var e = so.exec(n);
                return (e[1] || "" === n) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === n) && this.search(e[3] || ""), 
                this.hash(e[5] || ""), this;
            },
            protocol: Ke("$$protocol"),
            host: Ke("$$host"),
            port: Ke("$$port"),
            path: Ze("$$path", function(n) {
                return n = null !== n ? n.toString() : "", "/" == n.charAt(0) ? n : "/" + n;
            }),
            search: function(n, e) {
                switch (arguments.length) {
                  case 0:
                    return this.$$search;

                  case 1:
                    if (b(n) || x(n)) n = n.toString(), this.$$search = Z(n); else {
                        if (!$(n)) throw uo("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        n = R(n, {}), r(n, function(e, t) {
                            null == e && delete n[t];
                        }), this.$$search = n;
                    }
                    break;

                  default:
                    v(e) || null === e ? delete this.$$search[n] : this.$$search[n] = e;
                }
                return this.$$compose(), this;
            },
            hash: Ze("$$hash", function(n) {
                return null !== n ? n.toString() : "";
            }),
            replace: function() {
                return this.$$replace = !0, this;
            }
        };
        r([ Je, Ye, Xe ], function(n) {
            n.prototype = Object.create(lo), n.prototype.state = function(e) {
                if (!arguments.length) return this.$$state;
                if (n !== Xe || !this.$$html5) throw uo("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = v(e) ? null : e, this;
            };
        });
        var fo = e("$parse"), po = Function.prototype.call, ho = Function.prototype.apply, go = Function.prototype.bind, mo = gn();
        r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(n) {
            mo[n] = !0;
        });
        var vo = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        }, yo = function(n) {
            this.options = n;
        };
        yo.prototype = {
            constructor: yo,
            lex: function(n) {
                for (this.text = n, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                    var e = this.text.charAt(this.index);
                    if ('"' === e || "'" === e) this.readString(e); else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: e
                    }), this.index++; else if (this.isWhitespace(e)) this.index++; else {
                        var t = e + this.peek(), r = t + this.peek(2), i = mo[e], o = mo[t], a = mo[r];
                        if (i || o || a) {
                            var s = a ? r : o ? t : e;
                            this.tokens.push({
                                index: this.index,
                                text: s,
                                operator: !0
                            }), this.index += s.length;
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1);
                    }
                }
                return this.tokens;
            },
            is: function(n, e) {
                return e.indexOf(n) !== -1;
            },
            peek: function(n) {
                var e = n || 1;
                return this.index + e < this.text.length && this.text.charAt(this.index + e);
            },
            isNumber: function(n) {
                return "0" <= n && n <= "9" && "string" == typeof n;
            },
            isWhitespace: function(n) {
                return " " === n || "\r" === n || "\t" === n || "\n" === n || "\v" === n || " " === n;
            },
            isIdentifierStart: function(n) {
                return this.options.isIdentifierStart ? this.options.isIdentifierStart(n, this.codePointAt(n)) : this.isValidIdentifierStart(n);
            },
            isValidIdentifierStart: function(n) {
                return "a" <= n && n <= "z" || "A" <= n && n <= "Z" || "_" === n || "$" === n;
            },
            isIdentifierContinue: function(n) {
                return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(n, this.codePointAt(n)) : this.isValidIdentifierContinue(n);
            },
            isValidIdentifierContinue: function(n, e) {
                return this.isValidIdentifierStart(n, e) || this.isNumber(n);
            },
            codePointAt: function(n) {
                return 1 === n.length ? n.charCodeAt(0) : (n.charCodeAt(0) << 10) + n.charCodeAt(1) - 56613888;
            },
            peekMultichar: function() {
                var n = this.text.charAt(this.index), e = this.peek();
                if (!e) return n;
                var t = n.charCodeAt(0), r = e.charCodeAt(0);
                return t >= 55296 && t <= 56319 && r >= 56320 && r <= 57343 ? n + e : n;
            },
            isExpOperator: function(n) {
                return "-" === n || "+" === n || this.isNumber(n);
            },
            throwError: function(n, e, t) {
                t = t || this.index;
                var r = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, t) + "]" : " " + t;
                throw fo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", n, r, this.text);
            },
            readNumber: function() {
                for (var n = "", e = this.index; this.index < this.text.length; ) {
                    var t = jr(this.text.charAt(this.index));
                    if ("." == t || this.isNumber(t)) n += t; else {
                        var r = this.peek();
                        if ("e" == t && this.isExpOperator(r)) n += t; else if (this.isExpOperator(t) && r && this.isNumber(r) && "e" == n.charAt(n.length - 1)) n += t; else {
                            if (!this.isExpOperator(t) || r && this.isNumber(r) || "e" != n.charAt(n.length - 1)) break;
                            this.throwError("Invalid exponent");
                        }
                    }
                    this.index++;
                }
                this.tokens.push({
                    index: e,
                    text: n,
                    constant: !0,
                    value: Number(n)
                });
            },
            readIdent: function() {
                var n = this.index;
                for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                    var e = this.peekMultichar();
                    if (!this.isIdentifierContinue(e)) break;
                    this.index += e.length;
                }
                this.tokens.push({
                    index: n,
                    text: this.text.slice(n, this.index),
                    identifier: !0
                });
            },
            readString: function(n) {
                var e = this.index;
                this.index++;
                for (var t = "", r = n, i = !1; this.index < this.text.length; ) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), 
                            this.index += 4, t += String.fromCharCode(parseInt(a, 16));
                        } else {
                            var s = vo[o];
                            t += s || o;
                        }
                        i = !1;
                    } else if ("\\" === o) i = !0; else {
                        if (o === n) return this.index++, void this.tokens.push({
                            index: e,
                            text: r,
                            constant: !0,
                            value: t
                        });
                        t += o;
                    }
                    this.index++;
                }
                this.throwError("Unterminated quote", e);
            }
        };
        var $o = function(n, e) {
            this.lexer = n, this.options = e;
        };
        $o.Program = "Program", $o.ExpressionStatement = "ExpressionStatement", $o.AssignmentExpression = "AssignmentExpression", 
        $o.ConditionalExpression = "ConditionalExpression", $o.LogicalExpression = "LogicalExpression", 
        $o.BinaryExpression = "BinaryExpression", $o.UnaryExpression = "UnaryExpression", 
        $o.CallExpression = "CallExpression", $o.MemberExpression = "MemberExpression", 
        $o.Identifier = "Identifier", $o.Literal = "Literal", $o.ArrayExpression = "ArrayExpression", 
        $o.Property = "Property", $o.ObjectExpression = "ObjectExpression", $o.ThisExpression = "ThisExpression", 
        $o.LocalsExpression = "LocalsExpression", $o.NGValueParameter = "NGValueParameter", 
        $o.prototype = {
            ast: function(n) {
                this.text = n, this.tokens = this.lexer.lex(n);
                var e = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
                e;
            },
            program: function() {
                for (var n = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && n.push(this.expressionStatement()), 
                !this.expect(";")) return {
                    type: $o.Program,
                    body: n
                };
            },
            expressionStatement: function() {
                return {
                    type: $o.ExpressionStatement,
                    expression: this.filterChain()
                };
            },
            filterChain: function() {
                for (var n, e = this.expression(); n = this.expect("|"); ) e = this.filter(e);
                return e;
            },
            expression: function() {
                return this.assignment();
            },
            assignment: function() {
                var n = this.ternary();
                return this.expect("=") && (n = {
                    type: $o.AssignmentExpression,
                    left: n,
                    right: this.assignment(),
                    operator: "="
                }), n;
            },
            ternary: function() {
                var n, e, t = this.logicalOR();
                return this.expect("?") && (n = this.expression(), this.consume(":")) ? (e = this.expression(), 
                {
                    type: $o.ConditionalExpression,
                    test: t,
                    alternate: n,
                    consequent: e
                }) : t;
            },
            logicalOR: function() {
                for (var n = this.logicalAND(); this.expect("||"); ) n = {
                    type: $o.LogicalExpression,
                    operator: "||",
                    left: n,
                    right: this.logicalAND()
                };
                return n;
            },
            logicalAND: function() {
                for (var n = this.equality(); this.expect("&&"); ) n = {
                    type: $o.LogicalExpression,
                    operator: "&&",
                    left: n,
                    right: this.equality()
                };
                return n;
            },
            equality: function() {
                for (var n, e = this.relational(); n = this.expect("==", "!=", "===", "!=="); ) e = {
                    type: $o.BinaryExpression,
                    operator: n.text,
                    left: e,
                    right: this.relational()
                };
                return e;
            },
            relational: function() {
                for (var n, e = this.additive(); n = this.expect("<", ">", "<=", ">="); ) e = {
                    type: $o.BinaryExpression,
                    operator: n.text,
                    left: e,
                    right: this.additive()
                };
                return e;
            },
            additive: function() {
                for (var n, e = this.multiplicative(); n = this.expect("+", "-"); ) e = {
                    type: $o.BinaryExpression,
                    operator: n.text,
                    left: e,
                    right: this.multiplicative()
                };
                return e;
            },
            multiplicative: function() {
                for (var n, e = this.unary(); n = this.expect("*", "/", "%"); ) e = {
                    type: $o.BinaryExpression,
                    operator: n.text,
                    left: e,
                    right: this.unary()
                };
                return e;
            },
            unary: function() {
                var n;
                return (n = this.expect("+", "-", "!")) ? {
                    type: $o.UnaryExpression,
                    operator: n.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary();
            },
            primary: function() {
                var n;
                this.expect("(") ? (n = this.filterChain(), this.consume(")")) : this.expect("[") ? n = this.arrayDeclaration() : this.expect("{") ? n = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? n = R(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? n = {
                    type: $o.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? n = this.identifier() : this.peek().constant ? n = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var e; e = this.expect("(", "[", "."); ) "(" === e.text ? (n = {
                    type: $o.CallExpression,
                    callee: n,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === e.text ? (n = {
                    type: $o.MemberExpression,
                    object: n,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === e.text ? n = {
                    type: $o.MemberExpression,
                    object: n,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return n;
            },
            filter: function(n) {
                for (var e = [ n ], t = {
                    type: $o.CallExpression,
                    callee: this.identifier(),
                    arguments: e,
                    filter: !0
                }; this.expect(":"); ) e.push(this.expression());
                return t;
            },
            parseArguments: function() {
                var n = [];
                if (")" !== this.peekToken().text) do n.push(this.filterChain()); while (this.expect(","));
                return n;
            },
            identifier: function() {
                var n = this.consume();
                return n.identifier || this.throwError("is not a valid identifier", n), {
                    type: $o.Identifier,
                    name: n.text
                };
            },
            constant: function() {
                return {
                    type: $o.Literal,
                    value: this.consume().value
                };
            },
            arrayDeclaration: function() {
                var n = [];
                if ("]" !== this.peekToken().text) do {
                    if (this.peek("]")) break;
                    n.push(this.expression());
                } while (this.expect(","));
                return this.consume("]"), {
                    type: $o.ArrayExpression,
                    elements: n
                };
            },
            object: function() {
                var n, e = [];
                if ("}" !== this.peekToken().text) do {
                    if (this.peek("}")) break;
                    n = {
                        type: $o.Property,
                        kind: "init"
                    }, this.peek().constant ? (n.key = this.constant(), n.computed = !1, this.consume(":"), 
                    n.value = this.expression()) : this.peek().identifier ? (n.key = this.identifier(), 
                    n.computed = !1, this.peek(":") ? (this.consume(":"), n.value = this.expression()) : n.value = n.key) : this.peek("[") ? (this.consume("["), 
                    n.key = this.expression(), this.consume("]"), n.computed = !0, this.consume(":"), 
                    n.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(n);
                } while (this.expect(","));
                return this.consume("}"), {
                    type: $o.ObjectExpression,
                    properties: e
                };
            },
            throwError: function(n, e) {
                throw fo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, n, e.index + 1, this.text, this.text.substring(e.index));
            },
            consume: function(n) {
                if (0 === this.tokens.length) throw fo("ueoe", "Unexpected end of expression: {0}", this.text);
                var e = this.expect(n);
                return e || this.throwError("is unexpected, expecting [" + n + "]", this.peek()), 
                e;
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw fo("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0];
            },
            peek: function(n, e, t, r) {
                return this.peekAhead(0, n, e, t, r);
            },
            peekAhead: function(n, e, t, r, i) {
                if (this.tokens.length > n) {
                    var o = this.tokens[n], a = o.text;
                    if (a === e || a === t || a === r || a === i || !e && !t && !r && !i) return o;
                }
                return !1;
            },
            expect: function(n, e, t, r) {
                var i = this.peek(n, e, t, r);
                return !!i && (this.tokens.shift(), i);
            },
            selfReferential: {
                this: {
                    type: $o.ThisExpression
                },
                $locals: {
                    type: $o.LocalsExpression
                }
            }
        }, gt.prototype = {
            compile: function(n, e) {
                var t = this, i = this.astBuilder.ast(n);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: e,
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                }, ut(i, t.$filter);
                var o, a = "";
                if (this.stage = "assign", o = dt(i)) {
                    this.state.computing = "assign";
                    var s = this.nextId();
                    this.recurse(o, s), this.return_(s), a = "fn.assign=" + this.generateFunction("assign", "s,v,l");
                }
                var c = lt(i.body);
                t.stage = "inputs", r(c, function(n, e) {
                    var r = "fn" + e;
                    t.state[r] = {
                        vars: [],
                        body: [],
                        own: {}
                    }, t.state.computing = r;
                    var i = t.nextId();
                    t.recurse(n, i), t.return_(i), t.state.inputs.push(r), n.watchId = e;
                }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
                var u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + a + this.watchFns() + "return fn;", l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", u)(this.$filter, et, rt, it, tt, ot, at, st, n);
                return this.state = this.stage = void 0, l.literal = pt(i), l.constant = ht(i), 
                l;
            },
            USE: "use",
            STRICT: "strict",
            watchFns: function() {
                var n = [], e = this.state.inputs, t = this;
                return r(e, function(e) {
                    n.push("var " + e + "=" + t.generateFunction(e, "s"));
                }), e.length && n.push("fn.inputs=[" + e.join(",") + "];"), n.join("");
            },
            generateFunction: function(n, e) {
                return "function(" + e + "){" + this.varsPrefix(n) + this.body(n) + "};";
            },
            filterPrefix: function() {
                var n = [], e = this;
                return r(this.state.filters, function(t, r) {
                    n.push(t + "=$filter(" + e.escape(r) + ")");
                }), n.length ? "var " + n.join(",") + ";" : "";
            },
            varsPrefix: function(n) {
                return this.state[n].vars.length ? "var " + this.state[n].vars.join(",") + ";" : "";
            },
            body: function(n) {
                return this.state[n].body.join("");
            },
            recurse: function(n, e, t, i, o, a) {
                var s, c, u, l, f, d = this;
                if (i = i || p, !a && y(n.watchId)) return e = e || this.nextId(), void this.if_("i", this.lazyAssign(e, this.computedMember("i", n.watchId)), this.lazyRecurse(n, e, t, i, o, !0));
                switch (n.type) {
                  case $o.Program:
                    r(n.body, function(e, t) {
                        d.recurse(e.expression, void 0, void 0, function(n) {
                            c = n;
                        }), t !== n.body.length - 1 ? d.current().body.push(c, ";") : d.return_(c);
                    });
                    break;

                  case $o.Literal:
                    l = this.escape(n.value), this.assign(e, l), i(l);
                    break;

                  case $o.UnaryExpression:
                    this.recurse(n.argument, void 0, void 0, function(n) {
                        c = n;
                    }), l = n.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(e, l), i(l);
                    break;

                  case $o.BinaryExpression:
                    this.recurse(n.left, void 0, void 0, function(n) {
                        s = n;
                    }), this.recurse(n.right, void 0, void 0, function(n) {
                        c = n;
                    }), l = "+" === n.operator ? this.plus(s, c) : "-" === n.operator ? this.ifDefined(s, 0) + n.operator + this.ifDefined(c, 0) : "(" + s + ")" + n.operator + "(" + c + ")", 
                    this.assign(e, l), i(l);
                    break;

                  case $o.LogicalExpression:
                    e = e || this.nextId(), d.recurse(n.left, e), d.if_("&&" === n.operator ? e : d.not(e), d.lazyRecurse(n.right, e)), 
                    i(e);
                    break;

                  case $o.ConditionalExpression:
                    e = e || this.nextId(), d.recurse(n.test, e), d.if_(e, d.lazyRecurse(n.alternate, e), d.lazyRecurse(n.consequent, e)), 
                    i(e);
                    break;

                  case $o.Identifier:
                    e = e || this.nextId(), t && (t.context = "inputs" === d.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", n.name) + "?l:s"), 
                    t.computed = !1, t.name = n.name), et(n.name), d.if_("inputs" === d.stage || d.not(d.getHasOwnProperty("l", n.name)), function() {
                        d.if_("inputs" === d.stage || "s", function() {
                            o && 1 !== o && d.if_(d.not(d.nonComputedMember("s", n.name)), d.lazyAssign(d.nonComputedMember("s", n.name), "{}")), 
                            d.assign(e, d.nonComputedMember("s", n.name));
                        });
                    }, e && d.lazyAssign(e, d.nonComputedMember("l", n.name))), (d.state.expensiveChecks || vt(n.name)) && d.addEnsureSafeObject(e), 
                    i(e);
                    break;

                  case $o.MemberExpression:
                    s = t && (t.context = this.nextId()) || this.nextId(), e = e || this.nextId(), d.recurse(n.object, s, void 0, function() {
                        d.if_(d.notNull(s), function() {
                            o && 1 !== o && d.addEnsureSafeAssignContext(s), n.computed ? (c = d.nextId(), d.recurse(n.property, c), 
                            d.getStringValue(c), d.addEnsureSafeMemberName(c), o && 1 !== o && d.if_(d.not(d.computedMember(s, c)), d.lazyAssign(d.computedMember(s, c), "{}")), 
                            l = d.ensureSafeObject(d.computedMember(s, c)), d.assign(e, l), t && (t.computed = !0, 
                            t.name = c)) : (et(n.property.name), o && 1 !== o && d.if_(d.not(d.nonComputedMember(s, n.property.name)), d.lazyAssign(d.nonComputedMember(s, n.property.name), "{}")), 
                            l = d.nonComputedMember(s, n.property.name), (d.state.expensiveChecks || vt(n.property.name)) && (l = d.ensureSafeObject(l)), 
                            d.assign(e, l), t && (t.computed = !1, t.name = n.property.name));
                        }, function() {
                            d.assign(e, "undefined");
                        }), i(e);
                    }, !!o);
                    break;

                  case $o.CallExpression:
                    e = e || this.nextId(), n.filter ? (c = d.filter(n.callee.name), u = [], r(n.arguments, function(n) {
                        var e = d.nextId();
                        d.recurse(n, e), u.push(e);
                    }), l = c + "(" + u.join(",") + ")", d.assign(e, l), i(e)) : (c = d.nextId(), s = {}, 
                    u = [], d.recurse(n.callee, c, s, function() {
                        d.if_(d.notNull(c), function() {
                            d.addEnsureSafeFunction(c), r(n.arguments, function(n) {
                                d.recurse(n, d.nextId(), void 0, function(n) {
                                    u.push(d.ensureSafeObject(n));
                                });
                            }), s.name ? (d.state.expensiveChecks || d.addEnsureSafeObject(s.context), l = d.member(s.context, s.name, s.computed) + "(" + u.join(",") + ")") : l = c + "(" + u.join(",") + ")", 
                            l = d.ensureSafeObject(l), d.assign(e, l);
                        }, function() {
                            d.assign(e, "undefined");
                        }), i(e);
                    }));
                    break;

                  case $o.AssignmentExpression:
                    if (c = this.nextId(), s = {}, !ft(n.left)) throw fo("lval", "Trying to assign a value to a non l-value");
                    this.recurse(n.left, void 0, s, function() {
                        d.if_(d.notNull(s.context), function() {
                            d.recurse(n.right, c), d.addEnsureSafeObject(d.member(s.context, s.name, s.computed)), 
                            d.addEnsureSafeAssignContext(s.context), l = d.member(s.context, s.name, s.computed) + n.operator + c, 
                            d.assign(e, l), i(e || l);
                        });
                    }, 1);
                    break;

                  case $o.ArrayExpression:
                    u = [], r(n.elements, function(n) {
                        d.recurse(n, d.nextId(), void 0, function(n) {
                            u.push(n);
                        });
                    }), l = "[" + u.join(",") + "]", this.assign(e, l), i(l);
                    break;

                  case $o.ObjectExpression:
                    u = [], f = !1, r(n.properties, function(n) {
                        n.computed && (f = !0);
                    }), f ? (e = e || this.nextId(), this.assign(e, "{}"), r(n.properties, function(n) {
                        n.computed ? (s = d.nextId(), d.recurse(n.key, s)) : s = n.key.type === $o.Identifier ? n.key.name : "" + n.key.value, 
                        c = d.nextId(), d.recurse(n.value, c), d.assign(d.member(e, s, n.computed), c);
                    })) : (r(n.properties, function(e) {
                        d.recurse(e.value, n.constant ? void 0 : d.nextId(), void 0, function(n) {
                            u.push(d.escape(e.key.type === $o.Identifier ? e.key.name : "" + e.key.value) + ":" + n);
                        });
                    }), l = "{" + u.join(",") + "}", this.assign(e, l)), i(e || l);
                    break;

                  case $o.ThisExpression:
                    this.assign(e, "s"), i("s");
                    break;

                  case $o.LocalsExpression:
                    this.assign(e, "l"), i("l");
                    break;

                  case $o.NGValueParameter:
                    this.assign(e, "v"), i("v");
                }
            },
            getHasOwnProperty: function(n, e) {
                var t = n + "." + e, r = this.current().own;
                return r.hasOwnProperty(t) || (r[t] = this.nextId(!1, n + "&&(" + this.escape(e) + " in " + n + ")")), 
                r[t];
            },
            assign: function(n, e) {
                if (n) return this.current().body.push(n, "=", e, ";"), n;
            },
            filter: function(n) {
                return this.state.filters.hasOwnProperty(n) || (this.state.filters[n] = this.nextId(!0)), 
                this.state.filters[n];
            },
            ifDefined: function(n, e) {
                return "ifDefined(" + n + "," + this.escape(e) + ")";
            },
            plus: function(n, e) {
                return "plus(" + n + "," + e + ")";
            },
            return_: function(n) {
                this.current().body.push("return ", n, ";");
            },
            if_: function(n, e, t) {
                if (n === !0) e(); else {
                    var r = this.current().body;
                    r.push("if(", n, "){"), e(), r.push("}"), t && (r.push("else{"), t(), r.push("}"));
                }
            },
            not: function(n) {
                return "!(" + n + ")";
            },
            notNull: function(n) {
                return n + "!=null";
            },
            nonComputedMember: function(n, e) {
                var t = /[$_a-zA-Z][$_a-zA-Z0-9]*/, r = /[^$_a-zA-Z0-9]/g;
                return t.test(e) ? n + "." + e : n + '["' + e.replace(r, this.stringEscapeFn) + '"]';
            },
            computedMember: function(n, e) {
                return n + "[" + e + "]";
            },
            member: function(n, e, t) {
                return t ? this.computedMember(n, e) : this.nonComputedMember(n, e);
            },
            addEnsureSafeObject: function(n) {
                this.current().body.push(this.ensureSafeObject(n), ";");
            },
            addEnsureSafeMemberName: function(n) {
                this.current().body.push(this.ensureSafeMemberName(n), ";");
            },
            addEnsureSafeFunction: function(n) {
                this.current().body.push(this.ensureSafeFunction(n), ";");
            },
            addEnsureSafeAssignContext: function(n) {
                this.current().body.push(this.ensureSafeAssignContext(n), ";");
            },
            ensureSafeObject: function(n) {
                return "ensureSafeObject(" + n + ",text)";
            },
            ensureSafeMemberName: function(n) {
                return "ensureSafeMemberName(" + n + ",text)";
            },
            ensureSafeFunction: function(n) {
                return "ensureSafeFunction(" + n + ",text)";
            },
            getStringValue: function(n) {
                this.assign(n, "getStringValue(" + n + ")");
            },
            ensureSafeAssignContext: function(n) {
                return "ensureSafeAssignContext(" + n + ",text)";
            },
            lazyRecurse: function(n, e, t, r, i, o) {
                var a = this;
                return function() {
                    a.recurse(n, e, t, r, i, o);
                };
            },
            lazyAssign: function(n, e) {
                var t = this;
                return function() {
                    t.assign(n, e);
                };
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function(n) {
                return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
            },
            escape: function(n) {
                if (b(n)) return "'" + n.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (x(n)) return n.toString();
                if (n === !0) return "true";
                if (n === !1) return "false";
                if (null === n) return "null";
                if ("undefined" == typeof n) return "undefined";
                throw fo("esc", "IMPOSSIBLE");
            },
            nextId: function(n, e) {
                var t = "v" + this.state.nextId++;
                return n || this.current().vars.push(t + (e ? "=" + e : "")), t;
            },
            current: function() {
                return this.state[this.state.computing];
            }
        }, mt.prototype = {
            compile: function(n, e) {
                var t = this, i = this.astBuilder.ast(n);
                this.expression = n, this.expensiveChecks = e, ut(i, t.$filter);
                var o, a;
                (o = dt(i)) && (a = this.recurse(o));
                var s, c = lt(i.body);
                c && (s = [], r(c, function(n, e) {
                    var r = t.recurse(n);
                    n.input = r, s.push(r), n.watchId = e;
                }));
                var u = [];
                r(i.body, function(n) {
                    u.push(t.recurse(n.expression));
                });
                var l = 0 === i.body.length ? p : 1 === i.body.length ? u[0] : function(n, e) {
                    var t;
                    return r(u, function(r) {
                        t = r(n, e);
                    }), t;
                };
                return a && (l.assign = function(n, e, t) {
                    return a(n, t, e);
                }), s && (l.inputs = s), l.literal = pt(i), l.constant = ht(i), l;
            },
            recurse: function(n, e, t) {
                var i, o, a, s = this;
                if (n.input) return this.inputs(n.input, n.watchId);
                switch (n.type) {
                  case $o.Literal:
                    return this.value(n.value, e);

                  case $o.UnaryExpression:
                    return o = this.recurse(n.argument), this["unary" + n.operator](o, e);

                  case $o.BinaryExpression:
                    return i = this.recurse(n.left), o = this.recurse(n.right), this["binary" + n.operator](i, o, e);

                  case $o.LogicalExpression:
                    return i = this.recurse(n.left), o = this.recurse(n.right), this["binary" + n.operator](i, o, e);

                  case $o.ConditionalExpression:
                    return this["ternary?:"](this.recurse(n.test), this.recurse(n.alternate), this.recurse(n.consequent), e);

                  case $o.Identifier:
                    return et(n.name, s.expression), s.identifier(n.name, s.expensiveChecks || vt(n.name), e, t, s.expression);

                  case $o.MemberExpression:
                    return i = this.recurse(n.object, !1, !!t), n.computed || (et(n.property.name, s.expression), 
                    o = n.property.name), n.computed && (o = this.recurse(n.property)), n.computed ? this.computedMember(i, o, e, t, s.expression) : this.nonComputedMember(i, o, s.expensiveChecks, e, t, s.expression);

                  case $o.CallExpression:
                    return a = [], r(n.arguments, function(n) {
                        a.push(s.recurse(n));
                    }), n.filter && (o = this.$filter(n.callee.name)), n.filter || (o = this.recurse(n.callee, !0)), 
                    n.filter ? function(n, t, r, i) {
                        for (var s = [], c = 0; c < a.length; ++c) s.push(a[c](n, t, r, i));
                        var u = o.apply(void 0, s, i);
                        return e ? {
                            context: void 0,
                            name: void 0,
                            value: u
                        } : u;
                    } : function(n, t, r, i) {
                        var c, u = o(n, t, r, i);
                        if (null != u.value) {
                            rt(u.context, s.expression), it(u.value, s.expression);
                            for (var l = [], f = 0; f < a.length; ++f) l.push(rt(a[f](n, t, r, i), s.expression));
                            c = rt(u.value.apply(u.context, l), s.expression);
                        }
                        return e ? {
                            value: c
                        } : c;
                    };

                  case $o.AssignmentExpression:
                    return i = this.recurse(n.left, !0, 1), o = this.recurse(n.right), function(n, t, r, a) {
                        var c = i(n, t, r, a), u = o(n, t, r, a);
                        return rt(c.value, s.expression), ot(c.context), c.context[c.name] = u, e ? {
                            value: u
                        } : u;
                    };

                  case $o.ArrayExpression:
                    return a = [], r(n.elements, function(n) {
                        a.push(s.recurse(n));
                    }), function(n, t, r, i) {
                        for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](n, t, r, i));
                        return e ? {
                            value: o
                        } : o;
                    };

                  case $o.ObjectExpression:
                    return a = [], r(n.properties, function(n) {
                        n.computed ? a.push({
                            key: s.recurse(n.key),
                            computed: !0,
                            value: s.recurse(n.value)
                        }) : a.push({
                            key: n.key.type === $o.Identifier ? n.key.name : "" + n.key.value,
                            computed: !1,
                            value: s.recurse(n.value)
                        });
                    }), function(n, t, r, i) {
                        for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(n, t, r, i)] = a[s].value(n, t, r, i) : o[a[s].key] = a[s].value(n, t, r, i);
                        return e ? {
                            value: o
                        } : o;
                    };

                  case $o.ThisExpression:
                    return function(n) {
                        return e ? {
                            value: n
                        } : n;
                    };

                  case $o.LocalsExpression:
                    return function(n, t) {
                        return e ? {
                            value: t
                        } : t;
                    };

                  case $o.NGValueParameter:
                    return function(n, t, r) {
                        return e ? {
                            value: r
                        } : r;
                    };
                }
            },
            "unary+": function(n, e) {
                return function(t, r, i, o) {
                    var a = n(t, r, i, o);
                    return a = y(a) ? +a : 0, e ? {
                        value: a
                    } : a;
                };
            },
            "unary-": function(n, e) {
                return function(t, r, i, o) {
                    var a = n(t, r, i, o);
                    return a = y(a) ? -a : 0, e ? {
                        value: a
                    } : a;
                };
            },
            "unary!": function(n, e) {
                return function(t, r, i, o) {
                    var a = !n(t, r, i, o);
                    return e ? {
                        value: a
                    } : a;
                };
            },
            "binary+": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a), c = e(r, i, o, a), u = st(s, c);
                    return t ? {
                        value: u
                    } : u;
                };
            },
            "binary-": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a), c = e(r, i, o, a), u = (y(s) ? s : 0) - (y(c) ? c : 0);
                    return t ? {
                        value: u
                    } : u;
                };
            },
            "binary*": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) * e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary/": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) / e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary%": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) % e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary===": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) === e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary!==": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) !== e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary==": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) == e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary!=": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) != e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary<": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) < e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary>": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) > e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary<=": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) <= e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary>=": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) >= e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary&&": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) && e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "binary||": function(n, e, t) {
                return function(r, i, o, a) {
                    var s = n(r, i, o, a) || e(r, i, o, a);
                    return t ? {
                        value: s
                    } : s;
                };
            },
            "ternary?:": function(n, e, t, r) {
                return function(i, o, a, s) {
                    var c = n(i, o, a, s) ? e(i, o, a, s) : t(i, o, a, s);
                    return r ? {
                        value: c
                    } : c;
                };
            },
            value: function(n, e) {
                return function() {
                    return e ? {
                        context: void 0,
                        name: void 0,
                        value: n
                    } : n;
                };
            },
            identifier: function(n, e, t, r, i) {
                return function(o, a, s, c) {
                    var u = a && n in a ? a : o;
                    r && 1 !== r && u && !u[n] && (u[n] = {});
                    var l = u ? u[n] : void 0;
                    return e && rt(l, i), t ? {
                        context: u,
                        name: n,
                        value: l
                    } : l;
                };
            },
            computedMember: function(n, e, t, r, i) {
                return function(o, a, s, c) {
                    var u, l, f = n(o, a, s, c);
                    return null != f && (u = e(o, a, s, c), u = tt(u), et(u, i), r && 1 !== r && (ot(f), 
                    f && !f[u] && (f[u] = {})), l = f[u], rt(l, i)), t ? {
                        context: f,
                        name: u,
                        value: l
                    } : l;
                };
            },
            nonComputedMember: function(n, e, t, r, i, o) {
                return function(a, s, c, u) {
                    var l = n(a, s, c, u);
                    i && 1 !== i && (ot(l), l && !l[e] && (l[e] = {}));
                    var f = null != l ? l[e] : void 0;
                    return (t || vt(e)) && rt(f, o), r ? {
                        context: l,
                        name: e,
                        value: f
                    } : f;
                };
            },
            inputs: function(n, e) {
                return function(t, r, i, o) {
                    return o ? o[e] : n(t, r, i);
                };
            }
        };
        var wo = function(n, e, t) {
            this.lexer = n, this.$filter = e, this.options = t, this.ast = new $o(n, t), this.astCompiler = t.csp ? new mt(this.ast, e) : new gt(this.ast, e);
        };
        wo.prototype = {
            constructor: wo,
            parse: function(n) {
                return this.astCompiler.compile(n, this.options.expensiveChecks);
            }
        };
        var bo = Object.prototype.valueOf, xo = e("$sce"), Io = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, ko = e("$compile"), Co = n.document.createElement("a"), So = Pt(n.location.href);
        Dt.$inject = [ "$document" ], Rt.$inject = [ "$provide" ];
        var _o = 22, Eo = ".", To = "0";
        Vt.$inject = [ "$locale" ], zt.$inject = [ "$locale" ];
        var Ao = {
            yyyy: Jt("FullYear", 4, 0, !1, !0),
            yy: Jt("FullYear", 2, 0, !0, !0),
            y: Jt("FullYear", 1, 0, !1, !0),
            MMMM: Kt("Month"),
            MMM: Kt("Month", !0),
            MM: Jt("Month", 2, 1),
            M: Jt("Month", 1, 1),
            LLLL: Kt("Month", !1, !0),
            dd: Jt("Date", 2),
            d: Jt("Date", 1),
            HH: Jt("Hours", 2),
            H: Jt("Hours", 1),
            hh: Jt("Hours", 2, -12),
            h: Jt("Hours", 1, -12),
            mm: Jt("Minutes", 2),
            m: Jt("Minutes", 1),
            ss: Jt("Seconds", 2),
            s: Jt("Seconds", 1),
            sss: Jt("Milliseconds", 3),
            EEEE: Kt("Day"),
            EEE: Kt("Day", !0),
            a: tr,
            Z: Zt,
            ww: er(2),
            w: er(1),
            G: rr,
            GG: rr,
            GGG: rr,
            GGGG: ir
        }, Oo = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, No = /^\-?\d+$/;
        or.$inject = [ "$locale" ];
        var jo = g(jr), Po = g(Pr);
        ur.$inject = [ "$parse" ];
        var Lo = g({
            restrict: "E",
            compile: function(n, e) {
                if (!e.href && !e.xlinkHref) return function(n, e) {
                    if ("a" === e[0].nodeName.toLowerCase()) {
                        var t = "[object SVGAnimatedString]" === Vr.call(e.prop("href")) ? "xlink:href" : "href";
                        e.on("click", function(n) {
                            e.attr(t) || n.preventDefault();
                        });
                    }
                };
            }
        }), Mo = {};
        r(_i, function(n, e) {
            function t(n, t, i) {
                n.$watch(i[r], function(n) {
                    i.$set(e, !!n);
                });
            }
            if ("multiple" != n) {
                var r = ve("ng-" + e), i = t;
                "checked" === n && (i = function(n, e, i) {
                    i.ngModel !== i[r] && t(n, e, i);
                }), Mo[r] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: i
                    };
                };
            }
        }), r(Ti, function(n, e) {
            Mo[e] = function() {
                return {
                    priority: 100,
                    link: function(n, t, r) {
                        if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(Ar);
                            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]));
                        }
                        n.$watch(r[e], function(n) {
                            r.$set(e, n);
                        });
                    }
                };
            };
        }), r([ "src", "srcset", "href" ], function(n) {
            var e = ve("ng-" + n);
            Mo[e] = function() {
                return {
                    priority: 99,
                    link: function(t, r, i) {
                        var o = n, a = n;
                        "href" === n && "[object SVGAnimatedString]" === Vr.call(r.prop("href")) && (a = "xlinkHref", 
                        i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
                            return e ? (i.$set(a, e), void (Dr && o && r.prop(o, i[a]))) : void ("href" === n && i.$set(a, null));
                        });
                    }
                };
            };
        });
        var Do = {
            $addControl: p,
            $$renameControl: fr,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        }, qo = "ng-submitted";
        dr.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
        var Ro = function(n) {
            return [ "$timeout", "$parse", function(e, t) {
                function r(n) {
                    return "" === n ? t('this[""]').assign : t(n).assign || p;
                }
                var i = {
                    name: "form",
                    restrict: n ? "EAC" : "E",
                    require: [ "form", "^^?form" ],
                    controller: dr,
                    compile: function(t, i) {
                        t.addClass(ba).addClass($a);
                        var o = i.name ? "name" : !(!n || !i.ngForm) && "ngForm";
                        return {
                            pre: function(n, t, i, a) {
                                var s = a[0];
                                if (!("action" in i)) {
                                    var c = function(e) {
                                        n.$apply(function() {
                                            s.$commitViewValue(), s.$setSubmitted();
                                        }), e.preventDefault();
                                    };
                                    hi(t[0], "submit", c), t.on("$destroy", function() {
                                        e(function() {
                                            gi(t[0], "submit", c);
                                        }, 0, !1);
                                    });
                                }
                                var l = a[1] || s.$$parentForm;
                                l.$addControl(s);
                                var f = o ? r(s.$name) : p;
                                o && (f(n, s), i.$observe(o, function(e) {
                                    s.$name !== e && (f(n, void 0), s.$$parentForm.$$renameControl(s, e), (f = r(s.$name))(n, s));
                                })), t.on("$destroy", function() {
                                    s.$$parentForm.$removeControl(s), f(n, void 0), u(s, Do);
                                });
                            }
                        };
                    }
                };
                return i;
            } ];
        }, Bo = Ro(), Fo = Ro(!0), Uo = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, Ho = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Vo = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, zo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Wo = /^(\d{4,})-(\d{2})-(\d{2})$/, Go = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Xo = /^(\d{4,})-W(\d\d)$/, Yo = /^(\d{4,})-(\d\d)$/, Jo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Ko = "keydown wheel mousedown", Zo = gn();
        r("date,datetime-local,month,time,week".split(","), function(n) {
            Zo[n] = !0;
        });
        var Qo = {
            text: hr,
            date: yr("date", Wo, vr(Wo, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
            "datetime-local": yr("datetimelocal", Go, vr(Go, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: yr("time", Jo, vr(Jo, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
            week: yr("week", Xo, mr, "yyyy-Www"),
            month: yr("month", Yo, vr(Yo, [ "yyyy", "MM" ]), "yyyy-MM"),
            number: wr,
            url: br,
            email: xr,
            radio: Ir,
            checkbox: Cr,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        }, na = [ "$browser", "$sniffer", "$filter", "$parse", function(n, e, t, r) {
            return {
                restrict: "E",
                require: [ "?ngModel" ],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (Qo[jr(a.type)] || Qo.text)(i, o, a, s[0], e, n, t, r);
                    }
                }
            };
        } ], ea = /^(true|false|\d+)$/, ta = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(n, e) {
                    return ea.test(e.ngValue) ? function(n, e, t) {
                        t.$set("value", n.$eval(t.ngValue));
                    } : function(n, e, t) {
                        n.$watch(t.ngValue, function(n) {
                            t.$set("value", n);
                        });
                    };
                }
            };
        }, ra = [ "$compile", function(n) {
            return {
                restrict: "AC",
                compile: function(e) {
                    return n.$$addBindingClass(e), function(e, t, r) {
                        n.$$addBindingInfo(t, r.ngBind), t = t[0], e.$watch(r.ngBind, function(n) {
                            t.textContent = v(n) ? "" : n;
                        });
                    };
                }
            };
        } ], ia = [ "$interpolate", "$compile", function(n, e) {
            return {
                compile: function(t) {
                    return e.$$addBindingClass(t), function(t, r, i) {
                        var o = n(r.attr(i.$attr.ngBindTemplate));
                        e.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(n) {
                            r.textContent = v(n) ? "" : n;
                        });
                    };
                }
            };
        } ], oa = [ "$sce", "$parse", "$compile", function(n, e, t) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function(e) {
                        return n.valueOf(e);
                    });
                    return t.$$addBindingClass(r), function(e, r, i) {
                        t.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
                            var t = o(e);
                            r.html(n.getTrustedHtml(t) || "");
                        });
                    };
                }
            };
        } ], aa = g({
            restrict: "A",
            require: "ngModel",
            link: function(n, e, t, r) {
                r.$viewChangeListeners.push(function() {
                    n.$eval(t.ngChange);
                });
            }
        }), sa = Sr("", !0), ca = Sr("Odd", 0), ua = Sr("Even", 1), la = lr({
            compile: function(n, e) {
                e.$set("ngCloak", void 0), n.removeClass("ng-cloak");
            }
        }), fa = [ function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            };
        } ], da = {}, pa = {
            blur: !0,
            focus: !0
        };
        r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(n) {
            var e = ve("ng-" + n);
            da[e] = [ "$parse", "$rootScope", function(t, r) {
                return {
                    restrict: "A",
                    compile: function(i, o) {
                        var a = t(o[e], null, !0);
                        return function(e, t) {
                            t.on(n, function(t) {
                                var i = function() {
                                    a(e, {
                                        $event: t
                                    });
                                };
                                pa[n] && r.$$phase ? e.$evalAsync(i) : e.$apply(i);
                            });
                        };
                    }
                };
            } ];
        });
        var ha = [ "$animate", "$compile", function(n, e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(t, r, i, o, a) {
                    var s, c, u;
                    t.$watch(i.ngIf, function(t) {
                        t ? c || a(function(t, o) {
                            c = o, t[t.length++] = e.$$createComment("end ngIf", i.ngIf), s = {
                                clone: t
                            }, n.enter(t, r.parent(), r);
                        }) : (u && (u.remove(), u = null), c && (c.$destroy(), c = null), s && (u = hn(s.clone), 
                        n.leave(u).then(function() {
                            u = null;
                        }), s = null));
                    });
                }
            };
        } ], ga = [ "$templateRequest", "$anchorScroll", "$animate", function(n, e, t) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Gr.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                    return function(r, i, c, u, l) {
                        var f, d, p, h = 0, g = function() {
                            d && (d.remove(), d = null), f && (f.$destroy(), f = null), p && (t.leave(p).then(function() {
                                d = null;
                            }), d = p, p = null);
                        };
                        r.$watch(o, function(o) {
                            var c = function() {
                                !y(s) || s && !r.$eval(s) || e();
                            }, d = ++h;
                            o ? (n(o, !0).then(function(n) {
                                if (!r.$$destroyed && d === h) {
                                    var e = r.$new();
                                    u.template = n;
                                    var s = l(e, function(n) {
                                        g(), t.enter(n, null, i).then(c);
                                    });
                                    f = e, p = s, f.$emit("$includeContentLoaded", o), r.$eval(a);
                                }
                            }, function() {
                                r.$$destroyed || d === h && (g(), r.$emit("$includeContentError", o));
                            }), r.$emit("$includeContentRequested", o)) : (g(), u.template = null);
                        });
                    };
                }
            };
        } ], ma = [ "$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(t, r, i, o) {
                    return Vr.call(r[0]).match(/SVG/) ? (r.empty(), void e(_n(o.template, n.document).childNodes)(t, function(n) {
                        r.append(n);
                    }, {
                        futureParentElement: r
                    })) : (r.html(o.template), void e(r.contents())(t));
                }
            };
        } ], va = lr({
            priority: 450,
            compile: function() {
                return {
                    pre: function(n, e, t) {
                        n.$eval(t.ngInit);
                    }
                };
            }
        }), ya = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(n, e, t, i) {
                    var o = e.attr(t.$attr.ngList) || ", ", a = "false" !== t.ngTrim, s = a ? Kr(o) : o, c = function(n) {
                        if (!v(n)) {
                            var e = [];
                            return n && r(n.split(s), function(n) {
                                n && e.push(a ? Kr(n) : n);
                            }), e;
                        }
                    };
                    i.$parsers.push(c), i.$formatters.push(function(n) {
                        if (Yr(n)) return n.join(o);
                    }), i.$isEmpty = function(n) {
                        return !n || !n.length;
                    };
                }
            };
        }, $a = "ng-valid", wa = "ng-invalid", ba = "ng-pristine", xa = "ng-dirty", Ia = "ng-untouched", ka = "ng-touched", Ca = "ng-pending", Sa = "ng-empty", _a = "ng-not-empty", Ea = e("ngModel"), Ta = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(n, e, t, i, o, a, s, c, u, l) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, 
            this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
            this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
            this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
            this.$pending = void 0, this.$name = l(t.name || "", !1)(n), this.$$parentForm = Do;
            var f, d = o(t.ngModel), h = d.assign, g = d, m = h, $ = null, w = this;
            this.$$setOptions = function(n) {
                if (w.$options = n, n && n.getterSetter) {
                    var e = o(t.ngModel + "()"), r = o(t.ngModel + "($$$p)");
                    g = function(n) {
                        var t = d(n);
                        return k(t) && (t = e(n)), t;
                    }, m = function(n, e) {
                        k(d(n)) ? r(n, {
                            $$$p: e
                        }) : h(n, e);
                    };
                } else if (!d.assign) throw Ea("nonassign", "Expression '{0}' is non-assignable. Element: {1}", t.ngModel, J(i));
            }, this.$render = p, this.$isEmpty = function(n) {
                return v(n) || "" === n || null === n || n !== n;
            }, this.$$updateEmptyClasses = function(n) {
                w.$isEmpty(n) ? (a.removeClass(i, _a), a.addClass(i, Sa)) : (a.removeClass(i, Sa), 
                a.addClass(i, _a));
            };
            var b = 0;
            _r({
                ctrl: this,
                $element: i,
                set: function(n, e) {
                    n[e] = !0;
                },
                unset: function(n, e) {
                    delete n[e];
                },
                $animate: a
            }), this.$setPristine = function() {
                w.$dirty = !1, w.$pristine = !0, a.removeClass(i, xa), a.addClass(i, ba);
            }, this.$setDirty = function() {
                w.$dirty = !0, w.$pristine = !1, a.removeClass(i, ba), a.addClass(i, xa), w.$$parentForm.$setDirty();
            }, this.$setUntouched = function() {
                w.$touched = !1, w.$untouched = !0, a.setClass(i, Ia, ka);
            }, this.$setTouched = function() {
                w.$touched = !0, w.$untouched = !1, a.setClass(i, ka, Ia);
            }, this.$rollbackViewValue = function() {
                s.cancel($), w.$viewValue = w.$$lastCommittedViewValue, w.$render();
            }, this.$validate = function() {
                if (!x(w.$modelValue) || !isNaN(w.$modelValue)) {
                    var n = w.$$lastCommittedViewValue, e = w.$$rawModelValue, t = w.$valid, r = w.$modelValue, i = w.$options && w.$options.allowInvalid;
                    w.$$runValidators(e, n, function(n) {
                        i || t === n || (w.$modelValue = n ? e : void 0, w.$modelValue !== r && w.$$writeModelToScope());
                    });
                }
            }, this.$$runValidators = function(n, e, t) {
                function i() {
                    var n = w.$$parserName || "parse";
                    return v(f) ? (s(n, null), !0) : (f || (r(w.$validators, function(n, e) {
                        s(e, null);
                    }), r(w.$asyncValidators, function(n, e) {
                        s(e, null);
                    })), s(n, f), f);
                }
                function o() {
                    var t = !0;
                    return r(w.$validators, function(r, i) {
                        var o = r(n, e);
                        t = t && o, s(i, o);
                    }), !!t || (r(w.$asyncValidators, function(n, e) {
                        s(e, null);
                    }), !1);
                }
                function a() {
                    var t = [], i = !0;
                    r(w.$asyncValidators, function(r, o) {
                        var a = r(n, e);
                        if (!N(a)) throw Ea("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                        s(o, void 0), t.push(a.then(function() {
                            s(o, !0);
                        }, function() {
                            i = !1, s(o, !1);
                        }));
                    }), t.length ? u.all(t).then(function() {
                        c(i);
                    }, p) : c(!0);
                }
                function s(n, e) {
                    l === b && w.$setValidity(n, e);
                }
                function c(n) {
                    l === b && t(n);
                }
                b++;
                var l = b;
                return i() && o() ? void a() : void c(!1);
            }, this.$commitViewValue = function() {
                var n = w.$viewValue;
                s.cancel($), (w.$$lastCommittedViewValue !== n || "" === n && w.$$hasNativeValidators) && (w.$$updateEmptyClasses(n), 
                w.$$lastCommittedViewValue = n, w.$pristine && this.$setDirty(), this.$$parseAndValidate());
            }, this.$$parseAndValidate = function() {
                function e() {
                    w.$modelValue !== o && w.$$writeModelToScope();
                }
                var t = w.$$lastCommittedViewValue, r = t;
                if (f = !v(r) || void 0) for (var i = 0; i < w.$parsers.length; i++) if (r = w.$parsers[i](r), 
                v(r)) {
                    f = !1;
                    break;
                }
                x(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = g(n));
                var o = w.$modelValue, a = w.$options && w.$options.allowInvalid;
                w.$$rawModelValue = r, a && (w.$modelValue = r, e()), w.$$runValidators(r, w.$$lastCommittedViewValue, function(n) {
                    a || (w.$modelValue = n ? r : void 0, e());
                });
            }, this.$$writeModelToScope = function() {
                m(n, w.$modelValue), r(w.$viewChangeListeners, function(n) {
                    try {
                        n();
                    } catch (t) {
                        e(t);
                    }
                });
            }, this.$setViewValue = function(n, e) {
                w.$viewValue = n, w.$options && !w.$options.updateOnDefault || w.$$debounceViewValueCommit(e);
            }, this.$$debounceViewValueCommit = function(e) {
                var t, r = 0, i = w.$options;
                i && y(i.debounce) && (t = i.debounce, x(t) ? r = t : x(t[e]) ? r = t[e] : x(t["default"]) && (r = t["default"])), 
                s.cancel($), r ? $ = s(function() {
                    w.$commitViewValue();
                }, r) : c.$$phase ? w.$commitViewValue() : n.$apply(function() {
                    w.$commitViewValue();
                });
            }, n.$watch(function() {
                var e = g(n);
                if (e !== w.$modelValue && (w.$modelValue === w.$modelValue || e === e)) {
                    w.$modelValue = w.$$rawModelValue = e, f = void 0;
                    for (var t = w.$formatters, r = t.length, i = e; r--; ) i = t[r](i);
                    w.$viewValue !== i && (w.$$updateEmptyClasses(i), w.$viewValue = w.$$lastCommittedViewValue = i, 
                    w.$render(), w.$$runValidators(e, i, p));
                }
                return e;
            });
        } ], Aa = [ "$rootScope", function(n) {
            return {
                restrict: "A",
                require: [ "ngModel", "^?form", "^?ngModelOptions" ],
                controller: Ta,
                priority: 1,
                compile: function(e) {
                    return e.addClass(ba).addClass(Ia).addClass($a), {
                        pre: function(n, e, t, r) {
                            var i = r[0], o = r[1] || i.$$parentForm;
                            i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), t.$observe("name", function(n) {
                                i.$name !== n && i.$$parentForm.$$renameControl(i, n);
                            }), n.$on("$destroy", function() {
                                i.$$parentForm.$removeControl(i);
                            });
                        },
                        post: function(e, t, r, i) {
                            var o = i[0];
                            o.$options && o.$options.updateOn && t.on(o.$options.updateOn, function(n) {
                                o.$$debounceViewValueCommit(n && n.type);
                            }), t.on("blur", function() {
                                o.$touched || (n.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched));
                            });
                        }
                    };
                }
            };
        } ], Oa = /(\s+|^)default(\s+|$)/, Na = function() {
            return {
                restrict: "A",
                controller: [ "$scope", "$attrs", function(n, e) {
                    var t = this;
                    this.$options = R(n.$eval(e.ngModelOptions)), y(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, 
                    this.$options.updateOn = Kr(this.$options.updateOn.replace(Oa, function() {
                        return t.$options.updateOnDefault = !0, " ";
                    }))) : this.$options.updateOnDefault = !0;
                } ]
            };
        }, ja = lr({
            terminal: !0,
            priority: 1e3
        }), Pa = e("ngOptions"), La = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Ma = [ "$compile", "$document", "$parse", function(e, i, o) {
            function a(n, e, r) {
                function i(n, e, t, r, i) {
                    this.selectValue = n, this.viewValue = e, this.label = t, this.group = r, this.disabled = i;
                }
                function a(n) {
                    var e;
                    if (!u && t(n)) e = n; else {
                        e = [];
                        for (var r in n) n.hasOwnProperty(r) && "$" !== r.charAt(0) && e.push(r);
                    }
                    return e;
                }
                var s = n.match(La);
                if (!s) throw Pa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", n, J(e));
                var c = s[5] || s[7], u = s[6], l = / as /.test(s[0]) && s[1], f = s[9], d = o(s[2] ? s[1] : c), p = l && o(l), h = p || d, g = f && o(f), m = f ? function(n, e) {
                    return g(r, e);
                } : function(n) {
                    return Zn(n);
                }, v = function(n, e) {
                    return m(n, I(n, e));
                }, y = o(s[2] || s[1]), $ = o(s[3] || ""), w = o(s[4] || ""), b = o(s[8]), x = {}, I = u ? function(n, e) {
                    return x[u] = e, x[c] = n, x;
                } : function(n) {
                    return x[c] = n, x;
                };
                return {
                    trackBy: f,
                    getTrackByValue: v,
                    getWatchables: o(b, function(n) {
                        var e = [];
                        n = n || [];
                        for (var t = a(n), i = t.length, o = 0; o < i; o++) {
                            var c = n === t ? o : t[o], u = n[c], l = I(u, c), f = m(u, l);
                            if (e.push(f), s[2] || s[1]) {
                                var d = y(r, l);
                                e.push(d);
                            }
                            if (s[4]) {
                                var p = w(r, l);
                                e.push(p);
                            }
                        }
                        return e;
                    }),
                    getOptions: function() {
                        for (var n = [], e = {}, t = b(r) || [], o = a(t), s = o.length, c = 0; c < s; c++) {
                            var u = t === o ? c : o[c], l = t[u], d = I(l, u), p = h(r, d), g = m(p, d), x = y(r, d), k = $(r, d), C = w(r, d), S = new i(g, p, x, k, C);
                            n.push(S), e[g] = S;
                        }
                        return {
                            items: n,
                            selectValueMap: e,
                            getOptionFromViewValue: function(n) {
                                return e[v(n)];
                            },
                            getViewValueFromOption: function(n) {
                                return f ? Gr.copy(n.viewValue) : n.viewValue;
                            }
                        };
                    }
                };
            }
            function s(n, t, o, s) {
                function l(n, e) {
                    var t = c.cloneNode(!1);
                    e.appendChild(t), f(n, t);
                }
                function f(n, e) {
                    n.element = e, e.disabled = n.disabled, n.label !== e.label && (e.label = n.label, 
                    e.textContent = n.label), n.value !== e.value && (e.value = n.selectValue);
                }
                function d() {
                    var n = I && h.readValue();
                    if (I) for (var e = I.items.length - 1; e >= 0; e--) {
                        var r = I.items[e];
                        Vn(y(r.group) ? r.element.parentNode : r.element);
                    }
                    I = k.getOptions();
                    var i = {};
                    if (b && t.prepend(p), I.items.forEach(function(n) {
                        var e;
                        y(n.group) ? (e = i[n.group], e || (e = u.cloneNode(!1), C.appendChild(e), e.label = null === n.group ? "null" : n.group, 
                        i[n.group] = e), l(n, e)) : l(n, C);
                    }), t[0].appendChild(C), g.$render(), !g.$isEmpty(n)) {
                        var o = h.readValue(), a = k.trackBy || m;
                        (a ? B(n, o) : n === o) || (g.$setViewValue(o), g.$render());
                    }
                }
                for (var p, h = s[0], g = s[1], m = o.multiple, v = 0, $ = t.children(), w = $.length; v < w; v++) if ("" === $[v].value) {
                    p = $.eq(v);
                    break;
                }
                var b = !!p, x = qr(c.cloneNode(!1));
                x.val("?");
                var I, k = a(o.ngOptions, t, n), C = i[0].createDocumentFragment(), S = function() {
                    b || t.prepend(p), t.val(""), p.prop("selected", !0), p.attr("selected", !0);
                }, _ = function() {
                    b || p.remove();
                }, E = function() {
                    t.prepend(x), t.val("?"), x.prop("selected", !0), x.attr("selected", !0);
                }, T = function() {
                    x.remove();
                };
                m ? (g.$isEmpty = function(n) {
                    return !n || 0 === n.length;
                }, h.writeValue = function(n) {
                    I.items.forEach(function(n) {
                        n.element.selected = !1;
                    }), n && n.forEach(function(n) {
                        var e = I.getOptionFromViewValue(n);
                        e && (e.element.selected = !0);
                    });
                }, h.readValue = function() {
                    var n = t.val() || [], e = [];
                    return r(n, function(n) {
                        var t = I.selectValueMap[n];
                        t && !t.disabled && e.push(I.getViewValueFromOption(t));
                    }), e;
                }, k.trackBy && n.$watchCollection(function() {
                    if (Yr(g.$viewValue)) return g.$viewValue.map(function(n) {
                        return k.getTrackByValue(n);
                    });
                }, function() {
                    g.$render();
                })) : (h.writeValue = function(n) {
                    var e = I.getOptionFromViewValue(n);
                    e ? (t[0].value !== e.selectValue && (T(), _(), t[0].value = e.selectValue, e.element.selected = !0), 
                    e.element.setAttribute("selected", "selected")) : null === n || b ? (T(), S()) : (_(), 
                    E());
                }, h.readValue = function() {
                    var n = I.selectValueMap[t.val()];
                    return n && !n.disabled ? (_(), T(), I.getViewValueFromOption(n)) : null;
                }, k.trackBy && n.$watch(function() {
                    return k.getTrackByValue(g.$viewValue);
                }, function() {
                    g.$render();
                })), b ? (p.remove(), e(p)(n), p.removeClass("ng-scope")) : p = qr(c.cloneNode(!1)), 
                t.empty(), d(), n.$watchCollection(k.getWatchables, d);
            }
            var c = n.document.createElement("option"), u = n.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: [ "select", "ngModel" ],
                link: {
                    pre: function(n, e, t, r) {
                        r[0].registerOption = p;
                    },
                    post: s
                }
            };
        } ], Da = [ "$locale", "$interpolate", "$log", function(n, e, t) {
            var i = /{}/g, o = /^when(Minus)?(.+)$/;
            return {
                link: function(a, s, c) {
                    function u(n) {
                        s.text(n || "");
                    }
                    var l, f = c.count, d = c.$attr.when && s.attr(c.$attr.when), h = c.offset || 0, g = a.$eval(d) || {}, m = {}, y = e.startSymbol(), $ = e.endSymbol(), w = y + f + "-" + h + $, b = Gr.noop;
                    r(c, function(n, e) {
                        var t = o.exec(e);
                        if (t) {
                            var r = (t[1] ? "-" : "") + jr(t[2]);
                            g[r] = s.attr(c.$attr[e]);
                        }
                    }), r(g, function(n, t) {
                        m[t] = e(n.replace(i, w));
                    }), a.$watch(f, function(e) {
                        var r = parseFloat(e), i = isNaN(r);
                        if (i || r in g || (r = n.pluralCat(r - h)), r !== l && !(i && x(l) && isNaN(l))) {
                            b();
                            var o = m[r];
                            v(o) ? (null != e && t.debug("ngPluralize: no rule defined for '" + r + "' in " + d), 
                            b = p, u()) : b = a.$watch(o, u), l = r;
                        }
                    });
                }
            };
        } ], qa = [ "$parse", "$animate", "$compile", function(n, i, o) {
            var a = "$$NG_REMOVED", s = e("ngRepeat"), c = function(n, e, t, r, i, o, a) {
                n[t] = r, i && (n[i] = o), n.$index = e, n.$first = 0 === e, n.$last = e === a - 1, 
                n.$middle = !(n.$first || n.$last), n.$odd = !(n.$even = 0 === (1 & e));
            }, u = function(n) {
                return n.clone[0];
            }, l = function(n) {
                return n.clone[n.clone.length - 1];
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(e, f) {
                    var d = f.ngRepeat, p = o.$$createComment("end ngRepeat", d), h = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!h) throw s("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
                    var g = h[1], m = h[2], v = h[3], y = h[4];
                    if (h = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !h) throw s("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
                    var $ = h[3] || h[1], w = h[2];
                    if (v && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(v))) throw s("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", v);
                    var b, x, I, k, C = {
                        $id: Zn
                    };
                    return y ? b = n(y) : (I = function(n, e) {
                        return Zn(e);
                    }, k = function(n) {
                        return n;
                    }), function(n, e, o, f, h) {
                        b && (x = function(e, t, r) {
                            return w && (C[w] = e), C[$] = t, C.$index = r, b(n, C);
                        });
                        var g = gn();
                        n.$watchCollection(m, function(o) {
                            var f, m, y, b, C, S, _, E, T, A, O, N, j = e[0], P = gn();
                            if (v && (n[v] = o), t(o)) T = o, E = x || I; else {
                                E = x || k, T = [];
                                for (var L in o) Nr.call(o, L) && "$" !== L.charAt(0) && T.push(L);
                            }
                            for (b = T.length, O = new Array(b), f = 0; f < b; f++) if (C = o === T ? f : T[f], 
                            S = o[C], _ = E(C, S, f), g[_]) A = g[_], delete g[_], P[_] = A, O[f] = A; else {
                                if (P[_]) throw r(O, function(n) {
                                    n && n.scope && (g[n.id] = n);
                                }), s("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, _, S);
                                O[f] = {
                                    id: _,
                                    scope: void 0,
                                    clone: void 0
                                }, P[_] = !0;
                            }
                            for (var M in g) {
                                if (A = g[M], N = hn(A.clone), i.leave(N), N[0].parentNode) for (f = 0, m = N.length; f < m; f++) N[f][a] = !0;
                                A.scope.$destroy();
                            }
                            for (f = 0; f < b; f++) if (C = o === T ? f : T[f], S = o[C], A = O[f], A.scope) {
                                y = j;
                                do y = y.nextSibling; while (y && y[a]);
                                u(A) != y && i.move(hn(A.clone), null, j), j = l(A), c(A.scope, f, $, S, w, C, b);
                            } else h(function(n, e) {
                                A.scope = e;
                                var t = p.cloneNode(!1);
                                n[n.length++] = t, i.enter(n, null, j), j = t, A.clone = n, P[A.id] = A, c(A.scope, f, $, S, w, C, b);
                            });
                            g = P;
                        });
                    };
                }
            };
        } ], Ra = "ng-hide", Ba = "ng-hide-animate", Fa = [ "$animate", function(n) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, t, r) {
                    e.$watch(r.ngShow, function(e) {
                        n[e ? "removeClass" : "addClass"](t, Ra, {
                            tempClasses: Ba
                        });
                    });
                }
            };
        } ], Ua = [ "$animate", function(n) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, t, r) {
                    e.$watch(r.ngHide, function(e) {
                        n[e ? "addClass" : "removeClass"](t, Ra, {
                            tempClasses: Ba
                        });
                    });
                }
            };
        } ], Ha = lr(function(n, e, t) {
            n.$watch(t.ngStyle, function(n, t) {
                t && n !== t && r(t, function(n, t) {
                    e.css(t, "");
                }), n && e.css(n);
            }, !0);
        }), Va = [ "$animate", "$compile", function(n, e) {
            return {
                require: "ngSwitch",
                controller: [ "$scope", function() {
                    this.cases = {};
                } ],
                link: function(t, i, o, a) {
                    var s = o.ngSwitch || o.on, c = [], u = [], l = [], f = [], d = function(n, e) {
                        return function() {
                            n.splice(e, 1);
                        };
                    };
                    t.$watch(s, function(t) {
                        var i, o;
                        for (i = 0, o = l.length; i < o; ++i) n.cancel(l[i]);
                        for (l.length = 0, i = 0, o = f.length; i < o; ++i) {
                            var s = hn(u[i].clone);
                            f[i].$destroy();
                            var p = l[i] = n.leave(s);
                            p.then(d(l, i));
                        }
                        u.length = 0, f.length = 0, (c = a.cases["!" + t] || a.cases["?"]) && r(c, function(t) {
                            t.transclude(function(r, i) {
                                f.push(i);
                                var o = t.element;
                                r[r.length++] = e.$$createComment("end ngSwitchWhen");
                                var a = {
                                    clone: r
                                };
                                u.push(a), n.enter(r, o.parent(), o);
                            });
                        });
                    });
                }
            };
        } ], za = lr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(n, e, t, r, i) {
                r.cases["!" + t.ngSwitchWhen] = r.cases["!" + t.ngSwitchWhen] || [], r.cases["!" + t.ngSwitchWhen].push({
                    transclude: i,
                    element: e
                });
            }
        }), Wa = lr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(n, e, t, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: e
                });
            }
        }), Ga = e("ngTransclude"), Xa = [ "$compile", function(n) {
            return {
                restrict: "EAC",
                terminal: !0,
                compile: function(e) {
                    var t = n(e.contents());
                    return e.empty(), function(n, e, r, i, o) {
                        function a(n, t) {
                            n.length ? e.append(n) : (s(), t.$destroy());
                        }
                        function s() {
                            t(n, function(n) {
                                e.append(n);
                            });
                        }
                        if (!o) throw Ga("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", J(e));
                        r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
                        var c = r.ngTransclude || r.ngTranscludeSlot;
                        o(a, null, c), c && !o.isSlotFilled(c) && s();
                    };
                }
            };
        } ], Ya = [ "$templateCache", function(n) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(e, t) {
                    if ("text/ng-template" == t.type) {
                        var r = t.id, i = e[0].text;
                        n.put(r, i);
                    }
                }
            };
        } ], Ja = {
            $setViewValue: p,
            $render: p
        }, Ka = [ "$element", "$scope", function(e, t) {
            var r = this, i = new Qn();
            r.ngModelCtrl = Ja, r.unknownOption = qr(n.document.createElement("option")), r.renderUnknownOption = function(n) {
                var t = "? " + Zn(n) + " ?";
                r.unknownOption.val(t), e.prepend(r.unknownOption), e.val(t);
            }, t.$on("$destroy", function() {
                r.renderUnknownOption = p;
            }), r.removeUnknownOption = function() {
                r.unknownOption.parent() && r.unknownOption.remove();
            }, r.readValue = function() {
                return r.removeUnknownOption(), e.val();
            }, r.writeValue = function(n) {
                r.hasOption(n) ? (r.removeUnknownOption(), e.val(n), "" === n && r.emptyOption.prop("selected", !0)) : null == n && r.emptyOption ? (r.removeUnknownOption(), 
                e.val("")) : r.renderUnknownOption(n);
            }, r.addOption = function(n, e) {
                if (e[0].nodeType !== ci) {
                    dn(n, '"option value"'), "" === n && (r.emptyOption = e);
                    var t = i.get(n) || 0;
                    i.put(n, t + 1), r.ngModelCtrl.$render(), Tr(e);
                }
            }, r.removeOption = function(n) {
                var e = i.get(n);
                e && (1 === e ? (i.remove(n), "" === n && (r.emptyOption = void 0)) : i.put(n, e - 1));
            }, r.hasOption = function(n) {
                return !!i.get(n);
            }, r.registerOption = function(n, e, t, i, o) {
                if (i) {
                    var a;
                    t.$observe("value", function(n) {
                        y(a) && r.removeOption(a), a = n, r.addOption(n, e);
                    });
                } else o ? n.$watch(o, function(n, i) {
                    t.$set("value", n), i !== n && r.removeOption(i), r.addOption(n, e);
                }) : r.addOption(t.value, e);
                e.on("$destroy", function() {
                    r.removeOption(t.value), r.ngModelCtrl.$render();
                });
            };
        } ], Za = function() {
            function n(n, e, t, i) {
                var o = i[1];
                if (o) {
                    var a = i[0];
                    if (a.ngModelCtrl = o, e.on("change", function() {
                        n.$apply(function() {
                            o.$setViewValue(a.readValue());
                        });
                    }), t.multiple) {
                        a.readValue = function() {
                            var n = [];
                            return r(e.find("option"), function(e) {
                                e.selected && n.push(e.value);
                            }), n;
                        }, a.writeValue = function(n) {
                            var t = new Qn(n);
                            r(e.find("option"), function(n) {
                                n.selected = y(t.get(n.value));
                            });
                        };
                        var s, c = NaN;
                        n.$watch(function() {
                            c !== o.$viewValue || B(s, o.$viewValue) || (s = vn(o.$viewValue), o.$render()), 
                            c = o.$viewValue;
                        }), o.$isEmpty = function(n) {
                            return !n || 0 === n.length;
                        };
                    }
                }
            }
            function e(n, e, t, r) {
                var i = r[1];
                if (i) {
                    var o = r[0];
                    i.$render = function() {
                        o.writeValue(i.$viewValue);
                    };
                }
            }
            return {
                restrict: "E",
                require: [ "select", "?ngModel" ],
                controller: Ka,
                priority: 1,
                link: {
                    pre: n,
                    post: e
                }
            };
        }, Qa = [ "$interpolate", function(n) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(e, t) {
                    if (y(t.value)) var r = n(t.value, !0); else {
                        var i = n(e.text(), !0);
                        i || t.$set("value", e.text());
                    }
                    return function(n, e, t) {
                        var o = "$selectController", a = e.parent(), s = a.data(o) || a.parent().data(o);
                        s && s.registerOption(n, e, t, r, i);
                    };
                }
            };
        } ], ns = g({
            restrict: "E",
            terminal: !1
        }), es = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(n, e, t, r) {
                    r && (t.required = !0, r.$validators.required = function(n, e) {
                        return !t.required || !r.$isEmpty(e);
                    }, t.$observe("required", function() {
                        r.$validate();
                    }));
                }
            };
        }, ts = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(n, t, r, i) {
                    if (i) {
                        var o, a = r.ngPattern || r.pattern;
                        r.$observe("pattern", function(n) {
                            if (b(n) && n.length > 0 && (n = new RegExp("^" + n + "$")), n && !n.test) throw e("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, n, J(t));
                            o = n || void 0, i.$validate();
                        }), i.$validators.pattern = function(n, e) {
                            return i.$isEmpty(e) || v(o) || o.test(e);
                        };
                    }
                }
            };
        }, rs = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(n, e, t, r) {
                    if (r) {
                        var i = -1;
                        t.$observe("maxlength", function(n) {
                            var e = f(n);
                            i = isNaN(e) ? -1 : e, r.$validate();
                        }), r.$validators.maxlength = function(n, e) {
                            return i < 0 || r.$isEmpty(e) || e.length <= i;
                        };
                    }
                }
            };
        }, is = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(n, e, t, r) {
                    if (r) {
                        var i = 0;
                        t.$observe("minlength", function(n) {
                            i = f(n) || 0, r.$validate();
                        }), r.$validators.minlength = function(n, e) {
                            return r.$isEmpty(e) || e.length >= i;
                        };
                    }
                }
            };
        };
        return n.angular.bootstrap ? void (n.console && console.log("WARNING: Tried to load angular more than once.")) : (un(), 
        wn(Gr), Gr.module("ngLocale", [], [ "$provide", function(n) {
            function e(n) {
                n += "";
                var e = n.indexOf(".");
                return e == -1 ? 0 : n.length - e - 1;
            }
            function t(n, t) {
                var r = t;
                void 0 === r && (r = Math.min(e(n), 3));
                var i = Math.pow(10, r), o = (n * i | 0) % i;
                return {
                    v: r,
                    f: o
                };
            }
            var r = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
            };
            n.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: [ "AM", "PM" ],
                    DAY: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                    ERANAMES: [ "Before Christ", "Anno Domini" ],
                    ERAS: [ "BC", "AD" ],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    SHORTDAY: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                    SHORTMONTH: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                    STANDALONEMONTH: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    WEEKENDRANGE: [ 5, 6 ],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-¤",
                        negSuf: "",
                        posPre: "¤",
                        posSuf: ""
                    } ]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function(n, e) {
                    var i = 0 | n, o = t(n, e);
                    return 1 == i && 0 == o.v ? r.ONE : r.OTHER;
                }
            });
        } ]), void qr(n.document).ready(function() {
            rn(n.document, on);
        }));
    }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
}, function(n, e) {
    "use strict";
    angular.module("lr.upload", [ "lr.upload.formdata", "lr.upload.iframe", "lr.upload.directives" ]), 
    angular.module("lr.upload.directives", []), angular.module("lr.upload.directives").directive("uploadButton", [ "upload", function(n) {
        return {
            restrict: "EA",
            scope: {
                data: "=?data",
                url: "@",
                param: "@",
                method: "@",
                onUpload: "&",
                onSuccess: "&",
                onError: "&",
                onComplete: "&"
            },
            link: function(e, t, r) {
                var i = angular.element(t), o = angular.element('<input type="file" />');
                if (i.append(o), o.on("change", function() {
                    if (!o[0].files || 0 !== o[0].files.length) {
                        var t = {
                            url: e.url,
                            method: e.method || "POST",
                            forceIFrameUpload: e.$eval(r.forceIframeUpload) || !1,
                            data: e.data || {}
                        };
                        t.data[e.param || "file"] = o, e.$apply(function() {
                            e.onUpload({
                                files: o[0].files
                            });
                        }), n(t).then(function(n) {
                            e.onSuccess({
                                response: n
                            }), e.onComplete({
                                response: n
                            });
                        }, function(n) {
                            e.onError({
                                response: n
                            }), e.onComplete({
                                response: n
                            });
                        });
                    }
                }), "required" in r && r.$observe("required", function(n) {
                    var r = "" === n || e.$eval(n);
                    o.attr("required", r), t.toggleClass("ng-valid", !r), t.toggleClass("ng-invalid ng-invalid-required", r);
                }), "accept" in r && r.$observe("accept", function(n) {
                    o.attr("accept", n);
                }), n.support.formData) {
                    var a = function() {
                        o.attr("multiple", !(!e.$eval(r.multiple) || e.$eval(r.forceIframeUpload)));
                    };
                    r.$observe("multiple", a), r.$observe("forceIframeUpload", a);
                }
            }
        };
    } ]), angular.module("lr.upload.formdata", []).factory("formDataTransform", function() {
        return function(n) {
            var e = new FormData();
            return angular.forEach(n, function(n, t) {
                if (angular.isElement(n)) {
                    var r = [];
                    angular.forEach(n, function(n) {
                        angular.forEach(n.files, function(n) {
                            r.push(n);
                        });
                    }), 0 !== r.length && (r.length > 1 ? angular.forEach(r, function(n, r) {
                        e.append(t + "[" + r + "]", n);
                    }) : e.append(t, r[0]));
                } else e.append(t, n);
            }), e;
        };
    }).factory("formDataUpload", [ "$http", "formDataTransform", function(n, e) {
        return function(t) {
            return t.transformRequest = e, t.headers = angular.extend(t.headers || {}, {
                "Content-Type": void 0
            }), n(t);
        };
    } ]), angular.module("lr.upload.iframe", []).factory("iFrameUpload", [ "$q", "$http", "$document", "$rootScope", function(n, e, t, r) {
        function i(n, e) {
            if (n.indexOf) return n.indexOf(e);
            for (var t = 0; t < n.length; t++) if (e === n[t]) return t;
            return -1;
        }
        function o(o) {
            var a = [], s = n.defer(), c = s.promise;
            angular.forEach(o.data || {}, function(n, e) {
                angular.isElement(n) && (delete o.data[e], n.attr("name", e), a.push(n));
            });
            var u = /\?/.test(o.url) ? "&" : "?";
            "DELETE" === o.method ? (o.url = o.url + u + "_method=DELETE", o.method = "POST") : "PUT" === o.method ? (o.url = o.url + u + "_method=PUT", 
            o.method = "POST") : "PATCH" === o.method && (o.url = o.url + u + "_method=PATCH", 
            o.method = "POST");
            var l = angular.element(t[0].body), f = r.$new(), d = "iframe-transport-" + f.$id;
            f.$destroy();
            var p = angular.element("<form></form>");
            p.attr("target", d), p.attr("action", o.url), p.attr("method", o.method || "POST"), 
            p.css("display", "none"), a.length && (p.attr("enctype", "multipart/form-data"), 
            p.attr("encoding", "multipart/form-data"));
            var h = angular.element('<iframe name="' + d + '" src="javascript:false;"></iframe>');
            return h.on("load", function() {
                function n(n, e) {
                    var t = [];
                    return angular.isFunction(e) ? e(n, t) : (angular.forEach(e, function(e) {
                        n = e(n, t);
                    }), n);
                }
                function t() {
                    var n = i(e.pendingRequests, o);
                    -1 !== n && (e.pendingRequests.splice(n, 1), o.$iframeTransportForm.remove(), delete o.$iframeTransportForm);
                }
                h.off("load").on("load", function() {
                    var t;
                    try {
                        var r = this.contentWindow ? this.contentWindow.document : this.contentDocument;
                        if (t = angular.element(r.body).text(), !t.length) throw new Error();
                    } catch (i) {}
                    p.append(angular.element('<iframe src="javascript:false;"></iframe>'));
                    try {
                        t = n(t, e.defaults.transformResponse);
                    } catch (i) {}
                    s.resolve({
                        data: t,
                        status: 200,
                        headers: [],
                        config: o
                    });
                }), angular.forEach(a, function(n) {
                    var e = n.clone(!0);
                    n.after(e), p.append(n);
                }), angular.forEach(o.data, function(n, e) {
                    var t = angular.element('<input type="hidden" />');
                    t.attr("name", e), t.val(n), p.append(t);
                }), o.$iframeTransportForm = p, e.pendingRequests.push(o), p[0].submit(), c.then(t, t);
            }), p.append(h), l.append(p), c;
        }
        return o;
    } ]), angular.module("lr.upload").factory("upload", [ "$window", "formDataUpload", "iFrameUpload", function(n, e, t) {
        function r(n) {
            return i.formData && !n.forceIFrameUpload ? e(n) : t(n);
        }
        var i = {
            fileInput: !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(n.navigator.userAgent) || angular.element('<input type="file">').prop("disabled")),
            fileUpload: !(!n.XMLHttpRequestUpload || !n.FileReader),
            formData: !!n.FormData
        };
        return r.support = i, r;
    } ]);
}, function(n, e, t) {
    t(2), t(6), n.exports = "duScroll";
}, function(n, e, t) {
    (function(n) {
        var e = function(n) {
            "use strict";
            return n < .5 ? Math.pow(2 * n, 2) / 2 : 1 - Math.pow(2 * (1 - n), 2) / 2;
        }, t = angular.module("duScroll", [ "duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers" ]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", e).value("duScrollCancelOnEvents", "scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy", !1).value("duScrollActiveClass", "active");
        "undefined" != typeof n && n && n.exports && (n.exports = t), angular.module("duScroll.scrollHelpers", [ "duScroll.requestAnimation" ]).run([ "$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", "duScrollCancelOnEvents", function(n, e, t, r, i, o, a, s) {
            "use strict";
            var c = {}, u = function(n) {
                return "undefined" != typeof HTMLDocument && n instanceof HTMLDocument || n.nodeType && n.nodeType === n.DOCUMENT_NODE;
            }, l = function(n) {
                return "undefined" != typeof HTMLElement && n instanceof HTMLElement || n.nodeType && n.nodeType === n.ELEMENT_NODE;
            }, f = function(n) {
                return l(n) || u(n) ? n : n[0];
            };
            c.duScrollTo = function(e, t, r, i) {
                var o;
                if (angular.isElement(e) ? o = this.duScrollToElement : angular.isDefined(r) && (o = this.duScrollToAnimated), 
                o) return o.apply(this, arguments);
                var a = f(this);
                return u(a) ? n.scrollTo(e, t) : (a.scrollLeft = e, void (a.scrollTop = t));
            };
            var d, p;
            c.duScrollToAnimated = function(n, o, a, c) {
                a && !c && (c = i);
                var u = this.duScrollLeft(), l = this.duScrollTop(), f = Math.round(n - u), h = Math.round(o - l), g = null, m = 0, v = this, y = function(n) {
                    (!n || m && n.which > 0) && (s && v.unbind(s, y), t(d), p.reject(), d = null);
                };
                if (d && y(), p = e.defer(), 0 === a || !f && !h) return 0 === a && v.duScrollTo(n, o), 
                p.resolve(), p.promise;
                var $ = function(n) {
                    null === g && (g = n), m = n - g;
                    var e = m >= a ? 1 : c(m / a);
                    v.scrollTo(u + Math.ceil(f * e), l + Math.ceil(h * e)), e < 1 ? d = r($) : (s && v.unbind(s, y), 
                    d = null, p.resolve());
                };
                return v.duScrollTo(u, l), s && v.bind(s, y), d = r($), p.promise;
            }, c.duScrollToElement = function(n, e, t, r) {
                var i = f(this);
                angular.isNumber(e) && !isNaN(e) || (e = a);
                var o = this.duScrollTop() + f(n).getBoundingClientRect().top - e;
                return l(i) && (o -= i.getBoundingClientRect().top), this.duScrollTo(0, o, t, r);
            }, c.duScrollLeft = function(e, t, r) {
                if (angular.isNumber(e)) return this.duScrollTo(e, this.duScrollTop(), t, r);
                var i = f(this);
                return u(i) ? n.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : i.scrollLeft;
            }, c.duScrollTop = function(e, t, r) {
                if (angular.isNumber(e)) return this.duScrollTo(this.duScrollLeft(), e, t, r);
                var i = f(this);
                return u(i) ? n.scrollY || document.documentElement.scrollTop || document.body.scrollTop : i.scrollTop;
            }, c.duScrollToElementAnimated = function(n, e, t, r) {
                return this.duScrollToElement(n, e, t || o, r);
            }, c.duScrollTopAnimated = function(n, e, t) {
                return this.duScrollTop(n, e || o, t);
            }, c.duScrollLeftAnimated = function(n, e, t) {
                return this.duScrollLeft(n, e || o, t);
            }, angular.forEach(c, function(n, e) {
                angular.element.prototype[e] = n;
                var t = e.replace(/^duScroll/, "scroll");
                angular.isUndefined(angular.element.prototype[t]) && (angular.element.prototype[t] = n);
            });
        } ]), angular.module("duScroll.polyfill", []).factory("polyfill", [ "$window", function(n) {
            "use strict";
            var e = [ "webkit", "moz", "o", "ms" ];
            return function(t, r) {
                if (n[t]) return n[t];
                for (var i, o = t.substr(0, 1).toUpperCase() + t.substr(1), a = 0; a < e.length; a++) if (i = e[a] + o, 
                n[i]) return n[i];
                return r;
            };
        } ]), angular.module("duScroll.requestAnimation", [ "duScroll.polyfill" ]).factory("requestAnimation", [ "polyfill", "$timeout", function(n, e) {
            "use strict";
            var t = 0, r = function(n, r) {
                var i = new Date().getTime(), o = Math.max(0, 16 - (i - t)), a = e(function() {
                    n(i + o);
                }, o);
                return t = i + o, a;
            };
            return n("requestAnimationFrame", r);
        } ]).factory("cancelAnimation", [ "polyfill", "$timeout", function(n, e) {
            "use strict";
            var t = function(n) {
                e.cancel(n);
            };
            return n("cancelAnimationFrame", t);
        } ]), angular.module("duScroll.spyAPI", [ "duScroll.scrollContainerAPI" ]).factory("spyAPI", [ "$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", "duScrollBottomSpy", "duScrollActiveClass", function(n, e, t, r, i, o, a, s, c) {
            "use strict";
            var u = function(i) {
                var u = !1, l = !1, f = function() {
                    l = !1;
                    var e, a = i.container, u = a[0], f = 0;
                    if ("undefined" != typeof HTMLElement && u instanceof HTMLElement || u.nodeType && u.nodeType === u.ELEMENT_NODE) f = u.getBoundingClientRect().top, 
                    e = Math.round(u.scrollTop + u.clientHeight) >= u.scrollHeight; else {
                        var d = r[0].body.scrollHeight || r[0].documentElement.scrollHeight;
                        e = Math.round(t.pageYOffset + t.innerHeight) >= d;
                    }
                    var p, h, g, m, v, y, $ = s && e ? "bottom" : "top";
                    for (m = i.spies, h = i.currentlyActive, g = void 0, p = 0; p < m.length; p++) v = m[p], 
                    y = v.getTargetPosition(), y && (s && e || y.top + v.offset - f < 20 && (o || y.top * -1 + f) < y.height) && (!g || g[$] < y[$]) && (g = {
                        spy: v
                    }, g[$] = y[$]);
                    g && (g = g.spy), h === g || o && !g || (h && (h.$element.removeClass(c), n.$broadcast("duScrollspy:becameInactive", h.$element, angular.element(h.getTargetElement()))), 
                    g && (g.$element.addClass(c), n.$broadcast("duScrollspy:becameActive", g.$element, angular.element(g.getTargetElement()))), 
                    i.currentlyActive = g);
                };
                return a ? function() {
                    u ? l = !0 : (f(), u = e(function() {
                        u = !1, l && f();
                    }, a, !1));
                } : f;
            }, l = {}, f = function(n) {
                var e = n.$id, t = {
                    spies: []
                };
                return t.handler = u(t), l[e] = t, n.$on("$destroy", function() {
                    d(n);
                }), e;
            }, d = function(n) {
                var e = n.$id, t = l[e], r = t.container;
                r && r.off("scroll", t.handler), delete l[e];
            }, p = f(n), h = function(n) {
                return l[n.$id] ? l[n.$id] : n.$parent ? h(n.$parent) : l[p];
            }, g = function(n) {
                var e, t, r = n.$scope;
                if (r) return h(r);
                for (t in l) if (e = l[t], e.spies.indexOf(n) !== -1) return e;
            }, m = function(n) {
                for (;n.parentNode; ) if (n = n.parentNode, n === document) return !0;
                return !1;
            }, v = function(n) {
                var e = g(n);
                e && (e.spies.push(n), e.container && m(e.container) || (e.container && e.container.off("scroll", e.handler), 
                e.container = i.getContainer(n.$scope), e.container.on("scroll", e.handler).triggerHandler("scroll")));
            }, y = function(e) {
                var t = g(e);
                e === t.currentlyActive && (n.$broadcast("duScrollspy:becameInactive", t.currentlyActive.$element), 
                t.currentlyActive = null);
                var r = t.spies.indexOf(e);
                r !== -1 && t.spies.splice(r, 1), e.$element = null;
            };
            return {
                addSpy: v,
                removeSpy: y,
                createContext: f,
                destroyContext: d,
                getContextForScope: h
            };
        } ]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", [ "$document", function(n) {
            "use strict";
            var e = {}, t = function(n, t) {
                var r = n.$id;
                return e[r] = t, r;
            }, r = function(n) {
                return e[n.$id] ? n.$id : n.$parent ? r(n.$parent) : void 0;
            }, i = function(t) {
                var i = r(t);
                return i ? e[i] : n;
            }, o = function(n) {
                var t = r(n);
                t && delete e[t];
            };
            return {
                getContainerId: r,
                getContainer: i,
                setContainer: t,
                removeContainer: o
            };
        } ]), angular.module("duScroll.smoothScroll", [ "duScroll.scrollHelpers", "duScroll.scrollContainerAPI" ]).directive("duSmoothScroll", [ "duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(n, e, t) {
            "use strict";
            return {
                link: function(r, i, o) {
                    i.on("click", function(i) {
                        if (o.href && o.href.indexOf("#") !== -1 || "" !== o.duSmoothScroll) {
                            var a = o.href ? o.href.replace(/.*(?=#[^\s]+$)/, "").substring(1) : o.duSmoothScroll, s = document.getElementById(a) || document.getElementsByName(a)[0];
                            if (s && s.getBoundingClientRect) {
                                i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault();
                                var c = o.offset ? parseInt(o.offset, 10) : e, u = o.duration ? parseInt(o.duration, 10) : n, l = t.getContainer(r);
                                l.duScrollToElement(angular.element(s), isNaN(c) ? 0 : c, isNaN(u) ? 0 : u);
                            }
                        }
                    });
                }
            };
        } ]), angular.module("duScroll.spyContext", [ "duScroll.spyAPI" ]).directive("duSpyContext", [ "spyAPI", function(n) {
            "use strict";
            return {
                restrict: "A",
                scope: !0,
                compile: function(e, t, r) {
                    return {
                        pre: function(e, t, r, i) {
                            n.createContext(e);
                        }
                    };
                }
            };
        } ]), angular.module("duScroll.scrollContainer", [ "duScroll.scrollContainerAPI" ]).directive("duScrollContainer", [ "scrollContainerAPI", function(n) {
            "use strict";
            return {
                restrict: "A",
                scope: !0,
                compile: function(e, t, r) {
                    return {
                        pre: function(e, t, r, i) {
                            r.$observe("duScrollContainer", function(r) {
                                angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : t, 
                                n.setContainer(e, r), e.$on("$destroy", function() {
                                    n.removeContainer(e);
                                });
                            });
                        }
                    };
                }
            };
        } ]), angular.module("duScroll.scrollspy", [ "duScroll.spyAPI" ]).directive("duScrollspy", [ "spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(n, e, t, r) {
            "use strict";
            var i = function(n, e, t, r) {
                angular.isElement(n) ? this.target = n : angular.isString(n) && (this.targetId = n), 
                this.$scope = e, this.$element = t, this.offset = r;
            };
            return i.prototype.getTargetElement = function() {
                return !this.target && this.targetId && (this.target = document.getElementById(this.targetId) || document.getElementsByName(this.targetId)[0]), 
                this.target;
            }, i.prototype.getTargetPosition = function() {
                var n = this.getTargetElement();
                if (n) return n.getBoundingClientRect();
            }, i.prototype.flushTargetCache = function() {
                this.targetId && (this.target = void 0);
            }, {
                link: function(o, a, s) {
                    var c, u = s.ngHref || s.href;
                    if (u && u.indexOf("#") !== -1 ? c = u.replace(/.*(?=#[^\s]+$)/, "").substring(1) : s.duScrollspy ? c = s.duScrollspy : s.duSmoothScroll && (c = s.duSmoothScroll), 
                    c) {
                        var l = t(function() {
                            var t = new i(c, o, a, (-(s.offset ? parseInt(s.offset, 10) : e)));
                            n.addSpy(t), o.$on("$locationChangeSuccess", t.flushTargetCache.bind(t));
                            var u = r.$on("$stateChangeSuccess", t.flushTargetCache.bind(t));
                            o.$on("$destroy", function() {
                                n.removeSpy(t), u();
                            });
                        }, 0, !1);
                        o.$on("$destroy", function() {
                            t.cancel(l);
                        });
                    }
                }
            };
        } ]);
    }).call(e, t(7)(n));
}, function(n, e) {
    n.exports = function(n) {
        return n.webpackPolyfill || (n.deprecate = function() {}, n.paths = [], n.children = [], 
        n.webpackPolyfill = 1), n;
    };
}, function(n, e) {
    "undefined" != typeof n && "undefined" != typeof e && n.exports === e && (n.exports = "ui.router"), 
    function(n, e, t) {
        "use strict";
        function r(n, e) {
            return H(new (H(function() {}, {
                prototype: n
            }))(), e);
        }
        function i(n) {
            return U(arguments, function(e) {
                e !== n && U(e, function(e, t) {
                    n.hasOwnProperty(t) || (n[t] = e);
                });
            }), n;
        }
        function o(n, e) {
            var t = [];
            for (var r in n.path) {
                if (n.path[r] !== e.path[r]) break;
                t.push(n.path[r]);
            }
            return t;
        }
        function a(n) {
            if (Object.keys) return Object.keys(n);
            var e = [];
            return U(n, function(n, t) {
                e.push(t);
            }), e;
        }
        function s(n, e) {
            if (Array.prototype.indexOf) return n.indexOf(e, Number(arguments[2]) || 0);
            var t = n.length >>> 0, r = Number(arguments[2]) || 0;
            for (r = r < 0 ? Math.ceil(r) : Math.floor(r), r < 0 && (r += t); r < t; r++) if (r in n && n[r] === e) return r;
            return -1;
        }
        function c(n, e, t, r) {
            var i, c = o(t, r), u = {}, l = [];
            for (var f in c) if (c[f] && c[f].params && (i = a(c[f].params), i.length)) for (var d in i) s(l, i[d]) >= 0 || (l.push(i[d]), 
            u[i[d]] = n[i[d]]);
            return H({}, u, e);
        }
        function u(n, e, t) {
            if (!t) {
                t = [];
                for (var r in n) t.push(r);
            }
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                if (n[o] != e[o]) return !1;
            }
            return !0;
        }
        function l(n, e) {
            var t = {};
            return U(n, function(n) {
                t[n] = e[n];
            }), t;
        }
        function f(n) {
            var e = {}, t = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return U(t, function(t) {
                t in n && (e[t] = n[t]);
            }), e;
        }
        function d(n) {
            var e = {}, t = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in n) s(t, r) == -1 && (e[r] = n[r]);
            return e;
        }
        function p(n, e) {
            var t = F(n), r = t ? [] : {};
            return U(n, function(n, i) {
                e(n, i) && (r[t ? r.length : i] = n);
            }), r;
        }
        function h(n, e) {
            var t = F(n) ? [] : {};
            return U(n, function(n, r) {
                t[r] = e(n, r);
            }), t;
        }
        function g(n, e) {
            var r = 1, o = 2, c = {}, u = [], l = c, f = H(n.when(c), {
                $$promises: c,
                $$values: c
            });
            this.study = function(c) {
                function p(n, t) {
                    if (y[t] !== o) {
                        if (v.push(t), y[t] === r) throw v.splice(0, s(v, t)), new Error("Cyclic dependency: " + v.join(" -> "));
                        if (y[t] = r, R(n)) m.push(t, [ function() {
                            return e.get(n);
                        } ], u); else {
                            var i = e.annotate(n);
                            U(i, function(n) {
                                n !== t && c.hasOwnProperty(n) && p(c[n], n);
                            }), m.push(t, n, i);
                        }
                        v.pop(), y[t] = o;
                    }
                }
                function h(n) {
                    return B(n) && n.then && n.$$promises;
                }
                if (!B(c)) throw new Error("'invocables' must be an object");
                var g = a(c || {}), m = [], v = [], y = {};
                return U(c, p), c = v = y = null, function(r, o, a) {
                    function s() {
                        --w || (b || i($, o.$$values), v.$$values = $, v.$$promises = v.$$promises || !0, 
                        delete v.$$inheritedValues, p.resolve($));
                    }
                    function c(n) {
                        v.$$failure = n, p.reject(n);
                    }
                    function u(t, i, o) {
                        function u(n) {
                            f.reject(n), c(n);
                        }
                        function l() {
                            if (!D(v.$$failure)) try {
                                f.resolve(e.invoke(i, a, $)), f.promise.then(function(n) {
                                    $[t] = n, s();
                                }, u);
                            } catch (n) {
                                u(n);
                            }
                        }
                        var f = n.defer(), d = 0;
                        U(o, function(n) {
                            y.hasOwnProperty(n) && !r.hasOwnProperty(n) && (d++, y[n].then(function(e) {
                                $[n] = e, --d || l();
                            }, u));
                        }), d || l(), y[t] = f.promise;
                    }
                    if (h(r) && a === t && (a = o, o = r, r = null), r) {
                        if (!B(r)) throw new Error("'locals' must be an object");
                    } else r = l;
                    if (o) {
                        if (!h(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                    } else o = f;
                    var p = n.defer(), v = p.promise, y = v.$$promises = {}, $ = H({}, r), w = 1 + m.length / 3, b = !1;
                    if (D(o.$$failure)) return c(o.$$failure), v;
                    o.$$inheritedValues && i($, d(o.$$inheritedValues, g)), H(y, o.$$promises), o.$$values ? (b = i($, d(o.$$values, g)), 
                    v.$$inheritedValues = d(o.$$values, g), s()) : (o.$$inheritedValues && (v.$$inheritedValues = d(o.$$inheritedValues, g)), 
                    o.then(s, c));
                    for (var x = 0, I = m.length; x < I; x += 3) r.hasOwnProperty(m[x]) ? s() : u(m[x], m[x + 1], m[x + 2]);
                    return v;
                };
            }, this.resolve = function(n, e, t, r) {
                return this.study(n)(e, t, r);
            };
        }
        function m(n, e, t) {
            this.fromConfig = function(n, e, t) {
                return D(n.template) ? this.fromString(n.template, e) : D(n.templateUrl) ? this.fromUrl(n.templateUrl, e) : D(n.templateProvider) ? this.fromProvider(n.templateProvider, e, t) : null;
            }, this.fromString = function(n, e) {
                return q(n) ? n(e) : n;
            }, this.fromUrl = function(t, r) {
                return q(t) && (t = t(r)), null == t ? null : n.get(t, {
                    cache: e,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(n) {
                    return n.data;
                });
            }, this.fromProvider = function(n, e, r) {
                return t.invoke(n, null, r || {
                    params: e
                });
            };
        }
        function v(n, e, i) {
            function o(e, t, r, i) {
                if (m.push(e), h[e]) return h[e];
                if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(e)) throw new Error("Invalid parameter name '" + e + "' in pattern '" + n + "'");
                if (g[e]) throw new Error("Duplicate parameter name '" + e + "' in pattern '" + n + "'");
                return g[e] = new W.Param(e, t, r, i), g[e];
            }
            function a(n, e, t, r) {
                var i = [ "", "" ], o = n.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!e) return o;
                switch (t) {
                  case !1:
                    i = [ "(", ")" + (r ? "?" : "") ];
                    break;

                  case !0:
                    o = o.replace(/\/$/, ""), i = [ "(?:/(", ")|/)?" ];
                    break;

                  default:
                    i = [ "(" + t + "|", ")?" ];
                }
                return o + i[0] + e + i[1];
            }
            function s(i, o) {
                var a, s, c, u, l;
                return a = i[2] || i[3], l = e.params[a], c = n.substring(d, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), 
                s && (u = W.type(s) || r(W.type("string"), {
                    pattern: new RegExp(s, e.caseInsensitive ? "i" : t)
                })), {
                    id: a,
                    regexp: s,
                    segment: c,
                    type: u,
                    cfg: l
                };
            }
            e = H({
                params: {}
            }, B(e) ? e : {});
            var c, u = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = "^", d = 0, p = this.segments = [], h = i ? i.params : {}, g = this.params = i ? i.params.$$new() : new W.ParamSet(), m = [];
            this.source = n;
            for (var v, y, $; (c = u.exec(n)) && (v = s(c, !1), !(v.segment.indexOf("?") >= 0)); ) y = o(v.id, v.type, v.cfg, "path"), 
            f += a(v.segment, y.type.pattern.source, y.squash, y.isOptional), p.push(v.segment), 
            d = u.lastIndex;
            $ = n.substring(d);
            var w = $.indexOf("?");
            if (w >= 0) {
                var b = this.sourceSearch = $.substring(w);
                if ($ = $.substring(0, w), this.sourcePath = n.substring(0, d + w), b.length > 0) for (d = 0; c = l.exec(b); ) v = s(c, !0), 
                y = o(v.id, v.type, v.cfg, "search"), d = u.lastIndex;
            } else this.sourcePath = n, this.sourceSearch = "";
            f += a($) + (e.strict === !1 ? "/?" : "") + "$", p.push($), this.regexp = new RegExp(f, e.caseInsensitive ? "i" : t), 
            this.prefix = p[0], this.$$paramNames = m;
        }
        function y(n) {
            H(this, n);
        }
        function $() {
            function n(n) {
                return null != n ? n.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : n;
            }
            function i(n) {
                return null != n ? n.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : n;
            }
            function o() {
                return {
                    strict: g,
                    caseInsensitive: d
                };
            }
            function c(n) {
                return q(n) || F(n) && q(n[n.length - 1]);
            }
            function u() {
                for (;x.length; ) {
                    var n = x.shift();
                    if (n.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    e.extend(w[n.name], f.invoke(n.def));
                }
            }
            function l(n) {
                H(this, n || {});
            }
            W = this;
            var f, d = !1, g = !0, m = !1, w = {}, b = !0, x = [], I = {
                string: {
                    encode: n,
                    decode: i,
                    is: function(n) {
                        return null == n || !D(n) || "string" == typeof n;
                    },
                    pattern: /[^\/]*/
                },
                int: {
                    encode: n,
                    decode: function(n) {
                        return parseInt(n, 10);
                    },
                    is: function(n) {
                        return D(n) && this.decode(n.toString()) === n;
                    },
                    pattern: /\d+/
                },
                bool: {
                    encode: function(n) {
                        return n ? 1 : 0;
                    },
                    decode: function(n) {
                        return 0 !== parseInt(n, 10);
                    },
                    is: function(n) {
                        return n === !0 || n === !1;
                    },
                    pattern: /0|1/
                },
                date: {
                    encode: function(n) {
                        return this.is(n) ? [ n.getFullYear(), ("0" + (n.getMonth() + 1)).slice(-2), ("0" + n.getDate()).slice(-2) ].join("-") : t;
                    },
                    decode: function(n) {
                        if (this.is(n)) return n;
                        var e = this.capture.exec(n);
                        return e ? new Date(e[1], e[2] - 1, e[3]) : t;
                    },
                    is: function(n) {
                        return n instanceof Date && !isNaN(n.valueOf());
                    },
                    equals: function(n, e) {
                        return this.is(n) && this.is(e) && n.toISOString() === e.toISOString();
                    },
                    pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                    capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                },
                json: {
                    encode: e.toJson,
                    decode: e.fromJson,
                    is: e.isObject,
                    equals: e.equals,
                    pattern: /[^\/]*/
                },
                any: {
                    encode: e.identity,
                    decode: e.identity,
                    equals: e.equals,
                    pattern: /.*/
                }
            };
            $.$$getDefaultValue = function(n) {
                if (!c(n.value)) return n.value;
                if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                return f.invoke(n.value);
            }, this.caseInsensitive = function(n) {
                return D(n) && (d = n), d;
            }, this.strictMode = function(n) {
                return D(n) && (g = n), g;
            }, this.defaultSquashPolicy = function(n) {
                if (!D(n)) return m;
                if (n !== !0 && n !== !1 && !R(n)) throw new Error("Invalid squash policy: " + n + ". Valid policies: false, true, arbitrary-string");
                return m = n, n;
            }, this.compile = function(n, e) {
                return new v(n, H(o(), e));
            }, this.isMatcher = function(n) {
                if (!B(n)) return !1;
                var e = !0;
                return U(v.prototype, function(t, r) {
                    q(t) && (e = e && D(n[r]) && q(n[r]));
                }), e;
            }, this.type = function(n, e, t) {
                if (!D(e)) return w[n];
                if (w.hasOwnProperty(n)) throw new Error("A type named '" + n + "' has already been defined.");
                return w[n] = new y(H({
                    name: n
                }, e)), t && (x.push({
                    name: n,
                    def: t
                }), b || u()), this;
            }, U(I, function(n, e) {
                w[e] = new y(H({
                    name: e
                }, n));
            }), w = r(w, {}), this.$get = [ "$injector", function(n) {
                return f = n, b = !1, u(), U(I, function(n, e) {
                    w[e] || (w[e] = new y(n));
                }), this;
            } ], this.Param = function(n, r, i, o) {
                function u(n) {
                    var e = B(n) ? a(n) : [], t = s(e, "value") === -1 && s(e, "type") === -1 && s(e, "squash") === -1 && s(e, "array") === -1;
                    return t && (n = {
                        value: n
                    }), n.$$fn = c(n.value) ? n.value : function() {
                        return n.value;
                    }, n;
                }
                function l(t, r, i) {
                    if (t.type && r) throw new Error("Param '" + n + "' has two type configurations.");
                    return r ? r : t.type ? e.isString(t.type) ? w[t.type] : t.type instanceof y ? t.type : new y(t.type) : "config" === i ? w.any : w.string;
                }
                function d() {
                    var e = {
                        array: "search" === o && "auto"
                    }, t = n.match(/\[\]$/) ? {
                        array: !0
                    } : {};
                    return H(e, t, i).array;
                }
                function g(n, e) {
                    var t = n.squash;
                    if (!e || t === !1) return !1;
                    if (!D(t) || null == t) return m;
                    if (t === !0 || R(t)) return t;
                    throw new Error("Invalid squash policy: '" + t + "'. Valid policies: false, true, or arbitrary string");
                }
                function v(n, e, r, i) {
                    var o, a, c = [ {
                        from: "",
                        to: r || e ? t : ""
                    }, {
                        from: null,
                        to: r || e ? t : ""
                    } ];
                    return o = F(n.replace) ? n.replace : [], R(i) && o.push({
                        from: i,
                        to: t
                    }), a = h(o, function(n) {
                        return n.from;
                    }), p(c, function(n) {
                        return s(a, n.from) === -1;
                    }).concat(o);
                }
                function $() {
                    if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                    var n = f.invoke(i.$$fn);
                    if (null !== n && n !== t && !I.type.is(n)) throw new Error("Default value (" + n + ") for parameter '" + I.id + "' is not an instance of Type (" + I.type.name + ")");
                    return n;
                }
                function b(n) {
                    function e(n) {
                        return function(e) {
                            return e.from === n;
                        };
                    }
                    function t(n) {
                        var t = h(p(I.replace, e(n)), function(n) {
                            return n.to;
                        });
                        return t.length ? t[0] : n;
                    }
                    return n = t(n), D(n) ? I.type.$normalize(n) : $();
                }
                function x() {
                    return "{Param:" + n + " " + r + " squash: '" + S + "' optional: " + C + "}";
                }
                var I = this;
                i = u(i), r = l(i, r, o);
                var k = d();
                r = k ? r.$asArray(k, "search" === o) : r, "string" !== r.name || k || "path" !== o || i.value !== t || (i.value = "");
                var C = i.value !== t, S = g(i, C), _ = v(i, k, C, S);
                H(this, {
                    id: n,
                    type: r,
                    location: o,
                    array: k,
                    squash: S,
                    replace: _,
                    isOptional: C,
                    value: b,
                    dynamic: t,
                    config: i,
                    toString: x
                });
            }, l.prototype = {
                $$new: function() {
                    return r(this, H(new l(), {
                        $$parent: this
                    }));
                },
                $$keys: function() {
                    for (var n = [], e = [], t = this, r = a(l.prototype); t; ) e.push(t), t = t.$$parent;
                    return e.reverse(), U(e, function(e) {
                        U(a(e), function(e) {
                            s(n, e) === -1 && s(r, e) === -1 && n.push(e);
                        });
                    }), n;
                },
                $$values: function(n) {
                    var e = {}, t = this;
                    return U(t.$$keys(), function(r) {
                        e[r] = t[r].value(n && n[r]);
                    }), e;
                },
                $$equals: function(n, e) {
                    var t = !0, r = this;
                    return U(r.$$keys(), function(i) {
                        var o = n && n[i], a = e && e[i];
                        r[i].type.equals(o, a) || (t = !1);
                    }), t;
                },
                $$validates: function(n) {
                    var r, i, o, a, s, c = this.$$keys();
                    for (r = 0; r < c.length && (i = this[c[r]], o = n[c[r]], o !== t && null !== o || !i.isOptional); r++) {
                        if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                        if (s = i.type.encode(a), e.isString(s) && !i.type.pattern.exec(s)) return !1;
                    }
                    return !0;
                },
                $$parent: t
            }, this.ParamSet = l;
        }
        function w(n, r) {
            function i(n) {
                var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(n.source);
                return null != e ? e[1].replace(/\\(.)/g, "$1") : "";
            }
            function o(n, e) {
                return n.replace(/\$(\$|\d{1,2})/, function(n, t) {
                    return e["$" === t ? 0 : Number(t)];
                });
            }
            function a(n, e, t) {
                if (!t) return !1;
                var r = n.invoke(e, e, {
                    $match: t
                });
                return !D(r) || r;
            }
            function s(r, i, o, a, s) {
                function d(n, e, t) {
                    return "/" === m ? n : e ? m.slice(0, -1) + n : t ? m.slice(1) + n : n;
                }
                function p(n) {
                    function e(n) {
                        var e = n(o, r);
                        return !!e && (R(e) && r.replace().url(e), !0);
                    }
                    if (!n || !n.defaultPrevented) {
                        g && r.url() === g;
                        g = t;
                        var i, a = u.length;
                        for (i = 0; i < a; i++) if (e(u[i])) return;
                        l && e(l);
                    }
                }
                function h() {
                    return c = c || i.$on("$locationChangeSuccess", p);
                }
                var g, m = a.baseHref(), v = r.url();
                return f || h(), {
                    sync: function() {
                        p();
                    },
                    listen: function() {
                        return h();
                    },
                    update: function(n) {
                        return n ? void (v = r.url()) : void (r.url() !== v && (r.url(v), r.replace()));
                    },
                    push: function(n, e, i) {
                        var o = n.format(e || {});
                        null !== o && e && e["#"] && (o += "#" + e["#"]), r.url(o), g = i && i.$$avoidResync ? r.url() : t, 
                        i && i.replace && r.replace();
                    },
                    href: function(t, i, o) {
                        if (!t.validates(i)) return null;
                        var a = n.html5Mode();
                        e.isObject(a) && (a = a.enabled), a = a && s.history;
                        var c = t.format(i);
                        if (o = o || {}, a || null === c || (c = "#" + n.hashPrefix() + c), null !== c && i && i["#"] && (c += "#" + i["#"]), 
                        c = d(c, a, o.absolute), !o.absolute || !c) return c;
                        var u = !a && c ? "/" : "", l = r.port();
                        return l = 80 === l || 443 === l ? "" : ":" + l, [ r.protocol(), "://", r.host(), l, u, c ].join("");
                    }
                };
            }
            var c, u = [], l = null, f = !1;
            this.rule = function(n) {
                if (!q(n)) throw new Error("'rule' must be a function");
                return u.push(n), this;
            }, this.otherwise = function(n) {
                if (R(n)) {
                    var e = n;
                    n = function() {
                        return e;
                    };
                } else if (!q(n)) throw new Error("'rule' must be a function");
                return l = n, this;
            }, this.when = function(n, e) {
                var t, s = R(e);
                if (R(n) && (n = r.compile(n)), !s && !q(e) && !F(e)) throw new Error("invalid 'handler' in when()");
                var c = {
                    matcher: function(n, e) {
                        return s && (t = r.compile(e), e = [ "$match", function(n) {
                            return t.format(n);
                        } ]), H(function(t, r) {
                            return a(t, e, n.exec(r.path(), r.search()));
                        }, {
                            prefix: R(n.prefix) ? n.prefix : ""
                        });
                    },
                    regex: function(n, e) {
                        if (n.global || n.sticky) throw new Error("when() RegExp must not be global or sticky");
                        return s && (t = e, e = [ "$match", function(n) {
                            return o(t, n);
                        } ]), H(function(t, r) {
                            return a(t, e, n.exec(r.path()));
                        }, {
                            prefix: i(n)
                        });
                    }
                }, u = {
                    matcher: r.isMatcher(n),
                    regex: n instanceof RegExp
                };
                for (var l in u) if (u[l]) return this.rule(c[l](n, e));
                throw new Error("invalid 'what' in when()");
            }, this.deferIntercept = function(n) {
                n === t && (n = !0), f = n;
            }, this.$get = s, s.$inject = [ "$location", "$rootScope", "$injector", "$browser", "$sniffer" ];
        }
        function b(n, i) {
            function o(n) {
                return 0 === n.indexOf(".") || 0 === n.indexOf("^");
            }
            function d(n, e) {
                if (!n) return t;
                var r = R(n), i = r ? n : n.name, a = o(i);
                if (a) {
                    if (!e) throw new Error("No reference point given for path '" + i + "'");
                    e = d(e);
                    for (var s = i.split("."), c = 0, u = s.length, l = e; c < u; c++) if ("" !== s[c] || 0 !== c) {
                        if ("^" !== s[c]) break;
                        if (!l.parent) throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
                        l = l.parent;
                    } else l = e;
                    s = s.slice(c).join("."), i = l.name + (l.name && s ? "." : "") + s;
                }
                var f = C[i];
                return !f || !r && (r || f !== n && f.self !== n) ? t : f;
            }
            function p(n, e) {
                S[n] || (S[n] = []), S[n].push(e);
            }
            function g(n) {
                for (var e = S[n] || []; e.length; ) m(e.shift());
            }
            function m(e) {
                e = r(e, {
                    self: e,
                    resolve: e.resolve || {},
                    toString: function() {
                        return this.name;
                    }
                });
                var t = e.name;
                if (!R(t) || t.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (C.hasOwnProperty(t)) throw new Error("State '" + t + "' is already defined");
                var i = t.indexOf(".") !== -1 ? t.substring(0, t.lastIndexOf(".")) : R(e.parent) ? e.parent : B(e.parent) && R(e.parent.name) ? e.parent.name : "";
                if (i && !C[i]) return p(i, e.self);
                for (var o in E) q(E[o]) && (e[o] = E[o](e, E.$delegates[o]));
                return C[t] = e, !e[_] && e.url && n.when(e.url, [ "$match", "$stateParams", function(n, t) {
                    k.$current.navigable == e && u(n, t) || k.transitionTo(e, n, {
                        inherit: !0,
                        location: !1
                    });
                } ]), g(t), e;
            }
            function v(n) {
                return n.indexOf("*") > -1;
            }
            function y(n) {
                for (var e = n.split("."), t = k.$current.name.split("."), r = 0, i = e.length; r < i; r++) "*" === e[r] && (t[r] = "*");
                return "**" === e[0] && (t = t.slice(s(t, e[1])), t.unshift("**")), "**" === e[e.length - 1] && (t.splice(s(t, e[e.length - 2]) + 1, Number.MAX_VALUE), 
                t.push("**")), e.length == t.length && t.join("") === e.join("");
            }
            function $(n, e) {
                return R(n) && !D(e) ? E[n] : q(e) && R(n) ? (E[n] && !E.$delegates[n] && (E.$delegates[n] = E[n]), 
                E[n] = e, this) : this;
            }
            function w(n, e) {
                return B(n) ? e = n : e.name = n, m(e), this;
            }
            function b(n, i, o, s, f, p, g, m, $) {
                function w(e, t, r, o) {
                    var a = n.$broadcast("$stateNotFound", e, t, r);
                    if (a.defaultPrevented) return g.update(), T;
                    if (!a.retry) return null;
                    if (o.$retry) return g.update(), A;
                    var s = k.transition = i.when(a.retry);
                    return s.then(function() {
                        return s !== k.transition ? S : (e.options.$retry = !0, k.transitionTo(e.to, e.toParams, e.options));
                    }, function() {
                        return T;
                    }), g.update(), s;
                }
                function b(n, t, r, a, c, u) {
                    function d() {
                        var t = [];
                        return U(n.views, function(r, i) {
                            var a = r.resolve && r.resolve !== n.resolve ? r.resolve : {};
                            a.$template = [ function() {
                                return o.load(i, {
                                    view: r,
                                    locals: c.globals,
                                    params: p,
                                    notify: u.notify
                                }) || "";
                            } ], t.push(f.resolve(a, c.globals, c.resolve, n).then(function(t) {
                                if (q(r.controllerProvider) || F(r.controllerProvider)) {
                                    var o = e.extend({}, a, c.globals);
                                    t.$$controller = s.invoke(r.controllerProvider, null, o);
                                } else t.$$controller = r.controller;
                                t.$$state = n, t.$$controllerAs = r.controllerAs, c[i] = t;
                            }));
                        }), i.all(t).then(function() {
                            return c.globals;
                        });
                    }
                    var p = r ? t : l(n.params.$$keys(), t), h = {
                        $stateParams: p
                    };
                    c.resolve = f.resolve(n.resolve, h, c.resolve, n);
                    var g = [ c.resolve.then(function(n) {
                        c.globals = n;
                    }) ];
                    return a && g.push(a), i.all(g).then(d).then(function(n) {
                        return c;
                    });
                }
                var S = i.reject(new Error("transition superseded")), E = i.reject(new Error("transition prevented")), T = i.reject(new Error("transition aborted")), A = i.reject(new Error("transition failed"));
                return I.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, k = {
                    params: {},
                    current: I.self,
                    $current: I,
                    transition: null
                }, k.reload = function(n) {
                    return k.transitionTo(k.current, p, {
                        reload: n || !0,
                        inherit: !1,
                        notify: !0
                    });
                }, k.go = function(n, e, t) {
                    return k.transitionTo(n, e, H({
                        inherit: !0,
                        relative: k.$current
                    }, t));
                }, k.transitionTo = function(e, t, o) {
                    t = t || {}, o = H({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, o || {});
                    var a, u = k.$current, f = k.params, h = u.path, m = d(e, o.relative), v = t["#"];
                    if (!D(m)) {
                        var y = {
                            to: e,
                            toParams: t,
                            options: o
                        }, $ = w(y, u.self, f, o);
                        if ($) return $;
                        if (e = y.to, t = y.toParams, o = y.options, m = d(e, o.relative), !D(m)) {
                            if (!o.relative) throw new Error("No such state '" + e + "'");
                            throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'");
                        }
                    }
                    if (m[_]) throw new Error("Cannot transition to abstract state '" + e + "'");
                    if (o.inherit && (t = c(p, t || {}, k.$current, m)), !m.params.$$validates(t)) return A;
                    t = m.params.$$values(t), e = m;
                    var C = e.path, T = 0, O = C[T], N = I.locals, j = [];
                    if (o.reload) {
                        if (R(o.reload) || B(o.reload)) {
                            if (B(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
                            var P = o.reload === !0 ? h[0] : d(o.reload);
                            if (o.reload && !P) throw new Error("No such reload state '" + (R(o.reload) ? o.reload : o.reload.name) + "'");
                            for (;O && O === h[T] && O !== P; ) N = j[T] = O.locals, T++, O = C[T];
                        }
                    } else for (;O && O === h[T] && O.ownParams.$$equals(t, f); ) N = j[T] = O.locals, 
                    T++, O = C[T];
                    if (x(e, t, u, f, N, o)) return v && (t["#"] = v), k.params = t, V(k.params, p), 
                    V(l(e.params.$$keys(), p), e.locals.globals.$stateParams), o.location && e.navigable && e.navigable.url && (g.push(e.navigable.url, t, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }), g.update(!0)), k.transition = null, i.when(k.current);
                    if (t = l(e.params.$$keys(), t || {}), v && (t["#"] = v), o.notify && n.$broadcast("$stateChangeStart", e.self, t, u.self, f, o).defaultPrevented) return n.$broadcast("$stateChangeCancel", e.self, t, u.self, f), 
                    null == k.transition && g.update(), E;
                    for (var L = i.when(N), M = T; M < C.length; M++, O = C[M]) N = j[M] = r(N), L = b(O, t, O === e, L, N, o);
                    var q = k.transition = L.then(function() {
                        var r, i, a;
                        if (k.transition !== q) return S;
                        for (r = h.length - 1; r >= T; r--) a = h[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), 
                        a.locals = null;
                        for (r = T; r < C.length; r++) i = C[r], i.locals = j[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                        return k.transition !== q ? S : (k.$current = e, k.current = e.self, k.params = t, 
                        V(k.params, p), k.transition = null, o.location && e.navigable && g.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === o.location
                        }), o.notify && n.$broadcast("$stateChangeSuccess", e.self, t, u.self, f), g.update(!0), 
                        k.current);
                    }, function(r) {
                        return k.transition !== q ? S : (k.transition = null, a = n.$broadcast("$stateChangeError", e.self, t, u.self, f, r), 
                        a.defaultPrevented || g.update(), i.reject(r));
                    });
                    return q;
                }, k.is = function(n, e, r) {
                    r = H({
                        relative: k.$current
                    }, r || {});
                    var i = d(n, r.relative);
                    return D(i) ? k.$current === i && (!e || u(i.params.$$values(e), p)) : t;
                }, k.includes = function(n, e, r) {
                    if (r = H({
                        relative: k.$current
                    }, r || {}), R(n) && v(n)) {
                        if (!y(n)) return !1;
                        n = k.$current.name;
                    }
                    var i = d(n, r.relative);
                    return D(i) ? !!D(k.$current.includes[i.name]) && (!e || u(i.params.$$values(e), p, a(e))) : t;
                }, k.href = function(n, e, r) {
                    r = H({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: k.$current
                    }, r || {});
                    var i = d(n, r.relative);
                    if (!D(i)) return null;
                    r.inherit && (e = c(p, e || {}, k.$current, i));
                    var o = i && r.lossy ? i.navigable : i;
                    return o && o.url !== t && null !== o.url ? g.href(o.url, l(i.params.$$keys().concat("#"), e || {}), {
                        absolute: r.absolute
                    }) : null;
                }, k.get = function(n, e) {
                    if (0 === arguments.length) return h(a(C), function(n) {
                        return C[n].self;
                    });
                    var t = d(n, e || k.$current);
                    return t && t.self ? t.self : null;
                }, k;
            }
            function x(n, e, t, r, i, o) {
                function a(n, e, t) {
                    function r(e) {
                        return "search" != n.params[e].location;
                    }
                    var i = n.params.$$keys().filter(r), o = f.apply({}, [ n.params ].concat(i)), a = new W.ParamSet(o);
                    return a.$$equals(e, t);
                }
                if (!o.reload && n === t && (i === t.locals || n.self.reloadOnSearch === !1 && a(t, r, e))) return !0;
            }
            var I, k, C = {}, S = {}, _ = "abstract", E = {
                parent: function(n) {
                    if (D(n.parent) && n.parent) return d(n.parent);
                    var e = /^(.+)\.[^.]+$/.exec(n.name);
                    return e ? d(e[1]) : I;
                },
                data: function(n) {
                    return n.parent && n.parent.data && (n.data = n.self.data = r(n.parent.data, n.data)), 
                    n.data;
                },
                url: function(n) {
                    var e = n.url, t = {
                        params: n.params || {}
                    };
                    if (R(e)) return "^" == e.charAt(0) ? i.compile(e.substring(1), t) : (n.parent.navigable || I).url.concat(e, t);
                    if (!e || i.isMatcher(e)) return e;
                    throw new Error("Invalid url '" + e + "' in state '" + n + "'");
                },
                navigable: function(n) {
                    return n.url ? n : n.parent ? n.parent.navigable : null;
                },
                ownParams: function(n) {
                    var e = n.url && n.url.params || new W.ParamSet();
                    return U(n.params || {}, function(n, t) {
                        e[t] || (e[t] = new W.Param(t, null, n, "config"));
                    }), e;
                },
                params: function(n) {
                    var e = f(n.ownParams, n.ownParams.$$keys());
                    return n.parent && n.parent.params ? H(n.parent.params.$$new(), e) : new W.ParamSet();
                },
                views: function(n) {
                    var e = {};
                    return U(D(n.views) ? n.views : {
                        "": n
                    }, function(t, r) {
                        r.indexOf("@") < 0 && (r += "@" + n.parent.name), e[r] = t;
                    }), e;
                },
                path: function(n) {
                    return n.parent ? n.parent.path.concat(n) : [];
                },
                includes: function(n) {
                    var e = n.parent ? H({}, n.parent.includes) : {};
                    return e[n.name] = !0, e;
                },
                $delegates: {}
            };
            I = m({
                name: "",
                url: "^",
                views: null,
                abstract: !0
            }), I.navigable = null, this.decorator = $, this.state = w, this.$get = b, b.$inject = [ "$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory" ];
        }
        function x() {
            function n(n, e) {
                return {
                    load: function(n, t) {
                        var r, i = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return t = H(i, t), t.view && (r = e.fromConfig(t.view, t.params, t.locals)), r;
                    }
                };
            }
            this.$get = n, n.$inject = [ "$rootScope", "$templateFactory" ];
        }
        function I() {
            var n = !1;
            this.useAnchorScroll = function() {
                n = !0;
            }, this.$get = [ "$anchorScroll", "$timeout", function(e, t) {
                return n ? e : function(n) {
                    return t(function() {
                        n[0].scrollIntoView();
                    }, 0, !1);
                };
            } ];
        }
        function k(n, t, r, i) {
            function o() {
                return t.has ? function(n) {
                    return t.has(n) ? t.get(n) : null;
                } : function(n) {
                    try {
                        return t.get(n);
                    } catch (e) {
                        return null;
                    }
                };
            }
            function a(n, t) {
                function r(n) {
                    return 1 === G && X >= 4 ? !!u.enabled(n) : 1 === G && X >= 2 ? !!u.enabled() : !!c;
                }
                var i = {
                    enter: function(n, e, t) {
                        e.after(n), t();
                    },
                    leave: function(n, e) {
                        n.remove(), e();
                    }
                };
                if (n.noanimation) return i;
                if (u) return {
                    enter: function(n, t, o) {
                        r(n) ? e.version.minor > 2 ? u.enter(n, null, t).then(o) : u.enter(n, null, t, o) : i.enter(n, t, o);
                    },
                    leave: function(n, t) {
                        r(n) ? e.version.minor > 2 ? u.leave(n).then(t) : u.leave(n, t) : i.leave(n, t);
                    }
                };
                if (c) {
                    var o = c && c(t, n);
                    return {
                        enter: function(n, e, t) {
                            o.enter(n, null, e), t();
                        },
                        leave: function(n, e) {
                            o.leave(n), e();
                        }
                    };
                }
                return i;
            }
            var s = o(), c = s("$animator"), u = s("$animate"), l = {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                compile: function(t, o, s) {
                    return function(t, o, c) {
                        function u() {
                            function n() {
                                e && e.remove(), t && t.$destroy();
                            }
                            var e = f, t = p;
                            t && (t._willBeDestroyed = !0), d ? (v.leave(d, function() {
                                n(), f = null;
                            }), f = d) : (n(), f = null), d = null, p = null;
                        }
                        function l(a) {
                            var l, f = S(t, c, o, i), y = f && n.$current && n.$current.locals[f];
                            if ((a || y !== h) && !t._willBeDestroyed) {
                                l = t.$new(), h = n.$current.locals[f], l.$emit("$viewContentLoading", f);
                                var $ = s(l, function(n) {
                                    v.enter(n, o, function() {
                                        p && p.$emit("$viewContentAnimationEnded"), (e.isDefined(m) && !m || t.$eval(m)) && r(n);
                                    }), u();
                                });
                                d = $, p = l, p.$emit("$viewContentLoaded", f), p.$eval(g);
                            }
                        }
                        var f, d, p, h, g = c.onload || "", m = c.autoscroll, v = a(c, t);
                        t.$on("$stateChangeSuccess", function() {
                            l(!1);
                        }), l(!0);
                    };
                }
            };
            return l;
        }
        function C(n, e, t, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var o = i.html();
                    return function(i, a, s) {
                        var c = t.$current, u = S(i, s, a, r), l = c && c.locals[u];
                        if (l) {
                            a.data("$uiView", {
                                name: u,
                                state: l.$$state
                            }), a.html(l.$template ? l.$template : o);
                            var f = n(a.contents());
                            if (l.$$controller) {
                                l.$scope = i, l.$element = a;
                                var d = e(l.$$controller, l);
                                l.$$controllerAs && (i[l.$$controllerAs] = d), a.data("$ngControllerController", d), 
                                a.children().data("$ngControllerController", d);
                            }
                            f(i);
                        }
                    };
                }
            };
        }
        function S(n, e, t, r) {
            var i = r(e.uiView || e.name || "")(n), o = t.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "");
        }
        function _(n, e) {
            var t, r = n.match(/^\s*({[^}]*})\s*$/);
            if (r && (n = e + "(" + r[1] + ")"), t = n.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), 
            !t || 4 !== t.length) throw new Error("Invalid state ref '" + n + "'");
            return {
                state: t[1],
                paramExpr: t[3] || null
            };
        }
        function E(n) {
            var e = n.parent().inheritedData("$uiView");
            if (e && e.state && e.state.name) return e.state;
        }
        function T(n) {
            var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(n.prop("href")), t = "FORM" === n[0].nodeName;
            return {
                attr: t ? "action" : e ? "xlink:href" : "href",
                isAnchor: "A" === n.prop("tagName").toUpperCase(),
                clickable: !t
            };
        }
        function A(n, e, t, r, i) {
            return function(o) {
                var a = o.which || o.button, s = i();
                if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || n.attr("target"))) {
                    var c = t(function() {
                        e.go(s.state, s.params, s.options);
                    });
                    o.preventDefault();
                    var u = r.isAnchor && !s.href ? 1 : 0;
                    o.preventDefault = function() {
                        u-- <= 0 && t.cancel(c);
                    };
                }
            };
        }
        function O(n, e) {
            return {
                relative: E(n) || e.$current,
                inherit: !0
            };
        }
        function N(n, t) {
            return {
                restrict: "A",
                require: [ "?^uiSrefActive", "?^uiSrefActiveEq" ],
                link: function(r, i, o, a) {
                    var s = _(o.uiSref, n.current.name), c = {
                        state: s.state,
                        href: null,
                        params: null
                    }, u = T(i), l = a[1] || a[0];
                    c.options = H(O(i, n), o.uiSrefOpts ? r.$eval(o.uiSrefOpts) : {});
                    var f = function(t) {
                        t && (c.params = e.copy(t)), c.href = n.href(s.state, c.params, c.options), l && l.$$addStateInfo(s.state, c.params), 
                        null !== c.href && o.$set(u.attr, c.href);
                    };
                    s.paramExpr && (r.$watch(s.paramExpr, function(n) {
                        n !== c.params && f(n);
                    }, !0), c.params = e.copy(r.$eval(s.paramExpr))), f(), u.clickable && i.bind("click", A(i, n, t, u, function() {
                        return c;
                    }));
                }
            };
        }
        function j(n, e) {
            return {
                restrict: "A",
                require: [ "?^uiSrefActive", "?^uiSrefActiveEq" ],
                link: function(t, r, i, o) {
                    function a(e) {
                        f.state = e[0], f.params = e[1], f.options = e[2], f.href = n.href(f.state, f.params, f.options), 
                        c && c.$$addStateInfo(f.state, f.params), f.href && i.$set(s.attr, f.href);
                    }
                    var s = T(r), c = o[1] || o[0], u = [ i.uiState, i.uiStateParams || null, i.uiStateOpts || null ], l = "[" + u.map(function(n) {
                        return n || "null";
                    }).join(", ") + "]", f = {
                        state: null,
                        params: null,
                        options: null,
                        href: null
                    };
                    t.$watch(l, a, !0), a(t.$eval(l)), s.clickable && r.bind("click", A(r, n, e, s, function() {
                        return f;
                    }));
                }
            };
        }
        function P(n, e, t) {
            return {
                restrict: "A",
                controller: [ "$scope", "$element", "$attrs", "$timeout", function(e, r, i, o) {
                    function a(e, t, i) {
                        var o = n.get(e, E(r)), a = s(e, t);
                        g.push({
                            state: o || {
                                name: e
                            },
                            params: t,
                            hash: a
                        }), m[a] = i;
                    }
                    function s(n, t) {
                        if (!R(n)) throw new Error("state should be a string");
                        return B(t) ? n + z(t) : (t = e.$eval(t), B(t) ? n + z(t) : n);
                    }
                    function c() {
                        for (var n = 0; n < g.length; n++) f(g[n].state, g[n].params) ? u(r, m[g[n].hash]) : l(r, m[g[n].hash]), 
                        d(g[n].state, g[n].params) ? u(r, p) : l(r, p);
                    }
                    function u(n, e) {
                        o(function() {
                            n.addClass(e);
                        });
                    }
                    function l(n, e) {
                        n.removeClass(e);
                    }
                    function f(e, t) {
                        return n.includes(e.name, t);
                    }
                    function d(e, t) {
                        return n.is(e.name, t);
                    }
                    var p, h, g = [], m = {};
                    p = t(i.uiSrefActiveEq || "", !1)(e);
                    try {
                        h = e.$eval(i.uiSrefActive);
                    } catch (v) {}
                    h = h || t(i.uiSrefActive || "", !1)(e), B(h) && U(h, function(t, r) {
                        if (R(t)) {
                            var i = _(t, n.current.name);
                            a(i.state, e.$eval(i.paramExpr), r);
                        }
                    }), this.$$addStateInfo = function(n, e) {
                        B(h) && g.length > 0 || (a(n, e, h), c());
                    }, e.$on("$stateChangeSuccess", c), c();
                } ]
            };
        }
        function L(n) {
            var e = function(e, t) {
                return n.is(e, t);
            };
            return e.$stateful = !0, e;
        }
        function M(n) {
            var e = function(e, t, r) {
                return n.includes(e, t, r);
            };
            return e.$stateful = !0, e;
        }
        var D = e.isDefined, q = e.isFunction, R = e.isString, B = e.isObject, F = e.isArray, U = e.forEach, H = e.extend, V = e.copy, z = e.toJson;
        e.module("ui.router.util", [ "ng" ]), e.module("ui.router.router", [ "ui.router.util" ]), 
        e.module("ui.router.state", [ "ui.router.router", "ui.router.util" ]), e.module("ui.router", [ "ui.router.state" ]), 
        e.module("ui.router.compat", [ "ui.router" ]), g.$inject = [ "$q", "$injector" ], 
        e.module("ui.router.util").service("$resolve", g), m.$inject = [ "$http", "$templateCache", "$injector" ], 
        e.module("ui.router.util").service("$templateFactory", m);
        var W;
        v.prototype.concat = function(n, e) {
            var t = {
                caseInsensitive: W.caseInsensitive(),
                strict: W.strictMode(),
                squash: W.defaultSquashPolicy()
            };
            return new v(this.sourcePath + n + this.sourceSearch, H(t, e), this);
        }, v.prototype.toString = function() {
            return this.source;
        }, v.prototype.exec = function(n, e) {
            function t(n) {
                function e(n) {
                    return n.split("").reverse().join("");
                }
                function t(n) {
                    return n.replace(/\\-/g, "-");
                }
                var r = e(n).split(/-(?!\\)/), i = h(r, e);
                return h(i, t).reverse();
            }
            var r = this.regexp.exec(n);
            if (!r) return null;
            e = e || {};
            var i, o, a, s = this.parameters(), c = s.length, u = this.segments.length - 1, l = {};
            if (u !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            var f, d;
            for (i = 0; i < u; i++) {
                for (a = s[i], f = this.params[a], d = r[i + 1], o = 0; o < f.replace.length; o++) f.replace[o].from === d && (d = f.replace[o].to);
                d && f.array === !0 && (d = t(d)), D(d) && (d = f.type.decode(d)), l[a] = f.value(d);
            }
            for (;i < c; i++) {
                for (a = s[i], l[a] = this.params[a].value(e[a]), f = this.params[a], d = e[a], 
                o = 0; o < f.replace.length; o++) f.replace[o].from === d && (d = f.replace[o].to);
                D(d) && (d = f.type.decode(d)), l[a] = f.value(d);
            }
            return l;
        }, v.prototype.parameters = function(n) {
            return D(n) ? this.params[n] || null : this.$$paramNames;
        }, v.prototype.validates = function(n) {
            return this.params.$$validates(n);
        }, v.prototype.format = function(n) {
            function e(n) {
                return encodeURIComponent(n).replace(/-/g, function(n) {
                    return "%5C%" + n.charCodeAt(0).toString(16).toUpperCase();
                });
            }
            n = n || {};
            var t = this.segments, r = this.parameters(), i = this.params;
            if (!this.validates(n)) return null;
            var o, a = !1, s = t.length - 1, c = r.length, u = t[0];
            for (o = 0; o < c; o++) {
                var l = o < s, f = r[o], d = i[f], p = d.value(n[f]), g = d.isOptional && d.type.equals(d.value(), p), m = !!g && d.squash, v = d.type.encode(p);
                if (l) {
                    var y = t[o + 1], $ = o + 1 === s;
                    if (m === !1) null != v && (u += F(v) ? h(v, e).join("-") : encodeURIComponent(v)), 
                    u += y; else if (m === !0) {
                        var w = u.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        u += y.match(w)[1];
                    } else R(m) && (u += m + y);
                    $ && d.squash === !0 && "/" === u.slice(-1) && (u = u.slice(0, -1));
                } else {
                    if (null == v || g && m !== !1) continue;
                    if (F(v) || (v = [ v ]), 0 === v.length) continue;
                    v = h(v, encodeURIComponent).join("&" + f + "="), u += (a ? "&" : "?") + (f + "=" + v), 
                    a = !0;
                }
            }
            return u;
        }, y.prototype.is = function(n, e) {
            return !0;
        }, y.prototype.encode = function(n, e) {
            return n;
        }, y.prototype.decode = function(n, e) {
            return n;
        }, y.prototype.equals = function(n, e) {
            return n == e;
        }, y.prototype.$subPattern = function() {
            var n = this.pattern.toString();
            return n.substr(1, n.length - 2);
        }, y.prototype.pattern = /.*/, y.prototype.toString = function() {
            return "{Type:" + this.name + "}";
        }, y.prototype.$normalize = function(n) {
            return this.is(n) ? n : this.decode(n);
        }, y.prototype.$asArray = function(n, e) {
            function r(n, e) {
                function r(n, e) {
                    return function() {
                        return n[e].apply(n, arguments);
                    };
                }
                function i(n) {
                    return F(n) ? n : D(n) ? [ n ] : [];
                }
                function o(n) {
                    switch (n.length) {
                      case 0:
                        return t;

                      case 1:
                        return "auto" === e ? n[0] : n;

                      default:
                        return n;
                    }
                }
                function a(n) {
                    return !n;
                }
                function s(n, e) {
                    return function(t) {
                        if (F(t) && 0 === t.length) return t;
                        t = i(t);
                        var r = h(t, n);
                        return e === !0 ? 0 === p(r, a).length : o(r);
                    };
                }
                function c(n) {
                    return function(e, t) {
                        var r = i(e), o = i(t);
                        if (r.length !== o.length) return !1;
                        for (var a = 0; a < r.length; a++) if (!n(r[a], o[a])) return !1;
                        return !0;
                    };
                }
                this.encode = s(r(n, "encode")), this.decode = s(r(n, "decode")), this.is = s(r(n, "is"), !0), 
                this.equals = c(r(n, "equals")), this.pattern = n.pattern, this.$normalize = s(r(n, "$normalize")), 
                this.name = n.name, this.$arrayMode = e;
            }
            if (!n) return this;
            if ("auto" === n && !e) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, n);
        }, e.module("ui.router.util").provider("$urlMatcherFactory", $), e.module("ui.router.util").run([ "$urlMatcherFactory", function(n) {} ]), 
        w.$inject = [ "$locationProvider", "$urlMatcherFactoryProvider" ], e.module("ui.router.router").provider("$urlRouter", w), 
        b.$inject = [ "$urlRouterProvider", "$urlMatcherFactoryProvider" ], e.module("ui.router.state").factory("$stateParams", function() {
            return {};
        }).provider("$state", b), x.$inject = [], e.module("ui.router.state").provider("$view", x), 
        e.module("ui.router.state").provider("$uiViewScroll", I);
        var G = e.version.major, X = e.version.minor;
        k.$inject = [ "$state", "$injector", "$uiViewScroll", "$interpolate" ], C.$inject = [ "$compile", "$controller", "$state", "$interpolate" ], 
        e.module("ui.router.state").directive("uiView", k), e.module("ui.router.state").directive("uiView", C), 
        N.$inject = [ "$state", "$timeout" ], j.$inject = [ "$state", "$timeout" ], P.$inject = [ "$state", "$stateParams", "$interpolate" ], 
        e.module("ui.router.state").directive("uiSref", N).directive("uiSrefActive", P).directive("uiSrefActiveEq", P).directive("uiState", j), 
        L.$inject = [ "$state" ], M.$inject = [ "$state" ], e.module("ui.router.state").filter("isState", L).filter("includedByState", M);
    }(window, window.angular);
}, function(n, e) {
    "use strict";
    n.exports = [ "$scope", "$rootScope", "agentInfo", "login", "$location", "siteStat", "dialog", "agent", "loading", "map", "form", function(n, e, t, r, i, o, a, s, c, u, l) {
        u.initMap(), u.openTimer(), n.$watch(function() {
            return JSON.stringify(t);
        }, function() {
            t.jump();
        }), n.login = function() {
            r.login(n.username, n.password).then(function(n) {
                t.fillInfo(n), t.jump();
            }, function(n) {
                alert("登录失败：" + n.message);
            });
        }, n.clickEventCount = function() {
            o.eventCount("首页", "注册");
        }, n.loginDialog = function() {
            var n = '\n        <section class="login container-fluid dialogLogin">\n            <div class="row">\n                <div class="col-md-11 col-md-offset-1">\n                    <div class="formWrapper">\n                        <form>\n                            <div class="form-group loginName">\n                                <span class="glyphicon glyphicon-user"></span>\n                                <input type="username" name="username" value="" id="username" class="form-control" placeholder="手机号码/见证人编号"/>\n                            </div>\n                            <div class="form-group loginName">\n                                <span class="glyphicon glyphicon-lock"></span>\n                                <input type="password" name="password" value="" id="password" class="form-control" placeholder="密码"/>\n                            </div>\n                            <div class="form-group loginName">\n                                <button type="button" class="btn btn-primary btnPadding" id="loginButton">立即登录</button>\n                                <a class="pull-right forgetPassWord" href="/index/verify-id" stat-click="1" stat-category="忘记密码" stat-action="点击忘记密码链接">忘记密码</a>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </section>\n        ';
            l.showHtml("请登录", n, !1, !1, function() {
                a.hide(), e.removeEventListener("click", u, !1), document.removeEventListener("keyup", f, !1);
            });
            var e, i, o, s, c, u, f;
            setTimeout(function() {
                e = document.querySelector("#loginButton"), u = function() {
                    i = document.querySelector("input[type=username]"), o = document.querySelector("input[type=password]"), 
                    s = i.value, c = o.value, r.login(s, c).then(function(n) {
                        a.hide(), t.fillInfo(n), t.jump(), e.removeEventListener("click", u, !1), document.removeEventListener("keyup", f, !1);
                    }, function(n) {
                        alert("登录失败：" + n.message);
                    });
                }, f = function(n) {
                    13 === n.keyCode && u();
                }, e.addEventListener("click", u, !1), document.addEventListener("keyup", f, !1);
            }, 0);
        }, n.findMore = function() {
            a.show({
                title: "推荐奖励活动规则说明",
                content: '<div class="knowMoreDialog"><h4>符合以下两个条件，视为成功推荐：</h4><ul><li>1. 申请人以“固定见证人”身份提交申请，即需要有固定的营业场所；</li><li>2. 成功接入后，完成三单见证。</li></ul><h4>奖励的发放通过以下方式：</h4><ul><li>1. 见证人的奖励，随见证订单的提成一起发放；每周二结算一次；</li><li>2. 邀请人的奖励，需要登录FUTU5.COM，在个人账户-邀请关系-邀请的见证点页面，填写收款银行信息。每个月月初统一结算，直接发放到银行账号。</li></ul></div>',
                showCancel: !1,
                okCallback: function() {
                    a.hide();
                },
                confirm: "确定"
            });
        }, n.sendInvitation = function() {
            var e = /^1\d{10}$/, t = n.customer_uid, r = n.invite_phone;
            return n.customer_uid ? n.customer_uid.length < 6 ? void alert("请填写正确的牛牛号") : void (n.invite_phone && e.test(n.invite_phone) ? (c.show(), 
            s.sendInvitation(t, r).then(function(n) {
                a.show({
                    title: "提示",
                    content: "发送邀请成功！",
                    showCancel: !1,
                    confirm: "确定",
                    okCallback: function() {
                        a.hide(), c.hide();
                    },
                    showClose: !1
                });
            }, function(n) {
                var e = n.message;
                a.show({
                    title: "提示",
                    content: e,
                    showCancel: !1,
                    confirm: "确定",
                    okCallback: function() {
                        a.hide(), c.hide();
                    },
                    showClose: !1
                });
            })) : alert("请填写正确的手机号码")) : void alert("牛牛号不能为空");
        }, n.checkUid = function() {
            return n.customer_uid ? n.customer_uid.length < 6 ? void alert("请填写正确的牛牛号") : (c.show(), 
            void s.checkUid(n.customer_uid).then(function(e) {
                e.uidExists ? (n.scanImgShow = !0, c.hide()) : (n.scanImgShow = !1, a.show({
                    title: "提示",
                    content: "牛牛号不存在，请重新输入",
                    showCancel: !1,
                    okCallback: function() {
                        c.hide(), a.hide();
                    },
                    showClose: !1
                }));
            }, function(n) {
                alert(n), c.hide();
            })) : void alert("牛牛号不能为空");
        }, n.uidChange = function() {
            n.scanImgShow = !1, n.recommend_method = "0";
        }, Math.random() > .5 ? (n.isShowBanner01 = !0, n.homeBanner02Url = "/images/login/banner0202.jpg") : (n.isShowBanner01 = !1, 
        n.homeBanner02Url = "/images/login/banner02.jpg"), n.dealMap = function(n) {
            u.closeTimer(), n.city || (n.city = n.province), u.getLocationShowInfoWindow(n.province, n.city, u.noAnimation);
        }, n.level = function() {
            return 2;
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "agent", "$stateParams", "$timeout", "agentInfo", "login", "customer", "form", "dialog", "loading", function(n, e, t, r, i, o, a, s, c, u, l, f) {
        function d(n) {
            2 === +n ? e.can_audit = 0 : 3 === +n ? e.can_audit = 1 : e.can_audit = void 0;
        }
        n.currNav = "customerList", e.stateCodeMap = c.stateCodeMap, e.status = i.status || "1", 
        e.period = "month", e.getCustomerStatusText = c.getStatusText.bind(c), d(e.status), 
        e.canOperate = function(n, e, t, r) {
            r = +r, e = +e;
            var i = !1, o = {
                addInfo: [ 200 ],
                print: [ 0, 100, 200 ],
                express: [ 300 ],
                riskDisclosure: [ 501 ],
                ignore: [ 0, 100, 211 ]
            };
            return o[n] ? ("ignore" !== n || 4 !== a.state) && ("ignore" === n && 200 === e && "undefined" != typeof t ? [ 2, 3 ].indexOf(t) > -1 && r < 100 || ([ 1 ].indexOf(t) > -1 || ([ 3 ].indexOf(t) > -1 && 100 === r || ([ 2 ].indexOf(t) > -1 && 100 === r, 
            !1))) : "print" === n && 200 === e && "undefined" != typeof t ? [ 2, 3 ].indexOf(t) > -1 && r < 100 || ([ 1 ].indexOf(t) > -1 || ([ 3 ].indexOf(t) > -1 && 100 === r || ([ 2 ].indexOf(t) > -1 && 100 === r, 
            !1))) : "addInfo" === n && 200 === e && "undefined" != typeof t ? [ 2, 3 ].indexOf(t) > -1 && r < 100 : o[n].indexOf(e) > -1) : i;
        }, e.switchStatus = function(n) {
            e.status = n, e.period = "month", e.isOpen = !1, d(n), t.search("status", n), p();
        }, e.switchPeriod = function(n) {
            e.period = n, e.isOpen = !1, p();
        }, e.ignore = function(n, e) {
            (e || confirm("确定要忽略吗？")) && (f.show(), Array.isArray(n) || (n = [ n ]), c.ignore(n).then(function(n) {
                p(), f.hide();
            }, function(n) {
                f.hide(), 1 === n.code && a.noLogin(), alert("忽略失败：" + n.message);
            }));
        }, e.doPrint = function(n) {
            Array.isArray[n] || (n = [ n ]), window.open("/site/download-table?uidsStr=" + n.join(","));
        }, e.fillExpress = function(n) {
            Array.isArray(n) || (n = [ n ]);
            var e = '\n            <div class="form-group" style="min-height:150px">\n                <label style="display:block;padding:15px 15px;">快递单号</label>\n                <div class="col-sm-12">\n                    <input value="" type="text" class="form-control" name="expressNumber" placeholder="快递单号">\n                </div>\n                <div class="col-sm-12">\n                    <button class="btn btn-primary" style="margin-top:15px;padding:8px 30px 8px 30px" id="expressNumberBtn">提交</button>\n                </div>\n            </div>\n        ';
            u.showHtml("填写快递单号", e, !0, !1, function() {
                l.hide(), t.removeEventListener("click", o, !1);
            });
            var t, r, i, o;
            setTimeout(function() {
                t = document.querySelector("#expressNumberBtn"), o = function() {
                    r = document.querySelector("input[name=expressNumber]"), i = r.value, f.show(), 
                    c.setExpressNumber(n, i).then(function(n) {
                        l.hide(), f.hide(), p(), t.removeEventListener("click", o, !1);
                    }, function(n) {
                        f.hide(), 1 === n.code && a.noLogin(), alert("填写快递单号失败：" + n.message);
                    });
                }, t.addEventListener("click", o, !1);
            }, 0);
        };
        var p = function(n) {
            f.show();
            var t = {
                0: [ 0, 100, 200, 211, 300, 400, 401, 500, 501, 600 ],
                1: [ 100 ],
                2: [ 200 ],
                3: [ 200 ],
                4: [ 300 ],
                5: [ 500, 501 ],
                6: [ 600 ]
            };
            c.getList({
                status: t[e.status].join(","),
                keyword: e.keyword,
                page: n || 1,
                can_audit: e.can_audit
            }).then(function(n) {
                f.hide(), e.checkbox.checkedList = [], h(), e.customerList = n.customerList.filter(function(n) {
                    return "2" == e.status ? [ 1, 2, 3 ].indexOf(n.sub_status) > -1 : "3" != e.status || [ 2 ].indexOf(n.sub_status) > -1;
                }), e.pagination = n.pages, e.pagination.isFirstPage = 1 === +e.pagination.page_number, 
                e.pagination.isLastPage = +e.pagination.page_number === +e.pagination.page_count;
            }, function(n) {
                f.hide(), 1 === n.code && a.noLogin(), alert("获取订单列表失败：" + n.message);
            });
        };
        p(), e.multi = {
            empty: !0
        }, e.multi.doPrint = function() {
            if (e.multi.print) {
                var n = e.checkbox.checkedList.map(function(n) {
                    return n.uid;
                });
                return n.length > 5 ? void l.show("打印出错", "批量打印单批不能超过5位客户") : void e.doPrint(n);
            }
        }, e.multi.doExpress = function() {
            if (e.multi.express) {
                var n = e.checkbox.checkedList.map(function(n) {
                    return n.id;
                });
                e.fillExpress(n);
            }
        }, e.multi.doIgnore = function() {
            if (e.multi.ignore && confirm("确定要忽略吗？")) {
                var n = e.checkbox.checkedList.map(function(n) {
                    return n.id;
                });
                e.ignore(n, !0);
            }
        };
        var h = function() {
            var n = [ "print", "express", "ignore" ];
            e.checkbox.checkedList.length ? e.multi.empty && n.forEach(function(n) {
                e.multi[n] = e.checkbox.checkedList.every(function(t) {
                    return e.canOperate(n, t.status, t.sub_status, t.info_percent);
                });
            }) : (e.multi.empty = !0, n.forEach(function(n) {
                e.multi[n] = !1;
            }));
        };
        e.checkbox = {}, e.checkbox.checkedList = [], e.checkbox.toggle = function(n) {
            if ("all" === n) e.checkbox.isAllChecked ? e.checkbox.checkedList = e.customerList.slice() : e.checkbox.checkedList = []; else {
                var t = e.checkbox.checkedList.indexOf(n);
                t > -1 ? e.checkbox.checkedList.splice(t, 1) : e.checkbox.checkedList.push(n), e.checkbox.checkedList.length === e.customerList.length ? e.checkbox.isAllChecked = !0 : e.checkbox.isAllChecked = !1;
            }
            h();
        }, e.switchPage = function(n) {
            n < 1 && (n = 1), n > e.pagination.page_count && (n = e.pagination.page_count), 
            p(n);
        };
        var g;
        e.doSearch = function() {
            g || (g = o(function() {
                g = void 0, p();
            }, 500));
        }, a.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "$location", "agentInfo", "dialog", "agent", "loading", "login", function(n, e, t, r, i, o, a, s, c) {
        n.currNav = "agentPassword", e.agentPwdInfo = {}, e.isSamePwd = !1, e.isSame = function() {
            var n = e.agentPwdInfo.newPwd, t = e.agentPwdInfo.confirmPwd;
            n == t ? e.isSamePwd = !0 : e.isSamePwd = !1;
        }, e.agentPwdInfo.resetPassword = function() {
            var n = e.agentPwdInfo.curPwd, r = e.agentPwdInfo.newPwd, c = e.agentPwdInfo.confirmPwd;
            s.show(), a.postResetPassword(n, r, c).then(function(n) {
                s.hide(), o.show({
                    title: "提示",
                    content: "修改密码成功！",
                    showCancel: !1
                }), t.reload();
            }, function(n) {
                s.hide(), n.code === -1 ? i.noLogin() : 10010 === +n.code && o.show({
                    title: "提示",
                    content: n.message,
                    showCancel: !1
                });
            });
        }, i.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "agentInfo", "agent", function(n, e, t, r, i) {
        n.currNav = "helpFaq", e.faqList = [ {
            q: "见证宝是什么？",
            a: "见证宝是富途合作见证点完成见证的工具。"
        }, {
            q: "见证宝有何用处？",
            a: "只要成为富途合作见证点，帮助客户完成见证环节，即可轻松获得提成。"
        }, {
            q: "合作见证点需要做什么？",
            a: "无需您去亲自发展客户，即可在看店的同时获得额外收入。见证点只需守在店里等待客户上门，然后帮助用户完成见证环节即可。"
        }, {
            q: "如何加入？",
            a: "只要您是商户，有固定营业场地和一台打印机，就可以免费加入！"
        } ], r.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "login", "form", "agent", "dialog", "agentInfo", "$interval", "verify", function(n, e, t, r, i, o, a, s, c, u) {
        var l = sessionStorage.getItem("type");
        e.appType = l, l || t.path("/index/application-type"), e.currentStep = "register", 
        e.isSamePwd = !1, e.isSamePwd01 = !1, e.isSame = function() {
            var n = e.password, t = e.password2;
            n == t ? e.isSamePwd = !0 : e.isSamePwd = !1;
        };
        var f = t.url();
        f.split("?")[1] ? e.invite_code = "?invite_code=" + f.split("?")[1] : e.invite_code = "", 
        e.register = function() {
            var n = e.phone, r = e.password, i = e.securityCode, a = t.url(), s = a.split("?")[1];
            o.postRegister(n, r, s, l, i).then(function(n) {
                t.path("/index/fill-agent");
            }, function(n) {
                alert(n.message);
            });
        }, e.changeRegisterType = function() {
            o.postType(e.appType).then(function(n) {
                t.path("/index/fill-agent");
            }, function(n) {
                alert(n.message);
            });
        }, n.isLogin && e.changeRegisterType(), e.areaCodeList = [ {
            id: "0",
            area_code: "+86"
        }, {
            id: "1",
            area_code: "+852"
        } ], n.sendVerifyCodeBtnWord = "发送验证码", e.areaCode || (e.areaCode = "0"), e.sendVerifyCode = function() {
            var n = /^1\d{10}$/, t = /^\d{8}$/, r = e.phone;
            "0" === e.areaCode ? n.test(r) ? u.postVerifyCode(r, 0) : alert("验证码发送失败，请输入11位大陆手机号码") : "1" === e.areaCode && (t.test(r) ? u.postVerifyCode(r, 0) : alert("验证码发送失败，请输入8位香港手机号码"));
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "$anchorScroll", "agentInfo", "login", "form", "dialog", "agent", "loading", "city", function(n, e, t, r, i, o, a, s, c, u, l) {
        function f(n, e) {
            if (!n) return 0;
            e = e || [];
            for (var t = 0; t < e.length; t++) if (e[t].n == n) return t;
            return 9999;
        }
        e.currentStep = "fill", i.refresh(), e.agentInfo = {}, e.agentInfo.isLocate = !1, 
        u.show(), c.getAgentInfo().then(function(n) {
            e.appType = +n.apply_type, 2 === e.appType ? e.isShowJobStatus = !0 : 1 === e.appType && i.jump(), 
            e.state = n.state, e.message = n.message, e.state === -3 && t.path("/index/access-agent"), 
            u.hide(), e.agentInfo.shopKeeper = n.owner, e.agentInfo.province = n.province, e.agentInfo.city = n.city, 
            e.agentInfo.idNumber = n.id_number, e.agentInfo.joinInfo = n.join_info, e.agentInfo.joinType = n.join_type + "", 
            n.uid ? (e.agentInfo.customerUid = n.uid, e.agentInfo.isCustomer = "2") : (e.agentInfo.customerUid = "", 
            e.agentInfo.isCustomer = "1"), e.agentInfo.city_code = n.city_code, e.agentInfo.agentName = n.name, 
            e.agentInfo.licenseNumber = n.license_number, e.agentInfo.agentAddress = n.address, 
            e.agentInfo.county = n.county, e.agentInfo.longitude = n.longitude, e.agentInfo.latitude = n.latitude, 
            e.agentInfo.isLocate = !!n.longitude, e.agentInfo.agentOpeningTime = n.open_time, 
            e.agentInfo.cellphone = n.cellphone, e.agentInfo.telephone = n.telephone, e.agentInfo.showContact = n.show_contact, 
            e.agentInfo.qq = n.qq, e.agentInfo.education = n.edu_background, e.agentInfo.work_status = n.job_status, 
            e.agentInfo.beginTime = n.work_started_at, e.agentInfo.resignTime = n.work_leaved_at, 
            e.agentInfo.company = n.work_employer, e.agentInfo.industry = n.work_business, e.agentInfo.position = n.work_position, 
            e.agentInfo.entrance = n.enrolled_at, e.agentInfo.school = n.school_name, e.agentInfo.major = n.profession_name, 
            e.agentInfo.other = n.other_info, e.agentInfo.idCardPhotoImg = "", e.agentInfo.idCardPhotoImgid = "a", 
            e.agentInfo.agentImg = "", e.agentInfo.agentImgid = "b", e.agentInfo.licenseImg = "", 
            e.agentInfo.licenseImgid = "c", e.agentInfo.idCard1Img = "", e.agentInfo.idCard1Imgid = "d", 
            e.agentInfo.idCard2Img = "", e.agentInfo.idCard2Imgid = "e", e.agentInfo.avatarImg = "", 
            e.agentInfo.avatarImgid = "f", e.agentInfo.eduBackgroundImg = "", e.agentInfo.eduBackgroundImgid = "g", 
            e.agentInfo.resumePdf = "", e.agentInfo.resumePdfid = "h", n.attach && n.attach.forEach(function(n) {
                7 === +n.type ? e.agentInfo.idCardPhotoImg || (e.agentInfo.idCardPhotoImg = n.file_url, 
                e.agentInfo.idCardPhotoImgid = n.id) : 1 === +n.type ? e.agentInfo.agentImg || (e.agentInfo.agentImg = n.file_url, 
                e.agentInfo.agentImgid = n.id) : 2 === +n.type ? e.agentInfo.licenseImg || (e.agentInfo.licenseImg = n.file_url, 
                e.agentInfo.licenseImgid = n.id) : 3 === +n.type ? e.agentInfo.idCard1Img ? e.agentInfo.idCard2mg || (e.agentInfo.idCard2Img = n.file_url, 
                e.agentInfo.idCard2Imgid = n.id) : (e.agentInfo.idCard1Img = n.file_url, e.agentInfo.idCard1Imgid = n.id) : 6 === +n.type ? e.agentInfo.avatarImg || (e.agentInfo.avatarImg = n.file_url, 
                e.agentInfo.avatarImgid = n.id) : 8 === +n.type ? e.agentInfo.eduBackgroundImg || (e.agentInfo.eduBackgroundImg = n.file_url, 
                e.agentInfo.eduBackgroundImgid = n.id) : 9 === +n.type && (e.agentInfo.resumePdf || (e.agentInfo.resumePdf = n.file_url, 
                e.agentInfo.resumePdfid = n.id));
            }), "0" === e.agentInfo.joinType ? e.agentInfo.joinType = "1" : "4" === e.agentInfo.joinType && (e.isReadOnly = !0, 
            e.isDisable = !0);
        }, function(n) {
            u.hide(), 1 === n.code && i.noLogin(), alert("加载见证点信息出错：" + n.message);
        }), e.agentImgUploaded = function(n, t) {
            0 === +n.data.code ? e.agentInfo[t] = n.data.data : alert(n.data.message);
        }, e.uploadError = function(n) {
            alert("上传失败！status:" + n.status);
        }, e.onLocate = function(n, t) {
            e.agentInfo.longitude = n, e.agentInfo.latitude = t, e.agentInfo.isLocate = !0;
        }, e.isCustomer = function() {
            1 === +e.agentInfo.isCustomer && (e.agentInfo.customerUid = "");
        }, e.postFillInfo = function() {
            if (e.agentInfo.idCardPhotoImg) {
                u.show();
                var n = {
                    province: e.agentInfo.province,
                    city: e.agentInfo.city,
                    id_number: e.agentInfo.idNumber,
                    idcard_photo_img: e.agentInfo.idCardPhotoImg,
                    idcard1_img: e.agentInfo.idCard1Img,
                    idcard2_img: e.agentInfo.idCard2Img,
                    avatar_img: e.agentInfo.avatarImg,
                    join_type: e.agentInfo.joinType,
                    join_info: e.agentInfo.joinInfo || "",
                    uid: e.agentInfo.customerUid || "",
                    city_code: e.agentInfo.city_code || ""
                }, r = {
                    agent_name: e.agentInfo.agentName,
                    agent_owner: e.agentInfo.shopKeeper,
                    license_number: e.agentInfo.licenseNumber,
                    agent_address: e.agentInfo.agentAddress,
                    county: e.agentInfo.county,
                    longitude: e.agentInfo.longitude,
                    latitude: e.agentInfo.latitude,
                    open_time: e.agentInfo.agentOpeningTime,
                    cellphone: e.agentInfo.cellphone,
                    telephone: e.agentInfo.telephone,
                    show_contact: e.agentInfo.showContact,
                    agent_img: e.agentInfo.agentImg,
                    license_img: e.agentInfo.licenseImg,
                    isNew: 1
                }, o = {
                    agent_name: e.agentInfo.agentName,
                    qq: e.agentInfo.qq,
                    edu_background: e.agentInfo.education,
                    job_status: e.agentInfo.work_status,
                    edu_background_img: e.agentInfo.eduBackgroundImg,
                    isNew: 1
                }, a = {
                    work_started_at: e.agentInfo.beginTime,
                    work_employer: e.agentInfo.company,
                    work_business: e.agentInfo.industry,
                    work_position: e.agentInfo.position,
                    resume_pdf: e.agentInfo.resumePdf
                }, s = {
                    work_started_at: e.agentInfo.beginTime,
                    work_leaved_at: e.agentInfo.resignTime,
                    work_employer: e.agentInfo.company,
                    work_business: e.agentInfo.industry,
                    work_position: e.agentInfo.position,
                    resume_pdf: e.agentInfo.resumePdf
                }, l = {
                    enrolled_at: e.agentInfo.entrance,
                    school_name: e.agentInfo.school,
                    profession_name: e.agentInfo.major
                }, f = {
                    other_info: e.agentInfo.other
                }, d = {};
                1 == e.appType ? d = angular.extend(n, r) : 2 == e.appType && 1 == e.agentInfo.work_status ? d = angular.extend(n, o, a) : 2 == e.appType && 2 == e.agentInfo.work_status ? d = angular.extend(n, o, s) : 2 == e.appType && 3 == e.agentInfo.work_status ? d = angular.extend(n, o, l) : 2 == e.appType && 4 == e.agentInfo.work_status && (d = angular.extend(n, o, f)), 
                c.postFillAgent(d).then(function(n) {
                    i.refresh(function() {
                        1 === e.appType ? t.path("/index/agreement-agent") : 2 === e.appType && t.path("/index/video-interview"), 
                        u.hide();
                    });
                }, function(n) {
                    alert(n), u.hide();
                });
            } else ;
        }, e.agentInfo.accessTypeList = [ {
            id: "1",
            type: "主动申请"
        }, {
            id: "4",
            type: "富途用户邀请我加入"
        }, {
            id: "2",
            type: "富途员工商务拓展"
        } ], e.agentInfo.province || (e.agentInfo.province = "广东省", e.agentInfo.city = "深圳市", 
        e.agentInfo.county = "市辖区"), e.provinceList = l, e.cityList = [], e.countyList = [];
        var d = f(e.agentInfo.province, l);
        f(e.agentInfo.city, e.cityList), f(e.agentInfo.county, e.countyList);
        e.$watch("agentInfo.province", function(n) {
            if (d = f(e.agentInfo.province, l), e.agentInfo.province || (e.agentInfo.province = l[d].n), 
            e.cityList = l[d] && l[d].c, e.cityList && e.agentInfo.city) {
                var t = e.cityList.some(function(n) {
                    return n.n === e.agentInfo.city;
                });
                t || (e.agentInfo.city = e.cityList[0].n);
            }
        }), e.$watch("agentInfo.city", function(n) {
            var t = f(e.agentInfo.city, e.cityList);
            if (9999 == t && (e.agentInfo.city = e.cityList && e.cityList[0] && e.cityList[0].n), 
            e.countyList = e.cityList && e.cityList[t] && e.cityList[t].c, e.countyList || (e.countyList = [ {
                n: "--"
            } ]), e.countyList && e.agentInfo.county) {
                var r = e.countyList.some(function(n) {
                    return n.n === e.agentInfo.county;
                });
                r || (e.agentInfo.county = e.countyList[0].n);
            }
        });
        var p = [ "/images/register/idCardPhotoImg.jpg", "/images/register/idImg.jpg", "/images/register/educationImg.jpg", "/images/register/avatarImg.jpg", "/images/register/shopImg.jpg", "/images/register/licenImg.jpg" ];
        e.idCardPhotoImg = p[0], e.idImg = p[1], e.educationImg = p[2], e.avatarImg = p[3], 
        e.shopImg = p[4], e.licenImg = p[5], e.seeBigPic = function(n) {
            s.show({
                title: "查看大图",
                content: '<img src="' + n + '" class="text-center bigPicSize01"/>',
                showCancel: !1
            });
        }, e.deleteImg = function(n) {
            var t = function(t) {
                s.show({
                    title: "提示",
                    content: "确认要删除吗？",
                    okCallback: function() {
                        s.hide(), "a" === n || "b" === n || "c" === n || "d" === n || "e" === n || "f" === n || "g" === n || "h" === n ? e.agentInfo[t] = "" : (u.show(), 
                        c.postDeleteContract(n).then(function() {
                            u.hide(), i.refresh(), e.agentInfo[t] = "";
                        }, function(n) {
                            u.hide(), alert(n);
                        }));
                    },
                    cancelCallback: function() {
                        s.hide();
                    }
                });
            };
            n === e.agentInfo.idCard1Imgid ? t("idCard1Img") : n === e.agentInfo.agentImgid ? t("agentImg") : n === e.agentInfo.idCardPhotoImgid ? t("idCardPhotoImg") : n === e.agentInfo.licenseImgid ? t("licenseImg") : n === e.agentInfo.idCard2Imgid ? t("idCard2Img") : n === e.agentInfo.avatarImgid ? t("avatarImg") : n === e.agentInfo.eduBackgroundImgid ? t("eduBackgroundImg") : n === e.agentInfo.resumePdfid && t("resumePdf");
        }, e.openResume = function() {
            window.open(e.agentInfo.resumePdf);
        }, e.changeType = function() {
            t.path("/index/application-type");
        }, e.sendGeoPosition = function(n, t) {
            2 == n && 1 === t ? c.sendGeo(e.agentInfo.province, e.agentInfo.city, e.appType).then(function(n) {
                e.agentInfo.city_code = n.city_code;
            }) : e.agentInfo.city_code = "";
        }, e.confirmCityCode = function() {
            var n = e.agentInfo.joinType, t = e.appType;
            if (2 == n && 1 === t) {
                var r = e.agentInfo.province, i = e.agentInfo.city, o = e.agentInfo.county;
                "--" == o && (o = "");
                var a = e.agentInfo.city_code;
                s.show({
                    title: "申请接入自动审核通过，即将分配见证人编号，请确认",
                    content: '<div style="height:70px;margin-top:20px"><div class="form-group col-sm-12"><label class="col-sm-3">所在城市：</label><div class="col-sm-2">' + r + '</div><div class="col-sm-2">' + i + '</div><div class="col-sm-2">' + o + '</div></div><div class="form-group col-sm-12" style="height:50px;"><label class="col-sm-3">所在城市区号：</label><div class="col-sm-9">' + a + "</div></div></div>",
                    okCallback: function() {
                        s.hide(), e.postFillInfo();
                    },
                    showClose: !1,
                    cancel: "返回并修改",
                    confirm: "提交"
                });
            } else e.postFillInfo();
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "loading", "login", "agent", "agentInfo", "dialog", "form", function(n, e, t, r, i, o, a, s, c) {
        function u() {
            navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1 ? (e.wechatDownloadContent = "请用电脑打开网页下载文件", 
            e.wechatUploadContent = "请用电脑打开网页上传文件", e.canUpload = !0, e.canDownLoad = !0) : e.agentInfo.contractImg01 && e.agentInfo.contractImg02 && e.agentInfo.contractImg03 && e.agentInfo.contractImg04 && e.agentInfo.contractImg05 && e.agentInfo.contractImg06 && e.agentInfo.contractImg07 && e.agentInfo.contractImg08 && e.agentInfo.contractImg09 && e.agentInfo.contractImg10 ? (e.canUpload = !0, 
            e.canDownLoad = !1) : (e.canUpload = !1, e.canDownLoad = !1);
        }
        e.agentInfo = {}, e.currentStep = "agreement", e.wechatDownloadContent = "下载文件", 
        e.wechatUploadContent = "上传文件", e.postAgreeInfo = function() {
            r.show(), o.doAgree().then(function() {
                r.hide(), a.refresh(), t.path("/index/access-agent");
            }, function(n) {
                r.hide(), alert(n);
            });
        }, e.init = function() {
            o.getAgentInfo().then(function(n) {
                e.appType = +n.apply_type, e.state = n.state, e.message = n.message, e.join_type = +n.join_type, 
                e.state === -3 && t.path("/index/access-agent"), e.agentInfo.contractImg01 = "", 
                e.agentInfo.contractImg02 = "", e.agentInfo.contractImg03 = "", e.agentInfo.contractImg04 = "", 
                e.agentInfo.contractImg05 = "", e.agentInfo.contractImg06 = "", e.agentInfo.contractImg07 = "", 
                e.agentInfo.contractImg08 = "", e.agentInfo.contractImg09 = "", e.agentInfo.contractImg10 = "", 
                e.agentInfo.attachId01 = 0, e.agentInfo.attachId02 = 0, e.agentInfo.attachId03 = 0, 
                e.agentInfo.attachId04 = 0, e.agentInfo.attachId05 = 0, e.agentInfo.attachId06 = 0, 
                e.agentInfo.attachId07 = 0, e.agentInfo.attachId08 = 0, e.agentInfo.attachId09 = 0, 
                e.agentInfo.attachId10 = 0, e.attachItems = n.attach, n.attach && n.attach.forEach(function(n) {
                    4 === +n.type && (e.agentInfo.contractImg01 ? e.agentInfo.contractImg02 ? e.agentInfo.contractImg03 ? e.agentInfo.contractImg04 ? e.agentInfo.contractImg05 ? e.agentInfo.contractImg06 ? e.agentInfo.contractImg07 ? e.agentInfo.contractImg08 ? e.agentInfo.contractImg09 ? e.agentInfo.contractImg10 || (e.agentInfo.contractImg10 = n.file_url, 
                    e.agentInfo.attachId10 = n.id) : (e.agentInfo.contractImg09 = n.file_url, e.agentInfo.attachId09 = n.id) : (e.agentInfo.contractImg08 = n.file_url, 
                    e.agentInfo.attachId08 = n.id) : (e.agentInfo.contractImg07 = n.file_url, e.agentInfo.attachId07 = n.id) : (e.agentInfo.contractImg06 = n.file_url, 
                    e.agentInfo.attachId06 = n.id) : (e.agentInfo.contractImg05 = n.file_url, e.agentInfo.attachId05 = n.id) : (e.agentInfo.contractImg04 = n.file_url, 
                    e.agentInfo.attachId04 = n.id) : (e.agentInfo.contractImg03 = n.file_url, e.agentInfo.attachId03 = n.id) : (e.agentInfo.contractImg02 = n.file_url, 
                    e.agentInfo.attachId02 = n.id) : (e.agentInfo.contractImg01 = n.file_url, e.agentInfo.attachId01 = n.id), 
                    u());
                });
            }, function(n) {
                1 === n.code && a.noLogin();
            });
        }, e.init(), u(), e.postContractInfo = function() {
            r.show(), o.postAgentContract(e.agentInfo.contractImg01, e.agentInfo.contractImg02, e.agentInfo.contractImg03, e.agentInfo.contractImg04, e.agentInfo.contractImg05, e.agentInfo.contractImg06, e.agentInfo.contractImg07, e.agentInfo.contractImg08, e.agentInfo.contractImg09, e.agentInfo.contractImg10).then(function(n) {
                a.refresh(), r.hide(), e.init();
            }, function(n) {
                alert(n), r.hide();
            });
        }, e.contractImgUploaded = function(n, t) {
            0 === +n.data.code ? (e.agentInfo.contractImg01 ? e.agentInfo.contractImg02 ? e.agentInfo.contractImg03 ? e.agentInfo.contractImg04 ? e.agentInfo.contractImg05 ? e.agentInfo.contractImg06 ? e.agentInfo.contractImg07 ? e.agentInfo.contractImg08 ? e.agentInfo.contractImg09 ? e.agentInfo.contractImg10 || (e.agentInfo.contractImg10 = n.data.data) : e.agentInfo.contractImg09 = n.data.data : e.agentInfo.contractImg08 = n.data.data : e.agentInfo.contractImg07 = n.data.data : e.agentInfo.contractImg06 = n.data.data : e.agentInfo.contractImg05 = n.data.data : e.agentInfo.contractImg04 = n.data.data : e.agentInfo.contractImg03 = n.data.data : e.agentInfo.contractImg02 = n.data.data : e.agentInfo.contractImg01 = n.data.data, 
            e.postContractInfo()) : alert(n.data.message);
        }, e.contractImgUploadError = function(n) {
            alert("上传失败！status:" + n.status);
        }, e.deleteContract = function(n) {
            var t = function(t) {
                s.show({
                    title: "提示",
                    content: "确认要删除吗？",
                    okCallback: function() {
                        s.hide(), e.agentInfo[t] = "", o.postDeleteContract(n).then(function(n) {
                            u();
                        });
                    },
                    cancelCallback: function() {
                        s.hide();
                    }
                });
            };
            n == e.agentInfo.attachId01 ? t("contractImg01") : n == e.agentInfo.attachId02 ? t("contractImg02") : n == e.agentInfo.attachId03 ? t("contractImg03") : n == e.agentInfo.attachId04 ? t("contractImg04") : n == e.agentInfo.attachId05 ? t("contractImg05") : n == e.agentInfo.attachId06 ? t("contractImg06") : n == e.agentInfo.attachId07 ? t("contractImg07") : n == e.agentInfo.attachId08 ? t("contractImg08") : n == e.agentInfo.attachId09 ? t("contractImg09") : n == e.agentInfo.attachId10 && t("contractImg10");
        }, e.checkAddress = function() {
            s.show({
                title: "详细地址",
                content: "联系方式：0755-86636688-3<br/><br/>快递地址：广东省深圳市南山区科兴科学园C3-9层  富途市场部收。",
                showCancel: !1
            });
        }, e.openContract = function(n) {
            window.open(e.agentInfo[n]);
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "agentInfo", "agent", function(n, e, t, r, i) {
        e.currentStep = "access", e.$watch(function() {
            return r.state;
        }, function(n) {
            0 !== n && "undefined" != typeof n || r.jump();
        }), i.getAgentInfo().then(function(n) {
            e.appType = +n.apply_type, e.joinType = +n.join_type, e.state = n.state, e.message = n.message, 
            1 === e.appType && 2 === e.joinType && r.jump();
        }), e.changeState = function() {
            i.getState().then(function(n) {
                t.path("index/fill-agent");
            });
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "dialog", "agent", "loading", "login", "agentInfo", function(n, e, t, r, i, o, a, s) {
        n.currNav = "downloadAgent", s.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "dialog", "agent", "loading", "login", "agentInfo", function(n, e, t, r, i, o, a, s) {
        n.currNav = "downloadBlankForm", s.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "agentInfo", "agent", function(n, e, t, r, i) {
        n.currNav = "downloadCard", r.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$stateParams", "agent", "$state", "$timeout", "dialog", "loading", "login", "agentInfo", "form", "$location", function(n, e, t, r, i, o, a, s, c, u, l, f) {
        function d() {
            r.getAgentInfo().then(function(n) {
                e.account_balance = n.available_balance, e.income_sum = n.income_sum, e.draw_sum = n.draw_sum, 
                e.uid = n.id;
            });
        }
        function p() {
            a.show({
                title: "提示",
                content: "您还未绑定微信账户，暂时不能提现。",
                confirm: "立即绑定",
                okCallback: function() {
                    a.hide(), f.path("/index/account-name");
                }
            });
        }
        function h(n, t) {
            var i = '<div class="form-group" style="min-height:120px;margin-top:15px;"><div class="col-sm-12" style="margin-bottom:20px;"><label class="col-sm-2 labelWord">微信账户：</label><span class="col-sm-10">' + n + '</span></div><div class="col-sm-12"><label class="col-sm-2 labelWord" style="line-height:34px;">提现金额：</label><div class="col-sm-4"><input value="" type="text" class="form-control" name="withdraw_cash" placeholder="输入提现金额"></div><div class="col-sm-4" style="line-height:34px;"><a href="javascript:;" id="withdraw_all">全部提现</a></div></div><div class="col-sm-12"><button class="btn btn-primary col-sm-2" style="margin:15px 0 0 15px;" id="cashBtn">提交</button></div></div>';
            l.showHtml("立即提现", i, !0, !1, function() {
                a.hide(), c.removeEventListener("click", h, !1), o.removeEventListener("click", g, !1);
            });
            var o, c, f, p, h = null, g = null;
            setTimeout(function() {
                o = document.querySelector("#cashBtn"), c = document.querySelector("#withdraw_all"), 
                h = function() {
                    f = document.querySelector("input[name=withdraw_cash]"), f.value = t;
                }, g = function() {
                    f = document.querySelector("input[name=withdraw_cash]"), p = f.value.replace(/,/g, ""), 
                    s.show(), r.postWithdrawCash(p).then(function(n) {
                        alert("提现成功"), d(), e.getList(), a.hide(), s.hide(), c.removeEventListener("click", h, !1), 
                        o.removeEventListener("click", g, !1);
                    }, function(n) {
                        s.hide(), 1 === n.code && u.noLogin(), alert("提取失败：" + n.message);
                    });
                }, c.addEventListener("click", h, !1), o.addEventListener("click", g, !1);
            }, 0);
        }
        n.currNav = "incomeAgent", u.writeBankInfo(), d();
        var g = {
            type: "0"
        };
        e.typeOption = g.type, t.uid && (g.keyword = t.uid, e.keyword = g.keyword), e.getList = function(n) {
            n || (n = {}), e.typeOption ? n.type = e.typeOption : "0", g.type = e.typeOption, 
            n.keyword = g.keyword, n.start_time = g.start_time, n.end_time = g.end_time, r.getBalanceDetail(n).then(function(n) {
                e.list = n.list, e.total_page = +n.total_page || "1", e.pageNumber = +n.page || "1", 
                e.isFirstPage = +n.page, e.isLastPage = +n.page;
            }, function(n) {
                1 === n.code && u.noLogin(), alert(n.message);
            });
        }, e.getList();
        e.doSearchDate = function() {
            g.start_time = e.start_time, g.end_time = e.end_time, r.getBalanceDetail(g).then(function(n) {
                e.list = n.list, e.total_page = +n.total_page || "1", e.pageNumber = +n.page || "1", 
                e.isFirstPage = +n.page, e.isLastPage = +n.page;
            }, function(n) {
                1 === n.code && u.noLogin(), alert(n.message);
            });
        }, e.doSearchUid = function(n, t) {
            "press" === t && 13 !== +n.keyCode || (g.keyword = e.keyword, r.getBalanceDetail(g).then(function(n) {
                e.list = n.list, e.total_page = +n.total_page || "1", e.pageNumber = +n.page || "1", 
                e.isFirstPage = +n.page, e.isLastPage = +n.page;
            }, function(n) {
                1 === n.code && u.noLogin(), alert(n.message);
            }));
        }, e.switchPage = function(n) {
            n < 1 && (n = 1), n > e.total_page && (n = e.total_page), e.getList({
                page: n
            });
        }, e.showDosit = function() {
            e.showpost = 1;
        }, e.withdrawCash = function() {
            var n, t;
            s.show(), r.getPaymentInfo().then(function(r) {
                r.wx_openid ? r.wx_name ? (s.hide(), n = r.wx_name, t = e.account_balance, h(n, t)) : a.show({
                    title: "温馨提示",
                    content: "您的收款人姓名还未填写，暂时不能提现，请先填写收款人姓名！",
                    confirm: "立即填写",
                    okCallback: function() {
                        a.hide(), s.hide(), f.path("/index/account-name");
                    },
                    cancelCallback: function() {
                        a.hide(), s.hide();
                    }
                }) : (p(), s.hide());
            }, function(n) {
                1 === n.code && u.noLogin(), alert(n.message), s.hide();
            });
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "agentInfo", "login", "form", "dialog", "agent", "loading", "city", function(n, e, t, r, i, o, a, s, c, u) {
        n.currNav = "agentInformation", e.agentInfo = {}, e.switchTabs = function(n) {
            e.tab = n;
        }, e.switchTabs(0), c.show(), s.getAgentInfo().then(function(n) {
            e.appType = +n.apply_type, e.state = n.state, e.message = n.message, e.state === -3 && t.path("/index/access-agent"), 
            c.hide(), e.agentInfo.code = n.code, e.agentInfo.shopKeeper = n.owner, e.agentInfo.province = n.province, 
            e.agentInfo.city = n.city, e.agentInfo.idNumber = n.id_number, e.agentInfo.joinInfo = n.join_info, 
            e.agentInfo.joinType = n.join_type, e.agentInfo.isCustomer = n.is_customer, e.agentInfo.customerUid = n.uid, 
            e.agentInfo.isOfficial = n.isOfficial, e.agentInfo.isHide = n.is_hide, e.agentInfo.bindDevice = n.bind_device, 
            e.agentInfo.agentName = n.name, e.agentInfo.licenseNumber = n.license_number, e.agentInfo.agentAddress = n.address, 
            e.agentInfo.county = n.county, e.agentInfo.longitude = n.longitude, e.agentInfo.latitude = n.latitude, 
            e.agentInfo.isLocate = !!n.longitude, e.agentInfo.agentOpeningTime = n.open_time, 
            e.agentInfo.cellphone = n.cellphone, e.agentInfo.telephone = n.telephone, e.agentInfo.showContact = n.show_contact, 
            1 === e.agentInfo.showContact ? e.agentInfo.showContactInfo = "座机号码" : 0 === e.agentInfo.showContact && (e.agentInfo.showContactInfo = "手机号码"), 
            e.agentInfo.qq = n.qq, e.agentInfo.education = n.edu_background, e.agentInfo.work_status = n.job_status, 
            e.agentInfo.beginTime = n.work_started_at, e.agentInfo.resignTime = n.work_leaved_at, 
            e.agentInfo.company = n.work_employer, e.agentInfo.industry = n.work_business, e.agentInfo.position = n.work_position, 
            e.agentInfo.entrance = n.enrolled_at, e.agentInfo.school = n.school_name, e.agentInfo.major = n.profession_name, 
            e.agentInfo.other = n.other_info, e.agentInfo.idCardPhotoImg = "", e.agentInfo.idCardPhotoImgid = 0, 
            e.agentInfo.agentImg = "", e.agentInfo.agentImgid = 1, e.agentInfo.licenseImg = "", 
            e.agentInfo.licenseImgid = 2, e.agentInfo.idCard1Img = "", e.agentInfo.idCard1Imgid = 3, 
            e.agentInfo.idCard2Img = "", e.agentInfo.idCard2Imgid = 4, e.agentInfo.avatarImg = "", 
            e.agentInfo.avatarImgid = 5, e.agentInfo.eduBackgroundImg = "", e.agentInfo.eduBackgroundImgid = 6, 
            e.agentInfo.resumePdf = "", e.agentInfo.resumePdfid = 7, n.attach && n.attach.forEach(function(n) {
                7 === +n.type ? e.agentInfo.idCardPhotoImg || (e.agentInfo.idCardPhotoImg = n.file_url, 
                e.agentInfo.idCardPhotoImgid = n.id) : 1 === +n.type ? e.agentInfo.agentImg || (e.agentInfo.agentImg = n.file_url, 
                e.agentInfo.agentImgid = n.id) : 2 === +n.type ? e.agentInfo.licenseImg || (e.agentInfo.licenseImg = n.file_url, 
                e.agentInfo.licenseImgid = n.id) : 3 === +n.type ? e.agentInfo.idCard1Img ? e.agentInfo.idCard2mg || (e.agentInfo.idCard2Img = n.file_url, 
                e.agentInfo.idCard2Imgid = n.id) : (e.agentInfo.idCard1Img = n.file_url, e.agentInfo.idCard1Imgid = n.id) : 6 === +n.type ? e.agentInfo.avatarImg || (e.agentInfo.avatarImg = n.file_url, 
                e.agentInfo.avatarImgid = n.id) : 8 === +n.type ? e.agentInfo.eduBackgroundImg || (e.agentInfo.eduBackgroundImg = n.file_url, 
                e.agentInfo.eduBackgroundImgid = n.id) : 9 === +n.type && (e.agentInfo.resumePdf || (e.agentInfo.resumePdf = n.file_url, 
                e.agentInfo.resumePdfid = n.id));
            });
            var r = {
                1: "休假模式",
                0: "工作模式"
            }, i = {
                1: "已隐藏",
                0: "未隐藏"
            }, o = {
                "-1": "下线",
                "-2": "黑名单",
                "-3": "审核不通过，驳回",
                0: "正常",
                1: "已注册",
                2: "已完善资料",
                3: "审核中"
            };
            e.agentInfo.state = n.state, e.agentInfo.state ? (e.agentInfo.stateText = o[n.state], 
            e.agentInfo.isOfficial && (e.agentInfo.stateText += "，" + i[e.agentInfo.isHide])) : 0 === e.agentInfo.state && (e.agentInfo.stateText = r[n.is_holiday]);
        }, function(n) {
            c.hide(), 1 === n.code && r.noLogin(), alert("加载见证点信息出错：" + n.message);
        }), e.onLocate = function(n, t) {
            e.longitude = n, e.latitude = t;
        }, r.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "$location", "agent", "loading", "login", "dialog", "agentInfo", function(n, e, t, r, i, o, a, s, c) {
        function u() {
            i.getAgentInfo().then(function(n) {
                e.agentOwner = n.owner || n.name, e.isHoliday = n.is_holiday, e.isHide = !!n.is_hide, 
                e.holidayExpired = n.holiday_expired, e.isOfficial = n.is_offical;
            }, function(n) {
                1 == n.code && c.noLogin();
            });
        }
        n.currNav = "functionSet", e.agentWorkModel = {}, e.formatDate = function(n) {
            var e = n.getFullYear(), t = n.getMonth() + 1, r = n.getDate();
            return e + "-" + (t < 10 ? "0" : "") + t + "-" + (r < 10 ? "0" : "") + r;
        }, e.getTomorrow = function(n) {
            return n = new Date(n), new Date(n.getTime() + 864e5);
        }, e.agentName = c.name, e.today = e.formatDate(new Date()), e.postModelInfo = function() {
            o.show(), i.postFunctionSet(+e.isHoliday, +e.isHide, e.holidayExpired).then(function(n) {
                o.hide(), s.show({
                    title: "提示",
                    content: "修改模式成功！",
                    showCancel: !1,
                    okCallback: function() {
                        u(), s.hide();
                    }
                });
            }, function(n) {
                o.hide(), 1 === n.code && c.noLogin(), s.show({
                    title: "修改失败",
                    content: n.message,
                    showCancel: !1
                });
            });
        }, c.writeBankInfo(), u();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "login", "form", "dialog", "agent", "loading", "agentInfo", function(n, e, t, r, i, o, a, s) {
        function c() {
            e.wx_name ? e.modify_word = u[0] : e.modify_word = u[1];
        }
        n.currNav = "accountName", o.getPaymentInfo().then(function(n) {
            n.wx_openid && (e.isBindWx = !0, e.wx_nick = n.wx_nick, e.wx_name = n.wx_name, c());
        }, function(n) {
            1 === n.code && s.noLogin(), alert(n);
        });
        var u = [ "修改", "立即填写" ];
        c(), e.bindBankName = function() {
            var n = '\n                <div class="form-group" style="min-height:80px;margin-top:15px;">\n                    <div class="col-sm-12">\n                        <input value="" type="text" class="form-control" name="bank_name" placeholder="收款人姓名">\n                    </div>\n                    <div class="col-sm-12">\n                        <button class="btn btn-primary" style="margin-top:15px;padding:8px 30px 8px 30px" id="bankNameBtn">提交</button>\n                    </div>\n                </div>\n            ';
            r.showHtml("请填写收款人姓名", n, !0, !1), setTimeout(function() {
                var n, t, r = document.querySelector("#bankNameBtn");
                r.addEventListener("click", function() {
                    n = document.querySelector("input[name=bank_name]"), t = n.value, a.show(), o.postWxName(t).then(function(n) {
                        e.wx_name = t, i.hide(), a.hide(), c();
                    }, function(n) {
                        a.hide(), 1 === n.code && s.noLogin(), alert("填写收款人姓名失败：" + n.message);
                    });
                }, !1);
            }, 0);
        }, e.unbindWx = function() {
            a.show(), i.show({
                title: "提示",
                content: "确定要解除绑定吗？",
                okCallback: function() {
                    o.unbindWx().then(function(n) {
                        e.isBindWx = !1, i.hide(), a.hide();
                    }, function(n) {
                        alert(n), i.hide(), a.hide();
                    });
                },
                cancelCallback: function() {
                    i.hide(), a.hide();
                }
            });
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "agentInfo", "login", "form", "dialog", "agent", "loading", "city", function(n, e, t, r, i, o, a, s, c, u) {
        function l(n, e, t) {
            n = n || {}, e = e || {}, t = t || {};
            var r = {};
            for (var i in n) r[i] = n[i];
            for (var o in e) r[o] = e[o];
            for (var a in t) r[a] = t[a];
            return r;
        }
        function f(n, e) {
            if (!n) return 0;
            e = e || [];
            for (var t = 0; t < e.length; t++) if (e[t].n == n) return t;
            return 9999;
        }
        e.agentInfo = {}, e.agentInfo.isLocate = !1, n.currNav = "agentInformation", e.action = "modify", 
        e.agentImgUploaded = function(n, t) {
            0 === +n.data.code ? e.agentInfo[t] = n.data.data : alert(n.data.message);
        }, e.uploadError = function(n) {
            alert("上传失败！status:" + n.status);
        }, e.onLocate = function(n, t) {
            e.agentInfo.longitude = n, e.agentInfo.latitude = t, e.agentInfo.isLocate = !0;
        }, e.postFillInfo = function() {
            if (e.agentInfo.idCardPhotoImg) {
                c.show();
                var n = {
                    province: e.agentInfo.province,
                    city: e.agentInfo.city,
                    id_number: e.agentInfo.idNumber,
                    idcard_photo_img: e.agentInfo.idCardPhotoImg,
                    idcard1_img: e.agentInfo.idCard1Img,
                    idcard2_img: e.agentInfo.idCard2Img,
                    avatar_img: e.agentInfo.avatarImg
                }, i = {
                    agent_name: e.agentInfo.agentName,
                    agent_owner: e.agentInfo.shopKeeper,
                    license_number: e.agentInfo.licenseNumber,
                    agent_address: e.agentInfo.agentAddress,
                    county: e.agentInfo.county,
                    longitude: e.agentInfo.longitude,
                    latitude: e.agentInfo.latitude,
                    open_time: e.agentInfo.agentOpeningTime,
                    cellphone: e.agentInfo.cellphone,
                    telephone: e.agentInfo.telephone,
                    show_contact: e.agentInfo.showContact,
                    agent_img: e.agentInfo.agentImg,
                    license_img: e.agentInfo.licenseImg
                }, o = {
                    agent_name: e.agentInfo.agentName,
                    qq: e.agentInfo.qq,
                    edu_background: e.agentInfo.education,
                    edu_background_img: e.agentInfo.eduBackgroundImg
                }, a = {};
                1 == e.appType ? a = l(n, i) : 2 == e.appType && (a = l(n, o)), s.postFillAgent(a).then(function(n) {
                    r.refresh(), alert("保存成功！"), t.path("/index/agent-information"), c.hide();
                }, function(n) {
                    alert(n), c.hide();
                });
            }
        }, e.refresh = function() {
            e.isPhoneDisabled = !0, e.isExist = !0, c.show(), s.getAgentInfo().then(function(n) {
                e.appType = +n.apply_type, e.state = n.state, e.message = n.message, e.state === -3 && t.path("/index/access-agent"), 
                c.hide(), e.agentInfo.shopKeeper = n.owner, e.agentInfo.province = n.province, e.agentInfo.city = n.city, 
                e.agentInfo.idNumber = n.id_number, e.agentInfo.agentName = n.name, e.agentInfo.licenseNumber = n.license_number, 
                e.agentInfo.agentAddress = n.address, e.agentInfo.county = n.county, e.agentInfo.longitude = n.longitude, 
                e.agentInfo.latitude = n.latitude, e.agentInfo.isLocate = !!n.longitude, e.agentInfo.agentOpeningTime = n.open_time, 
                e.agentInfo.cellphone = n.cellphone, e.agentInfo.telephone = n.telephone, e.agentInfo.showContact = n.show_contact, 
                e.agentInfo.qq = n.qq, e.agentInfo.education = n.edu_background, e.agentInfo.idCardPhotoImg = "", 
                e.agentInfo.idCardPhotoImgid = "a", e.agentInfo.agentImg = "", e.agentInfo.agentImgid = "b", 
                e.agentInfo.licenseImg = "", e.agentInfo.licenseImgid = "c", e.agentInfo.idCard1Img = "", 
                e.agentInfo.idCard1Imgid = "d", e.agentInfo.idCard2Img = "", e.agentInfo.idCard2Imgid = "e", 
                e.agentInfo.avatarImg = "", e.agentInfo.avatarImgid = "f", e.agentInfo.eduBackgroundImg = "", 
                e.agentInfo.eduBackgroundImgid = "g", e.agentInfo.resumePdf = "", e.agentInfo.resumePdfid = "h", 
                n.attach && n.attach.forEach(function(n) {
                    7 === +n.type ? e.agentInfo.idCardPhotoImg || (e.agentInfo.idCardPhotoImg = n.file_url, 
                    e.agentInfo.idCardPhotoImgid = n.id) : 1 === +n.type ? e.agentInfo.agentImg || (e.agentInfo.agentImg = n.file_url, 
                    e.agentInfo.agentImgid = n.id) : 2 === +n.type ? e.agentInfo.licenseImg || (e.agentInfo.licenseImg = n.file_url, 
                    e.agentInfo.licenseImgid = n.id) : 3 === +n.type ? e.agentInfo.idCard1Img ? e.agentInfo.idCard2mg || (e.agentInfo.idCard2Img = n.file_url, 
                    e.agentInfo.idCard2Imgid = n.id) : (e.agentInfo.idCard1Img = n.file_url, e.agentInfo.idCard1Imgid = n.id) : 6 === +n.type ? e.agentInfo.avatarImg || (e.agentInfo.avatarImg = n.file_url, 
                    e.agentInfo.avatarImgid = n.id) : 8 === +n.type ? e.agentInfo.eduBackgroundImg || (e.agentInfo.eduBackgroundImg = n.file_url, 
                    e.agentInfo.eduBackgroundImgid = n.id) : 9 === +n.type && (e.agentInfo.resumePdf || (e.agentInfo.resumePdf = n.file_url, 
                    e.agentInfo.resumePdfid = n.id));
                }), e.agentInfo.isCustomer = "1";
            }, function(n) {
                c.hide(), 1 === n.code && r.noLogin(), alert("加载见证点信息出错：" + n.message);
            });
        }, e.refresh(), e.agentInfo.province || (e.agentInfo.province = "广东省", e.agentInfo.city = "深圳市", 
        e.agentInfo.county = "市辖区"), e.provinceList = u, e.cityList = [], e.countyList = [];
        var d = f(e.agentInfo.province, u);
        f(e.agentInfo.city, e.cityList), f(e.agentInfo.county, e.countyList);
        e.$watch("agentInfo.province", function(n) {
            if (d = f(e.agentInfo.province, u), e.agentInfo.province || (e.agentInfo.province = u[d].n), 
            e.cityList = u[d] && u[d].c, e.cityList && e.agentInfo.city) {
                var t = e.cityList.some(function(n) {
                    return n.n === e.agentInfo.city;
                });
                t || (e.agentInfo.city = e.cityList[0].n);
            }
        }), e.$watch("agentInfo.city", function(n) {
            var t = f(e.agentInfo.city, e.cityList);
            if (9999 == t && (e.agentInfo.city = e.cityList && e.cityList[0] && e.cityList[0].n), 
            e.countyList = e.cityList && e.cityList[t] && e.cityList[t].c, e.countyList || (e.countyList = [ {
                n: "--"
            } ]), e.countyList && e.agentInfo.county) {
                var r = e.countyList.some(function(n) {
                    return n.n === e.agentInfo.county;
                });
                r || (e.agentInfo.county = e.countyList[0].n);
            }
        });
        var p = [ "/images/register/idCardPhotoImg.jpg", "/images/register/idImg.jpg", "/images/register/educationImg.jpg", "/images/register/avatarImg.jpg", "/images/register/shopImg.jpg", "/images/register/licenImg.jpg" ];
        e.idCardPhotoImg = p[0], e.idImg = p[1], e.educationImg = p[2], e.avatarImg = p[3], 
        e.shopImg = p[4], e.licenImg = p[5], e.seeBigPic = function(n) {
            a.show({
                title: "查看大图",
                content: '<img src="' + n + '" class="text-center" width="100%;height:100%"/>',
                showCancel: !1
            });
        }, e.deleteImg = function(n) {
            var t = function(t) {
                a.show({
                    title: "提示",
                    content: "确认要删除吗？",
                    okCallback: function() {
                        a.hide(), e.agentInfo[t] = "", "a" === n || "b" === n || "c" === n || "d" === n || "e" === n || "f" === n || "g" === n || "h" === n || s.postDeleteContract(n).then(function() {
                            e.refresh();
                        }, function(n) {
                            alert(n);
                        });
                    },
                    cancelCallback: function() {
                        a.hide();
                    }
                });
            };
            n === e.agentInfo.idCard1Imgid ? t("idCard1Img") : n === e.agentInfo.agentImgid ? t("agentImg") : n === e.agentInfo.idCardPhotoImgid ? t("idCardPhotoImg") : n === e.agentInfo.licenseImgid ? t("licenseImg") : n === e.agentInfo.idCard2Imgid ? t("idCard2Img") : n === e.agentInfo.avatarImgid ? t("avatarImg") : n === e.agentInfo.eduBackgroundImgid ? t("eduBackgroundImg") : n === e.agentInfo.resumePdfid && t("resumePdf");
        }, r.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "$window", function(n, e, t, r) {
        var i = "itms-services://?action=download-manifest&url=https://jzb.futu5.com/download/ios_630.plist";
        n.currNav = "downloadIos", navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1 || navigator.userAgent.toLowerCase().indexOf("qq") !== -1 ? navigator.userAgent.toLowerCase().indexOf("mqqbrowser") !== -1 ? r.location.href = i : e.isWechat = !0 : r.location.href = i;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", function(n, e, t) {
        n.currNav = "mobileRegister";
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "agentInfo", "agent", "loading", "$location", "$anchorScroll", "dialog", function(n, e, t, r, i, o, a, s, c) {
        r.monitorState(), n.currNav = "agentTask", e.postCompleteTest = function() {
            o.show(), i.completeTest().then(function(n) {
                o.hide(), r.refresh(), a.path("/index/complete-test");
            }, function(n) {
                alert(n), o.hide();
            });
        }, e.$watch(function() {
            return e.isEnded;
        }, function() {
            "ended" === e.isEnded;
        }), e.scrollTo = function(n) {
            a.hash(n), s();
        }, i.getAgentInfo().then(function(e) {
            n.state = e.state, n.taskStatus = e.newbie_task_status, n.code = e.code, n.join_type = +e.join_type, 
            n.appType = +e.apply_type;
        }, function(n) {
            1 == n.code && r.noLogin();
        }), e.refreshPage = function() {
            t.reload();
        }, r.NewbieStateChange(), e.seeBigPic = function(n) {
            c.show({
                title: "查看大图",
                content: '<img src="' + n + '" class="text-center bigPicSize01"/>',
                showCancel: !1
            });
        }, n.fourQ = "", n.showFourAnswer = !1, e.getAnswer = function() {
            var e = angular.lowercase(n.fourQ);
            4 == e.length ? n.showFourAnswer = !0 : n.showFourAnswer = !1;
        }, r.writeBankInfo(), e.newbieTaskJump = function() {
            2 === n.join_type && 1 === n.appType ? e.postCompleteTest() : e.tab = 1;
        }, e.currTest = 1, e.toNextTest = function() {
            e.currTest++;
        }, e.toPreviousTest = function() {
            e.currTest--;
        };
        var u = {
            total: 13,
            questions: [ {
                number: 1,
                type: 0,
                title: {
                    type: "string",
                    text: "什么是开立证券账户的见证（简称“见证”)？以下说法正确的是："
                },
                answer: "A。持牌人或注册人应采取一切合理步骤，以确立其每位客户的真实和全部的身份、每位客户的财政状况、投资经验及投资目标。如开户文件并非在持牌人或注册人的雇员面前签立，则客户协议的签立，及有关的身份证明文件的见证，应由其他持牌人或注册人、持牌人或注册人的联系人士、太平绅士或专业人士例如银行分行经理、职业会计师、律师或公证人加以验证。",
                options: [ {
                    text: "A、根据香港证券及期货事务监察委员会持牌人或注册人操守准则第5.1段，客户在开立香港证券账户时签署的客户协议，应该在持牌人、注册人或注册人的联系人士等人员的见证下完成。并当面验证客户的身份证明文件，以确认客户身份。",
                    isright: !0
                }, {
                    text: "B、见证不是必要的环节，不经过见证也可以开通投资户口。",
                    isright: !1
                } ]
            }, {
                number: 2,
                type: 0,
                title: {
                    type: "string",
                    text: "为什么开立香港证券户口需要当面见证?"
                },
                answer: "D。",
                description: [ "1、确认是客户本人主动申请，并且亲身开户；", "2、确认身份，防止代签；", "3、了解客户的财政状况，投资经验及投资目标；", "4、防止使用伪造证件开立假户进而用于洗钱等非法操作；" ],
                options: [ {
                    text: "A、123",
                    isright: !1
                }, {
                    text: "B、23",
                    isright: !1
                }, {
                    text: "C、124",
                    isright: !1
                }, {
                    text: "D、1234",
                    isright: !0
                } ]
            }, {
                number: 3,
                type: 0,
                title: {
                    type: "string",
                    text: "关于打印客户表格，正确的选项是？"
                },
                answer: "B。 客户表格一定要单面打印，不能双面打印，否则不符合见证要求。",
                options: [ {
                    text: "A、双面打印",
                    isright: !1
                }, {
                    text: "B、单面打印",
                    isright: !0
                }, {
                    text: "C、单面或者双面打印都行",
                    isright: !1
                } ]
            }, {
                number: 4,
                type: 0,
                title: {
                    type: "string",
                    text: "以下拍摄的身份证照片，哪一项是正确的？（单选）"
                },
                answer: "A。身份证需在拍摄框内，文字/头像清晰 ，不模糊，不反光。",
                options: [ {
                    text: "A",
                    isright: !0,
                    imgsrc: "images/testImg/q011.jpg"
                }, {
                    text: "B",
                    isright: !1,
                    imgsrc: "images/testImg/q012.jpg"
                } ]
            }, {
                number: 5,
                type: 0,
                title: {
                    type: "string",
                    text: "开始拍摄视频前，以下客户中文表格的状态，哪一个是正确的？（单选）"
                },
                answer: "B。拍摄视频前客户表格不可签写；拍摄视频中引导客户签字；拍摄视频后见证人签署姓名和日期。",
                options: [ {
                    text: "A、客户先签好日期",
                    isright: !1
                }, {
                    text: "B、空白表格",
                    isright: !0
                }, {
                    text: "C、见证人先填好签名及日期",
                    isright: !1
                } ]
            }, {
                number: 6,
                type: 1,
                title: {
                    type: "input",
                    text: "以下为拍摄客户签字视频的必要步骤，依次拍摄的正确顺序是"
                },
                fillAnswer: [ "ADCB。", "第一步，A，确认客户的脸部、表格、见证点台卡，同时出现在镜头内，再点击开始拍摄；", "第二步，D，拍摄见证点台卡，无模糊，无反光；", "第三步，C，镜头特写中文表格签字部份，停顿1、2秒，确保字迹可以看清，再继续操作；", "第四步，B，镜头特定英文表格签字部分，提醒客户签名需与中文表格签名保持一致。" ],
                options: [ {
                    text: "A、客户的脸部、表格、见证点台卡，同时出现在镜头内 ",
                    imgsrc: "images/testImg/q030.jpg"
                }, {
                    text: "B、拍摄英文表格签字过程，镜头特写签名及日期",
                    imgsrc: "images/testImg/q031.jpg"
                }, {
                    text: "C、拍摄中文表格签字过程，镜头特写签名及日期",
                    imgsrc: "images/testImg/q032.jpg"
                }, {
                    text: "D、特写见证点台卡",
                    imgsrc: "images/testImg/q033.jpg"
                } ]
            }, {
                number: 7,
                type: 0,
                title: {
                    type: "string",
                    text: "以下拍摄客户表格的方法，哪一项是正确的？（单选）"
                },
                answer: "A。拍摄客户中英文表格时，需将签字表格整张放入框内拍摄，文字清晰可辨认，无缺边角，无模糊。",
                options: [ {
                    text: "A",
                    isright: !0,
                    imgsrc: "images/testImg/q040.jpg"
                }, {
                    text: "B",
                    isright: !1,
                    imgsrc: "images/testImg/q041.jpg"
                } ]
            }, {
                number: 8,
                type: 0,
                title: {
                    type: "string",
                    text: "以下见证人签字日期，正确的选项是？"
                },
                answer: "B。1、见证人签字日期必须与客户签署日期保持一致。2、如签署日期填写错误，划掉后重签，在旁边加签全名即可。",
                options: [ {
                    text: "A",
                    isright: !1,
                    imgsrc: "images/testImg/q050.jpg",
                    replaceimg: "images/testImg/q053.jpg"
                }, {
                    text: "B",
                    isright: !0,
                    imgsrc: "images/testImg/q051.jpg"
                } ]
            }, {
                number: 9,
                type: 0,
                title: {
                    type: "string",
                    text: "以下见证人签名，正确的选项是？（单选）"
                },
                answer: "A。见证人签名需签两个，字迹清晰可辨认，无涂改无填错。",
                options: [ {
                    text: "A",
                    isright: !0,
                    imgsrc: "images/testImg/q060.jpg"
                }, {
                    text: "B",
                    isright: !1,
                    imgsrc: "images/testImg/q061.jpg",
                    replaceimg: "images/testImg/q064.jpg"
                }, {
                    text: "C",
                    isright: !1,
                    imgsrc: "images/testImg/q062.jpg"
                } ]
            }, {
                number: 10,
                type: 0,
                title: {
                    type: "string",
                    text: "以下几个区域，哪一项是绝对不能涂改、填错？（单选）"
                },
                answer: "A。中文表格的“客户和见证人签名”，决定不能涂改和填错，否则需重新打印表格并拍摄视频。",
                options: [ {
                    text: "A",
                    isright: !0,
                    imgsrc: "images/testImg/q071.jpg"
                }, {
                    text: "B",
                    isright: !1,
                    imgsrc: "images/testImg/q072.jpg"
                }, {
                    text: "C",
                    isright: !1,
                    imgsrc: "images/testImg/q073.jpg"
                } ]
            }, {
                number: 11,
                type: 0,
                title: {
                    type: "string",
                    text: "以下中英文表格的客户签名，哪一项是正确的？ （单选 ）"
                },
                answer: "A。1、客户只需在中英文表格各签1个名。2、英文表格签错位置时，可划掉重签，并在旁边加签全名。",
                options: [ {
                    text: "A",
                    isright: !0,
                    imgsrc: "images/testImg/q080.jpg"
                }, {
                    text: "B",
                    isright: !1,
                    imgsrc: "images/testImg/q081.jpg",
                    replaceimg: "images/testImg/q094.jpg"
                } ]
            }, {
                number: 12,
                type: 0,
                title: {
                    type: "string",
                    text: "当不小心签错日期，正确的处理办法是？（单选）"
                },
                answer: "A。日期签署错误，可划掉重签，同时在旁边加签全名。",
                options: [ {
                    text: "A",
                    isright: !0,
                    imgsrc: "images/testImg/q090.jpg"
                }, {
                    text: "B",
                    isright: !1,
                    imgsrc: "images/testImg/q091.jpg"
                } ]
            }, {
                number: 13,
                type: 0,
                title: {
                    type: "string",
                    text: "见证完成并审核通过的客户表格，应该在多长时间内寄出？（单选）"
                },
                answer: "A。当天见证并且通过审核的客户，一定要在当天用顺丰快递到付寄出他们的表格（1天1寄即可），以便后续的订单结算及开户进度追踪。",
                options: [ {
                    text: "A、一定要当天 ",
                    isright: !0
                }, {
                    text: "B、无所谓，第2天或者第3天都可以",
                    isright: !1
                }, {
                    text: "C、为了节省快递费，累计达到10份再寄出更好",
                    isright: !1
                } ]
            } ]
        };
        e.testList = u.questions, e.testTotal = u.total;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "agentInfo", "agent", "loading", "$location", function(n, e, t, r, i, o, a) {
        n.currNav = "agentTask", r.monitorState(), e.beginWitness = function() {
            o.show(), i.getAgentInfo().then(function(n) {
                3 == n.newbie_task_status || 4 == n.newbie_task_status || 5 == n.newbie_task_status ? (a.path("/index/customer-list"), 
                o.hide()) : 2 === +n.newbie_task_status && i.noticeWitness().then(function(n) {
                    o.hide(), r.refresh(), a.path("/index/customer-list");
                }, function(n) {
                    o.hide(), alert("操作失败：" + n.message);
                });
            }, function(n) {
                1 == n.code && (r.noLogin(), o.hide()), alert("操作失败：" + n.message), o.hide();
            });
        }, i.getAgentInfo().then(function(n) {}, function(n) {
            1 == n.code && r.noLogin();
        });
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "agentInfo", "agent", function(n, e, t, r, i) {
        n.currNav = "agentOperationGuide", e.$watch(function() {
            return e.isEnded;
        }, function() {
            "ended" === e.isEnded;
        }), r.writeBankInfo();
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "agentInfo", "agent", function(n, e, t, r, i) {
        n.currNav = "applicatinType", e.currentStep = "applicatinType", r.inviteModel(), 
        e.postType = function(n) {
            sessionStorage.setItem("type", n);
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "agent", "agentInfo", "loading", function(n, e, t, r, i, o) {
        n.currNav = "videoInterview", e.currentStep = "video";
        var a = [ {
            icon: "jzbAccess videoOkIcon glyphicon",
            content: "接下来我们将对你进行视频面试，请点击开始视频",
            btn: "开始视频"
        }, {
            icon: "jzbAccess videofinishIcon glyphicon",
            content: "恭喜你，你已通过我们的视频面试，请继续后面的操作",
            btn: "我知道了"
        }, {
            icon: "jzbAccess videoofflineIcon glyphicon",
            content: "当前工作人员不在线，您可以通过电话预约面试时间",
            tip: "客服电话 0755-86636688",
            btn: "开始视频"
        } ];
        o.show(), r.getAgentInfo().then(function(n) {
            e.hasInterviewed = +n.has_interview, e.isfinishInterview = +n.state, e.state = n.state, 
            e.message = n.message, e.state === -3 ? (t.path("/index/access-agent"), o.hide()) : 1 === e.hasInterviewed ? (t.path("/index/agreement-agent"), 
            o.hide()) : 5 === e.isfinishInterview ? (e.videoIcon = a[1].icon, e.videoContent = a[1].content, 
            e.videoBtn = a[1].btn, o.hide()) : r.getQQStatus().then(function(n) {
                e.qq = n.qq, e.isInterviewed = n.status, 1 === e.isInterviewed ? (e.videoIcon = a[0].icon, 
                e.videoContent = a[0].content, e.videoBtn = a[0].btn, o.hide()) : 0 === e.isInterviewed && (e.videoIcon = a[2].icon, 
                e.videoContent = a[2].content, e.videoTip = a[2].tip, e.videoBtn = a[2].btn, o.hide());
            });
        }, function(n) {
            1 === n.code && i.noLogin(), alert(n), o.hide();
        });
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "$interval", "$location", "agent", "dialog", "verify", function(n, e, t, r, i, o, a, s) {
        a.hide(), n.currNav = "verifyId", e.currentStep = "verifyId", e.areaCodeList = [ {
            id: "0",
            area_code: "大陆+86"
        }, {
            id: "1",
            area_code: "香港+852"
        } ], n.sendVerifyCodeBtnWord = "发送验证码", e.areaCode || (e.areaCode = "0"), e.sendVerifyCode = function() {
            var n = /^1\d{10}$/, t = /^\d{8}$/, r = e.phone;
            "0" === e.areaCode ? n.test(r) ? s.postVerifyCode(r, 1) : alert("验证码发送失败，请输入11位大陆手机号码") : "1" === e.areaCode && (t.test(r) ? s.postVerifyCode(r, 1) : alert("验证码发送失败，请输入8位香港手机号码"));
        }, e.nextStep = function() {
            var n = e.securityCode;
            o.checkVerifyCode(n).then(function(n) {
                i.path("/index/reset-password");
            }, function(n) {
                a.show({
                    title: "提示",
                    content: n.message,
                    showCancel: !1
                });
            });
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "$location", "agent", "dialog", "loading", function(n, e, t, r, i, o, a) {
        n.currNav = "resetPassWord", e.currentStep = "resetPassWord", e.isSame = function() {
            var n = e.password, t = e.password2;
            n == t ? e.isSamePwd = !0 : e.isSamePwd = !1;
        }, e.confirmResetPassWord = function() {
            var n = e.password;
            a.show(), i.resetAgentPassword(n).then(function(n) {
                a.hide(), r.path("/index/reset-success");
            }, function(n) {
                a.hide(), o.show({
                    title: "提示",
                    content: n.message,
                    showCancel: !1
                });
            });
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$state", "$location", "agentInfo", "agent", "dialog", "loading", function(n, e, t, r, i, o, a, s) {
        n.currNav = "resetSuccess", e.currentStep = "resetSuccess", e.loginNow = function() {
            s.show(), o.setLogin().then(function(n) {
                s.hide(), i.refresh().then(function() {
                    i.jump();
                });
            }, function(n) {
                s.hide(), a.show({
                    title: "提示",
                    content: n.message,
                    showCancel: !1
                });
            });
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "$location", "$stateParams", "$timeout", "$anchorScroll", "agent", "login", "customer", "form", "loading", "agentInfo", "bankCard", "dialog", function(n, e, t, r, i, o, a, s, c, u, l, f, d, p) {
        function h(n) {
            c.modifyCustomer(n).then(function(n) {
                if (l.show(), "jzbclient" === r.origin) location.href = "action://close?page=addCustomerInformation", 
                l.hide(); else {
                    y(e.customerInfo.uid, function() {
                        l.hide(), 2 === e.witnessStatus ? p.show({
                            content: "已完成补充资料，等待富途客服审核",
                            showCancel: !1,
                            showClose: !1,
                            confirm: "确认",
                            okCallback: function() {
                                p.hide(), l.hide(), t.url("/index/customer-list?status=3");
                            }
                        }) : p.show({
                            content: "已完成补充资料，请继续剩余见证流程",
                            showCancel: !1,
                            showClose: !1,
                            confirm: "确认",
                            okCallback: function() {
                                p.hide(), l.hide(), t.url("/index/customer-list?status=2");
                            }
                        });
                    });
                }
            }, function(n) {
                11077 === n.code ? p.show({
                    title: "温馨提示",
                    content: "该身份证已经被以下账号使用，[ " + n.message + " ]， 您可以选择继续开户，本账号开户成功后，原牛牛号不能再用于开户。",
                    okCallback: function() {
                        l.hide(), p.hide(), e.customerInfo.repeat_request = 1, h(e.customerInfo);
                    },
                    showCancel: !1,
                    confirm: "继续开户",
                    cancelCallback: function() {
                        p.hide(), l.hide();
                    }
                }) : 11078 === n.code ? p.show({
                    title: "温馨提示",
                    content: "该身份证已开户，账户持有人 [ " + n.message + " ]，请更换其他身份证件。",
                    okCallback: function() {
                        l.hide(), p.hide(), e.scrollTo("idCardNumber");
                    },
                    showCancel: !1,
                    confirm: "确认",
                    cancelCallback: function() {
                        p.hide(), l.hide();
                    }
                }) : (l.hide(), alert(n.message));
            });
        }
        function g(n) {
            n = angular.uppercase(n);
            var e, t, r = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), i = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), o = 0;
            for (t = 0; t < 17; t++) o += n.substr(t, 1) * r[t];
            return e = i[o % 11], e == n.substr(17, 1);
        }
        function m(n) {
            var t = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/, r = e.customerInfo.nation;
            1 === +r || void 0 === +r ? t.test(n) ? g(n) ? (e.isEighteenBits = !1, e.isLegalId = !1, 
            e.customerInfo.setBirthdayAndSexFromIdNumber(), e.customerForm.id_code.$setValidity("id_code", !0)) : (e.isEighteenBits = !1, 
            e.isLegalId = !0, e.customerForm.id_code.$setValidity("id_code", !1)) : (e.isEighteenBits = !0, 
            e.isLegalId = !1, e.customerInfo.birth = "", e.customerInfo.sex = "", e.customerForm.id_code.$setValidity("id_code", !1)) : 2 !== +r && 3 !== +r || (e.isEighteenBits = !1, 
            e.isLegalId = !1, e.customerForm.id_code.$setValidity("id_code", !0));
        }
        function v(n, t) {
            var r = /^\d{11}$/, i = /^\d{8}$/;
            n = e.customerInfo.area_code, "+86" === n || void 0 === +n ? r.test(t) ? (e.isWrongPhone = !1, 
            e.isWrongPhoneInfo = "") : (e.isWrongPhone = !0, e.isWrongPhoneInfo = "请准确填写11位手机号码") : "+852" === n ? i.test(t) ? (e.isWrongPhone = !1, 
            e.isWrongPhoneInfo = "") : (e.isWrongPhone = !0, e.isWrongPhoneInfo = "请准确填写8位手机号码") : (e.isWrongPhone = !1, 
            e.isWrongPhoneInfo = "");
        }
        function y(n, t) {
            n && c.getList({
                keyword: n
            }).then(function(n) {
                e.witnessStatus = +n.customerList[0].sub_status, t && t();
            }, function(n) {
                alert(n.message);
            });
        }
        function $(n) {
            0 !== +n.work_category && n.work_category || (n.work_category = "1"), +n.work_revenue !== -1 && n.work_revenue || (n.work_revenue = "3"), 
            +n.work_asset !== -1 && n.work_asset || (n.work_asset = "2"), +n.invest_knowledge !== -1 && n.invest_knowledge || (n.invest_knowledge = "3"), 
            +n.intent !== -1 && n.intent || (n.intent = "1"), +n.op_frequency !== -1 && n.op_frequency || (n.op_frequency = "1"), 
            +n.risk_will !== -1 && n.risk_will || (n.risk_will = "2"), n.nation || (n.nation = "1");
        }
        function w(n) {
            var e = n.split("/"), t = new Date();
            return t.setFullYear(e[0], e[1] - 1, e[2]), t;
        }
        function b(n) {
            n = n.replace(/^\-/, "");
            var e = n.split("-");
            return 2 === e.length ? {
                code: e[0],
                cellphone: e[1]
            } : {
                cellphone: n
            };
        }
        n.currNav = "customerList", e.nationList = {
            "中国大陆": "中国大陆",
            "中国香港": "中国香港"
        }, e.areaCodeList = {
            "+86": "中国大陆(+86)",
            "+852": "中国香港(+852)"
        }, e.customerInfo = {
            email: n.tempUserEmail,
            nation: 1,
            id_type: 1,
            exp_raw: {
                security: 0,
                struct: 0,
                gold: 0,
                warrent: 0,
                futures: 0,
                other: 0
            },
            background_raw: {
                v0: !1,
                v3: !1
            },
            benefiter_raw: {
                v1: !1,
                v5: !1,
                v4: !1,
                v7: !1
            }
        }, e.customerInfo.us_open = "1", delete n.tempUserEmail, e.customerInfo.exp_raw.security = "1", 
        e.customerInfo.exp_raw.struct = "0", e.customerInfo.exp_raw.gold = "0", e.customerInfo.exp_raw.warrent = "0", 
        e.customerInfo.exp_raw.futures = "0", e.customerInfo.exp_raw.other = "0", e.customerInfo.setBirthdayAndSexFromIdNumber = function() {
            var n = c.getBirthdayAndSexFromIdNumber(e.customerInfo.id_code);
            n && (e.customerInfo.birth = n.birth, e.customerInfo.birth_date = n.birth_date, 
            e.customerInfo.sex = n.sex);
        }, e.checkIdCard = function(n) {
            m(n.indexOf("x") ? angular.uppercase(n) : n);
        }, e.transformChinese = function() {
            var n = angular.lowercase(e.customerInfo.nick_cn);
            n && c.transformChinese(n).then(function(n) {
                n && (e.customerInfo.nick_us = n.toLocaleUpperCase());
            });
        }, e.checkEmail = function() {
            var n = e.customerInfo.email, t = r.uid;
            n && /@/.test(n) && c.checkEmail(n, t).then(function(n) {
                10018 === +n.status ? e.hasEmail = !1 : 1e4 === +n.status && (e.hasEmail = !0);
            }, function(n) {
                alert(n);
            });
        }, e.isdisabledEmail = function(n) {
            /@/.test(n) && n ? "jzb-quick-register.com" === n.split("@")[1] ? e.isemailDisabled = !1 : e.isemailDisabled = !0 : (e.isemailDisabled = !1, 
            e.checkEmail());
        }, e.checkNickLength = function() {
            var n, t = e.customerInfo.nick;
            if (t) {
                n = t.length;
                for (var r = 0; r < t.length; r++) t.charCodeAt(r) > 255 && n++;
            } else n = 0;
            n > 20 || n < 2 ? e.isNickValid = !1 : e.isNickValid = !0;
        }, e.isMeetAge = "", e.checkMeetAge = function() {
            if (r.origin) e.isRightBirth = !1; else {
                var n = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
                n.test(e.customerInfo.birth) === !1 ? e.isRightBirth = !0 : e.isRightBirth = !1;
            }
            var t, i = e.customerInfo.birth, o = e.customerInfo.birth_date, a = i && i.split("/");
            t = "jzbclient" === r.origin ? o && o.getFullYear() || a && a[0] : a && a[0] || o && o.getFullYear();
            var s, c = new Date(), u = c.getFullYear();
            s = u > t ? u - t : t - u, s < 18 ? e.isMeetAge = "notOk" : e.isMeetAge = "ok";
        }, e.checkPhone = function() {
            e.iscellphoneDisabled || v(e.customerInfo.areaCode, e.customerInfo.cellphone);
        }, e.getCustomerInfo = function() {
            var n = r.uid;
            e.customerInfo.uid = n, n || t.path("/index/customer-list"), l.show(), c.getCustomerInfo(n).then(function(n) {
                if (l.hide(), n.userinfo || (n.userinfo = {}), 1 === +n.idverifyPass ? (e.isIdverifyPassDisable = !0, 
                n.userinfo.nick_cn && (e.isNickNameDisable = !0), n.userinfo.id_code && (e.isIdCodeDisable = !0)) : (e.isIdverifyPassDisable = !1, 
                e.isNickNameDisabled = !1, e.isIdCodeDisable = !1), n.userinfo.bank_card_type && 0 !== +n.userinfo.bank_card_type ? (e.customerInfo.bank_card_type = n.userinfo.bank_card_type, 
                e.customerInfo.bank_card_code = n.userinfo.bank_card_code) : (e.customerInfo.bank_card_type = "1", 
                n.userinfo.bank_card_type = "1"), e.customerInfo.nation = n.userinfo.nation || "1", 
                n.userinfo.cellphone) {
                    var t = b(n.userinfo.cellphone);
                    e.customerInfo.areaCode = t.code || "", e.customerInfo.cellphone = t.cellphone, 
                    n.userinfo.cellphone = t.cellphone, 1 === +n.userinfo.nation && /^\d{11}$/.test(n.userinfo.cellphone) ? e.iscellphoneDisabled = !0 : 2 === +n.userinfo.nation && /^\d{8}$/.test(n.userinfo.cellphone) ? e.iscellphoneDisabled = !0 : e.iscellphoneDisabled = !1;
                }
                if (1 === +n.userinfo.bank_card_type ? e.getBankCard("1") : 2 === +n.userinfo.bank_card_type && e.getBankCard("2"), 
                n.userinfo.birth && (e.customerInfo.birth_date = w(n.userinfo.birth)), n.userinfo.email.indexOf("@phonereg.futunn.com") > -1 && (n.userinfo.email = ""), 
                n.userinfo.email && e.isdisabledEmail(n.userinfo.email), n.userinfo.email && "jzb-quick-register.com" === n.userinfo.email.split("@")[1] && (e.customerInfo.email = "", 
                n.userinfo.email = ""), $(n.userinfo), n.userinfo.hk_cash_open = "1", n.userinfo.us_open = "1", 
                angular.extend(e.customerInfo, n.userinfo), n.userinfo.nick_cn && !n.userinfo.nick_us && e.transformChinese(), 
                1 === +n.userinfo.nation && n.userinfo.id_code && m(n.userinfo.id_code), e.customerInfo.exp) {
                    var r = e.customerInfo.exp.split("|"), o = [ "security", "struct", "gold", "warrent", "futures" ], a = {};
                    r.forEach(function(n) {
                        var e = n.split(":");
                        o.indexOf(e[0]) > -1 ? a[e[0]] = e[1] : (a.otherName = e[0], a.other = e[1]);
                    }), o.forEach(function(n) {
                        "undefined" == typeof a[n] && (a[n] = 0);
                    }), e.customerInfo.exp_raw = a;
                }
                if (e.customerInfo.background) {
                    var s = e.customerInfo.background.split("|"), c = {};
                    s.forEach(function(n) {
                        +n !== -1 && (c["v" + n] = !0);
                    }), e.customerInfo.background_raw = c;
                }
                var u = {
                    v1: !1,
                    v4: !1,
                    v5: !1,
                    v7: !1
                }, f = n.userinfo.benefiter, d = n.userinfo.futu_relation, p = n.userinfo.agency_relation, h = n.userinfo.futu_account_relation;
                e.customerInfo.benefiter && +e.customerInfo.benefiter.enable && (u.v1 = !0, e.customerInfo.benefiter_name = f.name, 
                e.customerInfo.benefiter_id_type = f.id_type, e.customerInfo.benefiter_id_code = f.id_code, 
                e.customerInfo.benefiter_phone = f.phone, e.customerInfo.benefiter_address = f.address), 
                e.customerInfo.futu_relation && +e.customerInfo.futu_relation.enable && (u.v5 = !0, 
                e.customerInfo.futu_relation_desc = d.desc, e.customerInfo.futu_relation_name = d.name), 
                e.customerInfo.agency_relation && +e.customerInfo.agency_relation.enable && (u.v4 = !0, 
                e.customerInfo.agency_relation_desc = p.desc), e.customerInfo.futu_account_relation && +e.customerInfo.futu_account_relation.enable && (u.v7 = !0, 
                e.customerInfo.futu_account_relation_account_id = h.account_id, e.customerInfo.futu_account_relation_name = h.name), 
                e.customerInfo.benefiter_raw = u, e.stage = "modify", i(function() {
                    e.customerForm.$setDirty(), angular.forEach(e.customerForm, function(n) {
                        n && n.$setDirty && n.$setDirty();
                    }), e.checkNickLength();
                }, 100);
            }, function(n) {
                l.hide(), alert(n.message);
            });
        }, e.getCustomerInfo(), e.getBankCard = function(n) {
            e.lists = d.list(n);
        }, e.scrollTo = function(n) {
            t.hash(n), o();
        }, e.customerInfo.addCustomerInfo = function() {
            var n = e.customerInfo.work_category;
            if (1 !== +n && 2 !== +n || e.customerInfo.work_business) if (1 !== +n && 2 !== +n || e.customerInfo.work_employer) if (1 !== +n && 2 !== +n || e.customerInfo.work_position) if (1 !== +n && 2 !== +n || e.customerInfo.work_address) if (4 !== +n || e.customerInfo.work_desc) if (e.isEighteenBits || e.isLegalId) e.scrollTo("idCardNumber"); else if (e.isWrongPhone || !e.customerInfo.cellphone) e.scrollTo("idPhoneNumber"); else if ("notOk" == e.isMeetAge) e.scrollTo("birthday"); else if (e.customerInfo.bank_card_type && e.customerInfo.bank_card_code) if (e.customerInfo.nick_cn && e.customerInfo.nick_us && e.customerInfo.id_code && e.customerInfo.address) if (3 !== +e.customerInfo.nation || e.customerInfo.nation_info) if (e.customerInfo.email && !e.hasEmail && e.customerForm.email.$valid) if (r.origin && !e.customerInfo.birth_date) e.scrollTo("birthday"); else if (r.origin || e.customerInfo.birth) {
                if (!r.origin && e.isRightBirth) e.scrollTo("birthday"); else if (e.customerForm.$valid) {
                    if (l.show(), 1 === +e.customerInfo.nation || 2 === +e.customerInfo.nation ? e.customerInfo.id_type = "1" : 3 === +e.customerInfo.nation && (e.customerInfo.id_type = "2"), 
                    c.dealComplexData(e.customerInfo), 1 === +e.customerInfo.nation) e.customerInfo.birth = c.setDateObj(e.customerInfo.id_code, e.customerInfo.birth_date); else if (r.origin && e.customerInfo.birth_date) e.customerInfo.birth = e.customerInfo.birth_date.getFullYear() + "/" + (e.customerInfo.birth_date.getMonth() + 1) + "/" + e.customerInfo.birth_date.getDate(); else if (!r.origin && e.customerInfo.birth_date && e.customerInfo.birth) {
                        var t = new Date();
                        t.setFullYear(e.customerInfo.birth.split("/")[0], e.customerInfo.birth.split("/")[1] - 1, e.customerInfo.birth.split("/")[2]), 
                        e.customerInfo.birth_date = t;
                    } else r.origin || !e.customerInfo.birth_date || e.customerInfo.birth || (e.customerInfo.birth = e.customerInfo.birth_date.getFullYear() + "/" + (e.customerInfo.birth_date.getMonth() + 1) + "/" + e.customerInfo.birth_date.getDate());
                    e.customerInfo.hk_cash_open = e.customerInfo.hk_cash_open || "0", e.customerInfo.hk_margin_open = e.customerInfo.hk_margin_open || "0", 
                    e.customerInfo.us_open = e.customerInfo.us_open || "0", e.customerInfo.us_margin_open = e.customerInfo.us_margin_open || "0", 
                    h(e.customerInfo);
                }
            } else e.scrollTo("birthday"); else e.scrollTo("email"); else e.scrollTo("foreign"); else e.scrollTo("baseInfo"); else e.scrollTo("bankCard"); else e.scrollTo("industry"); else e.scrollTo("industry"); else e.scrollTo("industry"); else e.scrollTo("industry"); else e.scrollTo("industry");
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "dialog", "agent", "loading", "map", "mobileAreaBox", function(n, e, t, r, i, o, a) {
        function s() {
            setTimeout(function() {
                c();
            }, 0);
        }
        function c() {
            l.removeEventListener("load", s, !1), u.removeChild(l), l = null;
        }
        e.findMore = function() {
            t.show({
                title: "更多详情",
                content: '<div class="knowMoreDialog"><h4>符合以下两个条件，视为成功推荐：</h4><ul><li>1. 申请人以“固定见证人”身份提交申请，即需要有固定的营业场所；</li><li>2. 成功接入后，完成三单见证。</li></ul><h4 style="margin: 30px auto 10px;">奖励的发放通过以下方式：</h4><ul><li>1. 见证人的奖励，随见证订单的提成一起发放；每周二结算一次；</li><li>2. 邀请人的奖励，需要登录FUTU5.COM，在个人账户-邀请关系-邀请的见证点页面，填写收款银行信息。每个月月初统一结算，直接发放到银行账号。</li></ul></div>',
                showCancel: !1,
                okCallback: function() {
                    t.hide();
                },
                confirm: "确定"
            });
        }, e.sendInvitation = function() {
            var n = /^1\d{10}$/, o = e.customer_uid, a = e.invite_phone;
            e.customer_uid ? e.invite_phone && n.test(e.invite_phone) ? (i.show(), r.sendInvitation(o, a).then(function(n) {
                t.show({
                    title: "提示",
                    content: "发送邀请成功！",
                    showCancel: !1,
                    confirm: "确定",
                    okCallback: function() {
                        t.hide(), i.hide();
                    },
                    showClose: !1
                });
            }, function(n) {
                var e = n.message;
                t.show({
                    title: "提示",
                    content: e,
                    showCancel: !1,
                    confirm: "确定",
                    okCallback: function() {
                        t.hide(), i.hide();
                    },
                    showClose: !1
                });
            })) : alert("请填写正确的手机号码") : alert("请填写牛牛号");
        }, e.checkUid = function() {
            return i.show(), e.customer_uid ? void r.checkUid(e.customer_uid).then(function(n) {
                n.uidExists ? (e.scanImgShow = !0, i.hide()) : (e.scanImgShow = !1, t.show({
                    title: "提示",
                    content: "牛牛号不存在，请重新输入",
                    showCancel: !1,
                    okCallback: function() {
                        i.hide(), t.hide();
                    },
                    showClose: !1
                }));
            }, function(n) {
                alert(n), i.hide();
            }) : void t.show({
                title: "提示",
                content: "请填写牛牛号",
                showCancel: !1,
                okCallback: function() {
                    i.hide(), t.hide();
                },
                showClose: !1
            });
        }, e.uidChange = function() {
            e.scanImgShow = !1, e.recActive = 1, e.recommend_method = 0;
        }, e.controlBg = function() {
            e.customer_uid ? e.recActive = 2 : e.recActive = 1;
        }, Math.random() > .5 ? e.isShowBanner01 = !0 : e.isShowBanner01 = !1, a.openTimer(), 
        e.dealMap = function(n) {
            o.closeTimer(), n.city || (n.city = n.province), a.getlocation(n.province, n.city);
        }, e.level = function() {
            return 2;
        };
        var u = document.body;
        document.title = "全国招募富途见证人";
        var l = document.createElement("iframe");
        l.src = "/favicon.ico", l.addEventListener("load", s, !1), u.appendChild(l);
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$scope", "agentInfo", "login", "siteStat", function(n, e, t, r, i) {
        e.login = function() {
            r.login(e.username, e.password).then(function(n) {
                "undefined" != typeof n.isWxBind && (n.isWxBind ? alert("微信绑定成功！") : alert("微信绑定失败！")), 
                t.fillInfo(n), t.jump();
            }, function(n) {
                alert("登录失败：" + n.message);
            });
        }, e.clickEventCount = function() {
            i.eventCount("首页", "注册");
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "dialog", "$timeout", function(n, e, t) {
        return {
            restrict: "EA",
            scope: {
                onSelect: "=",
                searchKeyword: "="
            },
            link: function(n, t, r) {
                function i(n) {
                    var e = "";
                    n.tips && n.tips.length > 0 ? e += n.tips.map(function(n, e) {
                        return '<div class="locate_button_dialog_map_tips_item" data-index="' + (e + 1) + '" data-code="' + n.adcode + '">' + n.name + '<span class="locate_button_dialog_map_tips_item_district">' + n.district + "</span></div>";
                    }).join("") : e = " π__π 找不到结果!<br />要不试试：<br />1.请确保所有字词拼写正确<br />2.尝试不同的关键字<br />3.尝试更宽泛的关键字", 
                    h.data("currIndex", 0), h.data("tipsArr", n.tips), h.html(e), h.removeClass("hide"), 
                    a();
                }
                function o(n) {
                    AMap.service([ "AMap.Autocomplete" ], function() {
                        var e = {
                            city: ""
                        }, t = new AMap.Autocomplete(e);
                        n ? t.search(n, function(n, e) {
                            i(e);
                        }) : h.addClass("hide");
                    });
                }
                function a(n) {
                    var e = h.data("currIndex"), t = h.data("tipsArr").length;
                    "up" === n ? e = (e - 1 + t) % t : "down" === n && (e = (e + 1 + t) % t), h.data("currIndex", e), 
                    angular.element(h[0].childNodes).removeClass("focus"), angular.element(h[0].childNodes[e]).addClass("focus");
                }
                function s() {
                    var n = h.data("currIndex"), e = h.data("tipsArr"), t = e[n];
                    p.val(t.name), h.addClass("hide"), f.plugin([ "AMap.PlaceSearch" ], function() {
                        var n = new AMap.PlaceSearch();
                        AMap.event.addListener(n, "complete", c), n.setCity(t.adcode), n.search(t.name);
                    });
                }
                function c(n) {
                    m = [], f.clearMap();
                    for (var e = n.poiList.pois, t = (e.length, 0); t < 1; t++) {
                        var r = e[t].location.getLng(), i = e[t].location.getLat();
                        u = r, l = i;
                        var o = {
                            map: f,
                            icon: "/images/index/amap_marker.png",
                            position: new AMap.LngLat(r, i)
                        };
                        new AMap.Marker(o);
                        m.push(new AMap.LngLat(r, i));
                    }
                    f.setFitView();
                }
                var u, l, f, d, p, h, g = '<div id="locate_button_dialog_map_tip"><input type="text" placeholder="请输入关键字" id="locate_button_dialog_map_keyword" name="keyword" value="" style="width:100%;"/><div id="locate_button_dialog_map_tips" name="locate_button_dialog_map_tips"></div></div><div id="locate_button_dialog_map">地图加载中...</div>', m = [], v = function y() {
                    if (window.AMap && window.AMap.View2D) {
                        f = new AMap.Map("locate_button_dialog_map", {
                            resizeEnable: !0,
                            view: new AMap.View2D({
                                resizeEnable: !0,
                                zoom: 13
                            }),
                            keyboardEnable: !1
                        }), f.plugin([ "AMap.ToolBar" ], function() {
                            var n = new AMap.ToolBar();
                            f.addControl(n);
                        });
                        var e, t;
                        AMap.event.addListener(f, "click", function(n) {
                            e = setTimeout(function() {
                                t && t.setMap(null), t = new AMap.Marker({
                                    icon: "/images/index/amap_marker.png",
                                    position: n.lnglat
                                }), f.clearMap(), t.setMap(f), u = n.lnglat.getLng(), l = n.lnglat.getLat(), e = 0;
                            }, 500);
                        }), AMap.event.addListener(f, "dblclick", function(n) {
                            clearTimeout(e), e = 0;
                        }), h = angular.element(document.getElementById("locate_button_dialog_map_tips")), 
                        p = angular.element(document.getElementById("locate_button_dialog_map_keyword")), 
                        p.val(n.searchKeyword).on("input", function() {
                            o(this.value);
                        }), p.on("keydown", function(n) {
                            13 === n.keyCode ? (s(), n.preventDefault()) : 40 === n.keyCode ? (a("down"), n.preventDefault()) : 38 === n.keyCode && (a("up"), 
                            n.preventDefault());
                        }), h.on("click", function(n) {
                            for (var e = n.target; e && !angular.element(e).hasClass("locate_button_dialog_map_tips_item") && e.parentNode; ) e = e.parentNode;
                            var t = angular.element(e);
                            if (t.hasClass("locate_button_dialog_map_tips_item")) {
                                var r = t.attr("data-index");
                                h.data("currIndex", r - 1), s();
                            }
                        }), setTimeout(function() {
                            p[0].focus();
                        }, 0), o(p.val());
                    } else {
                        if (!d) {
                            d = Date.now();
                            var r = document.createElement("script");
                            r.src = "//webapi.amap.com/maps?v=1.3&key=8ba4946c7da88f3c742ec535f9de16d8", document.head.appendChild(r);
                        }
                        Date.now() - d > 3e4 ? alert("地图加载超时！") : setTimeout(y, 50);
                    }
                };
                t.on("click", function(t) {
                    e.show("地图定位", g, function() {
                        u ? (n.onSelect(u, l), e.hide()) : alert("请选择位置！");
                    }), n.$apply(), f ? setTimeout(function() {
                        p[0].focus();
                    }, 0) : v();
                });
            }
        };
    } ];
}, function(n, e, t) {
    "use strict";
    n.exports = [ "$rootScope", "map", "$timeout", "mobileAreaBox", function(n, e, r, i) {
        return {
            restrict: "EA",
            scope: {
                onSelect: "=",
                level: "="
            },
            link: function(n, e, i) {
                var o = !1;
                o = window.matchMedia ? window.matchMedia("screen and (max-width:600px)").matches : window.innerWidth < 600;
                var a, s;
                r(function() {
                    var r = t(40), i = e;
                    o ? (t(47), s = "mobile") : (t(51), s = ""), a = new r({
                        $input: i,
                        level: n.level(),
                        specialLevel: 1,
                        device: s
                    });
                    var c = t(42);
                    c(i).on("change", function() {
                        var e = a.getValue();
                        n.onSelect(e);
                    });
                });
            }
        };
    } ];
}, function(n, e, t) {
    var r, i, o;
    !function(a, s) {
        i = [ t(41), t(42), t(43), t(45), t(46) ], r = s, o = "function" == typeof r ? r.apply(e, i) : r, 
        !(void 0 !== o && (n.exports = o));
    }(this, function(n, e, t, r, i) {
        return n("AddressSelector", [ t ], {
            className: "ui-address-selector-default",
            address: i,
            $container: e("body"),
            level: 3,
            specialLevel: 2,
            zIndex: 1e3,
            getValue: function() {
                return this.lastResult;
            },
            position: function() {
                if ("mobile" === this.device) this.$self.css({
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }); else {
                    var n = this.$trigger.offset(), e = parseFloat(this.$trigger.outerHeight());
                    this.$self.css({
                        left: n.left + "px",
                        top: n.top + e - 1 + "px"
                    });
                }
            },
            fillData: function(n) {
                var t = this.$main.eq(4);
                if (n) {
                    for (var r = "", i = 0; i < n.length; i++) {
                        var o = n[i], a = o.n;
                        r += '<li><a href="javascript:;" name="' + a + '">' + a + "</a>", "mobile" === this.device && (r += '<span class="uasd-icon uasd-right">></span>'), 
                        r += "</li>";
                    }
                    if (this.$letter.hide(), this.$main.hide(), t.css("margin-bottom", "0"), t.html(r).show(), 
                    "mobile" === this.device) {
                        var s = e(window).height(), c = t.height();
                        s > c && t.css("margin-bottom", s - c + "px");
                    }
                }
            },
            fillProvince: function(n) {
                if (n && n.length) {
                    for (var t = "", r = "", i = "", o = "", a = 0; a < n.length; a++) {
                        var s = n[a], c = s.n;
                        0 === c.indexOf("北") || 0 === c.indexOf("安") || 0 === c.indexOf("福") || 0 === c.indexOf("广") || 0 === c.indexOf("重") || 0 === c.indexOf("贵") || 0 === c.indexOf("甘") || 0 === c.indexOf("澳") ? (t += '<li><a href="javascript:;" name="' + c + '">' + c + "</a>", 
                        "mobile" === this.device && (t += '<span class="uasd-icon uasd-right">></span>'), 
                        t += "</li>") : 0 === c.indexOf("天") || 0 === c.indexOf("浙") || 0 === c.indexOf("云") || 0 === c.indexOf("西") || 0 === c.indexOf("新") || 0 === c.indexOf("台") || 0 === c.indexOf("香") ? (o += '<li><a href="javascript:;" name="' + c + '">' + c + "</a>", 
                        "mobile" === this.device && (o += '<span class="uasd-icon uasd-right">></span>'), 
                        o += "</li>") : 0 === c.indexOf("河") || 0 === c.indexOf("吉") || 0 === c.indexOf("黑") || 0 === c.indexOf("江") || 0 === c.indexOf("湖") || 0 === c.indexOf("海") ? (r += '<li><a href="javascript:;" name="' + c + '">' + c + "</a>", 
                        "mobile" === this.device && (r += '<span class="uasd-icon uasd-right">></span>'), 
                        r += "</li>") : 0 !== c.indexOf("山") && 0 !== c.indexOf("内") && 0 !== c.indexOf("辽") && 0 !== c.indexOf("上") && 0 !== c.indexOf("四") && 0 !== c.indexOf("陕") && 0 !== c.indexOf("青") && 0 !== c.indexOf("宁") || (i += '<li><a href="javascript:;" name="' + c + '">' + c + "</a>", 
                        "mobile" === this.device && (i += '<span class="uasd-icon uasd-right">></span>'), 
                        i += "</li>");
                    }
                    if (t.length > 0 && (this.$letter.eq(0).show(), this.$main.eq(0).html(t).show()), 
                    r.length > 0 && (this.$letter.eq(1).show(), this.$main.eq(1).html(r).show()), i.length > 0 && (this.$letter.eq(2).show(), 
                    this.$main.eq(2).html(i).show()), o.length > 0 && (this.$letter.eq(3).show(), this.$main.eq(3).html(o).show()), 
                    "mobile" === this.device) {
                        var u = e(window).height(), l = 45 * n.length + 44;
                        u > l && this.$main.eq(3).css("margin-bottom", u - l + "px");
                    }
                }
            },
            end: function() {
                this.$self.hide(), this.$container.scrollTop(this.triggerScrollTop), this.triggerScrollTop = 0, 
                this.$typeOptions.removeClass("uasd-current"), this.$typeOptions.eq(0).addClass("uasd-current"), 
                this.$letter.show(), this.$main.show(), this.$main.eq(4).hide(), this.tag = "province", 
                this.cities = [], this.counties = [], this.lastResult = {
                    province: this.result.province,
                    city: this.result.city,
                    county: this.result.county
                }, this.$trigger.val(this.result.province + this.result.city + this.result.county).trigger("change"), 
                this.result = {
                    province: "",
                    city: "",
                    county: ""
                };
            },
            defaultNodeMap: {
                $self: function(n) {
                    return n.$searchRoot.find("div." + n.className + "[addressSelector=" + n._id + "]");
                },
                $main: function(n) {
                    return n.$self.find("ul.uasd-content");
                },
                $letter: function(n) {
                    return n.$self.find("div.uasd-letter");
                },
                $type: function(n) {
                    return n.$self.find("div.uasd-type");
                },
                $typeOptions: function(n) {
                    return n.$self.find("ul>li>a");
                }
            },
            postMixinProps: function() {
                this.$input instanceof e ? (this.rawNode = this.$input[0], this.$trigger = this.$input) : (this.rawNode = this.$input, 
                this.$trigger = e(this.$input)), this.$container instanceof e ? this.$searchRoot = this.$container : this.$searchRoot = e(this.$container);
            },
            modifyHtml: function() {
                var n = "";
                n += '<div addressSelector="' + this._id + '" class="' + this.className + '" style="z-index:' + this.zIndex + '">', 
                n += '<div class="uasd-type">', n += "<ul>", "mobile" === this.device && (n += '<span class="uasd-icon uasd-left"><</span>'), 
                n += '<li ><a href="javascript:void(0)" class="uasd-current">请选择省份</a></li>', this.level >= 2 && (n += '<li ><a href="javascript:void(0)">请选择城市</a></li>'), 
                this.level >= 3 && (n += '<li ><a href="javascript:void(0)">请选择县区</a></li>'), n += "</ul>", 
                n += '<div class="uasd-main">', n += '<div class="uasd-letter">A-G</div>', n += '<ul letter="A-G" class="uasd-content"></ul>', 
                n += '<div class="uasd-letter">H-K</div>', n += '<ul letter="H-K" class="uasd-content"></ul>', 
                n += '<div class="uasd-letter">L-S</div>', n += '<ul letter="L-S" class="uasd-content"></ul>', 
                n += '<div class="uasd-letter">T-Z</div>', n += '<ul letter="T-Z" class="uasd-content"></ul>', 
                n += '<ul class="uasd-content uasd-last">', n += "</ul>", n += "</div></div></div>", 
                this.$container.append(n);
            },
            postCreateUi: function() {
                this.result = {
                    province: "",
                    city: "",
                    county: ""
                }, this.tag = "province", this.nextData = this.address, this.position(), this.fillProvince(this.address);
            },
            bindEvents: function() {
                var n = this;
                n.$typeOptions.eq(0).on("click", function(e) {
                    n.$typeOptions.removeClass("uasd-current"), n.$typeOptions.eq(0).addClass("uasd-current"), 
                    n.$letter.show(), n.$main.show(), n.$main.eq(4).hide(), n.tag = "province", n.result.province && "" !== n.result.province && n.$main.find("[name=" + n.result.province + "]").addClass("uasd-current"), 
                    e.stopPropagation();
                }), n.$typeOptions.eq(1).on("click", function(e) {
                    n.result.province && (n.$letter.hide(), n.$main.hide(), n.$main.eq(4).show(), n.$typeOptions.removeClass("uasd-current"), 
                    n.$typeOptions.eq(1).addClass("uasd-current"), n.tag = "city", n.fillData(n.cities), 
                    n.result.city && "" !== n.result.city && n.$main.find("[name=" + n.result.city + "]").addClass("uasd-current")), 
                    e.stopPropagation();
                }), n.$typeOptions.eq(2).on("click", function(e) {
                    n.result.city && (n.$letter.hide(), n.$main.hide(), n.$main.eq(4).show(), n.$typeOptions.removeClass("uasd-current"), 
                    n.$typeOptions.eq(2).addClass("uasd-current"), n.tag = "county", n.fillData(n.counties), 
                    n.result.county && "" !== n.result.county && n.$main.find("[name=" + n.result.county + "]").addClass("uasd-current")), 
                    e.stopPropagation();
                }), n.$main.on("click", "li>a", function(t) {
                    var r = e(t.target);
                    r.parents("div.uasd-main").find(".uasd-current").removeClass("uasd-current"), r.addClass("uasd-current");
                    var i = r.html();
                    n.result[n.tag] = i;
                    var o;
                    o = "province" === n.tag ? n.address : "city" === n.tag ? n.cities : [];
                    for (var a, s = 0; s < o.length; s++) {
                        if (i === o[s].n) {
                            a = o[s].c;
                            break;
                        }
                        s === o.length - 1 && (a = []);
                    }
                    if (a || (a = []), "province" === n.tag) if (n.cities = a, n.result.city = "", 1 === n.level || n.cities.length <= 0) n.end(); else {
                        var c = n.result.province;
                        "北京市" !== c && "天津市" !== c && "重庆市" !== c && "上海市" !== c || 1 !== n.specialLevel ? n.$typeOptions.eq(1).trigger("click") : n.end();
                    } else "city" === n.tag ? (n.counties = a, n.result.county = "", 2 === n.level || n.counties.length <= 0 ? n.end() : n.$typeOptions.eq(2).trigger("click")) : n.end();
                    t.stopPropagation();
                }), n.$self.on("click", function(n) {
                    n.stopPropagation();
                }), n.$trigger.on("click.addressSelector." + n._id, function(e) {
                    n.position(), n.$self.show(), n.triggerScrollTop = n.$container.scrollTop(), e.stopPropagation();
                }), n.$container.on("click.addressSelector." + n._id, function() {
                    n.$self.is(":hidden") || (n.$self.hide(), n.$container.scrollTop(n.triggerScrollTop), 
                    n.triggerScrollTop = 0);
                }), "mobile" === this.device && (n.$self.find("span.uasd-left").on("click", function() {
                    var e = n.$type.find("span.uasd-left").parent().find("li>a.uasd-current"), t = e.parent().index();
                    1 === t ? (n.$self.hide(), n.$container.scrollTop(this.triggerScrollTop), n.triggerScrollTop = 0) : n.$typeOptions.eq(t - 2).trigger("click");
                }), n.$trigger.on("focus.addressSelector." + n._id, function() {
                    n.$trigger.blur();
                }));
            },
            destroy: function() {
                this.$trigger.off("click.addressSelector." + this._id), "mobile" === this.device && inner.$trigger.off("focus.addressSelector." + this._id), 
                this.$self.remove(), this.$container.off("click.addressSelector." + this._id), r.removeOne(this._id);
            }
        });
    });
}, function(n, e, t) {
    var r, i;
    (function(o) {
        var a;
        a = "undefined" != typeof window ? window : o, function(o, a) {
            r = a, i = "function" == typeof r ? r.call(e, t, e, n) : r, !(void 0 !== i && (n.exports = i));
        }(this, function() {
            function n(n, e) {
                throw new Error("declare" + (e ? " " + e : "") + ": " + n);
            }
            function e(e, t) {
                for (var r, i, o, a, s, c, u, l, f = [], d = [ {
                    cls: 0,
                    refs: []
                } ], p = {}, h = 1, g = e.length, m = 0; m < g; ++m) {
                    for (o = e[m], o ? "[object Function]" != y.call(o) && n("mixin #" + m + " is not a callable constructor.", t) : n("mixin #" + m + " is unknown. Did you use require to pull it in?", t), 
                    i = o._meta ? o._meta.bases : [ o ], a = 0, r = i.length - 1; r >= 0; --r) s = i[r].prototype, 
                    s.hasOwnProperty("declaredClass") || (s.declaredClass = "uniqName_" + w++), u = s.declaredClass, 
                    p.hasOwnProperty(u) || (p[u] = {
                        count: 0,
                        refs: [],
                        cls: i[r]
                    }, ++h), c = p[u], a && a !== c && (c.refs.push(a), ++a.count), a = c;
                    ++a.count, d[0].refs.push(a);
                }
                for (;d.length; ) {
                    for (a = d.pop(), f.push(a.cls), --h; l = a.refs, 1 == l.length; ) {
                        if (a = l[0], !a || --a.count) {
                            a = 0;
                            break;
                        }
                        f.push(a.cls), --h;
                    }
                    if (a) for (m = 0, g = l.length; m < g; ++m) a = l[m], --a.count || d.push(a);
                }
                return h && n("can't build consistent linearization", t), o = e[0], f[0] = o ? o._meta && o === f[f.length - o._meta.bases.length] ? o._meta.bases.length : 1 : 0, 
                f;
            }
            function t(t, i, a) {
                "string" != typeof t && (a = i, i = t, t = ""), a = a || [];
                var f, h, $, w, x, I, k, C = 1, S = i;
                if ("[object Array]" == y.call(i) ? (I = e(i, t), $ = I[0], C = I.length - $, i = I[C]) : (I = [ 0 ], 
                i ? "[object Function]" == y.call(i) ? ($ = i._meta, I = I.concat($ ? $.bases : i)) : n("base class is not a callable constructor.", t) : null !== i && n("unknown base class. Did you use require to pull it in?", t)), 
                i) for (h = C - 1; f = r(i), h; --h) $ = I[h], ($._meta ? d : l)(f, $.prototype), 
                w = new Function(), w.superclass = i, w.prototype = f, i = f.constructor = w; else f = {};
                for (u(f, a), $ = a.constructor, $ !== v.constructor && ($.nom = b, f.constructor = $), 
                h = C - 1; h; --h) $ = I[h]._meta, $ && $.chains && (k = l(k || {}, $.chains));
                if (f["-chains-"] && (k = l(k || {}, f["-chains-"])), $ = !k || !k.hasOwnProperty(b), 
                I[0] = w = k && "manual" === k.constructor ? c(I) : 1 == I.length ? o(a.constructor, $) : s(I, $), 
                w._meta = {
                    bases: I,
                    hidden: a,
                    chains: k,
                    parents: S,
                    ctor: a.constructor
                }, w.superclass = i && i.prototype, w.extend = p, w.prototype = f, f.constructor = w, 
                f.inherited = m, t && (f.delcaredClass = t), k) for (x in k) f[x] && "string" == typeof k[x] && x != b && ($ = f[x] = g(x, I, "after" === k[x]), 
                $.nom = x);
                return w;
            }
            function r(n) {
                $.prototype = n.prototype;
                var e = new $();
                return $.prototype = null, e;
            }
            function i(n) {
                var e = n.callee, t = r(e);
                return e.apply(t, n), t;
            }
            function o(n, e) {
                return function() {
                    var t, r = arguments, o = r, a = r[0];
                    return this instanceof r.callee ? (e && (a && (t = a.preamble, t && (o = t.apply(this, o) || o)), 
                    t = this.preamble, t && t.apply(this, o)), n && n.apply(this, r), t = this.postscript, 
                    void (t && t.apply(this, r))) : i(r);
                };
            }
            function s(n, e) {
                return function() {
                    var t, r, o, a, s = arguments, c = s, u = s[0], l = n.length;
                    if (!(this instanceof s.callee)) return i(s);
                    if (e && (u && u.preamble || this.preamble)) for (a = new Array(n.length), a[0] = s, 
                    r = 0; u = s[0], u && (t = u.preamble, t && (s = t.apply(this, s) || s)), t = n[r].prototype, 
                    t = t.hasOwnProperty("preamble") && t.preamble, t && (s = t.apply(this, s) || s), 
                    ++r != l; ) a[r] = s;
                    for (r = l - 1; r >= 0; --r) t = n[r], o = t._meta, t = o ? o.ctor : t, t && t.apply(this, a ? a[r] : s);
                    t = this.postscript, t && t.apply(this, c);
                };
            }
            function c(n) {
                return function() {
                    var e, t, r = arguments, o = 0;
                    if (!(this instanceof r.callee)) return i(r);
                    for (;e = n[o]; ++o) if (t = e._meta, e = t ? t.ctor : e) {
                        e.apply(this, r);
                        break;
                    }
                    e = this.postscript, e && e.apply(this, r);
                };
            }
            function u(n, e) {
                var t, r;
                for (t in e) r = e[t], r === v[t] && t in v || t == b || ("[object Function]" == y.call(r) && (r.nom = t), 
                n[t] = r);
                if (h()) for (var i = I; i; ) t = x[--i], r = e[t], r === v[t] && t in v || t == b || ("[object Function]" == y.call(r) && (r.nom = t), 
                n[t] = r);
                return n;
            }
            function l(n, e) {
                n = n || {};
                for (var t = 1, r = arguments.length; t < r; ++t) f(n, arguments[t]);
                return n;
            }
            function f(n, e) {
                var t, r, i, o = {};
                for (t in e) r = e[t], t in n && (n[t] === r || t in o && o[t] === r) || (n[t] = r);
                if (h() && e) for (i = 0; i < I; ++i) t = x[i], r = e[t], t in n && (n[t] === r || t in o && o[t] === r) || (n[t] = r);
                return n;
            }
            function d(n, e) {
                for (var t in e) t != b && e.hasOwnProperty(t) && (n[t] = e[t]);
                if (h()) for (var r = I; r; ) t = x[--r], t != b && e.hasOwnProperty(t) && (n[t] = e[t]);
            }
            function p(n) {
                return t.safeMixin(this.prototype, n), this;
            }
            function h() {
                for (var n in {
                    toString: 1
                }) return 0;
                return 1;
            }
            function g(n, e, t) {
                return function() {
                    var r, i, o, a = 0, s = 1;
                    for (t && (a = e.length - 1, s = -1); r = e[a]; a += s) i = r._meta, o = (i ? i.hidden : r.prototype)[n], 
                    o && o.apply(this, arguments);
                };
            }
            function m(e, t, r) {
                var i, o, a, s, c, u, l, f, d, p = this._inherited = this._inherited || {};
                if ("string" == typeof e && (i = e, e = t, t = r), r = 0, s = e.callee, i = i || s.nom, 
                i || n("can't deduce a name to call inherited()", this.declaredClass), c = this.constructor._meta, 
                a = c.bases, d = p.p, i != b) {
                    if (p.c !== s && (d = 0, u = a[0], c = u._meta, c.hidden[i] !== s)) {
                        o = c.chains, o && "string" == typeof o[i] && n("calling chained method with inherited: " + i, this.declaredClass);
                        do if (c = u._meta, l = u.prototype, c && (l[i] === s && l.hasOwnProperty(i) || c.hidden[i] === s)) break; while (u = a[++d]);
                        d = u ? d : -1;
                    }
                    if (u = a[++d]) if (l = u.prototype, u._meta && l.hasOwnProperty(i)) r = l[i]; else {
                        f = v[i];
                        do if (l = u.prototype, r = l[i], r && (u._meta ? l.hasOwnProperty(i) : r !== f)) break; while (u = a[++d]);
                    }
                    r = u && r || v[i];
                } else {
                    if (p.c !== s && (d = 0, c = a[0]._meta, c && c.ctor !== s)) {
                        for (o = c.chains, o && "manual" === o.constructor || n("calling chained constructor with inherited", this.declaredClass); (u = a[++d]) && (c = u._meta, 
                        !c || c.ctor !== s); ) ;
                        d = u ? d : -1;
                    }
                    for (;(u = a[++d]) && (c = u._meta, !(r = c ? c.ctor : u)); ) ;
                    r = u && r;
                }
                if (p.c = r, p.p = d, r) return t === !0 ? r : r.apply(this, t || e);
            }
            if (a.__webpackage_declare) return a.__webpackage_declare;
            var v = Object.prototype, y = v.toString, $ = new Function(), w = 0, b = "constructor", x = "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."), I = x.length;
            return t.safeMixin = u, t.mixin = l, a.__webpackage_declare = t, t;
        });
    }).call(e, function() {
        return this;
    }());
}, function(n, e, t) {
    var r, i;
    !function(e, t) {
        "object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n);
        } : t(e);
    }("undefined" != typeof window ? window : this, function(t, o) {
        function a(n) {
            var e = !!n && "length" in n && n.length, t = ln.type(n);
            return "function" !== t && !ln.isWindow(n) && ("array" === t || 0 === e || "number" == typeof e && e > 0 && e - 1 in n);
        }
        function s(n, e, t) {
            if (ln.isFunction(e)) return ln.grep(n, function(n, r) {
                return !!e.call(n, r, n) !== t;
            });
            if (e.nodeType) return ln.grep(n, function(n) {
                return n === e !== t;
            });
            if ("string" == typeof e) {
                if (wn.test(e)) return ln.filter(e, n, t);
                e = ln.filter(e, n);
            }
            return ln.grep(n, function(n) {
                return rn.call(e, n) > -1 !== t;
            });
        }
        function c(n, e) {
            for (;(n = n[e]) && 1 !== n.nodeType; ) ;
            return n;
        }
        function u(n) {
            var e = {};
            return ln.each(n.match(Sn) || [], function(n, t) {
                e[t] = !0;
            }), e;
        }
        function l() {
            Q.removeEventListener("DOMContentLoaded", l), t.removeEventListener("load", l), 
            ln.ready();
        }
        function f() {
            this.expando = ln.expando + f.uid++;
        }
        function d(n, e, t) {
            var r;
            if (void 0 === t && 1 === n.nodeType) if (r = "data-" + e.replace(jn, "-$&").toLowerCase(), 
            t = n.getAttribute(r), "string" == typeof t) {
                try {
                    t = "true" === t || "false" !== t && ("null" === t ? null : +t + "" === t ? +t : Nn.test(t) ? ln.parseJSON(t) : t);
                } catch (i) {}
                On.set(n, e, t);
            } else t = void 0;
            return t;
        }
        function p(n, e, t, r) {
            var i, o = 1, a = 20, s = r ? function() {
                return r.cur();
            } : function() {
                return ln.css(n, e, "");
            }, c = s(), u = t && t[3] || (ln.cssNumber[e] ? "" : "px"), l = (ln.cssNumber[e] || "px" !== u && +c) && Ln.exec(ln.css(n, e));
            if (l && l[3] !== u) {
                u = u || l[3], t = t || [], l = +c || 1;
                do o = o || ".5", l /= o, ln.style(n, e, l + u); while (o !== (o = s() / c) && 1 !== o && --a);
            }
            return t && (l = +l || +c || 0, i = t[1] ? l + (t[1] + 1) * t[2] : +t[2], r && (r.unit = u, 
            r.start = l, r.end = i)), i;
        }
        function h(n, e) {
            var t = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(e || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ln.nodeName(n, e) ? ln.merge([ n ], t) : t;
        }
        function g(n, e) {
            for (var t = 0, r = n.length; t < r; t++) An.set(n[t], "globalEval", !e || An.get(e[t], "globalEval"));
        }
        function m(n, e, t, r, i) {
            for (var o, a, s, c, u, l, f = e.createDocumentFragment(), d = [], p = 0, m = n.length; p < m; p++) if (o = n[p], 
            o || 0 === o) if ("object" === ln.type(o)) ln.merge(d, o.nodeType ? [ o ] : o); else if (Un.test(o)) {
                for (a = a || f.appendChild(e.createElement("div")), s = (Rn.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = Fn[s] || Fn._default, a.innerHTML = c[1] + ln.htmlPrefilter(o) + c[2], l = c[0]; l--; ) a = a.lastChild;
                ln.merge(d, a.childNodes), a = f.firstChild, a.textContent = "";
            } else d.push(e.createTextNode(o));
            for (f.textContent = "", p = 0; o = d[p++]; ) if (r && ln.inArray(o, r) > -1) i && i.push(o); else if (u = ln.contains(o.ownerDocument, o), 
            a = h(f.appendChild(o), "script"), u && g(a), t) for (l = 0; o = a[l++]; ) Bn.test(o.type || "") && t.push(o);
            return f;
        }
        function v() {
            return !0;
        }
        function y() {
            return !1;
        }
        function $() {
            try {
                return Q.activeElement;
            } catch (n) {}
        }
        function w(n, e, t, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (s in e) w(n, s, t, r, e[s], o);
                return n;
            }
            if (null == r && null == i ? (i = t, r = t = void 0) : null == i && ("string" == typeof t ? (i = r, 
            r = void 0) : (i = r, r = t, t = void 0)), i === !1) i = y; else if (!i) return n;
            return 1 === o && (a = i, i = function(n) {
                return ln().off(n), a.apply(this, arguments);
            }, i.guid = a.guid || (a.guid = ln.guid++)), n.each(function() {
                ln.event.add(this, e, i, r, t);
            });
        }
        function b(n, e) {
            return ln.nodeName(n, "table") && ln.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n;
        }
        function x(n) {
            return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n;
        }
        function I(n) {
            var e = Yn.exec(n.type);
            return e ? n.type = e[1] : n.removeAttribute("type"), n;
        }
        function k(n, e) {
            var t, r, i, o, a, s, c, u;
            if (1 === e.nodeType) {
                if (An.hasData(n) && (o = An.access(n), a = An.set(e, o), u = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in u) for (t = 0, r = u[i].length; t < r; t++) ln.event.add(e, i, u[i][t]);
                }
                On.hasData(n) && (s = On.access(n), c = ln.extend({}, s), On.set(e, c));
            }
        }
        function C(n, e) {
            var t = e.nodeName.toLowerCase();
            "input" === t && qn.test(n.type) ? e.checked = n.checked : "input" !== t && "textarea" !== t || (e.defaultValue = n.defaultValue);
        }
        function S(n, e, t, r) {
            e = en.apply([], e);
            var i, o, a, s, c, u, l = 0, f = n.length, d = f - 1, p = e[0], g = ln.isFunction(p);
            if (g || f > 1 && "string" == typeof p && !cn.checkClone && Xn.test(p)) return n.each(function(i) {
                var o = n.eq(i);
                g && (e[0] = p.call(this, i, o.html())), S(o, e, t, r);
            });
            if (f && (i = m(e, n[0].ownerDocument, !1, n, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), 
            o || r)) {
                for (a = ln.map(h(i, "script"), x), s = a.length; l < f; l++) c = i, l !== d && (c = ln.clone(c, !0, !0), 
                s && ln.merge(a, h(c, "script"))), t.call(n[l], c, l);
                if (s) for (u = a[a.length - 1].ownerDocument, ln.map(a, I), l = 0; l < s; l++) c = a[l], 
                Bn.test(c.type || "") && !An.access(c, "globalEval") && ln.contains(u, c) && (c.src ? ln._evalUrl && ln._evalUrl(c.src) : ln.globalEval(c.textContent.replace(Jn, "")));
            }
            return n;
        }
        function _(n, e, t) {
            for (var r, i = e ? ln.filter(e, n) : n, o = 0; null != (r = i[o]); o++) t || 1 !== r.nodeType || ln.cleanData(h(r)), 
            r.parentNode && (t && ln.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
            return n;
        }
        function E(n, e) {
            var t = ln(e.createElement(n)).appendTo(e.body), r = ln.css(t[0], "display");
            return t.detach(), r;
        }
        function T(n) {
            var e = Q, t = Zn[n];
            return t || (t = E(n, e), "none" !== t && t || (Kn = (Kn || ln("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), 
            e = Kn[0].contentDocument, e.write(), e.close(), t = E(n, e), Kn.detach()), Zn[n] = t), 
            t;
        }
        function A(n, e, t) {
            var r, i, o, a, s = n.style;
            return t = t || ee(n), a = t ? t.getPropertyValue(e) || t[e] : void 0, "" !== a && void 0 !== a || ln.contains(n.ownerDocument, n) || (a = ln.style(n, e)), 
            t && !cn.pixelMarginRight() && ne.test(a) && Qn.test(e) && (r = s.width, i = s.minWidth, 
            o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = t.width, s.width = r, 
            s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a;
        }
        function O(n, e) {
            return {
                get: function() {
                    return n() ? void delete this.get : (this.get = e).apply(this, arguments);
                }
            };
        }
        function N(n) {
            if (n in ce) return n;
            for (var e = n[0].toUpperCase() + n.slice(1), t = se.length; t--; ) if (n = se[t] + e, 
            n in ce) return n;
        }
        function j(n, e, t) {
            var r = Ln.exec(e);
            return r ? Math.max(0, r[2] - (t || 0)) + (r[3] || "px") : e;
        }
        function P(n, e, t, r, i) {
            for (var o = t === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === t && (a += ln.css(n, t + Mn[o], !0, i)), 
            r ? ("content" === t && (a -= ln.css(n, "padding" + Mn[o], !0, i)), "margin" !== t && (a -= ln.css(n, "border" + Mn[o] + "Width", !0, i))) : (a += ln.css(n, "padding" + Mn[o], !0, i), 
            "padding" !== t && (a += ln.css(n, "border" + Mn[o] + "Width", !0, i)));
            return a;
        }
        function L(n, e, t) {
            var r = !0, i = "width" === e ? n.offsetWidth : n.offsetHeight, o = ee(n), a = "border-box" === ln.css(n, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = A(n, e, o), (i < 0 || null == i) && (i = n.style[e]), ne.test(i)) return i;
                r = a && (cn.boxSizingReliable() || i === n.style[e]), i = parseFloat(i) || 0;
            }
            return i + P(n, e, t || (a ? "border" : "content"), r, o) + "px";
        }
        function M(n, e) {
            for (var t, r, i, o = [], a = 0, s = n.length; a < s; a++) r = n[a], r.style && (o[a] = An.get(r, "olddisplay"), 
            t = r.style.display, e ? (o[a] || "none" !== t || (r.style.display = ""), "" === r.style.display && Dn(r) && (o[a] = An.access(r, "olddisplay", T(r.nodeName)))) : (i = Dn(r), 
            "none" === t && i || An.set(r, "olddisplay", i ? t : ln.css(r, "display"))));
            for (a = 0; a < s; a++) r = n[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
            return n;
        }
        function D(n, e, t, r, i) {
            return new D.prototype.init(n, e, t, r, i);
        }
        function q() {
            return t.setTimeout(function() {
                ue = void 0;
            }), ue = ln.now();
        }
        function R(n, e) {
            var t, r = 0, i = {
                height: n
            };
            for (e = e ? 1 : 0; r < 4; r += 2 - e) t = Mn[r], i["margin" + t] = i["padding" + t] = n;
            return e && (i.opacity = i.width = n), i;
        }
        function B(n, e, t) {
            for (var r, i = (H.tweeners[e] || []).concat(H.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(t, e, n)) return r;
        }
        function F(n, e, t) {
            var r, i, o, a, s, c, u, l, f = this, d = {}, p = n.style, h = n.nodeType && Dn(n), g = An.get(n, "fxshow");
            t.queue || (s = ln._queueHooks(n, "fx"), null == s.unqueued && (s.unqueued = 0, 
            c = s.empty.fire, s.empty.fire = function() {
                s.unqueued || c();
            }), s.unqueued++, f.always(function() {
                f.always(function() {
                    s.unqueued--, ln.queue(n, "fx").length || s.empty.fire();
                });
            })), 1 === n.nodeType && ("height" in e || "width" in e) && (t.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
            u = ln.css(n, "display"), l = "none" === u ? An.get(n, "olddisplay") || T(n.nodeName) : u, 
            "inline" === l && "none" === ln.css(n, "float") && (p.display = "inline-block")), 
            t.overflow && (p.overflow = "hidden", f.always(function() {
                p.overflow = t.overflow[0], p.overflowX = t.overflow[1], p.overflowY = t.overflow[2];
            }));
            for (r in e) if (i = e[r], fe.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0;
                }
                d[r] = g && g[r] || ln.style(n, r);
            } else u = void 0;
            if (ln.isEmptyObject(d)) "inline" === ("none" === u ? T(n.nodeName) : u) && (p.display = u); else {
                g ? "hidden" in g && (h = g.hidden) : g = An.access(n, "fxshow", {}), o && (g.hidden = !h), 
                h ? ln(n).show() : f.done(function() {
                    ln(n).hide();
                }), f.done(function() {
                    var e;
                    An.remove(n, "fxshow");
                    for (e in d) ln.style(n, e, d[e]);
                });
                for (r in d) a = B(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, 
                a.start = "width" === r || "height" === r ? 1 : 0));
            }
        }
        function U(n, e) {
            var t, r, i, o, a;
            for (t in n) if (r = ln.camelCase(t), i = e[r], o = n[t], ln.isArray(o) && (i = o[1], 
            o = n[t] = o[0]), t !== r && (n[r] = o, delete n[t]), a = ln.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete n[r];
                for (t in o) t in n || (n[t] = o[t], e[t] = i);
            } else e[r] = i;
        }
        function H(n, e, t) {
            var r, i, o = 0, a = H.prefilters.length, s = ln.Deferred().always(function() {
                delete c.elem;
            }), c = function() {
                if (i) return !1;
                for (var e = ue || q(), t = Math.max(0, u.startTime + u.duration - e), r = t / u.duration || 0, o = 1 - r, a = 0, c = u.tweens.length; a < c; a++) u.tweens[a].run(o);
                return s.notifyWith(n, [ u, o, t ]), o < 1 && c ? t : (s.resolveWith(n, [ u ]), 
                !1);
            }, u = s.promise({
                elem: n,
                props: ln.extend({}, e),
                opts: ln.extend(!0, {
                    specialEasing: {},
                    easing: ln.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ue || q(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var r = ln.Tween(n, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r;
                },
                stop: function(e) {
                    var t = 0, r = e ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; t < r; t++) u.tweens[t].run(1);
                    return e ? (s.notifyWith(n, [ u, 1, 0 ]), s.resolveWith(n, [ u, e ])) : s.rejectWith(n, [ u, e ]), 
                    this;
                }
            }), l = u.props;
            for (U(l, u.opts.specialEasing); o < a; o++) if (r = H.prefilters[o].call(u, n, l, u.opts)) return ln.isFunction(r.stop) && (ln._queueHooks(u.elem, u.opts.queue).stop = ln.proxy(r.stop, r)), 
            r;
            return ln.map(l, B, u), ln.isFunction(u.opts.start) && u.opts.start.call(n, u), 
            ln.fx.timer(ln.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
        }
        function V(n) {
            return n.getAttribute && n.getAttribute("class") || "";
        }
        function z(n) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var r, i = 0, o = e.toLowerCase().match(Sn) || [];
                if (ln.isFunction(t)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
                (n[r] = n[r] || []).unshift(t)) : (n[r] = n[r] || []).push(t);
            };
        }
        function W(n, e, t, r) {
            function i(s) {
                var c;
                return o[s] = !0, ln.each(n[s] || [], function(n, s) {
                    var u = s(e, t, r);
                    return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (e.dataTypes.unshift(u), 
                    i(u), !1);
                }), c;
            }
            var o = {}, a = n === Oe;
            return i(e.dataTypes[0]) || !o["*"] && i("*");
        }
        function G(n, e) {
            var t, r, i = ln.ajaxSettings.flatOptions || {};
            for (t in e) void 0 !== e[t] && ((i[t] ? n : r || (r = {}))[t] = e[t]);
            return r && ln.extend(!0, n, r), n;
        }
        function X(n, e, t) {
            for (var r, i, o, a, s = n.contents, c = n.dataTypes; "*" === c[0]; ) c.shift(), 
            void 0 === r && (r = n.mimeType || e.getResponseHeader("Content-Type"));
            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                c.unshift(i);
                break;
            }
            if (c[0] in t) o = c[0]; else {
                for (i in t) {
                    if (!c[0] || n.converters[i + " " + c[0]]) {
                        o = i;
                        break;
                    }
                    a || (a = i);
                }
                o = o || a;
            }
            if (o) return o !== c[0] && c.unshift(o), t[o];
        }
        function Y(n, e, t, r) {
            var i, o, a, s, c, u = {}, l = n.dataTypes.slice();
            if (l[1]) for (a in n.converters) u[a.toLowerCase()] = n.converters[a];
            for (o = l.shift(); o; ) if (n.responseFields[o] && (t[n.responseFields[o]] = e), 
            !c && r && n.dataFilter && (e = n.dataFilter(e, n.dataType)), c = o, o = l.shift()) if ("*" === o) o = c; else if ("*" !== c && c !== o) {
                if (a = u[c + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], l.unshift(s[1]));
                    break;
                }
                if (a !== !0) if (a && n["throws"]) e = a(e); else try {
                    e = a(e);
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + c + " to " + o
                    };
                }
            }
            return {
                state: "success",
                data: e
            };
        }
        function J(n, e, t, r) {
            var i;
            if (ln.isArray(e)) ln.each(e, function(e, i) {
                t || Le.test(n) ? r(n, i) : J(n + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, t, r);
            }); else if (t || "object" !== ln.type(e)) r(n, e); else for (i in e) J(n + "[" + i + "]", e[i], t, r);
        }
        function K(n) {
            return ln.isWindow(n) ? n : 9 === n.nodeType && n.defaultView;
        }
        var Z = [], Q = t.document, nn = Z.slice, en = Z.concat, tn = Z.push, rn = Z.indexOf, on = {}, an = on.toString, sn = on.hasOwnProperty, cn = {}, un = "2.2.4", ln = function(n, e) {
            return new ln.fn.init(n, e);
        }, fn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, dn = /^-ms-/, pn = /-([\da-z])/gi, hn = function(n, e) {
            return e.toUpperCase();
        };
        ln.fn = ln.prototype = {
            jquery: un,
            constructor: ln,
            selector: "",
            length: 0,
            toArray: function() {
                return nn.call(this);
            },
            get: function(n) {
                return null != n ? n < 0 ? this[n + this.length] : this[n] : nn.call(this);
            },
            pushStack: function(n) {
                var e = ln.merge(this.constructor(), n);
                return e.prevObject = this, e.context = this.context, e;
            },
            each: function(n) {
                return ln.each(this, n);
            },
            map: function(n) {
                return this.pushStack(ln.map(this, function(e, t) {
                    return n.call(e, t, e);
                }));
            },
            slice: function() {
                return this.pushStack(nn.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(n) {
                var e = this.length, t = +n + (n < 0 ? e : 0);
                return this.pushStack(t >= 0 && t < e ? [ this[t] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: tn,
            sort: Z.sort,
            splice: Z.splice
        }, ln.extend = ln.fn.extend = function() {
            var n, e, t, r, i, o, a = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ln.isFunction(a) || (a = {}), 
            s === c && (a = this, s--); s < c; s++) if (null != (n = arguments[s])) for (e in n) t = a[e], 
            r = n[e], a !== r && (u && r && (ln.isPlainObject(r) || (i = ln.isArray(r))) ? (i ? (i = !1, 
            o = t && ln.isArray(t) ? t : []) : o = t && ln.isPlainObject(t) ? t : {}, a[e] = ln.extend(u, o, r)) : void 0 !== r && (a[e] = r));
            return a;
        }, ln.extend({
            expando: "jQuery" + (un + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === ln.type(n);
            },
            isArray: Array.isArray,
            isWindow: function(n) {
                return null != n && n === n.window;
            },
            isNumeric: function(n) {
                var e = n && n.toString();
                return !ln.isArray(n) && e - parseFloat(e) + 1 >= 0;
            },
            isPlainObject: function(n) {
                var e;
                if ("object" !== ln.type(n) || n.nodeType || ln.isWindow(n)) return !1;
                if (n.constructor && !sn.call(n, "constructor") && !sn.call(n.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in n) ;
                return void 0 === e || sn.call(n, e);
            },
            isEmptyObject: function(n) {
                var e;
                for (e in n) return !1;
                return !0;
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? on[an.call(n)] || "object" : typeof n;
            },
            globalEval: function(n) {
                var e, t = eval;
                n = ln.trim(n), n && (1 === n.indexOf("use strict") ? (e = Q.createElement("script"), 
                e.text = n, Q.head.appendChild(e).parentNode.removeChild(e)) : t(n));
            },
            camelCase: function(n) {
                return n.replace(dn, "ms-").replace(pn, hn);
            },
            nodeName: function(n, e) {
                return n.nodeName && n.nodeName.toLowerCase() === e.toLowerCase();
            },
            each: function(n, e) {
                var t, r = 0;
                if (a(n)) for (t = n.length; r < t && e.call(n[r], r, n[r]) !== !1; r++) ; else for (r in n) if (e.call(n[r], r, n[r]) === !1) break;
                return n;
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(fn, "");
            },
            makeArray: function(n, e) {
                var t = e || [];
                return null != n && (a(Object(n)) ? ln.merge(t, "string" == typeof n ? [ n ] : n) : tn.call(t, n)), 
                t;
            },
            inArray: function(n, e, t) {
                return null == e ? -1 : rn.call(e, n, t);
            },
            merge: function(n, e) {
                for (var t = +e.length, r = 0, i = n.length; r < t; r++) n[i++] = e[r];
                return n.length = i, n;
            },
            grep: function(n, e, t) {
                for (var r, i = [], o = 0, a = n.length, s = !t; o < a; o++) r = !e(n[o], o), r !== s && i.push(n[o]);
                return i;
            },
            map: function(n, e, t) {
                var r, i, o = 0, s = [];
                if (a(n)) for (r = n.length; o < r; o++) i = e(n[o], o, t), null != i && s.push(i); else for (o in n) i = e(n[o], o, t), 
                null != i && s.push(i);
                return en.apply([], s);
            },
            guid: 1,
            proxy: function(n, e) {
                var t, r, i;
                if ("string" == typeof e && (t = n[e], e = n, n = t), ln.isFunction(n)) return r = nn.call(arguments, 2), 
                i = function() {
                    return n.apply(e || this, r.concat(nn.call(arguments)));
                }, i.guid = n.guid = n.guid || ln.guid++, i;
            },
            now: Date.now,
            support: cn
        }), "function" == typeof Symbol && (ln.fn[Symbol.iterator] = Z[Symbol.iterator]), 
        ln.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, e) {
            on["[object " + e + "]"] = e.toLowerCase();
        });
        var gn = function(n) {
            function e(n, e, t, r) {
                var i, o, a, s, c, u, f, p, h = e && e.ownerDocument, g = e ? e.nodeType : 9;
                if (t = t || [], "string" != typeof n || !n || 1 !== g && 9 !== g && 11 !== g) return t;
                if (!r && ((e ? e.ownerDocument || e : B) !== N && O(e), e = e || N, P)) {
                    if (11 !== g && (u = yn.exec(n))) if (i = u[1]) {
                        if (9 === g) {
                            if (!(a = e.getElementById(i))) return t;
                            if (a.id === i) return t.push(a), t;
                        } else if (h && (a = h.getElementById(i)) && q(e, a) && a.id === i) return t.push(a), 
                        t;
                    } else {
                        if (u[2]) return Z.apply(t, e.getElementsByTagName(n)), t;
                        if ((i = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return Z.apply(t, e.getElementsByClassName(i)), 
                        t;
                    }
                    if (b.qsa && !z[n + " "] && (!L || !L.test(n))) {
                        if (1 !== g) h = e, p = n; else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(wn, "\\$&") : e.setAttribute("id", s = R), 
                            f = C(n), o = f.length, c = pn.test(s) ? "#" + s : "[id='" + s + "']"; o--; ) f[o] = c + " " + d(f[o]);
                            p = f.join(","), h = $n.test(n) && l(e.parentNode) || e;
                        }
                        if (p) try {
                            return Z.apply(t, h.querySelectorAll(p)), t;
                        } catch (m) {} finally {
                            s === R && e.removeAttribute("id");
                        }
                    }
                }
                return _(n.replace(cn, "$1"), e, t, r);
            }
            function t() {
                function n(t, r) {
                    return e.push(t + " ") > x.cacheLength && delete n[e.shift()], n[t + " "] = r;
                }
                var e = [];
                return n;
            }
            function r(n) {
                return n[R] = !0, n;
            }
            function i(n) {
                var e = N.createElement("div");
                try {
                    return !!n(e);
                } catch (t) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null;
                }
            }
            function o(n, e) {
                for (var t = n.split("|"), r = t.length; r--; ) x.attrHandle[t[r]] = e;
            }
            function a(n, e) {
                var t = e && n, r = t && 1 === n.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~n.sourceIndex || G);
                if (r) return r;
                if (t) for (;t = t.nextSibling; ) if (t === e) return -1;
                return n ? 1 : -1;
            }
            function s(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && e.type === n;
                };
            }
            function c(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                };
            }
            function u(n) {
                return r(function(e) {
                    return e = +e, r(function(t, r) {
                        for (var i, o = n([], t.length, e), a = o.length; a--; ) t[i = o[a]] && (t[i] = !(r[i] = t[i]));
                    });
                });
            }
            function l(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n;
            }
            function f() {}
            function d(n) {
                for (var e = 0, t = n.length, r = ""; e < t; e++) r += n[e].value;
                return r;
            }
            function p(n, e, t) {
                var r = e.dir, i = t && "parentNode" === r, o = U++;
                return e.first ? function(e, t, o) {
                    for (;e = e[r]; ) if (1 === e.nodeType || i) return n(e, t, o);
                } : function(e, t, a) {
                    var s, c, u, l = [ F, o ];
                    if (a) {
                        for (;e = e[r]; ) if ((1 === e.nodeType || i) && n(e, t, a)) return !0;
                    } else for (;e = e[r]; ) if (1 === e.nodeType || i) {
                        if (u = e[R] || (e[R] = {}), c = u[e.uniqueID] || (u[e.uniqueID] = {}), (s = c[r]) && s[0] === F && s[1] === o) return l[2] = s[2];
                        if (c[r] = l, l[2] = n(e, t, a)) return !0;
                    }
                };
            }
            function h(n) {
                return n.length > 1 ? function(e, t, r) {
                    for (var i = n.length; i--; ) if (!n[i](e, t, r)) return !1;
                    return !0;
                } : n[0];
            }
            function g(n, t, r) {
                for (var i = 0, o = t.length; i < o; i++) e(n, t[i], r);
                return r;
            }
            function m(n, e, t, r, i) {
                for (var o, a = [], s = 0, c = n.length, u = null != e; s < c; s++) (o = n[s]) && (t && !t(o, r, i) || (a.push(o), 
                u && e.push(s)));
                return a;
            }
            function v(n, e, t, i, o, a) {
                return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function(r, a, s, c) {
                    var u, l, f, d = [], p = [], h = a.length, v = r || g(e || "*", s.nodeType ? [ s ] : s, []), y = !n || !r && e ? v : m(v, d, n, s, c), $ = t ? o || (r ? n : h || i) ? [] : a : y;
                    if (t && t(y, $, s, c), i) for (u = m($, p), i(u, [], s, c), l = u.length; l--; ) (f = u[l]) && ($[p[l]] = !(y[p[l]] = f));
                    if (r) {
                        if (o || n) {
                            if (o) {
                                for (u = [], l = $.length; l--; ) (f = $[l]) && u.push(y[l] = f);
                                o(null, $ = [], u, c);
                            }
                            for (l = $.length; l--; ) (f = $[l]) && (u = o ? nn(r, f) : d[l]) > -1 && (r[u] = !(a[u] = f));
                        }
                    } else $ = m($ === a ? $.splice(h, $.length) : $), o ? o(null, a, $, c) : Z.apply(a, $);
                });
            }
            function y(n) {
                for (var e, t, r, i = n.length, o = x.relative[n[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = p(function(n) {
                    return n === e;
                }, a, !0), u = p(function(n) {
                    return nn(e, n) > -1;
                }, a, !0), l = [ function(n, t, r) {
                    var i = !o && (r || t !== E) || ((e = t).nodeType ? c(n, t, r) : u(n, t, r));
                    return e = null, i;
                } ]; s < i; s++) if (t = x.relative[n[s].type]) l = [ p(h(l), t) ]; else {
                    if (t = x.filter[n[s].type].apply(null, n[s].matches), t[R]) {
                        for (r = ++s; r < i && !x.relative[n[r].type]; r++) ;
                        return v(s > 1 && h(l), s > 1 && d(n.slice(0, s - 1).concat({
                            value: " " === n[s - 2].type ? "*" : ""
                        })).replace(cn, "$1"), t, s < r && y(n.slice(s, r)), r < i && y(n = n.slice(r)), r < i && d(n));
                    }
                    l.push(t);
                }
                return h(l);
            }
            function $(n, t) {
                var i = t.length > 0, o = n.length > 0, a = function(r, a, s, c, u) {
                    var l, f, d, p = 0, h = "0", g = r && [], v = [], y = E, $ = r || o && x.find.TAG("*", u), w = F += null == y ? 1 : Math.random() || .1, b = $.length;
                    for (u && (E = a === N || a || u); h !== b && null != (l = $[h]); h++) {
                        if (o && l) {
                            for (f = 0, a || l.ownerDocument === N || (O(l), s = !P); d = n[f++]; ) if (d(l, a || N, s)) {
                                c.push(l);
                                break;
                            }
                            u && (F = w);
                        }
                        i && ((l = !d && l) && p--, r && g.push(l));
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = t[f++]; ) d(g, v, a, s);
                        if (r) {
                            if (p > 0) for (;h--; ) g[h] || v[h] || (v[h] = J.call(c));
                            v = m(v);
                        }
                        Z.apply(c, v), u && !r && v.length > 0 && p + t.length > 1 && e.uniqueSort(c);
                    }
                    return u && (F = w, E = y), g;
                };
                return i ? r(a) : a;
            }
            var w, b, x, I, k, C, S, _, E, T, A, O, N, j, P, L, M, D, q, R = "sizzle" + 1 * new Date(), B = n.document, F = 0, U = 0, H = t(), V = t(), z = t(), W = function(n, e) {
                return n === e && (A = !0), 0;
            }, G = 1 << 31, X = {}.hasOwnProperty, Y = [], J = Y.pop, K = Y.push, Z = Y.push, Q = Y.slice, nn = function(n, e) {
                for (var t = 0, r = n.length; t < r; t++) if (n[t] === e) return t;
                return -1;
            }, en = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tn = "[\\x20\\t\\r\\n\\f]", rn = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", on = "\\[" + tn + "*(" + rn + ")(?:" + tn + "*([*^$|!~]?=)" + tn + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rn + "))|)" + tn + "*\\]", an = ":(" + rn + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + on + ")*)|.*)\\)|)", sn = new RegExp(tn + "+", "g"), cn = new RegExp("^" + tn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tn + "+$", "g"), un = new RegExp("^" + tn + "*," + tn + "*"), ln = new RegExp("^" + tn + "*([>+~]|" + tn + ")" + tn + "*"), fn = new RegExp("=" + tn + "*([^\\]'\"]*?)" + tn + "*\\]", "g"), dn = new RegExp(an), pn = new RegExp("^" + rn + "$"), hn = {
                ID: new RegExp("^#(" + rn + ")"),
                CLASS: new RegExp("^\\.(" + rn + ")"),
                TAG: new RegExp("^(" + rn + "|[*])"),
                ATTR: new RegExp("^" + on),
                PSEUDO: new RegExp("^" + an),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tn + "*(even|odd|(([+-]|)(\\d*)n|)" + tn + "*(?:([+-]|)" + tn + "*(\\d+)|))" + tn + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + en + ")$", "i"),
                needsContext: new RegExp("^" + tn + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tn + "*((?:-\\d)?\\d*)" + tn + "*\\)|)(?=[^-]|$)", "i")
            }, gn = /^(?:input|select|textarea|button)$/i, mn = /^h\d$/i, vn = /^[^{]+\{\s*\[native \w/, yn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $n = /[+~]/, wn = /'|\\/g, bn = new RegExp("\\\\([\\da-f]{1,6}" + tn + "?|(" + tn + ")|.)", "ig"), xn = function(n, e, t) {
                var r = "0x" + e - 65536;
                return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
            }, In = function() {
                O();
            };
            try {
                Z.apply(Y = Q.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType;
            } catch (kn) {
                Z = {
                    apply: Y.length ? function(n, e) {
                        K.apply(n, Q.call(e));
                    } : function(n, e) {
                        for (var t = n.length, r = 0; n[t++] = e[r++]; ) ;
                        n.length = t - 1;
                    }
                };
            }
            b = e.support = {}, k = e.isXML = function(n) {
                var e = n && (n.ownerDocument || n).documentElement;
                return !!e && "HTML" !== e.nodeName;
            }, O = e.setDocument = function(n) {
                var e, t, r = n ? n.ownerDocument || n : B;
                return r !== N && 9 === r.nodeType && r.documentElement ? (N = r, j = N.documentElement, 
                P = !k(N), (t = N.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", In, !1) : t.attachEvent && t.attachEvent("onunload", In)), 
                b.attributes = i(function(n) {
                    return n.className = "i", !n.getAttribute("className");
                }), b.getElementsByTagName = i(function(n) {
                    return n.appendChild(N.createComment("")), !n.getElementsByTagName("*").length;
                }), b.getElementsByClassName = vn.test(N.getElementsByClassName), b.getById = i(function(n) {
                    return j.appendChild(n).id = R, !N.getElementsByName || !N.getElementsByName(R).length;
                }), b.getById ? (x.find.ID = function(n, e) {
                    if ("undefined" != typeof e.getElementById && P) {
                        var t = e.getElementById(n);
                        return t ? [ t ] : [];
                    }
                }, x.filter.ID = function(n) {
                    var e = n.replace(bn, xn);
                    return function(n) {
                        return n.getAttribute("id") === e;
                    };
                }) : (delete x.find.ID, x.filter.ID = function(n) {
                    var e = n.replace(bn, xn);
                    return function(n) {
                        var t = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return t && t.value === e;
                    };
                }), x.find.TAG = b.getElementsByTagName ? function(n, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(n) : b.qsa ? e.querySelectorAll(n) : void 0;
                } : function(n, e) {
                    var t, r = [], i = 0, o = e.getElementsByTagName(n);
                    if ("*" === n) {
                        for (;t = o[i++]; ) 1 === t.nodeType && r.push(t);
                        return r;
                    }
                    return o;
                }, x.find.CLASS = b.getElementsByClassName && function(n, e) {
                    if ("undefined" != typeof e.getElementsByClassName && P) return e.getElementsByClassName(n);
                }, M = [], L = [], (b.qsa = vn.test(N.querySelectorAll)) && (i(function(n) {
                    j.appendChild(n).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                    n.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + tn + "*(?:''|\"\")"), 
                    n.querySelectorAll("[selected]").length || L.push("\\[" + tn + "*(?:value|" + en + ")"), 
                    n.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), n.querySelectorAll(":checked").length || L.push(":checked"), 
                    n.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]");
                }), i(function(n) {
                    var e = N.createElement("input");
                    e.setAttribute("type", "hidden"), n.appendChild(e).setAttribute("name", "D"), n.querySelectorAll("[name=d]").length && L.push("name" + tn + "*[*^$|!~]?="), 
                    n.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), n.querySelectorAll("*,:x"), 
                    L.push(",.*:");
                })), (b.matchesSelector = vn.test(D = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(n) {
                    b.disconnectedMatch = D.call(n, "div"), D.call(n, "[s!='']:x"), M.push("!=", an);
                }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), 
                e = vn.test(j.compareDocumentPosition), q = e || vn.test(j.contains) ? function(n, e) {
                    var t = 9 === n.nodeType ? n.documentElement : n, r = e && e.parentNode;
                    return n === r || !(!r || 1 !== r.nodeType || !(t.contains ? t.contains(r) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(r)));
                } : function(n, e) {
                    if (e) for (;e = e.parentNode; ) if (e === n) return !0;
                    return !1;
                }, W = e ? function(n, e) {
                    if (n === e) return A = !0, 0;
                    var t = !n.compareDocumentPosition - !e.compareDocumentPosition;
                    return t ? t : (t = (n.ownerDocument || n) === (e.ownerDocument || e) ? n.compareDocumentPosition(e) : 1, 
                    1 & t || !b.sortDetached && e.compareDocumentPosition(n) === t ? n === N || n.ownerDocument === B && q(B, n) ? -1 : e === N || e.ownerDocument === B && q(B, e) ? 1 : T ? nn(T, n) - nn(T, e) : 0 : 4 & t ? -1 : 1);
                } : function(n, e) {
                    if (n === e) return A = !0, 0;
                    var t, r = 0, i = n.parentNode, o = e.parentNode, s = [ n ], c = [ e ];
                    if (!i || !o) return n === N ? -1 : e === N ? 1 : i ? -1 : o ? 1 : T ? nn(T, n) - nn(T, e) : 0;
                    if (i === o) return a(n, e);
                    for (t = n; t = t.parentNode; ) s.unshift(t);
                    for (t = e; t = t.parentNode; ) c.unshift(t);
                    for (;s[r] === c[r]; ) r++;
                    return r ? a(s[r], c[r]) : s[r] === B ? -1 : c[r] === B ? 1 : 0;
                }, N) : N;
            }, e.matches = function(n, t) {
                return e(n, null, null, t);
            }, e.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== N && O(n), t = t.replace(fn, "='$1']"), b.matchesSelector && P && !z[t + " "] && (!M || !M.test(t)) && (!L || !L.test(t))) try {
                    var r = D.call(n, t);
                    if (r || b.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r;
                } catch (i) {}
                return e(t, N, null, [ n ]).length > 0;
            }, e.contains = function(n, e) {
                return (n.ownerDocument || n) !== N && O(n), q(n, e);
            }, e.attr = function(n, e) {
                (n.ownerDocument || n) !== N && O(n);
                var t = x.attrHandle[e.toLowerCase()], r = t && X.call(x.attrHandle, e.toLowerCase()) ? t(n, e, !P) : void 0;
                return void 0 !== r ? r : b.attributes || !P ? n.getAttribute(e) : (r = n.getAttributeNode(e)) && r.specified ? r.value : null;
            }, e.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, e.uniqueSort = function(n) {
                var e, t = [], r = 0, i = 0;
                if (A = !b.detectDuplicates, T = !b.sortStable && n.slice(0), n.sort(W), A) {
                    for (;e = n[i++]; ) e === n[i] && (r = t.push(i));
                    for (;r--; ) n.splice(t[r], 1);
                }
                return T = null, n;
            }, I = e.getText = function(n) {
                var e, t = "", r = 0, i = n.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) t += I(n);
                    } else if (3 === i || 4 === i) return n.nodeValue;
                } else for (;e = n[r++]; ) t += I(e);
                return t;
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: hn,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(bn, xn), n[3] = (n[3] || n[4] || n[5] || "").replace(bn, xn), 
                        "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4);
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || e.error(n[0]), 
                        n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && e.error(n[0]), 
                        n;
                    },
                    PSEUDO: function(n) {
                        var e, t = !n[6] && n[2];
                        return hn.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && dn.test(t) && (e = C(t, !0)) && (e = t.indexOf(")", t.length - e) - t.length) && (n[0] = n[0].slice(0, e), 
                        n[2] = t.slice(0, e)), n.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function(n) {
                        var e = n.replace(bn, xn).toLowerCase();
                        return "*" === n ? function() {
                            return !0;
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === e;
                        };
                    },
                    CLASS: function(n) {
                        var e = H[n + " "];
                        return e || (e = new RegExp("(^|" + tn + ")" + n + "(" + tn + "|$)")) && H(n, function(n) {
                            return e.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(n, t, r) {
                        return function(i) {
                            var o = e.attr(i, n);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o.replace(sn, " ") + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"));
                        };
                    },
                    CHILD: function(n, e, t, r, i) {
                        var o = "nth" !== n.slice(0, 3), a = "last" !== n.slice(-4), s = "of-type" === e;
                        return 1 === r && 0 === i ? function(n) {
                            return !!n.parentNode;
                        } : function(e, t, c) {
                            var u, l, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !c && !s, $ = !1;
                            if (m) {
                                if (o) {
                                    for (;g; ) {
                                        for (d = e; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === n && !h && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (h = [ a ? m.firstChild : m.lastChild ], a && y) {
                                    for (d = m, f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), 
                                    u = l[n] || [], p = u[0] === F && u[1], $ = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || ($ = p = 0) || h.pop(); ) if (1 === d.nodeType && ++$ && d === e) {
                                        l[n] = [ F, p, $ ];
                                        break;
                                    }
                                } else if (y && (d = e, f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), 
                                u = l[n] || [], p = u[0] === F && u[1], $ = p), $ === !1) for (;(d = ++p && d && d[g] || ($ = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++$ || (y && (f = d[R] || (d[R] = {}), 
                                l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[n] = [ F, $ ]), d !== e)); ) ;
                                return $ -= i, $ === r || $ % r === 0 && $ / r >= 0;
                            }
                        };
                    },
                    PSEUDO: function(n, t) {
                        var i, o = x.pseudos[n] || x.setFilters[n.toLowerCase()] || e.error("unsupported pseudo: " + n);
                        return o[R] ? o(t) : o.length > 1 ? (i = [ n, n, "", t ], x.setFilters.hasOwnProperty(n.toLowerCase()) ? r(function(n, e) {
                            for (var r, i = o(n, t), a = i.length; a--; ) r = nn(n, i[a]), n[r] = !(e[r] = i[a]);
                        }) : function(n) {
                            return o(n, 0, i);
                        }) : o;
                    }
                },
                pseudos: {
                    not: r(function(n) {
                        var e = [], t = [], i = S(n.replace(cn, "$1"));
                        return i[R] ? r(function(n, e, t, r) {
                            for (var o, a = i(n, null, r, []), s = n.length; s--; ) (o = a[s]) && (n[s] = !(e[s] = o));
                        }) : function(n, r, o) {
                            return e[0] = n, i(e, null, o, t), e[0] = null, !t.pop();
                        };
                    }),
                    has: r(function(n) {
                        return function(t) {
                            return e(n, t).length > 0;
                        };
                    }),
                    contains: r(function(n) {
                        return n = n.replace(bn, xn), function(e) {
                            return (e.textContent || e.innerText || I(e)).indexOf(n) > -1;
                        };
                    }),
                    lang: r(function(n) {
                        return pn.test(n || "") || e.error("unsupported lang: " + n), n = n.replace(bn, xn).toLowerCase(), 
                        function(e) {
                            var t;
                            do if (t = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return t = t.toLowerCase(), 
                            t === n || 0 === t.indexOf(n + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        };
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function(n) {
                        return n === j;
                    },
                    focus: function(n) {
                        return n === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(n.type || n.href || ~n.tabIndex);
                    },
                    enabled: function(n) {
                        return n.disabled === !1;
                    },
                    disabled: function(n) {
                        return n.disabled === !0;
                    },
                    checked: function(n) {
                        var e = n.nodeName.toLowerCase();
                        return "input" === e && !!n.checked || "option" === e && !!n.selected;
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0;
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(n) {
                        return !x.pseudos.empty(n);
                    },
                    header: function(n) {
                        return mn.test(n.nodeName);
                    },
                    input: function(n) {
                        return gn.test(n.nodeName);
                    },
                    button: function(n) {
                        var e = n.nodeName.toLowerCase();
                        return "input" === e && "button" === n.type || "button" === e;
                    },
                    text: function(n) {
                        var e;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (e = n.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: u(function() {
                        return [ 0 ];
                    }),
                    last: u(function(n, e) {
                        return [ e - 1 ];
                    }),
                    eq: u(function(n, e, t) {
                        return [ t < 0 ? t + e : t ];
                    }),
                    even: u(function(n, e) {
                        for (var t = 0; t < e; t += 2) n.push(t);
                        return n;
                    }),
                    odd: u(function(n, e) {
                        for (var t = 1; t < e; t += 2) n.push(t);
                        return n;
                    }),
                    lt: u(function(n, e, t) {
                        for (var r = t < 0 ? t + e : t; --r >= 0; ) n.push(r);
                        return n;
                    }),
                    gt: u(function(n, e, t) {
                        for (var r = t < 0 ? t + e : t; ++r < e; ) n.push(r);
                        return n;
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[w] = s(w);
            for (w in {
                submit: !0,
                reset: !0
            }) x.pseudos[w] = c(w);
            return f.prototype = x.filters = x.pseudos, x.setFilters = new f(), C = e.tokenize = function(n, t) {
                var r, i, o, a, s, c, u, l = V[n + " "];
                if (l) return t ? 0 : l.slice(0);
                for (s = n, c = [], u = x.preFilter; s; ) {
                    r && !(i = un.exec(s)) || (i && (s = s.slice(i[0].length) || s), c.push(o = [])), 
                    r = !1, (i = ln.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(cn, " ")
                    }), s = s.slice(r.length));
                    for (a in x.filter) !(i = hn[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), 
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break;
                }
                return t ? s.length : s ? e.error(n) : V(n, c).slice(0);
            }, S = e.compile = function(n, e) {
                var t, r = [], i = [], o = z[n + " "];
                if (!o) {
                    for (e || (e = C(n)), t = e.length; t--; ) o = y(e[t]), o[R] ? r.push(o) : i.push(o);
                    o = z(n, $(i, r)), o.selector = n;
                }
                return o;
            }, _ = e.select = function(n, e, t, r) {
                var i, o, a, s, c, u = "function" == typeof n && n, f = !r && C(n = u.selector || n);
                if (t = t || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && P && x.relative[o[1].type]) {
                        if (e = (x.find.ID(a.matches[0].replace(bn, xn), e) || [])[0], !e) return t;
                        u && (e = e.parentNode), n = n.slice(o.shift().value.length);
                    }
                    for (i = hn.needsContext.test(n) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]); ) if ((c = x.find[s]) && (r = c(a.matches[0].replace(bn, xn), $n.test(o[0].type) && l(e.parentNode) || e))) {
                        if (o.splice(i, 1), n = r.length && d(o), !n) return Z.apply(t, r), t;
                        break;
                    }
                }
                return (u || S(n, f))(r, e, !P, t, !e || $n.test(n) && l(e.parentNode) || e), t;
            }, b.sortStable = R.split("").sort(W).join("") === R, b.detectDuplicates = !!A, 
            O(), b.sortDetached = i(function(n) {
                return 1 & n.compareDocumentPosition(N.createElement("div"));
            }), i(function(n) {
                return n.innerHTML = "<a href='#'></a>", "#" === n.firstChild.getAttribute("href");
            }) || o("type|href|height|width", function(n, e, t) {
                if (!t) return n.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }), b.attributes && i(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value");
            }) || o("value", function(n, e, t) {
                if (!t && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
            }), i(function(n) {
                return null == n.getAttribute("disabled");
            }) || o(en, function(n, e, t) {
                var r;
                if (!t) return n[e] === !0 ? e.toLowerCase() : (r = n.getAttributeNode(e)) && r.specified ? r.value : null;
            }), e;
        }(t);
        ln.find = gn, ln.expr = gn.selectors, ln.expr[":"] = ln.expr.pseudos, ln.uniqueSort = ln.unique = gn.uniqueSort, 
        ln.text = gn.getText, ln.isXMLDoc = gn.isXML, ln.contains = gn.contains;
        var mn = function(n, e, t) {
            for (var r = [], i = void 0 !== t; (n = n[e]) && 9 !== n.nodeType; ) if (1 === n.nodeType) {
                if (i && ln(n).is(t)) break;
                r.push(n);
            }
            return r;
        }, vn = function(n, e) {
            for (var t = []; n; n = n.nextSibling) 1 === n.nodeType && n !== e && t.push(n);
            return t;
        }, yn = ln.expr.match.needsContext, $n = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, wn = /^.[^:#\[\.,]*$/;
        ln.filter = function(n, e, t) {
            var r = e[0];
            return t && (n = ":not(" + n + ")"), 1 === e.length && 1 === r.nodeType ? ln.find.matchesSelector(r, n) ? [ r ] : [] : ln.find.matches(n, ln.grep(e, function(n) {
                return 1 === n.nodeType;
            }));
        }, ln.fn.extend({
            find: function(n) {
                var e, t = this.length, r = [], i = this;
                if ("string" != typeof n) return this.pushStack(ln(n).filter(function() {
                    for (e = 0; e < t; e++) if (ln.contains(i[e], this)) return !0;
                }));
                for (e = 0; e < t; e++) ln.find(n, i[e], r);
                return r = this.pushStack(t > 1 ? ln.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, 
                r;
            },
            filter: function(n) {
                return this.pushStack(s(this, n || [], !1));
            },
            not: function(n) {
                return this.pushStack(s(this, n || [], !0));
            },
            is: function(n) {
                return !!s(this, "string" == typeof n && yn.test(n) ? ln(n) : n || [], !1).length;
            }
        });
        var bn, xn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, In = ln.fn.init = function(n, e, t) {
            var r, i;
            if (!n) return this;
            if (t = t || bn, "string" == typeof n) {
                if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [ null, n, null ] : xn.exec(n), 
                !r || !r[1] && e) return !e || e.jquery ? (e || t).find(n) : this.constructor(e).find(n);
                if (r[1]) {
                    if (e = e instanceof ln ? e[0] : e, ln.merge(this, ln.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), 
                    $n.test(r[1]) && ln.isPlainObject(e)) for (r in e) ln.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this;
                }
                return i = Q.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), 
                this.context = Q, this.selector = n, this;
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : ln.isFunction(n) ? void 0 !== t.ready ? t.ready(n) : n(ln) : (void 0 !== n.selector && (this.selector = n.selector, 
            this.context = n.context), ln.makeArray(n, this));
        };
        In.prototype = ln.fn, bn = ln(Q);
        var kn = /^(?:parents|prev(?:Until|All))/, Cn = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ln.fn.extend({
            has: function(n) {
                var e = ln(n, this), t = e.length;
                return this.filter(function() {
                    for (var n = 0; n < t; n++) if (ln.contains(this, e[n])) return !0;
                });
            },
            closest: function(n, e) {
                for (var t, r = 0, i = this.length, o = [], a = yn.test(n) || "string" != typeof n ? ln(n, e || this.context) : 0; r < i; r++) for (t = this[r]; t && t !== e; t = t.parentNode) if (t.nodeType < 11 && (a ? a.index(t) > -1 : 1 === t.nodeType && ln.find.matchesSelector(t, n))) {
                    o.push(t);
                    break;
                }
                return this.pushStack(o.length > 1 ? ln.uniqueSort(o) : o);
            },
            index: function(n) {
                return n ? "string" == typeof n ? rn.call(ln(n), this[0]) : rn.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(n, e) {
                return this.pushStack(ln.uniqueSort(ln.merge(this.get(), ln(n, e))));
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
            }
        }), ln.each({
            parent: function(n) {
                var e = n.parentNode;
                return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(n) {
                return mn(n, "parentNode");
            },
            parentsUntil: function(n, e, t) {
                return mn(n, "parentNode", t);
            },
            next: function(n) {
                return c(n, "nextSibling");
            },
            prev: function(n) {
                return c(n, "previousSibling");
            },
            nextAll: function(n) {
                return mn(n, "nextSibling");
            },
            prevAll: function(n) {
                return mn(n, "previousSibling");
            },
            nextUntil: function(n, e, t) {
                return mn(n, "nextSibling", t);
            },
            prevUntil: function(n, e, t) {
                return mn(n, "previousSibling", t);
            },
            siblings: function(n) {
                return vn((n.parentNode || {}).firstChild, n);
            },
            children: function(n) {
                return vn(n.firstChild);
            },
            contents: function(n) {
                return n.contentDocument || ln.merge([], n.childNodes);
            }
        }, function(n, e) {
            ln.fn[n] = function(t, r) {
                var i = ln.map(this, e, t);
                return "Until" !== n.slice(-5) && (r = t), r && "string" == typeof r && (i = ln.filter(r, i)), 
                this.length > 1 && (Cn[n] || ln.uniqueSort(i), kn.test(n) && i.reverse()), this.pushStack(i);
            };
        });
        var Sn = /\S+/g;
        ln.Callbacks = function(n) {
            n = "string" == typeof n ? u(n) : ln.extend({}, n);
            var e, t, r, i, o = [], a = [], s = -1, c = function() {
                for (i = n.once, r = e = !0; a.length; s = -1) for (t = a.shift(); ++s < o.length; ) o[s].apply(t[0], t[1]) === !1 && n.stopOnFalse && (s = o.length, 
                t = !1);
                n.memory || (t = !1), e = !1, i && (o = t ? [] : "");
            }, l = {
                add: function() {
                    return o && (t && !e && (s = o.length - 1, a.push(t)), function r(e) {
                        ln.each(e, function(e, t) {
                            ln.isFunction(t) ? n.unique && l.has(t) || o.push(t) : t && t.length && "string" !== ln.type(t) && r(t);
                        });
                    }(arguments), t && !e && c()), this;
                },
                remove: function() {
                    return ln.each(arguments, function(n, e) {
                        for (var t; (t = ln.inArray(e, o, t)) > -1; ) o.splice(t, 1), t <= s && s--;
                    }), this;
                },
                has: function(n) {
                    return n ? ln.inArray(n, o) > -1 : o.length > 0;
                },
                empty: function() {
                    return o && (o = []), this;
                },
                disable: function() {
                    return i = a = [], o = t = "", this;
                },
                disabled: function() {
                    return !o;
                },
                lock: function() {
                    return i = a = [], t || (o = t = ""), this;
                },
                locked: function() {
                    return !!i;
                },
                fireWith: function(n, t) {
                    return i || (t = t || [], t = [ n, t.slice ? t.slice() : t ], a.push(t), e || c()), 
                    this;
                },
                fire: function() {
                    return l.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!r;
                }
            };
            return l;
        }, ln.extend({
            Deferred: function(n) {
                var e = [ [ "resolve", "done", ln.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ln.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ln.Callbacks("memory") ] ], t = "pending", r = {
                    state: function() {
                        return t;
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this;
                    },
                    then: function() {
                        var n = arguments;
                        return ln.Deferred(function(t) {
                            ln.each(e, function(e, o) {
                                var a = ln.isFunction(n[e]) && n[e];
                                i[o[1]](function() {
                                    var n = a && a.apply(this, arguments);
                                    n && ln.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this === r ? t.promise() : this, a ? [ n ] : arguments);
                                });
                            }), n = null;
                        }).promise();
                    },
                    promise: function(n) {
                        return null != n ? ln.extend(n, r) : r;
                    }
                }, i = {};
                return r.pipe = r.then, ln.each(e, function(n, o) {
                    var a = o[2], s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        t = s;
                    }, e[1 ^ n][2].disable, e[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this;
                    }, i[o[0] + "With"] = a.fireWith;
                }), r.promise(i), n && n.call(i, i), i;
            },
            when: function(n) {
                var e, t, r, i = 0, o = nn.call(arguments), a = o.length, s = 1 !== a || n && ln.isFunction(n.promise) ? a : 0, c = 1 === s ? n : ln.Deferred(), u = function(n, t, r) {
                    return function(i) {
                        t[n] = this, r[n] = arguments.length > 1 ? nn.call(arguments) : i, r === e ? c.notifyWith(t, r) : --s || c.resolveWith(t, r);
                    };
                };
                if (a > 1) for (e = new Array(a), t = new Array(a), r = new Array(a); i < a; i++) o[i] && ln.isFunction(o[i].promise) ? o[i].promise().progress(u(i, t, e)).done(u(i, r, o)).fail(c.reject) : --s;
                return s || c.resolveWith(r, o), c.promise();
            }
        });
        var _n;
        ln.fn.ready = function(n) {
            return ln.ready.promise().done(n), this;
        }, ln.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? ln.readyWait++ : ln.ready(!0);
            },
            ready: function(n) {
                (n === !0 ? --ln.readyWait : ln.isReady) || (ln.isReady = !0, n !== !0 && --ln.readyWait > 0 || (_n.resolveWith(Q, [ ln ]), 
                ln.fn.triggerHandler && (ln(Q).triggerHandler("ready"), ln(Q).off("ready"))));
            }
        }), ln.ready.promise = function(n) {
            return _n || (_n = ln.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(ln.ready) : (Q.addEventListener("DOMContentLoaded", l), 
            t.addEventListener("load", l))), _n.promise(n);
        }, ln.ready.promise();
        var En = function(n, e, t, r, i, o, a) {
            var s = 0, c = n.length, u = null == t;
            if ("object" === ln.type(t)) {
                i = !0;
                for (s in t) En(n, e, s, t[s], !0, o, a);
            } else if (void 0 !== r && (i = !0, ln.isFunction(r) || (a = !0), u && (a ? (e.call(n, r), 
            e = null) : (u = e, e = function(n, e, t) {
                return u.call(ln(n), t);
            })), e)) for (;s < c; s++) e(n[s], t, a ? r : r.call(n[s], s, e(n[s], t)));
            return i ? n : u ? e.call(n) : c ? e(n[0], t) : o;
        }, Tn = function(n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
        };
        f.uid = 1, f.prototype = {
            register: function(n, e) {
                var t = e || {};
                return n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                    value: t,
                    writable: !0,
                    configurable: !0
                }), n[this.expando];
            },
            cache: function(n) {
                if (!Tn(n)) return {};
                var e = n[this.expando];
                return e || (e = {}, Tn(n) && (n.nodeType ? n[this.expando] = e : Object.defineProperty(n, this.expando, {
                    value: e,
                    configurable: !0
                }))), e;
            },
            set: function(n, e, t) {
                var r, i = this.cache(n);
                if ("string" == typeof e) i[e] = t; else for (r in e) i[r] = e[r];
                return i;
            },
            get: function(n, e) {
                return void 0 === e ? this.cache(n) : n[this.expando] && n[this.expando][e];
            },
            access: function(n, e, t) {
                var r;
                return void 0 === e || e && "string" == typeof e && void 0 === t ? (r = this.get(n, e), 
                void 0 !== r ? r : this.get(n, ln.camelCase(e))) : (this.set(n, e, t), void 0 !== t ? t : e);
            },
            remove: function(n, e) {
                var t, r, i, o = n[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(n); else {
                        ln.isArray(e) ? r = e.concat(e.map(ln.camelCase)) : (i = ln.camelCase(e), e in o ? r = [ e, i ] : (r = i, 
                        r = r in o ? [ r ] : r.match(Sn) || [])), t = r.length;
                        for (;t--; ) delete o[r[t]];
                    }
                    (void 0 === e || ln.isEmptyObject(o)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando]);
                }
            },
            hasData: function(n) {
                var e = n[this.expando];
                return void 0 !== e && !ln.isEmptyObject(e);
            }
        };
        var An = new f(), On = new f(), Nn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, jn = /[A-Z]/g;
        ln.extend({
            hasData: function(n) {
                return On.hasData(n) || An.hasData(n);
            },
            data: function(n, e, t) {
                return On.access(n, e, t);
            },
            removeData: function(n, e) {
                On.remove(n, e);
            },
            _data: function(n, e, t) {
                return An.access(n, e, t);
            },
            _removeData: function(n, e) {
                An.remove(n, e);
            }
        }), ln.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = On.get(o), 1 === o.nodeType && !An.get(o, "hasDataAttrs"))) {
                        for (t = a.length; t--; ) a[t] && (r = a[t].name, 0 === r.indexOf("data-") && (r = ln.camelCase(r.slice(5)), 
                        d(o, r, i[r])));
                        An.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n ? this.each(function() {
                    On.set(this, n);
                }) : En(this, function(e) {
                    var t, r;
                    if (o && void 0 === e) {
                        if (t = On.get(o, n) || On.get(o, n.replace(jn, "-$&").toLowerCase()), void 0 !== t) return t;
                        if (r = ln.camelCase(n), t = On.get(o, r), void 0 !== t) return t;
                        if (t = d(o, r, void 0), void 0 !== t) return t;
                    } else r = ln.camelCase(n), this.each(function() {
                        var t = On.get(this, r);
                        On.set(this, r, e), n.indexOf("-") > -1 && void 0 !== t && On.set(this, n, e);
                    });
                }, null, e, arguments.length > 1, null, !0);
            },
            removeData: function(n) {
                return this.each(function() {
                    On.remove(this, n);
                });
            }
        }), ln.extend({
            queue: function(n, e, t) {
                var r;
                if (n) return e = (e || "fx") + "queue", r = An.get(n, e), t && (!r || ln.isArray(t) ? r = An.access(n, e, ln.makeArray(t)) : r.push(t)), 
                r || [];
            },
            dequeue: function(n, e) {
                e = e || "fx";
                var t = ln.queue(n, e), r = t.length, i = t.shift(), o = ln._queueHooks(n, e), a = function() {
                    ln.dequeue(n, e);
                };
                "inprogress" === i && (i = t.shift(), r--), i && ("fx" === e && t.unshift("inprogress"), 
                delete o.stop, i.call(n, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function(n, e) {
                var t = e + "queueHooks";
                return An.get(n, t) || An.access(n, t, {
                    empty: ln.Callbacks("once memory").add(function() {
                        An.remove(n, [ e + "queue", t ]);
                    })
                });
            }
        }), ln.fn.extend({
            queue: function(n, e) {
                var t = 2;
                return "string" != typeof n && (e = n, n = "fx", t--), arguments.length < t ? ln.queue(this[0], n) : void 0 === e ? this : this.each(function() {
                    var t = ln.queue(this, n, e);
                    ln._queueHooks(this, n), "fx" === n && "inprogress" !== t[0] && ln.dequeue(this, n);
                });
            },
            dequeue: function(n) {
                return this.each(function() {
                    ln.dequeue(this, n);
                });
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", []);
            },
            promise: function(n, e) {
                var t, r = 1, i = ln.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [ o ]);
                };
                for ("string" != typeof n && (e = n, n = void 0), n = n || "fx"; a--; ) t = An.get(o[a], n + "queueHooks"), 
                t && t.empty && (r++, t.empty.add(s));
                return s(), i.promise(e);
            }
        });
        var Pn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ln = new RegExp("^(?:([+-])=|)(" + Pn + ")([a-z%]*)$", "i"), Mn = [ "Top", "Right", "Bottom", "Left" ], Dn = function(n, e) {
            return n = e || n, "none" === ln.css(n, "display") || !ln.contains(n.ownerDocument, n);
        }, qn = /^(?:checkbox|radio)$/i, Rn = /<([\w:-]+)/, Bn = /^$|\/(?:java|ecma)script/i, Fn = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        Fn.optgroup = Fn.option, Fn.tbody = Fn.tfoot = Fn.colgroup = Fn.caption = Fn.thead, 
        Fn.th = Fn.td;
        var Un = /<|&#?\w+;/;
        !function() {
            var n = Q.createDocumentFragment(), e = n.appendChild(Q.createElement("div")), t = Q.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
            e.appendChild(t), cn.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
            e.innerHTML = "<textarea>x</textarea>", cn.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
        }();
        var Hn = /^key/, Vn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, zn = /^([^.]*)(?:\.(.+)|)/;
        ln.event = {
            global: {},
            add: function(n, e, t, r, i) {
                var o, a, s, c, u, l, f, d, p, h, g, m = An.get(n);
                if (m) for (t.handler && (o = t, t = o.handler, i = o.selector), t.guid || (t.guid = ln.guid++), 
                (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                    return "undefined" != typeof ln && ln.event.triggered !== e.type ? ln.event.dispatch.apply(n, arguments) : void 0;
                }), e = (e || "").match(Sn) || [ "" ], u = e.length; u--; ) s = zn.exec(e[u]) || [], 
                p = g = s[1], h = (s[2] || "").split(".").sort(), p && (f = ln.event.special[p] || {}, 
                p = (i ? f.delegateType : f.bindType) || p, f = ln.event.special[p] || {}, l = ln.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: t,
                    guid: t.guid,
                    selector: i,
                    needsContext: i && ln.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = c[p]) || (d = c[p] = [], d.delegateCount = 0, f.setup && f.setup.call(n, r, h, a) !== !1 || n.addEventListener && n.addEventListener(p, a)), 
                f.add && (f.add.call(n, l), l.handler.guid || (l.handler.guid = t.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), 
                ln.event.global[p] = !0);
            },
            remove: function(n, e, t, r, i) {
                var o, a, s, c, u, l, f, d, p, h, g, m = An.hasData(n) && An.get(n);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(Sn) || [ "" ], u = e.length; u--; ) if (s = zn.exec(e[u]) || [], 
                    p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = ln.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, 
                        d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                        a = o = d.length; o--; ) l = d[o], !i && g !== l.origType || t && t.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), 
                        l.selector && d.delegateCount--, f.remove && f.remove.call(n, l));
                        a && !d.length && (f.teardown && f.teardown.call(n, h, m.handle) !== !1 || ln.removeEvent(n, p, m.handle), 
                        delete c[p]);
                    } else for (p in c) ln.event.remove(n, p + e[u], t, r, !0);
                    ln.isEmptyObject(c) && An.remove(n, "handle events");
                }
            },
            dispatch: function(n) {
                n = ln.event.fix(n);
                var e, t, r, i, o, a = [], s = nn.call(arguments), c = (An.get(this, "events") || {})[n.type] || [], u = ln.event.special[n.type] || {};
                if (s[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                    for (a = ln.event.handlers.call(this, n, c), e = 0; (i = a[e++]) && !n.isPropagationStopped(); ) for (n.currentTarget = i.elem, 
                    t = 0; (o = i.handlers[t++]) && !n.isImmediatePropagationStopped(); ) n.rnamespace && !n.rnamespace.test(o.namespace) || (n.handleObj = o, 
                    n.data = o.data, r = ((ln.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), 
                    void 0 !== r && (n.result = r) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, n), n.result;
                }
            },
            handlers: function(n, e) {
                var t, r, i, o, a = [], s = e.delegateCount, c = n.target;
                if (s && c.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== n.type)) {
                    for (r = [], t = 0; t < s; t++) o = e[t], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ln(i, this).index(c) > -1 : ln.find(i, this, null, [ c ]).length), 
                    r[i] && r.push(o);
                    r.length && a.push({
                        elem: c,
                        handlers: r
                    });
                }
                return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, e) {
                    return null == n.which && (n.which = null != e.charCode ? e.charCode : e.keyCode), 
                    n;
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, e) {
                    var t, r, i, o = e.button;
                    return null == n.pageX && null != e.clientX && (t = n.target.ownerDocument || Q, 
                    r = t.documentElement, i = t.body, n.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), 
                    n.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), 
                    n.which || void 0 === o || (n.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), n;
                }
            },
            fix: function(n) {
                if (n[ln.expando]) return n;
                var e, t, r, i = n.type, o = n, a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Vn.test(i) ? this.mouseHooks : Hn.test(i) ? this.keyHooks : {}), 
                r = a.props ? this.props.concat(a.props) : this.props, n = new ln.Event(o), e = r.length; e--; ) t = r[e], 
                n[t] = o[t];
                return n.target || (n.target = Q), 3 === n.target.nodeType && (n.target = n.target.parentNode), 
                a.filter ? a.filter(n, o) : n;
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== $() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === $() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && ln.nodeName(this, "input")) return this.click(), 
                        !1;
                    },
                    _default: function(n) {
                        return ln.nodeName(n.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result);
                    }
                }
            }
        }, ln.removeEvent = function(n, e, t) {
            n.removeEventListener && n.removeEventListener(e, t);
        }, ln.Event = function(n, e) {
            return this instanceof ln.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, 
            this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? v : y) : this.type = n, 
            e && ln.extend(this, e), this.timeStamp = n && n.timeStamp || ln.now(), void (this[ln.expando] = !0)) : new ln.Event(n, e);
        }, ln.Event.prototype = {
            constructor: ln.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            isSimulated: !1,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = v, n && !this.isSimulated && n.preventDefault();
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = v, n && !this.isSimulated && n.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = v, n && !this.isSimulated && n.stopImmediatePropagation(), 
                this.stopPropagation();
            }
        }, ln.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, e) {
            ln.event.special[n] = {
                delegateType: e,
                bindType: e,
                handle: function(n) {
                    var t, r = this, i = n.relatedTarget, o = n.handleObj;
                    return i && (i === r || ln.contains(r, i)) || (n.type = o.origType, t = o.handler.apply(this, arguments), 
                    n.type = e), t;
                }
            };
        }), ln.fn.extend({
            on: function(n, e, t, r) {
                return w(this, n, e, t, r);
            },
            one: function(n, e, t, r) {
                return w(this, n, e, t, r, 1);
            },
            off: function(n, e, t) {
                var r, i;
                if (n && n.preventDefault && n.handleObj) return r = n.handleObj, ln(n.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                this;
                if ("object" == typeof n) {
                    for (i in n) this.off(i, e, n[i]);
                    return this;
                }
                return e !== !1 && "function" != typeof e || (t = e, e = void 0), t === !1 && (t = y), 
                this.each(function() {
                    ln.event.remove(this, n, t, e);
                });
            }
        });
        var Wn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Gn = /<script|<style|<link/i, Xn = /checked\s*(?:[^=]|=\s*.checked.)/i, Yn = /^true\/(.*)/, Jn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ln.extend({
            htmlPrefilter: function(n) {
                return n.replace(Wn, "<$1></$2>");
            },
            clone: function(n, e, t) {
                var r, i, o, a, s = n.cloneNode(!0), c = ln.contains(n.ownerDocument, n);
                if (!(cn.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || ln.isXMLDoc(n))) for (a = h(s), 
                o = h(n), r = 0, i = o.length; r < i; r++) C(o[r], a[r]);
                if (e) if (t) for (o = o || h(n), a = a || h(s), r = 0, i = o.length; r < i; r++) k(o[r], a[r]); else k(n, s);
                return a = h(s, "script"), a.length > 0 && g(a, !c && h(n, "script")), s;
            },
            cleanData: function(n) {
                for (var e, t, r, i = ln.event.special, o = 0; void 0 !== (t = n[o]); o++) if (Tn(t)) {
                    if (e = t[An.expando]) {
                        if (e.events) for (r in e.events) i[r] ? ln.event.remove(t, r) : ln.removeEvent(t, r, e.handle);
                        t[An.expando] = void 0;
                    }
                    t[On.expando] && (t[On.expando] = void 0);
                }
            }
        }), ln.fn.extend({
            domManip: S,
            detach: function(n) {
                return _(this, n, !0);
            },
            remove: function(n) {
                return _(this, n);
            },
            text: function(n) {
                return En(this, function(n) {
                    return void 0 === n ? ln.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n);
                    });
                }, null, n, arguments.length);
            },
            append: function() {
                return S(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, n);
                        e.appendChild(n);
                    }
                });
            },
            prepend: function() {
                return S(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, n);
                        e.insertBefore(n, e.firstChild);
                    }
                });
            },
            before: function() {
                return S(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this);
                });
            },
            after: function() {
                return S(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
                });
            },
            empty: function() {
                for (var n, e = 0; null != (n = this[e]); e++) 1 === n.nodeType && (ln.cleanData(h(n, !1)), 
                n.textContent = "");
                return this;
            },
            clone: function(n, e) {
                return n = null != n && n, e = null == e ? n : e, this.map(function() {
                    return ln.clone(this, n, e);
                });
            },
            html: function(n) {
                return En(this, function(n) {
                    var e = this[0] || {}, t = 0, r = this.length;
                    if (void 0 === n && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof n && !Gn.test(n) && !Fn[(Rn.exec(n) || [ "", "" ])[1].toLowerCase()]) {
                        n = ln.htmlPrefilter(n);
                        try {
                            for (;t < r; t++) e = this[t] || {}, 1 === e.nodeType && (ln.cleanData(h(e, !1)), 
                            e.innerHTML = n);
                            e = 0;
                        } catch (i) {}
                    }
                    e && this.empty().append(n);
                }, null, n, arguments.length);
            },
            replaceWith: function() {
                var n = [];
                return S(this, arguments, function(e) {
                    var t = this.parentNode;
                    ln.inArray(this, n) < 0 && (ln.cleanData(h(this)), t && t.replaceChild(e, this));
                }, n);
            }
        }), ln.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, e) {
            ln.fn[n] = function(n) {
                for (var t, r = [], i = ln(n), o = i.length - 1, a = 0; a <= o; a++) t = a === o ? this : this.clone(!0), 
                ln(i[a])[e](t), tn.apply(r, t.get());
                return this.pushStack(r);
            };
        });
        var Kn, Zn = {
            HTML: "block",
            BODY: "block"
        }, Qn = /^margin/, ne = new RegExp("^(" + Pn + ")(?!px)[a-z%]+$", "i"), ee = function(n) {
            var e = n.ownerDocument.defaultView;
            return e && e.opener || (e = t), e.getComputedStyle(n);
        }, te = function(n, e, t, r) {
            var i, o, a = {};
            for (o in e) a[o] = n.style[o], n.style[o] = e[o];
            i = t.apply(n, r || []);
            for (o in e) n.style[o] = a[o];
            return i;
        }, re = Q.documentElement;
        !function() {
            function n() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                s.innerHTML = "", re.appendChild(a);
                var n = t.getComputedStyle(s);
                e = "1%" !== n.top, o = "2px" === n.marginLeft, r = "4px" === n.width, s.style.marginRight = "50%", 
                i = "4px" === n.marginRight, re.removeChild(a);
            }
            var e, r, i, o, a = Q.createElement("div"), s = Q.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", 
            cn.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            a.appendChild(s), ln.extend(cn, {
                pixelPosition: function() {
                    return n(), e;
                },
                boxSizingReliable: function() {
                    return null == r && n(), r;
                },
                pixelMarginRight: function() {
                    return null == r && n(), i;
                },
                reliableMarginLeft: function() {
                    return null == r && n(), o;
                },
                reliableMarginRight: function() {
                    var n, e = s.appendChild(Q.createElement("div"));
                    return e.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    e.style.marginRight = e.style.width = "0", s.style.width = "1px", re.appendChild(a), 
                    n = !parseFloat(t.getComputedStyle(e).marginRight), re.removeChild(a), s.removeChild(e), 
                    n;
                }
            }));
        }();
        var ie = /^(none|table(?!-c[ea]).+)/, oe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, ae = {
            letterSpacing: "0",
            fontWeight: "400"
        }, se = [ "Webkit", "O", "Moz", "ms" ], ce = Q.createElement("div").style;
        ln.extend({
            cssHooks: {
                opacity: {
                    get: function(n, e) {
                        if (e) {
                            var t = A(n, "opacity");
                            return "" === t ? "1" : t;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(n, e, t, r) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var i, o, a, s = ln.camelCase(e), c = n.style;
                    return e = ln.cssProps[s] || (ln.cssProps[s] = N(s) || s), a = ln.cssHooks[e] || ln.cssHooks[s], 
                    void 0 === t ? a && "get" in a && void 0 !== (i = a.get(n, !1, r)) ? i : c[e] : (o = typeof t, 
                    "string" === o && (i = Ln.exec(t)) && i[1] && (t = p(n, e, i), o = "number"), null != t && t === t && ("number" === o && (t += i && i[3] || (ln.cssNumber[s] ? "" : "px")), 
                    cn.clearCloneStyle || "" !== t || 0 !== e.indexOf("background") || (c[e] = "inherit"), 
                    a && "set" in a && void 0 === (t = a.set(n, t, r)) || (c[e] = t)), void 0);
                }
            },
            css: function(n, e, t, r) {
                var i, o, a, s = ln.camelCase(e);
                return e = ln.cssProps[s] || (ln.cssProps[s] = N(s) || s), a = ln.cssHooks[e] || ln.cssHooks[s], 
                a && "get" in a && (i = a.get(n, !0, t)), void 0 === i && (i = A(n, e, r)), "normal" === i && e in ae && (i = ae[e]), 
                "" === t || t ? (o = parseFloat(i), t === !0 || isFinite(o) ? o || 0 : i) : i;
            }
        }), ln.each([ "height", "width" ], function(n, e) {
            ln.cssHooks[e] = {
                get: function(n, t, r) {
                    if (t) return ie.test(ln.css(n, "display")) && 0 === n.offsetWidth ? te(n, oe, function() {
                        return L(n, e, r);
                    }) : L(n, e, r);
                },
                set: function(n, t, r) {
                    var i, o = r && ee(n), a = r && P(n, e, r, "border-box" === ln.css(n, "boxSizing", !1, o), o);
                    return a && (i = Ln.exec(t)) && "px" !== (i[3] || "px") && (n.style[e] = t, t = ln.css(n, e)), 
                    j(n, t, a);
                }
            };
        }), ln.cssHooks.marginLeft = O(cn.reliableMarginLeft, function(n, e) {
            if (e) return (parseFloat(A(n, "marginLeft")) || n.getBoundingClientRect().left - te(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left;
            })) + "px";
        }), ln.cssHooks.marginRight = O(cn.reliableMarginRight, function(n, e) {
            if (e) return te(n, {
                display: "inline-block"
            }, A, [ n, "marginRight" ]);
        }), ln.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, e) {
            ln.cssHooks[n + e] = {
                expand: function(t) {
                    for (var r = 0, i = {}, o = "string" == typeof t ? t.split(" ") : [ t ]; r < 4; r++) i[n + Mn[r] + e] = o[r] || o[r - 2] || o[0];
                    return i;
                }
            }, Qn.test(n) || (ln.cssHooks[n + e].set = j);
        }), ln.fn.extend({
            css: function(n, e) {
                return En(this, function(n, e, t) {
                    var r, i, o = {}, a = 0;
                    if (ln.isArray(e)) {
                        for (r = ee(n), i = e.length; a < i; a++) o[e[a]] = ln.css(n, e[a], !1, r);
                        return o;
                    }
                    return void 0 !== t ? ln.style(n, e, t) : ln.css(n, e);
                }, n, e, arguments.length > 1);
            },
            show: function() {
                return M(this, !0);
            },
            hide: function() {
                return M(this);
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    Dn(this) ? ln(this).show() : ln(this).hide();
                });
            }
        }), ln.Tween = D, D.prototype = {
            constructor: D,
            init: function(n, e, t, r, i, o) {
                this.elem = n, this.prop = t, this.easing = i || ln.easing._default, this.options = e, 
                this.start = this.now = this.cur(), this.end = r, this.unit = o || (ln.cssNumber[t] ? "" : "px");
            },
            cur: function() {
                var n = D.propHooks[this.prop];
                return n && n.get ? n.get(this) : D.propHooks._default.get(this);
            },
            run: function(n) {
                var e, t = D.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ln.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : this.pos = e = n, 
                this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                t && t.set ? t.set(this) : D.propHooks._default.set(this), this;
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function(n) {
                    var e;
                    return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (e = ln.css(n.elem, n.prop, ""), 
                    e && "auto" !== e ? e : 0);
                },
                set: function(n) {
                    ln.fx.step[n.prop] ? ln.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[ln.cssProps[n.prop]] && !ln.cssHooks[n.prop] ? n.elem[n.prop] = n.now : ln.style(n.elem, n.prop, n.now + n.unit);
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
            }
        }, ln.easing = {
            linear: function(n) {
                return n;
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2;
            },
            _default: "swing"
        }, ln.fx = D.prototype.init, ln.fx.step = {};
        var ue, le, fe = /^(?:toggle|show|hide)$/, de = /queueHooks$/;
        ln.Animation = ln.extend(H, {
            tweeners: {
                "*": [ function(n, e) {
                    var t = this.createTween(n, e);
                    return p(t.elem, n, Ln.exec(e), t), t;
                } ]
            },
            tweener: function(n, e) {
                ln.isFunction(n) ? (e = n, n = [ "*" ]) : n = n.match(Sn);
                for (var t, r = 0, i = n.length; r < i; r++) t = n[r], H.tweeners[t] = H.tweeners[t] || [], 
                H.tweeners[t].unshift(e);
            },
            prefilters: [ F ],
            prefilter: function(n, e) {
                e ? H.prefilters.unshift(n) : H.prefilters.push(n);
            }
        }), ln.speed = function(n, e, t) {
            var r = n && "object" == typeof n ? ln.extend({}, n) : {
                complete: t || !t && e || ln.isFunction(n) && n,
                duration: n,
                easing: t && e || e && !ln.isFunction(e) && e
            };
            return r.duration = ln.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ln.fx.speeds ? ln.fx.speeds[r.duration] : ln.fx.speeds._default, 
            null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ln.isFunction(r.old) && r.old.call(this), r.queue && ln.dequeue(this, r.queue);
            }, r;
        }, ln.fn.extend({
            fadeTo: function(n, e, t, r) {
                return this.filter(Dn).css("opacity", 0).show().end().animate({
                    opacity: e
                }, n, t, r);
            },
            animate: function(n, e, t, r) {
                var i = ln.isEmptyObject(n), o = ln.speed(e, t, r), a = function() {
                    var e = H(this, ln.extend({}, n), o);
                    (i || An.get(this, "finish")) && e.stop(!0);
                };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(n, e, t) {
                var r = function(n) {
                    var e = n.stop;
                    delete n.stop, e(t);
                };
                return "string" != typeof n && (t = e, e = n, n = void 0), e && n !== !1 && this.queue(n || "fx", []), 
                this.each(function() {
                    var e = !0, i = null != n && n + "queueHooks", o = ln.timers, a = An.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && de.test(i) && r(a[i]);
                    for (i = o.length; i--; ) o[i].elem !== this || null != n && o[i].queue !== n || (o[i].anim.stop(t), 
                    e = !1, o.splice(i, 1));
                    !e && t || ln.dequeue(this, n);
                });
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var e, t = An.get(this), r = t[n + "queue"], i = t[n + "queueHooks"], o = ln.timers, a = r ? r.length : 0;
                    for (t.finish = !0, ln.queue(this, n, []), i && i.stop && i.stop.call(this, !0), 
                    e = o.length; e--; ) o[e].elem === this && o[e].queue === n && (o[e].anim.stop(!0), 
                    o.splice(e, 1));
                    for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete t.finish;
                });
            }
        }), ln.each([ "toggle", "show", "hide" ], function(n, e) {
            var t = ln.fn[e];
            ln.fn[e] = function(n, r, i) {
                return null == n || "boolean" == typeof n ? t.apply(this, arguments) : this.animate(R(e, !0), n, r, i);
            };
        }), ln.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, e) {
            ln.fn[n] = function(n, t, r) {
                return this.animate(e, n, t, r);
            };
        }), ln.timers = [], ln.fx.tick = function() {
            var n, e = 0, t = ln.timers;
            for (ue = ln.now(); e < t.length; e++) n = t[e], n() || t[e] !== n || t.splice(e--, 1);
            t.length || ln.fx.stop(), ue = void 0;
        }, ln.fx.timer = function(n) {
            ln.timers.push(n), n() ? ln.fx.start() : ln.timers.pop();
        }, ln.fx.interval = 13, ln.fx.start = function() {
            le || (le = t.setInterval(ln.fx.tick, ln.fx.interval));
        }, ln.fx.stop = function() {
            t.clearInterval(le), le = null;
        }, ln.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ln.fn.delay = function(n, e) {
            return n = ln.fx ? ln.fx.speeds[n] || n : n, e = e || "fx", this.queue(e, function(e, r) {
                var i = t.setTimeout(e, n);
                r.stop = function() {
                    t.clearTimeout(i);
                };
            });
        }, function() {
            var n = Q.createElement("input"), e = Q.createElement("select"), t = e.appendChild(Q.createElement("option"));
            n.type = "checkbox", cn.checkOn = "" !== n.value, cn.optSelected = t.selected, e.disabled = !0, 
            cn.optDisabled = !t.disabled, n = Q.createElement("input"), n.value = "t", n.type = "radio", 
            cn.radioValue = "t" === n.value;
        }();
        var pe, he = ln.expr.attrHandle;
        ln.fn.extend({
            attr: function(n, e) {
                return En(this, ln.attr, n, e, arguments.length > 1);
            },
            removeAttr: function(n) {
                return this.each(function() {
                    ln.removeAttr(this, n);
                });
            }
        }), ln.extend({
            attr: function(n, e, t) {
                var r, i, o = n.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof n.getAttribute ? ln.prop(n, e, t) : (1 === o && ln.isXMLDoc(n) || (e = e.toLowerCase(), 
                i = ln.attrHooks[e] || (ln.expr.match.bool.test(e) ? pe : void 0)), void 0 !== t ? null === t ? void ln.removeAttr(n, e) : i && "set" in i && void 0 !== (r = i.set(n, t, e)) ? r : (n.setAttribute(e, t + ""), 
                t) : i && "get" in i && null !== (r = i.get(n, e)) ? r : (r = ln.find.attr(n, e), 
                null == r ? void 0 : r));
            },
            attrHooks: {
                type: {
                    set: function(n, e) {
                        if (!cn.radioValue && "radio" === e && ln.nodeName(n, "input")) {
                            var t = n.value;
                            return n.setAttribute("type", e), t && (n.value = t), e;
                        }
                    }
                }
            },
            removeAttr: function(n, e) {
                var t, r, i = 0, o = e && e.match(Sn);
                if (o && 1 === n.nodeType) for (;t = o[i++]; ) r = ln.propFix[t] || t, ln.expr.match.bool.test(t) && (n[r] = !1), 
                n.removeAttribute(t);
            }
        }), pe = {
            set: function(n, e, t) {
                return e === !1 ? ln.removeAttr(n, t) : n.setAttribute(t, t), t;
            }
        }, ln.each(ln.expr.match.bool.source.match(/\w+/g), function(n, e) {
            var t = he[e] || ln.find.attr;
            he[e] = function(n, e, r) {
                var i, o;
                return r || (o = he[e], he[e] = i, i = null != t(n, e, r) ? e.toLowerCase() : null, 
                he[e] = o), i;
            };
        });
        var ge = /^(?:input|select|textarea|button)$/i, me = /^(?:a|area)$/i;
        ln.fn.extend({
            prop: function(n, e) {
                return En(this, ln.prop, n, e, arguments.length > 1);
            },
            removeProp: function(n) {
                return this.each(function() {
                    delete this[ln.propFix[n] || n];
                });
            }
        }), ln.extend({
            prop: function(n, e, t) {
                var r, i, o = n.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ln.isXMLDoc(n) || (e = ln.propFix[e] || e, 
                i = ln.propHooks[e]), void 0 !== t ? i && "set" in i && void 0 !== (r = i.set(n, t, e)) ? r : n[e] = t : i && "get" in i && null !== (r = i.get(n, e)) ? r : n[e];
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var e = ln.find.attr(n, "tabindex");
                        return e ? parseInt(e, 10) : ge.test(n.nodeName) || me.test(n.nodeName) && n.href ? 0 : -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), cn.optSelected || (ln.propHooks.selected = {
            get: function(n) {
                var e = n.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(n) {
                var e = n.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            }
        }), ln.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
            ln.propFix[this.toLowerCase()] = this;
        });
        var ve = /[\t\r\n\f]/g;
        ln.fn.extend({
            addClass: function(n) {
                var e, t, r, i, o, a, s, c = 0;
                if (ln.isFunction(n)) return this.each(function(e) {
                    ln(this).addClass(n.call(this, e, V(this)));
                });
                if ("string" == typeof n && n) for (e = n.match(Sn) || []; t = this[c++]; ) if (i = V(t), 
                r = 1 === t.nodeType && (" " + i + " ").replace(ve, " ")) {
                    for (a = 0; o = e[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = ln.trim(r), i !== s && t.setAttribute("class", s);
                }
                return this;
            },
            removeClass: function(n) {
                var e, t, r, i, o, a, s, c = 0;
                if (ln.isFunction(n)) return this.each(function(e) {
                    ln(this).removeClass(n.call(this, e, V(this)));
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof n && n) for (e = n.match(Sn) || []; t = this[c++]; ) if (i = V(t), 
                r = 1 === t.nodeType && (" " + i + " ").replace(ve, " ")) {
                    for (a = 0; o = e[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                    s = ln.trim(r), i !== s && t.setAttribute("class", s);
                }
                return this;
            },
            toggleClass: function(n, e) {
                var t = typeof n;
                return "boolean" == typeof e && "string" === t ? e ? this.addClass(n) : this.removeClass(n) : ln.isFunction(n) ? this.each(function(t) {
                    ln(this).toggleClass(n.call(this, t, V(this), e), e);
                }) : this.each(function() {
                    var e, r, i, o;
                    if ("string" === t) for (r = 0, i = ln(this), o = n.match(Sn) || []; e = o[r++]; ) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== n && "boolean" !== t || (e = V(this), 
                    e && An.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || n === !1 ? "" : An.get(this, "__className__") || ""));
                });
            },
            hasClass: function(n) {
                var e, t, r = 0;
                for (e = " " + n + " "; t = this[r++]; ) if (1 === t.nodeType && (" " + V(t) + " ").replace(ve, " ").indexOf(e) > -1) return !0;
                return !1;
            }
        });
        var ye = /\r/g, $e = /[\x20\t\r\n\f]+/g;
        ln.fn.extend({
            val: function(n) {
                var e, t, r, i = this[0];
                {
                    if (arguments.length) return r = ln.isFunction(n), this.each(function(t) {
                        var i;
                        1 === this.nodeType && (i = r ? n.call(this, t, ln(this).val()) : n, null == i ? i = "" : "number" == typeof i ? i += "" : ln.isArray(i) && (i = ln.map(i, function(n) {
                            return null == n ? "" : n + "";
                        })), e = ln.valHooks[this.type] || ln.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i));
                    });
                    if (i) return e = ln.valHooks[i.type] || ln.valHooks[i.nodeName.toLowerCase()], 
                    e && "get" in e && void 0 !== (t = e.get(i, "value")) ? t : (t = i.value, "string" == typeof t ? t.replace(ye, "") : null == t ? "" : t);
                }
            }
        }), ln.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var e = ln.find.attr(n, "value");
                        return null != e ? e : ln.trim(ln.text(n)).replace($e, " ");
                    }
                },
                select: {
                    get: function(n) {
                        for (var e, t, r = n.options, i = n.selectedIndex, o = "select-one" === n.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, c = i < 0 ? s : o ? i : 0; c < s; c++) if (t = r[c], 
                        (t.selected || c === i) && (cn.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !ln.nodeName(t.parentNode, "optgroup"))) {
                            if (e = ln(t).val(), o) return e;
                            a.push(e);
                        }
                        return a;
                    },
                    set: function(n, e) {
                        for (var t, r, i = n.options, o = ln.makeArray(e), a = i.length; a--; ) r = i[a], 
                        (r.selected = ln.inArray(ln.valHooks.option.get(r), o) > -1) && (t = !0);
                        return t || (n.selectedIndex = -1), o;
                    }
                }
            }
        }), ln.each([ "radio", "checkbox" ], function() {
            ln.valHooks[this] = {
                set: function(n, e) {
                    if (ln.isArray(e)) return n.checked = ln.inArray(ln(n).val(), e) > -1;
                }
            }, cn.checkOn || (ln.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value;
            });
        });
        var we = /^(?:focusinfocus|focusoutblur)$/;
        ln.extend(ln.event, {
            trigger: function(n, e, r, i) {
                var o, a, s, c, u, l, f, d = [ r || Q ], p = sn.call(n, "type") ? n.type : n, h = sn.call(n, "namespace") ? n.namespace.split(".") : [];
                if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !we.test(p + ln.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), 
                p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, n = n[ln.expando] ? n : new ln.Event(p, "object" == typeof n && n), 
                n.isTrigger = i ? 2 : 3, n.namespace = h.join("."), n.rnamespace = n.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                n.result = void 0, n.target || (n.target = r), e = null == e ? [ n ] : ln.makeArray(e, [ n ]), 
                f = ln.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, e) !== !1)) {
                    if (!i && !f.noBubble && !ln.isWindow(r)) {
                        for (c = f.delegateType || p, we.test(c + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
                        s = a;
                        s === (r.ownerDocument || Q) && d.push(s.defaultView || s.parentWindow || t);
                    }
                    for (o = 0; (a = d[o++]) && !n.isPropagationStopped(); ) n.type = o > 1 ? c : f.bindType || p, 
                    l = (An.get(a, "events") || {})[n.type] && An.get(a, "handle"), l && l.apply(a, e), 
                    l = u && a[u], l && l.apply && Tn(a) && (n.result = l.apply(a, e), n.result === !1 && n.preventDefault());
                    return n.type = p, i || n.isDefaultPrevented() || f._default && f._default.apply(d.pop(), e) !== !1 || !Tn(r) || u && ln.isFunction(r[p]) && !ln.isWindow(r) && (s = r[u], 
                    s && (r[u] = null), ln.event.triggered = p, r[p](), ln.event.triggered = void 0, 
                    s && (r[u] = s)), n.result;
                }
            },
            simulate: function(n, e, t) {
                var r = ln.extend(new ln.Event(), t, {
                    type: n,
                    isSimulated: !0
                });
                ln.event.trigger(r, null, e);
            }
        }), ln.fn.extend({
            trigger: function(n, e) {
                return this.each(function() {
                    ln.event.trigger(n, e, this);
                });
            },
            triggerHandler: function(n, e) {
                var t = this[0];
                if (t) return ln.event.trigger(n, e, t, !0);
            }
        }), ln.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, e) {
            ln.fn[e] = function(n, t) {
                return arguments.length > 0 ? this.on(e, null, n, t) : this.trigger(e);
            };
        }), ln.fn.extend({
            hover: function(n, e) {
                return this.mouseenter(n).mouseleave(e || n);
            }
        }), cn.focusin = "onfocusin" in t, cn.focusin || ln.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, e) {
            var t = function(n) {
                ln.event.simulate(e, n.target, ln.event.fix(n));
            };
            ln.event.special[e] = {
                setup: function() {
                    var r = this.ownerDocument || this, i = An.access(r, e);
                    i || r.addEventListener(n, t, !0), An.access(r, e, (i || 0) + 1);
                },
                teardown: function() {
                    var r = this.ownerDocument || this, i = An.access(r, e) - 1;
                    i ? An.access(r, e, i) : (r.removeEventListener(n, t, !0), An.remove(r, e));
                }
            };
        });
        var be = t.location, xe = ln.now(), Ie = /\?/;
        ln.parseJSON = function(n) {
            return JSON.parse(n + "");
        }, ln.parseXML = function(n) {
            var e;
            if (!n || "string" != typeof n) return null;
            try {
                e = new t.DOMParser().parseFromString(n, "text/xml");
            } catch (r) {
                e = void 0;
            }
            return e && !e.getElementsByTagName("parsererror").length || ln.error("Invalid XML: " + n), 
            e;
        };
        var ke = /#.*$/, Ce = /([?&])_=[^&]*/, Se = /^(.*?):[ \t]*([^\r\n]*)$/gm, _e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ee = /^(?:GET|HEAD)$/, Te = /^\/\//, Ae = {}, Oe = {}, Ne = "*/".concat("*"), je = Q.createElement("a");
        je.href = be.href, ln.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: _e.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ne,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ln.parseJSON,
                    "text xml": ln.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, e) {
                return e ? G(G(n, ln.ajaxSettings), e) : G(ln.ajaxSettings, n);
            },
            ajaxPrefilter: z(Ae),
            ajaxTransport: z(Oe),
            ajax: function(n, e) {
                function r(n, e, r, s) {
                    var u, f, y, $, b, I = e;
                    2 !== w && (w = 2, c && t.clearTimeout(c), i = void 0, a = s || "", x.readyState = n > 0 ? 4 : 0, 
                    u = n >= 200 && n < 300 || 304 === n, r && ($ = X(d, x, r)), $ = Y(d, $, x, u), 
                    u ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (ln.lastModified[o] = b), 
                    b = x.getResponseHeader("etag"), b && (ln.etag[o] = b)), 204 === n || "HEAD" === d.type ? I = "nocontent" : 304 === n ? I = "notmodified" : (I = $.state, 
                    f = $.data, y = $.error, u = !y)) : (y = I, !n && I || (I = "error", n < 0 && (n = 0))), 
                    x.status = n, x.statusText = (e || I) + "", u ? g.resolveWith(p, [ f, I, x ]) : g.rejectWith(p, [ x, I, y ]), 
                    x.statusCode(v), v = void 0, l && h.trigger(u ? "ajaxSuccess" : "ajaxError", [ x, d, u ? f : y ]), 
                    m.fireWith(p, [ x, I ]), l && (h.trigger("ajaxComplete", [ x, d ]), --ln.active || ln.event.trigger("ajaxStop")));
                }
                "object" == typeof n && (e = n, n = void 0), e = e || {};
                var i, o, a, s, c, u, l, f, d = ln.ajaxSetup({}, e), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? ln(p) : ln.event, g = ln.Deferred(), m = ln.Callbacks("once memory"), v = d.statusCode || {}, y = {}, $ = {}, w = 0, b = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var e;
                        if (2 === w) {
                            if (!s) for (s = {}; e = Se.exec(a); ) s[e[1].toLowerCase()] = e[2];
                            e = s[n.toLowerCase()];
                        }
                        return null == e ? null : e;
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null;
                    },
                    setRequestHeader: function(n, e) {
                        var t = n.toLowerCase();
                        return w || (n = $[t] = $[t] || n, y[n] = e), this;
                    },
                    overrideMimeType: function(n) {
                        return w || (d.mimeType = n), this;
                    },
                    statusCode: function(n) {
                        var e;
                        if (n) if (w < 2) for (e in n) v[e] = [ v[e], n[e] ]; else x.always(n[x.status]);
                        return this;
                    },
                    abort: function(n) {
                        var e = n || b;
                        return i && i.abort(e), r(0, e), this;
                    }
                };
                if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((n || d.url || be.href) + "").replace(ke, "").replace(Te, be.protocol + "//"), 
                d.type = e.method || e.type || d.method || d.type, d.dataTypes = ln.trim(d.dataType || "*").toLowerCase().match(Sn) || [ "" ], 
                null == d.crossDomain) {
                    u = Q.createElement("a");
                    try {
                        u.href = d.url, u.href = u.href, d.crossDomain = je.protocol + "//" + je.host != u.protocol + "//" + u.host;
                    } catch (I) {
                        d.crossDomain = !0;
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = ln.param(d.data, d.traditional)), 
                W(Ae, d, e, x), 2 === w) return x;
                l = ln.event && d.global, l && 0 === ln.active++ && ln.event.trigger("ajaxStart"), 
                d.type = d.type.toUpperCase(), d.hasContent = !Ee.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ie.test(o) ? "&" : "?") + d.data, 
                delete d.data), d.cache === !1 && (d.url = Ce.test(o) ? o.replace(Ce, "$1_=" + xe++) : o + (Ie.test(o) ? "&" : "?") + "_=" + xe++)), 
                d.ifModified && (ln.lastModified[o] && x.setRequestHeader("If-Modified-Since", ln.lastModified[o]), 
                ln.etag[o] && x.setRequestHeader("If-None-Match", ln.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), 
                x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ne + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers) x.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === w)) return x.abort();
                b = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[f](d[f]);
                if (i = W(Oe, d, e, x)) {
                    if (x.readyState = 1, l && h.trigger("ajaxSend", [ x, d ]), 2 === w) return x;
                    d.async && d.timeout > 0 && (c = t.setTimeout(function() {
                        x.abort("timeout");
                    }, d.timeout));
                    try {
                        w = 1, i.send(y, r);
                    } catch (I) {
                        if (!(w < 2)) throw I;
                        r(-1, I);
                    }
                } else r(-1, "No Transport");
                return x;
            },
            getJSON: function(n, e, t) {
                return ln.get(n, e, t, "json");
            },
            getScript: function(n, e) {
                return ln.get(n, void 0, e, "script");
            }
        }), ln.each([ "get", "post" ], function(n, e) {
            ln[e] = function(n, t, r, i) {
                return ln.isFunction(t) && (i = i || r, r = t, t = void 0), ln.ajax(ln.extend({
                    url: n,
                    type: e,
                    dataType: i,
                    data: t,
                    success: r
                }, ln.isPlainObject(n) && n));
            };
        }), ln._evalUrl = function(n) {
            return ln.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            });
        }, ln.fn.extend({
            wrapAll: function(n) {
                var e;
                return ln.isFunction(n) ? this.each(function(e) {
                    ln(this).wrapAll(n.call(this, e));
                }) : (this[0] && (e = ln(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), 
                e.map(function() {
                    for (var n = this; n.firstElementChild; ) n = n.firstElementChild;
                    return n;
                }).append(this)), this);
            },
            wrapInner: function(n) {
                return ln.isFunction(n) ? this.each(function(e) {
                    ln(this).wrapInner(n.call(this, e));
                }) : this.each(function() {
                    var e = ln(this), t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n);
                });
            },
            wrap: function(n) {
                var e = ln.isFunction(n);
                return this.each(function(t) {
                    ln(this).wrapAll(e ? n.call(this, t) : n);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ln.nodeName(this, "body") || ln(this).replaceWith(this.childNodes);
                }).end();
            }
        }), ln.expr.filters.hidden = function(n) {
            return !ln.expr.filters.visible(n);
        }, ln.expr.filters.visible = function(n) {
            return n.offsetWidth > 0 || n.offsetHeight > 0 || n.getClientRects().length > 0;
        };
        var Pe = /%20/g, Le = /\[\]$/, Me = /\r?\n/g, De = /^(?:submit|button|image|reset|file)$/i, qe = /^(?:input|select|textarea|keygen)/i;
        ln.param = function(n, e) {
            var t, r = [], i = function(n, e) {
                e = ln.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(n) + "=" + encodeURIComponent(e);
            };
            if (void 0 === e && (e = ln.ajaxSettings && ln.ajaxSettings.traditional), ln.isArray(n) || n.jquery && !ln.isPlainObject(n)) ln.each(n, function() {
                i(this.name, this.value);
            }); else for (t in n) J(t, n[t], e, i);
            return r.join("&").replace(Pe, "+");
        }, ln.fn.extend({
            serialize: function() {
                return ln.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = ln.prop(this, "elements");
                    return n ? ln.makeArray(n) : this;
                }).filter(function() {
                    var n = this.type;
                    return this.name && !ln(this).is(":disabled") && qe.test(this.nodeName) && !De.test(n) && (this.checked || !qn.test(n));
                }).map(function(n, e) {
                    var t = ln(this).val();
                    return null == t ? null : ln.isArray(t) ? ln.map(t, function(n) {
                        return {
                            name: e.name,
                            value: n.replace(Me, "\r\n")
                        };
                    }) : {
                        name: e.name,
                        value: t.replace(Me, "\r\n")
                    };
                }).get();
            }
        }), ln.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest();
            } catch (n) {}
        };
        var Re = {
            0: 200,
            1223: 204
        }, Be = ln.ajaxSettings.xhr();
        cn.cors = !!Be && "withCredentials" in Be, cn.ajax = Be = !!Be, ln.ajaxTransport(function(n) {
            var e, r;
            if (cn.cors || Be && !n.crossDomain) return {
                send: function(i, o) {
                    var a, s = n.xhr();
                    if (s.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields) for (a in n.xhrFields) s[a] = n.xhrFields[a];
                    n.mimeType && s.overrideMimeType && s.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) s.setRequestHeader(a, i[a]);
                    e = function(n) {
                        return function() {
                            e && (e = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === n ? s.abort() : "error" === n ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Re[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()));
                        };
                    }, s.onload = e(), r = s.onerror = e("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && t.setTimeout(function() {
                            e && r();
                        });
                    }, e = e("abort");
                    try {
                        s.send(n.hasContent && n.data || null);
                    } catch (c) {
                        if (e) throw c;
                    }
                },
                abort: function() {
                    e && e();
                }
            };
        }), ln.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(n) {
                    return ln.globalEval(n), n;
                }
            }
        }), ln.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1), n.crossDomain && (n.type = "GET");
        }), ln.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var e, t;
                return {
                    send: function(r, i) {
                        e = ln("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function(n) {
                            e.remove(), t = null, n && i("error" === n.type ? 404 : 200, n.type);
                        }), Q.head.appendChild(e[0]);
                    },
                    abort: function() {
                        t && t();
                    }
                };
            }
        });
        var Fe = [], Ue = /(=)\?(?=&|$)|\?\?/;
        ln.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = Fe.pop() || ln.expando + "_" + xe++;
                return this[n] = !0, n;
            }
        }), ln.ajaxPrefilter("json jsonp", function(n, e, r) {
            var i, o, a, s = n.jsonp !== !1 && (Ue.test(n.url) ? "url" : "string" == typeof n.data && 0 === (n.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(n.data) && "data");
            if (s || "jsonp" === n.dataTypes[0]) return i = n.jsonpCallback = ln.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
            s ? n[s] = n[s].replace(Ue, "$1" + i) : n.jsonp !== !1 && (n.url += (Ie.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), 
            n.converters["script json"] = function() {
                return a || ln.error(i + " was not called"), a[0];
            }, n.dataTypes[0] = "json", o = t[i], t[i] = function() {
                a = arguments;
            }, r.always(function() {
                void 0 === o ? ln(t).removeProp(i) : t[i] = o, n[i] && (n.jsonpCallback = e.jsonpCallback, 
                Fe.push(i)), a && ln.isFunction(o) && o(a[0]), a = o = void 0;
            }), "script";
        }), ln.parseHTML = function(n, e, t) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof e && (t = e, e = !1), e = e || Q;
            var r = $n.exec(n), i = !t && [];
            return r ? [ e.createElement(r[1]) ] : (r = m([ n ], e, i), i && i.length && ln(i).remove(), 
            ln.merge([], r.childNodes));
        };
        var He = ln.fn.load;
        ln.fn.load = function(n, e, t) {
            if ("string" != typeof n && He) return He.apply(this, arguments);
            var r, i, o, a = this, s = n.indexOf(" ");
            return s > -1 && (r = ln.trim(n.slice(s)), n = n.slice(0, s)), ln.isFunction(e) ? (t = e, 
            e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && ln.ajax({
                url: n,
                type: i || "GET",
                dataType: "html",
                data: e
            }).done(function(n) {
                o = arguments, a.html(r ? ln("<div>").append(ln.parseHTML(n)).find(r) : n);
            }).always(t && function(n, e) {
                a.each(function() {
                    t.apply(this, o || [ n.responseText, e, n ]);
                });
            }), this;
        }, ln.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(n, e) {
            ln.fn[e] = function(n) {
                return this.on(e, n);
            };
        }), ln.expr.filters.animated = function(n) {
            return ln.grep(ln.timers, function(e) {
                return n === e.elem;
            }).length;
        }, ln.offset = {
            setOffset: function(n, e, t) {
                var r, i, o, a, s, c, u, l = ln.css(n, "position"), f = ln(n), d = {};
                "static" === l && (n.style.position = "relative"), s = f.offset(), o = ln.css(n, "top"), 
                c = ln.css(n, "left"), u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1, 
                u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(c) || 0), 
                ln.isFunction(e) && (e = e.call(n, t, ln.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), 
                null != e.left && (d.left = e.left - s.left + i), "using" in e ? e.using.call(n, d) : f.css(d);
            }
        }, ln.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(e) {
                    ln.offset.setOffset(this, n, e);
                });
                var e, t, r = this[0], i = {
                    top: 0,
                    left: 0
                }, o = r && r.ownerDocument;
                if (o) return e = o.documentElement, ln.contains(e, r) ? (i = r.getBoundingClientRect(), 
                t = K(o), {
                    top: i.top + t.pageYOffset - e.clientTop,
                    left: i.left + t.pageXOffset - e.clientLeft
                }) : i;
            },
            position: function() {
                if (this[0]) {
                    var n, e, t = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === ln.css(t, "position") ? e = t.getBoundingClientRect() : (n = this.offsetParent(), 
                    e = this.offset(), ln.nodeName(n[0], "html") || (r = n.offset()), r.top += ln.css(n[0], "borderTopWidth", !0), 
                    r.left += ln.css(n[0], "borderLeftWidth", !0)), {
                        top: e.top - r.top - ln.css(t, "marginTop", !0),
                        left: e.left - r.left - ln.css(t, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent; n && "static" === ln.css(n, "position"); ) n = n.offsetParent;
                    return n || re;
                });
            }
        }), ln.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, e) {
            var t = "pageYOffset" === e;
            ln.fn[n] = function(r) {
                return En(this, function(n, r, i) {
                    var o = K(n);
                    return void 0 === i ? o ? o[e] : n[r] : void (o ? o.scrollTo(t ? o.pageXOffset : i, t ? i : o.pageYOffset) : n[r] = i);
                }, n, r, arguments.length);
            };
        }), ln.each([ "top", "left" ], function(n, e) {
            ln.cssHooks[e] = O(cn.pixelPosition, function(n, t) {
                if (t) return t = A(n, e), ne.test(t) ? ln(n).position()[e] + "px" : t;
            });
        }), ln.each({
            Height: "height",
            Width: "width"
        }, function(n, e) {
            ln.each({
                padding: "inner" + n,
                content: e,
                "": "outer" + n
            }, function(t, r) {
                ln.fn[r] = function(r, i) {
                    var o = arguments.length && (t || "boolean" != typeof r), a = t || (r === !0 || i === !0 ? "margin" : "border");
                    return En(this, function(e, t, r) {
                        var i;
                        return ln.isWindow(e) ? e.document.documentElement["client" + n] : 9 === e.nodeType ? (i = e.documentElement, 
                        Math.max(e.body["scroll" + n], i["scroll" + n], e.body["offset" + n], i["offset" + n], i["client" + n])) : void 0 === r ? ln.css(e, t, a) : ln.style(e, t, r, a);
                    }, e, o ? r : void 0, o, null);
                };
            });
        }), ln.fn.extend({
            bind: function(n, e, t) {
                return this.on(n, null, e, t);
            },
            unbind: function(n, e) {
                return this.off(n, null, e);
            },
            delegate: function(n, e, t, r) {
                return this.on(e, n, t, r);
            },
            undelegate: function(n, e, t) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(e, n || "**", t);
            },
            size: function() {
                return this.length;
            }
        }), ln.fn.andSelf = ln.fn.addBack, r = [], i = function() {
            return ln;
        }.apply(e, r), !(void 0 !== i && (n.exports = i));
        var Ve = t.jQuery, ze = t.$;
        return ln.noConflict = function(n) {
            return t.$ === ln && (t.$ = ze), n && t.jQuery === ln && (t.jQuery = Ve), ln;
        }, o || (t.jQuery = t.$ = ln), ln;
    });
}, function(n, e, t) {
    var r, i, o;
    !function(a, s) {
        "use strict";
        i = [ t(41), t(42), t(44) ], r = s, o = "function" == typeof r ? r.apply(e, i) : r, 
        !(void 0 !== o && (n.exports = o));
    }(this, function(n, e, t) {
        "use strict";
        return n([ t ], {
            $searchRoot: null,
            insertTemplate: function() {
                var n = this.template;
                "function" == typeof this.template && (n = this.template(this)), this.$wrapper = e(n), 
                e(this.rawNode).replaceWith(this.$wrapper), this.wrapper = this.$wrapper[0];
            },
            mapNodes: function() {
                this.wrapper || (this.wrapper = this.rawNode, this.$wrapper = e(this.wrapper));
                var n = e.extend({}, this.defaultNodeMap, this.nodeMap);
                for (var t in n) {
                    var r = n[t];
                    if (this[t] = r, "string" == typeof r) {
                        var i = this.$searchRoot || this.$wrapper;
                        this[t] = i.find(r);
                    } else "function" == typeof r && (this[t] = r(this));
                }
                this.$wrapper.attr("data-ui-id", this._id);
            },
            remove: function() {
                this.$wrapper && this.$wrapper.remove();
            }
        });
    });
}, function(n, e, t) {
    var r, i, o;
    !function(a, s) {
        "use strict";
        i = [ t(41), t(45) ], r = s, o = "function" == typeof r ? r.apply(e, i) : r, !(void 0 !== o && (n.exports = o));
    }(this, function(n, e) {
        "use strict";
        return n(null, {
            constructor: function(n) {
                if (n = n || {}, this.processRawProps(n), this.preMixinProps(n), this.mixinProps(n), 
                this.rawNode && this.rawNode.getAttribute("data-ui-id")) throw Error("不能在同一元素上重复应用组件");
                this._id = e.addOne(this), this.postMixinProps(), this.preCreateUi(), this.createUi(), 
                this.postCreateUi(), this.preBindEvents(), this.bindEvents(), this.postBindEvents();
            },
            template: null,
            rawNode: null,
            defaultNodeMap: null,
            nodeMap: null,
            processRawProps: function(n) {},
            preMixinProps: function(n) {},
            mixinProps: function(e) {
                e && e.defaultNodeMap && delete e.defaultNodeMap, n.mixin(this, e), this.wrapper = null;
            },
            postMixinProps: function() {},
            preCreateUi: function() {},
            createUi: function() {
                this.template && this.insertTemplate(), this.modifyHtml(this.wrapper || this.rawNode), 
                this.mapNodes();
            },
            insertTemplate: function() {},
            modifyHtml: function(n) {},
            mapNodes: function() {},
            postCreateUi: function() {},
            preBindEvents: function() {},
            bindEvents: function() {},
            postBindEvents: function() {},
            unbindEvents: function() {},
            remove: function() {},
            destroy: function() {
                this.unbindEvents(), this.preRemove(), this.remove(), this.postRemove(), e.removeOne(this._id);
            },
            preRemove: function() {},
            postRemove: function() {},
            set: function(n, e, t) {
                var r = n.charAt(0).toUpperCase() + n.substr(1), i = "_set" + r + "Attr";
                return this[i] ? this[i](e, t) : this[n] = e, this;
            },
            get: function(n, e) {
                var t = n.charAt(0).toUpperCase() + n.substr(1), r = "_get" + t + "Attr";
                return this[r] ? this[r](e) : this[n];
            }
        });
    });
}, function(n, e, t) {
    var r, i;
    (function(o) {
        var a;
        a = "undefined" != typeof window ? window : o, function(o, a) {
            r = a, i = "function" == typeof r ? r.call(e, t, e, n) : r, !(void 0 !== i && (n.exports = i));
        }(this, function() {
            if (a.__webpack_ui_mng) return a.__webpack_ui_mng;
            var n = 0, e = [], t = 0;
            return a.__webpack_ui_mng = {
                addOne: function(r) {
                    var i = n;
                    return e[n++] = r, ++t, i;
                },
                removeOne: function(n) {
                    e[n] && delete e[n], e[n] = null, --t;
                },
                getOne: function(n) {
                    return e[n];
                }
            }, a.__webpack_ui_mng;
        });
    }).call(e, function() {
        return this;
    }());
}, function(n, e) {
    n.exports = [ {
        n: "北京市",
        c: [ {
            n: "东城区"
        }, {
            n: "西城区"
        }, {
            n: "朝阳区"
        }, {
            n: "丰台区"
        }, {
            n: "石景山区"
        }, {
            n: "海淀区"
        }, {
            n: "门头沟区"
        }, {
            n: "房山区"
        }, {
            n: "通州区"
        }, {
            n: "顺义区"
        }, {
            n: "昌平区"
        }, {
            n: "大兴区"
        }, {
            n: "怀柔区"
        }, {
            n: "平谷区"
        }, {
            n: "密云县"
        }, {
            n: "延庆县"
        } ]
    }, {
        n: "天津市",
        c: [ {
            n: "和平区"
        }, {
            n: "河东区"
        }, {
            n: "河西区"
        }, {
            n: "南开区"
        }, {
            n: "河北区"
        }, {
            n: "红桥区"
        }, {
            n: "东丽区"
        }, {
            n: "西青区"
        }, {
            n: "津南区"
        }, {
            n: "北辰区"
        }, {
            n: "武清区"
        }, {
            n: "宝坻区"
        }, {
            n: "滨海新区"
        }, {
            n: "宁河县"
        }, {
            n: "静海县"
        }, {
            n: "蓟县"
        } ]
    }, {
        n: "河北省",
        c: [ {
            n: "石家庄市",
            c: [ {
                n: "市辖区"
            }, {
                n: "长安区"
            }, {
                n: "桥东区"
            }, {
                n: "桥西区"
            }, {
                n: "新华区"
            }, {
                n: "井陉矿区"
            }, {
                n: "裕华区"
            }, {
                n: "井陉县"
            }, {
                n: "正定县"
            }, {
                n: "栾城县"
            }, {
                n: "行唐县"
            }, {
                n: "灵寿县"
            }, {
                n: "高邑县"
            }, {
                n: "深泽县"
            }, {
                n: "赞皇县"
            }, {
                n: "无极县"
            }, {
                n: "平山县"
            }, {
                n: "元氏县"
            }, {
                n: "赵县"
            }, {
                n: "辛集市"
            }, {
                n: "藁城市"
            }, {
                n: "晋州市"
            }, {
                n: "新乐市"
            }, {
                n: "鹿泉市"
            } ]
        }, {
            n: "唐山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "路南区"
            }, {
                n: "路北区"
            }, {
                n: "古冶区"
            }, {
                n: "开平区"
            }, {
                n: "丰南区"
            }, {
                n: "丰润区"
            }, {
                n: "曹妃甸区"
            }, {
                n: "滦县"
            }, {
                n: "滦南县"
            }, {
                n: "乐亭县"
            }, {
                n: "迁西县"
            }, {
                n: "玉田县"
            }, {
                n: "遵化市"
            }, {
                n: "迁安市"
            } ]
        }, {
            n: "秦皇岛市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海港区"
            }, {
                n: "山海关区"
            }, {
                n: "北戴河区"
            }, {
                n: "青龙满族自治县"
            }, {
                n: "昌黎县"
            }, {
                n: "抚宁县"
            }, {
                n: "卢龙县"
            } ]
        }, {
            n: "邯郸市",
            c: [ {
                n: "市辖区"
            }, {
                n: "邯山区"
            }, {
                n: "丛台区"
            }, {
                n: "复兴区"
            }, {
                n: "峰峰矿区"
            }, {
                n: "邯郸县"
            }, {
                n: "临漳县"
            }, {
                n: "成安县"
            }, {
                n: "大名县"
            }, {
                n: "涉县"
            }, {
                n: "磁县"
            }, {
                n: "肥乡县"
            }, {
                n: "永年县"
            }, {
                n: "邱县"
            }, {
                n: "鸡泽县"
            }, {
                n: "广平县"
            }, {
                n: "馆陶县"
            }, {
                n: "魏县"
            }, {
                n: "曲周县"
            }, {
                n: "武安市"
            } ]
        }, {
            n: "邢台市",
            c: [ {
                n: "市辖区"
            }, {
                n: "桥东区"
            }, {
                n: "桥西区"
            }, {
                n: "邢台县"
            }, {
                n: "临城县"
            }, {
                n: "内丘县"
            }, {
                n: "柏乡县"
            }, {
                n: "隆尧县"
            }, {
                n: "任县"
            }, {
                n: "南和县"
            }, {
                n: "宁晋县"
            }, {
                n: "巨鹿县"
            }, {
                n: "新河县"
            }, {
                n: "广宗县"
            }, {
                n: "平乡县"
            }, {
                n: "威县"
            }, {
                n: "清河县"
            }, {
                n: "临西县"
            }, {
                n: "南宫市"
            }, {
                n: "沙河市"
            } ]
        }, {
            n: "保定市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新市区"
            }, {
                n: "北市区"
            }, {
                n: "南市区"
            }, {
                n: "满城县"
            }, {
                n: "清苑县"
            }, {
                n: "涞水县"
            }, {
                n: "阜平县"
            }, {
                n: "徐水县"
            }, {
                n: "定兴县"
            }, {
                n: "唐县"
            }, {
                n: "高阳县"
            }, {
                n: "容城县"
            }, {
                n: "涞源县"
            }, {
                n: "望都县"
            }, {
                n: "安新县"
            }, {
                n: "易县"
            }, {
                n: "曲阳县"
            }, {
                n: "蠡县"
            }, {
                n: "顺平县"
            }, {
                n: "博野县"
            }, {
                n: "雄县"
            }, {
                n: "涿州市"
            }, {
                n: "定州市"
            }, {
                n: "安国市"
            }, {
                n: "高碑店市"
            } ]
        }, {
            n: "张家口市",
            c: [ {
                n: "市辖区"
            }, {
                n: "桥东区"
            }, {
                n: "桥西区"
            }, {
                n: "宣化区"
            }, {
                n: "下花园区"
            }, {
                n: "宣化县"
            }, {
                n: "张北县"
            }, {
                n: "康保县"
            }, {
                n: "沽源县"
            }, {
                n: "尚义县"
            }, {
                n: "蔚县"
            }, {
                n: "阳原县"
            }, {
                n: "怀安县"
            }, {
                n: "万全县"
            }, {
                n: "怀来县"
            }, {
                n: "涿鹿县"
            }, {
                n: "赤城县"
            }, {
                n: "崇礼县"
            } ]
        }, {
            n: "承德市",
            c: [ {
                n: "市辖区"
            }, {
                n: "双桥区"
            }, {
                n: "双滦区"
            }, {
                n: "鹰手营子矿区"
            }, {
                n: "承德县"
            }, {
                n: "兴隆县"
            }, {
                n: "平泉县"
            }, {
                n: "滦平县"
            }, {
                n: "隆化县"
            }, {
                n: "丰宁满族自治县"
            }, {
                n: "宽城满族自治县"
            }, {
                n: "围场满族蒙古族自治县"
            } ]
        }, {
            n: "沧州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新华区"
            }, {
                n: "运河区"
            }, {
                n: "沧县"
            }, {
                n: "青县"
            }, {
                n: "东光县"
            }, {
                n: "海兴县"
            }, {
                n: "盐山县"
            }, {
                n: "肃宁县"
            }, {
                n: "南皮县"
            }, {
                n: "吴桥县"
            }, {
                n: "献县"
            }, {
                n: "孟村回族自治县"
            }, {
                n: "泊头市"
            }, {
                n: "任丘市"
            }, {
                n: "黄骅市"
            }, {
                n: "河间市"
            } ]
        }, {
            n: "廊坊市",
            c: [ {
                n: "市辖区"
            }, {
                n: "安次区"
            }, {
                n: "广阳区"
            }, {
                n: "固安县"
            }, {
                n: "永清县"
            }, {
                n: "香河县"
            }, {
                n: "大城县"
            }, {
                n: "文安县"
            }, {
                n: "大厂回族自治县"
            }, {
                n: "霸州市"
            }, {
                n: "三河市"
            } ]
        }, {
            n: "衡水市",
            c: [ {
                n: "市辖区"
            }, {
                n: "桃城区"
            }, {
                n: "枣强县"
            }, {
                n: "武邑县"
            }, {
                n: "武强县"
            }, {
                n: "饶阳县"
            }, {
                n: "安平县"
            }, {
                n: "故城县"
            }, {
                n: "景县"
            }, {
                n: "阜城县"
            }, {
                n: "冀州市"
            }, {
                n: "深州市"
            } ]
        } ]
    }, {
        n: "山西省",
        c: [ {
            n: "太原市",
            c: [ {
                n: "市辖区"
            }, {
                n: "小店区"
            }, {
                n: "迎泽区"
            }, {
                n: "杏花岭区"
            }, {
                n: "尖草坪区"
            }, {
                n: "万柏林区"
            }, {
                n: "晋源区"
            }, {
                n: "清徐县"
            }, {
                n: "阳曲县"
            }, {
                n: "娄烦县"
            }, {
                n: "古交市"
            } ]
        }, {
            n: "大同市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城区"
            }, {
                n: "矿区"
            }, {
                n: "南郊区"
            }, {
                n: "新荣区"
            }, {
                n: "阳高县"
            }, {
                n: "天镇县"
            }, {
                n: "广灵县"
            }, {
                n: "灵丘县"
            }, {
                n: "浑源县"
            }, {
                n: "左云县"
            }, {
                n: "大同县"
            } ]
        }, {
            n: "阳泉市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城区"
            }, {
                n: "矿区"
            }, {
                n: "郊区"
            }, {
                n: "平定县"
            }, {
                n: "盂县"
            } ]
        }, {
            n: "长治市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城区"
            }, {
                n: "郊区"
            }, {
                n: "长治县"
            }, {
                n: "襄垣县"
            }, {
                n: "屯留县"
            }, {
                n: "平顺县"
            }, {
                n: "黎城县"
            }, {
                n: "壶关县"
            }, {
                n: "长子县"
            }, {
                n: "武乡县"
            }, {
                n: "沁县"
            }, {
                n: "沁源县"
            }, {
                n: "潞城市"
            } ]
        }, {
            n: "晋城市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城区"
            }, {
                n: "沁水县"
            }, {
                n: "阳城县"
            }, {
                n: "陵川县"
            }, {
                n: "泽州县"
            }, {
                n: "高平市"
            } ]
        }, {
            n: "朔州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "朔城区"
            }, {
                n: "平鲁区"
            }, {
                n: "山阴县"
            }, {
                n: "应县"
            }, {
                n: "右玉县"
            }, {
                n: "怀仁县"
            } ]
        }, {
            n: "晋中市",
            c: [ {
                n: "市辖区"
            }, {
                n: "榆次区"
            }, {
                n: "榆社县"
            }, {
                n: "左权县"
            }, {
                n: "和顺县"
            }, {
                n: "昔阳县"
            }, {
                n: "寿阳县"
            }, {
                n: "太谷县"
            }, {
                n: "祁县"
            }, {
                n: "平遥县"
            }, {
                n: "灵石县"
            }, {
                n: "介休市"
            } ]
        }, {
            n: "运城市",
            c: [ {
                n: "市辖区"
            }, {
                n: "盐湖区"
            }, {
                n: "临猗县"
            }, {
                n: "万荣县"
            }, {
                n: "闻喜县"
            }, {
                n: "稷山县"
            }, {
                n: "新绛县"
            }, {
                n: "绛县"
            }, {
                n: "垣曲县"
            }, {
                n: "夏县"
            }, {
                n: "平陆县"
            }, {
                n: "芮城县"
            }, {
                n: "永济市"
            }, {
                n: "河津市"
            } ]
        }, {
            n: "忻州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "忻府区"
            }, {
                n: "定襄县"
            }, {
                n: "五台县"
            }, {
                n: "代县"
            }, {
                n: "繁峙县"
            }, {
                n: "宁武县"
            }, {
                n: "静乐县"
            }, {
                n: "神池县"
            }, {
                n: "五寨县"
            }, {
                n: "岢岚县"
            }, {
                n: "河曲县"
            }, {
                n: "保德县"
            }, {
                n: "偏关县"
            }, {
                n: "原平市"
            } ]
        }, {
            n: "临汾市",
            c: [ {
                n: "市辖区"
            }, {
                n: "尧都区"
            }, {
                n: "曲沃县"
            }, {
                n: "翼城县"
            }, {
                n: "襄汾县"
            }, {
                n: "洪洞县"
            }, {
                n: "古县"
            }, {
                n: "安泽县"
            }, {
                n: "浮山县"
            }, {
                n: "吉县"
            }, {
                n: "乡宁县"
            }, {
                n: "大宁县"
            }, {
                n: "隰县"
            }, {
                n: "永和县"
            }, {
                n: "蒲县"
            }, {
                n: "汾西县"
            }, {
                n: "侯马市"
            }, {
                n: "霍州市"
            } ]
        }, {
            n: "吕梁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "离石区"
            }, {
                n: "文水县"
            }, {
                n: "交城县"
            }, {
                n: "兴县"
            }, {
                n: "临县"
            }, {
                n: "柳林县"
            }, {
                n: "石楼县"
            }, {
                n: "岚县"
            }, {
                n: "方山县"
            }, {
                n: "中阳县"
            }, {
                n: "交口县"
            }, {
                n: "孝义市"
            }, {
                n: "汾阳市"
            } ]
        } ]
    }, {
        n: "内蒙古自治区",
        c: [ {
            n: "呼和浩特市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新城区"
            }, {
                n: "回民区"
            }, {
                n: "玉泉区"
            }, {
                n: "赛罕区"
            }, {
                n: "土默特左旗"
            }, {
                n: "托克托县"
            }, {
                n: "和林格尔县"
            }, {
                n: "清水河县"
            }, {
                n: "武川县"
            } ]
        }, {
            n: "包头市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东河区"
            }, {
                n: "昆都仑区"
            }, {
                n: "青山区"
            }, {
                n: "石拐区"
            }, {
                n: "白云鄂博矿区"
            }, {
                n: "九原区"
            }, {
                n: "土默特右旗"
            }, {
                n: "固阳县"
            }, {
                n: "达尔罕茂明安联合旗"
            } ]
        }, {
            n: "乌海市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海勃湾区"
            }, {
                n: "海南区"
            }, {
                n: "乌达区"
            } ]
        }, {
            n: "赤峰市",
            c: [ {
                n: "市辖区"
            }, {
                n: "红山区"
            }, {
                n: "元宝山区"
            }, {
                n: "松山区"
            }, {
                n: "阿鲁科尔沁旗"
            }, {
                n: "巴林左旗"
            }, {
                n: "巴林右旗"
            }, {
                n: "林西县"
            }, {
                n: "克什克腾旗"
            }, {
                n: "翁牛特旗"
            }, {
                n: "喀喇沁旗"
            }, {
                n: "宁城县"
            }, {
                n: "敖汉旗"
            } ]
        }, {
            n: "通辽市",
            c: [ {
                n: "市辖区"
            }, {
                n: "科尔沁区"
            }, {
                n: "科尔沁左翼中旗"
            }, {
                n: "科尔沁左翼后旗"
            }, {
                n: "开鲁县"
            }, {
                n: "库伦旗"
            }, {
                n: "奈曼旗"
            }, {
                n: "扎鲁特旗"
            }, {
                n: "霍林郭勒市"
            } ]
        }, {
            n: "鄂尔多斯市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东胜区"
            }, {
                n: "达拉特旗"
            }, {
                n: "准格尔旗"
            }, {
                n: "鄂托克前旗"
            }, {
                n: "鄂托克旗"
            }, {
                n: "杭锦旗"
            }, {
                n: "乌审旗"
            }, {
                n: "伊金霍洛旗"
            } ]
        }, {
            n: "呼伦贝尔市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海拉尔区"
            }, {
                n: "扎赉诺尔区"
            }, {
                n: "阿荣旗"
            }, {
                n: "莫力达瓦达斡尔族自治旗"
            }, {
                n: "鄂伦春自治旗"
            }, {
                n: "鄂温克族自治旗"
            }, {
                n: "陈巴尔虎旗"
            }, {
                n: "新巴尔虎左旗"
            }, {
                n: "新巴尔虎右旗"
            }, {
                n: "满洲里市"
            }, {
                n: "牙克石市"
            }, {
                n: "扎兰屯市"
            }, {
                n: "额尔古纳市"
            }, {
                n: "根河市"
            } ]
        }, {
            n: "巴彦淖尔市",
            c: [ {
                n: "市辖区"
            }, {
                n: "临河区"
            }, {
                n: "五原县"
            }, {
                n: "磴口县"
            }, {
                n: "乌拉特前旗"
            }, {
                n: "乌拉特中旗"
            }, {
                n: "乌拉特后旗"
            }, {
                n: "杭锦后旗"
            } ]
        }, {
            n: "乌兰察布市",
            c: [ {
                n: "市辖区"
            }, {
                n: "集宁区"
            }, {
                n: "卓资县"
            }, {
                n: "化德县"
            }, {
                n: "商都县"
            }, {
                n: "兴和县"
            }, {
                n: "凉城县"
            }, {
                n: "察哈尔右翼前旗"
            }, {
                n: "察哈尔右翼中旗"
            }, {
                n: "察哈尔右翼后旗"
            }, {
                n: "四子王旗"
            }, {
                n: "丰镇市"
            } ]
        }, {
            n: "兴安盟",
            c: [ {
                n: "乌兰浩特市"
            }, {
                n: "阿尔山市"
            }, {
                n: "科尔沁右翼前旗"
            }, {
                n: "科尔沁右翼中旗"
            }, {
                n: "扎赉特旗"
            }, {
                n: "突泉县"
            } ]
        }, {
            n: "锡林郭勒盟",
            c: [ {
                n: "二连浩特市"
            }, {
                n: "锡林浩特市"
            }, {
                n: "阿巴嘎旗"
            }, {
                n: "苏尼特左旗"
            }, {
                n: "苏尼特右旗"
            }, {
                n: "东乌珠穆沁旗"
            }, {
                n: "西乌珠穆沁旗"
            }, {
                n: "太仆寺旗"
            }, {
                n: "镶黄旗"
            }, {
                n: "正镶白旗"
            }, {
                n: "正蓝旗"
            }, {
                n: "多伦县"
            } ]
        }, {
            n: "阿拉善盟",
            c: [ {
                n: "阿拉善左旗"
            }, {
                n: "阿拉善右旗"
            }, {
                n: "额济纳旗"
            } ]
        } ]
    }, {
        n: "辽宁省",
        c: [ {
            n: "沈阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "和平区"
            }, {
                n: "沈河区"
            }, {
                n: "大东区"
            }, {
                n: "皇姑区"
            }, {
                n: "铁西区"
            }, {
                n: "苏家屯区"
            }, {
                n: "东陵区"
            }, {
                n: "沈北新区"
            }, {
                n: "于洪区"
            }, {
                n: "辽中县"
            }, {
                n: "康平县"
            }, {
                n: "法库县"
            }, {
                n: "新民市"
            } ]
        }, {
            n: "大连市",
            c: [ {
                n: "市辖区"
            }, {
                n: "中山区"
            }, {
                n: "西岗区"
            }, {
                n: "沙河口区"
            }, {
                n: "甘井子区"
            }, {
                n: "旅顺口区"
            }, {
                n: "金州区"
            }, {
                n: "长海县"
            }, {
                n: "瓦房店市"
            }, {
                n: "普兰店市"
            }, {
                n: "庄河市"
            } ]
        }, {
            n: "鞍山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "铁东区"
            }, {
                n: "铁西区"
            }, {
                n: "立山区"
            }, {
                n: "千山区"
            }, {
                n: "台安县"
            }, {
                n: "岫岩满族自治县"
            }, {
                n: "海城市"
            } ]
        }, {
            n: "抚顺市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新抚区"
            }, {
                n: "东洲区"
            }, {
                n: "望花区"
            }, {
                n: "顺城区"
            }, {
                n: "抚顺县"
            }, {
                n: "新宾满族自治县"
            }, {
                n: "清原满族自治县"
            } ]
        }, {
            n: "本溪市",
            c: [ {
                n: "市辖区"
            }, {
                n: "平山区"
            }, {
                n: "溪湖区"
            }, {
                n: "明山区"
            }, {
                n: "南芬区"
            }, {
                n: "本溪满族自治县"
            }, {
                n: "桓仁满族自治县"
            } ]
        }, {
            n: "丹东市",
            c: [ {
                n: "市辖区"
            }, {
                n: "元宝区"
            }, {
                n: "振兴区"
            }, {
                n: "振安区"
            }, {
                n: "宽甸满族自治县"
            }, {
                n: "东港市"
            }, {
                n: "凤城市"
            } ]
        }, {
            n: "锦州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "古塔区"
            }, {
                n: "凌河区"
            }, {
                n: "太和区"
            }, {
                n: "黑山县"
            }, {
                n: "义县"
            }, {
                n: "凌海市"
            }, {
                n: "北镇市"
            } ]
        }, {
            n: "营口市",
            c: [ {
                n: "市辖区"
            }, {
                n: "站前区"
            }, {
                n: "西市区"
            }, {
                n: "鲅鱼圈区"
            }, {
                n: "老边区"
            }, {
                n: "盖州市"
            }, {
                n: "大石桥市"
            } ]
        }, {
            n: "阜新市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海州区"
            }, {
                n: "新邱区"
            }, {
                n: "太平区"
            }, {
                n: "清河门区"
            }, {
                n: "细河区"
            }, {
                n: "阜新蒙古族自治县"
            }, {
                n: "彰武县"
            } ]
        }, {
            n: "辽阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "白塔区"
            }, {
                n: "文圣区"
            }, {
                n: "宏伟区"
            }, {
                n: "弓长岭区"
            }, {
                n: "太子河区"
            }, {
                n: "辽阳县"
            }, {
                n: "灯塔市"
            } ]
        }, {
            n: "盘锦市",
            c: [ {
                n: "市辖区"
            }, {
                n: "双台子区"
            }, {
                n: "兴隆台区"
            }, {
                n: "大洼县"
            }, {
                n: "盘山县"
            } ]
        }, {
            n: "铁岭市",
            c: [ {
                n: "市辖区"
            }, {
                n: "银州区"
            }, {
                n: "清河区"
            }, {
                n: "铁岭县"
            }, {
                n: "西丰县"
            }, {
                n: "昌图县"
            }, {
                n: "调兵山市"
            }, {
                n: "开原市"
            } ]
        }, {
            n: "朝阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "双塔区"
            }, {
                n: "龙城区"
            }, {
                n: "朝阳县"
            }, {
                n: "建平县"
            }, {
                n: "喀喇沁左翼蒙古族自治县"
            }, {
                n: "北票市"
            }, {
                n: "凌源市"
            } ]
        }, {
            n: "葫芦岛市",
            c: [ {
                n: "市辖区"
            }, {
                n: "连山区"
            }, {
                n: "龙港区"
            }, {
                n: "南票区"
            }, {
                n: "绥中县"
            }, {
                n: "建昌县"
            }, {
                n: "兴城市"
            } ]
        } ]
    }, {
        n: "吉林省",
        c: [ {
            n: "长春市",
            c: [ {
                n: "市辖区"
            }, {
                n: "南关区"
            }, {
                n: "宽城区"
            }, {
                n: "朝阳区"
            }, {
                n: "二道区"
            }, {
                n: "绿园区"
            }, {
                n: "双阳区"
            }, {
                n: "农安县"
            }, {
                n: "九台市"
            }, {
                n: "榆树市"
            }, {
                n: "德惠市"
            } ]
        }, {
            n: "吉林市",
            c: [ {
                n: "市辖区"
            }, {
                n: "昌邑区"
            }, {
                n: "龙潭区"
            }, {
                n: "船营区"
            }, {
                n: "丰满区"
            }, {
                n: "永吉县"
            }, {
                n: "蛟河市"
            }, {
                n: "桦甸市"
            }, {
                n: "舒兰市"
            }, {
                n: "磐石市"
            } ]
        }, {
            n: "四平市",
            c: [ {
                n: "市辖区"
            }, {
                n: "铁西区"
            }, {
                n: "铁东区"
            }, {
                n: "梨树县"
            }, {
                n: "伊通满族自治县"
            }, {
                n: "公主岭市"
            }, {
                n: "双辽市"
            } ]
        }, {
            n: "辽源市",
            c: [ {
                n: "市辖区"
            }, {
                n: "龙山区"
            }, {
                n: "西安区"
            }, {
                n: "东丰县"
            }, {
                n: "东辽县"
            } ]
        }, {
            n: "通化市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东昌区"
            }, {
                n: "二道江区"
            }, {
                n: "通化县"
            }, {
                n: "辉南县"
            }, {
                n: "柳河县"
            }, {
                n: "梅河口市"
            }, {
                n: "集安市"
            } ]
        }, {
            n: "白山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "浑江区"
            }, {
                n: "江源区"
            }, {
                n: "抚松县"
            }, {
                n: "靖宇县"
            }, {
                n: "长白朝鲜族自治县"
            }, {
                n: "临江市"
            } ]
        }, {
            n: "松原市",
            c: [ {
                n: "市辖区"
            }, {
                n: "宁江区"
            }, {
                n: "前郭尔罗斯蒙古族自治县"
            }, {
                n: "长岭县"
            }, {
                n: "乾安县"
            }, {
                n: "扶余市"
            } ]
        }, {
            n: "白城市",
            c: [ {
                n: "市辖区"
            }, {
                n: "洮北区"
            }, {
                n: "镇赉县"
            }, {
                n: "通榆县"
            }, {
                n: "洮南市"
            }, {
                n: "大安市"
            } ]
        }, {
            n: "延边朝鲜族自治州",
            c: [ {
                n: "延吉市"
            }, {
                n: "图们市"
            }, {
                n: "敦化市"
            }, {
                n: "珲春市"
            }, {
                n: "龙井市"
            }, {
                n: "和龙市"
            }, {
                n: "汪清县"
            }, {
                n: "安图县"
            } ]
        } ]
    }, {
        n: "黑龙江省",
        c: [ {
            n: "哈尔滨市",
            c: [ {
                n: "市辖区"
            }, {
                n: "道里区"
            }, {
                n: "南岗区"
            }, {
                n: "道外区"
            }, {
                n: "平房区"
            }, {
                n: "松北区"
            }, {
                n: "香坊区"
            }, {
                n: "呼兰区"
            }, {
                n: "阿城区"
            }, {
                n: "依兰县"
            }, {
                n: "方正县"
            }, {
                n: "宾县"
            }, {
                n: "巴彦县"
            }, {
                n: "木兰县"
            }, {
                n: "通河县"
            }, {
                n: "延寿县"
            }, {
                n: "双城市"
            }, {
                n: "尚志市"
            }, {
                n: "五常市"
            } ]
        }, {
            n: "齐齐哈尔市",
            c: [ {
                n: "市辖区"
            }, {
                n: "龙沙区"
            }, {
                n: "建华区"
            }, {
                n: "铁锋区"
            }, {
                n: "昂昂溪区"
            }, {
                n: "富拉尔基区"
            }, {
                n: "碾子山区"
            }, {
                n: "梅里斯达斡尔族区"
            }, {
                n: "龙江县"
            }, {
                n: "依安县"
            }, {
                n: "泰来县"
            }, {
                n: "甘南县"
            }, {
                n: "富裕县"
            }, {
                n: "克山县"
            }, {
                n: "克东县"
            }, {
                n: "拜泉县"
            }, {
                n: "讷河市"
            } ]
        }, {
            n: "鸡西市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鸡冠区"
            }, {
                n: "恒山区"
            }, {
                n: "滴道区"
            }, {
                n: "梨树区"
            }, {
                n: "城子河区"
            }, {
                n: "麻山区"
            }, {
                n: "鸡东县"
            }, {
                n: "虎林市"
            }, {
                n: "密山市"
            } ]
        }, {
            n: "鹤岗市",
            c: [ {
                n: "市辖区"
            }, {
                n: "向阳区"
            }, {
                n: "工农区"
            }, {
                n: "南山区"
            }, {
                n: "兴安区"
            }, {
                n: "东山区"
            }, {
                n: "兴山区"
            }, {
                n: "萝北县"
            }, {
                n: "绥滨县"
            } ]
        }, {
            n: "双鸭山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "尖山区"
            }, {
                n: "岭东区"
            }, {
                n: "四方台区"
            }, {
                n: "宝山区"
            }, {
                n: "集贤县"
            }, {
                n: "友谊县"
            }, {
                n: "宝清县"
            }, {
                n: "饶河县"
            } ]
        }, {
            n: "大庆市",
            c: [ {
                n: "市辖区"
            }, {
                n: "萨尔图区"
            }, {
                n: "龙凤区"
            }, {
                n: "让胡路区"
            }, {
                n: "红岗区"
            }, {
                n: "大同区"
            }, {
                n: "肇州县"
            }, {
                n: "肇源县"
            }, {
                n: "林甸县"
            }, {
                n: "杜尔伯特蒙古族自治县"
            } ]
        }, {
            n: "伊春市",
            c: [ {
                n: "市辖区"
            }, {
                n: "伊春区"
            }, {
                n: "南岔区"
            }, {
                n: "友好区"
            }, {
                n: "西林区"
            }, {
                n: "翠峦区"
            }, {
                n: "新青区"
            }, {
                n: "美溪区"
            }, {
                n: "金山屯区"
            }, {
                n: "五营区"
            }, {
                n: "乌马河区"
            }, {
                n: "汤旺河区"
            }, {
                n: "带岭区"
            }, {
                n: "乌伊岭区"
            }, {
                n: "红星区"
            }, {
                n: "上甘岭区"
            }, {
                n: "嘉荫县"
            }, {
                n: "铁力市"
            } ]
        }, {
            n: "佳木斯市",
            c: [ {
                n: "市辖区"
            }, {
                n: "向阳区"
            }, {
                n: "前进区"
            }, {
                n: "东风区"
            }, {
                n: "郊区"
            }, {
                n: "桦南县"
            }, {
                n: "桦川县"
            }, {
                n: "汤原县"
            }, {
                n: "抚远县"
            }, {
                n: "同江市"
            }, {
                n: "富锦市"
            } ]
        }, {
            n: "七台河市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新兴区"
            }, {
                n: "桃山区"
            }, {
                n: "茄子河区"
            }, {
                n: "勃利县"
            } ]
        }, {
            n: "牡丹江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东安区"
            }, {
                n: "阳明区"
            }, {
                n: "爱民区"
            }, {
                n: "西安区"
            }, {
                n: "东宁县"
            }, {
                n: "林口县"
            }, {
                n: "绥芬河市"
            }, {
                n: "海林市"
            }, {
                n: "宁安市"
            }, {
                n: "穆棱市"
            } ]
        }, {
            n: "黑河市",
            c: [ {
                n: "市辖区"
            }, {
                n: "爱辉区"
            }, {
                n: "嫩江县"
            }, {
                n: "逊克县"
            }, {
                n: "孙吴县"
            }, {
                n: "北安市"
            }, {
                n: "五大连池市"
            } ]
        }, {
            n: "绥化市",
            c: [ {
                n: "市辖区"
            }, {
                n: "北林区"
            }, {
                n: "望奎县"
            }, {
                n: "兰西县"
            }, {
                n: "青冈县"
            }, {
                n: "庆安县"
            }, {
                n: "明水县"
            }, {
                n: "绥棱县"
            }, {
                n: "安达市"
            }, {
                n: "肇东市"
            }, {
                n: "海伦市"
            } ]
        }, {
            n: "大兴安岭地区",
            c: [ {
                n: "呼玛县"
            }, {
                n: "塔河县"
            }, {
                n: "漠河县"
            } ]
        } ]
    }, {
        n: "上海市",
        c: [ {
            n: "黄浦区"
        }, {
            n: "徐汇区"
        }, {
            n: "长宁区"
        }, {
            n: "静安区"
        }, {
            n: "普陀区"
        }, {
            n: "闸北区"
        }, {
            n: "虹口区"
        }, {
            n: "杨浦区"
        }, {
            n: "闵行区"
        }, {
            n: "宝山区"
        }, {
            n: "嘉定区"
        }, {
            n: "浦东新区"
        }, {
            n: "金山区"
        }, {
            n: "松江区"
        }, {
            n: "青浦区"
        }, {
            n: "奉贤区"
        }, {
            n: "崇明县"
        } ]
    }, {
        n: "江苏省",
        c: [ {
            n: "南京市",
            c: [ {
                n: "市辖区"
            }, {
                n: "玄武区"
            }, {
                n: "秦淮区"
            }, {
                n: "建邺区"
            }, {
                n: "鼓楼区"
            }, {
                n: "浦口区"
            }, {
                n: "栖霞区"
            }, {
                n: "雨花台区"
            }, {
                n: "江宁区"
            }, {
                n: "六合区"
            }, {
                n: "溧水区"
            }, {
                n: "高淳区"
            } ]
        }, {
            n: "无锡市",
            c: [ {
                n: "市辖区"
            }, {
                n: "崇安区"
            }, {
                n: "南长区"
            }, {
                n: "北塘区"
            }, {
                n: "锡山区"
            }, {
                n: "惠山区"
            }, {
                n: "滨湖区"
            }, {
                n: "江阴市"
            }, {
                n: "宜兴市"
            } ]
        }, {
            n: "徐州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鼓楼区"
            }, {
                n: "云龙区"
            }, {
                n: "贾汪区"
            }, {
                n: "泉山区"
            }, {
                n: "铜山区"
            }, {
                n: "丰县"
            }, {
                n: "沛县"
            }, {
                n: "睢宁县"
            }, {
                n: "新沂市"
            }, {
                n: "邳州市"
            } ]
        }, {
            n: "常州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "天宁区"
            }, {
                n: "钟楼区"
            }, {
                n: "戚墅堰区"
            }, {
                n: "新北区"
            }, {
                n: "武进区"
            }, {
                n: "溧阳市"
            }, {
                n: "金坛市"
            } ]
        }, {
            n: "苏州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "虎丘区"
            }, {
                n: "吴中区"
            }, {
                n: "相城区"
            }, {
                n: "姑苏区"
            }, {
                n: "吴江区"
            }, {
                n: "常熟市"
            }, {
                n: "张家港市"
            }, {
                n: "昆山市"
            }, {
                n: "太仓市"
            } ]
        }, {
            n: "南通市",
            c: [ {
                n: "市辖区"
            }, {
                n: "崇川区"
            }, {
                n: "港闸区"
            }, {
                n: "通州区"
            }, {
                n: "海安县"
            }, {
                n: "如东县"
            }, {
                n: "启东市"
            }, {
                n: "如皋市"
            }, {
                n: "海门市"
            } ]
        }, {
            n: "连云港市",
            c: [ {
                n: "市辖区"
            }, {
                n: "连云区"
            }, {
                n: "新浦区"
            }, {
                n: "海州区"
            }, {
                n: "赣榆县"
            }, {
                n: "东海县"
            }, {
                n: "灌云县"
            }, {
                n: "灌南县"
            } ]
        }, {
            n: "淮安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "清河区"
            }, {
                n: "淮安区"
            }, {
                n: "淮阴区"
            }, {
                n: "清浦区"
            }, {
                n: "涟水县"
            }, {
                n: "洪泽县"
            }, {
                n: "盱眙县"
            }, {
                n: "金湖县"
            } ]
        }, {
            n: "盐城市",
            c: [ {
                n: "市辖区"
            }, {
                n: "亭湖区"
            }, {
                n: "盐都区"
            }, {
                n: "响水县"
            }, {
                n: "滨海县"
            }, {
                n: "阜宁县"
            }, {
                n: "射阳县"
            }, {
                n: "建湖县"
            }, {
                n: "东台市"
            }, {
                n: "大丰市"
            } ]
        }, {
            n: "扬州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "广陵区"
            }, {
                n: "邗江区"
            }, {
                n: "江都区"
            }, {
                n: "宝应县"
            }, {
                n: "仪征市"
            }, {
                n: "高邮市"
            } ]
        }, {
            n: "镇江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "京口区"
            }, {
                n: "润州区"
            }, {
                n: "丹徒区"
            }, {
                n: "丹阳市"
            }, {
                n: "扬中市"
            }, {
                n: "句容市"
            } ]
        }, {
            n: "泰州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海陵区"
            }, {
                n: "高港区"
            }, {
                n: "姜堰区"
            }, {
                n: "兴化市"
            }, {
                n: "靖江市"
            }, {
                n: "泰兴市"
            } ]
        }, {
            n: "宿迁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "宿城区"
            }, {
                n: "宿豫区"
            }, {
                n: "沭阳县"
            }, {
                n: "泗阳县"
            }, {
                n: "泗洪县"
            } ]
        } ]
    }, {
        n: "浙江省",
        c: [ {
            n: "杭州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "上城区"
            }, {
                n: "下城区"
            }, {
                n: "江干区"
            }, {
                n: "拱墅区"
            }, {
                n: "西湖区"
            }, {
                n: "滨江区"
            }, {
                n: "萧山区"
            }, {
                n: "余杭区"
            }, {
                n: "桐庐县"
            }, {
                n: "淳安县"
            }, {
                n: "建德市"
            }, {
                n: "富阳市"
            }, {
                n: "临安市"
            } ]
        }, {
            n: "宁波市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海曙区"
            }, {
                n: "江东区"
            }, {
                n: "江北区"
            }, {
                n: "北仑区"
            }, {
                n: "镇海区"
            }, {
                n: "鄞州区"
            }, {
                n: "象山县"
            }, {
                n: "宁海县"
            }, {
                n: "余姚市"
            }, {
                n: "慈溪市"
            }, {
                n: "奉化市"
            } ]
        }, {
            n: "温州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鹿城区"
            }, {
                n: "龙湾区"
            }, {
                n: "瓯海区"
            }, {
                n: "洞头县"
            }, {
                n: "永嘉县"
            }, {
                n: "平阳县"
            }, {
                n: "苍南县"
            }, {
                n: "文成县"
            }, {
                n: "泰顺县"
            }, {
                n: "瑞安市"
            }, {
                n: "乐清市"
            } ]
        }, {
            n: "嘉兴市",
            c: [ {
                n: "市辖区"
            }, {
                n: "南湖区"
            }, {
                n: "秀洲区"
            }, {
                n: "嘉善县"
            }, {
                n: "海盐县"
            }, {
                n: "海宁市"
            }, {
                n: "平湖市"
            }, {
                n: "桐乡市"
            } ]
        }, {
            n: "湖州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "吴兴区"
            }, {
                n: "南浔区"
            }, {
                n: "德清县"
            }, {
                n: "长兴县"
            }, {
                n: "安吉县"
            } ]
        }, {
            n: "绍兴市",
            c: [ {
                n: "市辖区"
            }, {
                n: "越城区"
            }, {
                n: "绍兴县"
            }, {
                n: "新昌县"
            }, {
                n: "诸暨市"
            }, {
                n: "上虞市"
            }, {
                n: "嵊州市"
            } ]
        }, {
            n: "金华市",
            c: [ {
                n: "市辖区"
            }, {
                n: "婺城区"
            }, {
                n: "金东区"
            }, {
                n: "武义县"
            }, {
                n: "浦江县"
            }, {
                n: "磐安县"
            }, {
                n: "兰溪市"
            }, {
                n: "义乌市"
            }, {
                n: "东阳市"
            }, {
                n: "永康市"
            } ]
        }, {
            n: "衢州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "柯城区"
            }, {
                n: "衢江区"
            }, {
                n: "常山县"
            }, {
                n: "开化县"
            }, {
                n: "龙游县"
            }, {
                n: "江山市"
            } ]
        }, {
            n: "舟山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "定海区"
            }, {
                n: "普陀区"
            }, {
                n: "岱山县"
            }, {
                n: "嵊泗县"
            } ]
        }, {
            n: "台州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "椒江区"
            }, {
                n: "黄岩区"
            }, {
                n: "路桥区"
            }, {
                n: "玉环县"
            }, {
                n: "三门县"
            }, {
                n: "天台县"
            }, {
                n: "仙居县"
            }, {
                n: "温岭市"
            }, {
                n: "临海市"
            } ]
        }, {
            n: "丽水市",
            c: [ {
                n: "市辖区"
            }, {
                n: "莲都区"
            }, {
                n: "青田县"
            }, {
                n: "缙云县"
            }, {
                n: "遂昌县"
            }, {
                n: "松阳县"
            }, {
                n: "云和县"
            }, {
                n: "庆元县"
            }, {
                n: "景宁畲族自治县"
            }, {
                n: "龙泉市"
            } ]
        } ]
    }, {
        n: "安徽省",
        c: [ {
            n: "合肥市",
            c: [ {
                n: "市辖区"
            }, {
                n: "瑶海区"
            }, {
                n: "庐阳区"
            }, {
                n: "蜀山区"
            }, {
                n: "包河区"
            }, {
                n: "长丰县"
            }, {
                n: "肥东县"
            }, {
                n: "肥西县"
            }, {
                n: "庐江县"
            }, {
                n: "巢湖市"
            } ]
        }, {
            n: "芜湖市",
            c: [ {
                n: "市辖区"
            }, {
                n: "镜湖区"
            }, {
                n: "弋江区"
            }, {
                n: "鸠江区"
            }, {
                n: "三山区"
            }, {
                n: "芜湖县"
            }, {
                n: "繁昌县"
            }, {
                n: "南陵县"
            }, {
                n: "无为县"
            } ]
        }, {
            n: "蚌埠市",
            c: [ {
                n: "市辖区"
            }, {
                n: "龙子湖区"
            }, {
                n: "蚌山区"
            }, {
                n: "禹会区"
            }, {
                n: "淮上区"
            }, {
                n: "怀远县"
            }, {
                n: "五河县"
            }, {
                n: "固镇县"
            } ]
        }, {
            n: "淮南市",
            c: [ {
                n: "市辖区"
            }, {
                n: "大通区"
            }, {
                n: "田家庵区"
            }, {
                n: "谢家集区"
            }, {
                n: "八公山区"
            }, {
                n: "潘集区"
            }, {
                n: "凤台县"
            } ]
        }, {
            n: "马鞍山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "花山区"
            }, {
                n: "雨山区"
            }, {
                n: "博望区"
            }, {
                n: "当涂县"
            }, {
                n: "含山县"
            }, {
                n: "和县"
            } ]
        }, {
            n: "淮北市",
            c: [ {
                n: "市辖区"
            }, {
                n: "杜集区"
            }, {
                n: "相山区"
            }, {
                n: "烈山区"
            }, {
                n: "濉溪县"
            } ]
        }, {
            n: "铜陵市",
            c: [ {
                n: "市辖区"
            }, {
                n: "铜官山区"
            }, {
                n: "狮子山区"
            }, {
                n: "郊区"
            }, {
                n: "铜陵县"
            } ]
        }, {
            n: "安庆市",
            c: [ {
                n: "市辖区"
            }, {
                n: "迎江区"
            }, {
                n: "大观区"
            }, {
                n: "宜秀区"
            }, {
                n: "怀宁县"
            }, {
                n: "枞阳县"
            }, {
                n: "潜山县"
            }, {
                n: "太湖县"
            }, {
                n: "宿松县"
            }, {
                n: "望江县"
            }, {
                n: "岳西县"
            }, {
                n: "桐城市"
            } ]
        }, {
            n: "黄山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "屯溪区"
            }, {
                n: "黄山区"
            }, {
                n: "徽州区"
            }, {
                n: "歙县"
            }, {
                n: "休宁县"
            }, {
                n: "黟县"
            }, {
                n: "祁门县"
            } ]
        }, {
            n: "滁州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "琅琊区"
            }, {
                n: "南谯区"
            }, {
                n: "来安县"
            }, {
                n: "全椒县"
            }, {
                n: "定远县"
            }, {
                n: "凤阳县"
            }, {
                n: "天长市"
            }, {
                n: "明光市"
            } ]
        }, {
            n: "阜阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "颍州区"
            }, {
                n: "颍东区"
            }, {
                n: "颍泉区"
            }, {
                n: "临泉县"
            }, {
                n: "太和县"
            }, {
                n: "阜南县"
            }, {
                n: "颍上县"
            }, {
                n: "界首市"
            } ]
        }, {
            n: "宿州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "埇桥区"
            }, {
                n: "砀山县"
            }, {
                n: "萧县"
            }, {
                n: "灵璧县"
            }, {
                n: "泗县"
            } ]
        }, {
            n: "六安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "金安区"
            }, {
                n: "裕安区"
            }, {
                n: "寿县"
            }, {
                n: "霍邱县"
            }, {
                n: "舒城县"
            }, {
                n: "金寨县"
            }, {
                n: "霍山县"
            } ]
        }, {
            n: "亳州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "谯城区"
            }, {
                n: "涡阳县"
            }, {
                n: "蒙城县"
            }, {
                n: "利辛县"
            } ]
        }, {
            n: "池州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "贵池区"
            }, {
                n: "东至县"
            }, {
                n: "石台县"
            }, {
                n: "青阳县"
            } ]
        }, {
            n: "宣城市",
            c: [ {
                n: "市辖区"
            }, {
                n: "宣州区"
            }, {
                n: "郎溪县"
            }, {
                n: "广德县"
            }, {
                n: "泾县"
            }, {
                n: "绩溪县"
            }, {
                n: "旌德县"
            }, {
                n: "宁国市"
            } ]
        } ]
    }, {
        n: "福建省",
        c: [ {
            n: "福州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鼓楼区"
            }, {
                n: "台江区"
            }, {
                n: "仓山区"
            }, {
                n: "马尾区"
            }, {
                n: "晋安区"
            }, {
                n: "闽侯县"
            }, {
                n: "连江县"
            }, {
                n: "罗源县"
            }, {
                n: "闽清县"
            }, {
                n: "永泰县"
            }, {
                n: "平潭县"
            }, {
                n: "福清市"
            }, {
                n: "长乐市"
            } ]
        }, {
            n: "厦门市",
            c: [ {
                n: "市辖区"
            }, {
                n: "思明区"
            }, {
                n: "海沧区"
            }, {
                n: "湖里区"
            }, {
                n: "集美区"
            }, {
                n: "同安区"
            }, {
                n: "翔安区"
            } ]
        }, {
            n: "莆田市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城厢区"
            }, {
                n: "涵江区"
            }, {
                n: "荔城区"
            }, {
                n: "秀屿区"
            }, {
                n: "仙游县"
            } ]
        }, {
            n: "三明市",
            c: [ {
                n: "市辖区"
            }, {
                n: "梅列区"
            }, {
                n: "三元区"
            }, {
                n: "明溪县"
            }, {
                n: "清流县"
            }, {
                n: "宁化县"
            }, {
                n: "大田县"
            }, {
                n: "尤溪县"
            }, {
                n: "沙县"
            }, {
                n: "将乐县"
            }, {
                n: "泰宁县"
            }, {
                n: "建宁县"
            }, {
                n: "永安市"
            } ]
        }, {
            n: "泉州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鲤城区"
            }, {
                n: "丰泽区"
            }, {
                n: "洛江区"
            }, {
                n: "泉港区"
            }, {
                n: "惠安县"
            }, {
                n: "安溪县"
            }, {
                n: "永春县"
            }, {
                n: "德化县"
            }, {
                n: "金门县"
            }, {
                n: "石狮市"
            }, {
                n: "晋江市"
            }, {
                n: "南安市"
            } ]
        }, {
            n: "漳州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "芗城区"
            }, {
                n: "龙文区"
            }, {
                n: "云霄县"
            }, {
                n: "漳浦县"
            }, {
                n: "诏安县"
            }, {
                n: "长泰县"
            }, {
                n: "东山县"
            }, {
                n: "南靖县"
            }, {
                n: "平和县"
            }, {
                n: "华安县"
            }, {
                n: "龙海市"
            } ]
        }, {
            n: "南平市",
            c: [ {
                n: "市辖区"
            }, {
                n: "延平区"
            }, {
                n: "顺昌县"
            }, {
                n: "浦城县"
            }, {
                n: "光泽县"
            }, {
                n: "松溪县"
            }, {
                n: "政和县"
            }, {
                n: "邵武市"
            }, {
                n: "武夷山市"
            }, {
                n: "建瓯市"
            }, {
                n: "建阳市"
            } ]
        }, {
            n: "龙岩市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新罗区"
            }, {
                n: "长汀县"
            }, {
                n: "永定县"
            }, {
                n: "上杭县"
            }, {
                n: "武平县"
            }, {
                n: "连城县"
            }, {
                n: "漳平市"
            } ]
        }, {
            n: "宁德市",
            c: [ {
                n: "市辖区"
            }, {
                n: "蕉城区"
            }, {
                n: "霞浦县"
            }, {
                n: "古田县"
            }, {
                n: "屏南县"
            }, {
                n: "寿宁县"
            }, {
                n: "周宁县"
            }, {
                n: "柘荣县"
            }, {
                n: "福安市"
            }, {
                n: "福鼎市"
            } ]
        } ]
    }, {
        n: "江西省",
        c: [ {
            n: "南昌市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东湖区"
            }, {
                n: "西湖区"
            }, {
                n: "青云谱区"
            }, {
                n: "湾里区"
            }, {
                n: "青山湖区"
            }, {
                n: "南昌县"
            }, {
                n: "新建县"
            }, {
                n: "安义县"
            }, {
                n: "进贤县"
            } ]
        }, {
            n: "景德镇市",
            c: [ {
                n: "市辖区"
            }, {
                n: "昌江区"
            }, {
                n: "珠山区"
            }, {
                n: "浮梁县"
            }, {
                n: "乐平市"
            } ]
        }, {
            n: "萍乡市",
            c: [ {
                n: "市辖区"
            }, {
                n: "安源区"
            }, {
                n: "湘东区"
            }, {
                n: "莲花县"
            }, {
                n: "上栗县"
            }, {
                n: "芦溪县"
            } ]
        }, {
            n: "九江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "庐山区"
            }, {
                n: "浔阳区"
            }, {
                n: "九江县"
            }, {
                n: "武宁县"
            }, {
                n: "修水县"
            }, {
                n: "永修县"
            }, {
                n: "德安县"
            }, {
                n: "星子县"
            }, {
                n: "都昌县"
            }, {
                n: "湖口县"
            }, {
                n: "彭泽县"
            }, {
                n: "瑞昌市"
            }, {
                n: "共青城市"
            } ]
        }, {
            n: "新余市",
            c: [ {
                n: "市辖区"
            }, {
                n: "渝水区"
            }, {
                n: "分宜县"
            } ]
        }, {
            n: "鹰潭市",
            c: [ {
                n: "市辖区"
            }, {
                n: "月湖区"
            }, {
                n: "余江县"
            }, {
                n: "贵溪市"
            } ]
        }, {
            n: "赣州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "章贡区"
            }, {
                n: "赣县"
            }, {
                n: "信丰县"
            }, {
                n: "大余县"
            }, {
                n: "上犹县"
            }, {
                n: "崇义县"
            }, {
                n: "安远县"
            }, {
                n: "龙南县"
            }, {
                n: "定南县"
            }, {
                n: "全南县"
            }, {
                n: "宁都县"
            }, {
                n: "于都县"
            }, {
                n: "兴国县"
            }, {
                n: "会昌县"
            }, {
                n: "寻乌县"
            }, {
                n: "石城县"
            }, {
                n: "瑞金市"
            }, {
                n: "南康市"
            } ]
        }, {
            n: "吉安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "吉州区"
            }, {
                n: "青原区"
            }, {
                n: "吉安县"
            }, {
                n: "吉水县"
            }, {
                n: "峡江县"
            }, {
                n: "新干县"
            }, {
                n: "永丰县"
            }, {
                n: "泰和县"
            }, {
                n: "遂川县"
            }, {
                n: "万安县"
            }, {
                n: "安福县"
            }, {
                n: "永新县"
            }, {
                n: "井冈山市"
            } ]
        }, {
            n: "宜春市",
            c: [ {
                n: "市辖区"
            }, {
                n: "袁州区"
            }, {
                n: "奉新县"
            }, {
                n: "万载县"
            }, {
                n: "上高县"
            }, {
                n: "宜丰县"
            }, {
                n: "靖安县"
            }, {
                n: "铜鼓县"
            }, {
                n: "丰城市"
            }, {
                n: "樟树市"
            }, {
                n: "高安市"
            } ]
        }, {
            n: "抚州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "临川区"
            }, {
                n: "南城县"
            }, {
                n: "黎川县"
            }, {
                n: "南丰县"
            }, {
                n: "崇仁县"
            }, {
                n: "乐安县"
            }, {
                n: "宜黄县"
            }, {
                n: "金溪县"
            }, {
                n: "资溪县"
            }, {
                n: "东乡县"
            }, {
                n: "广昌县"
            } ]
        }, {
            n: "上饶市",
            c: [ {
                n: "市辖区"
            }, {
                n: "信州区"
            }, {
                n: "上饶县"
            }, {
                n: "广丰县"
            }, {
                n: "玉山县"
            }, {
                n: "铅山县"
            }, {
                n: "横峰县"
            }, {
                n: "弋阳县"
            }, {
                n: "余干县"
            }, {
                n: "鄱阳县"
            }, {
                n: "万年县"
            }, {
                n: "婺源县"
            }, {
                n: "德兴市"
            } ]
        } ]
    }, {
        n: "山东省",
        c: [ {
            n: "济南市",
            c: [ {
                n: "市辖区"
            }, {
                n: "历下区"
            }, {
                n: "市中区"
            }, {
                n: "槐荫区"
            }, {
                n: "天桥区"
            }, {
                n: "历城区"
            }, {
                n: "长清区"
            }, {
                n: "平阴县"
            }, {
                n: "济阳县"
            }, {
                n: "商河县"
            }, {
                n: "章丘市"
            } ]
        }, {
            n: "青岛市",
            c: [ {
                n: "市辖区"
            }, {
                n: "市南区"
            }, {
                n: "市北区"
            }, {
                n: "黄岛区"
            }, {
                n: "崂山区"
            }, {
                n: "李沧区"
            }, {
                n: "城阳区"
            }, {
                n: "胶州市"
            }, {
                n: "即墨市"
            }, {
                n: "平度市"
            }, {
                n: "莱西市"
            } ]
        }, {
            n: "淄博市",
            c: [ {
                n: "市辖区"
            }, {
                n: "淄川区"
            }, {
                n: "张店区"
            }, {
                n: "博山区"
            }, {
                n: "临淄区"
            }, {
                n: "周村区"
            }, {
                n: "桓台县"
            }, {
                n: "高青县"
            }, {
                n: "沂源县"
            } ]
        }, {
            n: "枣庄市",
            c: [ {
                n: "市辖区"
            }, {
                n: "市中区"
            }, {
                n: "薛城区"
            }, {
                n: "峄城区"
            }, {
                n: "台儿庄区"
            }, {
                n: "山亭区"
            }, {
                n: "滕州市"
            } ]
        }, {
            n: "东营市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东营区"
            }, {
                n: "河口区"
            }, {
                n: "垦利县"
            }, {
                n: "利津县"
            }, {
                n: "广饶县"
            } ]
        }, {
            n: "烟台市",
            c: [ {
                n: "市辖区"
            }, {
                n: "芝罘区"
            }, {
                n: "福山区"
            }, {
                n: "牟平区"
            }, {
                n: "莱山区"
            }, {
                n: "长岛县"
            }, {
                n: "龙口市"
            }, {
                n: "莱阳市"
            }, {
                n: "莱州市"
            }, {
                n: "蓬莱市"
            }, {
                n: "招远市"
            }, {
                n: "栖霞市"
            }, {
                n: "海阳市"
            } ]
        }, {
            n: "潍坊市",
            c: [ {
                n: "市辖区"
            }, {
                n: "潍城区"
            }, {
                n: "寒亭区"
            }, {
                n: "坊子区"
            }, {
                n: "奎文区"
            }, {
                n: "临朐县"
            }, {
                n: "昌乐县"
            }, {
                n: "青州市"
            }, {
                n: "诸城市"
            }, {
                n: "寿光市"
            }, {
                n: "安丘市"
            }, {
                n: "高密市"
            }, {
                n: "昌邑市"
            } ]
        }, {
            n: "济宁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "市中区"
            }, {
                n: "任城区"
            }, {
                n: "微山县"
            }, {
                n: "鱼台县"
            }, {
                n: "金乡县"
            }, {
                n: "嘉祥县"
            }, {
                n: "汶上县"
            }, {
                n: "泗水县"
            }, {
                n: "梁山县"
            }, {
                n: "曲阜市"
            }, {
                n: "兖州市"
            }, {
                n: "邹城市"
            } ]
        }, {
            n: "泰安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "泰山区"
            }, {
                n: "岱岳区"
            }, {
                n: "宁阳县"
            }, {
                n: "东平县"
            }, {
                n: "新泰市"
            }, {
                n: "肥城市"
            } ]
        }, {
            n: "威海市",
            c: [ {
                n: "市辖区"
            }, {
                n: "环翠区"
            }, {
                n: "文登市"
            }, {
                n: "荣成市"
            }, {
                n: "乳山市"
            } ]
        }, {
            n: "日照市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东港区"
            }, {
                n: "岚山区"
            }, {
                n: "五莲县"
            }, {
                n: "莒县"
            } ]
        }, {
            n: "莱芜市",
            c: [ {
                n: "市辖区"
            }, {
                n: "莱城区"
            }, {
                n: "钢城区"
            } ]
        }, {
            n: "临沂市",
            c: [ {
                n: "市辖区"
            }, {
                n: "兰山区"
            }, {
                n: "罗庄区"
            }, {
                n: "河东区"
            }, {
                n: "沂南县"
            }, {
                n: "郯城县"
            }, {
                n: "沂水县"
            }, {
                n: "苍山县"
            }, {
                n: "费县"
            }, {
                n: "平邑县"
            }, {
                n: "莒南县"
            }, {
                n: "蒙阴县"
            }, {
                n: "临沭县"
            } ]
        }, {
            n: "德州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "德城区"
            }, {
                n: "陵县"
            }, {
                n: "宁津县"
            }, {
                n: "庆云县"
            }, {
                n: "临邑县"
            }, {
                n: "齐河县"
            }, {
                n: "平原县"
            }, {
                n: "夏津县"
            }, {
                n: "武城县"
            }, {
                n: "乐陵市"
            }, {
                n: "禹城市"
            } ]
        }, {
            n: "聊城市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东昌府区"
            }, {
                n: "阳谷县"
            }, {
                n: "莘县"
            }, {
                n: "茌平县"
            }, {
                n: "东阿县"
            }, {
                n: "冠县"
            }, {
                n: "高唐县"
            }, {
                n: "临清市"
            } ]
        }, {
            n: "滨州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "滨城区"
            }, {
                n: "惠民县"
            }, {
                n: "阳信县"
            }, {
                n: "无棣县"
            }, {
                n: "沾化县"
            }, {
                n: "博兴县"
            }, {
                n: "邹平县"
            } ]
        }, {
            n: "菏泽市",
            c: [ {
                n: "市辖区"
            }, {
                n: "牡丹区"
            }, {
                n: "曹县"
            }, {
                n: "单县"
            }, {
                n: "成武县"
            }, {
                n: "巨野县"
            }, {
                n: "郓城县"
            }, {
                n: "鄄城县"
            }, {
                n: "定陶县"
            }, {
                n: "东明县"
            } ]
        } ]
    }, {
        n: "河南省",
        c: [ {
            n: "郑州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "中原区"
            }, {
                n: "二七区"
            }, {
                n: "管城回族区"
            }, {
                n: "金水区"
            }, {
                n: "上街区"
            }, {
                n: "惠济区"
            }, {
                n: "中牟县"
            }, {
                n: "巩义市"
            }, {
                n: "荥阳市"
            }, {
                n: "新密市"
            }, {
                n: "新郑市"
            }, {
                n: "登封市"
            } ]
        }, {
            n: "开封市",
            c: [ {
                n: "市辖区"
            }, {
                n: "龙亭区"
            }, {
                n: "顺河回族区"
            }, {
                n: "鼓楼区"
            }, {
                n: "禹王台区"
            }, {
                n: "金明区"
            }, {
                n: "杞县"
            }, {
                n: "通许县"
            }, {
                n: "尉氏县"
            }, {
                n: "开封县"
            }, {
                n: "兰考县"
            } ]
        }, {
            n: "洛阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "老城区"
            }, {
                n: "西工区"
            }, {
                n: "瀍河回族区"
            }, {
                n: "涧西区"
            }, {
                n: "吉利区"
            }, {
                n: "洛龙区"
            }, {
                n: "孟津县"
            }, {
                n: "新安县"
            }, {
                n: "栾川县"
            }, {
                n: "嵩县"
            }, {
                n: "汝阳县"
            }, {
                n: "宜阳县"
            }, {
                n: "洛宁县"
            }, {
                n: "伊川县"
            }, {
                n: "偃师市"
            } ]
        }, {
            n: "平顶山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新华区"
            }, {
                n: "卫东区"
            }, {
                n: "石龙区"
            }, {
                n: "湛河区"
            }, {
                n: "宝丰县"
            }, {
                n: "叶县"
            }, {
                n: "鲁山县"
            }, {
                n: "郏县"
            }, {
                n: "舞钢市"
            }, {
                n: "汝州市"
            } ]
        }, {
            n: "安阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "文峰区"
            }, {
                n: "北关区"
            }, {
                n: "殷都区"
            }, {
                n: "龙安区"
            }, {
                n: "安阳县"
            }, {
                n: "汤阴县"
            }, {
                n: "滑县"
            }, {
                n: "内黄县"
            }, {
                n: "林州市"
            } ]
        }, {
            n: "鹤壁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鹤山区"
            }, {
                n: "山城区"
            }, {
                n: "淇滨区"
            }, {
                n: "浚县"
            }, {
                n: "淇县"
            } ]
        }, {
            n: "新乡市",
            c: [ {
                n: "市辖区"
            }, {
                n: "红旗区"
            }, {
                n: "卫滨区"
            }, {
                n: "凤泉区"
            }, {
                n: "牧野区"
            }, {
                n: "新乡县"
            }, {
                n: "获嘉县"
            }, {
                n: "原阳县"
            }, {
                n: "延津县"
            }, {
                n: "封丘县"
            }, {
                n: "长垣县"
            }, {
                n: "卫辉市"
            }, {
                n: "辉县市"
            } ]
        }, {
            n: "焦作市",
            c: [ {
                n: "市辖区"
            }, {
                n: "解放区"
            }, {
                n: "中站区"
            }, {
                n: "马村区"
            }, {
                n: "山阳区"
            }, {
                n: "修武县"
            }, {
                n: "博爱县"
            }, {
                n: "武陟县"
            }, {
                n: "温县"
            }, {
                n: "沁阳市"
            }, {
                n: "孟州市"
            } ]
        }, {
            n: "濮阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "华龙区"
            }, {
                n: "清丰县"
            }, {
                n: "南乐县"
            }, {
                n: "范县"
            }, {
                n: "台前县"
            }, {
                n: "濮阳县"
            } ]
        }, {
            n: "许昌市",
            c: [ {
                n: "市辖区"
            }, {
                n: "魏都区"
            }, {
                n: "许昌县"
            }, {
                n: "鄢陵县"
            }, {
                n: "襄城县"
            }, {
                n: "禹州市"
            }, {
                n: "长葛市"
            } ]
        }, {
            n: "漯河市",
            c: [ {
                n: "市辖区"
            }, {
                n: "源汇区"
            }, {
                n: "郾城区"
            }, {
                n: "召陵区"
            }, {
                n: "舞阳县"
            }, {
                n: "临颍县"
            } ]
        }, {
            n: "三门峡市",
            c: [ {
                n: "市辖区"
            }, {
                n: "湖滨区"
            }, {
                n: "渑池县"
            }, {
                n: "陕县"
            }, {
                n: "卢氏县"
            }, {
                n: "义马市"
            }, {
                n: "灵宝市"
            } ]
        }, {
            n: "南阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "宛城区"
            }, {
                n: "卧龙区"
            }, {
                n: "南召县"
            }, {
                n: "方城县"
            }, {
                n: "西峡县"
            }, {
                n: "镇平县"
            }, {
                n: "内乡县"
            }, {
                n: "淅川县"
            }, {
                n: "社旗县"
            }, {
                n: "唐河县"
            }, {
                n: "新野县"
            }, {
                n: "桐柏县"
            }, {
                n: "邓州市"
            } ]
        }, {
            n: "商丘市",
            c: [ {
                n: "市辖区"
            }, {
                n: "梁园区"
            }, {
                n: "睢阳区"
            }, {
                n: "民权县"
            }, {
                n: "睢县"
            }, {
                n: "宁陵县"
            }, {
                n: "柘城县"
            }, {
                n: "虞城县"
            }, {
                n: "夏邑县"
            }, {
                n: "永城市"
            } ]
        }, {
            n: "信阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "浉河区"
            }, {
                n: "平桥区"
            }, {
                n: "罗山县"
            }, {
                n: "光山县"
            }, {
                n: "新县"
            }, {
                n: "商城县"
            }, {
                n: "固始县"
            }, {
                n: "潢川县"
            }, {
                n: "淮滨县"
            }, {
                n: "息县"
            } ]
        }, {
            n: "周口市",
            c: [ {
                n: "市辖区"
            }, {
                n: "川汇区"
            }, {
                n: "扶沟县"
            }, {
                n: "西华县"
            }, {
                n: "商水县"
            }, {
                n: "沈丘县"
            }, {
                n: "郸城县"
            }, {
                n: "淮阳县"
            }, {
                n: "太康县"
            }, {
                n: "鹿邑县"
            }, {
                n: "项城市"
            } ]
        }, {
            n: "驻马店市",
            c: [ {
                n: "市辖区"
            }, {
                n: "驿城区"
            }, {
                n: "西平县"
            }, {
                n: "上蔡县"
            }, {
                n: "平舆县"
            }, {
                n: "正阳县"
            }, {
                n: "确山县"
            }, {
                n: "泌阳县"
            }, {
                n: "汝南县"
            }, {
                n: "遂平县"
            }, {
                n: "新蔡县"
            } ]
        }, {
            n: "省直辖县级行政区划",
            c: [ {
                n: "济源市"
            } ]
        } ]
    }, {
        n: "湖北省",
        c: [ {
            n: "武汉市",
            c: [ {
                n: "市辖区"
            }, {
                n: "江岸区"
            }, {
                n: "江汉区"
            }, {
                n: "硚口区"
            }, {
                n: "汉阳区"
            }, {
                n: "武昌区"
            }, {
                n: "青山区"
            }, {
                n: "洪山区"
            }, {
                n: "东西湖区"
            }, {
                n: "汉南区"
            }, {
                n: "蔡甸区"
            }, {
                n: "江夏区"
            }, {
                n: "黄陂区"
            }, {
                n: "新洲区"
            } ]
        }, {
            n: "黄石市",
            c: [ {
                n: "市辖区"
            }, {
                n: "黄石港区"
            }, {
                n: "西塞山区"
            }, {
                n: "下陆区"
            }, {
                n: "铁山区"
            }, {
                n: "阳新县"
            }, {
                n: "大冶市"
            } ]
        }, {
            n: "十堰市",
            c: [ {
                n: "市辖区"
            }, {
                n: "茅箭区"
            }, {
                n: "张湾区"
            }, {
                n: "郧县"
            }, {
                n: "郧西县"
            }, {
                n: "竹山县"
            }, {
                n: "竹溪县"
            }, {
                n: "房县"
            }, {
                n: "丹江口市"
            } ]
        }, {
            n: "宜昌市",
            c: [ {
                n: "市辖区"
            }, {
                n: "西陵区"
            }, {
                n: "伍家岗区"
            }, {
                n: "点军区"
            }, {
                n: "猇亭区"
            }, {
                n: "夷陵区"
            }, {
                n: "远安县"
            }, {
                n: "兴山县"
            }, {
                n: "秭归县"
            }, {
                n: "长阳土家族自治县"
            }, {
                n: "五峰土家族自治县"
            }, {
                n: "宜都市"
            }, {
                n: "当阳市"
            }, {
                n: "枝江市"
            } ]
        }, {
            n: "襄阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "襄城区"
            }, {
                n: "樊城区"
            }, {
                n: "襄州区"
            }, {
                n: "南漳县"
            }, {
                n: "谷城县"
            }, {
                n: "保康县"
            }, {
                n: "老河口市"
            }, {
                n: "枣阳市"
            }, {
                n: "宜城市"
            } ]
        }, {
            n: "鄂州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "梁子湖区"
            }, {
                n: "华容区"
            }, {
                n: "鄂城区"
            } ]
        }, {
            n: "荆门市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东宝区"
            }, {
                n: "掇刀区"
            }, {
                n: "京山县"
            }, {
                n: "沙洋县"
            }, {
                n: "钟祥市"
            } ]
        }, {
            n: "孝感市",
            c: [ {
                n: "市辖区"
            }, {
                n: "孝南区"
            }, {
                n: "孝昌县"
            }, {
                n: "大悟县"
            }, {
                n: "云梦县"
            }, {
                n: "应城市"
            }, {
                n: "安陆市"
            }, {
                n: "汉川市"
            } ]
        }, {
            n: "荆州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "沙市区"
            }, {
                n: "荆州区"
            }, {
                n: "公安县"
            }, {
                n: "监利县"
            }, {
                n: "江陵县"
            }, {
                n: "石首市"
            }, {
                n: "洪湖市"
            }, {
                n: "松滋市"
            } ]
        }, {
            n: "黄冈市",
            c: [ {
                n: "市辖区"
            }, {
                n: "黄州区"
            }, {
                n: "团风县"
            }, {
                n: "红安县"
            }, {
                n: "罗田县"
            }, {
                n: "英山县"
            }, {
                n: "浠水县"
            }, {
                n: "蕲春县"
            }, {
                n: "黄梅县"
            }, {
                n: "麻城市"
            }, {
                n: "武穴市"
            } ]
        }, {
            n: "咸宁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "咸安区"
            }, {
                n: "嘉鱼县"
            }, {
                n: "通城县"
            }, {
                n: "崇阳县"
            }, {
                n: "通山县"
            }, {
                n: "赤壁市"
            } ]
        }, {
            n: "随州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "曾都区"
            }, {
                n: "随县"
            }, {
                n: "广水市"
            } ]
        }, {
            n: "恩施土家族苗族自治州",
            c: [ {
                n: "恩施市"
            }, {
                n: "利川市"
            }, {
                n: "建始县"
            }, {
                n: "巴东县"
            }, {
                n: "宣恩县"
            }, {
                n: "咸丰县"
            }, {
                n: "来凤县"
            }, {
                n: "鹤峰县"
            } ]
        }, {
            n: "省直辖县级行政区划",
            c: [ {
                n: "仙桃市"
            }, {
                n: "潜江市"
            }, {
                n: "天门市"
            }, {
                n: "神农架林区"
            } ]
        } ]
    }, {
        n: "湖南省",
        c: [ {
            n: "长沙市",
            c: [ {
                n: "市辖区"
            }, {
                n: "芙蓉区"
            }, {
                n: "天心区"
            }, {
                n: "岳麓区"
            }, {
                n: "开福区"
            }, {
                n: "雨花区"
            }, {
                n: "望城区"
            }, {
                n: "长沙县"
            }, {
                n: "宁乡县"
            }, {
                n: "浏阳市"
            } ]
        }, {
            n: "株洲市",
            c: [ {
                n: "市辖区"
            }, {
                n: "荷塘区"
            }, {
                n: "芦淞区"
            }, {
                n: "石峰区"
            }, {
                n: "天元区"
            }, {
                n: "株洲县"
            }, {
                n: "攸县"
            }, {
                n: "茶陵县"
            }, {
                n: "炎陵县"
            }, {
                n: "醴陵市"
            } ]
        }, {
            n: "湘潭市",
            c: [ {
                n: "市辖区"
            }, {
                n: "雨湖区"
            }, {
                n: "岳塘区"
            }, {
                n: "湘潭县"
            }, {
                n: "湘乡市"
            }, {
                n: "韶山市"
            } ]
        }, {
            n: "衡阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "珠晖区"
            }, {
                n: "雁峰区"
            }, {
                n: "石鼓区"
            }, {
                n: "蒸湘区"
            }, {
                n: "南岳区"
            }, {
                n: "衡阳县"
            }, {
                n: "衡南县"
            }, {
                n: "衡山县"
            }, {
                n: "衡东县"
            }, {
                n: "祁东县"
            }, {
                n: "耒阳市"
            }, {
                n: "常宁市"
            } ]
        }, {
            n: "邵阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "双清区"
            }, {
                n: "大祥区"
            }, {
                n: "北塔区"
            }, {
                n: "邵东县"
            }, {
                n: "新邵县"
            }, {
                n: "邵阳县"
            }, {
                n: "隆回县"
            }, {
                n: "洞口县"
            }, {
                n: "绥宁县"
            }, {
                n: "新宁县"
            }, {
                n: "城步苗族自治县"
            }, {
                n: "武冈市"
            } ]
        }, {
            n: "岳阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "岳阳楼区"
            }, {
                n: "云溪区"
            }, {
                n: "君山区"
            }, {
                n: "岳阳县"
            }, {
                n: "华容县"
            }, {
                n: "湘阴县"
            }, {
                n: "平江县"
            }, {
                n: "汨罗市"
            }, {
                n: "临湘市"
            } ]
        }, {
            n: "常德市",
            c: [ {
                n: "市辖区"
            }, {
                n: "武陵区"
            }, {
                n: "鼎城区"
            }, {
                n: "安乡县"
            }, {
                n: "汉寿县"
            }, {
                n: "澧县"
            }, {
                n: "临澧县"
            }, {
                n: "桃源县"
            }, {
                n: "石门县"
            }, {
                n: "津市市"
            } ]
        }, {
            n: "张家界市",
            c: [ {
                n: "市辖区"
            }, {
                n: "永定区"
            }, {
                n: "武陵源区"
            }, {
                n: "慈利县"
            }, {
                n: "桑植县"
            } ]
        }, {
            n: "益阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "资阳区"
            }, {
                n: "赫山区"
            }, {
                n: "南县"
            }, {
                n: "桃江县"
            }, {
                n: "安化县"
            }, {
                n: "沅江市"
            } ]
        }, {
            n: "郴州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "北湖区"
            }, {
                n: "苏仙区"
            }, {
                n: "桂阳县"
            }, {
                n: "宜章县"
            }, {
                n: "永兴县"
            }, {
                n: "嘉禾县"
            }, {
                n: "临武县"
            }, {
                n: "汝城县"
            }, {
                n: "桂东县"
            }, {
                n: "安仁县"
            }, {
                n: "资兴市"
            } ]
        }, {
            n: "永州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "零陵区"
            }, {
                n: "冷水滩区"
            }, {
                n: "祁阳县"
            }, {
                n: "东安县"
            }, {
                n: "双牌县"
            }, {
                n: "道县"
            }, {
                n: "江永县"
            }, {
                n: "宁远县"
            }, {
                n: "蓝山县"
            }, {
                n: "新田县"
            }, {
                n: "江华瑶族自治县"
            } ]
        }, {
            n: "怀化市",
            c: [ {
                n: "市辖区"
            }, {
                n: "鹤城区"
            }, {
                n: "中方县"
            }, {
                n: "沅陵县"
            }, {
                n: "辰溪县"
            }, {
                n: "溆浦县"
            }, {
                n: "会同县"
            }, {
                n: "麻阳苗族自治县"
            }, {
                n: "新晃侗族自治县"
            }, {
                n: "芷江侗族自治县"
            }, {
                n: "靖州苗族侗族自治县"
            }, {
                n: "通道侗族自治县"
            }, {
                n: "洪江市"
            } ]
        }, {
            n: "娄底市",
            c: [ {
                n: "市辖区"
            }, {
                n: "娄星区"
            }, {
                n: "双峰县"
            }, {
                n: "新化县"
            }, {
                n: "冷水江市"
            }, {
                n: "涟源市"
            } ]
        }, {
            n: "湘西土家族苗族自治州",
            c: [ {
                n: "吉首市"
            }, {
                n: "泸溪县"
            }, {
                n: "凤凰县"
            }, {
                n: "花垣县"
            }, {
                n: "保靖县"
            }, {
                n: "古丈县"
            }, {
                n: "永顺县"
            }, {
                n: "龙山县"
            } ]
        } ]
    }, {
        n: "广东省",
        c: [ {
            n: "广州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "荔湾区"
            }, {
                n: "越秀区"
            }, {
                n: "海珠区"
            }, {
                n: "天河区"
            }, {
                n: "白云区"
            }, {
                n: "黄埔区"
            }, {
                n: "番禺区"
            }, {
                n: "花都区"
            }, {
                n: "南沙区"
            }, {
                n: "萝岗区"
            }, {
                n: "增城市"
            }, {
                n: "从化市"
            } ]
        }, {
            n: "韶关市",
            c: [ {
                n: "市辖区"
            }, {
                n: "武江区"
            }, {
                n: "浈江区"
            }, {
                n: "曲江区"
            }, {
                n: "始兴县"
            }, {
                n: "仁化县"
            }, {
                n: "翁源县"
            }, {
                n: "乳源瑶族自治县"
            }, {
                n: "新丰县"
            }, {
                n: "乐昌市"
            }, {
                n: "南雄市"
            } ]
        }, {
            n: "深圳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "罗湖区"
            }, {
                n: "福田区"
            }, {
                n: "南山区"
            }, {
                n: "宝安区"
            }, {
                n: "龙岗区"
            }, {
                n: "盐田区"
            } ]
        }, {
            n: "珠海市",
            c: [ {
                n: "市辖区"
            }, {
                n: "香洲区"
            }, {
                n: "斗门区"
            }, {
                n: "金湾区"
            } ]
        }, {
            n: "汕头市",
            c: [ {
                n: "市辖区"
            }, {
                n: "龙湖区"
            }, {
                n: "金平区"
            }, {
                n: "濠江区"
            }, {
                n: "潮阳区"
            }, {
                n: "潮南区"
            }, {
                n: "澄海区"
            }, {
                n: "南澳县"
            } ]
        }, {
            n: "佛山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "禅城区"
            }, {
                n: "南海区"
            }, {
                n: "顺德区"
            }, {
                n: "三水区"
            }, {
                n: "高明区"
            } ]
        }, {
            n: "江门市",
            c: [ {
                n: "市辖区"
            }, {
                n: "蓬江区"
            }, {
                n: "江海区"
            }, {
                n: "新会区"
            }, {
                n: "台山市"
            }, {
                n: "开平市"
            }, {
                n: "鹤山市"
            }, {
                n: "恩平市"
            } ]
        }, {
            n: "湛江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "赤坎区"
            }, {
                n: "霞山区"
            }, {
                n: "坡头区"
            }, {
                n: "麻章区"
            }, {
                n: "遂溪县"
            }, {
                n: "徐闻县"
            }, {
                n: "廉江市"
            }, {
                n: "雷州市"
            }, {
                n: "吴川市"
            } ]
        }, {
            n: "茂名市",
            c: [ {
                n: "市辖区"
            }, {
                n: "茂南区"
            }, {
                n: "茂港区"
            }, {
                n: "电白县"
            }, {
                n: "高州市"
            }, {
                n: "化州市"
            }, {
                n: "信宜市"
            } ]
        }, {
            n: "肇庆市",
            c: [ {
                n: "市辖区"
            }, {
                n: "端州区"
            }, {
                n: "鼎湖区"
            }, {
                n: "广宁县"
            }, {
                n: "怀集县"
            }, {
                n: "封开县"
            }, {
                n: "德庆县"
            }, {
                n: "高要市"
            }, {
                n: "四会市"
            } ]
        }, {
            n: "惠州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "惠城区"
            }, {
                n: "惠阳区"
            }, {
                n: "博罗县"
            }, {
                n: "惠东县"
            }, {
                n: "龙门县"
            } ]
        }, {
            n: "梅州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "梅江区"
            }, {
                n: "梅县"
            }, {
                n: "大埔县"
            }, {
                n: "丰顺县"
            }, {
                n: "五华县"
            }, {
                n: "平远县"
            }, {
                n: "蕉岭县"
            }, {
                n: "兴宁市"
            } ]
        }, {
            n: "汕尾市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城区"
            }, {
                n: "海丰县"
            }, {
                n: "陆河县"
            }, {
                n: "陆丰市"
            } ]
        }, {
            n: "河源市",
            c: [ {
                n: "市辖区"
            }, {
                n: "源城区"
            }, {
                n: "紫金县"
            }, {
                n: "龙川县"
            }, {
                n: "连平县"
            }, {
                n: "和平县"
            }, {
                n: "东源县"
            } ]
        }, {
            n: "阳江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "江城区"
            }, {
                n: "阳西县"
            }, {
                n: "阳东县"
            }, {
                n: "阳春市"
            } ]
        }, {
            n: "清远市",
            c: [ {
                n: "市辖区"
            }, {
                n: "清城区"
            }, {
                n: "清新区"
            }, {
                n: "佛冈县"
            }, {
                n: "阳山县"
            }, {
                n: "连山壮族瑶族自治县"
            }, {
                n: "连南瑶族自治县"
            }, {
                n: "英德市"
            }, {
                n: "连州市"
            } ]
        }, {
            n: "东莞市"
        }, {
            n: "中山市"
        }, {
            n: "潮州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "湘桥区"
            }, {
                n: "潮安区"
            }, {
                n: "饶平县"
            } ]
        }, {
            n: "揭阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "榕城区"
            }, {
                n: "揭东区"
            }, {
                n: "揭西县"
            }, {
                n: "惠来县"
            }, {
                n: "普宁市"
            } ]
        }, {
            n: "云浮市",
            c: [ {
                n: "市辖区"
            }, {
                n: "云城区"
            }, {
                n: "新兴县"
            }, {
                n: "郁南县"
            }, {
                n: "云安县"
            }, {
                n: "罗定市"
            } ]
        } ]
    }, {
        n: "广西壮族自治区",
        c: [ {
            n: "南宁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "兴宁区"
            }, {
                n: "青秀区"
            }, {
                n: "江南区"
            }, {
                n: "西乡塘区"
            }, {
                n: "良庆区"
            }, {
                n: "邕宁区"
            }, {
                n: "武鸣县"
            }, {
                n: "隆安县"
            }, {
                n: "马山县"
            }, {
                n: "上林县"
            }, {
                n: "宾阳县"
            }, {
                n: "横县"
            } ]
        }, {
            n: "柳州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城中区"
            }, {
                n: "鱼峰区"
            }, {
                n: "柳南区"
            }, {
                n: "柳北区"
            }, {
                n: "柳江县"
            }, {
                n: "柳城县"
            }, {
                n: "鹿寨县"
            }, {
                n: "融安县"
            }, {
                n: "融水苗族自治县"
            }, {
                n: "三江侗族自治县"
            } ]
        }, {
            n: "桂林市",
            c: [ {
                n: "市辖区"
            }, {
                n: "秀峰区"
            }, {
                n: "叠彩区"
            }, {
                n: "象山区"
            }, {
                n: "七星区"
            }, {
                n: "雁山区"
            }, {
                n: "临桂区"
            }, {
                n: "阳朔县"
            }, {
                n: "灵川县"
            }, {
                n: "全州县"
            }, {
                n: "兴安县"
            }, {
                n: "永福县"
            }, {
                n: "灌阳县"
            }, {
                n: "龙胜各族自治县"
            }, {
                n: "资源县"
            }, {
                n: "平乐县"
            }, {
                n: "荔浦县"
            }, {
                n: "恭城瑶族自治县"
            } ]
        }, {
            n: "梧州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "万秀区"
            }, {
                n: "长洲区"
            }, {
                n: "龙圩区"
            }, {
                n: "苍梧县"
            }, {
                n: "藤县"
            }, {
                n: "蒙山县"
            }, {
                n: "岑溪市"
            } ]
        }, {
            n: "北海市",
            c: [ {
                n: "市辖区"
            }, {
                n: "海城区"
            }, {
                n: "银海区"
            }, {
                n: "铁山港区"
            }, {
                n: "合浦县"
            } ]
        }, {
            n: "防城港市",
            c: [ {
                n: "市辖区"
            }, {
                n: "港口区"
            }, {
                n: "防城区"
            }, {
                n: "上思县"
            }, {
                n: "东兴市"
            } ]
        }, {
            n: "钦州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "钦南区"
            }, {
                n: "钦北区"
            }, {
                n: "灵山县"
            }, {
                n: "浦北县"
            } ]
        }, {
            n: "贵港市",
            c: [ {
                n: "市辖区"
            }, {
                n: "港北区"
            }, {
                n: "港南区"
            }, {
                n: "覃塘区"
            }, {
                n: "平南县"
            }, {
                n: "桂平市"
            } ]
        }, {
            n: "玉林市",
            c: [ {
                n: "市辖区"
            }, {
                n: "玉州区"
            }, {
                n: "福绵区"
            }, {
                n: "容县"
            }, {
                n: "陆川县"
            }, {
                n: "博白县"
            }, {
                n: "兴业县"
            }, {
                n: "北流市"
            } ]
        }, {
            n: "百色市",
            c: [ {
                n: "市辖区"
            }, {
                n: "右江区"
            }, {
                n: "田阳县"
            }, {
                n: "田东县"
            }, {
                n: "平果县"
            }, {
                n: "德保县"
            }, {
                n: "靖西县"
            }, {
                n: "那坡县"
            }, {
                n: "凌云县"
            }, {
                n: "乐业县"
            }, {
                n: "田林县"
            }, {
                n: "西林县"
            }, {
                n: "隆林各族自治县"
            } ]
        }, {
            n: "贺州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "八步区"
            }, {
                n: "昭平县"
            }, {
                n: "钟山县"
            }, {
                n: "富川瑶族自治县"
            } ]
        }, {
            n: "河池市",
            c: [ {
                n: "市辖区"
            }, {
                n: "金城江区"
            }, {
                n: "南丹县"
            }, {
                n: "天峨县"
            }, {
                n: "凤山县"
            }, {
                n: "东兰县"
            }, {
                n: "罗城仫佬族自治县"
            }, {
                n: "环江毛南族自治县"
            }, {
                n: "巴马瑶族自治县"
            }, {
                n: "都安瑶族自治县"
            }, {
                n: "大化瑶族自治县"
            }, {
                n: "宜州市"
            } ]
        }, {
            n: "来宾市",
            c: [ {
                n: "市辖区"
            }, {
                n: "兴宾区"
            }, {
                n: "忻城县"
            }, {
                n: "象州县"
            }, {
                n: "武宣县"
            }, {
                n: "金秀瑶族自治县"
            }, {
                n: "合山市"
            } ]
        }, {
            n: "崇左市",
            c: [ {
                n: "市辖区"
            }, {
                n: "江州区"
            }, {
                n: "扶绥县"
            }, {
                n: "宁明县"
            }, {
                n: "龙州县"
            }, {
                n: "大新县"
            }, {
                n: "天等县"
            }, {
                n: "凭祥市"
            } ]
        } ]
    }, {
        n: "海南省",
        c: [ {
            n: "海口市",
            c: [ {
                n: "市辖区"
            }, {
                n: "秀英区"
            }, {
                n: "龙华区"
            }, {
                n: "琼山区"
            }, {
                n: "美兰区"
            } ]
        }, {
            n: "三亚市",
            c: [ {
                n: "市辖区"
            } ]
        }, {
            n: "三沙市",
            c: [ {
                n: "西沙群岛"
            }, {
                n: "南沙群岛"
            }, {
                n: "中沙群岛的岛礁及其海域"
            } ]
        }, {
            n: "省直辖县级行政区划",
            c: [ {
                n: "五指山市"
            }, {
                n: "琼海市"
            }, {
                n: "儋州市"
            }, {
                n: "文昌市"
            }, {
                n: "万宁市"
            }, {
                n: "东方市"
            }, {
                n: "定安县"
            }, {
                n: "屯昌县"
            }, {
                n: "澄迈县"
            }, {
                n: "临高县"
            }, {
                n: "白沙黎族自治县"
            }, {
                n: "昌江黎族自治县"
            }, {
                n: "乐东黎族自治县"
            }, {
                n: "陵水黎族自治县"
            }, {
                n: "保亭黎族苗族自治县"
            }, {
                n: "琼中黎族苗族自治县"
            } ]
        } ]
    }, {
        n: "重庆市",
        c: [ {
            n: "万州区"
        }, {
            n: "涪陵区"
        }, {
            n: "渝中区"
        }, {
            n: "大渡口区"
        }, {
            n: "江北区"
        }, {
            n: "沙坪坝区"
        }, {
            n: "九龙坡区"
        }, {
            n: "南岸区"
        }, {
            n: "北碚区"
        }, {
            n: "綦江区"
        }, {
            n: "大足区"
        }, {
            n: "渝北区"
        }, {
            n: "巴南区"
        }, {
            n: "黔江区"
        }, {
            n: "长寿区"
        }, {
            n: "江津区"
        }, {
            n: "合川区"
        }, {
            n: "永川区"
        }, {
            n: "南川区"
        }, {
            n: "潼南县"
        }, {
            n: "铜梁县"
        }, {
            n: "荣昌县"
        }, {
            n: "璧山县"
        }, {
            n: "梁平县"
        }, {
            n: "城口县"
        }, {
            n: "丰都县"
        }, {
            n: "垫江县"
        }, {
            n: "武隆县"
        }, {
            n: "忠县"
        }, {
            n: "开县"
        }, {
            n: "云阳县"
        }, {
            n: "奉节县"
        }, {
            n: "巫山县"
        }, {
            n: "巫溪县"
        }, {
            n: "石柱土家族自治县"
        }, {
            n: "秀山土家族苗族自治县"
        }, {
            n: "酉阳土家族苗族自治县"
        }, {
            n: "彭水苗族土家族自治县"
        } ]
    }, {
        n: "四川省",
        c: [ {
            n: "成都市",
            c: [ {
                n: "市辖区"
            }, {
                n: "锦江区"
            }, {
                n: "青羊区"
            }, {
                n: "金牛区"
            }, {
                n: "武侯区"
            }, {
                n: "成华区"
            }, {
                n: "龙泉驿区"
            }, {
                n: "青白江区"
            }, {
                n: "新都区"
            }, {
                n: "温江区"
            }, {
                n: "金堂县"
            }, {
                n: "双流县"
            }, {
                n: "郫县"
            }, {
                n: "大邑县"
            }, {
                n: "蒲江县"
            }, {
                n: "新津县"
            }, {
                n: "都江堰市"
            }, {
                n: "彭州市"
            }, {
                n: "邛崃市"
            }, {
                n: "崇州市"
            } ]
        }, {
            n: "自贡市",
            c: [ {
                n: "市辖区"
            }, {
                n: "自流井区"
            }, {
                n: "贡井区"
            }, {
                n: "大安区"
            }, {
                n: "沿滩区"
            }, {
                n: "荣县"
            }, {
                n: "富顺县"
            } ]
        }, {
            n: "攀枝花市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东区"
            }, {
                n: "西区"
            }, {
                n: "仁和区"
            }, {
                n: "米易县"
            }, {
                n: "盐边县"
            } ]
        }, {
            n: "泸州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "江阳区"
            }, {
                n: "纳溪区"
            }, {
                n: "龙马潭区"
            }, {
                n: "泸县"
            }, {
                n: "合江县"
            }, {
                n: "叙永县"
            }, {
                n: "古蔺县"
            } ]
        }, {
            n: "德阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "旌阳区"
            }, {
                n: "中江县"
            }, {
                n: "罗江县"
            }, {
                n: "广汉市"
            }, {
                n: "什邡市"
            }, {
                n: "绵竹市"
            } ]
        }, {
            n: "绵阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "涪城区"
            }, {
                n: "游仙区"
            }, {
                n: "三台县"
            }, {
                n: "盐亭县"
            }, {
                n: "安县"
            }, {
                n: "梓潼县"
            }, {
                n: "北川羌族自治县"
            }, {
                n: "平武县"
            }, {
                n: "江油市"
            } ]
        }, {
            n: "广元市",
            c: [ {
                n: "市辖区"
            }, {
                n: "利州区"
            }, {
                n: "元坝区"
            }, {
                n: "朝天区"
            }, {
                n: "旺苍县"
            }, {
                n: "青川县"
            }, {
                n: "剑阁县"
            }, {
                n: "苍溪县"
            } ]
        }, {
            n: "遂宁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "船山区"
            }, {
                n: "安居区"
            }, {
                n: "蓬溪县"
            }, {
                n: "射洪县"
            }, {
                n: "大英县"
            } ]
        }, {
            n: "内江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "市中区"
            }, {
                n: "东兴区"
            }, {
                n: "威远县"
            }, {
                n: "资中县"
            }, {
                n: "隆昌县"
            } ]
        }, {
            n: "乐山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "市中区"
            }, {
                n: "沙湾区"
            }, {
                n: "五通桥区"
            }, {
                n: "金口河区"
            }, {
                n: "犍为县"
            }, {
                n: "井研县"
            }, {
                n: "夹江县"
            }, {
                n: "沐川县"
            }, {
                n: "峨边彝族自治县"
            }, {
                n: "马边彝族自治县"
            }, {
                n: "峨眉山市"
            } ]
        }, {
            n: "南充市",
            c: [ {
                n: "市辖区"
            }, {
                n: "顺庆区"
            }, {
                n: "高坪区"
            }, {
                n: "嘉陵区"
            }, {
                n: "南部县"
            }, {
                n: "营山县"
            }, {
                n: "蓬安县"
            }, {
                n: "仪陇县"
            }, {
                n: "西充县"
            }, {
                n: "阆中市"
            } ]
        }, {
            n: "眉山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "东坡区"
            }, {
                n: "仁寿县"
            }, {
                n: "彭山县"
            }, {
                n: "洪雅县"
            }, {
                n: "丹棱县"
            }, {
                n: "青神县"
            } ]
        }, {
            n: "宜宾市",
            c: [ {
                n: "市辖区"
            }, {
                n: "翠屏区"
            }, {
                n: "南溪区"
            }, {
                n: "宜宾县"
            }, {
                n: "江安县"
            }, {
                n: "长宁县"
            }, {
                n: "高县"
            }, {
                n: "珙县"
            }, {
                n: "筠连县"
            }, {
                n: "兴文县"
            }, {
                n: "屏山县"
            } ]
        }, {
            n: "广安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "广安区"
            }, {
                n: "前锋区"
            }, {
                n: "岳池县"
            }, {
                n: "武胜县"
            }, {
                n: "邻水县"
            }, {
                n: "华蓥市"
            } ]
        }, {
            n: "达州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "通川区"
            }, {
                n: "达川区"
            }, {
                n: "宣汉县"
            }, {
                n: "开江县"
            }, {
                n: "大竹县"
            }, {
                n: "渠县"
            }, {
                n: "万源市"
            } ]
        }, {
            n: "雅安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "雨城区"
            }, {
                n: "名山区"
            }, {
                n: "荥经县"
            }, {
                n: "汉源县"
            }, {
                n: "石棉县"
            }, {
                n: "天全县"
            }, {
                n: "芦山县"
            }, {
                n: "宝兴县"
            } ]
        }, {
            n: "巴中市",
            c: [ {
                n: "市辖区"
            }, {
                n: "巴州区"
            }, {
                n: "恩阳区"
            }, {
                n: "通江县"
            }, {
                n: "南江县"
            }, {
                n: "平昌县"
            } ]
        }, {
            n: "资阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "雁江区"
            }, {
                n: "安岳县"
            }, {
                n: "乐至县"
            }, {
                n: "简阳市"
            } ]
        }, {
            n: "阿坝藏族羌族自治州",
            c: [ {
                n: "汶川县"
            }, {
                n: "理县"
            }, {
                n: "茂县"
            }, {
                n: "松潘县"
            }, {
                n: "九寨沟县"
            }, {
                n: "金川县"
            }, {
                n: "小金县"
            }, {
                n: "黑水县"
            }, {
                n: "马尔康县"
            }, {
                n: "壤塘县"
            }, {
                n: "阿坝县"
            }, {
                n: "若尔盖县"
            }, {
                n: "红原县"
            } ]
        }, {
            n: "甘孜藏族自治州",
            c: [ {
                n: "康定县"
            }, {
                n: "泸定县"
            }, {
                n: "丹巴县"
            }, {
                n: "九龙县"
            }, {
                n: "雅江县"
            }, {
                n: "道孚县"
            }, {
                n: "炉霍县"
            }, {
                n: "甘孜县"
            }, {
                n: "新龙县"
            }, {
                n: "德格县"
            }, {
                n: "白玉县"
            }, {
                n: "石渠县"
            }, {
                n: "色达县"
            }, {
                n: "理塘县"
            }, {
                n: "巴塘县"
            }, {
                n: "乡城县"
            }, {
                n: "稻城县"
            }, {
                n: "得荣县"
            } ]
        }, {
            n: "凉山彝族自治州",
            c: [ {
                n: "西昌市"
            }, {
                n: "木里藏族自治县"
            }, {
                n: "盐源县"
            }, {
                n: "德昌县"
            }, {
                n: "会理县"
            }, {
                n: "会东县"
            }, {
                n: "宁南县"
            }, {
                n: "普格县"
            }, {
                n: "布拖县"
            }, {
                n: "金阳县"
            }, {
                n: "昭觉县"
            }, {
                n: "喜德县"
            }, {
                n: "冕宁县"
            }, {
                n: "越西县"
            }, {
                n: "甘洛县"
            }, {
                n: "美姑县"
            }, {
                n: "雷波县"
            } ]
        } ]
    }, {
        n: "贵州省",
        c: [ {
            n: "贵阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "南明区"
            }, {
                n: "云岩区"
            }, {
                n: "花溪区"
            }, {
                n: "乌当区"
            }, {
                n: "白云区"
            }, {
                n: "观山湖区"
            }, {
                n: "开阳县"
            }, {
                n: "息烽县"
            }, {
                n: "修文县"
            }, {
                n: "清镇市"
            } ]
        }, {
            n: "六盘水市",
            c: [ {
                n: "钟山区"
            }, {
                n: "六枝特区"
            }, {
                n: "水城县"
            }, {
                n: "盘县"
            } ]
        }, {
            n: "遵义市",
            c: [ {
                n: "市辖区"
            }, {
                n: "红花岗区"
            }, {
                n: "汇川区"
            }, {
                n: "遵义县"
            }, {
                n: "桐梓县"
            }, {
                n: "绥阳县"
            }, {
                n: "正安县"
            }, {
                n: "道真仡佬族苗族自治县"
            }, {
                n: "务川仡佬族苗族自治县"
            }, {
                n: "凤冈县"
            }, {
                n: "湄潭县"
            }, {
                n: "余庆县"
            }, {
                n: "习水县"
            }, {
                n: "赤水市"
            }, {
                n: "仁怀市"
            } ]
        }, {
            n: "安顺市",
            c: [ {
                n: "市辖区"
            }, {
                n: "西秀区"
            }, {
                n: "平坝县"
            }, {
                n: "普定县"
            }, {
                n: "镇宁布依族苗族自治县"
            }, {
                n: "关岭布依族苗族自治县"
            }, {
                n: "紫云苗族布依族自治县"
            } ]
        }, {
            n: "毕节市",
            c: [ {
                n: "市辖区"
            }, {
                n: "七星关区"
            }, {
                n: "大方县"
            }, {
                n: "黔西县"
            }, {
                n: "金沙县"
            }, {
                n: "织金县"
            }, {
                n: "纳雍县"
            }, {
                n: "威宁彝族回族苗族自治县"
            }, {
                n: "赫章县"
            } ]
        }, {
            n: "铜仁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "碧江区"
            }, {
                n: "万山区"
            }, {
                n: "江口县"
            }, {
                n: "玉屏侗族自治县"
            }, {
                n: "石阡县"
            }, {
                n: "思南县"
            }, {
                n: "印江土家族苗族自治县"
            }, {
                n: "德江县"
            }, {
                n: "沿河土家族自治县"
            }, {
                n: "松桃苗族自治县"
            } ]
        }, {
            n: "黔西南布依族苗族自治州",
            c: [ {
                n: "兴义市"
            }, {
                n: "兴仁县"
            }, {
                n: "普安县"
            }, {
                n: "晴隆县"
            }, {
                n: "贞丰县"
            }, {
                n: "望谟县"
            }, {
                n: "册亨县"
            }, {
                n: "安龙县"
            } ]
        }, {
            n: "黔东南苗族侗族自治州",
            c: [ {
                n: "凯里市"
            }, {
                n: "黄平县"
            }, {
                n: "施秉县"
            }, {
                n: "三穗县"
            }, {
                n: "镇远县"
            }, {
                n: "岑巩县"
            }, {
                n: "天柱县"
            }, {
                n: "锦屏县"
            }, {
                n: "剑河县"
            }, {
                n: "台江县"
            }, {
                n: "黎平县"
            }, {
                n: "榕江县"
            }, {
                n: "从江县"
            }, {
                n: "雷山县"
            }, {
                n: "麻江县"
            }, {
                n: "丹寨县"
            } ]
        }, {
            n: "黔南布依族苗族自治州",
            c: [ {
                n: "都匀市"
            }, {
                n: "福泉市"
            }, {
                n: "荔波县"
            }, {
                n: "贵定县"
            }, {
                n: "瓮安县"
            }, {
                n: "独山县"
            }, {
                n: "平塘县"
            }, {
                n: "罗甸县"
            }, {
                n: "长顺县"
            }, {
                n: "龙里县"
            }, {
                n: "惠水县"
            }, {
                n: "三都水族自治县"
            } ]
        } ]
    }, {
        n: "云南省",
        c: [ {
            n: "昆明市",
            c: [ {
                n: "市辖区"
            }, {
                n: "五华区"
            }, {
                n: "盘龙区"
            }, {
                n: "官渡区"
            }, {
                n: "西山区"
            }, {
                n: "东川区"
            }, {
                n: "呈贡区"
            }, {
                n: "晋宁县"
            }, {
                n: "富民县"
            }, {
                n: "宜良县"
            }, {
                n: "石林彝族自治县"
            }, {
                n: "嵩明县"
            }, {
                n: "禄劝彝族苗族自治县"
            }, {
                n: "寻甸回族彝族自治县"
            }, {
                n: "安宁市"
            } ]
        }, {
            n: "曲靖市",
            c: [ {
                n: "市辖区"
            }, {
                n: "麒麟区"
            }, {
                n: "马龙县"
            }, {
                n: "陆良县"
            }, {
                n: "师宗县"
            }, {
                n: "罗平县"
            }, {
                n: "富源县"
            }, {
                n: "会泽县"
            }, {
                n: "沾益县"
            }, {
                n: "宣威市"
            } ]
        }, {
            n: "玉溪市",
            c: [ {
                n: "市辖区"
            }, {
                n: "红塔区"
            }, {
                n: "江川县"
            }, {
                n: "澄江县"
            }, {
                n: "通海县"
            }, {
                n: "华宁县"
            }, {
                n: "易门县"
            }, {
                n: "峨山彝族自治县"
            }, {
                n: "新平彝族傣族自治县"
            }, {
                n: "元江哈尼族彝族傣族自治县"
            } ]
        }, {
            n: "保山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "隆阳区"
            }, {
                n: "施甸县"
            }, {
                n: "腾冲县"
            }, {
                n: "龙陵县"
            }, {
                n: "昌宁县"
            } ]
        }, {
            n: "昭通市",
            c: [ {
                n: "市辖区"
            }, {
                n: "昭阳区"
            }, {
                n: "鲁甸县"
            }, {
                n: "巧家县"
            }, {
                n: "盐津县"
            }, {
                n: "大关县"
            }, {
                n: "永善县"
            }, {
                n: "绥江县"
            }, {
                n: "镇雄县"
            }, {
                n: "彝良县"
            }, {
                n: "威信县"
            }, {
                n: "水富县"
            } ]
        }, {
            n: "丽江市",
            c: [ {
                n: "市辖区"
            }, {
                n: "古城区"
            }, {
                n: "玉龙纳西族自治县"
            }, {
                n: "永胜县"
            }, {
                n: "华坪县"
            }, {
                n: "宁蒗彝族自治县"
            } ]
        }, {
            n: "普洱市",
            c: [ {
                n: "市辖区"
            }, {
                n: "思茅区"
            }, {
                n: "宁洱哈尼族彝族自治县"
            }, {
                n: "墨江哈尼族自治县"
            }, {
                n: "景东彝族自治县"
            }, {
                n: "景谷傣族彝族自治县"
            }, {
                n: "镇沅彝族哈尼族拉祜族自治县"
            }, {
                n: "江城哈尼族彝族自治县"
            }, {
                n: "孟连傣族拉祜族佤族自治县"
            }, {
                n: "澜沧拉祜族自治县"
            }, {
                n: "西盟佤族自治县"
            } ]
        }, {
            n: "临沧市",
            c: [ {
                n: "市辖区"
            }, {
                n: "临翔区"
            }, {
                n: "凤庆县"
            }, {
                n: "云县"
            }, {
                n: "永德县"
            }, {
                n: "镇康县"
            }, {
                n: "双江拉祜族佤族布朗族傣族自治县"
            }, {
                n: "耿马傣族佤族自治县"
            }, {
                n: "沧源佤族自治县"
            } ]
        }, {
            n: "楚雄彝族自治州",
            c: [ {
                n: "楚雄市"
            }, {
                n: "双柏县"
            }, {
                n: "牟定县"
            }, {
                n: "南华县"
            }, {
                n: "姚安县"
            }, {
                n: "大姚县"
            }, {
                n: "永仁县"
            }, {
                n: "元谋县"
            }, {
                n: "武定县"
            }, {
                n: "禄丰县"
            } ]
        }, {
            n: "红河哈尼族彝族自治州",
            c: [ {
                n: "个旧市"
            }, {
                n: "开远市"
            }, {
                n: "蒙自市"
            }, {
                n: "弥勒市"
            }, {
                n: "屏边苗族自治县"
            }, {
                n: "建水县"
            }, {
                n: "石屏县"
            }, {
                n: "泸西县"
            }, {
                n: "元阳县"
            }, {
                n: "红河县"
            }, {
                n: "金平苗族瑶族傣族自治县"
            }, {
                n: "绿春县"
            }, {
                n: "河口瑶族自治县"
            } ]
        }, {
            n: "文山壮族苗族自治州",
            c: [ {
                n: "文山市"
            }, {
                n: "砚山县"
            }, {
                n: "西畴县"
            }, {
                n: "麻栗坡县"
            }, {
                n: "马关县"
            }, {
                n: "丘北县"
            }, {
                n: "广南县"
            }, {
                n: "富宁县"
            } ]
        }, {
            n: "西双版纳傣族自治州",
            c: [ {
                n: "景洪市"
            }, {
                n: "勐海县"
            }, {
                n: "勐腊县"
            } ]
        }, {
            n: "大理白族自治州",
            c: [ {
                n: "大理市"
            }, {
                n: "漾濞彝族自治县"
            }, {
                n: "祥云县"
            }, {
                n: "宾川县"
            }, {
                n: "弥渡县"
            }, {
                n: "南涧彝族自治县"
            }, {
                n: "巍山彝族回族自治县"
            }, {
                n: "永平县"
            }, {
                n: "云龙县"
            }, {
                n: "洱源县"
            }, {
                n: "剑川县"
            }, {
                n: "鹤庆县"
            } ]
        }, {
            n: "德宏傣族景颇族自治州",
            c: [ {
                n: "瑞丽市"
            }, {
                n: "芒市"
            }, {
                n: "梁河县"
            }, {
                n: "盈江县"
            }, {
                n: "陇川县"
            } ]
        }, {
            n: "怒江傈僳族自治州",
            c: [ {
                n: "泸水县"
            }, {
                n: "福贡县"
            }, {
                n: "贡山独龙族怒族自治县"
            }, {
                n: "兰坪白族普米族自治县"
            } ]
        }, {
            n: "迪庆藏族自治州",
            c: [ {
                n: "香格里拉县"
            }, {
                n: "德钦县"
            }, {
                n: "维西傈僳族自治县"
            } ]
        } ]
    }, {
        n: "西藏自治区",
        c: [ {
            n: "拉萨市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城关区"
            }, {
                n: "林周县"
            }, {
                n: "当雄县"
            }, {
                n: "尼木县"
            }, {
                n: "曲水县"
            }, {
                n: "堆龙德庆县"
            }, {
                n: "达孜县"
            }, {
                n: "墨竹工卡县"
            } ]
        }, {
            n: "昌都地区",
            c: [ {
                n: "昌都县"
            }, {
                n: "江达县"
            }, {
                n: "贡觉县"
            }, {
                n: "类乌齐县"
            }, {
                n: "丁青县"
            }, {
                n: "察雅县"
            }, {
                n: "八宿县"
            }, {
                n: "左贡县"
            }, {
                n: "芒康县"
            }, {
                n: "洛隆县"
            }, {
                n: "边坝县"
            } ]
        }, {
            n: "山南地区",
            c: [ {
                n: "乃东县"
            }, {
                n: "扎囊县"
            }, {
                n: "贡嘎县"
            }, {
                n: "桑日县"
            }, {
                n: "琼结县"
            }, {
                n: "曲松县"
            }, {
                n: "措美县"
            }, {
                n: "洛扎县"
            }, {
                n: "加查县"
            }, {
                n: "隆子县"
            }, {
                n: "错那县"
            }, {
                n: "浪卡子县"
            } ]
        }, {
            n: "日喀则地区",
            c: [ {
                n: "日喀则市"
            }, {
                n: "南木林县"
            }, {
                n: "江孜县"
            }, {
                n: "定日县"
            }, {
                n: "萨迦县"
            }, {
                n: "拉孜县"
            }, {
                n: "昂仁县"
            }, {
                n: "谢通门县"
            }, {
                n: "白朗县"
            }, {
                n: "仁布县"
            }, {
                n: "康马县"
            }, {
                n: "定结县"
            }, {
                n: "仲巴县"
            }, {
                n: "亚东县"
            }, {
                n: "吉隆县"
            }, {
                n: "聂拉木县"
            }, {
                n: "萨嘎县"
            }, {
                n: "岗巴县"
            } ]
        }, {
            n: "那曲地区",
            c: [ {
                n: "那曲县"
            }, {
                n: "嘉黎县"
            }, {
                n: "比如县"
            }, {
                n: "聂荣县"
            }, {
                n: "安多县"
            }, {
                n: "申扎县"
            }, {
                n: "索县"
            }, {
                n: "班戈县"
            }, {
                n: "巴青县"
            }, {
                n: "尼玛县"
            }, {
                n: "双湖县"
            } ]
        }, {
            n: "阿里地区",
            c: [ {
                n: "普兰县"
            }, {
                n: "札达县"
            }, {
                n: "噶尔县"
            }, {
                n: "日土县"
            }, {
                n: "革吉县"
            }, {
                n: "改则县"
            }, {
                n: "措勤县"
            } ]
        }, {
            n: "林芝地区",
            c: [ {
                n: "林芝县"
            }, {
                n: "工布江达县"
            }, {
                n: "米林县"
            }, {
                n: "墨脱县"
            }, {
                n: "波密县"
            }, {
                n: "察隅县"
            }, {
                n: "朗县"
            } ]
        } ]
    }, {
        n: "陕西省",
        c: [ {
            n: "西安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "新城区"
            }, {
                n: "碑林区"
            }, {
                n: "莲湖区"
            }, {
                n: "灞桥区"
            }, {
                n: "未央区"
            }, {
                n: "雁塔区"
            }, {
                n: "阎良区"
            }, {
                n: "临潼区"
            }, {
                n: "长安区"
            }, {
                n: "蓝田县"
            }, {
                n: "周至县"
            }, {
                n: "户县"
            }, {
                n: "高陵县"
            } ]
        }, {
            n: "铜川市",
            c: [ {
                n: "市辖区"
            }, {
                n: "王益区"
            }, {
                n: "印台区"
            }, {
                n: "耀州区"
            }, {
                n: "宜君县"
            } ]
        }, {
            n: "宝鸡市",
            c: [ {
                n: "市辖区"
            }, {
                n: "渭滨区"
            }, {
                n: "金台区"
            }, {
                n: "陈仓区"
            }, {
                n: "凤翔县"
            }, {
                n: "岐山县"
            }, {
                n: "扶风县"
            }, {
                n: "眉县"
            }, {
                n: "陇县"
            }, {
                n: "千阳县"
            }, {
                n: "麟游县"
            }, {
                n: "凤县"
            }, {
                n: "太白县"
            } ]
        }, {
            n: "咸阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "秦都区"
            }, {
                n: "杨陵区"
            }, {
                n: "渭城区"
            }, {
                n: "三原县"
            }, {
                n: "泾阳县"
            }, {
                n: "乾县"
            }, {
                n: "礼泉县"
            }, {
                n: "永寿县"
            }, {
                n: "彬县"
            }, {
                n: "长武县"
            }, {
                n: "旬邑县"
            }, {
                n: "淳化县"
            }, {
                n: "武功县"
            }, {
                n: "兴平市"
            } ]
        }, {
            n: "渭南市",
            c: [ {
                n: "市辖区"
            }, {
                n: "临渭区"
            }, {
                n: "华县"
            }, {
                n: "潼关县"
            }, {
                n: "大荔县"
            }, {
                n: "合阳县"
            }, {
                n: "澄城县"
            }, {
                n: "蒲城县"
            }, {
                n: "白水县"
            }, {
                n: "富平县"
            }, {
                n: "韩城市"
            }, {
                n: "华阴市"
            } ]
        }, {
            n: "延安市",
            c: [ {
                n: "市辖区"
            }, {
                n: "宝塔区"
            }, {
                n: "延长县"
            }, {
                n: "延川县"
            }, {
                n: "子长县"
            }, {
                n: "安塞县"
            }, {
                n: "志丹县"
            }, {
                n: "吴起县"
            }, {
                n: "甘泉县"
            }, {
                n: "富县"
            }, {
                n: "洛川县"
            }, {
                n: "宜川县"
            }, {
                n: "黄龙县"
            }, {
                n: "黄陵县"
            } ]
        }, {
            n: "汉中市",
            c: [ {
                n: "市辖区"
            }, {
                n: "汉台区"
            }, {
                n: "南郑县"
            }, {
                n: "城固县"
            }, {
                n: "洋县"
            }, {
                n: "西乡县"
            }, {
                n: "勉县"
            }, {
                n: "宁强县"
            }, {
                n: "略阳县"
            }, {
                n: "镇巴县"
            }, {
                n: "留坝县"
            }, {
                n: "佛坪县"
            } ]
        }, {
            n: "榆林市",
            c: [ {
                n: "市辖区"
            }, {
                n: "榆阳区"
            }, {
                n: "神木县"
            }, {
                n: "府谷县"
            }, {
                n: "横山县"
            }, {
                n: "靖边县"
            }, {
                n: "定边县"
            }, {
                n: "绥德县"
            }, {
                n: "米脂县"
            }, {
                n: "佳县"
            }, {
                n: "吴堡县"
            }, {
                n: "清涧县"
            }, {
                n: "子洲县"
            } ]
        }, {
            n: "安康市",
            c: [ {
                n: "市辖区"
            }, {
                n: "汉滨区"
            }, {
                n: "汉阴县"
            }, {
                n: "石泉县"
            }, {
                n: "宁陕县"
            }, {
                n: "紫阳县"
            }, {
                n: "岚皋县"
            }, {
                n: "平利县"
            }, {
                n: "镇坪县"
            }, {
                n: "旬阳县"
            }, {
                n: "白河县"
            } ]
        }, {
            n: "商洛市",
            c: [ {
                n: "市辖区"
            }, {
                n: "商州区"
            }, {
                n: "洛南县"
            }, {
                n: "丹凤县"
            }, {
                n: "商南县"
            }, {
                n: "山阳县"
            }, {
                n: "镇安县"
            }, {
                n: "柞水县"
            } ]
        } ]
    }, {
        n: "甘肃省",
        c: [ {
            n: "兰州市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城关区"
            }, {
                n: "七里河区"
            }, {
                n: "西固区"
            }, {
                n: "安宁区"
            }, {
                n: "红古区"
            }, {
                n: "永登县"
            }, {
                n: "皋兰县"
            }, {
                n: "榆中县"
            } ]
        }, {
            n: "嘉峪关市",
            c: [ {
                n: "市辖区"
            } ]
        }, {
            n: "金昌市",
            c: [ {
                n: "市辖区"
            }, {
                n: "金川区"
            }, {
                n: "永昌县"
            } ]
        }, {
            n: "白银市",
            c: [ {
                n: "市辖区"
            }, {
                n: "白银区"
            }, {
                n: "平川区"
            }, {
                n: "靖远县"
            }, {
                n: "会宁县"
            }, {
                n: "景泰县"
            } ]
        }, {
            n: "天水市",
            c: [ {
                n: "市辖区"
            }, {
                n: "秦州区"
            }, {
                n: "麦积区"
            }, {
                n: "清水县"
            }, {
                n: "秦安县"
            }, {
                n: "甘谷县"
            }, {
                n: "武山县"
            }, {
                n: "张家川回族自治县"
            } ]
        }, {
            n: "武威市",
            c: [ {
                n: "市辖区"
            }, {
                n: "凉州区"
            }, {
                n: "民勤县"
            }, {
                n: "古浪县"
            }, {
                n: "天祝藏族自治县"
            } ]
        }, {
            n: "张掖市",
            c: [ {
                n: "市辖区"
            }, {
                n: "甘州区"
            }, {
                n: "肃南裕固族自治县"
            }, {
                n: "民乐县"
            }, {
                n: "临泽县"
            }, {
                n: "高台县"
            }, {
                n: "山丹县"
            } ]
        }, {
            n: "平凉市",
            c: [ {
                n: "市辖区"
            }, {
                n: "崆峒区"
            }, {
                n: "泾川县"
            }, {
                n: "灵台县"
            }, {
                n: "崇信县"
            }, {
                n: "华亭县"
            }, {
                n: "庄浪县"
            }, {
                n: "静宁县"
            } ]
        }, {
            n: "酒泉市",
            c: [ {
                n: "市辖区"
            }, {
                n: "肃州区"
            }, {
                n: "金塔县"
            }, {
                n: "瓜州县"
            }, {
                n: "肃北蒙古族自治县"
            }, {
                n: "阿克塞哈萨克族自治县"
            }, {
                n: "玉门市"
            }, {
                n: "敦煌市"
            } ]
        }, {
            n: "庆阳市",
            c: [ {
                n: "市辖区"
            }, {
                n: "西峰区"
            }, {
                n: "庆城县"
            }, {
                n: "环县"
            }, {
                n: "华池县"
            }, {
                n: "合水县"
            }, {
                n: "正宁县"
            }, {
                n: "宁县"
            }, {
                n: "镇原县"
            } ]
        }, {
            n: "定西市",
            c: [ {
                n: "市辖区"
            }, {
                n: "安定区"
            }, {
                n: "通渭县"
            }, {
                n: "陇西县"
            }, {
                n: "渭源县"
            }, {
                n: "临洮县"
            }, {
                n: "漳县"
            }, {
                n: "岷县"
            } ]
        }, {
            n: "陇南市",
            c: [ {
                n: "市辖区"
            }, {
                n: "武都区"
            }, {
                n: "成县"
            }, {
                n: "文县"
            }, {
                n: "宕昌县"
            }, {
                n: "康县"
            }, {
                n: "西和县"
            }, {
                n: "礼县"
            }, {
                n: "徽县"
            }, {
                n: "两当县"
            } ]
        }, {
            n: "临夏回族自治州",
            c: [ {
                n: "临夏市"
            }, {
                n: "临夏县"
            }, {
                n: "康乐县"
            }, {
                n: "永靖县"
            }, {
                n: "广河县"
            }, {
                n: "和政县"
            }, {
                n: "东乡族自治县"
            }, {
                n: "积石山保安族东乡族撒拉族自治县"
            } ]
        }, {
            n: "甘南藏族自治州",
            c: [ {
                n: "合作市"
            }, {
                n: "临潭县"
            }, {
                n: "卓尼县"
            }, {
                n: "舟曲县"
            }, {
                n: "迭部县"
            }, {
                n: "玛曲县"
            }, {
                n: "碌曲县"
            }, {
                n: "夏河县"
            } ]
        } ]
    }, {
        n: "青海省",
        c: [ {
            n: "西宁市",
            c: [ {
                n: "市辖区"
            }, {
                n: "城东区"
            }, {
                n: "城中区"
            }, {
                n: "城西区"
            }, {
                n: "城北区"
            }, {
                n: "大通回族土族自治县"
            }, {
                n: "湟中县"
            }, {
                n: "湟源县"
            } ]
        }, {
            n: "海东市",
            c: [ {
                n: "乐都区"
            }, {
                n: "平安县"
            }, {
                n: "民和回族土族自治县"
            }, {
                n: "互助土族自治县"
            }, {
                n: "化隆回族自治县"
            }, {
                n: "循化撒拉族自治县"
            } ]
        }, {
            n: "海北藏族自治州",
            c: [ {
                n: "门源回族自治县"
            }, {
                n: "祁连县"
            }, {
                n: "海晏县"
            }, {
                n: "刚察县"
            } ]
        }, {
            n: "黄南藏族自治州",
            c: [ {
                n: "同仁县"
            }, {
                n: "尖扎县"
            }, {
                n: "泽库县"
            }, {
                n: "河南蒙古族自治县"
            } ]
        }, {
            n: "海南藏族自治州",
            c: [ {
                n: "共和县"
            }, {
                n: "同德县"
            }, {
                n: "贵德县"
            }, {
                n: "兴海县"
            }, {
                n: "贵南县"
            } ]
        }, {
            n: "果洛藏族自治州",
            c: [ {
                n: "玛沁县"
            }, {
                n: "班玛县"
            }, {
                n: "甘德县"
            }, {
                n: "达日县"
            }, {
                n: "久治县"
            }, {
                n: "玛多县"
            } ]
        }, {
            n: "玉树藏族自治州",
            c: [ {
                n: "玉树市"
            }, {
                n: "杂多县"
            }, {
                n: "称多县"
            }, {
                n: "治多县"
            }, {
                n: "囊谦县"
            }, {
                n: "曲麻莱县"
            } ]
        }, {
            n: "海西蒙古族藏族自治州",
            c: [ {
                n: "格尔木市"
            }, {
                n: "德令哈市"
            }, {
                n: "乌兰县"
            }, {
                n: "都兰县"
            }, {
                n: "天峻县"
            } ]
        } ]
    }, {
        n: "宁夏回族自治区",
        c: [ {
            n: "银川市",
            c: [ {
                n: "市辖区"
            }, {
                n: "兴庆区"
            }, {
                n: "西夏区"
            }, {
                n: "金凤区"
            }, {
                n: "永宁县"
            }, {
                n: "贺兰县"
            }, {
                n: "灵武市"
            } ]
        }, {
            n: "石嘴山市",
            c: [ {
                n: "市辖区"
            }, {
                n: "大武口区"
            }, {
                n: "惠农区"
            }, {
                n: "平罗县"
            } ]
        }, {
            n: "吴忠市",
            c: [ {
                n: "市辖区"
            }, {
                n: "利通区"
            }, {
                n: "红寺堡区"
            }, {
                n: "盐池县"
            }, {
                n: "同心县"
            }, {
                n: "青铜峡市"
            } ]
        }, {
            n: "固原市",
            c: [ {
                n: "市辖区"
            }, {
                n: "原州区"
            }, {
                n: "西吉县"
            }, {
                n: "隆德县"
            }, {
                n: "泾源县"
            }, {
                n: "彭阳县"
            } ]
        }, {
            n: "中卫市",
            c: [ {
                n: "市辖区"
            }, {
                n: "沙坡头区"
            }, {
                n: "中宁县"
            }, {
                n: "海原县"
            } ]
        } ]
    }, {
        n: "新疆维吾尔自治区",
        c: [ {
            n: "乌鲁木齐市",
            c: [ {
                n: "市辖区"
            }, {
                n: "天山区"
            }, {
                n: "沙依巴克区"
            }, {
                n: "新市区"
            }, {
                n: "水磨沟区"
            }, {
                n: "头屯河区"
            }, {
                n: "达坂城区"
            }, {
                n: "米东区"
            }, {
                n: "乌鲁木齐县"
            } ]
        }, {
            n: "克拉玛依市",
            c: [ {
                n: "市辖区"
            }, {
                n: "独山子区"
            }, {
                n: "克拉玛依区"
            }, {
                n: "白碱滩区"
            }, {
                n: "乌尔禾区"
            } ]
        }, {
            n: "吐鲁番地区",
            c: [ {
                n: "吐鲁番市"
            }, {
                n: "鄯善县"
            }, {
                n: "托克逊县"
            } ]
        }, {
            n: "哈密地区",
            c: [ {
                n: "哈密市"
            }, {
                n: "巴里坤哈萨克自治县"
            }, {
                n: "伊吾县"
            } ]
        }, {
            n: "昌吉回族自治州",
            c: [ {
                n: "昌吉市"
            }, {
                n: "阜康市"
            }, {
                n: "呼图壁县"
            }, {
                n: "玛纳斯县"
            }, {
                n: "奇台县"
            }, {
                n: "吉木萨尔县"
            }, {
                n: "木垒哈萨克自治县"
            } ]
        }, {
            n: "博尔塔拉蒙古自治州",
            c: [ {
                n: "博乐市"
            }, {
                n: "阿拉山口市"
            }, {
                n: "精河县"
            }, {
                n: "温泉县"
            } ]
        }, {
            n: "巴音郭楞蒙古自治州",
            c: [ {
                n: "库尔勒市"
            }, {
                n: "轮台县"
            }, {
                n: "尉犁县"
            }, {
                n: "若羌县"
            }, {
                n: "且末县"
            }, {
                n: "焉耆回族自治县"
            }, {
                n: "和静县"
            }, {
                n: "和硕县"
            }, {
                n: "博湖县"
            } ]
        }, {
            n: "阿克苏地区",
            c: [ {
                n: "阿克苏市"
            }, {
                n: "温宿县"
            }, {
                n: "库车县"
            }, {
                n: "沙雅县"
            }, {
                n: "新和县"
            }, {
                n: "拜城县"
            }, {
                n: "乌什县"
            }, {
                n: "阿瓦提县"
            }, {
                n: "柯坪县"
            } ]
        }, {
            n: "克孜勒苏柯尔克孜自治州",
            c: [ {
                n: "阿图什市"
            }, {
                n: "阿克陶县"
            }, {
                n: "阿合奇县"
            }, {
                n: "乌恰县"
            } ]
        }, {
            n: "喀什地区",
            c: [ {
                n: "喀什市"
            }, {
                n: "疏附县"
            }, {
                n: "疏勒县"
            }, {
                n: "英吉沙县"
            }, {
                n: "泽普县"
            }, {
                n: "莎车县"
            }, {
                n: "叶城县"
            }, {
                n: "麦盖提县"
            }, {
                n: "岳普湖县"
            }, {
                n: "伽师县"
            }, {
                n: "巴楚县"
            }, {
                n: "塔什库尔干塔吉克自治县"
            } ]
        }, {
            n: "和田地区",
            c: [ {
                n: "和田市"
            }, {
                n: "和田县"
            }, {
                n: "墨玉县"
            }, {
                n: "皮山县"
            }, {
                n: "洛浦县"
            }, {
                n: "策勒县"
            }, {
                n: "于田县"
            }, {
                n: "民丰县"
            } ]
        }, {
            n: "伊犁哈萨克自治州",
            c: [ {
                n: "伊宁市"
            }, {
                n: "奎屯市"
            }, {
                n: "伊宁县"
            }, {
                n: "察布查尔锡伯自治县"
            }, {
                n: "霍城县"
            }, {
                n: "巩留县"
            }, {
                n: "新源县"
            }, {
                n: "昭苏县"
            }, {
                n: "特克斯县"
            }, {
                n: "尼勒克县"
            } ]
        }, {
            n: "塔城地区",
            c: [ {
                n: "塔城市"
            }, {
                n: "乌苏市"
            }, {
                n: "额敏县"
            }, {
                n: "沙湾县"
            }, {
                n: "托里县"
            }, {
                n: "裕民县"
            }, {
                n: "和布克赛尔蒙古自治县"
            } ]
        }, {
            n: "阿勒泰地区",
            c: [ {
                n: "阿勒泰市"
            }, {
                n: "布尔津县"
            }, {
                n: "富蕴县"
            }, {
                n: "福海县"
            }, {
                n: "哈巴河县"
            }, {
                n: "青河县"
            }, {
                n: "吉木乃县"
            } ]
        }, {
            n: "自治区直辖县级行政区划",
            c: [ {
                n: "石河子市"
            }, {
                n: "阿拉尔市"
            }, {
                n: "图木舒克市"
            }, {
                n: "五家渠市"
            } ]
        } ]
    }, {
        n: "台湾省",
        c: [ {
            n: "台湾"
        } ]
    }, {
        n: "香港特别行政区",
        c: [ {
            n: "市辖区"
        }, {
            n: "香港岛"
        }, {
            n: "九龙"
        }, {
            n: "新界"
        } ]
    }, {
        n: "澳门特别行政区",
        c: [ {
            n: "澳门"
        } ]
    } ];
}, function(n, e, t) {
    var r = t(48);
    "string" == typeof r && (r = [ [ n.id, r, "" ] ]);
    t(50)(r, {});
    r.locals && (n.exports = r.locals);
}, function(n, e, t) {
    e = n.exports = t(49)(), e.push([ n.id, ".ui-address-selector-default *{box-sizing:border-box}.ui-address-selector-default{width:100%;height:100%;overflow-y:scroll;display:none}.ui-address-selector-default ul{list-style:none;padding-left:0;margin-top:0;margin:0}.ui-address-selector-default a{text-decoration:none;color:#666;display:inline-block;width:100%}.ui-address-selector-default a.uasd-current{color:#1e6fda}.ui-address-selector-default .uasd-type>ul{position:relative;height:44px;line-height:44px;background-color:#efeff4;border-bottom:1px solid #d7d6dc;text-align:center}.ui-address-selector-default .uasd-type>ul>li>a{display:none}.ui-address-selector-default .uasd-type>ul>li>a.uasd-current{display:block}.ui-address-selector-default .uasd-icon{position:absolute;top:0;font-size:16px;font-weight:700;color:#b7b6bc;width:16px;text-align:center}.ui-address-selector-default .uasd-icon.uasd-left{left:14px}.ui-address-selector-default .uasd-icon.uasd-right{right:14px}.ui-address-selector-default .uasd-main .uasd-letter{display:none!important}.ui-address-selector-default .uasd-main{background-color:#fff;border-top:1px solid #d7d6dc;overflow:hidden;position:relative;margin-top:-1px}.ui-address-selector-default .uasd-main .uasd-content>li{border-bottom:1px solid #efeff4;position:relative;padding-right:14px;height:44px;line-height:44px;font-size:16px}.ui-address-selector-default .uasd-main .uasd-content>li>a{padding-left:14px}", "" ]);
}, function(n, e) {
    n.exports = function() {
        var n = [];
        return n.toString = function() {
            for (var n = [], e = 0; e < this.length; e++) {
                var t = this[e];
                t[2] ? n.push("@media " + t[2] + "{" + t[1] + "}") : n.push(t[1]);
            }
            return n.join("");
        }, n.i = function(e, t) {
            "string" == typeof e && (e = [ [ null, e, "" ] ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0);
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), 
                n.push(a));
            }
        }, n;
    };
}, function(n, e, t) {
    function r(n, e) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t], i = p[r.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                for (;o < r.parts.length; o++) i.parts.push(u(r.parts[o], e));
            } else {
                for (var a = [], o = 0; o < r.parts.length; o++) a.push(u(r.parts[o], e));
                p[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                };
            }
        }
    }
    function i(n) {
        for (var e = [], t = {}, r = 0; r < n.length; r++) {
            var i = n[r], o = i[0], a = i[1], s = i[2], c = i[3], u = {
                css: a,
                media: s,
                sourceMap: c
            };
            t[o] ? t[o].parts.push(u) : e.push(t[o] = {
                id: o,
                parts: [ u ]
            });
        }
        return e;
    }
    function o(n, e) {
        var t = m(), r = $[$.length - 1];
        if ("top" === n.insertAt) r ? r.nextSibling ? t.insertBefore(e, r.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), 
        $.push(e); else {
            if ("bottom" !== n.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            t.appendChild(e);
        }
    }
    function a(n) {
        n.parentNode.removeChild(n);
        var e = $.indexOf(n);
        e >= 0 && $.splice(e, 1);
    }
    function s(n) {
        var e = document.createElement("style");
        return e.type = "text/css", o(n, e), e;
    }
    function c(n) {
        var e = document.createElement("link");
        return e.rel = "stylesheet", o(n, e), e;
    }
    function u(n, e) {
        var t, r, i;
        if (e.singleton) {
            var o = y++;
            t = v || (v = s(e)), r = l.bind(null, t, o, !1), i = l.bind(null, t, o, !0);
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = c(e), 
        r = d.bind(null, t), i = function() {
            a(t), t.href && URL.revokeObjectURL(t.href);
        }) : (t = s(e), r = f.bind(null, t), i = function() {
            a(t);
        });
        return r(n), function(e) {
            if (e) {
                if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                r(n = e);
            } else i();
        };
    }
    function l(n, e, t, r) {
        var i = t ? "" : r.css;
        if (n.styleSheet) n.styleSheet.cssText = w(e, i); else {
            var o = document.createTextNode(i), a = n.childNodes;
            a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(o, a[e]) : n.appendChild(o);
        }
    }
    function f(n, e) {
        var t = e.css, r = e.media;
        if (r && n.setAttribute("media", r), n.styleSheet) n.styleSheet.cssText = t; else {
            for (;n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
        }
    }
    function d(n, e) {
        var t = e.css, r = e.sourceMap;
        r && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var i = new Blob([ t ], {
            type: "text/css"
        }), o = n.href;
        n.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o);
    }
    var p = {}, h = function(n) {
        var e;
        return function() {
            return "undefined" == typeof e && (e = n.apply(this, arguments)), e;
        };
    }, g = h(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), m = h(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), v = null, y = 0, $ = [];
    n.exports = function(n, e) {
        e = e || {}, "undefined" == typeof e.singleton && (e.singleton = g()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
        var t = i(n);
        return r(t, e), function(n) {
            for (var o = [], a = 0; a < t.length; a++) {
                var s = t[a], c = p[s.id];
                c.refs--, o.push(c);
            }
            if (n) {
                var u = i(n);
                r(u, e);
            }
            for (var a = 0; a < o.length; a++) {
                var c = o[a];
                if (0 === c.refs) {
                    for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                    delete p[c.id];
                }
            }
        };
    };
    var w = function() {
        var n = [];
        return function(e, t) {
            return n[e] = t, n.filter(Boolean).join("\n");
        };
    }();
}, function(n, e, t) {
    var r = t(52);
    "string" == typeof r && (r = [ [ n.id, r, "" ] ]);
    t(50)(r, {});
    r.locals && (n.exports = r.locals);
}, function(n, e, t) {
    e = n.exports = t(49)(), e.push([ n.id, ".ui-address-selector-default *{box-sizing:border-box}.ui-address-selector-default{width:538px;display:none;position:absolute;font-size:14px;border:1px solid #afafaf;background-color:#f6f7f9}.ui-address-selector-default ul{list-style:none;padding-left:0}.ui-address-selector-default a{text-decoration:none;color:#666}.ui-address-selector-default a.uasd-current{color:#1e6fda}.ui-address-selector-default .uasd-type>ul{border-bottom:2px solid #1e6fda;height:30px;margin:20px 20px 15px}.ui-address-selector-default .uasd-type>ul>li{float:left;margin-right:8px;line-height:20px}.ui-address-selector-default .uasd-type>ul>li>a{color:#666;cursor:pointer;display:block;padding:4px 15px;position:relative;bottom:1px;border:1px solid #ddd;border-bottom-color:#1e6fda}.ui-address-selector-default .uasd-type>ul>li.uasd-last{margin-right:12px}.ui-address-selector-default .uasd-type>ul>li>a.uasd-current{color:#fff;background-color:#1e6fda;border-color:#1e6fda}.ui-address-selector-default .uasd-main{padding:0 20px}.ui-address-selector-default .uasd-main .uasd-letter{color:#666;display:none;width:60px;float:left}.ui-address-selector-default .uasd-main .uasd-content{display:none;margin-left:60px;padding-left:14px}.ui-address-selector-default .uasd-main .uasd-content.luasd-ast{padding-left:0}.ui-address-selector-default .uasd-main .uasd-content li{display:inline-block;width:33%;margin-bottom:10px;*display:inline;zoom:1}", "" ]);
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", function(n) {
        return {
            restrict: "EA",
            scope: {
                isEnded: "="
            },
            link: function(n, e, t) {
                var r = e.find("video"), i = e.find("i"), o = e.find("img");
                r[0].controls = !0, i.on("click", function() {
                    r[0].play(), i.css("display", "none"), o.css("display", "none"), r.css("display", "block");
                }), r.on("click", function() {
                    r[0].pause(), i.css("display", "block"), o.css("display", "none"), r.css("display", "block"), 
                    n.$apply(function() {
                        n.isEnded = "ended";
                    });
                }), r.on("play", function() {
                    i.css("display", "none"), o.css("display", "none"), r.css("display", "block");
                }), r.bind("ended", function() {
                    r[0].pause(), i.css("display", "block"), o.css("display", "none"), r.css("display", "block"), 
                    n.isEnded = "ended";
                });
            }
        };
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ function() {
        var n = function(n, e) {
            this.message = n, this.code = e;
        };
        return n.prototype = new Error(), n;
    } ];
}, function(n, e, t) {
    "use strict";
    n.exports = [ function() {
        return t(46);
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ function() {
        var n = {}, e = [ {
            bank_name: "招商银行",
            bank_code: "cmb"
        }, {
            bank_name: "中国银行",
            bank_code: "boc"
        }, {
            bank_name: "其他大陆银行",
            bank_code: "othercn"
        }, {
            bank_name: "工商银行",
            bank_code: "icbc"
        }, {
            bank_name: "光大银行",
            bank_code: "ceb"
        } ], t = [ {
            bank_name: "招商银行香港分行",
            bank_code: "cmbhk"
        }, {
            bank_name: "中国银行（香港）",
            bank_code: "bochk"
        }, {
            bank_name: "中国工商银行（亚洲）",
            bank_code: "icbcasia"
        }, {
            bank_name: "其他银行（香港银行以及中国境外银行）",
            bank_code: "otherhk"
        }, {
            bank_name: "恒生银行",
            bank_code: "hangseng"
        }, {
            bank_name: "光大银行",
            bank_code: "ceb"
        } ];
        return n.list = function(n) {
            return 1 === +n ? t : 2 === +n ? e : void 0;
        }, n;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$http", "$q", "MyError", function(n, e, t) {
        var r = function(r) {
            return e(function(e, i) {
                n(r).success(function(n) {
                    0 === +n.code ? e(n.data) : i(new t(n.message, n.code));
                }).error(function(n, e) {
                    i(new t("http request error with status " + e, e));
                });
            });
        }, i = [ "get", "head", "post", "put", "delete", "jsonp", "patch" ];
        return i.forEach(function(i) {
            r[i] = function() {
                var r = arguments;
                return e(function(e, o) {
                    n[i].apply(n, r).success(function(n) {
                        0 === +n.code ? e(n.data) : o(new t(n.message, n.code));
                    }).error(function(n, e) {
                        o(new t("http request error with status " + e, e));
                    });
                });
            };
        }), r;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$location", "login", "agent", "dialog", function(n, e, t, r, i) {
        var o = {};
        return o.refresh = function(n) {
            return t.login().then(function(e) {
                o.fillInfo(e), n && n(null);
            }, function(e) {
                o.clearInfo(), n && n(e);
            });
        }, o.fillInfo = function(e) {
            o.name = e.name, o.state = n.state = +e.state, o.taskStatus = n.taskStatus = +e.newbie_task_status, 
            o.appType = n.appType = +e.apply_type, n.isNewbiePass = +e.is_newbie_pass_alert, 
            "undefined" == typeof o.state && (o.state = 1), n.isLogin = !0, n.agentName = e.name;
        }, o.monitorState = function() {
            r.getAgentInfo().then(function(e) {
                e.newbie_audit_passed_at ? n.passTime = e.newbie_audit_passed_at : n.passTime = "--:--:--";
            }, function(n) {
                alert(n);
            });
        }, o.clearInfo = function() {
            o.name = "", o.state = void 0, n.agentName = "", n.isLogin = !1;
        }, o.noLogin = function() {
            o.clearInfo(), e.path("/");
        }, o.jump = function() {
            if ("undefined" == typeof o.state) return void e.path("/");
            switch (o.state) {
              case 0:
                e.path("/index/customer-list");
                break;

              case 1:
                e.path("/index/fill-agent");
                break;

              case 2:
                1 === o.appType ? e.path("/index/agreement-agent") : 2 === o.appType && e.path("/index/video-interview");
                break;

              case 3:
                e.path("/index/access-agent");
                break;

              case 4:
                3 === o.taskStatus ? e.path("/index/customer-list") : 2 === o.taskStatus ? e.path("/index/complete-test") : e.path("/index/agent-task");
                break;

              case 5:
                e.path("/index/video-interview");
                break;

              case -1:
                e.path("/index/function-set");
                break;

              case -2:
                e.path("/index/access-agent");
                break;

              case -3:
                e.path("/index/access-agent");
            }
        }, o.name || o.refresh(), n.logout = function() {
            t.logout().then(function() {
                o.clearInfo(), o.jump();
            });
        }, o.NewbieStateChange = function() {
            4 !== n.state ? e.path("/index/agent-task") : 4 === n.state && 1 === n.taskStatus ? e.path("/index/agent-task") : 4 !== n.state || 2 !== n.taskStatus && 3 !== n.taskStatus && 4 !== n.taskStatus && 5 !== n.taskStatus || e.path("/index/complete-test");
        }, o.inviteModel = function() {
            var t = e.search();
            n.inviteCode = t.invite_code, t.invite_code ? n.isInvite = !0 : n.isInvite = !1;
        }, o.writeBankInfo = function() {
            r.getPaymentInfo().then(function(e) {
                0 !== n.state || 0 !== n.isNewbiePass || e.wx_openid ? n.remindCompleteBankInfo = !1 : n.remindCompleteBankInfo = !0;
            });
        }, o;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "myHttp", "$rootScope", "$location", "map", function(n, e, t, r) {
        var i = {};
        return i.login = function(e, t) {
            return n.post("/site/login", {
                username: e,
                password: t
            });
        }, i.logout = function(e, t) {
            return r.initMap(), r.openTimer(), n.get("/site/logout");
        }, i;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "myHttp", function(n) {
        var e = {};
        return e.stateCodeMap = {
            100: "已预约",
            200: "进行中",
            300: "审核通过，待邮寄",
            400: "快递已签收",
            401: "快递已寄出",
            500: "已开户",
            501: "等待风披",
            600: "已忽略"
        }, e.subStatusCodeMap = [ "", "审核失败", "审核中", "正在见证" ], e.getStatusText = function(n, e, t) {
            return t = +t, 200 === +n ? 2 === +e && t < 100 ? "资料" + t + "%" : 3 === +e ? this.subStatusCodeMap[e] : 1 === +e ? this.subStatusCodeMap[e] : this.subStatusCodeMap[e] : this.stateCodeMap[n];
        }, e.getList = function(e) {
            return n.get("/site/get-customer-list", {
                params: {
                    status: e.status,
                    page_number: e.page,
                    search_key: e.keyword,
                    can_audit: e.can_audit
                }
            });
        }, e.ignore = function(e) {
            return n.post("/site/ignore-order", {
                idsStr: e.join(",")
            });
        }, e.setExpressNumber = function(e, t) {
            return n.post("/site/send-express", {
                idsStr: e.join(","),
                expressId: t
            });
        }, e.checkEmail = function(e, t) {
            return n.get("/site/validate-email", {
                params: {
                    email: e,
                    uid: t
                }
            });
        }, e.newCustomer = function(e) {
            return n.post("/site/add-user", e);
        }, e.validateExist = function(e, t, r) {
            return n.post("/site/validate-identity", {
                email: e,
                id_number: t,
                cellphone: r
            });
        }, e.modifyCustomer = function(e) {
            return n.post("/site/update-user", e);
        }, e.serializeSubData = function(n) {
            var e = [];
            for (var t in n) if ("otherName" !== t) {
                var r = t;
                if ("string" == typeof n[t]) {
                    var i = n[t];
                    e.push(r + ":" + i);
                } else n[t] && e.push(r.replace(/\D/g, ""));
            }
            return e.join("|");
        }, e.dealComplexData = function(n) {
            n.exp_raw && (n.exp = e.serializeSubData(n.exp_raw)), n.background_raw && (n.background = e.serializeSubData(n.background_raw));
            var t = n.benefiter_raw;
            n.benefiter_enable = +t.v1, n.futu_relation_enable = +t.v5, n.agency_relation_enable = +t.v4, 
            n.futu_account_relation_enable = +t.v7;
        }, e.setDate = function(n, e, t) {
            var r = new Date();
            return r.setFullYear(n, e, t), r;
        }, e.setDateObj = function(n, e) {
            var t;
            if (e) return t = e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
            var r = /^\d{6}((?:19|20)\d{2})(\d{2})(\d{2})\d{2}(\d)[\d|X|x]$/, i = n.match(r);
            return !(!i || i.length < 5) && (t = i[1] + "/" + i[2] + "/" + i[3]);
        }, e.getBirthdayAndSexFromIdNumber = function(n) {
            var t = /^\d{6}((?:19|20)\d{2})(\d{2})(\d{2})\d{2}(\d)[\d|X|x]$/, r = n.match(t);
            if (!r || r.length < 5) return !1;
            var i = {};
            return i.birth = r[1] + "/" + r[2] + "/" + r[3], i.birth_date = e.setDate(r[1], r[2] - 1, r[3]), 
            i.sex = +((r[4] + 1) % 2), i;
        }, e.transformChinese = function(e) {
            return n.get("/site/get-pinyin", {
                params: {
                    str: e
                }
            });
        }, e.getCustomerInfo = function(e) {
            return n.get("/site/get-customer-info", {
                params: {
                    uid: e
                }
            });
        }, e;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", function(n) {
        var e = {};
        return n.loading || (n.loading = {
            count: 0
        }), e.show = function(e) {
            n.loading.count++, n.loading.msg = e || "加载中...";
        }, e.hide = function() {
            n.loading.count--;
        }, e;
    } ];
}, function(n, e) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n;
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n;
    };
    n.exports = [ "$rootScope", "$sce", function(n, e) {
        var r = {};
        n.dialog || (n.dialog = {});
        var i = function() {
            r.hide();
        };
        return r.show = function(r, o, a, s, c, u) {
            var l;
            l = "object" === ("undefined" == typeof r ? "undefined" : t(r)) ? r : {
                title: r,
                content: o,
                okCallback: a,
                cancelCallback: s,
                cancel: c,
                confirm: u
            }, n.dialog.isShow = !0, n.dialog.title = l.title, n.dialog.content = e.trustAsHtml(l.content), 
            n.dialog.okCallback = l.okCallback || i, n.dialog.cancelCallback = l.cancelCallback || i, 
            n.dialog.showCancel = "undefined" == typeof l.showCancel || l.showCancel, n.dialog.showClose = "undefined" == typeof l.showClose || l.showClose, 
            n.dialog.showConfirm = "undefined" == typeof l.showConfirm || l.showConfirm, n.dialog.cancel = l.cancel || "取消", 
            n.dialog.confirm = l.confirm || "确定";
        }, r.hide = function() {
            n.dialog.isShow = !1;
        }, r;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "dialog", function(n) {
        var e = {};
        return e.showHtml = function(e, t, r, i, o) {
            n.show({
                title: e,
                content: t,
                showCancel: r,
                showConfirm: i,
                cancelCallback: o
            });
        }, e;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "myHttp", "$q", function(n, e) {
        var t = {};
        return t.postResetPassword = function(e, t, r) {
            return n.post("/site/change-password", {
                oldPassword: e,
                newPassword: t,
                newPassword2: r
            });
        }, t.postRegister = function(e, t, r, i, o) {
            return n.post("/site/add-agent", {
                cellphone: e,
                password: t,
                invite_code: r,
                apply_type: i,
                security_code: o
            });
        }, t.postFunctionSet = function(e, t, r) {
            return n.post("/site/set-agent-function", {
                is_holiday: e,
                is_hide: t,
                holiday_expired: r
            });
        }, t.postFillAgent = function(e) {
            return n.post("/site/complete-agent-info", e);
        }, t.postAgentContract = function(e, t, r, i, o, a, s, c, u, l) {
            return n.post("/site/upload-agent-contract", {
                contract: [ e, t, r, i, o, a, s, c, u, l ]
            });
        }, t.postDeleteContract = function(e) {
            return n.post("/site/delete-agent-attach", {
                attach_id: e
            });
        }, t.getAgentInfo = function() {
            return n.get("/site/get-agent-info");
        }, t.doAgree = function() {
            return n.post("/site/agent-do-agree");
        }, t.getMoneyFlow = function(e) {
            return e || (e = {}), n.get("/site/get-money-flow", {
                params: {
                    uid: e.uid,
                    type: e.type,
                    page: e.page
                }
            });
        }, t.getBalanceDetail = function(e) {
            return e || (e = {}), n.get("/site/get-balance-detail", {
                params: {
                    type: e.type,
                    page: e.page || 1,
                    start_time: e.start_time || "",
                    end_time: e.end_time || "",
                    keyword: e.keyword || "",
                    limit: e.limit || 20
                }
            });
        }, t.getMoneySummary = function() {
            return n.get("/site/get-money-summary");
        }, t.postBankInfo = function(e) {
            return n.post("/site/set-bank-card-info", {
                bank_name: e.bank_name,
                card_number: e.card_number,
                name: e.name,
                bank_branch: e.bank_branch
            });
        }, t.getPaymentInfo = function() {
            return n.get("/site/get-payment-info");
        }, t.getBankInfo = t.getPaymentInfo, t.getState = function() {
            return n.get("/site/agent-re-apply");
        }, t.postWxName = function(e) {
            return n.post("/site/edit-weixin-name", {
                wx_name: e
            });
        }, t.unbindWx = function() {
            return n.post("/site/unbind-weixin");
        }, t.completeTest = function() {
            return n.post("/site/newbie-complete-test");
        }, t.passAgentTask = function() {
            return n.post("/site/update-newbie-pass-alert");
        }, t.noticeWitness = function() {
            return n.post("/site/newbie-task-notification");
        }, t.postType = function(e) {
            return n.get("/site/change-apply-type", {
                params: {
                    apply_type: e
                }
            });
        }, t.postVerifyCode = function(e, t) {
            return n.get("/site/send-verify-code", {
                params: {
                    cellphone: e,
                    type: t
                }
            });
        }, t.checkVerifyCode = function(e) {
            return n.post("/site/check-reset-verify-code", {
                security_code: e
            });
        }, t.resetAgentPassword = function(e) {
            return n.post("/site/reset-agent-pwd", {
                password: e
            });
        }, t.setLogin = function() {
            return n.post("/site/auto-login-after-reset");
        }, t.getQQStatus = function() {
            return n.get("/site/qq-status");
        }, t.sendGeo = function(e, t, r) {
            return n.get("/site/get-agent-code", {
                params: {
                    province: e,
                    city: t,
                    metting_addr_type: r
                }
            });
        }, t.sendInvitation = function(e, t) {
            return n.post("/site/invite-sms", {
                uid: e,
                cellphone: t
            });
        }, t.getWitnessInfo = function(r, i) {
            t._cacheData || (t._cacheData = {});
            var o = r + i;
            return e(t._cacheData[o] ? function(n, e) {
                n(t._cacheData[o]);
            } : function(e, a) {
                n.get("/site/get-topn-agent-info", {
                    params: {
                        province: r,
                        city: i
                    }
                }).then(function(n) {
                    e(n), t._cacheData[o] = n;
                }, function(n) {
                    a(n);
                });
            });
        }, t.getWitnessSum = function() {
            return n.get("/site/get-agent-sum");
        }, t.checkUid = function(e) {
            return n.get("/site/check-uid-exists", {
                params: {
                    uid: e
                }
            });
        }, t.postWithdrawCash = function(e) {
            return n.post("/site/withdraw", {
                money: e
            });
        }, t;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$location", function(n) {
        var e = {};
        "undefined" == typeof window._czc && (window._czc = []);
        var t = window._czc;
        return e.pvCount = function(e) {
            e = e || n.path(), t.push([ "_trackPageview", e ]);
        }, e.eventCount = function(n, e, r, i, o) {
            n = n, e = e, r = r || "", i = i || 0, o = o || "", t.push([ "_trackEvent", n, e, r, i, o ]);
        }, e;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$location", function(n) {
        var e = {}, t = [ [ "/", "/index/mobile-index" ] ];
        return e.jump = function(e) {
            var r = t.filter(function(n) {
                return n.indexOf(e) > -1;
            });
            if (r[0]) {
                r = r[0];
                var i = !1;
                i = window.matchMedia ? window.matchMedia("screen and (max-width:600px)").matches : window.innerWidth < 600;
                var o = r.indexOf(e);
                +i ^ o && n.path(r[+!o]).replace();
            }
        }, e;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", function(n) {
        var e = {};
        return e.handleLeftNav = function() {
            n.leftNav = {}, n.leftNav.show = function() {
                n.leftNav.isShow = !0;
            }, n.leftNav.hide = function() {
                n.leftNav.isShow = !1;
            };
        }, e;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$location", "agent", "dialog", "agentInfo", function(n, e, t, r, i) {
        var o = {}, a = [ "/index/agent-task", "/index/complete-test", "/index/agent-operation-guide", "/index/download-agent", "/index/download-card", "/" ];
        return o.shoulePreventJump = function(n) {
            var e = i.state, t = i.taskStatus;
            if (4 === e) {
                var o = n.split("?")[0];
                return !(0 === o.indexOf("/index/customer-list") && t >= 2) && (a.indexOf(n) === -1 && (r.show({
                    title: "提示",
                    content: '您当前无权进行此操作，请您先完成"新手任务"。',
                    showCancel: !1
                }), !0));
            }
            return !1;
        }, o;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "$interval", "agent", "dialog", "loading", function(n, e, t, r, i) {
        var o = {};
        return o.countdownTime = 0, o.countdown = null, o.setTime = function() {
            o.countdown = e(function() {
                function t() {
                    e.cancel(o.countdown), o.countdownTime = 0, n.sendVerifyCodeBtnWord = "发送验证码", n.isSendVerifyCodeBtnDisabled = !1;
                }
                n.sendVerifyCodeBtnWord = 90 - o.countdownTime + "s", n.isSendVerifyCodeBtnDisabled = !0, 
                o.countdownTime++, 90 === o.countdownTime && t(), n.$on("$stateChangeSuccess", function() {
                    t();
                });
            }, 1e3);
        }, o.postVerifyCode = function(n, a) {
            i.show(), t.postVerifyCode(n, a).then(function(n) {
                console.log(n), i.hide(), r.show({
                    title: "提示",
                    content: "验证码发送成功！",
                    okCallback: function() {
                        r.hide(), o.setTime();
                    },
                    showCancel: !1
                });
            }, function(n) {
                i.hide(), r.show({
                    title: "提示",
                    content: n.message,
                    showCancel: !1
                }), e.cancel(o.countdown);
            });
        }, o;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "agent", "$timeout", function(n, e, t) {
        var r, i, o = {};
        o.initMap = function(n) {
            if (window.AMap && window.AMap.View2D) r = new AMap.Map("mapContainer", {
                resizeEnable: !1,
                scrollWheel: !1,
                doubleClickZoom: !1,
                dragEnable: !1,
                keyboardEnable: !1,
                center: [ 104.647737, 37.194237 ],
                zoom: 4,
                layers: [ o.createImgLayer() ],
                mapStyle: "light"
            }), AMap.event.addListener(r, "click", function(n) {
                var e = n.lnglat.getLng(), t = n.lnglat.getLat();
                alert(e + "-" + t);
            }, !1); else {
                if (!i) {
                    i = Date.now();
                    var e = document.createElement("script");
                    e.src = "//webapi.amap.com/maps?v=1.3&key=8ba4946c7da88f3c742ec535f9de16d8&plugin=AMap.DistrictSearch", 
                    document.head.appendChild(e);
                }
                Date.now() - i > 3e4 ? alert("地图加载超时！") : setTimeout(o.initMap, 50);
            }
        };
        var a;
        o.createImgLayer = function() {
            return a = new AMap.ImageLayer({
                url: "/images/login/map.png",
                bounds: new AMap.Bounds([ 73.314729, 18.186302 ], [ 134.970003, 53.721904 ]),
                zooms: []
            });
        };
        var s;
        o.newMarker = function(n) {
            s && o.removeMarker(s);
            var e = {
                map: r,
                icon: "/images/index/amap_marker.png",
                position: n
            };
            return s = new AMap.Marker(e);
        }, o.removeMarker = function(n) {
            r.remove(n);
        }, o.infoWindowFn = function(n, e, t, i) {
            o.closeInfoWindow();
            var a, s = n.topnAgentInfo.length, c = document.createElement("div"), u = [ "北京市", "上海市", "重庆市", "天津市", "香港特别行政区", "澳门特别行政区", "台湾省" ];
            if (s) a = "<span>" + e + "&nbsp;</span><span>" + t, n.topnAgentInfo && n.topnAgentInfo.forEach(function(n) {
                c.innerHTML += '<div class="person"><img src="' + n.avatar + '" width="40" height="40"></div><div class="detail">' + n.owner + "</div>";
            }); else {
                for (var l = 0; l < 7; l++) e === u[l] && (t = "");
                a = "<span>" + e + "&nbsp;</span><span>" + t + "&nbsp;</span>", c.innerHTML = "<div>居然没有见证人!</div>";
            }
            var f = new AMap.InfoWindow({
                isCustom: !0,
                content: o.createInfoWindow(a, c.innerHTML),
                offset: new AMap.Pixel(16, (-45))
            });
            o.newMarker(i).setMap(r), f.open(r, new AMap.LngLat(i[0], i[1]));
        }, o.createInfoWindow = function(n, e) {
            var t = document.createElement("div");
            t.className = "info";
            var r = document.createElement("div"), i = document.createElement("div");
            r.className = "info-top", i.innerHTML = n, r.appendChild(i), t.appendChild(r);
            var o = document.createElement("div");
            o.className = "info-middle", o.style.backgroundColor = "#0a5ecc", o.innerHTML = e, 
            t.appendChild(o);
            var a = document.createElement("div");
            a.className = "info-bottom", a.style.position = "relative", a.style.top = "-1px", 
            a.style.left = "-14px", a.style.margin = "0 auto";
            var s = document.createElement("img");
            return s.src = "/images/login/sharp.png", a.appendChild(s), t.appendChild(a), t;
        }, o.closeInfoWindow = function() {
            r.clearInfoWindow();
        }, o.getLocationShowInfoWindow = function(n, t, r) {
            o.getCityLocation(n, t, function(i, a) {
                if (!i && a) {
                    var s = [ a.longitude, a.latitude ];
                    t === n && (t = ""), e.getWitnessInfo(n, t).then(function(e) {
                        o.infoWindowFn(e, n, t, s), r && r();
                    }, function(n) {
                        alert(n);
                    });
                }
            });
        }, o.getCityLocation = function(n, e, t) {
            o._cachePosition || (o._cachePosition = {});
            var r = n + e;
            "香港特别行政区" === n && (e = "香港特别行政区"), AMap.service([ "AMap.DistrictSearch" ], function() {
                var n = new AMap.DistrictSearch({
                    level: "city",
                    subdistrict: 0
                });
                o._cachePosition[r] ? t(null, {
                    longitude: o._cachePosition[r].getLng(),
                    latitude: o._cachePosition[r].getLat()
                }) : n.search(e, function(n, e) {
                    if ("complete" !== n) return void t(new Error("获取城市坐标失败"));
                    var i = e.districtList[0].center;
                    o._cachePosition[r] = i, t(null, {
                        longitude: i.getLng(),
                        latitude: i.getLat()
                    });
                });
            });
        }, o.noAnimation = function() {
            t(function() {
                var n = document.querySelector(".info");
                n.className += " infoNoAnimation";
            }, 100);
        };
        var c = null, u = 0, l = [ {
            province: "北京市",
            city: "北京市"
        }, {
            province: "上海市",
            city: "上海市"
        }, {
            province: "广东省",
            city: "广州市"
        }, {
            province: "广东省",
            city: "深圳市"
        } ];
        return o.openTimer = function() {
            c = setInterval(function() {
                o.getLocationShowInfoWindow(l[u].province, l[u].city), u++, u > 3 && (u = 0);
            }, 5e3);
        }, o.closeTimer = function() {
            clearInterval(c);
        }, o.getAllWitnessInfo = function() {
            e.getWitnessSum().then(function(e) {
                n.homePageProvinceCount = e.provinceCount, n.homePageCityCount = e.cityCount;
            });
        }, o.getAllWitnessInfo(), o;
    } ];
}, function(n, e) {
    "use strict";
    n.exports = [ "$rootScope", "agent", function(n, e) {
        var t = {};
        t.getlocation = function(e, r) {
            t.closeTimer(), t.h5getWitnessData(e, r);
            document.getElementsByClassName("h5Infowindow");
            n.noAnimation = !0;
        }, t.h5getWitnessData = function(t, r) {
            r === t && (r = ""), e.getWitnessInfo(t, r).then(function(e) {
                n.h5province = t, n.h5city = r, n.h5witnessList = e.topnAgentInfo;
            }, function(n) {
                alert(n);
            });
        }, n.timer = null;
        var r = 0, i = [ {
            province: "北京市",
            city: "北京市"
        }, {
            province: "上海市",
            city: "上海市"
        }, {
            province: "广东省",
            city: "广州市"
        }, {
            province: "广东省",
            city: "深圳市"
        } ];
        return t.openTimer = function() {
            n.timer = setInterval(function() {
                t.h5getWitnessData(i[r].province, i[r].city), r++, r > 3 && (r = 0);
            }, 5e3);
        }, t.closeTimer = function() {
            clearInterval(n.timer);
        }, t;
    } ];
}, function(n, e, t) {
    "use strict";
    var r = function(n) {
        n || (n = {}), this._cnzz = !1, this._ga = !1, this._serverUrl = "https://report.futu5.com/client_report", 
        "undefined" != typeof n.cnzz && (this._cnzz = n.cnzz), "undefined" != typeof n.ga && (this._ga = n.ga), 
        n.serverUrl && (this._serverUrl = n.serverUrl), this._sampleRate = .01, this._init(), 
        this._uploadPerformance();
    };
    r.prototype._init = function() {
        var n = location.protocol;
        if (this._cnzz) {
            var e = document.createElement("div");
            e.style.display = "none", e.innerHTML = unescape('%3Cspan style="display:none;" id="cnzz_stat_icon_' + this._cnzz + '"%3E%3C/span%3E%3Cscript src="' + n + "//v1.cnzz.com/z_stat.php%3Fid%3D" + this._cnzz + '" type="text/javascript"%3E%3C/script%3E'), 
            document.body.appendChild(e);
        }
        this._ga && !function(n, e, t, r, i) {
            n[r] = n[r] || [], n[r].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
            });
            var o = function() {
                var n = e.getElementsByTagName(t)[0], o = e.createElement(t), a = "dataLayer" != r ? "&dataLayer=" + r : "";
                o.async = !0, o.src = "//www.googletagmanager.com/gtm.js?id=" + i + a, n.parentNode.insertBefore(o, n);
            };
            n.addEventListener ? n.addEventListener("load", o, !1) : n.attachEvent && n.attachEvent("onload", o);
        }(window, document, "script", "dataLayer", this._ga);
        var t = document.cookie, r = /FUTU_TOOL_STAT_UNIQUE_ID=([\d\w]+)/, i = t.match(r);
        i && i.length >= 2 ? this._uniqueId = i[1] : this._uniqueId = Date.now() + "" + (1e4 * Math.random() | 0);
        var o = 31536e4;
        document.cookie = "FUTU_TOOL_STAT_UNIQUE_ID=" + this._uniqueId + ";path=/;max-age=" + o;
    }, r.prototype._uploadPerformance = function() {
        if (this._cnzz) {
            var n = window._czc || [];
            "undefined" != typeof jQuery && jQuery(window).bind("load", function() {
                window.performance && (Math.random() > this._sampleRate || setTimeout(function() {
                    var e = window.performance.timing, t = e.domainLookupEnd - e.navigationStart, r = e.responseEnd - e.navigationStart, i = e.domContentLoadedEventEnd - e.navigationStart, o = e.domComplete - e.navigationStart, a = e.loadEventEnd - e.navigationStart;
                    n.push([ "_trackEvent", "Performance", "DNS", location.href, t ]), n.push([ "_trackEvent", "Performance", "ResponseEnd", location.href, r ]), 
                    n.push([ "_trackEvent", "Performance", "DomReady", location.href, i ]), n.push([ "_trackEvent", "Performance", "DomComplete", location.href, o ]), 
                    n.push([ "_trackEvent", "Performance", "Load", location.href, a ]);
                }, 1e3));
            });
        }
    }, r.prototype.uploadServer = function(n, e) {
        Array.isArray(n) || (n = [ n ]);
        var r = t(73), i = r(navigator.userAgent), o = i.device.model && i.device.vendor + " " + i.device.model || i.device.vendor || i.device.type || i.os.name, a = {
            iOS: 12,
            Android: 13,
            "Mac OS X": 11,
            Windows: 10
        }, s = 15;
        /futunn/i.test(navigator.userAgent) && (s = a[i.os.name]);
        var c = {
            now: Date.now() / 1e3 >> 0,
            gzip: "off",
            dev_type: o,
            os_type: i.os.name + " " + i.os.version,
            clt_type: s,
            unique_id: this._uniqueId,
            data: n
        }, u = t(74), l = t(80);
        u.post(this._serverUrl).use(l).set("Content-Type", "application/json").send(c).end(function(n, t) {
            e(n ? n : t.ok ? 0 === +t.body.futu_result ? null : new Error("upload failed:" + t.body.futu_message) : new Error("upload failed."));
        });
    }, n.exports = r;
}, function(n, e) {
    !function(e, t) {
        "use strict";
        var r = "", i = "?", o = "function", a = "undefined", s = "object", c = "major", u = "model", l = "name", f = "type", d = "vendor", p = "version", h = "architecture", g = "console", m = "mobile", v = "tablet", y = {
            has: function(n, e) {
                return e.toLowerCase().indexOf(n.toLowerCase()) !== -1;
            },
            lowerize: function(n) {
                return n.toLowerCase();
            }
        }, $ = {
            rgx: function() {
                for (var n, e, r, i, c, u, l, f = 0, d = arguments; f < d.length; f += 2) {
                    var p = d[f], h = d[f + 1];
                    if (typeof n === a) {
                        n = {};
                        for (i in h) c = h[i], typeof c === s ? n[c[0]] = t : n[c] = t;
                    }
                    for (e = r = 0; e < p.length; e++) if (u = p[e].exec(this.getUA())) {
                        for (i in h) l = u[++r], c = h[i], typeof c === s && c.length > 0 ? 2 == c.length ? typeof c[1] == o ? n[c[0]] = c[1].call(this, l) : n[c[0]] = c[1] : 3 == c.length ? typeof c[1] !== o || c[1].exec && c[1].test ? n[c[0]] = l ? l.replace(c[1], c[2]) : t : n[c[0]] = l ? c[1].call(this, l, c[2]) : t : 4 == c.length && (n[c[0]] = l ? c[3].call(this, l.replace(c[1], c[2])) : t) : n[c] = l ? l : t;
                        break;
                    }
                    if (u) break;
                }
                return n;
            },
            str: function(n, e) {
                for (var r in e) if (typeof e[r] === s && e[r].length > 0) {
                    for (var o in e[r]) if (y.has(e[r][o], n)) return r === i ? t : r;
                } else if (y.has(e[r], n)) return r === i ? t : r;
                return n;
            }
        }, w = {
            browser: {
                oldsafari: {
                    major: {
                        1: [ "/8", "/1", "/3" ],
                        2: "/4",
                        "?": "/"
                    },
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: [ "NT 5.1", "NT 5.2" ],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        RT: "ARM"
                    }
                }
            }
        }, b = {
            browser: [ [ /(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i ], [ l, p, c ], [ /\s(opr)\/((\d+)?[\w\.]+)/i ], [ [ l, "Opera" ], p, c ], [ /(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i ], [ l, p, c ], [ /(yabrowser)\/((\d+)?[\w\.]+)/i ], [ [ l, "Yandex" ], p, c ], [ /(comodo_dragon)\/((\d+)?[\w\.]+)/i ], [ [ l, /_/g, " " ], p, c ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i ], [ l, p, c ], [ /(dolfin)\/((\d+)?[\w\.]+)/i ], [ [ l, "Dolphin" ], p, c ], [ /((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i ], [ [ l, "Chrome" ], p, c ], [ /version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i ], [ p, c, [ l, "Mobile Safari" ] ], [ /version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i ], [ p, c, l ], [ /webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i ], [ l, [ c, $.str, w.browser.oldsafari.major ], [ p, $.str, w.browser.oldsafari.version ] ], [ /(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i ], [ l, p, c ], [ /(navigator|netscape)\/((\d+)?[\w\.-]+)/i ], [ [ l, "Netscape" ], p, c ], [ /(swiftfox)/i, /(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i ], [ l, p, c ] ],
            cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ h, "amd64" ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ h, "ia32" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ h, /ower/, "", y.lowerize ] ], [ /(sun4\w)[;\)]/i ], [ [ h, "sparc" ] ], [ /(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ h, y.lowerize ] ],
            device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ u, d, [ f, v ] ], [ /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ d, u, [ f, v ] ], [ /\((ip[honed]+);.+(apple)/i ], [ u, d, [ f, m ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ d, u, [ f, m ] ], [ /\((bb10);\s(\w+)/i ], [ [ d, "BlackBerry" ], u, [ f, m ] ], [ /android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i ], [ [ d, "Asus" ], u, [ f, v ] ], [ /(sony)\s(tablet\s[ps])/i ], [ d, u, [ f, v ] ], [ /(nintendo)\s([wids3u]+)/i ], [ d, u, [ f, g ] ], [ /((playstation)\s[3portablevi]+)/i ], [ [ d, "Sony" ], u, [ f, g ] ], [ /(sprint\s(\w+))/i ], [ [ d, $.str, w.device.sprint.vendor ], [ u, $.str, w.device.sprint.model ], [ f, m ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ d, [ u, /_/g, " " ], [ f, m ] ], [ /\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i, /(mot)[\s-]?(\w+)*/i ], [ [ d, "Motorola" ], u, [ f, m ] ], [ /android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i ], [ [ d, "Motorola" ], u, [ f, v ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i ], [ [ d, "Samsung" ], u, [ f, v ] ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ d, "Samsung" ], u, [ f, m ] ], [ /(sie)-(\w+)*/i ], [ [ d, "Siemens" ], u, [ f, m ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i ], [ [ d, "Nokia" ], u, [ f, m ] ], [ /android\s3\.[\s\w-;]{10}((a\d{3}))/i ], [ [ d, "Acer" ], u, [ f, v ] ], [ /android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i ], [ [ d, "LG" ], u, [ f, v ] ], [ /((nexus\s4))/i, /(lg)[e;\s-\/]+(\w+)*/i ], [ [ d, "LG" ], u, [ f, m ] ], [ /(mobile|tablet);.+rv\:.+gecko\//i ], [ f, d, u ] ],
            engine: [ [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ l, p ], [ /rv\:([\w\.]+).*(gecko)/i ], [ p, l ] ],
            os: [ [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ l, [ p, $.str, w.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ l, "Windows" ], [ p, $.str, w.os.windows.version ] ], [ /\((bb)(10);/i ], [ [ l, "BlackBerry" ], p ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i ], [ l, p ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ l, "Symbian" ], p ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ l, "Firefox OS" ], p ], [ /(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ l, p ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ l, "Chromium OS" ], p ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ l, "Solaris" ], p ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ l, p ], [ /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i ], [ [ l, "iOS" ], [ p, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i ], [ l, [ p, /_/g, "." ] ], [ /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i ], [ l, p ] ]
        }, x = function I(n) {
            if (!(this instanceof I)) return new I(n).getResult();
            var t = n || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : r);
            return this instanceof I ? (this.getBrowser = function() {
                return $.rgx.apply(this, b.browser);
            }, this.getCPU = function() {
                return $.rgx.apply(this, b.cpu);
            }, this.getDevice = function() {
                return $.rgx.apply(this, b.device);
            }, this.getEngine = function() {
                return $.rgx.apply(this, b.engine);
            }, this.getOS = function() {
                return $.rgx.apply(this, b.os);
            }, this.getResult = function() {
                return {
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                };
            }, this.getUA = function() {
                return t;
            }, this.setUA = function(n) {
                return t = n, this;
            }, void this.setUA(t)) : new I(n).getResult();
        };
        n.exports = x;
    }(this);
}, function(n, e, t) {
    function r() {}
    function i(n) {
        var e = {}.toString.call(n);
        switch (e) {
          case "[object File]":
          case "[object Blob]":
          case "[object FormData]":
            return !0;

          default:
            return !1;
        }
    }
    function o(n) {
        if (!$(n)) return n;
        var e = [];
        for (var t in n) null != n[t] && a(e, t, n[t]);
        return e.join("&");
    }
    function a(n, e, t) {
        return Array.isArray(t) ? t.forEach(function(t) {
            a(n, e, t);
        }) : void n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
    }
    function s(n) {
        for (var e, t, r = {}, i = n.split("&"), o = 0, a = i.length; o < a; ++o) t = i[o], 
        e = t.split("="), r[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
        return r;
    }
    function c(n) {
        var e, t, r, i, o = n.split(/\r?\n/), a = {};
        o.pop();
        for (var s = 0, c = o.length; s < c; ++s) t = o[s], e = t.indexOf(":"), r = t.slice(0, e).toLowerCase(), 
        i = b(t.slice(e + 1)), a[r] = i;
        return a;
    }
    function u(n) {
        return /[\/+]json\b/.test(n);
    }
    function l(n) {
        return n.split(/ *; */).shift();
    }
    function f(n) {
        return v(n.split(/ *; */), function(n, e) {
            var t = e.split(/ *= */), r = t.shift(), i = t.shift();
            return r && i && (n[r] = i), n;
        }, {});
    }
    function d(n, e) {
        e = e || {}, this.req = n, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, 
        this.statusText = this.req.xhr.statusText, this.setStatusProperties(this.xhr.status), 
        this.header = this.headers = c(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), 
        this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null;
    }
    function p(n, e) {
        var t = this;
        this._query = this._query || [], this.method = n, this.url = e, this.header = {}, 
        this._header = {}, this.on("end", function() {
            var n = null, e = null;
            try {
                e = new d(t);
            } catch (r) {
                return n = new Error("Parser is unable to parse the response"), n.parse = !0, n.original = r, 
                n.rawResponse = t.xhr && t.xhr.responseText ? t.xhr.responseText : null, n.statusCode = t.xhr && t.xhr.status ? t.xhr.status : null, 
                t.callback(n);
            }
            if (t.emit("response", e), n) return t.callback(n, e);
            if (e.status >= 200 && e.status < 300) return t.callback(n, e);
            var i = new Error(e.statusText || "Unsuccessful HTTP response");
            i.original = n, i.response = e, i.status = e.status, t.callback(i, e);
        });
    }
    function h(n, e) {
        var t = w("DELETE", n);
        return e && t.end(e), t;
    }
    var g, m = t(75), v = t(76), y = t(77), $ = t(78);
    g = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
    var w = n.exports = t(79).bind(null, p);
    w.getXHR = function() {
        if (!(!g.XMLHttpRequest || g.location && "file:" == g.location.protocol && g.ActiveXObject)) return new XMLHttpRequest();
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (n) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (n) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (n) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (n) {}
        return !1;
    };
    var b = "".trim ? function(n) {
        return n.trim();
    } : function(n) {
        return n.replace(/(^\s*|\s*$)/g, "");
    };
    w.serializeObject = o, w.parseString = s, w.types = {
        html: "text/html",
        json: "application/json",
        xml: "application/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, w.serialize = {
        "application/x-www-form-urlencoded": o,
        "application/json": JSON.stringify
    }, w.parse = {
        "application/x-www-form-urlencoded": s,
        "application/json": JSON.parse
    }, d.prototype.get = function(n) {
        return this.header[n.toLowerCase()];
    }, d.prototype.setHeaderProperties = function(n) {
        var e = this.header["content-type"] || "";
        this.type = l(e);
        var t = f(e);
        for (var r in t) this[r] = t[r];
    }, d.prototype.parseBody = function(n) {
        var e = w.parse[this.type];
        return !e && u(this.type) && (e = w.parse["application/json"]), e && n && (n.length || n instanceof Object) ? e(n) : null;
    }, d.prototype.setStatusProperties = function(n) {
        1223 === n && (n = 204);
        var e = n / 100 | 0;
        this.status = this.statusCode = n, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, 
        this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), 
        this.accepted = 202 == n, this.noContent = 204 == n, this.badRequest = 400 == n, 
        this.unauthorized = 401 == n, this.notAcceptable = 406 == n, this.notFound = 404 == n, 
        this.forbidden = 403 == n;
    }, d.prototype.toError = function() {
        var n = this.req, e = n.method, t = n.url, r = "cannot " + e + " " + t + " (" + this.status + ")", i = new Error(r);
        return i.status = this.status, i.method = e, i.url = t, i;
    }, w.Response = d, m(p.prototype);
    for (var x in y) p.prototype[x] = y[x];
    p.prototype.abort = function() {
        if (!this.aborted) return this.aborted = !0, this.xhr && this.xhr.abort(), this.clearTimeout(), 
        this.emit("abort"), this;
    }, p.prototype.type = function(n) {
        return this.set("Content-Type", w.types[n] || n), this;
    }, p.prototype.responseType = function(n) {
        return this._responseType = n, this;
    }, p.prototype.accept = function(n) {
        return this.set("Accept", w.types[n] || n), this;
    }, p.prototype.auth = function(n, e, t) {
        switch (t || (t = {
            type: "basic"
        }), t.type) {
          case "basic":
            var r = btoa(n + ":" + e);
            this.set("Authorization", "Basic " + r);
            break;

          case "auto":
            this.username = n, this.password = e;
        }
        return this;
    }, p.prototype.query = function(n) {
        return "string" != typeof n && (n = o(n)), n && this._query.push(n), this;
    }, p.prototype.attach = function(n, e, t) {
        return this._getFormData().append(n, e, t || e.name), this;
    }, p.prototype._getFormData = function() {
        return this._formData || (this._formData = new g.FormData()), this._formData;
    }, p.prototype.send = function(n) {
        var e = $(n), t = this._header["content-type"];
        if (e && $(this._data)) for (var r in n) this._data[r] = n[r]; else "string" == typeof n ? (t || this.type("form"), 
        t = this._header["content-type"], "application/x-www-form-urlencoded" == t ? this._data = this._data ? this._data + "&" + n : n : this._data = (this._data || "") + n) : this._data = n;
        return !e || i(n) ? this : (t || this.type("json"), this);
    }, d.prototype.parse = function(n) {
        return g.console && console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"), 
        this.serialize(n), this;
    }, d.prototype.serialize = function(n) {
        return this._parser = n, this;
    }, p.prototype.callback = function(n, e) {
        var t = this._callback;
        this.clearTimeout(), t(n, e);
    }, p.prototype.crossDomainError = function() {
        var n = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        n.crossDomain = !0, n.status = this.status, n.method = this.method, n.url = this.url, 
        this.callback(n);
    }, p.prototype.timeoutError = function() {
        var n = this._timeout, e = new Error("timeout of " + n + "ms exceeded");
        e.timeout = n, this.callback(e);
    }, p.prototype.withCredentials = function() {
        return this._withCredentials = !0, this;
    }, p.prototype.end = function(n) {
        var e = this, t = this.xhr = w.getXHR(), o = this._query.join("&"), a = this._timeout, s = this._formData || this._data;
        this._callback = n || r, t.onreadystatechange = function() {
            if (4 == t.readyState) {
                var n;
                try {
                    n = t.status;
                } catch (r) {
                    n = 0;
                }
                if (0 == n) {
                    if (e.timedout) return e.timeoutError();
                    if (e.aborted) return;
                    return e.crossDomainError();
                }
                e.emit("end");
            }
        };
        var c = function(n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = "download", 
            e.emit("progress", n);
        };
        this.hasListeners("progress") && (t.onprogress = c);
        try {
            t.upload && this.hasListeners("progress") && (t.upload.onprogress = c);
        } catch (l) {}
        if (a && !this._timer && (this._timer = setTimeout(function() {
            e.timedout = !0, e.abort();
        }, a)), o && (o = w.serializeObject(o), this.url += ~this.url.indexOf("?") ? "&" + o : "?" + o), 
        this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0), 
        this._withCredentials && (t.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof s && !i(s)) {
            var f = this._header["content-type"], d = this._parser || w.serialize[f ? f.split(";")[0] : ""];
            !d && u(f) && (d = w.serialize["application/json"]), d && (s = d(s));
        }
        for (var p in this.header) null != this.header[p] && t.setRequestHeader(p, this.header[p]);
        return this._responseType && (t.responseType = this._responseType), this.emit("request", this), 
        t.send("undefined" != typeof s ? s : null), this;
    }, w.Request = p, w.get = function(n, e, t) {
        var r = w("GET", n);
        return "function" == typeof e && (t = e, e = null), e && r.query(e), t && r.end(t), 
        r;
    }, w.head = function(n, e, t) {
        var r = w("HEAD", n);
        return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), 
        r;
    }, w.del = h, w["delete"] = h, w.patch = function(n, e, t) {
        var r = w("PATCH", n);
        return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), 
        r;
    }, w.post = function(n, e, t) {
        var r = w("POST", n);
        return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), 
        r;
    }, w.put = function(n, e, t) {
        var r = w("PUT", n);
        return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), 
        r;
    };
}, function(n, e, t) {
    function r(n) {
        if (n) return i(n);
    }
    function i(n) {
        for (var e in r.prototype) n[e] = r.prototype[e];
        return n;
    }
    n.exports = r, r.prototype.on = r.prototype.addEventListener = function(n, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), 
        this;
    }, r.prototype.once = function(n, e) {
        function t() {
            this.off(n, t), e.apply(this, arguments);
        }
        return t.fn = e, this.on(n, t), this;
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(n, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
        this;
        var t = this._callbacks["$" + n];
        if (!t) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + n], this;
        for (var r, i = 0; i < t.length; i++) if (r = t[i], r === e || r.fn === e) {
            t.splice(i, 1);
            break;
        }
        return this;
    }, r.prototype.emit = function(n) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1), t = this._callbacks["$" + n];
        if (t) {
            t = t.slice(0);
            for (var r = 0, i = t.length; r < i; ++r) t[r].apply(this, e);
        }
        return this;
    }, r.prototype.listeners = function(n) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
    }, r.prototype.hasListeners = function(n) {
        return !!this.listeners(n).length;
    };
}, function(n, e) {
    n.exports = function(n, e, t) {
        for (var r = 0, i = n.length, o = 3 == arguments.length ? t : n[r++]; r < i; ) o = e.call(null, o, n[r], ++r, n);
        return o;
    };
}, function(n, e, t) {
    var r = t(78);
    e.clearTimeout = function() {
        return this._timeout = 0, clearTimeout(this._timer), this;
    }, e.parse = function(n) {
        return this._parser = n, this;
    }, e.timeout = function(n) {
        return this._timeout = n, this;
    }, e.then = function(n, e) {
        return this.end(function(t, r) {
            t ? e(t) : n(r);
        });
    }, e.use = function(n) {
        return n(this), this;
    }, e.get = function(n) {
        return this._header[n.toLowerCase()];
    }, e.getHeader = e.get, e.set = function(n, e) {
        if (r(n)) {
            for (var t in n) this.set(t, n[t]);
            return this;
        }
        return this._header[n.toLowerCase()] = e, this.header[n] = e, this;
    }, e.unset = function(n) {
        return delete this._header[n.toLowerCase()], delete this.header[n], this;
    }, e.field = function(n, e) {
        return this._getFormData().append(n, e), this;
    };
}, function(n, e) {
    function t(n) {
        return null != n && "object" == typeof n;
    }
    n.exports = t;
}, function(n, e) {
    function t(n, e, t) {
        return "function" == typeof t ? new n("GET", e).end(t) : 2 == arguments.length ? new n("GET", e) : new n(e, t);
    }
    n.exports = t;
}, function(n, e) {
    var t = function(n) {
        function e(n) {
            var e = document.createElement("a");
            return e.href = n, {
                hostname: e.hostname,
                protocol: e.protocol,
                pathname: e.pathname,
                queryString: e.search
            };
        }
        function t(n) {
            if (n !== Object(n)) return n;
            var e = [];
            for (var t in n) null != n[t] && e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
            return e.join("&");
        }
        var r = function(n) {
            var e = this, r = this.xhr = new XDomainRequest();
            r.getAllResponseHeaders = function() {
                return "";
            }, r.getResponseHeader = function(n) {
                if ("content-type" == n) return "application/json";
            };
            var i = this._query.join("&"), o = this._formData || this._data;
            if (this._callback = n || function() {}, r.onload = function() {
                r.status = 200, e.emit("end");
            }, r.onerror = function() {
                return r.status = 400, e.aborted ? e.timeoutError() : e.crossDomainError();
            }, r.onprogress = function() {
                e.emit("progress", 50);
            }, r.ontimeout = function() {
                return r.status = 408, e.timeoutError();
            }, i && (i = t(i), this.url += ~this.url.indexOf("?") ? "&" + i : "?" + i), "GET" != this.method && "POST" != this.method) throw "Only Get and Post methods are supported by XDomainRequest object.";
            return r.open(this.method, this.url, !0), "POST" == this.method && "string" != typeof o && (o = t(o)), 
            this.emit("request", this), r.send(o), this;
        }, i = e(n.url);
        i.hostname != window.location.hostname && "undefined" != typeof XDomainRequest && (n.end = r);
    };
    n.exports = t;
} ]);
