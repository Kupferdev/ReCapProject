using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore.Storage.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class RentalManager : IRentalService
    {
        IRentalDal _rentaldal;

        public RentalManager(IRentalDal rentalDal)
        {
            _rentaldal = rentalDal;
        }
        public IResult Add(Rental rental)
        {
            var carİsNull = _rentaldal.GetAll(r => r.CarId == rental.CarId).FirstOrDefault(r => r.ReturnDate == null);
            if (carİsNull == null)
            {
                rental.RentDate = DateTime.Now;
                _rentaldal.Add(rental);
                return new SuccessResult(Messages.RentalCreated);
            }
            else return new SuccessResult(Messages.CarNotReturn);
        }

        public IResult Delete(Rental rental)
        {
            _rentaldal.Delete(rental);
            return new SuccessResult(Messages.RentalDeleted);
        }

        public IDataResult<List<Rental>> GetAll()
        {
            return new SuccessDataResult<List<Rental>>(_rentaldal.GetAll(), Messages.RentalListed);
        }

        public IResult Update(Rental rental)
        {
            _rentaldal.Update(rental);
            return new SuccessResult(Messages.RentalUpdated);
        }
    }
}
