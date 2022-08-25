using AutoMapper;
using UMS.API.Data;
using UMS.API.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UMS.API.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<UserModel>> GetAllUsersAsync()
        {
            var records = await _context.Users.Select(x => new UserModel()
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                UserName = x.UserName,
                Password = x.Password,
                Email = x.Email,
                Status = x.Status

            }).ToListAsync();

            return records;

        }

        public async Task<UserModel> GetUserByIdAsync(int authorId)
        {
            var records = await _context.Users.Where(x => x.Id == authorId).Select(x => new UserModel()
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                UserName = x.UserName,
                Password = x.Password,
                Email = x.Email,
                Status = x.Status

            }).FirstOrDefaultAsync();

            return records;

        }

        public async Task<int> AddUserAsync(UserModel authorModel)
        {
            var author = new UserModel()
            {
                FirstName = authorModel.FirstName,
                LastName = authorModel.LastName,
                UserName = authorModel.UserName,
                Password = authorModel.Password,
                Email = authorModel.Email,
                Status = authorModel.Status
            };

            _context.Users.Add(author);
            await _context.SaveChangesAsync();

            return author.Id;
        }

        public async Task UpdateUserAsync(int authorId, UserModel authorModel)
        {

            var author = new UserModel()
            {
                Id = authorId,
                FirstName = authorModel.FirstName,
                LastName = authorModel.LastName,
                UserName = authorModel.UserName,
                Password = authorModel.Password,
                Email = authorModel.Email,
                Status = authorModel.Status
            };

            _context.Users.Update(author);
            await _context.SaveChangesAsync();

        }

        public async Task DeleteUserAsync(int authorId)
        {
            var author = new UserModel() { Id = authorId };

            _context.Users.Remove(author);

            await _context.SaveChangesAsync();
        }

    }
}
