import { Button, Row, Col } from 'antd';
// import { PhoneOutlined } from '@ant-design/icons';
import WebHeaderGif from '../assets/headerbgGif.gif';

const WebHeader = () => {
  return (
    <div id="web-header-main" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div id="web-header-second" style={{ padding: '0' }}>
        <Row gutter={[40, 40]} align="middle" justify="center">
          {/* Left Section */}
          <Col xs={24} md={12}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              color: '#29043D',
              lineHeight: '1.2' 
            }}>
              COMPLETE WEB DESIGN  & DEVELOPMENT
            </h1>
            <p style={{ 
              marginTop: '20px', 
              fontSize: '1.125rem', 
              fontWeight: '600',
              color: '#000' 
            }}>
              Say goodbye to sleepless nights over counterproductive communications between service providers, 
              and no more overbilling-related nightmares for services you’re not sure you need but you’re sure you have to pay for.
            </p>
            <div style={{ 
              marginTop: '30px', 
              display: 'flex', 
              gap: '16px', 
              flexWrap: 'wrap',
              justifyContent: 'left' 
            }}>
              <Button 
                size="large" 
                style={{ 
                  background: '#29043D', 
                  border: 'none', 
                  color: '#fff', 
                  borderRadius: '20px',
                  padding: '0 30px',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 4px 12px rgba(82, 37, 70, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                Book a Free Consultation
              </Button>
            </div>
          </Col>

          {/* Right Section */}
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <img 
              src={WebHeaderGif}
              alt="Web Design Illustration" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                objectFit: 'cover',
                borderRadius: '8px' 
              }} 
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WebHeader;
