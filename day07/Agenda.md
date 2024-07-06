
Agenda (6th July 2024):
----------------------
9.00AM  to 10.00AM  -Alert
10.00AM to 10.15AM  -Break
10.15AM to 11.30AM  -Frame
11.30AM to 11.50AM  -classroom
11.50AM to 12.40PM  -Window
12.40PM to 01.00PM  -Classroom
01.00PM to  01.10PM -wrap up


-----------------
Alert:(dialog box/ modal dialog)
----- 
 pop message /warning message comes from the application
 not inspectable and it should be handled (cannot be ignored)

Modal :
    -Simple Alert (Ok button)
    -Confirmation Alert(Ok/Cancel ) -->take decision
    -Prompt Alert (allow to provide you input and to take decision ok/cancel)

Non Modal:(sweet alert)
  -warning message
  -can be inspectable and cannot be ignored
  -can handleed as normal element -->inspect the element and click

ok -->accept
cancel-->dismiss

Playwright by default auto dismisses the modal alert
to handle the alert
   -event listener ->looking on for the event to handle
   page.on    -->handle all the alerts
              --->based on the type of alert you take action
   page.once  -->handle only one alert
              --->for every alert add the code on top of it 


Frames:
------
  outerlayer of an element
  page inside a page
  html inside another html

  <html>
    <iframe>
      <html>
      </html>
    </iframe>
 </html>

 index based ->count of available frames
 frame Object 
 frameLocator

 right click on the ele ->view framesource or reload frame
      handle frame and locate the targeted ele

framecount(1).fill(locator,data) is this acceptable yes
if we have text box inside frame in frame 1?

window Handling:
-------------
scenario:
 1 context ->multiple Pages
 multiple context -each one page

 count -->using index
 listener
 promise ->multiple window