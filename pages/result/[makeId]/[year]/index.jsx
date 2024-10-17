import Car from '@/components/Car'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'

const Index = () => {
  const router = useRouter()
  const { makeId, year } = router.query
  const [cars, setCars] = useState([])

  function Loading() {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="car-bg p-5 rounded-lg">Loading..</span>
      </div>
    )
  }

  async function getCar(makeIdCar, yearCar) {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_KEY +
        `/GetModelsForMakeIdYear/makeId/${makeIdCar}/modelyear/${yearCar}?format=json`
    )

    if (res.ok) {
      const data = await res.json()
      setCars(data.Results)
    }
  }

  useEffect(() => {
    if (makeId && year) getCar(Number(makeId), Number(year))
  }, [router])

  return (
    <div className="flex flex-wrap p-10 gap-10 h-screen items-center justify-center">
      {cars?.map((car) => (
        <Suspense key={car.Make_ID} fallback={<Loading />}>
          <Car car={car} />
        </Suspense>
      ))}
    </div>
  )
}

export default Index
