using Microsoft.AspNetCore.Mvc;

namespace portail_ecole.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class testcontroller : ControllerBase
    {
      private static List<test> heroes = new List<test>
            {
              new test {
                Id= 1,
                Name = "spider",
                FirstName = "pete",
                LastName = "park",
                Place = "NYC" 
              }
            };

        [HttpGet]
        public async Task<ActionResult<test>> Get()
        {
            return Ok(heroes);
        }
    }
}