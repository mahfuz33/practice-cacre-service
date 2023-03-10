import React from 'react';
import Expert from '../Expert/Expert';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';

const experts = [
    {id:1, name:'Will Smith', img:expert1},
    {id:2, name:'Cris Rock', img:expert2},
    {id:3, name:'Drowing Rock', img:expert3},
    {id:4, name:'Messi vai', img:expert4},
    {id:5, name:'Ronaldo Bro', img:expert5},
    {id:6, name:'Stachy Johnson', img:expert6},
]


const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-primary text-center'>Our experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;