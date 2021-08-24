using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderPlacementSystem.Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public string OrderServiceType { get; set; }
        public DateTime ServiceDate { get; set; }
        public string Name { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public string OldAddress { get; set; }
        public string NewAddress { get; set; }
        public string AdditionalNote { get; set; }
    }
}
