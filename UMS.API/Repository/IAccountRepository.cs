using UMS.API.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace UMS.API.Repository
{
    public interface IAccountRepository
    {
        Task<IdentityResult> SignUpAsync(SignUpModel signUpModel);
        Task<string> LoginAsync(SignInModel signInModel);
    }
}
