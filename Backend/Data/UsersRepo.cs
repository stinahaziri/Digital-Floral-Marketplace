using Backend.Models;

namespace Backend.Data;

public class UsersRepo : IUsersRepo

{
    private readonly AppDbContext _context;

    public UsersRepo(AppDbContext context)
    { 
        _context=context;
    }

    public void CreateUsers(Users us)
    {
        if(us== null)
        {
            throw new ArgumentException(nameof(us));
            _context.Users.Add(us);
        }
    }

    public IEnumerable<Users> GetAllUsers()
    {
        return _context.Users.ToList();
    }

    public Users GetUsersByID(int id)
    {
        return _context.Users.FirstOrDefault(p => p.ID == id);

    }

    public bool SaveChanges()
    {
        return (_context.SaveChanges()>0);
    }
}