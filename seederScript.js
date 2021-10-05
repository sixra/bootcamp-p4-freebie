import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adsData from "./data/ads.js";
import ads from "./models/Item.js";

dotenv.config();
connectDB();

const importAdsData = async () => {
  try {
    await ads.deleteMany({});
    await ads.insertMany(adsData);

    console.log("Ads Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importAdsData();
