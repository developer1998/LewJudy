using System;
using Microsoft.AspNet.Mvc.Rendering;

namespace LewJudy.Helpers
{
    public static class HtmlHelpers
    {
		public static bool IsDebug(this IHtmlHelper htmlHelper)
		{
			#if DEBUG
				return true;
			#else
				return false;
			#endif
		}
	}
}