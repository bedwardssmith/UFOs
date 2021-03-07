# UFOs
<h1>Overview of Project</h1>
<p>The purpose of this analysis is to review a dynamic webpage created to display an article and data related to UFO sitings.  This webpage allows for filtering of information based on date, city, state, coutry and/or shape input by the user.</p>
<br>
<h1>Results</h1>
<p>Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria.  Use images of your webpage during the filtering process to support your explanation</p>
<p>With the use of JavaScript and Bootstrap the webpage is dynamic in that the table containing the UFO data is updated based on user input.  Input fields are defined with placeholder's allowing a user to quickly understand the format required for the input fields.<p>
<p>Below are the steps required to filter the data, however, it should be noted that the search criteria is not independent in that the data will be updated based on all filter criteria entered:</p>
<ul>
  <li>Enter a Date within the "Enter Date" cell using the format MM/DD/YYYY. The table data will update to reflect data based on the date entered.</li>
</ul>  
  <img src="https://github.com/bedwardssmith/UFOs/blob/main/static/images/Filter_by_date.png" alt="Enter a  Date">
<ul> 
  <li>Enter a City within the "Enter a City" cell.</li>
</ul>  
  <img src="https://github.com/bedwardssmith/UFOs/blob/main/static/images/Filter_by_city.png" alt="Enter a City">
<ul>  
  <li>Enter a State within the "Enter a State" cell.  The placeholder instructs the user to enter the 2 letter abbreviation for the state"</li>
</ul>  
  <img src="https://github.com/bedwardssmith/UFOs/blob/main/static/images/Filter_by_state.png" alt="Enter a State">
<ul>  
  <li>Enter a Country within the "Enter a Country" cell.  The placeholder instructs the user to enter the 2 letter abbreviaiton for the country"</li>
</ul>  
  <img src="https://github.com/bedwardssmith/UFOs/blob/main/static/images/Filter_by_country.png" alt="Enter a Country">
<ul>  
  <li>Enter a shape within the "enter a Shape" cell.</li>
</ul>  
  <img src="https://github.com/bedwardssmith/UFOs/blob/main/static/images/Filter_by_shape.png" alt="Enter a Shape">
 <ul> 
  <li>As the user updates the input fields the data reflected in the table updates accordingly.  The image below includes data as of January 10, 2010, City of Boca Raton, State of Florida, Country of US and a Fireball shape.</li>
  </ul>
  <br>
  <img src="https://github.com/bedwardssmith/UFOs/blob/main/static/images/All_filters.png" alt="All filters">




<h1>Summary</h1>
<p>In reviewing the functionality of the webpage there is one significant drawback to it's design in that there is no button to clean all filters.  This combined with the fact that the color or intensity of the color does not change when a user adds a search criteria it can become confusing as to which input cells have been updated.</p>
<p>I would recommend the following be added to the webpage to improve the user experience.</p>
<ul>
  <li>User does not know the search criteria.  For example if the user were to input a current date the table would not populate leaving the user wondering whether the website is working.  To solve this an explanation could be added stating the range of dates; "Select a date beginning on or before MMDDYYYY and ending on or before MMDDYYYY".  Alternatively if a date is entered that is out of range a pop-up message would appear stating the acceptable date range.</li>
  <li>Intensity or color of the text be changed when a user enters text into a search field.  This would allow the user to quickly see which cells include filters.</li>
  <li>Error messages be added where a user inputs a search criteria that is not found within the table.  For example if the user were to enter a city that is not included in the data a message would appear stating that the data does not include UFO sightings for the particular city.</li>
</ul>
  
