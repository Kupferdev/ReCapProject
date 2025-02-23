using Core.Entities.Concrete;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Constants
{
    public static class Messages
    {
        //Car Messages
        public static string CarNameInvalid = "Araba ismi geçersiz";
        public static string CarAdded = "Araba eklendi";
        public static string CarDeleted = "Araç silinidi.";
        public static string CarsListed = "Araçlar listelendi";
        public static string CarUpdate = "Araç bilgileri güncellendi";

        //Brand Messages
        public static string BrandAdded = "Marka eklendi.";
        public static string BrandDeleted = "Marka silindi.";
        public static string BrandUpdated = "Marka bilgileri güncellendi.";

        //Color Messages
        internal static string ColorAdded = "Renk eklendi.";
        internal static string ColorDeleted = "Renk silindi.";
        internal static string ColorUpdated = "Renk güncellendi.";

        //Customer Messages
        public static string CustomerAdded = "Müşteri oluşturuldu.";
        public static string CustomerDeleted = "Müşteri silindi.";
        public static string CustomerUpdated = "Müşteri bilgileri güncellendi.";
        public static string CustomerListed = "Müşteriler listelendi.";

        //Rental Messages
        public static string RentalCreated = "Kiralama eklendi.";
        public static string RentalDeleted = "Kiralama silindi";
        public static string RentalUpdated = "Kiralama bilgileri güncellendi.";
        public static string RentalListed = "Kiralamalar listelendi.";
        public static string CarNotReturn = "Araç teslim edilmemiş";

        //User Messages
        public static string UserCreated = "Kullanıcı oluşturuldu";
        public static string UserListed = "Kullanıcılar listelendi.";
        public static string UserUpdated = "Kullanıcı bilgileri güncellendi.";
        public static string UserDeleted = "Kullanıcı silindi.";

        //CarImage
        public static string CarImageAdded = "Araba fotoğrafı eklendi.";
        public static string CarImageDeleted = "Araba fotoğrafı silindi.";
        public static string CarImageListed = "Tüm araba fotoğrafları listelendi.";
        public static string CarImageUpdated = "Araba fotoğrafı güncellendi.";
        public static string MaxLimitCarImage = "Maximum sayıda araba fotoğrafını yüklediniz.";
        public static string CarImageNotFound = "Arabaya ait resim bulunamadı.";
        public static string UserNotFound;
        public static string PasswordError = "Parola hatalı!";
        internal static string SuccessfulLogin;
        internal static string UserAlreadyExists;
        internal static string UserRegistered;
        internal static string AccessTokenCreated;
        public static string AuthorizationDenied = "Yetki reddedildi!";
    }
}
