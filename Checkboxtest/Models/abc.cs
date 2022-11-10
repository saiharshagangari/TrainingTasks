using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace Checkboxtest.Models
{
    public class abc
    {
        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public Nullable<bool> techinterview { get; set; }
    }
}