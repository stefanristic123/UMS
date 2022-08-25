using UMS.API.Models;
using UMS.API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace UMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userRepository.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById([FromRoute] int id)
        {
            var user = await _userRepository.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewUser([FromBody] UserModel userModel)
        {
            var id = await _userRepository.AddUserAsync(userModel);
            return CreatedAtAction(nameof(GetUserById), new { id = id, controller = "users" }, id);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser([FromBody] UserModel userModel, [FromRoute] int id)
        {
            await _userRepository.UpdateUserAsync(id, userModel);
            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] int id)
        {
            await _userRepository.DeleteUserAsync(id);
            return Ok();
        }
    }
}
