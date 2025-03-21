﻿//using Business.Concrete;
//using Core.Entities.Concrete;
//using DataAccess.Concrete.EntityFramework;
//using DataAccess.Concrete.InMemory;
//using Entities.Concrete;

//RentalManager rentalManager = new RentalManager(new EfRentalDal());

//Rental rent1 = new Rental
//{
//    CarId = 1,
//    CustomerId = 2,
//};

//rentalManager.Add(rent1);


//// Color Test ---------------------------------------------------------
//static void ColorAddTest()
//{
//    ColorManager colorManager = new ColorManager(new EfColorDal());

//    List<Color> colorList = new List<Color>
//{
//    new Color{ColorName = "Kırmızı"},
//    new Color{ColorName = "Mavi"},
//    new Color{ColorName = "Beyaz"},
//    new Color{ColorName = "Siyah"},
//    new Color{ColorName = "Yeşil"},
//    new Color{ColorName = "Gri"},
//    new Color{ColorName = "Füme"},
//    new Color{ColorName = "Turuncu"},
//    new Color{ColorName = "Lacivert"}
//};

//    foreach (var color in colorList)
//    {
//        colorManager.Add(color);
//    }
//}

//static void ColorDeleteTest()
//{
//    ColorManager colorManager = new ColorManager(new EfColorDal());
//    colorManager.Delete(new Color { Id = 9, ColorName = "Lacivert" });
//}

//static void ColorUpdateTest()
//{
//    ColorManager colorManager = new ColorManager(new EfColorDal());
//    colorManager.Update(new Color { Id = 10, ColorName = "KoyuMavi" });
//}






//// Brand Test ----------------------------------------------------------
//static void BrandAddTest()
//{
//    BrandManager brandManager = new BrandManager(new EfBrandDal());
//    List<Brand> brands = new List<Brand>
//{
//    new Brand {BrandName = "Alfa Romeo"},
//    new Brand {BrandName = "Citroen"},
//    new Brand {BrandName = "BMW"},
//    new Brand {BrandName = "Renault"},
//    new Brand {BrandName = "Peugeot"},
//    new Brand {BrandName = "Mercedes Benz"},
//    new Brand {BrandName = "Fiat"},
//    new Brand {BrandName = "Jeep"},
//    new Brand {BrandName = "Range Rower"}
//};

//    foreach (var brand in brands)
//    {
//        brandManager.Add(brand);
//        Console.WriteLine(brand.BrandName + " eklendi.");
//    }
//}

//static void BrandUpdateTest()
//{
//    BrandManager brandManager = new BrandManager(new EfBrandDal());
//    brandManager.Update(new Brand { Id = 9, BrandName = "Land Rower" });
//}

//static void BrandDeleteTest()
//{
//    BrandManager brandManager = new BrandManager(new EfBrandDal());
//    brandManager.Delete(new Brand { Id = 9, BrandName = "Land Rover" });
//}





//// Car Test ---------------------------------------------------------------------
//static void CarAddTest()
//{
//    CarManager carManager = new CarManager(new EfCarDal());
//    List<Car> cars = new List<Car>
//{
//    new Car {BrandId = 1, ColorId = 1, CarName = "156 GTA", ModelYear = 1998, DailyPrice = 4000, Description = "Sedan"},
//    new Car {BrandId = 2, ColorId = 2, CarName = "C5", ModelYear = 2012, DailyPrice = 6000, Description = "Sedan"},
//    new Car {BrandId = 2, ColorId = 3, CarName = "Xsara", ModelYear = 2000, DailyPrice = 3500, Description = "Hatchback"},
//    new Car {BrandId = 3, ColorId = 5, CarName = "750LD", ModelYear = 2009, DailyPrice = 8000, Description = "Sedan"},
//    new Car {BrandId = 1, ColorId = 8, CarName = "166", ModelYear = 2001, DailyPrice = 4000, Description = "Sedan"},
//    new Car {BrandId = 1, ColorId = 8, CarName = "176", ModelYear = 2001, DailyPrice = 4000, Description = "Sedan"}
//};

//    foreach (var car in cars)
//    {
//        carManager.Add(car);
//        Console.WriteLine(car.CarName + " eklendi.");
//    }
//}

//static void CustomerAddTest()
//{
//    CustomerManager customerManager = new CustomerManager(new EfCustomerDal());
//    List<Customer> customerList = new List<Customer>
//{
//    new Customer { UserId = 3, CompanyName = "Metro Travel"},
//    new Customer { UserId = 4, CompanyName = "Kapadokya Turizm"}
//};

//    foreach (var customer in customerList)
//    {
//        customerManager.Add(customer);
//    }
//}

//static void UserAddTest()
//{
//    UserManager userManager = new UserManager(new EfUserDal());
//    List<User> users = new List<User>
//{
//    new User{ FirstName = "Ayşe", LastName = "Öztürk", Email = "ayse123@gmail.com", Password = "Ayşe3"},
//    new User{ FirstName = "Mehmet", LastName = "Çakır", Email = "mehmet123@gmail.com", Password = "Mehmet10"},
//    new User{ FirstName = "Yusuf", LastName = "Sekizer", Email = "yusuf123@gmail.com", Password = "Yusuf8"},
//    new User{ FirstName = "İsmail", LastName = "Çalışkan", Email = "ismail123@gmail.com", Password = "İsmail15"},
//    new User{ FirstName = "Fatma", LastName = "Yılmaz", Email = "fatmac123@gmail.com", Password = "Fatmac2005"},
//    new User{ FirstName = "Elif", LastName = "Duman", Email = "elif123@gmail.com", Password = "Elif25"}
//};

//    foreach (var user in users)
//    {
//        userManager.Add(user);
//    }
//}