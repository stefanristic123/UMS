using UMS.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace UMS.API.Repository
{
    public interface IUserRepository
    {
        Task<List<UserModel>> GetAllUsersAsync();
        Task<UserModel> GetUserByIdAsync(int authorId);
        Task<int> AddUserAsync(UserModel authorModel);
        Task UpdateUserAsync(int authorId, UserModel authorModel);
        Task DeleteUserAsync(int userId);

    }
}
