using portailpik.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Task;

namespace portailpik.Data
{

  public class MyDbContext : DbContext
  {

    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) {  }
    public DbSet<Note> Notes { get; set; }

  }

}