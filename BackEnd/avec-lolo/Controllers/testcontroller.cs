using Microsoft.AspNetCore.Mvc;

namespace portail_ecole.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class testcontroller : ControllerBase
    {
      private static List<Test> heroes = new List<Test>
            {
              new Test {
                Id= 1,
                Name = "spider",
                FirstName = "pete",
                LastName = "park",
                Place = "NYC" 
              }
            };

        [HttpGet]
        public async Task<ActionResult<Test>> Get()
        {
            return Ok(heroes);
        }
    }
}