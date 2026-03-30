using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class Auth : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
