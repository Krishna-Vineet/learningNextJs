import React from 'react'

const page = async ({params} : {params : {slug : string[]}}) => {
const {slug} = await params;
console.log(slug);

  return (
    <div>
        <ul>
            {
                slug.map((p : string) => (
                    <li key={p}>
                        {p}
                    </li>
                ))
            }
        </ul>
    </div>
)
}

export default page