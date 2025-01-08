using Business.Abstract;
using Business.Constants;
using Core.Utilities.Business;
using Core.Utilities.Helpers.FileHelper;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CarImageManager : ICarImageService
    {
        ICarImageDal _carImageDal;
        IFileHelper _fileHelper;
        public CarImageManager(ICarImageDal carImageDal, IFileHelper fileHelper)
        {
            _carImageDal = carImageDal;
            _fileHelper = fileHelper;

        }

        string root = "C:\\Users\\bakir\\Desktop\\Software\\Code.io\\ReCapProject\\WebAPI\\wwwroot\\";

        public IResult Add(CarImage carImage, IFormFile file)
        {
            IResult result = BusinessRules.Run(GetCheckCarImageLimit(carImage.CarId));

            if (result != null)
            {
                return result;
            }

            string imagePath = root + _fileHelper.Upload(file, root);

            carImage.ImagePath = imagePath;
            carImage.Date = DateTime.Now;
            _carImageDal.Add(carImage);

            return new SuccessResult(Messages.CarImageAdded);

        }

        public IResult Delete(CarImage carImage)
        {
            string rootPath = carImage.ImagePath;
            _carImageDal.Delete(carImage);
            return new SuccessResult(Messages.CarImageDeleted);
        }

        public IDataResult<List<CarImage>> GetAll()
        {
            return new SuccessDataResult<List<CarImage>>(_carImageDal.GetAll(), Messages.CarImageListed);
        }

        public IDataResult<List<CarImage>> GetByCarImages(int carId)
        {
            var result = _carImageDal.GetAll(p => p.CarId == carId).Count;
            if (result <= 0)
            {
                List<CarImage> defaultImage = new List<CarImage>
                {
                    new CarImage
                    {
                    CarId = carId,
                    ImagePath = "C:\\Users\\bakir\\Desktop\\Software\\Code.io\\ReCapProject\\WebAPI\\wwwroot\\NoImageAvailable.jpg",
                    Date = DateTime.Now
                    }
                };
                return new SuccessDataResult<List<CarImage>>(defaultImage, Messages.CarImageNotFound);
            }
            return new SuccessDataResult<List<CarImage>>(_carImageDal.GetAll(p => p.CarId == carId));
        }

        public IDataResult<CarImage> GetById(int id)
        {
            return new SuccessDataResult<CarImage>(_carImageDal.Get(p => p.Id == id));
        }

        public IResult Update(int carImageId, IFormFile file)
        {
            CarImage carImage = _carImageDal.Get(p => p.Id == carImageId);

            string oldFileName = carImage.ImagePath;
            string newFileName = _fileHelper.Update(file, oldFileName, root);
            carImage.ImagePath = root + newFileName;
            carImage.Date = DateTime.Now;
            _carImageDal.Update(carImage);

            return new SuccessDataResult<CarImage>(carImage, Messages.CarImageUpdated);
        }

        private IResult GetCheckCarImageLimit(int carId)
        {
            var result = _carImageDal.GetAll(p => p.CarId == carId).Count;
            if (result >= 5)
            {
                return new ErrorResult(Messages.MaxLimitCarImage);
            }
            return new SuccessResult();
        }

    }
}
