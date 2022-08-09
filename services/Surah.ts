import axios from "axios";

const base_url=process.env.NEXT_PUBLIC_BASE_URL;

export const getListSurah=async()=>{
    const res =await axios.get(`${base_url}/api/surat`);
    return res;
}

export const getDetailSurah=()=>{
    return null;
}

export const getTafsirSurah=()=>{
    return null;
}