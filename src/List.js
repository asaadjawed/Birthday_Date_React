import React, { useState } from 'react'

export default function ListComponent({person}) {

  return (
    <div>
        {person.map((people)=> {
            const {id, name, age, image} = people
            return(
                <article key={id}>
                    <div className='main-box'>
                        <img src={image} width={100} height={100} className="imageTag" alt='' />
                        <div>
                            <h5>{name}</h5>
                            <h6>{age} years</h6>
                        </div>
                    </div>
                </article>
            )
        })}
    </div>
  )
}
