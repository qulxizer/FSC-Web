import PocketBase from "pocketbase";

// Change it to the ip address of the db
const pb = new PocketBase("http://127.0.0.1:8090");

export interface IWeather {
  tempreture: number;
  humidity: number;
}
export interface ITank {
  level: number;
}

export interface IMoistureSensor {
  name: string;
  value: number;
  id: number;
}

export interface INpk {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

export interface IValve {
  state: boolean;
}

export async function postValveStatus(state: boolean): Promise<IValve | null> {
  const data = {
    state: state,
  };
  const valve: IValve = {
    state: false,
  };
  try {
    const record = await pb.collection("valve").create(data);
    valve.state = record.state;
    return valve;
  } catch (error) {
    console.warn("Error posting valve status:", error);
    return null; // Return null if an error occurs
  }
}

export async function getLatestValveStatus(): Promise<IValve | null> {
  const valve: IValve = {
    state: false,
  };
  try {
    const records = await pb.collection("valve").getList(1, 1, {
      sort: "-created", // Sort by creation date in descending order
    });
    const latestItem = records.items[0]; // Return the state of the latest record or null if no records exist
    if (latestItem) {
      const state = latestItem.state;
      valve.state = state;
      console.log(state);
      return valve;
    }
  } catch (error) {
    console.warn("Error getting the latest valve status:", error);
    return null; // Return null if an error occurs
  }
  return null;
}

export async function fetchMoistureSensor(
  id: number
): Promise<IMoistureSensor | null> {
  const moisture: IMoistureSensor = {
    name: "",
    value: 0,
    id: id,
  };

  try {
    // Fetch the latest record from the 'weather' collection
    const records = await pb.collection("moisture").getList(1, 1, {
      sort: "-created", // Sort by the 'created' field in descending order
      filter: `sensor_id="${id}"`,
    });

    const latestItem = records.items[0]; // Get the first item (latest)
    if (latestItem) {
      const value = latestItem.value || 0; // Default to 0 if not found
      moisture.value = value;

      const name = latestItem.name || 0; // Default to 0 if not found
      moisture.name = name;
    } else {
      console.log("No latest item found");
      return null;
    }

    return moisture;
  } catch (error) {
    console.warn("Error fetching latest item:", error);
    return null; // Return null if an error occurs
  }
}

export async function fetchTankLevel(): Promise<ITank | null> {
  const tank: ITank = {
    level: 0,
  };

  try {
    // Fetch the latest record from the 'tank' collection
    const records = await pb.collection("tank").getList(1, 1, {
      sort: "-created", // Sort by the 'created' field in descending order
    });

    const latestItem = records.items[0]; // Get the first item (latest)

    if (latestItem) {
      // Ensure you access the fields safely
      const level = latestItem.level || 0; // Default to 0 if not found
      tank.level = level;
    } else {
      console.log("No latest item found");
    }

    return tank;
  } catch (error) {
    console.warn("Error fetching latest item:", error);
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
    const records = await pb.collection("weather").getList(1, 1, {
      sort: "-created", // Sort by the 'created' field in descending order
    });

    const latestItem = records.items[0]; // Get the first item (latest)

    if (latestItem) {
      // Ensure you access the fields safely
      const temp = latestItem.temp || 0; // Default to 0 if not found
      weather.tempreture = temp;

      const humidity = latestItem.humidity || 0; // Default to 0 if not found
      weather.humidity = humidity;
    } else {
      console.log("No latest item found");
    }

    return weather;
  } catch (error) {
    console.warn("Error fetching latest item:", error);
    return null; // Return null if an error occurs
  }
}

export async function fetchNpk(): Promise<INpk | null> {
  const npk: INpk = {
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  };

  try {
    // Fetch the latest record from the 'weather' collection
    const records = await pb.collection("npk").getList(1, 1, {
      sort: "-created", // Sort by the 'created' field in descending order
    });

    const latestItem = records.items[0]; // Get the first item (latest)
    if (latestItem) {
      // Ensure you access the fields safely
      const nitrogen = latestItem.nitrogen || 0; // Default to 0 if not found
      npk.nitrogen = nitrogen;

      const potassium = latestItem.potassium || 0; // Default to 0 if not found
      npk.potassium = potassium;

      const phosphorus = latestItem.phosphorus || 0;
      npk.phosphorus = phosphorus;
    } else {
      console.log("No latest item found");
    }

    return npk;
  } catch (error) {
    console.warn("Error fetching latest item:", error);
    return null; // Return null if an error occurs
  }
}
