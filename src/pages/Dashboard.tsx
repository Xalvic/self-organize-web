import React, { useState, Fragment } from 'react';
import Camera from '../components/Camera/Camera';
import './Dashboard.scss';

const Dashboard = (props: any) => {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [cardImage, setCardImage] = useState();

    return (
        <Fragment>

            <div className="main-container">
                
                <div className="main-layout">
                    
                    {isCameraOpen && (
                        <Camera
                            onCapture={blob => setCardImage(blob)}
                            onClear={() => setCardImage(undefined)}
                        />
                        )}

                        {cardImage && (
                        <div>
                            <h2>Preview</h2>
                            <img src={cardImage && URL.createObjectURL(cardImage)} alt="preview" />
                        </div>
                        )}

                    <div className="footer">
                        <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
                        <button
                            onClick={() => {
                            setIsCameraOpen(false);
                            setCardImage(undefined);
                            }}
                        >
                            Close Camera
                        </button>
                    </div>

                </div>
                <div className="bottom-layout">

                    Bottom Layout

                </div>

            </div>

        </Fragment>
    )
}

export default Dashboard;