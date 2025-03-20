using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        [HttpPost("pay")]
        public IActionResult Pay(CreditInfo payInfo)
        {
            CreditInfo creditInfo = new CreditInfo { CardNumber = "1234 5678 9101 1213", FirstName = "Profesor", LastName = "Osman", CCV = 987, ValidThru = "0325"};
            if (payInfo == creditInfo) {
                return Ok(true);
            }
            return BadRequest(false);
        }

        public class CreditInfo()
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string CardNumber { get; set; }
            public string ValidThru { get; set; }
            public int CCV { get; set; }
        }

    }
}
