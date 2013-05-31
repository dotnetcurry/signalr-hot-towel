using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineCollaborationWithSignalR.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public DateTime Updated { get; set; }
    }
}