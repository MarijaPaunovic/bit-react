import React from 'react';
import post from './posts';


const MainPost = () => (

    <>
        <div className="row">
            <div className="card">

                <ul>
                    {post.map((element) => (
                        <li key={element.id} className="card-title blue-grey darken-1">
                            <h3>{element.title}</h3>
                            <p>{element.body}</p>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>

    </>
);

export default MainPost;




