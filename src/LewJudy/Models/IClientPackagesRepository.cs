using System;
using System.Collections.Generic;

namespace LewJudy.Models
{
    public interface IClientPackagesRepository
    {
		IEnumerable<ClientPackage> AllItems { get; }
		void Add(ClientPackage item);
		ClientPackage GetByName(string name);
		bool TryDelete(string name);
	}
}