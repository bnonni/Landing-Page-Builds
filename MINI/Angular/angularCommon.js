! function (e, o)
{
	"use strict";

	function t(e, t)
	{
		t = t ||
		{};
		var r = {
				mbox: t.mbox,
				params: t.params,
				timeout: t.timeout
			},
			n = e.defer();
		return r.success = function (e)
		{
			e && e.length > 0 ? n.resolve(
			{
				mbox: t.mbox,
				offer: e,
				selector: t.selector || t.element
			}) : n.resolve(
			{
				error: "Empty offer"
			})
		}, r.error = function (e, o)
		{
			n.resolve(
			{
				error: o
			})
		}, o.getOffer(r), n.promise
	}

	function r(e, t)
	{
		return e(function (e, r)
		{
			return t || (t = {
				error: "Missing offer param"
			}), t.error ? void r(t.error) : (o.applyOffer(t), void e())
		})
	}

	function n(e)
	{
		this.getOfferPromise = function (o)
		{
			return t(e, o)
		}, this.applyOfferPromise = function (o)
		{
			return r(e, o)
		}
	}

	function i(e, o)
	{
		return !(0 !== o.allowedRoutesFilter.length && o.allowedRoutesFilter.indexOf(e) === -1 || o.disallowedRoutesFilter.length > 0 && o.disallowedRoutesFilter.indexOf(e) !== -1)
	}

	function s(e)
	{
		this.isRouteAllowed = function (o)
		{
			return i(o, e)
		}
	}

	function l(e, o)
	{
		return {
			mbox: o.mbox || e.globalMboxName,
			timeout: o.timeout || e.timeout,
			globalMboxAutoCreate: e.globalMboxAutoCreate,
			params: o.params || null,
			selector: o.selector || null,
			allowedRoutesFilter: o.allowedRoutesFilter || [],
			disallowedRoutesFilter: o.disallowedRoutesFilter || [],
			appendToSelector: o.appendToSelector || !1
		}
	}

	function u(o, t, r)
	{
		e.module("target.angular.common", []).constant("version", "0.1.2").constant("settings", o).constant("logger", t).constant("customOptions", r ||
		{}).factory("options", ["settings", "customOptions", l]).service("routeService", ["options", s]).service("offerService", ["$q", n])
	}
	o.registerExtension(
	{
		name: "angular.setupCommon",
		modules: ["settings", "logger"],
		register: function (e, o)
		{
			return function (t)
			{
				u(e, o, t)
			}
		}
	})
}(angular, adobe.target);