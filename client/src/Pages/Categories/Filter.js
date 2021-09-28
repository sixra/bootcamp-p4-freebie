import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterAds } from '../../Redux/Actions/AdsAction'
import "./Categories.scss"

export const Filter = () => {
  const dispatch = useDispatch();

  const ads = useSelector((state) => state.allAds.ads)
  const options = ads
    .map((e) => {
      return e.category
    })
  const removeDuplicates = Array.from(new Set(options)).map((e) => {
    return e
  })

  return (
    <div>
      <ul>
        <li onClick={() => dispatch(filterAds(ads, "All products"))}>All products</li>
        {removeDuplicates.map((e) => (
          <li onClick={() => dispatch(filterAds(ads, e))}>{e}</li>
        ))}
      </ul>
    </div>
  )
}