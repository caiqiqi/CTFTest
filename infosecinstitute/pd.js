var piScriptNum = 0;
var piScriptObj = new Array();

function checkNamespace(c) {
    var d = c.split(".");
    var b = window;
    for (var e = 0; e < d.length; e++) {
        var a = d[e];
        if (!b[a]) { b[a] = {} }
        b = b[a] } }

function piTracker(a) { checkNamespace("pi.tracker");
    pi.tracker.visitor_id = piGetCookie("visitor_id" + (piAId - 1000));
    pi.tracker.pi_opt_in = piGetCookie("pi_opt_in" + (piAId - 1000));
    if (pi.tracker.pi_opt_in != "false" || (typeof(pi.tracker.title) != "undefined" && pi.tracker.notify_pi)) {
        var n = piGetParameter(document.URL, "pi_campaign_id");
        if (n != null) { pi.tracker.campaign_id = n } else {
            if (typeof(piCId) != "undefined" && piCId != "" && piCId != null) { pi.tracker.campaign_id = piCId } else { pi.tracker.campaign_id = null } }
        pi.tracker.account_id = piAId;
        pi.tracker.title = encodeURIComponent(document.title);
        if (typeof(piPoints) != "undefined") { pi.tracker.pi_points = piPoints }
        if (typeof(a) != "undefined") { pi.tracker.url = encodeURIComponent(a) } else { pi.tracker.url = encodeURIComponent(document.URL) }
        pi.tracker.referrer = document.referrer;
        if (pi.tracker.referrer == null) { pi.tracker.referrer = piGetParameter(document.URL, "referrer") }
        pi.tracker.referrer = encodeURIComponent(pi.tracker.referrer);
        var r = piGetParameter(document.URL, "pi_ad_id");
        if (r != null) { pi.tracker.pi_ad_id = r }
        var b = piGetParameter(document.URL, "creative");
        if (b != null) { pi.tracker.creative = b }
        var o = piGetParameter(document.URL, "matchtype");
        if (o != null) { pi.tracker.matchtype = o }
        var w = piGetParameter(document.URL, "keyword");
        if (w != null) { pi.tracker.keyword = w }
        var y = piGetParameter(document.URL, "network");
        if (y != null) { pi.tracker.network = y }
        var h = piGetParameter(document.URL, "device");
        if (h != null) { pi.tracker.device = h }
        if (typeof(piIncludeInActivities) != "undefined") { pi.tracker.pi_include_in_activies = piIncludeInActivities }
        if (typeof(piProfileId) != "undefined") { pi.tracker.pi_profile_id = piProfileId }
        var x = piGetParameter(document.URL, "pi_profile_id");
        if (x != null) { pi.tracker.pi_profile_id = x }
        var k = piGetParameter(document.URL, "pi_email");
        if (k != null) { pi.tracker.pi_email = k }
        var d = piGetParameter(document.URL, "pi_list_email");
        if (d != null) { pi.tracker.pi_list_email = d }
        var l = piGetParameter(document.URL, "utm_campaign");
        if (l != null) { pi.tracker.utm_campaign = encodeURIComponent(l) }
        var c = piGetParameter(document.URL, "utm_medium");
        if (c != null) { pi.tracker.utm_medium = encodeURIComponent(c) }
        var s = piGetParameter(document.URL, "utm_source");
        if (s != null) { pi.tracker.utm_source = encodeURIComponent(s) }
        var t = piGetParameter(document.URL, "utm_content");
        if (t != null) { pi.tracker.utm_content = encodeURIComponent(t) }
        var p = piGetParameter(document.URL, "utm_term");
        if (p == null) { p = piGetParameter(document.URL, "_kk") }
        if (p != null) { pi.tracker.utm_term = encodeURIComponent(p) }
        var q = piGetParameter(document.URL, "gclid");
        if (q != null) { pi.tracker.gclid = q }
        var g = "ver=3";
        for (property in pi.tracker) { g += "&" + property + "=" + pi.tracker[property] }
        var u = false;
        try { u = location.protocol + "//" } catch (v) {}
        if (u == null) { u = "http://" }
        if (typeof(piTUrl) == "string" && (piTUrl.indexOf("localhost") != -1 || piTUrl.indexOf("app.dev.pardot") !== -1)) {
            var m = u + piTUrl + "/analytics?" } else {
            var m = u + "pi.pardot.com/analytics?" }
        var f = document.getElementsByTagName("head")[0];
        piScriptObj[piScriptNum] = document.createElement("script");
        piScriptObj[piScriptNum].type = "text/javascript";
        piScriptObj[piScriptNum].src = m + g;
        f.appendChild(piScriptObj[piScriptNum]);
        piScriptObj[piScriptNum].onload = function() {
            return } }
    piScriptNum++ }

function piGetParameter(d, b) {
    var b = b + "=";
    if (d.length > 0) {
        var c = d.indexOf(b);
        if (c != -1) { c += b.length;
            var a = d.indexOf("&", c);
            if (a == -1) { a = d.length }
            return decodeURIComponent(d.substring(c, a)) } }
    return null }

function piGetCookie(a) {
    if (document.cookie.length > 0) { c_start = document.cookie.indexOf(a + "=");
        if (c_start != -1) { c_start = c_start + a.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) { c_end = document.cookie.length }
            return unescape(document.cookie.substring(c_start, c_end)) } }
    return "" }

function piSetCookie(b, c, a) {
    var d = new Date();
    d.setDate(d.getDate() + a);
    document.cookie = b + "=" + escape(c) + ((a == null) ? "" : ";expires=" + d.toGMTString() + ";path=" + escape("/")) }
piTracker();
(function() {
    function b(g) {
        if (document.querySelectorAll) {
            return document.querySelectorAll("." + g) }
        var f = document.getElementsByTagName("a");
        var h = new Array();
        for (i = 0; i < f.length; i++) {
            var e = f[i].getAttribute("class");
            if (!e) { e = f[i].className }
            ecl = e.split(" ");
            for (j = 0; j < ecl.length; j++) {
                if (ecl[j].toLowerCase() == g.toLowerCase()) { h.push(f[i]) } } }
        return h }

    function a(e) {
        if (typeof document.getElementsByClassName !== "function") {
            return b(e) } else {
            return document.getElementsByClassName(e) } }

    function c() {
        var f, g, h;
        f = a("pardotTrackClick");
        for (g = 0; g < f.length; g++) { h = f[g];
            var e = function(l) {
                var k = (l.currentTarget) ? l.currentTarget : l.srcElement;
                if (k) {
                    var m = k.getAttribute("href");
                    if (m) { d(m);
                        if (l.preventDefault) { l.preventDefault() } else { l.returnValue = false }
                        return false } } };
            if (h.addEventListener) { h.addEventListener("click", e, false) } else {
                if (h.attachEvent) { h.attachEvent("onclick", e) } } } }

    function d(l) {
        var k = "pi.pardot.com/analytics?";
        var h = { url: encodeURIComponent(l), title: "", referrer: pi.tracker.url };
        var f;
        for (f in pi.tracker) {
            if (pi.tracker.hasOwnProperty(f) && !h.hasOwnProperty(f)) { h[f] = pi.tracker[f] }
            k += "&" + f + "=" + h[f] }
        var e = "analyticsCB" + (new Date()).getTime();
        k += "&piClickCallback=" + e;
        pi[e] = function() { window.location = l };
        var g = document.createElement("script");
        g.type = "text/javascript";
        g.src = ("https:" == document.location.protocol ? "https://" : "http://") + k;
        var m = document.getElementsByTagName("script")[0];
        m.parentNode.insertBefore(g, m) }
    c() })();
