using Core.Utilities.Results;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICarImageService
    {
        IResult Add(CarImage carImage, IFormFile file);
        IResult Update(int carImageId, IFormFile file);
        IResult Delete(CarImage carImage);
        IDataResult<List<CarImage>> GetAll();
        IDataResult<CarImage> GetById(int id);
        IDataResult<List<CarImage>> GetByCarImages(int carId);
    }
}
