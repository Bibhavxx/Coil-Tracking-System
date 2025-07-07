using Microsoft.AspNetCore.Mvc;
using CoilTrackingSystem.Models;
using System.Collections.Generic;

namespace CoilTrackingSystem.Controllers
{
    public class CoilController : Controller
    {
        public IActionResult Index()
        {
            List<CoilData> coilList = new List<CoilData>
            {
                new CoilData { CoilNo = "SS61513000", Thickness = 0.662, Width = 1280, Length = 0, Weight = 27.8, Grade = "HIF", TDC = "PN34", PreviousStage = "A-ECL", NextProcess = "B", Process = "CRCA Coil" },
                new CoilData { CoilNo = "SS61535000", Thickness = 0.662, Width = 1280, Length = 0, Weight = 28, Grade = "HIF", TDC = "PN34", PreviousStage = "A-ECL", NextProcess = "B", Process = "CRCA Coil" }
            };

            return View(coilList);
        }
    }
}
