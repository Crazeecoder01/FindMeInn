import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    console.log(sw, ne)
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,

            },
            headers: {
                'x-rapidapi-key': 'f75b7591d4mshd443ea17925a88dp18d5ffjsna85a98516eb4',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    }
    catch (err) {
        console.log(err)
    }
}