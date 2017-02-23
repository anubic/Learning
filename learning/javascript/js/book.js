var Person = {
	initialize: function (name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this; // Возвращаем данный объект, для того чтобы ему присвоились значения
	}, // создали метод, которрый будет присваивать полученые значение объекту
	hello: function() {
		console.log("Hi, my name, is " + this.name);
	}
}; // Прототип объекта.

var person, anotherPerson, thirdPerson;

person = Object.create(Person).initialize("Anubic", 24, "male"); // Создание из прототипа.
anotherPerson = Object.create(Person).initialize("James", 34, "male");
thirdPerson = Object.create(Person).initialize("Katya", 20, "Female");

thirdPerson.hello();

console.log(Person.isPrototypeOf(person)); // являеся ли объект прототипом объекта

var WebDeveloper = Object.create(Person); // Делаем Person прототипом WebDevelopera


WebDeveloper.initialize = function(name, age, gender, skills) { // изменяем конструктор прототипа, присваивая ему новые свойства.
	Person.initialize.apply(this, arguments); // чтобы не вводить заново поля из первоночального прототипа, вызываем из конснтруктора класа веб двелопер, конструктор класа  Person
	// Используем метод apply, который передает этому конструктору указаные аргументы в виде строки
	this.skills = skills || [];
	return this;
}; // Создаем новый объект который должен вести себя так же как и прототип Person но иметь свои свойства и методы



WebDeveloper.develop = function(){
	console.log("Working...");
};

var developer = Object.create(WebDeveloper).initialize("Jack", 20, "male", ["css", "html", "js"]);

console.log(Object.keys(developer));
console.log(developer.skills);
developer.develop();
console.log(WebDeveloper.isPrototypeOf(developer));