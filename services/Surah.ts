import axios from "axios";

const base_url=process.env.NEXT_PUBLIC_BASE_URL;

export const getListSurah=async()=>{
    const res =await axios.get(`${base_url}/api/surat`);
    return res;
}

export const getDetailSurah=async(id:any)=>{
    const res =await axios.get(`${base_url}/api/surat/${id}`);
    return res;
}

export const getTafsirSurah=async(id:any)=>{
    const res =await axios.get(`${base_url}/api/tafsir/${id}`);
    return res;
}