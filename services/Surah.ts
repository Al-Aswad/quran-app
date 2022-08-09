import axios from "axios";

export const getListSurah=async()=>{
    const res =await axios.get("https://equran.id/api/surat");
    return res;
}

export const getDetailSurah=()=>{
    return null;
}

export const getTafsirSurah=()=>{
    return null;
}