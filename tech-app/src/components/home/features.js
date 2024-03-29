import { Card, Col, Row } from "antd";

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

const {Meta} = Card;

function Features() {
    return (
        <div id="features" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Lorem ipsum dolor sit consectetur adipiscing elit ipsum dolor sit consectetur adipiscing</p>
                </div>
                <Row gutter={[16, 16]}>
                 <Col xs={{span: 24}} md={{span: 8}} sm={{span: 12}}>
                    <Card
                        hoverable
                        cover={<img alt="Modern Design" src={image1} />}
                    >
                        <Meta title="Modern Design"  />
                    </Card>
                 </Col>
                 <Col xs={{span: 24}} md={{span: 8}} sm={{span: 12}}>
                    <Card
                        hoverable
                        cover={<img alt="Clean and Elegant" src={image2} />}
                    >
                        <Meta title="Clean and Elegant"  />
                    </Card>
                 </Col>
                 <Col xs={{span: 24}} md={{span: 8}} sm={{span: 12}}>
                    <Card
                        hoverable
                        cover={<img alt="Great Support" src={image3} />}
                    >
                        <Meta title="Great Support"  />
                    </Card>
                 </Col>
                 <Col xs={{span: 24}} md={{span: 8}} sm={{span: 12}}>
                    <Card
                        hoverable
                        cover={<img alt="Easy to Customize" src={image4} />}
                    >
                        <Meta title="Easy to Customize"  />
                    </Card>
                 </Col>
                 <Col xs={{span: 24}} md={{span: 8}} sm={{span: 12}}>
                    <Card
                        hoverable
                        cover={<img alt="Unlimited Features" src={image5} />}
                    >
                        <Meta title="Unlimited Features"  />
                    </Card>
                 </Col>
                 <Col xs={{span: 24}} md={{span: 8}} sm={{span: 12}}>
                    <Card
                        hoverable
                        cover={<img alt="Advanced Options" src={image6} />}
                    >
                        <Meta title="Advanced Options" />
                    </Card>
                 </Col>
                </Row>
            </div>
        </div>
    );
};

export default Features;