import { TaskGroup } from "@types/types";

export const fetchData = async (): Promise<TaskGroup> => {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const data: TaskGroup = await response.json();
    return data;
  } catch (error) {
    // Handle errors here (e.g., log error, throw custom error, etc.)
    throw new Error("Failed to fetch data from the API");
  }
};
