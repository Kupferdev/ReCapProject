using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.InMemory
{
    public class InMemoryCarDal : ICarDal
    {
        List<Car> _cars;

        public InMemoryCarDal()
        {
            _cars = new List<Car>
            {
                //new Car {Id = 1, BrandId = 1, ColorId = 1, CarName = "156 GTA", ModelYear = 1998, DailyPrice = 4000, Description = "Sedan"},
                //new Car {Id = 2, BrandId = 2, ColorId = 2, CarName = "C5", ModelYear = 2012, DailyPrice = 6000, Description = "Sedan"},
                //new Car {Id = 3, BrandId = 2, ColorId = 3, CarName = "Xsara", ModelYear = 2000, DailyPrice = 3500, Description = "Hatchback"},
                //new Car {Id = 4, BrandId = 3, ColorId = 5, CarName = "750LD", ModelYear = 2009, DailyPrice = 8000, Description = "Sedan"},
                //new Car {Id = 5, BrandId = 1, ColorId = 8, CarName = "166", ModelYear = 2001, DailyPrice = 4000, Description = "Sedan"}
            };
        }

        public void Add(Car car)
        {
            _cars.Add(car);
        }

        public void Delete(Car car)
        {
            Car carToDelete = _cars.FirstOrDefault(c => c.Id == car.Id);
            _cars.Remove(carToDelete);
        }

        public Car Get(Expression<Func<Car, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public List<Car> GetAll()
        {
            return _cars;
        }

        public List<Car> GetAll(Expression<Func<Car, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public List<Car> GetById(int identity)
        {
            return _cars.Where(c => c.Id == identity).ToList();
        }

        public List<CarDetailDto> GetCarDetails()
        {
            throw new NotImplementedException();
        }

        public List<CarDetailDto> GetFirstCarDetail(int Id)
        {
            throw new NotImplementedException();
        }

        public void Update(Car car)
        {
            Car carToUpdate = _cars.FirstOrDefault(c => c.Id == car.Id);
            carToUpdate.BrandId = car.BrandId;
            carToUpdate.ColorId = car.ColorId;
            carToUpdate.ModelYear = car.ModelYear;
            carToUpdate.DailyPrice = car.DailyPrice;
            carToUpdate.Description = car.Description;
        }
    }
}
