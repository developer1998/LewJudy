using System;
using System.Collections.Generic;
using System.Linq;

namespace LewJudy.Models
{
    public class ClientPackagesRepository : IClientPackagesRepository
    {
		readonly List<ClientPackage> _items = new List<ClientPackage>();

		public IEnumerable<ClientPackage> AllItems
		{
			get
			{
				return _items;
			}
		}

		public ClientPackage GetByName(string name)
		{
			return _items.FirstOrDefault(x => x.Name == name);
		}

		public void Add(ClientPackage item)
		{
			//item.Id = 1 + _items.Max(x => (int?)x.Id) ?? 0;
			_items.Add(item);
		}

		public bool TryDelete(string name)
		{
			var item = GetByName(name);
			if (item == null)
			{
				return false;
			}
			_items.Remove(item);
			return true;
		}
	}
}