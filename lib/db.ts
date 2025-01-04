// import PocketBase from 'pocketbase';


// Change it to the ip address of the db
// const pb = new PocketBase('http://10.0.128.51:8090');

interface IWeather {
    tempreture: number;
    humidity: number;
    windSpeed: number;
}
import PocketBase, { RecordService } from 'pocketbase'

interface Task {
    id: string;
    name: string;
}

interface Post {
    id: string;
    title: string;
    active: boolean;
}

interface TypedPocketBase extends PocketBase {
    collection(idOrName: string): RecordService // default fallback for any other collection
    collection(idOrName: 'tasks'): RecordService<Task>
    collection(idOrName: 'posts'): RecordService<Post>
}

const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;
async function fetchWeather(): Promise<IWeather | null> {
    const weather: IWeather = {
        tempreture: 0,
        humidity: 0,
        windSpeed: 0,
    };
    
    try {
        // Fetch the latest record from the 'weather' collection
        const records = await pb.collection('').getList(1, 1, {
            sort: '-created', // Sort by the 'created' field in descending order
        });

        const latestItem = records.items[0]; // Get the first item (latest)

        if (latestItem) {
            // Ensure you access the fields safely
            const temp = latestItem.temp || 0; // Default to 0 if not found
            weather.tempreture = temp;

            const humidity = latestItem.humidity || 0; // Default to 0 if not found
            weather.humidity = humidity;

            const windSpeed = latestItem.windSpeed || 0; // Default to 0 if not found
            weather.windSpeed = windSpeed;

            // You can now use the fields
            console.log(`Temperature: ${temp}`);
            console.log(`Humidity: ${humidity}`);
            console.log(`Wind Speed: ${windSpeed}`);
        } else {
            console.log('No latest item found');
        }

        return weather;
    } catch (error) {
        console.error('Error fetching latest item:', error);
        return null; // Return null if an error occurs
    }
}
export { fetchWeather };
export type { IWeather };
