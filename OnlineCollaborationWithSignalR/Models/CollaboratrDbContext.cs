using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OnlineCollaborationWithSignalR.Models
{
    public class CollaboratrDbContext : DbContext
    {
        public CollaboratrDbContext()
            : base(nameOrConnectionString: "CollaboratRDbConnection")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<CollaboratrDbContext>(
                new DropCreateDatabaseIfModelChanges<CollaboratrDbContext>());
        }

        public DbSet<Note> Notes { get; set; }
    }
}