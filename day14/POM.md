Today's Agenda
--------------
9.00AM to 10.00AM  -Abstraction
10.00AM to 10.45AM -Basic POM
10.45AM to 11.15AM -classroom
11.15AM to 11.30PM -Break
11.30PM to 12.00PM -Parametrization
12.00PM to 12.30PM -custom RetryLogic
12.30PM to 1.00PM  -custom Reporter


Inheritance -->acquiring the property of parent  -->extends 
Enscapsulation -->Binding the data and methods together
Abstraction-->hiding the internal details and showing the relavant information to the user
                implements ands extends

   interface  ->100% abstraction -->no logic /no implementation -->declartion of methods-->model 
    printDetails() ;  ->design  -->implementation usually done at the class

        click()

        fill()  ->fill and enter 

  fillAndEnter(locator:string,data:string);
  
  fillAndTab();

  flexibility -->codebase

wrappermethods
    class
       fillAndEnter(locator:string,data:strirng){
        awath thispagelocator click
         type
         enter
       }

pages

   async enterCredentials(locator:string,data:string){
    this.fillAndEnter("#username",data)
   }

test(){
    object.enterCredentials("demo")
}

   abstract class:
     partial abstraction
      both logically implemetmented method and unimplemented methods



polymorphism --one method takes many forms 
                overlading  -->one method of same class can be duplicated with multiple arguments
                /overriding ->with inheritance  --> method of parent  can have different implementation in its subclass




extends  -->same type of classes will extend the property of parent 
implements ->abstract methods(Methods with no logic) with interface class shoule be implemented with the concrete class

concrete class extends another concrete class
interface extends another interface
concreteclass implements interface
concreteclass extends abstract class
abstract class extends another abstract class

cannot create object for both abstract class and interface 
create object for the concrete class


Abstract class
  partial abstraction 

  both implemented and un implemented methods

  abstract class 
   genrateReport():void;
   takeScreenshot(){
     
   }

PageObjectModel -->design patterns 

 built framework
 built class with respect to the navigation of application flow

 LoginPage
 HomePage

 Leads  ->CRUD   ->createLead
       giving some input to fields
 Opportunity
       giving some input to fields
 Account

 
click
enter
hover
type
window handling
frame
alert

separating elements and actions based application flow and test exe

pages ,test 


data
fixtures -->customfixtures
datafiles  ->externam files to read data
utitlity -->wrapper methods 
pages -->page actions ->leads create edit 
tests -->test for exe
 

Inheritace -->connect the page

test(`` async({page}))
{
    new classname(page)
}

class classname{

page:Page
constructor(page){
    this.page =page
}

clickonelement -->page.click(Webelement)



}






playwright wrapper  -->resuable methods -wrapper method to have multiple action in one method

LoginPage-->homePage-->leads


Leads -->Vidya -->innerText(locator)--> expect()
Oppotunity -->Murali






