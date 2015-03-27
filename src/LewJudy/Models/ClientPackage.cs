using System;
using System.ComponentModel.DataAnnotations;

namespace LewJudy.Models
{
    public class ClientPackage
    {
		[Required]
		public string Name { get; set; }
		[Required]
		public string Version
		{
			get
			{
				return _version;
			}
			set
			{
				_version = value;
				_id = _IDGenerator(_version);
			}
		}
		private string _version;
		private int _id;
		public int ID
		{
			get
			{
				return _id;
			}
		}

		private int _IDGenerator(string valueToScramble)
		{
			valueToScramble = valueToScramble.Replace(".", "").Replace("-","").Replace("*","");
            int ScrambledValue = Convert.ToInt32(valueToScramble);
			ScrambledValue = ScrambledValue * 3 + 1123453452;
			return ScrambledValue;
		}
	}
}