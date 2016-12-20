var React = require('react');
var ReactDOM = require('react-dom');
//var Ajax = require('superagent');

var axios = require('axios');
//import {Ajax} from 'react-superagent';
//import ajax from 'superagent';
//var $ = require('jquery');

const App = () => {
        return (
                <div>
                        <PopulateDropDown />
                </div>
        )
}

class PopulateDropDown extends React.Component {
        constructor() {
                super();
                this.state = { data: null };
        }
        
        // componentDidMount() {
                 
        // }
        
        fetchCar() {
                axios.get('https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=kvytjhenbcuxked2g4r89zm9')
                  .then(
                    res => {
                      return this.setState({
                        data: res.data.makes
                      });
                    },
                    err => {
                      console.log(err)
                    }
                  );
          console.log(this.state);
        }
        
        render() {
                console.log({ state: this.state });
                return (
                        <div>
                                <h1>Hello</h1>
                                <button onClick={() => this.fetchCar()}>Click Me</button>
                                {this.state.data && (
                                  this.state.data.map((car, i) => (
                                    <li key={i}>{car.name}</li>
                                  ))
                                )}
                        </div>
                );
        }
}

// var PopulateDropDown = React.createClass({
//         getInitialState: function() {
//                 return {
//                         data: []
                        
//                 };
//         },
        
//         componentDidMount: function() {
//                 axios.get('https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=kvytjhenbcuxked2g4r89zm9')
//                         .then(function(res) {
//                                 console.log('resss.',res);
//                                 this.setState({
//                                         data: res.data.makes
                                        
//                                 },function(){
//                                         console.log(this.state)
//                                 })
                                
//                                 console.log(res.data);
//                         }).catch(function(error) {
//                                 console.log("error", error);
//                         })
//         },
        
//         //  componentWillMount: function(){
                
                
        
//         //  $.ajax({
//         //     url: 'https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=kvytjhenbcuxked2g4r89zm9',
//         //     method: 'GET',
//         //     success: function(result) {
//         //         this.setState({data: result});
//         //         console.log(result);

//         //     }.bind(this)

//         // componentWillMount: function() {

                
//         //  });
//         render: function() {
                
                        
//                 console.log('state',this.state);
//                 return (
//                         <div className="car-output">
                       
//                         </div>
                        
                        
                       

//                 );

//         }
        
                
     
                
        

// });



        
        

// function populateDropDown() {
//         /*
//         We would like to see if we can get an valid JSON result which we can parse in using AJAX
//         */
//         /* Update all the parameters for your API test*/
//         var result = $.ajax({
//                         /* update API end point */
//                         url: "https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=kvytjhenbcuxked2g4r89zm9",
//                         dataType: "json",
//                         /*set the call type GET / POST*/
//                         type: "GET",
//                 })
//                 /* if the call is successful (status 200 OK) show results */
//                 .done(function(result) {
//                         /* if the results are meeningful, we can just console.log them */
//                         console.log(result);
//                         var carDropDownHTMLOutput = "";
//                         carDropDownHTMLOutput += '<option value="">Select your car</option>';
//                         $.each(result.makes, function(key, value) {
//                                 carDropDownHTMLOutput += '<option value="' + value.name + '" style="">' + value.name + '</option>';
//                         });
//                         $('#displayCarMakes').append(carDropDownHTMLOutput);

//                 })
//                 /* if the call is NOT successful show errors */
//                 .fail(function(jqXHR, error, errorThrown) {
//                         console.log(jqXHR);
//                         console.log(error);
//                         console.log(errorThrown);
//                 });
// }


// function searchResults() {
//         var e = document.getElementById("displayCarMakes");
//         var searchTerm = e.options[e.selectedIndex].value;
//         /*
//         We would like to see if we can get an valid JSON result which we can parse in using AJAX
//         */
//         /* Update all the parameters for your API test*/
//         var result = $.ajax({
//                         /* update API end point */

//                         url: " https://api.edmunds.com/api/vehicle/v2/" + searchTerm + "/models?fmt=json&api_key=46bz75n7atxrv4w5tjfednfg",
//                         dataType: "jsonp",
//                         /*set the call type GET / POST*/
//                         type: "GET",
//                 })
//                 /* if the call is successful (status 200 OK) show results */
//                 .done(function(result) {
//                         /* if the results are meaningful, we can just console.log them */
//                         console.log(result.models);
//                         $('#gallery').empty();
//                         var carModels = ''; //first api call
//                         $.each(result.models, function(i, item) {
//                                 carModels += '<section class="item">';
//                                 carModels += '<a href="#' + item.id + '">';

//                                 //youtube search
//                                 $.getJSON("https://www.googleapis.com/youtube/v3/search", {
//                                                 "part": "snippet",
//                                                 "key": "AIzaSyCclIq-RF7zhCJ_JnoXJBLdGvz-v2nzCB0",
//                                                 "q": searchTerm + ' ' + item.name
//                                         },
//                                         function(data) {
//                                                 if (data.pageInfo.totalResults == 0) {
//                                                         alert("No videos found!");
//                                                 }
//                                                 // If there are no results it will just empty the list

//                                                 $.each(data.items, function(index, video) {
//                                                         // append li to ul
//                                                         console.log(data.items[0].snippet.thumbnails.medium.url);
//                                                         var videoURL = video.snippet.thumbnails.medium.url;


//                                                 });
//                                                 console.log(data.items[0].snippet.thumbnails.medium.url);

//                                                 //first api call
//                                                 var carModels = '<li class = "gallery"><img src= img/img1.jpg"' + data.items[0].snippet.thumbnails.medium.url + '"/> <p class="caption">' + searchTerm + ' ' + item.name + '</p> </li>';
//                                                 $('#gallery').append(carModels);
//                                                 //carModels += '<img src="' + data.items[0].snippet.thumbnails.medium.url + '"/> <br />';

//                                         }

//                                 );


//                                 //carModels += ' </li>';



//                         });

//                 })
//                 /* if the call is NOT successful show errors */
//                 .fail(function(jqXHR, error, errorThrown) {
//                         console.log(jqXHR);
//                         console.log(error);
//                         console.log(errorThrown);
//                 });
// }

// function searchResultsforSpecs() {
//         /*
//         We would like to see if we can get an valid JSON result which we can parse in using AJAX
//         */
//         /* Update all the parameters for your API test*/
//         //This shows results for first API Query
//         var result = $.ajax({
//                         /* shows engine specs for cars */
//                         url: "https://api.edmunds.com/api/vehicle/v2/engines/:id=json&api_key=kvytjhenbcuxked2g4r89zm9",
//                         dataType: "json",
//                         /*set the call type GET / POST*/
//                         type: "GET",
//                 })
//                 /* if the call is successful (status 200 OK) show results */
//                 .done(function(result) {
//                         /* if the results are meaningful, we can just console.log them */
//                         console.log(result);
//                         $.each(result.makes, function(key, value) {
//                                 var carMakes = '<option value="' + value.name + '">' + value.name + '</option>';
//                                 //$('#displayCarMakes').append(carMakes);
//                         });

//                 })
//                 /* if the call is NOT successful show errors */
//                 .fail(function(jqXHR, error, errorThrown) {
//                         console.log(jqXHR);
//                         console.log(error);
//                         console.log(errorThrown);
//                 });
// };





// $(document).ready(function() {
//         populateDropDown();
//         $('#searchCars').on('click', searchResults);
// });


ReactDOM.render(<App />, document.getElementById('app'));
