import { Button, Card, List } from "antd";

const data = [
    {
      title: 'Basic',
      content: [
        {
          price: '£29.99',
          space: '1 GB of space',
          user: '1 user',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Premium',
      content: [
        {
          price: '£59.99',
          space: '5 GB of space',
          user: '5 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
          price: '£99.99',
          space: 'Unlimited space',
          user: '15 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    }
  ];

function Pricing() {
    return (
        <div id='pricing' className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                        <h2>Choose a plan to fit your needs</h2>
                        <p>Suspendisse non neque convallis, et maximus mauris venenatis. Mauris fermentum, odio at convallis iaculis</p>
                </div>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                  }}
                    
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                        <Card title={item.title}>
                            <p className="large">{item.content[0].price}</p>
                            <p>{item.content[0].space}</p>
                            <p>{item.content[0].user}</p>
                            <p>{item.content[0].support}</p>
                            <p>{item.content[0].backup}</p>
                            <p>{item.content[0].access}</p>
                            <Button type="primary" size='large'><i class="fab fa-telegram-plane"></i>Get Started</Button>
                        </Card>
                        </List.Item>
                  )}
                />                
            </div>
        </div>
    );
};

export default Pricing;