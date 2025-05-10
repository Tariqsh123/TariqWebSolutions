import AfterheaderRightIMG from '../assets/After-Header-right-img.png'

function WebAfterHeader() {
  return (
    <div>
        <div id="webSlider-main-container">
            <div id="webSlider-second-container">
              <div id="webSlider-second-left">
                <h4>What You Get ?</h4>
                <p><b> Custom Web Design:</b> Tailored websites that match your brand identity.</p>
                <p><b> Responsive Layouts:</b> Designs that look great on any device.</p>
                <p><b>SEO Optimization:</b>  Websites optimized for better search engine visibility.</p>
                <p><b> User-Friendly Interface:</b> Easy navigation for a seamless user experience.</p>
                <p><b>Fast Load Times:</b> Optimized websites for quick loading speed.</p>
                <p><b> Ongoing Support:</b> Assistance and updates to keep your site running smoothly.</p>
              </div>
              <div id="webSlider-second-right">
                <img src={AfterheaderRightIMG} alt="" />
              </div>
            </div>
        </div>      
    </div>
  )
}

export default WebAfterHeader