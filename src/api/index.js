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

  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'a715042a52mshcd3c997fe7d6dc1p19b373jsn80e25ef60af9'
  }
};


//This is the function to get data from the API.  it uses the URL and options parameters and logs in the console if there is an error
// If code from 'try' fails, it is redirected to the catch error block
export const getPlacesData = async () => {
    try{
        const { data: { data } } = await axios.get(URL, options);


        return data;
    } catch (error) {
        console.log(error)
    }


}