using Microsoft.EntityFrameworkCore;
using OrderPlacementSystem.Domain;

namespace OrderPlacementSystem.Data
{
    public class OrderPlacementSystemContext: DbContext 
    {
        public OrderPlacementSystemContext()
        {
            //Only needed for the UI project to not explode, can be deleted whenever the UI project is not neede for testing anymore
        }

        public OrderPlacementSystemContext(DbContextOptions<OrderPlacementSystemContext> options)
            :base(options)
        {
            //This constructor is needed for configuration with API project's startup.cs
        }
        public DbSet<Order> Orders { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Data Source= (localdb)\\MSSQLLocalDB; Initial Catalog=OrderServiceAppData");
        }
    }
}
