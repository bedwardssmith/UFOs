# UFOs
<h1>Overview of Project</h1>
<p>The purpose of this analysis is to review a dynamic webpage created to display an article and data related to UFO sitings.  This webpage allows for filtering of information based on date, city, state, coutry and/or shape input by the user.</p>

<h1>Results</h1>
<p>With the use of JavaScript and Bootstrap the webpage is dynamic in that the table containing the UFO data is updated based on user input.<p>
<p>The user can filter the information based on date, city, state, country and/or shape.  As the user updates their selection the table refreshes.  The user may enter one filter, a combination of filters, or all filters. Below are the steps to utilize the filtering option.  Although they are reflected in the order they appear in the webpage there is no requirement to complete them in this order.</p>
<ul>
  <li>Enter a Date within the "Enter Date" cell using the format MM/DD/YYYY.</li>
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
<p>In reviewing the functionality of the webpage there is one significant drawback to it's design in that there is no button to clear all filters.  This combined with the fact that the color or intensity of the color does not change when a user adds a search criteria may cause confusion by the user as to which filters have been entered.</p>
<p>I would recommend the following be added to the webpage to improve the user experience.</p>
<ul>
  <li>Button to clear all filters.
  <li>User does not know the search criteria.  For example if the user were to input a current date the table would not populate leaving the user wondering whether the website is working.  To solve this an explanation could be added stating the range of dates; "Select a date beginning on or before MMDDYYYY and ending on or before MMDDYYYY".  Alternatively if a date is entered that is out of range a pop-up message could appear stating the acceptable date range.</li>
  <li>Intensity or color of the text should change when a user enters text into a search field.  This would allow the user to quickly see which cells include filters.</li>
  <li>Similiar to my recommendation for the date criteria error messages to other input fields where a selection does not appear within the data.  For example; if a user were to add a shape of "square" they should receive an error message stating that there are no shapes that match the selection.</li>
</ul>
  
