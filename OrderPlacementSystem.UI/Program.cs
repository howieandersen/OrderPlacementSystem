using System;
using System.Linq;
using OrderPlacementSystem.Domain;
using OrderPlacementSystem.Data;

namespace OrderPlacementSystem.UI
{
    class Program
    {
        private static  OrderPlacementSystemContext _context = new();
        static void Main()
        {
            _context.Database.EnsureCreated();
            GetOrders("Before Add:");
            AddOrder();
            GetOrders("After Add:");
            Console.Write("Press any key...");
            Console.ReadKey();
        }

        private static void AddOrder()
        {
            var order = new Order
            {
                Id = Guid.NewGuid(),
                OrderServiceType = "Cleaning",
                ServiceDate = DateTime.Now,
                Name = "Maka",
                PhoneNumber = 90122552,
                Email = "makaandersen@gmail.com",
                OldAddress = "Frierveien 1B, 1179 Oslo",
                NewAddress = "Skøyensvingen 16A, 1375 Oslo",
                AdditionalNote = "Jeg vil ikke vaske selv"
            };

            _context.Orders.Add(order);
            _context.SaveChanges();
        }

        private static void GetOrders(string text)
        {
            var orders = _context.Orders.ToList();
            Console.WriteLine($"{text}: Order count is {orders.Count}");
            foreach (var order in orders)
            {
                Console.WriteLine(order.Id);
                Console.WriteLine(order.Name);
                Console.WriteLine(order.OrderServiceType);
                Console.WriteLine(order.ServiceDate);
                Console.WriteLine(order.PhoneNumber);
                Console.WriteLine(order.Email);
                Console.WriteLine(order.OldAddress);
                Console.WriteLine(order.NewAddress);
                Console.WriteLine(order.AdditionalNote);
            }
        }
    }
}
