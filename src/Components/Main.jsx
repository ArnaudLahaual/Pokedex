import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

import axios from 'axios';

const Main=()=> {

    const [pokeData,setPokedata] =useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl]=useState();
    const [prevUrl, setPrevUrl]=useState();
    const [pokeDex,setPoKeDex]=useState();

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
            setPokedata(state=>{
                state=[...state,result.data]
                return state;
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
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPoKeDex(poke)}/>
                <div className="btn-group">
                    {
                        prevUrl && <button onClick={()=>{
                            setPokedata([])
                            setUrl(prevUrl)
                        }}>Previous</button>
                        
                    }

                    <button onClick={()=>{
                        setUrl(nextUrl)
                        setPokedata([])
                    }}>Next</button>
                </div>
            </div>
            <div className="right-content">
                <Pokeinfo data={pokeDex}/>
            </div>
        </div>
        </>
    )
}

export default Main;
