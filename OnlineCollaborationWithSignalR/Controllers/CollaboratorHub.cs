using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace OnlineCollaborationWithSignalR.Controllers
{
    public class CollaboratorHub : Hub
    {
        public void Patch(string updatedText)
        {
            Clients.Others.Patch(updatedText);
        }
    }
}