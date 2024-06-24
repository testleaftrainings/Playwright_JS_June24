Agenda (23rd June 2024)
----------------------

9.00AM  to 10.15AM  -Understanding DOM and Basic locators
10.15AM to 10.30AM  -classroom
10.30AM to 10.40AM  -Break
10.40AM to 11.15AM  -Handling Dropdown
11.15AM to 11.30AM  -Classroom
11.30AM to 12.00PM  -Playwright Locators
12.00PM to 12.45PM  -Advanced Locators (CSS/Xpath)
12.45PM to 1.00PM   -Assertions


DOM -->document Object Model /developer  /Html design 
   -->find information elements

<html> -->root tag
 <head> ... </head>
 <body>
    <div  id="Username">  -->tags
      <table>
    <span>
     <a> -->link based
     <p> -->paragragh
  <select>  -->dropdown element
  <table>--> tabular stucture
    <svg>-->icon
  </body>
</html> -->end of the page

<a>Text -->linktext
<div> text -->text

tag --> attribute
Css Selector Syntax
id --> #
id value -->attributeValue

#idVlaue
class attribute --> .attributeVlaue
attribute based
[id="username"]

tag[attribute='attributeValue']
input[id="username"]
input#username
input.inputLogin
[for='username']


Dropdown 
---------
 confirmed from dom with <select>
  if not handle element as normally using .click()

page.selectOption
 choose the value from the options (dd)-->using value attribute    {value:"LEAD_EMPLOYEE"}
                                      -->black text      {label:"Existing Customer"}
                                      -->index           {index:3}  -->4th element in the option
Playwright Locators
  getByRole  -->button,link,radio... ("link",{name:"blackText"})
  getByLabel -->Black text with <label>
  getByText  ->black text
  getByPlaceHolder -->placeholder attribute
  getByTitle  -->title attribute

--------------------------
Advanced css selector

parent locator > child tag
#createLeadForm_dataSourceId > option
[id=createLeadForm_dataSourceId] > option
[class=top] > input

first()
nth()
last()

sibiling (immediate)
tagname[attribute="value"] + tagname

cousin (following elements matching to the  current element)
tagname[attribute="value"] ~ tagname















https://forms.office.com/r/AJ6W1yQ3kw