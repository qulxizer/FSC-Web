import PocketBase from 'pocketbase';


// Change it to the ip address of the db
const pb = new PocketBase('http://10.0.128.59:8090');

export interface IWeather {
    tempreture: number;
    humidity: number;
}
export interface ITank {
    level: number;
}

export async function fetchTankLevel(): Promise<ITank | null> {
    const tank: ITank = {
        level:0
    }

    try {
        // Fetch the latest record from the 'tank' collection
        const records = await pb.collection('tank').getList(1, 1, {
            sort: '-created', // Sort by the 'created' field in descending order
        });

        const latestItem = records.items[0]; // Get the first item (latest)

        if (latestItem) {
            // Ensure you access the fields safely
            const level = latestItem.level || 0; // Default to 0 if not found
            tank.level = level;

            // You can now use the fields
            console.log(`Tank Level: ${tank.level}`);
        } else {
            console.log('No latest item found');
        }

        return tank;
    } catch (error) {
        console.warn('Error fetching latest item:', error);
        return null; // Return null if an error occurs
    }

}

export async function fetchWeather(): Promise<IWeather | null> {

    // Creating the interface with default values
    const weather: IWeather = {
        tempreture: 0,
        humidity: 0,
    };
    
    try {
        // Fetch the latest record from the 'weather' collection
        const records = await pb.collection('weather').getList(1, 1, {
            sort: '-created', // Sort by the 'created' field in descending order
        });

        const latestItem = records.items[0]; // Get the first item (latest)

        if (latestItem) {
            // Ensure you access the fields safely
            const temp = latestItem.temp || 0; // Default to 0 if not found
            weather.tempreture = temp;

            const humidity = latestItem.humidity || 0; // Default to 0 if not found
            weather.humidity = humidity;

            // You can now use the fields
            console.log(`Temperature: ${temp}`);
            console.log(`Humidity: ${humidity}`);
        } else {
            console.log('No latest item found');
        }

        return weather;
    } catch (error) {
        console.warn('Error fetching latest item:', error);
        return null; // Return null if an error occurs
    }
}