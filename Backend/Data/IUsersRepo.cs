using Backend.Models;

namespace Backend.Data;
public interface IUsersRepo
{
    bool SaveChanges();

//METODAT E userRepo 
//spari me i pas krejt userat
    IEnumerable<Users>GetAllUsers();

//veq me nja
    Users GetUsersByID(int id);
    
    //me kriju i user
    void CreateUsers(Users us);
    
}