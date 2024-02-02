import { Col, Row } from "antd";

const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'High Performance',
      content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Flat Design',
      content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'Simplified Workflow',
      content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    },
  ]
  

function About() {
    return (
        <div id='about' className='block aboutBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>About Us</h2>
                    <p> Suspendisse potenti. Duis sed dolor semper, ultricies eros at, dapibus urna</p>
                </div>
                <div className='contentHolder'>
                    <p>
                    Aenean augue turpis, rhoncus id tincidunt vitae, tincidunt sed libero. Pellentesque est nisl, condimentum vehicula ex ac, porta malesuada metus. 
                    Nam lacinia sapien nulla, sit amet hendrerit lorem scelerisque sit amet. Suspendisse potenti. Duis sed dolor semper, 
                    ultricies eros at, dapibus urna. Quisque magna massa, dictum in dapibus et, laoreet et risus. In aliquet mauris vitae metus rhoncus, a gravida tellus finibus. 
                    Aliquam malesuada eleifend ante in volutpat. Nulla tempor, dui sed auctor rutrum, felis elit ullamcorper lorem, vel semper tortor metus sit amet libero.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                 {
                    items.map(item => {
                        return(
                            
                                <Col md={{span: 8}}  key={item.key}>
                                    <div className="content">
                                        <div className="icon">
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                    
                                    
                                </Col>
                            
                                                                                
                        );
                    })
                 }
                </Row>

            </div>
        </div>
    );
};

export default About;