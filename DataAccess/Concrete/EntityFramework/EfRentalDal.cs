using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfRentalDal : EfEntityRepositoryBase<Rental, ReCapProjectContext>, IRentalDal
    {
        public List<RentDetailDto> GetRentalDetails()
        {
            using (ReCapProjectContext context = new ReCapProjectContext())
            {
                var result = from r in context.Rentals
                             join c in context.Customers
                             on r.CustomerId equals c.Id
                             join u in context.Users
                             on c.UserId equals u.Id
                             join car in context.Cars
                             on r.CarId equals car.CarId

                             select new RentDetailDto
                             {
                                 Id = r.Id,
                                 CarId = r.CarId,
                                 CarName = car.CarName,
                                 FirstName = u.FirstName,
                                 LastName = u.LastName,
                                 CompanyName = c.CompanyName,
                                 IsReturn = r.IsReturn,
                                 Email = u.Email,
                                 RentDate = r.RentDate,
                                 ReturnTime = r.ReturnDate
                             };
                             return result.ToList();
            }
        }

        public List<RentDetailDto> GetRentalDetailsByCarId(int carId)
        {
            using (ReCapProjectContext context = new ReCapProjectContext())
            {
                var result = from r in context.Rentals
                             join c in context.Customers
                             on r.CustomerId equals c.Id
                             join u in context.Users
                             on c.UserId equals u.Id
                             join car in context.Cars
                             on r.CarId equals car.CarId
                             where r.CarId == carId

                             select new RentDetailDto
                             {
                                 Id = r.Id,
                                 CarId = r.CarId,
                                 CarName = car.CarName,
                                 FirstName = u.FirstName,
                                 LastName = u.LastName,
                                 CompanyName = c.CompanyName,
                                 IsReturn = r.IsReturn,
                                 Email = u.Email,
                                 RentDate = r.RentDate,
                                 ReturnTime = r.ReturnDate
                             };
                return result.ToList();
            }
        }
    }
}
