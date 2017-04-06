function Telefon(marka, cena, kolor, ekran, waga) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.ekran = ekran;
	this.waga = waga;
}
Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Telefon ma przekątną ekranu równą " + this.ekran + ", a jego waga to " + this.waga + ".");
}
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "4,5cala", "156g");
var SamsungGalaxyS6 = new Telefon("Samsung", 1250, "czarny", "3cale", "250g");
var OnePlusOne = new Telefon("One",450, "szary", "6cali", "400g");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
