import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typical from 'react-typical';


const ControlledCarousel = () =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const customimage = {
    height: "650px"
  }

  return (
    <div>
        <h1 class="text-center my-4">
        <Typical
                className="text-5xl"
                steps={["Upcoming Recipe:", 3000]}
                loop={Infinity}
                wrapper="b"
              />
        </h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
         <img class="d-block w-100" style={customimage} src="https://imgs.search.brave.com/ZC_EQkajSMslAVNCnfcq3ILwmfeDOWIQP2cfre5fex8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MjI4MzU1Ny9waG90/by9jbGFzc2ljLXRo/YWktZm9vZC1kaXNo/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTlZME5CeWxu/ak5pTmw2RWtLNlhh/YkVUemozdEhuSE9R/V3dWay02aVVFX0k9" alt="" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="d-block w-100" style={customimage} src="https://imgs.search.brave.com/y9lqo7VFEmKaJ2oUfWfQuu6FmOkDkMtNfQCv1phQ9m0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NzA0MTE3L3Bob3Rv/L3Jlc3RhdXJhbnQt/cGxhdGVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1NaEZk/Tl9xVmd6b0hvdi1r/Z0Z4MHFXU1cwblpo/dDRsWlYxemluQzNF/YTQ0PQ" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="d-block w-100" style={customimage} src="https://imgs.search.brave.com/m5uimNhN8PWgJ-xav3Qvom0MQJOuba3GLlWrhgWiehw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMmYxUHEy/eThhcVVYV2dWU0No/MWNONC9kZmU1MWUy/MDRjYmVmOGZkZjA0/OWIzMWY4OWE2NWUw/NS9mb29kLWFuZC1k/cmluay1pbWFnZXMu/anBnP2ZpdD1maWxs/Jnc9NjAwJmg9NDAw" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;