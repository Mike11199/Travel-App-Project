import axios from 'axios';


//Axios is a promise-based HTTP client for node.js and the browser (isomorphic = run in browser and nodejs with same codebase)

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


//JavaScript Axios delete method GET as it's automatically set to that anyway; saved URL in a variable above

const options = {

  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'a715042a52mshcd3c997fe7d6dc1p19b373jsn80e25ef60af9'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});




// If code from 'try' fails, it is redirected to the catch error block
const getPlacesData = async () => {
    try{
        const response = await axios.get();

    } catch (error) {

    }


}