namespace Backend.Models;
public class UserRoles
{
    
    public int Int{get;set;}
    
    public DateTime? Assigned_at{get;set;}

    public required List<Roles> Roles{get;set;}

}