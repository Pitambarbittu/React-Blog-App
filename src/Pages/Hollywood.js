import React, { useContext } from 'react'
import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Hollywood = () => {
    const [detail, setDetail] = useContext(store);
    console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Hollywood</h1>
            <h1 style={{ margin: "20px 0px 20px 38.5%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Hollywood" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                            />
                        ))
                    }
                   
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Hollywood" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                            />
                        ))
                    }
                     <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hollywood