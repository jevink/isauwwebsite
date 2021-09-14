import Container from 'react-bootstrap/Container'
import AboutUs from './AboutUs';
import PhotoGallery from './PhotoGallery';

function Home() {
    return (
        < Container >
            <AboutUs />

            {/* TO DO: pass in array of image sources as a property */}
            <PhotoGallery />
        </Container >
    )
}

export default Home;