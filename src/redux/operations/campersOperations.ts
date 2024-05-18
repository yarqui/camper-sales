import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { endpoints } from "../../config/axiosConfig";

const PER_PAGE: string = "4";
const basicSearchParams = new URLSearchParams({
  limit: PER_PAGE,
});

const fetchCampersAll = createAsyncThunk(
  "campers/fetchCampersAll",
  async (page: number, { rejectWithValue, signal }) => {
    const specificSearchParams = new URLSearchParams({
      page: page.toString(),
    });

    try {
      const res = await axios.get(
        `${endpoints.adverts}?${basicSearchParams}&${specificSearchParams}`,
        {
          signal,
        },
      );

      return res.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", (error as Error).message);
      } else {
        return rejectWithValue((error as Error).message);
      }
    }
  },
);

export { fetchCampersAll };
