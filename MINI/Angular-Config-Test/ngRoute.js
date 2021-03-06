! function (e, t)
{
	"use strict";

	function o(e, o)
	{
		o = o ||
		{};
		var r = {
				mbox: o.mbox,
				params: o.params,
				timeout: o.timeout
			},
			n = e.defer();
		return r.success = function (e)
		{
			e && e.length > 0 ? n.resolve(
			{
				mbox: o.mbox,
				offer: e,
				selector: o.selector,
				element: o.element
			}) : n.reject("Empty offer")
		}, r.error = function (e, t)
		{
			n.reject(t)
		}, t.getOffer(r), n.promise
	}

	function r(e, o)
	{
		return e(function (e, r)
		{
			t.applyOffer(o), e()
		})
	}

	function n(e)
	{
		this.getOfferPromise = function (t)
		{
			return o(e, t)
		}, this.applyOfferPromise = function (t)
		{
			return r(e, t)
		}
	}

	function i(e, t)
	{
		return !(0 !== t.allowedRoutesFilter.length && t.allowedRoutesFilter.indexOf(e) === -1 || t.disallowedRoutesFilter.length > 0 && t.disallowedRoutesFilter.indexOf(e) !== -1)
	}

	function u(e)
	{
		this.isRouteAllowed = function (t)
		{
			return i(t, e)
		}
	}

	function s(e, t)
	{
		return {
			mbox: t.mbox || e.globalMboxName,
			timeout: t.timeout || e.timeout,
			globalMboxAutoCreate: e.globalMboxAutoCreate,
			params: t.params || null,
			selector: t.selector || null,
			allowedRoutesFilter: t.allowedRoutesFilter || [],
			disallowedRoutesFilter: t.disallowedRoutesFilter || [],
			appendToSelector: t.appendToSelector || !1
		}
	}

	function l(t, o, r)
	{
		e.module("target.angular.common", []).constant("version", "0.3.0").constant("settings", t).constant("logger", o).constant("customOptions", r ||
		{}).factory("options", ["settings", "customOptions", s]).service("routeService", ["options", u]).service("offerService", ["$q", n])
	}
	t.registerExtension(
	{
		name: "angular.setupCommon",
		modules: ["settings", "logger"],
		register: function (e, t)
		{
			return function (o)
			{
				l(e, t, o)
			}
		}
	})
}(angular, adobe.target),
function (e, t)
{
	"use strict";

	function o(e, t)
	{
		t.forEach(function (t)
		{
			e.requires.indexOf(t) === -1 && e.requires.push(t)
		})
	}

	function r(e, t)
	{
		e.resolve = e.resolve ||
		{}, e.resolve.offerData = t
	}

	function n(e, t, o, n)
	{
		return e.applyTargetToRoutes = function (i)
		{
			Object.keys(i).forEach(function (u)
			{
				e.isRouteAllowed(u) && (n.log("location: " + u), r(i[u], function ()
				{
					return o.getOfferPromise(t)
				}))
			})
		}, e
	}

	function i()
	{
		e.module("target.angular.common").decorator("routeService", ["$delegate", "options", "offerService", "logger", n])
	}

	function u(e)
	{
		e.run(["$rootScope", "$route", "routeService", "offerService", "options", "logger", function (e, t, o, r, n, i)
		{
			o.applyTargetToRoutes(t.routes), e.$on("$viewContentLoaded", function ()
			{
				var e = t.current.locals.offerData;
				e && r.applyOfferPromise(e)["catch"](function (e)
				{
					i.error("AT applyOffer error: " + e)
				})
			})
		}])
	}
	t.registerExtension(
	{
		name: "angular.initRoutes",
		modules: [],
		register: function ()
		{
			return function (r, n)
			{
				t.ext.angular.setupCommon(n), i();
				var s = "string" == typeof r ? e.module(r) : r;
				o(s, ["target.angular.common"]), u(s)
			}
		}
	})
}(angular, adobe.target);