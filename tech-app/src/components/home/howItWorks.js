import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function HowItWorks() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
        <div id='howItWorks' className='block worksBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>How it works</h2>
                    <p>check our latest video to know how it works</p>

                </div>
                <div className='contentHolder'>
                    <Button  onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>
                    
                    <Modal 
                        title="Woocommerce Tutorial" 
                        open={isModalOpen} 
                        onCancel={handleCancel}
                        footer={null}
                        >
                    <iframe 
                        title="Woocommerce Tutorial" 
                        width="100%" 
                        height="350" 
                        src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
                        >

                    </iframe>
                    </Modal>
            </div>
        </div>
    );
};

export default HowItWorks;