using Breeze.WebApi;
using Newtonsoft.Json.Linq;
using OnlineCollaborationWithSignalR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace OnlineCollaborationWithSignalR.Controllers
{
    [Breeze.WebApi.BreezeController]
    public class BreezeController : ApiController
    {
        readonly EFContextProvider<CollaboratrDbContext> _contextProvider =
    new EFContextProvider<CollaboratrDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }

        [HttpGet]
        public IQueryable<Note> Notes()
        {
            return _contextProvider.Context.Notes;
        }
    }
}