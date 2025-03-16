using Business.Abstract;
using Business.Constants;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Performance;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
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
        [PerformanceAspect(3)]
        [CacheRemoveAspect("IRentalService.GetAll")]
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
        [CacheAspect]
        public IDataResult<List<Rental>> GetAll()
        {
            return new SuccessDataResult<List<Rental>>(_rentaldal.GetAll(), Messages.RentalListed);
        }

        public IDataResult<List<Rental>> GetCarRental(int id)
        {
            return new SuccessDataResult<List<Rental>>(_rentaldal.GetAll(r=> r.CarId == id), Messages.RentalListed);
        }

        public IDataResult<List<RentDetailDto>> GetRentalsDetail()
        {
            return new SuccessDataResult<List<RentDetailDto>>(_rentaldal.GetRentalDetails(), Messages.RentalListed);
        }

        public IDataResult<List<RentDetailDto>> GetRentDetailByCarId(int carId)
        {
            return new SuccessDataResult<List<RentDetailDto>>(_rentaldal.GetRentalDetailsByCarId(carId), Messages.RentalListed);
        }

        public IResult Update(Rental rental)
        {
            _rentaldal.Update(rental);
            return new SuccessResult(Messages.RentalUpdated);
        }
    }
}
