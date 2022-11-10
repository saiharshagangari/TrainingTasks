using Checkboxtest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Checkboxtest.Controllers
{
    public class HomeController : Controller
    {
        abc obj = new abc();
        public ActionResult Index()
        {
            return View(obj);
        }

        public ActionResult About(abc obj)
        {
            ViewBag.Message = "Your application description page.";
            DbcontextClass db = new DbcontextClass();
            db.abcclass.Add(obj);
            db.SaveChanges();
            var ob = db.abcclass.Find(1);
            return View(ob);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}