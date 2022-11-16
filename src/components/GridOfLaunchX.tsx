import React, {useEffect, useState} from "react";
import axios from 'axios'
import {
    LaunchesWrapper,
} from "./GridStyle";
import Popup from './Popup'
import CartComponent from "./CartComponent";

const sizeArr = [26 , 33, 45]


const GridOfLaunchX = () => {
    const [launches, setLaunches] = useState<Record<string, number | string>[]>([])
    const [modalData, setModalData] = useState<Record<string, number| string | object>>()
    const [open, setOpen] = useState(false);



    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches')
            .then(res => {
               res.data.sort((a:any, b:any) => -a.date_local.localeCompare(b.date_local)).map( (item:any) => {
                    item.cartSize = sizeArr[Math.floor(Math.random()*sizeArr.length)]
                    return  item
                })
                setLaunches(res.data)
            })

    }, [])

    const popupGetData = (id: string) => {
      axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
          .then(res => {
                  res.data.date = new Date(res.data.date_local).toLocaleDateString()
              setModalData(res.data)
              setOpen(true)
          })
    }

    const sortFunction = (type: string) => {
        if( type === 'name') {
            const sorted = [...launches].sort((a, b) =>  `${a[type]}`.localeCompare(`${b[type]}`) )
            setLaunches(sorted)
            return
        }
        console.log(type,'type')
        const sorted = [...launches].sort((a, b) => +b[type] - +a[type]);
        console.log(sorted);
        setLaunches(sorted);
    }


    return(
        <>
            <select onChange={ (e) => sortFunction(e.target.value)}>
                <option value="name" >Rocket name</option>
                <option value="date_unix">Date</option>
                <option value="flight_number">Flight number</option>
            </select>
        <LaunchesWrapper>
            {launches && launches.map((item:any) =>
                (<CartComponent item={item} getOneElementData={() => popupGetData(item.id)} ></CartComponent>))}
        </LaunchesWrapper>
            <Popup open={open} modalData={modalData}  closePopup={() => setOpen(false)} />
        </>
    )
}

export default  GridOfLaunchX