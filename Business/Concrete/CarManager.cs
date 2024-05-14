using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }

        public void Add(Car car)
        {
            if (car.Description.Length>=2 && car.DailyPrice > 0)
            {
                _carDal.Add(car);
            }
            else
            {
                Console.WriteLine("Araç ismi minimum 2 karakterden oluşmalı ve günlük ücreti sıfırdan büyük olmalıdır!");
            }
        }

        public List<Car> GetAll()
        {
            return _carDal.GetAll();
        }

        public List<Car> GetCarsByBrandId(int Id)
        {
            return _carDal.GetAll(p  => p.BrandId == Id);
        }

        public List<Car> GetCarsByColorId(int Id)
        {
            return _carDal.GetAll(p =>p.ColorId == Id);
        }
    }
}
