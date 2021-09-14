import React from 'react';
import Photo from './Photo';

function PhotoGallery() {
    return (
        <section className="my-5" id="homegallery">

            {/* First row */}
            <div className="row">
                <div className="col-md-4 mb-3 fadeInLeft">
                    <Photo imageSource="https://picsum.photos/1000" />
                </div>
                <div className="col-md-4 col-6 mb-3 fadeInUp">
                    <Photo imageSource="https://picsum.photos/1100" />
                </div>
                <div className="col-md-4 col-6 mb-3 fadeInRight">
                    <Photo imageSource="https://picsum.photos/1200" />
                </div>
            </div>

            {/* Second row */}
            <div className="row">
                <div className="col-md-6 col-6 mb-3 rotateInUpLeft">
                    <Photo imageSource="https://picsum.photos/1300" />
                </div>
                <div className="col-md-6 col-6 mb-3 rotateInUpRight">
                    <Photo imageSource="https://picsum.photos/1400" />
                </div>
            </div>

        </section>
    );
}

export default PhotoGallery;