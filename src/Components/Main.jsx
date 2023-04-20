import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

import axios from 'axios';

const Main=()=> {

    const [pokeData,setPokedada] =useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl]=useState();
    const [prevUrl, setPrevUrl]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res= await axios.get(url);
        // console.log(res.data.result);
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)

    }
    
    const getPokemon=async(res)=> {
        res.map(async(item)=>{
            const result=await axios.get(item.url)
            // console.log(result)
            setPokedada(state=>{
                state=[...state,result.data]
            })
        })
    }
    useEffect(()=> {
        pokeFun();
    },[url])

    return(
        <>
        <div className="container">
            <div className="left-content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> 
                <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <div className="right-content">
                <Pokeinfo />
            </div>
        </div>
        </>
    )
}

export default Main;
