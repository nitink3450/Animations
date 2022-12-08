import React from 'react'
import { Parallax } from 'react-parallax'
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import Header from '../Common/Header/Header';
const ParallaxBlur = () => {
    return (
        <>
            <Header title="Created using : react-parallax" />
            <Parallax strength={200} bgImage={img1}>
                <div className="content">
                    <div className="text-content">
                        Normal Image
                    </div>
                </div>
            </Parallax>
            <Parallax strength={300} bgImage={img2}>
                <div className="content">
                    <div className="text-content">
                        Normal Image
                    </div>
                </div>
            </Parallax>
            <Parallax strength={200} blur={{ min: -15, max: 15 }} bgImage={img3}>
                <div className="content">
                    <div className="text-content">
                        Blur Image
                    </div>
                </div>
            </Parallax>
            <Parallax strength={-200} bgImage={img4}>
                <div className="content">
                    <div className="text-content">
                        Reverse Image
                    </div>
                </div>
            </Parallax>
            <Parallax strength={-100} bgImage={img5}>
                <div className="content">
                    <div className="text-content">
                        Reverse Image
                    </div>
                </div>
            </Parallax>
            {/* <Parallax
                bgImage={img5}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
                <p style={{height:"100vh"}}>... Content</p>
            </Parallax> */}
            <div className="content"></div>
        </>
    )
}

export default ParallaxBlur