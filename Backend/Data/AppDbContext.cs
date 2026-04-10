using Backend.Models;
using Microsoft.EntityFrameworkCore;
namespace Backend.Data
{
    
public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>opt):base(opt)
        {
            
        }
        public DbSet<Users>Users{get; set;}

      
}
}