import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <div className='Card' style={{ width: '18rem' }}>
                <img src={img} className='Card.Img' variant="top" />
                <div className='Card.Body' >
                    <h5 className='Card.Title'>{name}</h5>
                    <p className='Card.Text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a href='#' className='btn btn-primary'>Go somewhere</a>
                </div>
            </div>
        </div>

    )
}
export default Expert;