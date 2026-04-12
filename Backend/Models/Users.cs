
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
       
    public class Users
    {
        
        //shkurtesa "prop"
        [Key]
        [Required]
        public int ID{get;set;}

        [Required]
        public String? FirstName{get;set;}

        [Required]
        public String?  LastName{get;set;}
        public String? Email{get;set;}
        public String? Password_hash{get;set;}
        public bool  IsActive{get;set;}
        public int Created_by{get;set;}
        public 	DateTime? Created_at{get;set;}
        public DateTime? Updated_at{get;set;}
    public  required List<UserRoles>UserRoles {get;set;}
    }

 
}


    